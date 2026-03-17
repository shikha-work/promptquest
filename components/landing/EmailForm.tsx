'use client'

import { useState, FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface EmailFormProps {
  formNumber: 1 | 2
}

export function EmailForm({ formNumber }: EmailFormProps) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const isValidEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const isLikelyRealDomain = (email: string) => {
    const domain = email.split('@')[1]?.toLowerCase() ?? ''
    if (!domain || !domain.includes('.')) return false

    const [name, ...rest] = domain.split('.')
    const tld = rest.join('.')

    // common TLD set; fallback for custom/rare TLDs
    const knownTLDs = new Set(['com', 'net', 'org', 'io', 'co', 'gov', 'edu', 'us', 'uk', 'ca', 'de', 'fr', 'in', 'app'])
    if (!knownTLDs.has(tld) && !knownTLDs.has(rest.pop() ?? '')) {
      // Allow non-known TLDs sometimes, but still apply heuristics
    }

    if (name.length < 2 || name.length > 63) return false
    if (!/^[a-z0-9\-]+$/.test(name)) return false
    if (name.startsWith('-') || name.endsWith('-')) return false

    const cleaned = name.replace(/-/g, '')
    const vowelCount = (cleaned.match(/[aeiou]/g) || []).length
    const consonantCount = (cleaned.match(/[bcdfghjklmnpqrstvwxyz]/g) || []).length

    // likely random gibberish examples (very long consonant runs, no vowels)
    if (vowelCount === 0 && cleaned.length > 7) return false
    if (consonantCount > 0 && consonantCount / Math.max(1, cleaned.length) > 0.85) return false
    if (/(?:dhkjhdkjdh|kjhdkj|asdfgh)/.test(name)) return false

    const longConsonants = cleaned.match(/(?:[bcdfghjklmnpqrstvwxyz]{6,})/)
    if (longConsonants) return false

    return true
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.')
      return
    }

    if (!isLikelyRealDomain(email)) {
      setError('Please enter a valid email address.')
      return
    }

    setLoading(true)

    try {
      // const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${process.env.NEXT_PUBLIC_MAILERLITE_API_KEY}`
      //   },
      //   body: JSON.stringify({
      //     email,
      //     fields: {
      //       source: 'PromptQuest Landing Page',
      //       form_location: formNumber === 1 ? 'Hero Section' : 'Bottom CTA'
      //     }
      //   })
      // })
      const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_MAILERLITE_API_KEY}`
        },
        body: JSON.stringify({
          email: email,
          groups: ['180249966973813962'], // Group id of group on mailerlite
          fields: {
            source: 'PromptQuest Landing Page',
            form_location: 'Hero Section'
          }
        })
      });

      if (response.ok) {
        setSuccess(true)
        setEmail('')
      } else {
        const data = await response.json()
        if (data.message?.includes('already exists')) {
          setError("You're already on the list!")
        } else {
          setError('Something went wrong. Please try again.')
        }
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="max-w-md mx-auto p-6 bg-success/20 border-2 border-success rounded-xl animate-in fade-in">
        <p className="text-white font-semibold text-center">
          🎉 You're on the list! Check your email for early access details.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
          className="flex-1 h-14 px-6 text-base text-black bg-white/95 border-2 border-white/30 focus:border-success"
        />
        <Button
          type="submit"
          disabled={loading}
          className="h-14 px-8 bg-[#00C36C] hover:bg-[#00994F] text-white font-bold"
        >
          {loading ? 'Submitting...' : formNumber === 1 ? 'Join Waitlist(Free)' : 'Get Access(Free)'}
        </Button>
      </div>
      {error && <p className="mt-3 text-sm text-warning text-center">{error}</p>}
    </form>
  )
}
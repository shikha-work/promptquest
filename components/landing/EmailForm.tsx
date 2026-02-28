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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_MAILERLITE_API_KEY}`
        },
        body: JSON.stringify({
          email,
          fields: {
            source: 'PromptQuest Landing Page',
            form_location: formNumber === 1 ? 'Hero Section' : 'Bottom CTA'
          }
        })
      })

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
      <div className="max-w-md mx-auto p-6 bg-[#22C55E]/20 border-2 border-[#22C55E] rounded-xl animate-in fade-in duration-500">
        <p className="text-white font-semibold text-center text-lg">
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
          className="flex-1 h-14 px-6 text-base bg-white/95 text-gray-900 border-2 border-white/30 rounded-xl focus:border-[#22C55E] focus:ring-4 focus:ring-[#22C55E]/20 transition-all placeholder:text-gray-500"
        />
        <Button
          type="submit"
          disabled={loading}
          className="h-14 px-8 bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold text-base rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
        >
          {loading ? 'Submitting...' : formNumber === 1 ? 'Join Waitlist' : 'Get Access'}
        </Button>
      </div>
      {error && (
        <p className="mt-3 text-sm text-[#FBBF24] text-center font-medium">
          {error}
        </p>
      )}
    </form>
  )
}
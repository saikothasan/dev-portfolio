"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import emailjs from "@emailjs/browser"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "YOUR_USER_ID",
      )
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-black py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-2">Let's work together!</h2>
          <p className="text-gray-400">I'm available for freelance work. Let's talk about your project.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-gray-900/50 border-gray-800 text-center">
            <Phone className="w-6 h-6 text-purple-500 mx-auto mb-4" />
            <h3 className="font-semibold text-white mb-2">Phone</h3>
            <p className="text-gray-400">+01 123 456 789</p>
          </Card>
          <Card className="p-6 bg-gray-900/50 border-gray-800 text-center">
            <Mail className="w-6 h-6 text-purple-500 mx-auto mb-4" />
            <h3 className="font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-400">hello@example.com</p>
          </Card>
          <Card className="p-6 bg-gray-900/50 border-gray-800 text-center">
            <MapPin className="w-6 h-6 text-purple-500 mx-auto mb-4" />
            <h3 className="font-semibold text-white mb-2">Address</h3>
            <p className="text-gray-400">123 Street Name, City, Country</p>
          </Card>
        </div>
        <Card className="p-8 bg-gray-900/50 border-gray-800">
          <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Your Name</label>
                <Input
                  className="bg-gray-800 border-gray-700 text-white"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Your Email</label>
                <Input
                  className="bg-gray-800 border-gray-700 text-white"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Subject</label>
              <Input
                className="bg-gray-800 border-gray-700 text-white"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Your Message</label>
              <Textarea
                className="bg-gray-800 border-gray-700 text-white min-h-[150px]"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <Button
              className="bg-purple-500 hover:bg-purple-600 text-white w-full"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
            {submitStatus === "success" && <p className="text-green-500">Message sent successfully!</p>}
            {submitStatus === "error" && <p className="text-red-500">Error sending message. Please try again.</p>}
          </form>
        </Card>
      </div>
    </div>
  )
}


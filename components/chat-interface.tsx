'use client'

import { useState } from "react"
import { MessageBubble } from "./message-bubble"
import { Button } from "@/components/ui/button"
import { responses } from "../data/responses"
import type { Message } from "../types/message"

const initialMessages: Message[] = [
  { id: "1", text: "👋 I'm John" },
  { id: "2", text: "product manager, web tinkerer based in fl" },
  { id: "3", text: "what else would you like to know?" },
]

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)

  const handlePromptClick = (type: keyof typeof responses) => {
    // Add user question
    const question = type === 'about' 
      ? "Tell me about yourself"
      : type === 'sideProjects'
      ? "What side projects have you worked on?"
      : type === 'contact'
      ? "How can I contact you?"
      : "What's your work experience?"

    setMessages(prev => [
      ...prev,
      { id: Date.now().toString(), text: question, isUser: true }
    ])

    // Add responses with slight delay to simulate typing
    setTimeout(() => {
      responses[type].forEach((response, index) => {
        setTimeout(() => {
          setMessages(prev => [
            ...prev,
            { id: Date.now().toString() + index, text: response }
          ])
        }, index * 500)
      })
    }, 500)
  }

  return (
    <div className="flex h-screen flex-col bg-white">
      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            text={message.text}
            isUser={message.isUser}
          />
        ))}
      </div>
      <div className="border-t p-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          <Button
            variant="outline"
            className="flex-shrink-0 rounded-full"
            onClick={() => handlePromptClick("about")}
          >
            About
          </Button>
          <Button
            variant="outline"
            className="flex-shrink-0 rounded-full"
            onClick={() => handlePromptClick("sideProjects")}
          >
            Side Projects
          </Button>
          <Button
            variant="outline"
            className="flex-shrink-0 rounded-full"
            onClick={() => handlePromptClick("workExperience")}
          >
            Work Experience
          </Button>
          <Button
            variant="outline"
            className="flex-shrink-0 rounded-full"
            onClick={() => handlePromptClick("contact")}
          >
            Contact
          </Button>
        </div>
      </div>
    </div>
  )
}


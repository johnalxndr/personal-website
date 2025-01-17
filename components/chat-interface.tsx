'use client'

import { useState } from "react"
import { MessageBubble } from "./message-bubble"
import { Button } from "@/components/ui/button"
import { responses } from "../data/responses"
import type { Message } from "../types/message"
import { LoadingBubble } from "@/components/loading-bubble"
import { useAutoScroll } from "@/lib/hooks/use-auto-scroll"

const initialMessages: Message[] = [
  { id: "1", text: "👋 I'm John" },
  { id: "2", text: "product manager, web tinkerer based in fl" },
  { id: "3", text: "what else would you like to know?" },
]

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [isLoading, setIsLoading] = useState(false)
  
  const { scrollRef } = useAutoScroll({
    offset: 20,
    smooth: true,
    content: messages.map(m => m.text).join('')
  })

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

    // Show loading state
    setIsLoading(true)

    // Add responses with slight delay to simulate typing
    setTimeout(() => {
      responses[type].forEach((response, index) => {
        setTimeout(() => {
          if (index === 0) setIsLoading(false)
          setMessages(prev => [
            ...prev,
            { id: Date.now().toString() + index, text: response }
          ])
        }, index * 500)
      })
    }, 500)
  }

  return (
    <div className="fixed inset-0 flex flex-col bg-white">
      <div 
        ref={scrollRef}
        className="flex-1 space-y-4 overflow-y-auto p-4 pb-20"
      >
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            text={message.text}
            isUser={message.isUser}
          />
        ))}
        {isLoading && <LoadingBubble />}
      </div>
      <div className="fixed bottom-0 left-0 right-0 border-t bg-white p-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          <Button
            variant="outline"
            className="flex-shrink-0 rounded-full"
            onClick={() => handlePromptClick("about")}
          >
            about
          </Button>
          <Button
            variant="outline"
            className="flex-shrink-0 rounded-full"
            onClick={() => handlePromptClick("sideProjects")}
          >
            side projects
          </Button>
          <Button
            variant="outline"
            className="flex-shrink-0 rounded-full"
            onClick={() => handlePromptClick("workExperience")}
          >
            work
          </Button>
          <Button
            variant="outline"
            className="flex-shrink-0 rounded-full"
            onClick={() => handlePromptClick("contact")}
          >
            contact
          </Button>
        </div>
      </div>
    </div>
  )
}


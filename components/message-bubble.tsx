interface MessageBubbleProps {
  text: string
  isUser?: boolean
}

export function MessageBubble({ text, isUser = false }: MessageBubbleProps) {
  return (
    <div className="relative">
      <div
        className={`relative max-w-[80%] px-4 py-2 text-base
          ${
            isUser
              ? "ml-auto bg-blue-500 text-white [&_a]:text-white [&_a]:underline [&_a]:opacity-90 hover:[&_a]:opacity-100 rounded-t-3xl rounded-l-3xl rounded-br-md"
              : "mr-auto bg-gray-100 text-gray-900 [&_a]:text-blue-600 [&_a]:underline hover:[&_a]:text-blue-800 rounded-t-3xl rounded-r-3xl rounded-bl-md"
          }
        `}
      >
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </div>
      <div
        className={`absolute bottom-0 h-4 w-4
          ${
            isUser
              ? "right-0 translate-x-[0.5px] bg-blue-500 [clip-path:path('M0,0 h20 v20 z')]"
              : "left-0 -translate-x-[0.5px] bg-gray-100 [clip-path:path('M20,0 h-20 v20 z')]"
          }
        `}
      />
    </div>
  )
}


interface MessageBubbleProps {
  text: string
  isUser?: boolean
}

export function MessageBubble({ text, isUser = false }: MessageBubbleProps) {
  return (
    <div
      className={`max-w-[80%] rounded-3xl px-4 py-2 text-base ${
        isUser
          ? "ml-auto bg-blue-500 text-white [&_a]:text-white [&_a]:underline [&_a]:opacity-90 hover:[&_a]:opacity-100"
          : "mr-auto bg-gray-100 text-gray-900 [&_a]:text-blue-600 [&_a]:underline hover:[&_a]:text-blue-800"
      }`}
    >
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  )
}


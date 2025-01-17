

export function LoadingBubble() {
  return (
    <div className="relative mr-auto">
      <div className="flex max-w-[15%] items-center space-x-2 rounded-t-3xl rounded-r-3xl rounded-bl-md bg-gray-100 px-4 py-4">
        <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]" />
        <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]" />
        <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400" />
      </div>
      <div className="absolute bottom-0 left-0 -translate-x-[0.5px] h-4 w-4 bg-gray-100 [clip-path:path('M20,0_h-20_v20_z')]" />
    </div>
  )
} 
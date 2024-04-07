export default function Tooltip({
  message,
  children,
}: {
  message: string
  children: React.ReactNode
}) {
  return (
    <div className="group relative flex">
      {children}
      <span className="z-20 absolute top-8 scale-0 transition-all rounded text-white opacity-85 bg-text p-2 text-xs group-hover:scale-100 text-nowrap">
        {message}
      </span>
    </div>
  )
}

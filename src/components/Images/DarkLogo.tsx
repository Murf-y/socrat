type DarkLogoProps = {
  className?: string
}

export default function DarkLogo({ className }: DarkLogoProps) {
  return (
    <svg
      className={className ?? `w-36 h-8`}
      viewBox="0 0 158 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M72.4606 27.4701H80.3496V12.0352H82.7505V27.4701H96.1274L92.6974 23.4913C92.6974 23.4913 96.4704 20.2671 96.4704 14.4264C96.4704 8.58562 91.3255 2.77427 84.1225 2.77427C76.9196 2.77427 72.4606 9.48721 72.4606 14.4264V27.4701Z"
        fill="#262626"
      />
      <path
        d="M53.2528 15.1222C53.2528 8.30261 47.7245 2.77427 40.9049 2.77427V27.4701C47.7245 27.4701 53.2528 21.9417 53.2528 15.1222Z"
        fill="#262626"
      />
      <path
        d="M26.499 15.1222C26.499 21.9417 32.0274 27.4701 38.8469 27.4701V2.77427C32.0274 2.77427 26.499 8.30261 26.499 15.1222Z"
        fill="#262626"
      />
      <path
        d="M56.6828 15.1222C56.6828 21.9417 62.2111 27.4701 69.0307 27.4701V2.77427C62.2111 2.77427 56.6828 8.30261 56.6828 15.1222Z"
        fill="#262626"
      />
      <path
        d="M3.6746 3.61661C-1.14756 8.43877 -1.14756 16.257 3.6746 21.0792L21.1371 3.61661C16.315 -1.20554 8.49675 -1.20554 3.6746 3.61661Z"
        fill="#262626"
      />
      <path
        d="M19.0792 26.5671C23.9013 21.745 23.9013 13.9267 19.0792 9.10458L1.61661 26.5671C6.43876 31.3893 14.257 31.3893 19.0792 26.5671Z"
        fill="#262626"
      />
      <path d="M136.944 17.1801H143.804V27.4701H136.944V17.1801Z" fill="#262626" />
      <path
        d="M157.867 4.83225H136.258C132.828 4.83225 128.026 8.26222 128.026 10.6632V18.8951C128.026 19.2381 128.369 19.9241 128.712 19.9241C129.055 19.9241 132.142 15.1222 135.572 15.1222H149.635C153.751 15.1222 158.896 4.83225 157.867 4.83225Z"
        fill="#262626"
      />
      <path
        d="M112.248 2.77427C105.429 2.77427 99.9004 8.30261 99.9004 15.1222H124.596C124.596 8.30261 119.068 2.77427 112.248 2.77427Z"
        fill="#262626"
      />
      <path d="M99.9004 17.1801H106.76V27.4701H99.9004V17.1801Z" fill="#262626" />
      <path d="M117.736 17.1801H124.596V27.4701H117.736V17.1801Z" fill="#262626" />
      <path d="M104.702 22.6681V17.1801H120.48V22.6681H104.702Z" fill="#262626" />
    </svg>
  )
}

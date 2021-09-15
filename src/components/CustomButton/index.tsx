import React from 'react'

type CustomSVGProps = {
  border: string
  color: string
  value: string
  height: string
  onClick: () => void
  radius: string
  width: string
}
const Button = ({
  border,
  color,
  value,
  height,
  onClick,
  radius,
  width,
}: CustomSVGProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width,
      }}
    >
      {/* Hello */}
      {value}
    </button>
  )
}

export default Button

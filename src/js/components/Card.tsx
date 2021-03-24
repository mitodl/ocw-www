import React from "react"

const getClassName = (className: string): string => {
  const classes = ["card", className || ""]
  return classes
    .join(" ")
    .trim()
    .replace(/\s+/g, " ")
}

interface Props {
  className: string
  title: string
  onClick: (e: MouseEvent) => void
  children: React.ReactNode
}

export default function Card(props) {
  const { children, className, title, onClick } = props

  return (
    <div className={getClassName(className)} onClick={onClick || null}>
      <div className="card-contents">
        {title ? <div className="title">{title}</div> : null}
        {children}
      </div>
    </div>
  )
}

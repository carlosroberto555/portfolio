import { useEffect, useState } from "react"
import BlinkingPipe from "./BlinkingPipe"

interface Props {
  children: string
  tag?: any
}

const TextAutoType: React.FC<Props> = ({ children, tag }) => {
  const [ text, setText] = useState('')
  const complete = text.length === children.length
  const Tag = tag || 'p'

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text.length < children.length) {
        setText(prev => prev + children.charAt(prev.length))
      } else {
        clearTimeout(timeout)
      }
    }, 100)

    return () => clearTimeout(timeout)
  }, [text])
  
  return (
    <Tag>
      {text}
      <BlinkingPipe complete={complete} />
    </Tag>
  );
}

export default TextAutoType;
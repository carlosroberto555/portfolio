function BlinkingPipe ({complete}) {
  return <span className={`blink ${complete ? 'blinking' : ''}`}>|</span>
}

export default BlinkingPipe;
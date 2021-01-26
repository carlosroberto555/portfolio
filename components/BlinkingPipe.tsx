import styles from './BlinkingPipe.module.css'

function BlinkingPipe ({complete}) {
  return <span className={[styles.blink, complete && styles.blinking].join(' ')}>|</span>
}

export default BlinkingPipe;
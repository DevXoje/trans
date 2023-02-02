import styles from '@/styles/MenuIcon.module.scss'
import { useRef } from 'react'

const MenuIcon = ({ toggleChange }: { toggleChange: boolean }) => {
  const wrapper = useRef(null)

  const handleClick = () => {
    if (wrapper.current) {
      const target = wrapper.current as HTMLElement
      const barChildren = target.querySelectorAll('.bar')
      barChildren.forEach(child =>
        child.classList.toggle('change')
      )
      console.log(barChildren)
    }
  }
  if (toggleChange) {
    handleClick()
  }

  return (
    <>
      <div className={styles.menu_icon} ref={wrapper}>
        <div className={`${styles.bar} ${styles.bar1}`} />
        <div className={`${styles.bar} ${styles.bar2}`} />
        <div className={`${styles.bar} ${styles.bar3}`} />
      </div>
    </>
  )
}
export default MenuIcon

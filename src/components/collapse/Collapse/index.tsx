import React from 'react'
import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from './index.module.scss'

interface CollapseProps {
  collapsedLabel: string
  expandedLabel: string
  children: React.ReactNode
}

export default function Collapse({
  collapsedLabel,
  expandedLabel,
  children,
}: CollapseProps) {
  const [isCollapsed, setCollapsed] = useState(true)

  const collapseHandle = () => {
    setCollapsed(!isCollapsed)
  }

  return (
    <div className={styles.collapse}>
      <button className={styles.collapse__btn} onClick={collapseHandle}>
        {isCollapsed ? collapsedLabel : expandedLabel}
      </button>
      <CSSTransition
        in={!isCollapsed}
        timeout={300}
        classNames={{
          enter: styles['expand-enter'],
          enterActive: styles['expand-enter-active'],
          exit: styles['expand-exit'],
          exitActive: styles['expand-exit-active'],
        }}
        unmountOnExit
      >
        <div className={styles.collapse__content}>
          <p>{children}</p>
        </div>
      </CSSTransition>
    </div>
  )
}

Collapse.defaultProps = {
  collapsedLabel: 'Развернуть',
  expandedLabel: 'Свернуть',
}

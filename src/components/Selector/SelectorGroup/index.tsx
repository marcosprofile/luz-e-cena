import { SelectorGroupProps } from '../../../types/selector.types'
import styles from './SelectorGroup.module.css'


const SelectorGroup = ({ icon, children, ...rest }: SelectorGroupProps) => {
  return (
    <div className={styles.container}>
      {icon && <div className={styles.icone}>{icon}</div>}
      <select className={styles.selector} {...rest}>{children}</select>
    </div>
  )
}

export default SelectorGroup
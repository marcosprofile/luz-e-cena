import styles from './Link.module.css'
import classNames from 'classnames'
import { LinkProps } from '../../types/link.types'


const Link = ({ children, variant = 'default', ...rest }: LinkProps) => {
  const classMap = {
    default: styles.default,
    branco: styles.branco
  }

  return (
    <a className={classNames(styles.link, classMap[variant])} {...rest}>
      { children }
    </a>
  )
}

export default Link
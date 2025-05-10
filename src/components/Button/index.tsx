import classNames from 'classnames'
import styles from './Button.module.css'
import { ButtonProps } from '../../types/button.types'


const Button = ({ children, variant = 'default', ...rest }: ButtonProps) => {
  const classMap = {
    default: styles.default,
    icon: styles.icon
  }

  return (
    <button className={classNames(styles.botao, classMap[variant])} {...rest}>
      {children}
    </button>
  )
}

export default Button
import { FieldsetProps } from '../../types/fieldset.types'
import styles from './Fieldset.module.css'


const Fieldset = ({children, variant = "primary"}: FieldsetProps) => {
  return (
    <fieldset
      className={`${styles.inputWrapper} ${
        variant === "primary" ? styles.primary : styles.secondary
      }`}
    >
      {children}
    </fieldset>
  )
}

export default Fieldset
import Button from '../Button'
import Fieldset from '../Fieldset'
import InputText from '../InputText'
import styles from './Newsletter.module.css'

const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <h2 className={styles.titulo}>Inscreva-se para ganhar descontos!</h2>
      <form className={styles.form}>
        <Fieldset>
          <InputText placeholder="Digite o seu e-mail" />
        </Fieldset>
        <Button type="submit" variant="default">
          Realizar inscrição
        </Button>
      </form>
    </section>
  )
}

export default Newsletter
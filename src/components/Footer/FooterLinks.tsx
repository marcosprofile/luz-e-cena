import Link from '../Link'
import styles from './Footer.module.css'

const FooterLinks = () => {
  return (
    <div className={styles.institucional}>
      <h4 className={styles.titulo}>Institucional</h4>
      <Link href="#" variant="branco">Sobre nós</Link>
      <Link href="#" variant="branco">Para empresas</Link>
      <Link href="#" variant="branco">Club fidelidade</Link>
    </div>
  )
}

export default FooterLinks
import styles from './Footer.module.css'
import FooterInfo from './FooterInfo'
import FooterLinks from './FooterLinks'
import FooterLogo from './FooterLogo'
import FooterNota from './FooterNota'
import FooterRedes from './FooterRedes'

const Footer = () => {
  return (
    <footer>
      <div className={styles.rodape}>
        <FooterLogo />
        <FooterInfo />
        <FooterLinks />
        <FooterRedes />
      </div>
      <FooterNota />
    </footer>
  )
}

export default Footer
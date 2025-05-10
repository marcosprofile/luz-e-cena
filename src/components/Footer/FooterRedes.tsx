import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa6'
import styles from './Footer.module.css'
import Link from '../Link'

const FooterRedes = () => {
  return (
    <div>
      <h4 className={styles.titulo}>Siga nossas redes:</h4>
      <div className={styles.redes}>
        <Link variant="branco">
          <FaWhatsapp />
        </Link>
        <Link variant="branco">
          <FaInstagram />
        </Link>
        <Link variant="branco">
          <FaTiktok />
        </Link>
      </div>
    </div>
  )
}

export default FooterRedes
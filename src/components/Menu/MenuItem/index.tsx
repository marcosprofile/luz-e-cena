import { MenuItemProps } from '../../../types/menu-item.types'
import Link from '../../Link'


const MenuItem = ({children, href = '#'}: MenuItemProps) => {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  )
}

export default MenuItem
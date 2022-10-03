import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/pro-solid-svg-icons'
function Footer() {
  return (
    <footer>
      <Link href='https://github.com/rawhite22/dailyfootballtracker'>
        GitHub
      </Link>
      <Link href='/about'>
        <FontAwesomeIcon className='about-link' icon={faCircleQuestion} />
      </Link>
    </footer>
  )
}
export default Footer

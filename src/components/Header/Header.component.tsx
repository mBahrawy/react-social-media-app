import Container from './Header.style'

type HeaderProps = {}

function Header(props: HeaderProps): JSX.Element {
  return (
    <Container>
      <nav className='navbar navbar-expand-lg navbar-light bg-light px-5 justify-content-between border-bottom'>
        <a className='navbar-brand' href='#'>
          Logo
        </a>

        <b>Social Media App</b>

        <button className="btn btn-primary">
          Add post
        </button>
              
      </nav>
    </Container>
  )
}

export default Header

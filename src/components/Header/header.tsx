import { Container, Nav, Navbar } from "react-bootstrap";
import ModalLogin from "./Modal/modalLogin";
import ModalRegister from "./Modal/modalRegister";
import { useLocation, useNavigate } from "react-router-dom";
import Profile from "./Profile/Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "../../hooks/hooks";
import { selectIsAuth } from "../../features/authSlice";
import { faUserGear } from "@fortawesome/free-solid-svg-icons";
import PulseLoader from "react-spinners/PulseLoader";
import { useAuth } from "../../hooks/useAuth";

export function Header() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isAuth = useAppSelector(selectIsAuth);
  const onUserClick = () => navigate('/profile')
  const { auth } = useAuth()

  let profileButton = null
  if (isAuth) {
    if (pathname.includes('/:id')) {
      profileButton = (
        <button
          className="icon-button"
          title="Users"
          onClick={onUserClick}
        >
          <FontAwesomeIcon icon={faUserGear} />
        </button>
      )
    }
  }
  let buttonContent
  if (auth.user?.role) {
    buttonContent = <PulseLoader color={"#FFF"} />
  } else {
    buttonContent = (
      <>
        {profileButton}
      </>
    )
  }

  return (
    <Container>
      <Navbar sticky="top" expand="lg" className="d-flex justify-content-between container-xxl bg-body-tertiary"  >
        <Container>
          <Navbar.Brand>Hotels Booking</Navbar.Brand>
        </Container>
        <Nav>
          <nav >
            {buttonContent}
          </nav>
          <ModalLogin />
          <ModalRegister />
        </Nav>
      </Navbar>
    </Container>
  )
}
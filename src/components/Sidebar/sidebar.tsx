import { ListGroup } from "react-bootstrap"
import { NavLink } from "react-router-dom"

function Sidebar() {
  return (
    <ListGroup variant="flush" className="shadow-sm rounded text-center mt-2">
      <ListGroup.Item action>
        <NavLink className="text-decoration-none text-secondary fw-semibold" to="/">
          Выбрать гостиницу
        </NavLink>
      </ListGroup.Item>
      <ListGroup.Item action>
        <NavLink className="text-decoration-none text-secondary fw-semibold" to="/all-hotels">
          Поиск номера
        </NavLink>
      </ListGroup.Item>
      <ListGroup.Item action>
        <NavLink className="text-decoration-none text-secondary fw-semibold" to="/users">
          Пользователи
        </NavLink>
      </ListGroup.Item>
    </ListGroup>
  )
}

export default Sidebar

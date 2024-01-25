import {Link} from "react-router-dom"

const Contacts = () => <>
      <h1>Contacts</h1>
      <ul>
            <li>  <Link to="/contact/1">Number 1</Link> </li>
            <li>  <Link to="/contact/2">Number 2</Link> </li>
            <li>  <Link to="/contact/3">Number 3</Link> </li>
      </ul>
</>;

export default Contacts;

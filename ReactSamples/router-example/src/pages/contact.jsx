import { Link,useParams } from "react-router-dom";

const Contact = () => {
      const rootParams = useParams();
      return <>
            <h1>Hello {rootParams.id}</h1>
            &nbsp; <Link to="/contact"> back</Link>
      </>
};
    
export default Contact;
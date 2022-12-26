//import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Search = ({word, setWord, handleSubmit}) => {
  return (
    <Container className="mt-4">
      <Row>
        <Col xs={12} md={8} lg={6} >
          <Form>
            <Form.Group>
              <Col xs={9}>
                <Form.Control 
                type="text"
                value={word}
                onChange={(e) => setWord(e.target.value)
          }
                placeholder= "Search for new image..."/>
              </Col>
              <Col>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                  Search
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Search;

// function Login() {
//   const [data, setData] = useState({ username: " ", password: " " });
//   function handleFormSubmit(event) {
//     event.preventDefault();
//     console.log(data);
//     alert(JSON.stringify(data));
//   }
//   return (
//     <>
//       <h1>Login form</h1>
//       <form onSubmit={handleFormSubmit}>
//         <label>
//           Username:
//           <input
//             type="text"
//             value={data.username}
//             onChange={(event) =>
//               setData({ ...data, username: event.target.value })
//             }
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type="password"
//             value={data.password}
//             onChange={(event) =>
//               setData({ ...data, password: event.target.value })
//             }
//           />
//         </label>
//         <button type="submit">Login</button>
//       </form>
//     </>
//   );
// }
// export default Login;

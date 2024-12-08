import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";

export default function App() {
  return (
    <>
      <Header />
      <Footer />
      <Container />
    </>
  );
}

// function Form() {
//   return (
//     <div>
//       <label name="user-name">Name: </label>
//       <input type="text" id="user-name" required></input>
//       <br />
//       <label name="user-password">password: </label>
//       <input type="password"></input>
//       <button onClick={handleClick}>log in</button>
//     </div>
//   );
// }
// function handleClick() {
//   console.log("hi");
// }

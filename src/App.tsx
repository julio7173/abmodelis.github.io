import { Container } from "@mui/material";
import { LoginNavBar } from "./components/header/logeado/LoginNavBar";
import PanelNav from "./components/PanelNav";

function App() {
  return (
    <div>
      <LoginNavBar/>
    <Container sx={{mt:10}}>
      <PanelNav/>
    </Container>
    </div>
  );
}

export default App;

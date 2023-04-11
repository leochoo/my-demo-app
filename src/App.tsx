import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { NavbarSimple } from "./NavBar";
import { AppShell, Button } from "@mantine/core";
import { TableReviews } from "./TableReviews";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);

  async function fetchMovies() {
    try {
      const response = await axios.get("http://localhost:3000/movies");
      setMovies(response.data);
      console.log(movies);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <AppShell navbar={<NavbarSimple />}>
        <Button onClick={fetchMovies}>Fetch Movies</Button>

        <TableReviews data={movies} />
      </AppShell>
    </div>
  );
}

export default App;

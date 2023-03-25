import { BrowserRouter as Router } from "react-router-dom";
import { Suspense } from "react";
import Routes from "@/routes";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb.component";
import Loader from "./components/Loader/Loader.component";
import Header from "./components/Header/Header.component";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Header />
        <Breadcrumb />
        <Routes />
      </Router>
    </Suspense>
  );
}

export default App;

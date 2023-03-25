import { BrowserRouter as Router } from "react-router-dom";
import { Suspense } from "react";
import Routes from "@/routes";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb.component";
import Loader from "./components/Loader/Loader.component";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Breadcrumb />
        <Routes />
      </Router>
    </Suspense>
  );
}

export default App;

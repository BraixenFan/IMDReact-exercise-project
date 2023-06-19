import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./details";
import SearchParams from "./Search";
import Breadcrumbs from "./Breadcrumbs";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <div className="main-page">
      <BrowserRouter
        basename={import.meta.env.DEV ? "/" : "/IMDReact-exercise-project/"}
      >
        <QueryClientProvider client={queryClient}>
          <header>
            <Link to="/">LocalMDb</Link>
            <h2>Discover and help others discover too!</h2>
          </header>
          <Breadcrumbs />
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

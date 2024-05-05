import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReactDOM from "react-dom/client";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000000,
      gcTime: 50000,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={client}>
    <BrowserRouter basename="/world-ranks">
      <SkeletonTheme baseColor="#6C727F" highlightColor="#4A5567" duration={2}>
        {/* <React.StrictMode> */}
        <App />
        <ReactQueryDevtools />
        {/* </React.StrictMode> */}
      </SkeletonTheme>
    </BrowserRouter>
  </QueryClientProvider>
);

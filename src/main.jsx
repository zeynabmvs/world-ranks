import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 10000,
      // gcTime: 50000,
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
      {/* <React.StrictMode> */}
      <App />
      <ReactQueryDevtools />
      {/* </React.StrictMode> */}
    </BrowserRouter>
  </QueryClientProvider>
);

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, BarChart } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar";
import Index from "./pages/Index.jsx";
import StartSurvey from "./pages/StartSurvey";
import FirstPoll from "./pages/FirstPoll";
import SecondPoll from "./pages/SecondPoll";
import ThirdPoll from "./pages/ThirdPoll";
import Completion from "./pages/Completion";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Survey",
    to: "/start-survey",
    icon: <BarChart className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="start-survey" element={<StartSurvey />} />
              <Route path="first-poll" element={<FirstPoll />} />
              <Route path="second-poll" element={<SecondPoll />} />
              <Route path="third-poll" element={<ThirdPoll />} />
              <Route path="completion" element={<Completion />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
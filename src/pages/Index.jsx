import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Tech Trends Survey</h1>
      <p className="text-xl mb-8">Discover and share insights about the latest technology trends.</p>
      <Button asChild>
        <Link to="/start-survey">Start Survey</Link>
      </Button>
    </div>
  );
};

export default Index;
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const StartSurvey = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Start Survey</CardTitle>
          <CardDescription>Share your thoughts on technology trends</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-6">
            This survey will ask you about your favorite technology trends and your opinions on them.
            Your responses will help us understand the current tech landscape.
          </p>
          <Button asChild className="w-full">
            <Link to="/first-poll">Start Survey</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default StartSurvey;
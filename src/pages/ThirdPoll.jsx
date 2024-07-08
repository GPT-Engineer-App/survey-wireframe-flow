import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const likelihoodOptions = [
  "Very Likely",
  "Likely",
  "Neutral",
  "Unlikely",
  "Very Unlikely",
];

const ThirdPoll = () => {
  const [likelihood, setLikelihood] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (likelihood) {
      // In a real app, you'd save this to state or context
      navigate("/completion");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Third Poll</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => e.preventDefault()}>
            <h2 className="text-lg font-semibold mb-4">How likely are you to adopt this technology in the next year?</h2>
            <RadioGroup value={likelihood} onValueChange={setLikelihood} className="space-y-2">
              {likelihoodOptions.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option}>{option}</Label>
                </div>
              ))}
            </RadioGroup>
            <Button onClick={handleSubmit} className="w-full mt-6" disabled={!likelihood}>
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThirdPoll;
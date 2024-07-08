import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const technologies = [
  "Artificial Intelligence",
  "Blockchain",
  "Quantum Computing",
  "Internet of Things",
  "5G",
];

const FirstPoll = () => {
  const [selectedTechnology, setSelectedTechnology] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (selectedTechnology) {
      // In a real app, you'd save this to state or context
      navigate("/second-poll");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>First Poll</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => e.preventDefault()}>
            <h2 className="text-lg font-semibold mb-4">Which technology are you most excited about?</h2>
            <RadioGroup value={selectedTechnology} onValueChange={setSelectedTechnology} className="space-y-2">
              {technologies.map((tech) => (
                <div key={tech} className="flex items-center space-x-2">
                  <RadioGroupItem value={tech} id={tech} />
                  <Label htmlFor={tech}>{tech}</Label>
                </div>
              ))}
            </RadioGroup>
            <Button onClick={handleNext} className="w-full mt-6" disabled={!selectedTechnology}>
              Next
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FirstPoll;
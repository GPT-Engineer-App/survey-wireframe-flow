import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SecondPoll = () => {
  const [reason, setReason] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (reason.trim()) {
      // In a real app, you'd save this to state or context
      navigate("/third-poll");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Second Poll</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => e.preventDefault()}>
            <h2 className="text-lg font-semibold mb-4">Why do you find this technology exciting?</h2>
            <Textarea
              placeholder="Type your answer here..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="min-h-[100px]"
            />
            <Button onClick={handleNext} className="w-full mt-6" disabled={!reason.trim()}>
              Next
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecondPoll;
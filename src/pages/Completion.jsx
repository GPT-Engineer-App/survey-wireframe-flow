import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Completion = () => {
  // In a real app, you'd fetch this data from state or context
  const mockData = {
    technology: "Artificial Intelligence",
    reason: "It has the potential to revolutionize many industries.",
    likelihood: "Likely",
  };

  // Mock comparison data
  const comparisonData = {
    technologyPercentage: 35,
    likelihoodPercentage: 60,
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Survey Completed</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-lg font-semibold mb-4">Your Responses</h2>
          <div className="space-y-2 mb-6">
            <p><strong>Chosen Technology:</strong> {mockData.technology}</p>
            <p><strong>Reason:</strong> {mockData.reason}</p>
            <p><strong>Likelihood of Adoption:</strong> {mockData.likelihood}</p>
          </div>

          <h2 className="text-lg font-semibold mb-4">How You Compare</h2>
          <div className="space-y-4 mb-6">
            <div>
              <p className="mb-2">{comparisonData.technologyPercentage}% of respondents chose the same technology</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${comparisonData.technologyPercentage}%`}}></div>
              </div>
            </div>
            <div>
              <p className="mb-2">{comparisonData.likelihoodPercentage}% of respondents have a similar likelihood of adoption</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{width: `${comparisonData.likelihoodPercentage}%`}}></div>
              </div>
            </div>
          </div>

          <Button asChild className="w-full">
            <Link to="/">Finish</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Completion;

import { Bar } from "react-chartjs-2";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function Chart({ insights }) {
    if (!insights) {
        return null;
    }

    const data = {
        labels: ["Likes", "Comments", "Shares", "Reach"],
        datasets: [
            {
                label: "Engagement Metrics",
                data: [
                    insights.averageLikes,
                    insights.averageComments,
                    insights.averageShares,
                    insights.averageReach
                ],
                backgroundColor: ["#4CAF50", "#FFC107", "#2196F3", "#FF5722"]
            }
        ]
    };

    return (
        <Card className="w-full max-w-lg mx-auto mt-6">
            <CardHeader>
                <CardTitle>Engagement Metrics</CardTitle>
            </CardHeader>
            <CardContent>
                <Bar data={data} />
            </CardContent>
        </Card>
    );
}

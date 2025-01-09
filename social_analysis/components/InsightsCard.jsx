
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function InsightsCard({ insights }) {
    if (!insights) {
        return null;
    }

    return (
        <Card className="w-full max-w-lg mx-auto mt-6">
            <CardHeader>
                <CardTitle>Insights</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Total Posts: {insights.totalPosts}</p>
                <p>Average Likes: {insights.averageLikes}</p>
                <p>Average Comments: {insights.averageComments}</p>
                <p>Average Shares: {insights.averageShares}</p>
                <p>Average Reach: {insights.averageReach}</p>
            </CardContent>
        </Card>
    );
}

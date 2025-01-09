"use client";

import { Bar, Pie, Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Tooltip, Legend } from "chart.js";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Tooltip, Legend);

export default function ChartComponent({ data }) {

    const [chartType, setChartType] = useState("Bar");

    // Aggregate data by post type
    const aggregatedData = data.reduce((acc, item) => {
        if (!acc[item.post_type]) {
            acc[item.post_type] = {
                likes: 0,
                comments: 0,
                shares: 0,
                impressions: 0,
                reach: 0,
                save_count: 0,
            };
        }

        acc[item.post_type].likes += item.likes;
        acc[item.post_type].comments += item.comments;
        acc[item.post_type].shares += item.shares;
        acc[item.post_type].impressions += item.impressions;
        acc[item.post_type].reach += item.reach;
        acc[item.post_type].save_count += item.save_count;

        return acc;
    }, {});

    const labels = Object.keys(aggregatedData);

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: "Likes",
                data: labels.map((label) => aggregatedData[label].likes),
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
            {
                label: "Comments",
                data: labels.map((label) => aggregatedData[label].comments),
                backgroundColor: "rgba(255, 159, 64, 0.2)",
                borderColor: "rgba(255, 159, 64, 1)",
                borderWidth: 1,
            },
            {
                label: "Shares",
                data: labels.map((label) => aggregatedData[label].shares),
                backgroundColor: "rgba(153, 102, 255, 0.2)",
                borderColor: "rgba(153, 102, 255, 1)",
                borderWidth: 1,
            },
            {
                label: "Impressions",
                data: labels.map((label) => aggregatedData[label].impressions),
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
            },
            {
                label: "Reach",
                data: labels.map((label) => aggregatedData[label].reach),
                backgroundColor: "rgba(255, 206, 86, 0.2)",
                borderColor: "rgba(255, 206, 86, 1)",
                borderWidth: 1,
            },
            {
                label: "Save Count",
                data: labels.map((label) => aggregatedData[label].save_count),
                backgroundColor: "rgba(201, 203, 207, 0.2)",
                borderColor: "rgba(201, 203, 207, 1)",
                borderWidth: 1,
            },
        ],
    };

    // Pie chart data for each metric
    const pieData = (metric) => {
        return {
            labels: labels,
            datasets: [
                {
                    label: metric,
                    data: labels.map((label) => aggregatedData[label][metric]),
                    backgroundColor: [
                        "rgba(75, 192, 192, 0.6)",
                        "rgba(255, 159, 64, 0.6)",
                        "rgba(153, 102, 255, 0.6)",
                        "rgba(54, 162, 235, 0.6)",
                        "rgba(255, 206, 86, 0.6)",
                        "rgba(201, 203, 207, 0.6)",
                    ],
                    borderColor: [
                        "rgba(75, 192, 192, 1)",
                        "rgba(255, 159, 64, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(201, 203, 207, 1)",
                    ],
                    borderWidth: 1,
                },
            ],
        };
    };

    const renderChart = () => {

        const barOptions = {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Post Types", // X-axis label
                        font: {
                            size: 14,
                            weight: 'bold',
                        },
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: "Total Counts", // Y-axis label
                        font: {
                            size: 14,
                            weight: 'bold',
                        },
                    },
                    beginAtZero: true,
                },
            },
        };
        switch (chartType) {
            case "Bar":
                return <Bar data={chartData} options={barOptions} />;
            case "Line":
                return <Line data={chartData} options={barOptions} />;
            case "Pie":
                return (
                    <div className=" flex">
                        <div className="flex-1 text-center">

                            <h3 className=" text-center">Likes Distribution</h3>
                            <Pie data={pieData("likes")} />
                        </div>
                        <div className="flex-1">
                            <h3 className=" text-center">Comments Distribution</h3>
                            <Pie data={pieData("comments")} />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-center">Shares Distribution</h3>
                            <Pie data={pieData("shares")} />
                        </div>
                        <div className="flex-1">
                            <h3 className=" text-center">Save Count Distribution</h3>
                            <Pie data={pieData("save_count")} />
                        </div>
                    </div>
                );
            default:
                return <Bar data={chartData} />;
        }
    };

    return (
        <div className="p-6 space-y-6">
            <Tabs defaultValue="Bar" className="w-full">
                <TabsList>
                    <TabsTrigger value="Bar" onClick={() => setChartType("Bar")}>
                        Bar Chart
                    </TabsTrigger>
                    <TabsTrigger value="Line" onClick={() => setChartType("Line")}>
                        Line Chart
                    </TabsTrigger>
                    <TabsTrigger value="Pie" onClick={() => setChartType("Pie")}>
                        Pie Charts
                    </TabsTrigger>
                </TabsList>
                <TabsContent value={chartType}>
                    <div className="w-full h-auto">{renderChart()}</div>
                </TabsContent>
            </Tabs>
        </div>
    );
}

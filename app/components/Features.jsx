import React from 'react'

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const Features = () => {
    return (
        <section id="features" className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                    Key Features
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[

                        {
                            title: "AI-Powered Insights",
                            description: "Get intelligent recommendations using GPT integration"
                        },
                        {
                            title: "Enhanced Decision-Making",
                            description: "Enhance decision-making with beautiful, intuitive visualizations"
                        },

                        {
                            title: "Content Strategy Optimization",
                            description: "Optimize content strategies with actionable, data-driven recommendations"
                        },
                        {
                            title: "Engagement Monitoring",
                            description: "Monitor real-time engagement metrics across various post types"
                        },
                        {
                            title: "Automated Data Analysis",
                            description: "Automate data analysis to save time and improve efficiency"
                        },
                        {
                            title: "Brand Reputation Protection",
                            description: "Protect brand reputation by identifying trends and issues quickly"
                        },


                    ].map((feature, index) => (
                        <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="text-gray-900">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
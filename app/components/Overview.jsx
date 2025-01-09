import React from 'react'
import { BarChart3, Brain, Gauge } from 'lucide-react';


const Overview = () => {
    return (
        <section id="overview" className="py-20 px-4 bg-gray-50">
            <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">
                            What is EngageIQ?
                        </h2>
                        <p className="text-gray-600 mb-6">
                            EngageIQ is an intelligent social media analytics platform that combines the power of DataStax Astra DB and advanced AI to help you understand and optimize your social media performance. Our platform processes your engagement data in real-time, providing actionable insights that drive results.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-2 rounded-lg">
                                    <BarChart3 className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Real-time Analytics</h3>
                                    <p className="text-gray-600">Monitor your social media performance as it happens</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-2 rounded-lg">
                                    <Brain className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">AI-Powered Insights</h3>
                                    <p className="text-gray-600">Get intelligent recommendations for content optimization</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-2 rounded-lg">
                                    <Gauge className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Performance Metrics</h3>
                                    <p className="text-gray-600">Track and analyze key engagement metrics</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-2 rounded-2xl shadow-lg">
                        <img
                            src="/dashboard.png"
                            alt="EngageIQ Dashboard Preview"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Overview
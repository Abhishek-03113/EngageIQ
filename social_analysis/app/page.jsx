import React from 'react';
import { Github, Twitter, Linkedin, BarChart3, Brain, Gauge } from 'lucide-react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Link from 'next/link';


const LandingPage = () => {
    const teamMembers = [
        {
            name: "Dinesh Rathod",
            role: "Full Stack Developer",
            github: "https://github.com/codewithdinesh",
            twitter: "https://twitter.com/codewithdinesh",
            linkedin: "https://linkedin.com/in/dineshrathod03"
        },

    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
                            Transform Your Social Media Analytics
                        </h1>
                        <p className="text-gray-600 text-xl mb-8 max-w-2xl mx-auto">
                            Harness the power of AI to unlock deeper insights and drive better engagement across your social platforms
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button
                                size="lg"
                                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                            >
                                Try Demo
                            </Button>

                            <Link href="">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="rounded-full"
                                >
                                    Watch Tutorial
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
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

            {/* Features Section */}
            <section id="features" className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        Key Features
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Real-time Analytics",
                                description: "Track engagement metrics across different post types instantly"
                            },
                            {
                                title: "AI-Powered Insights",
                                description: "Get intelligent recommendations using GPT integration"
                            },
                            {
                                title: "Advanced Visualization",
                                description: "Beautiful charts and graphs for better understanding"
                            }
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

            {/* Team Section */}
            <section id="team" className="py-20 px-4 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        Our Team
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-gray-900">{member.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 mb-4">{member.role}</p>
                                    <div className="flex space-x-4">
                                        <a
                                            href={member.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a
                                            href={member.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            <Twitter className="w-5 h-5" />
                                        </a>
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
import React from 'react'

import { Github, Twitter, Linkedin, BarChart3, Brain, Gauge } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Team = () => {

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
    )
}

export default Team
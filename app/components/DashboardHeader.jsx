import React from 'react';
import { Github } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const DashHeader = () => {
    return (
        <header className="bg-white w-full border-b">
            <div className="container mx-auto">
                <div className="flex items-center justify-between py-4 mx-2">

                    <Link href="/">

                        <h1 className="text-blue-600 text-2xl font-medium">
                            EngageIQ
                        </h1>
                    </Link>


                    <div className="flex items-center space-x-4">
                        <Button
                            variant="ghost"
                            className="text-gray-600 hover:text-blue-600 hover:bg-transparent"
                            asChild
                        >
                            <a href="/dashboard">Dashboard</a>
                        </Button>

                        <Button
                            variant="outline"
                            className="flex items-center space-x-2 border-gray-200 hover:bg-gray-50"
                            asChild
                        >
                            <a
                                href="https://github.com/Abhishek-03113/socialMediaAnalysis/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>GitHub</span>
                                <Github className="w-4 h-4 ml-2" />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DashHeader;
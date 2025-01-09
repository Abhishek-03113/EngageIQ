import React from 'react';
import { Github } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
    return (
        <header className="bg-white fixed w-full top-0 left-0 z-50 shadow-sm">
            <div className="container mx-auto">
                <div className="flex items-center justify-between py-6 mx-2">

                    <h1 className="text-blue-600 text-2xl font-medium cursor-pointer">
                        EngageIQ
                    </h1>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#overview" className="text-gray-600 hover:text-blue-600 transition-colors">
                            Overview
                        </a>
                        <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                            Features
                        </a>
                        <a href="#team" className="text-gray-600 hover:text-blue-600 transition-colors">
                            Team
                        </a>
                    </nav>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-4">
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
                                <span>GitHub Repo</span>
                                <Github className="w-4 h-4" />
                            </a>
                        </Button>

                        <Button
                            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg transition duration-200 rounded-full"
                            asChild
                        >
                            <a href="/dashboard">
                                Get Started
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
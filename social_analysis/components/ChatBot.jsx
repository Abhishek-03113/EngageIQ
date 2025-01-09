"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { LoadingSpinner } from "@/components/ui/spinner";
import { CircleX, Bot } from "lucide-react";

export default function PostAnalyzer() {
    const [isVisible, setIsVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [postType, setPostType] = useState("");
    const [results, setResults] = useState([]);

    const handleAnalyze = async () => {
        if (!postType) return;

        setLoading(true);
        setResults([]);

        try {
            const response = await fetch('/api/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ postType }),
            });

            if (!response.ok) {
                throw new Error(`Request failed`);
            }

            const data = await response.json();
            setResults(data.results || []);
        } catch (error) {
            console.error('Error:', error);
            setResults(['An error occurred. Please try again.']);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-5 right-5 z-50">
            {/* Toggle Button */}
            {!isVisible && (
                <div
                    className="flex p-3 border-blue-500 rounded-lg shadow-lg items-center cursor-pointer bg-slate-900 text-white"
                    onClick={() => setIsVisible(true)}
                >
                    <p className="text-sm mr-2">Analyze Post</p>
                    <Bot size={24} />
                </div>
            )}

            {/* Analysis Window */}
            {isVisible && (
                <div className=" bg-white p-6 border-t-4 border-blue-500 shadow-lg rounded-t-lg">
                    {/* Close Button */}
                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute top-2 right-2 p-2 text-gray-600 hover:text-gray-800"
                    >
                        <CircleX size={24} />
                    </button>

                    <div className="flex space-y-4">
                        {/* Post Type Select */}
                        <Select value={postType} onValueChange={setPostType}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select Post Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Image">Image</SelectItem>
                                <SelectItem value="Reel">Reel</SelectItem>
                                <SelectItem value="Carousel">Carousel</SelectItem>
                                <SelectItem value="Video">Video</SelectItem>
                            </SelectContent>
                        </Select>

                        {/* Analyze Button */}
                        <Button
                            onClick={handleAnalyze}
                            disabled={loading || !postType}
                            className="bg-blue-500 text-white w-full"
                        >
                            {loading ? <LoadingSpinner /> : "Analyze"}
                        </Button>

                        {/* Results Display */}
                        {results.length > 0 && (
                            <div className="space-y-2">
                                {results.map((result, index) => (
                                    <div
                                        key={index}
                                        className="p-3 bg-gray-100 rounded-lg text-sm"
                                    >
                                        • {result}
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Loading Indicator */}
                        {loading && (
                            <LoadingSpinner className="mx-auto" />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
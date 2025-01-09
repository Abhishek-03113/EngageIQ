"use client";

import { useState } from "react";
import { Bot } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";

export default function PostAnalyzer() {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [postType, setPostType] = useState("");
    const [results, setResults] = useState([]);

    const handlePostTypeChange = async (value) => {
        setPostType(value);
        setLoading(true);
        setResults([]);
        setProgress(0);

        // Simulate progress
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 90) {
                    clearInterval(progressInterval);
                    return 90;
                }
                return prev + 10;
            });
        }, 100);

        try {
            const response = await fetch('/api/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ postType: value }),
            });

            if (!response.ok) {
                throw new Error(`Request failed`);
            }

            const data = await response.json();
            setResults(data.results || []);
            setProgress(100);
        } catch (error) {
            console.error('Error:', error);
            setResults(['An error occurred. Please try again.']);
        } finally {
            clearInterval(progressInterval);

            setTimeout(() => {
                setLoading(false);
                setProgress(0);
            }, 200);
        }
    };

    return (
        <>
            <Button
                onClick={() => setIsOpen(true)}
                className="flex items-center space-x-2 bg-slate-900"
            >
                <span>Analyze Post</span>
                <Bot size={24} className="h-7 w-7" />
            </Button>



            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="max-w-5xl flex flex-col h-[90vh]">
                    <DialogHeader className={""}>
                        <DialogTitle> Social Media Analysis Analysis</DialogTitle>
                    </DialogHeader>

                    <hr className="border-t border-gray-200" />

                    {loading && (
                        <div className="absolute top-1 left-0 right-0">
                            <Progress value={progress} className="h-2 rounded-full" />
                        </div>
                    )}

                    <div className="flex h-full mt-2">
                        <div className="">
                            <h3 className="text-lg font-medium mb-4">Select Post Type</h3>
                            <Select value={postType} onValueChange={handlePostTypeChange}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Choose a post type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Image">Image</SelectItem>
                                    <SelectItem value="Reel">Reel</SelectItem>
                                    <SelectItem value="Carousel">Carousel</SelectItem>
                                    <SelectItem value="Video">Video</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <Separator orientation="vertical" className="mx-6" />

                        <div className="flex-1">
                            <h3 className="text-lg font-medium mb-4">Analysis Results</h3>

                            <div className="h-[calc(100%-2rem)] overflow-y-auto pr-4">
                                {loading ? (
                                    <div className="flex items-center justify-center h-40 text-muted-foreground">
                                        Analyzing post type...
                                    </div>
                                ) : results.length > 0 ? (
                                    <div className="space-y-4">
                                        {results.map((result, index) => (
                                            <Card key={index}>
                                                <CardContent className="pt-6">
                                                    <p className="text-gray-700">• {result}</p>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center h-40 text-muted-foreground">
                                        Select a post type to see analysis
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
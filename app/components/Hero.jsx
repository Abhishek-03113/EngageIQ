import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Hero = () => {
    return (
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


                        <Link href="/dashboard">
                            <Button
                                size="lg"
                                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                            >
                                Try Demo
                            </Button>

                        </Link>

                        <Link href="https://www.youtube.com/watch?v=eNLKAJuh2LI">
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
    )
}

export default Hero
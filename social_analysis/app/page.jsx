import React from 'react';

import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Link from 'next/link';
import Overview from '@/components/Overview';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Team from '@/components/Team';


const LandingPage = () => {


    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <Hero />

            {/* Overview Section */}
            <Overview />

            {/* Features Section */}
            <Features />

            {/* Team Section */}
            <Team />

        </div>
    );
};

export default LandingPage;
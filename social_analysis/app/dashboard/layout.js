import DashHeader from '@/components/DashboardHeader'
import Header from '@/components/Header'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

const layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <DashHeader />
            <main className="container mx-auto px-4 py-6">

                {children}</main>
        </div>
    )
}

export default layout
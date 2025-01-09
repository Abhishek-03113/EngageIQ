// app/api/analyze/route.js
import { NextResponse } from 'next/server'

const LANGFLOW_URL = process.env.LANGFLOW_URL
const APP_TOKEN = process.env.LANGFLOW_TOKEN

export async function POST(request) {
    try {
        const { postType } = await request.json()

        const payload = {
            input_value: postType,
            output_type: "chat",
            input_type: "chat",
            tweaks: {
                "AstraDBToolComponent-RidZm": {},
                "ChatInput-vDd8P": {},
                "Agent-HMgQp": {},
                "Prompt-zsxih": {},
                "ParseData-jpubH": {},
                "ChatOutput-cl3Su": {},
                "CombineText-rfX91": {}
            }
        }

        const response = await fetch(LANGFLOW_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${APP_TOKEN}`
            },
            body: JSON.stringify(payload)
        })

        if (!response.ok) {

            console.log('Response:', response)
            throw new Error(`API error: ${response.status}`)
        }

        const data = await response.json()

        console.log('Data:', data)

        const resultText = data.outputs?.[0]?.outputs?.[0]?.results?.message?.text || 'No analysis available'


        console.log('Result:', resultText)



        const bulletPoints = resultText
            .split('\n')
            .map(point => point.trim())
            .filter(point => point.startsWith('*'))
            .map(point => point.substring(2).trim())

        return NextResponse.json({ results: bulletPoints })

    } catch (error) {
        console.error('Error:', error)
        return NextResponse.json(
            { error: 'Failed to analyze post type' },
            { status: 500 }
        )
    }
}
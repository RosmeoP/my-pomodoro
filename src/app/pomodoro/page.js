import { DevBundlerService } from 'next/dist/server/lib/dev-bundler-service'
import React from 'react'

const PomodoroPage = () => {
    return (
        <div className="bg-black grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-4xl text-white">Pomodoro Timer</h1>
                <p className="text-lg text-gray-400">Stay focused and productive!</p>
            </div>
        </div>
    )
}

export default PomodoroPage

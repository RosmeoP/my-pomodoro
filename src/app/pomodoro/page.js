"use client";

import React, { useState, useEffect } from 'react';

const PomodoroPage = () => {
    const initialTime = 25 * 60;
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false);
    const [totalTime, setTotalTime] = useState(initialTime);
    const [hasStarted, setHasStarted] = useState(false);

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    useEffect(() => {
        let timer;
        if (isRunning && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsRunning(false);
        }
        return () => clearInterval(timer);
    }, [isRunning, timeLeft]);

    const startFocus = () => {
        const time = 25 * 60;
        setTimeLeft(time);
        setTotalTime(time);
        setIsRunning(true);
        setHasStarted(true);
    };

    const startShortBreak = () => {
        const time = 5 * 60;
        setTimeLeft(time);
        setTotalTime(time);
        setIsRunning(true);
        setHasStarted(true);
    };

    const startLongBreak = () => {
        const time = 15 * 60;
        setTimeLeft(time);
        setTotalTime(time);
        setIsRunning(true);
        setHasStarted(true);
    };

 

    const progressPercent = ((totalTime - timeLeft) / totalTime) * 100;

    return (
        <div className="bg-black min-h-screen flex items-start justify-center p-6 sm:p-10 font-[family-name:var(--font-geist-sans)]">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="flex flex-col items-center justify-center gap-2 mb-6">
                    <h1 className="text-4xl text-white">Pomodoro Timer</h1>
                    <p className="text-lg text-gray-400">Stay focused and productive!</p>
                </div>

                {/* Buttons */}
                <div className='flex justify-between mb-4'>
                    <button onClick={startFocus} className="text-gray-500 px-4 py-2 rounded hover:bg-gray-700 hover:text-white transition-colors">
                        Focus now
                    </button>
                    <button onClick={startShortBreak} className="ml-4 text-gray-500 px-4 py-2 rounded hover:bg-gray-700  hover:text-white transition-colors">
                        Short Break
                    </button>
                    <button onClick={startLongBreak} className="ml-4 text-gray-500 px-4 py-2 rounded hover:bg-gray-700 hover:text-white transition-colors">
                        Long Break
                    </button>
                </div>

                {/* White separator bar with more margin */}
                <div className="h-[2px] bg-white w-full mt-8 mb-32 rounded"></div>

                {/* Timer */}
                <div className="text-white text-8xl font-bold text-center mb-4">
                    {formatTime(timeLeft)}
                </div>
                {/* Progress bar directly under the timer */}
                <div className="w-full h-2 bg-gray-700 rounded mb-6 overflow-hidden">
                    <div
                        className="h-full bg-white transition-all duration-100 linear"
                        style={{ width: `${progressPercent}%` }}
                    />
                </div>
                {/* Additonal time */}
                <div className="flex justify-center gap-4 mt-30">
                    <button
                        onClick={() => {
                            setTimeLeft(prev => prev + 25 * 60);
                            setTotalTime(prev => prev + 25 * 60);
                        }}
                        className="text-gray-500 px-4 py-2  hover:text-white"
                    >
                        +25
                    </button>
                    <button
                        onClick={() => {
                            setTimeLeft(prev => prev + 10 * 60);
                            setTotalTime(prev => prev + 10 * 60);
                        }}
                        className="text-gray-500 px-4 py-2   hover:text-white "
                    >
                        +10
                    </button>
                    <button
                        onClick={() => {
                            setTimeLeft(prev => prev + 5 * 60);
                            setTotalTime(prev => prev + 5 * 60);
                        }}
                        className="text-gray-500 px-4 py-2  hover:text-white"
                    >
                        +5
                    </button>
                </div>
                {/* Pause/Resume button */}
                <div className="flex justify-center mt-10">
                    <button
                        onClick={() => {
                            if (!hasStarted) {
                                setIsRunning(true);
                                setHasStarted(true);
                            }else{
                                setIsRunning(prev => !prev);
                            }
                        }}
                        className="text-white px-6 py-2 rounded hover:bg-gray-600 transition-colors"
                    >
                        {!hasStarted ? 'Start' :  isRunning ? 'Pause' :'Resume'}
                    </button>
                {/* Reset button */}
                {hasStarted && (
                    <button
                        onClick={() => {
                            setTimeLeft(initialTime);
                            setTotalTime(initialTime);
                            setIsRunning(false);
                            setHasStarted(false);
                        }}
                        className="text-white px-6 py-2 rounded hover:bg-gray-600 transition-colors"
                    >
                        Reset
                    </button>
            )}
                </div>                
            </div>
        </div>
    );
};

export default PomodoroPage;

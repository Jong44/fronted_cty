import React from 'react';
import RootLayout from '@/components/global/layout/RootLayout';

const Activities = () => {
    return (
        <RootLayout>
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-5">ACTIVITIES</h1>
            
            <div className="flex justify-end items-center mb-3 gap-3">
            <button className="text-sm font-medium flex items-center gap-1">
            <span className="text-lg font-bold">+</span> Add Filter
            </button>
            <button className="text-2xl font-bold">⋯</button>
        </div>

            <div className="border border-gray-300 rounded-md">
            <table className="w-full border-collapse text-left">
                <thead>
                <tr className="border-b border-gray-300">
                    <th className="py-2 px-3 border-r border-gray-300 w-1/3 text-center">Type</th>
                    <th className="py-2 px-3 border-r border-gray-300 w-1/3 text-center">Detail</th>
                    <th className="py-2 px-3 w-1/3 text-center">Status</th>
                </tr>
                </thead>
                <tbody>

                <tr>
                    <td className="px-3 text-center border-r">lorem</td>
                    <td className="px-3 text-center border-r">lorem</td>
                    <td className="px-3 text-center border-r">lorem</td>
                </tr>
                </tbody>
            </table>
            </div>

            <div className="flex justify-center mt-3">
            <button className="px-2 py-1 border rounded mx-1">&lt;</button>
            <button className="px-2 py-1 border rounded mx-1">&gt;</button>
            </div>
        </div>
        </RootLayout>
    );
};

export default Activities;

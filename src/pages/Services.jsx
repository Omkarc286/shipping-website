import React from 'react'

const Services = () => {
    return (
        <div className="pt-28 px-8">
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl shadow-md border">
                    <h2 className="text-xl font-semibold mb-2">Web Development</h2>
                    <p>Modern, scalable websites using React and Next.js.</p>
                </div>

                <div className="p-6 rounded-xl shadow-md border">
                    <h2 className="text-xl font-semibold mb-2">UI/UX Design</h2>
                    <p>Clean and user-friendly interfaces for better engagement.</p>
                </div>

                <div className="p-6 rounded-xl shadow-md border">
                    <h2 className="text-xl font-semibold mb-2">API Integration</h2>
                    <p>Seamless backend integration and data handling.</p>
                </div>
            </div>
        </div>
    )
}

export default Services
import { useRef } from 'react';

const TrustMarquee = () => {
    // Mock logos with brand colors using simple styled divs with text for now
    // In a real scenario, these would be <img> tags
    const brands = [
        { name: 'Forbes Africa', color: '#000000', bg: '#f0f0f0' },
        { name: 'TechCrunch', color: '#00D668', bg: '#eafff5' },
        { name: 'NTA News', color: '#1B4725', bg: '#e8f5ea' },
        { name: 'Premium Times', color: '#d32f2f', bg: '#ffebee' },
        { name: 'Channels TV', color: '#1565c0', bg: '#e3f2fd' },
        { name: 'Business Day', color: '#FF9800', bg: '#fff3e0' },
        { name: 'Vanguard', color: '#c62828', bg: '#ffebee' },
    ];

    return (
        <div className="w-full overflow-hidden bg-white py-10 border-y border-slate-100">
            <div className="flex animate-scroll hover:pause-on-hover w-max gap-16 items-center">
                {/* Duplicate the list to create infinite effect */}
                {[...brands, ...brands, ...brands].map((brand, idx) => (
                    <div
                        key={idx}
                        className="flex items-center justify-center px-6 py-3 rounded-xl font-bold text-xl italic whitespace-nowrap transition-transform hover:scale-105 cursor-default shadow-sm"
                        style={{ color: brand.color, backgroundColor: brand.bg }}
                    >
                        {brand.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrustMarquee;

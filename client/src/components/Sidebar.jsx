export default function Sidebar() {
    const tabs = [
        { name: "Home", icon: "🏠" },
        { name: "Shorts", icon: "🎥" },
        { name: "Subscriptions", icon: "📺" },
        { name: "History", icon: "⏱️" },
        { name: "Trending", icon: "📈" }
    ]
    
    return (
        <div className="fixed left-0 top-0 h-screen w-64 bg-gray-900 pt-20 px-4">
            {tabs.map((tab, index) => (
                <div 
                    key={index}
                    className="flex items-center p-3 text-gray-300 hover:bg-gray-800 rounded-lg cursor-pointer transition-all duration-200 mb-2"
                >
                    <span className="text-xl mr-4">{tab.icon}</span>
                    <span className="font-medium hover:text-white transition-colors">{tab.name}</span>
                </div>
            ))}
            <div className="border-t border-gray-700 my-4"></div>
            <h3 className="text-gray-400 font-semibold px-3 mb-2">SUBSCRIPTIONS</h3>
            {[1, 2, 3].map((item) => (
                <div 
                    key={item}
                    className="flex items-center p-3 text-gray-300 hover:bg-gray-800 rounded-lg cursor-pointer transition-all duration-200 mb-2"
                >
                    <div className="w-6 h-6 rounded-full bg-gray-600 mr-4"></div>
                    <span className="font-medium hover:text-white transition-colors">Channel {item}</span>
                </div>
            ))}
        </div>
    )
}
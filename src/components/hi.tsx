import { useState, useEffect } from 'react';

export default function Hi({className}: any) {
    const [displayText, setDisplayText] = useState('👋 Hi!');
    
    useEffect(() => {
        const fullText = "I'm Mikel";
        let currentIndex = 0;
        let isTyping = true;
        
        const interval = setInterval(() => {
            if (isTyping) {
                if (currentIndex < fullText.length) {
                    setDisplayText(fullText.slice(0, currentIndex + 1));
                    currentIndex++;
                } else {
                    // Wait 45 seconds then erase
                    setTimeout(() => {
                        isTyping = false;
                    }, 45000);
                }
            }
        }, 100);
        
        return () => clearInterval(interval);
    }, []);
    
    return <>
        <div className={"flex flex-1 flex-col items-center justify-center text-center p-4 w-full h-20 "+className}>
            
            <h2 style={{fontFamily: 'Montserrat, Helvetica, sans-serif'}} className="text-2xl sm:text-3xl font-bold text-primary">
                {displayText}_
            </h2>
        </div>
    </>
}
import { useState } from 'react';
import SpineViewer from './components/SpineViewer';
import './App.css';

function App() {
    const [bgColor, setBgColor] = useState('#1a1a2e');

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
            <h1 className="text-white text-2xl font-bold mb-4">
                Spine Viewer
            </h1>

            {/* 배경색 토글 */}
            <div className="flex gap-2 mb-4">
                {['#1a1a2e', '#000000', '#ffffff', '#00000000'].map((color) => (
                    <button
                        key={color}
                        onClick={() => setBgColor(color)}
                        className={`px-3 py-1 rounded text-sm ${
                            bgColor === color
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-700 text-gray-300'
                        }`}
                    >
                        {color === '#00000000' ? '투명' : color}
                    </button>
                ))}
            </div>

            {/* Spine 뷰어 */}
            <div className="w-full max-w-2xl rounded-xl overflow-hidden border border-gray-700">
                <SpineViewer
                    skelUrl="/spine/c9009_00.skel"
                    atlasUrl="/spine/c9009_00.atlas"
                    backgroundColor={bgColor}
                    width="100%"
                    height="600px"
                />
            </div>

            <p className="text-gray-500 text-sm mt-4">
                컨트롤바에서 애니메이션/스킨 변경 가능
            </p>
        </div>
    );
}

export default App;
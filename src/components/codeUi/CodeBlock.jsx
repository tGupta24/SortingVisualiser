import React from 'react';

const CodeBlock = ({ language, filename, highlightLines, code }) => {
    // Function to add highlighting classes to specific lines
    const getHighlightedCode = (lines) => {
        return code.split('\n').map((line, index) => {
            const lineNumber = index + 1;
            const isHighlighted = lines.includes(lineNumber);

            return (
                <div
                    key={lineNumber}
                    className={`px-4 py-1 ${isHighlighted ? 'bg-blue-800' : ''} transition-colors`}
                >
                    <span className="text-gray-400 mr-2">{lineNumber}</span>
                    <span>{line}</span>
                </div>
            );
        });
    };

    return (
        <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg overflow-auto">
            {/* Header with filename and language */}
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-mono text-gray-400">{filename}</span>
                <span className="text-sm text-gray-400">{language}</span>
            </div>

            {/* Code block */}
            <div className="font-mono text-sm">
                <pre>
                    <code>
                        {getHighlightedCode(highlightLines)}
                    </code>
                </pre>
            </div>
        </div>
    );
};

export { CodeBlock };

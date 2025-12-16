import { useState } from "react";

function Resources() {
    const [resourceText, setResourceText] = useState("");
    const [resources, setResources] = useState([]);

    const addResource = () => {
        if (resourceText.trim() !== "") {
        setResources([...resources, resourceText]);
        setResourceText(""); 
        }
    };

    const deleteResource = (index) => {
        const newResources = resources.filter((_, i) => i !== index);
        setResources(newResources);
    };

    return (
        <div className="min-h-screen p-8">
        <h1 className="text-2xl font-bold mb-4">Resources Page</h1>

        {/* Input to add resource */}
        <div className="flex gap-2 mb-4">
            <input
            type="text"
            value={resourceText}
            onChange={(e) => setResourceText(e.target.value)}
            placeholder="Add a resource link or note"
            className="border p-2 rounded flex-1"
            />
            <button
            onClick={addResource}
            className="bg-black text-white px-4 rounded hover:bg-gray-800"
            >
            Add
            </button>
        </div>

        <div className="space-y-3">
            {resources.length === 0 && (
            <p className="text-gray-500">No resources yet. </p>
            )}

            {resources.map((res, index) => (
            <div
                key={index}
                className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
            >
                <p className="text-gray-800">{res}</p>
                <button
                onClick={() => deleteResource(index)}
                className="text-red-500"
                >
                Delete
                </button>
            </div>
            ))}
        </div>
        </div>
    );
}

export default Resources;
import React, { useState, useRef } from 'react';

export default function CreateAssignment() {
  const [formData, setFormData] = useState({
    topic: '',
    keywords: null,
    diagrams: null,
    equations: null,
    deadline: ''
  });

  const keywordsInputRef = useRef(null);
  const diagramsInputRef = useRef(null);
  const equationsInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: files ? files[0] : value
    }));
  };

  const handleClear = () => {
    setFormData({
      topic: '',
      keywords: null,
      diagrams: null,
      equations: null,
      deadline: ''
    });

    // Clear file inputs using refs
    if (keywordsInputRef.current) keywordsInputRef.current.value = '';
    if (diagramsInputRef.current) diagramsInputRef.current.value = '';
    if (equationsInputRef.current) equationsInputRef.current.value = '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.topic || !formData.deadline || !formData.keywords) {
      console.error('Error: Topic, deadline, and keywords cannot be null.');
      return;
    }
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-white mb-6 text-3xl font-bold sm:text-5xl xl:text-5xl">Create Assignment</h1>
      <div className="bg-white-500 max-w-[1222px] mx-auto px-4 sm:px-8 xl:px-0 mt-8">
        <div className="text-center">
          <form className="bg-white p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="topic" className="block text-gray-700 text-sm font-bold mb-2">Topic:</label>
              <input type="text" id="topic" name="topic" value={formData.topic} onChange={handleChange} className="button-border-gradient relative rounded-lg text-black text-sm flex items-center gap-1.5 py-2 px-5 mx-3 shadow-button hover:button-gradient-hover w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="keywords" className="block text-gray-700 text-sm font-bold mb-2">Keywords (PDF):</label>
              <input ref={keywordsInputRef} type="file" id="keywords" name="keywords" onChange={handleChange} className="button-border-gradient relative rounded-lg text-black text-sm flex items-center gap-1.5 py-2 px-5 mx-3 shadow-button hover:button-gradient-hover w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="diagrams" className="block text-gray-700 text-sm font-bold mb-2">Diagrams (PDF):</label>
              <input ref={diagramsInputRef} type="file" id="diagrams" name="diagrams" onChange={handleChange} className="button-border-gradient relative rounded-lg text-black text-sm flex items-center gap-1.5 py-2 px-5 mx-3 shadow-button hover:button-gradient-hover w-full " />
            </div>
            <div className="mb-4">
              <label htmlFor="equations" className="block text-gray-700 text-sm font-bold mb-2">Equations (PDF):</label>
              <input ref={equationsInputRef} type="file" id="equations" name="equations" onChange={handleChange} className="button-border-gradient relative rounded-lg text-black text-sm flex items-center gap-1.5 py-2 px-5 mx-3 shadow-button hover:button-gradient-hover w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="deadline" className="block text-gray-700 text-sm font-bold mb-2">Deadline:</label>
              <input type="date" id="deadline" name="deadline" value={formData.deadline} onChange={handleChange} className="button-border-gradient relative text-black text-sm mx-3 shadow-button hover:button-gradient-hover w-full border rounded-lg py-2 px-4 bg-blue-100 bg-opacity-50 hover:bg-opacity-75 focus:outline-none focus:border-blue-500" />
            </div>
            <button type="submit" className="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80">Create Assignment</button>
            <button className="hero-button-gradient inline-flex rounded-lg py-3 px-7 mx-2 text-white font-medium ease-in duration-300 hover:opacity-80" onClick={handleClear}>Clear</button>
          </form>
        </div>
      </div>
    </div>
  );
}

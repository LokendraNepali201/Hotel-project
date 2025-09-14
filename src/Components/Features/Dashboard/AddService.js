import React, { useState } from 'react';

const ServiceAdmin = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({ name: '', description: '', img: null });

  const handleChange = (e) => {
    setNewService({ ...newService, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setNewService({ ...newService, img: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newService.name || !newService.description || !newService.img) {
      alert('Please fill all fields!');
      return;
    }

    // Store service with image preview (use URL.createObjectURL)
    const newServiceData = {
      ...newService,
      img: URL.createObjectURL(newService.img),
    };

    setServices([...services, newServiceData]);
    setNewService({ name: '', description: '', img: null });
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    color: '#000000',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Manage Services</h1>

      {/* Add Service */}
      <div style={cardStyle}>
        <h2 className="text-3xl font-bold mb-6 text-center">Add Service</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Service Name"
            value={newService.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <textarea
            name="description"
            placeholder="Service Description"
            value={newService.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
          />

          {/* Preview before submitting */}
          {newService.img && (
            <div className="mt-2">
              <p className="text-sm font-semibold">Preview:</p>
              <img
                src={URL.createObjectURL(newService.img)}
                alt="Preview"
                className="w-24 h-24 object-cover rounded mt-1"
              />
            </div>
          )}

          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow"
          >
            Add Service
          </button>
        </form>
      </div>

      {/* Services List */}
      <div style={cardStyle}>
        <h2 className="text-2xl mb-4 font-semibold">Services List</h2>
        {services.length === 0 ? (
          <p>No services added yet.</p>
        ) : (
          <ul className="space-y-3">
            {services.map((service, i) => (
              <li
                key={i}
                className="border p-3 rounded flex items-start gap-4 bg-gray-50"
              >
                <img
                  src={service.img}
                  alt={service.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="font-bold text-lg">{service.name}</h3>
                  <p>{service.description}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ServiceAdmin;

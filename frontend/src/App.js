import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus('');

    try {
      const response = await axios.post('http://localhost:5001/api/submit', formData);
      if (response.data.success) {
        setSubmitStatus('Form submitted successfully!');
        setFormData({ name: '', email: '', message: '' });
        fetchUsers();
      }
    } catch (error) {
      setSubmitStatus('Error submitting form. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/users');
      if (response.data.success) {
        setUsers(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <div className="container">

              <h1>Punita Form Submission</h1>    
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="Email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

         <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>

          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>

        {submitStatus && (
          <div className={`status ${submitStatus.includes('Error') ? 'error' : 'success'}`}>
            {submitStatus}
          </div>
        )}

        <div className="users-section">
          <h2>Submitted Data</h2>
          {users.length > 0 ? (
            <div className="users-list">
              {users.map((user) => (
                <div key={user._id} className="user-card">
                  <h3>{user.name}</h3>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Message:</strong> {user.message}</p>
                  <p><small>Submitted: {new Date(user.createdAt).toLocaleString()}</small></p>
                </div>
              ))}
            </div>
          ) : (
            <p>No submissions yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

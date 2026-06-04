const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || 'Something went wrong. Please try again.');
  return data;
}

export const api = {
  getApprovedFeedback: () => request('/feedback/approved'),
  submitFeedback: (payload) => request('/feedback', { method: 'POST', body: JSON.stringify(payload) }),
  submitContact: (payload) => request('/contact', { method: 'POST', body: JSON.stringify(payload) }),
};

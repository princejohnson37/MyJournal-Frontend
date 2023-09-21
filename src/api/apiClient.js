import axios from "axios";
async function apiClient({ method, endpoint, headers }, data = null) {
  try {
    const config = {
      method: method,
      url: endpoint,
      headers: headers,
      data: data ? JSON.stringify(data) : null, // Convert data to JSON if provided
    };

    const response = await axios(config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    // Handle errors here
  }
}

export default apiClient;

function MyComponent({ apiService }) {
  // Use the injected API service
}

const apiService = new ApiService();
<MyComponent apiService={apiService} />;

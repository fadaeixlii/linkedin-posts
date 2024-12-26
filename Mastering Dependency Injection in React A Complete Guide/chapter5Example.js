useEffect(() => {
  const apiService = new ApiService();
  return () => apiService.dispose();
}, []);

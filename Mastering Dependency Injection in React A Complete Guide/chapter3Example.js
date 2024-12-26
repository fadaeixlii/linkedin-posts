const ApiServiceContext = React.createContext();

function MyComponent() {
  const apiService = useContext(ApiServiceContext);
  // Use apiService here
}

<ApiServiceContext.Provider value={new ApiService()}>
  <MyComponent />
</ApiServiceContext.Provider>;

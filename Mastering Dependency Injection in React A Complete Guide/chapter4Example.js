import { createContainer, asClass } from "awilix";

const container = createContainer();
container.register({
  apiService: asClass(ApiService).singleton(),
});

function App() {
  const apiService = container.resolve("apiService");
  return <MyComponent apiService={apiService} />;
}

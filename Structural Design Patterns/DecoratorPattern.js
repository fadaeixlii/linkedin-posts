const ContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Context.Provider value={{ darkMode, setDarkMode }}>
      {" "}
      {children}{" "}
    </Context.Provider>
  );
};

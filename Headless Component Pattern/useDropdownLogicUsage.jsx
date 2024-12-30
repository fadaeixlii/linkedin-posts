function useDropdownLogic() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return {
    isOpen,
    toggleDropdown,
  };
}

function Dropdown({ children }) {
  const { isOpen, toggleDropdown } = useDropdownLogic();
  return (
    <div>
      <button onClick={toggleDropdown}>Toggle</button>
      {isOpen && <div>{children}</div>}
    </div>
  );
}

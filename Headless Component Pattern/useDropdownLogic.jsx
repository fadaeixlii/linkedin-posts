function useDropdownLogic() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return {
    isOpen,
    toggleDropdown,
  };
}

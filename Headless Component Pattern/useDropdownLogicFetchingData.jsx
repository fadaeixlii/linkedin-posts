function useDropdownLogic(fetchData) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (isOpen) {
      fetchData().then(setOptions);
    }
  }, [isOpen, fetchData]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return {
    isOpen,
    options,
    toggleDropdown,
  };
}

function useDropdownLogic() {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setHighlightedIndex((prev) => (prev === null ? 0 : prev + 1));
    }
    if (e.key === "ArrowUp") {
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : null));
    }
  };

  return {
    isOpen,
    highlightedIndex,
    toggleDropdown,
    handleKeyDown,
  };
}

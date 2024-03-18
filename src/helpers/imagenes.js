export function imagen() {
    useEffect(() => {
        fetch("https://picsum.photos/350")
          .then((response) => response.url)
          .then((response) => {
            setImageUrl();
          });
      }, []);
}
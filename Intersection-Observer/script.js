document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector("#privy-container");
    if (section) {
        const objOptions = {
            root: null,
            threshold: [1],
            rootMargin: "0px"
        };

        const sectionObserver = new IntersectionObserver(callBackFunction, objOptions);
        sectionObserver.observe(section);

        function callBackFunction(entries) {
            const [entry] = entries;
            if (entry.isIntersecting) {
                console.log("isIntersecting");
            }
        }

    }
});


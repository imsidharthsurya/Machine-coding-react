import { useEffect } from "react";

const InfiniteScroll = ({ data, setPageNumber }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log("entries are: ", entries);
        if (entries[0].isIntersecting) {
          setPageNumber((prev) => prev + 1);
          observer.unobserve(lastPic);
        }
      },
      {
        threshold: 1,
      }
    );
    const lastPic = document.querySelector(".img-card:last-child");
    observer.observe(lastPic);
    return () => {
      observer.unobserve(lastPic);
    };
  }, [data]);
  return (
    <div>
      {data.map((img, index) => {
        return <img key={img.id} src={img.download_url} className="img-card" />;
      })}
    </div>
  );
};

export default InfiniteScroll;

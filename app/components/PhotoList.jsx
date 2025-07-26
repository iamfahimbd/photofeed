import PhotoCard from "./PhotoCard";

export default function PhotoList({ photos }) {
  console.log(photos.length);
  return (
    <div className="img-grid">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
}

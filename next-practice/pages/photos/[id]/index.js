import Image from "next/image";
import Link from "next/link";

const index = ({ photo }) => {
  const {title, url} = photo;

  return (
    <div>
      <h2>{title}</h2>
      <Image
        src={url}
        width={500}
        height={500}
        alt={title}
      />
      <Link href="/photos">
        <a>go back</a>
      </Link>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/2`);
  const photo = await res.json();
  return {
    props: {
      photo: photo
    }
  }
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`);
  const photos = await res.json();
  photos.map(photo => photo.id);
  const paths = ids.map(id => {
    return {
      params: {id: id.toString()}
    }
  })

  return {
    paths: paths,
    fallback: false
  }
}
 
export default index;
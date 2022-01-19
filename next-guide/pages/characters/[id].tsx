import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import imageLoader from "../../imageLoader";
import { Character, GetCharacterResults } from "../../types";

function CharacterPage({character}: {
  character: Character
}) {
  const router = useRouter();

  console.log(router.query.id);
  return <div>
    <h1>{character.name}</h1>
    <Image 
      loader={imageLoader}
      unoptimized
      src={character.image}
      alt={character.name}
      width="200px"
      height="200px"
    />
  </div>;
}

export async function getStaticPaths() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results }: GetCharacterResults = await res.json();

  return {
    paths: results.map((character) => {
      return {
        params: {
          id: String(character.id)
        }
      }
    }),
    fallback: false
  }
  
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${context.query.id}`
  )
  const character = await res.json();
  return {
    props: {
      character
    }
  }
} 


export default CharacterPage;
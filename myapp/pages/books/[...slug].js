import {useRouter} from 'next/router';

function Slug() {
  const router = useRouter();

  console.log(router);

  return (
    <h1>Slug Page</h1>
  )
}

export default Slug;
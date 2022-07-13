import {useRouter} from 'next/router';

function BookDetail() {
  const router = useRouter();
  console.log(router.query.id);

  return (
    <h1>Book Detail</h1>
  )
}

export default BookDetail;
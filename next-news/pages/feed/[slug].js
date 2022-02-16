const Feed = ({ pageNumber, articles }) => {
  return (
    <>
      Hello World
    </>
  )
};

export const getServerSideProps = async pageContext => {
  const pageNumber = pageContext.query.slug;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    
  }
}

export default Feed;
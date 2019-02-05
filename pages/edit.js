const Edit = ({ id }) => (
  <div>
    <h1>{id}</h1>
    <p>Welcome to the edit page for {id}!</p>
  </div>
)
Edit.getInitialProps = async ({ query }) => {
  return { id: query.id }
}
export default Edit

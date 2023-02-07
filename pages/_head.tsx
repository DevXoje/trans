const Head = () => {
  const headData = {
    title: 'Jose Vilches Porfolio',
    description: 'Este porfolio mola'
  }
  return (
    <>
      <title>{headData.title}</title>
      <meta name='description' content={headData.description} />

      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <link rel='icon' href='/favicon.ico' />
    </>
  )
}
export default Head

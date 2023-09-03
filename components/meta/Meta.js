import Head from "next/head"
const Meta = ({title, keywords, description}) => {
  return (
    <>
      <Head>
        <title>{title}-famms-ecommerce</title>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="keywords" content={keywords}/>
        <meta name="description" content={description}/>
      </Head>
    </>
  )
}

Meta.defaultProps={
    title:"famms-ecommerce",
    keywords:"t-shirt, mens, womans, shirt, pant",
    description:"Here you will find all stylish shirt/pant"

}

export default Meta

function Tempo(props){
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            <div>{dynamicDateString} (dinamico)</div>
            <div>{props.staticDateString} (estatico)</div>
        </div>
    )
}

export async function getStaticProps() {
    console.log("> passando pelo props.");

    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        },
        revalidate: 1
    };
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default Tempo;
function Tempo(props){
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            <div>{dynamicDateString} (dinamico)</div>
            <div>{props.staticDateString} (estatico - com delay)</div>
        </div>
    )
}

export async function getStaticProps() {
    console.log("> Adicionando delay de 5 segundos.");

    await delay(5000);

    console.log("> Depois delay de 5 segundos.");

    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        }
    };
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default Tempo;
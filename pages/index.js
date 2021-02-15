import Head from "next/head"



function Home() {
    return (
        <div>
            <Head>        
                <link rel="manifest" href="/manifest.json" />
                <link rel="manifest" href="/static/manifest.json" />
            </Head>
            <style jsx>{`
        body{
            margin: 0;
            background-image: url('/img.jpg');
            background-size: cover;
            background-repeat: no-repeat;
        }
                
        `}</style>
        </div>
    
    )

}

export default Home
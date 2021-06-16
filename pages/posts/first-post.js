import Link from "next/link";
import Image from "next/image";



export default function FirstPost() {
    return(
        <>

        <h1>First Post</h1>

        <Image
        src="/img.jpg"
        height={600}
        width={600}
        alt="Chris"
        />

        <Image src='/Images/diferencia-entre-gif-png-y-jpg1.webp'
        height={600}
        width={600}
        alt="Chris"
        />

        <h2>
            <Link href="/">
            <a>Back to principal page</a>
            </Link>
        </h2>
        </>
    )
}
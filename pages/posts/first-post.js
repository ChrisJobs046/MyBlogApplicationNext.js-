import Link from "next/link";
import Image from "next/image";


export default function FirstPost() {
    return(
        <>

        <h1>First Post</h1>

        <Image
        src="/public/Images/img.jpg"
        height={500}
        width={500}
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
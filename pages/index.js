import { useState } from 'react';
import Link from 'next/link';

function Home() {
    return <div>
        <div>Home</div>
        <Link href="/sobre">
            <a>Sobre</a>
        </Link>
    </div>;
}

export default Home
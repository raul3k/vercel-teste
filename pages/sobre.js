import { useState } from 'react';
import Link from 'next/link';

function Sobre() {
    return <div>
        <div>Sobre</div>
        <div>
            <Link href="/">
            <a>Home</a>
            </Link>
        </div>
    </div>;
}

export default Sobre
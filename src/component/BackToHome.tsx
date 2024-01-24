import Link from 'next/link';

export function BackToHome() {
    return (
        <Link href="/">
            <button className="button-back">
                {`<-- Back to Home`}
            </button>
        </Link>
    )
}
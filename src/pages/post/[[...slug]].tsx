import Link from 'next/link';
import { useRouter } from 'next/router';

const Post = () => {
    const router = useRouter();
    console.log(router);
    // const [name, classId, score] = router.query.slug || [];

    // console.log(`name: ${name}, class: ${classId}, score: ${score}`);

    return (
        <div>
            <Link
                href={{
                    pathname: '/',
                }}
            >
                Go back to main page
            </Link>
        </div>
    );
};

export default Post;

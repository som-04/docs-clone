import Link from "next/link";
const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      click
      <Link href="/documents/123">
        <span className="text-blue-500">&nbsp;here&nbsp;</span>
      </Link>
      s to go to document id
    </div>
  );
};

export default Home;

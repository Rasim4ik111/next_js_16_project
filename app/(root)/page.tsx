import Hello from "@/app/components/hello";

const Home = () => {
    return (
        <div className = "text-5xl underline">
            Welcome to Next.js !
            <Hello/>
        </div>
    );
};

export default Home;
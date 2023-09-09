import logo from './assets/react-logo.png';
import Navbar from './components/Navbar';
import VideoCard from './components/VideoCard.jsx';

function App() {
    return (

        <div className="min-h-screen w-screen overflow-x-hidden bg-primary text-text-primary">
            <Navbar />
            <h1 className="px-8 py-6 text-3xl font-bold">Anime List</h1>
            <div>

                <ul className="flex flex-wrap gap-32">
                    <VideoCard
                        title="Spunchbob Squarepants"
                        thumbnailURL="https://m.media-amazon.com/images/I/812xdKnUlmL.jpg"
                    />
                    <VideoCard
                        title="Avater: The Last Airbender"
                        thumbnailURL="https://cdn11.bigcommerce.com/s-b72t4x/images/stencil/1280x1280/products/74409/81219/Avatar_the_Last_Airbender_Poster__47063.1488841748.jpg?c=2"
                    />
                    <VideoCard
                        title="Cowboy Bebop"
                        thumbnailURL="https://m.media-amazon.com/images/I/61eBpHDxJ2L._AC_UF894,1000_QL80_.jpg"
                    />
                    <VideoCard />
                </ul>
            </div>
        </div>
    );
}

export default App;

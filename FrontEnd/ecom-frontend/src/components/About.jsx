import { useDispatch, useSelector } from "react-redux";
import { aboutImage } from "../utils/constant";
import { fetchProducts } from "../store/actions";
import Loader from "./shared/Loader";
import { FaExclamationTriangle } from "react-icons/fa";
import ProductCard from "./shared/ProductCard";
import { useEffect } from "react";

const About = () => {
    const dispatch = useDispatch();
    const {products} = useSelector(state=> state.products);

    const {isLoading, errorMessage} = useSelector(state => state.errors);

    useEffect(()=> {
        dispatch(fetchProducts());
    },[dispatch]);
    return(
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-slate-800 text-4xl font-bold text-center mb-12">
                About Us
            </h1>
            <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <p className="text-lg mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem nesciunt consequatur obcaecati officia, officiis quia fugit, ratione nulla nostrum provident possimus aliquid facere cum in accusantium deserunt veniam autem delectus sequi saepe maiores mollitia! Velit esse ratione aspernatur, voluptas beatae voluptate dolor error vel deserunt quam porro iste non incidunt inventore doloribus necessitatibus quod laborum omnis? Tempore provident vero sapiente sequi rem veniam placeat est enim omnis alias voluptas blanditiis magnam commodi laborum inventore obcaecati incidunt, quibusdam architecto vitae dolorum! Debitis in culpa quae fugit itaque, commodi ipsum est reprehenderit dolorem consequuntur mollitia iure quidem, sit saepe nesciunt repudiandae dolor.</p>
                </div>
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <img 
                    src={aboutImage} 
                    alt="About Us"
                    className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"/>
                </div>
            </div>


            <div className="py-7 space-y-8">
                <h1 className="text-slate-800 text-4xl font-bold text-center mb-12">
                    Our Products
                </h1>
                <div className="py-5">
                {isLoading?(
                    <Loader/>
                ):(
                    errorMessage?(
                        <div className="flex justify-center items-center h-[200px]">
                        <FaExclamationTriangle className="text-slat-800 text-3xl mr-2" />
                        <span className="text-slate-800 text-lg font-medium">
                            {errorMessage}
                        </span>
                    </div>
                    ):(
                    <div className="pb-6 pt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 gap-x-6">
                        {products && 
                        products?.slice(0,4)
                                .map((item,i)=>
                                <ProductCard key={i} {...item} about={true}/>
                        )}
                    </div>)
                )}
                </div>
            </div>
        </div>  
    );
};
export default About;
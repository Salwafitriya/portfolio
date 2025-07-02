import { FaGithub, FaYoutube, FaExternalLinkAlt, FaFigma } from 'react-icons/fa';

const CardProject = ({ imageUrl, tag, title, description, links = {} }) => {
    return (
        <div className="h-full bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col">
            {/* Gambar - bukan link */}
            <div className="overflow-hidden">
                <img 
                    src={imageUrl} 
                    alt={title}
                    className="object-cover h-48 w-full transition-transform duration-500 hover:scale-105"
                />
            </div>
            
            {/* Konten card */}
            <div className="p-6 flex-grow">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-2">
                    {tag}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                
                {/* Button Group */}
                <div className="mt-auto flex flex-wrap gap-2">
                    {links.demo && (
                        <a
                            href={links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                        >
                            <FaExternalLinkAlt className="mr-2" />
                            Demo
                        </a>
                    )}
                    
                    {links.github && (
                        <a
                            href={links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
                        >
                            <FaGithub className="mr-2" />
                            GitHub
                        </a>
                    )}
                    
                    {links.youtube && (
                        <a
                            href={links.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                        >
                            <FaYoutube className="mr-2" />
                            YouTube
                        </a>
                    )}
                    {links.figma && (
                        <a
                            href={links.figma}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-red-700 transition"
                        >
                            <FaFigma className="mr-2" />
                            Figma
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CardProject;
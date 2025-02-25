
interface InfoCardProps {
    title: string;
    content: string | string[];
}
const InfoCard: React.FC<InfoCardProps> = ({ title, content }) => {
    return (
        <div className="p-5 bg-card-bg-light dark:bg-card-bg-dark rounded-xl shadow">
            <h2 className="text-card-h2-light dark:text-card-h2-dark  text-3xl font-bold mb-2 pb-4">{title}</h2>
            {Array.isArray(content) ? (
                <ul className="list-none pl-3 space-y-2">
                    {content.map((item, index) => (
                        <li
                            key={index}
                            className="
                            relative pl-7 before:content-[''] 
                            before:absolute before:left-0 before:top-1/2 before:w-5 before:h-1 
                            before:bg-black before:rounded-full before:-translate-y-1/2
                            text-card-paragraph-light dark:text-card-paragraph-dark text-xl
                            "
                        >
                            {item}
                        </li>
                    ))}
                </ul>

            ) : (
                <p className="text-card-paragraph-light dark:text-card-paragraph-dark pe-3 text-xl">{content}</p>
            )}
        </div>
    );
};

export default InfoCard;
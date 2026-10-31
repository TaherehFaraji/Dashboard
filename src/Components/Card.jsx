function Card({ children, className = "", title }) {
    return (
        <div className={`bg-white border-3 border-black rounded-[2rem] p-5 flex flex-col ${className}`}>
            {title && (
                <h2 className="text-red-500 font-bold text-lg mb-4 text-right">
                    {title}
                </h2>
            )}
            <div className="flex-1">
                {children}
            </div>
        </div>
    )
}

export default Card
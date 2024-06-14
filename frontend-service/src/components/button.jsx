export default function Button({className, content, onClick}){
    return (
        <button className={`bg-darkb text-white rounded-md py-2 ${className} font-bold`} onClick={onClick}>
            {content}
        </button>
    )
}
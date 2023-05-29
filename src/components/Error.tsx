
interface IErrorProps {
    message: string;
}

const Error = ({ message } : IErrorProps) => {
    return (
        <div className="p-5 m-2 bg-red-700 rounded-2xl">
            {message}
        </div>
    );
};

export default Error;
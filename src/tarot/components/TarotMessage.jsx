export const TarotMessage = ({ title, message, color }) => {
  return (
    <div className="mt-10">
      <div
        className={`${color} "px-4 py-5 sm:px-6 sm:py-6 sm:rounded-lg sm:shadow-xl"`}
      >
        <h3 className="text-xl font-semibold leading-6 text-white">{title}</h3>
        <div className="mt-2 text-md text-gray-100">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

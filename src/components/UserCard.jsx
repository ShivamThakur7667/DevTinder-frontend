import React from "react";

const UserCard = ({ user }) => {
  if (!user) return null;

  const { firstName, lastName, about, age, gender, imageURL } = user;

  return (
    <div className="card bg-base-300 w-96 shadow-sm flex flex-col items-center p-4">
      <figure className="w-full flex justify-center mt-4">
        <img
          src={imageURL || "https://static.vecteezy.com/system/resources/previews/005/544/718/original/yesterday-concept-icon-past-time-history-events-previous-day-idea-thin-line-illustration-isolated-outline-drawing-editable-stroke-vector.jpg"}
          alt={`${firstName} ${lastName}`}
          className="rounded-xl h-48 w-48 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h3 className="card-title text-2xl">
          {firstName + " " + lastName}
        </h3>
        {age && gender && (
          <div className="flex gap-2 text-sm opacity-70">
            <span>{age} years old</span>
            <span>•</span>
            <span>{gender}</span>
          </div>
        )}
        <p className="mt-2 text-gray-400">{about}</p>

        <div className="card-actions mt-4">
          <button className="btn btn-outline btn-error">Ignore</button>
          <button className="btn btn-primary btn-wide">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

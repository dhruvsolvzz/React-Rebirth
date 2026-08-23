const UserCard = ({ user }) => {
  return (
    <div className="w-80 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      
      <img
        src={user.image}
        alt={user.firstName}
        className="mx-auto h-24 w-24 rounded-full object-cover"
      />

      <div className="mt-4 text-center">
        <h2 className="text-lg font-semibold">
          {user.firstName} {user.middleName} {user.lastName}
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          {user.email}
        </p>

        <p className="mt-1 text-sm text-gray-600">
          @{user.username}
        </p>

        <p className="mt-1 text-sm text-gray-600">
          Age: {user.age}
        </p>
      </div>

    </div>
  );
};

export default UserCard;
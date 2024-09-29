const TeamSection = ({ teamMembers }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-4 dark:bg-base-100"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
            <p className="mt-2 text-gray-800 dark:text-gray-300">
              {member.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TeamSection

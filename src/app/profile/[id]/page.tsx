export default function UserProfile({ params }: { params: { id: string } }) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Profile</h1>
          <hr className="mb-4" />
          <p className="text-gray-600 text-center">
            Profile Page:
            <span className="ml-2 px-3 py-1 rounded bg-orange-500 text-black font-medium">
              {params?.id || "N/A"}
            </span>
          </p>
        </div>
      </div>
    );
  }  
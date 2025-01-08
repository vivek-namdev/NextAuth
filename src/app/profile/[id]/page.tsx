// app/profile/[id]/page.tsx

export default async function UserProfile({ params }: { params: { id: string } }) {
  // Since `params` is already passed as a prop, there's no need to await it here.
  const { id } = params;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Profile</h1>
        <hr className="mb-4" />
        <p className="text-gray-600 text-center">
          Profile Page:
          <span className="ml-2 px-3 py-1 rounded bg-orange-500 text-black font-medium">
            {id || "N/A"}
          </span>
        </p>
      </div>
    </div>
  );
}
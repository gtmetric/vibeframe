interface User {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

export default function UserDetailPage({ user }: { user: User | null }) {
  if (!user) {
    return (
      <div>
        <h1>User Not Found</h1>
        <a href="/users">Back to users</a>
      </div>
    );
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Created: {user.createdAt}</p>
      <a href="/users">Back to users</a>
    </div>
  );
}

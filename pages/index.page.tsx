import Head from 'next/head';
import Image from 'next/image';
import { Button, Space, DatePicker, Card } from 'antd';
import { useUser } from '@auth0/nextjs-auth0';

export default function Home() {
  const { user, error, isLoading } = useUser();
  return (
    <div className="p-10">
      <div>{user ? `User: ${user.name}` : null}</div>

      <div>HI</div>
      <Button href="/api/auth/logout" className="bg-red-300">
        Logout
      </Button>
      <Button href="/api/auth/login">Login</Button>
      <Button href="/dashboard">Dashboard</Button>
    </div>
  );
}

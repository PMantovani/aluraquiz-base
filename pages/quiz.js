import React from 'react';
import { useRouter } from 'next/router';

export default function QuizPage() {
  const router = useRouter();

  return (
    <p>
      Página do quiz do
      {' '}
      { router.query.name }
    </p>
  );
}

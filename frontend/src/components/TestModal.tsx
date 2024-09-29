'use client';

import React, { useState } from 'react';
import LoginModal from './LoginModal';

const TestModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default TestModal;
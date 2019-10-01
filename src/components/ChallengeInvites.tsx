import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';

interface ChallengeInvite {}

export default function ChallengeInvites() {
  const [isOpen, toggleIsOpen] = useState(false);

  return (
    <Card>
      <CardHeader title="Pending Invites"></CardHeader>
      <CardContent></CardContent>
    </Card>
  );
}

// function ChallengeInvite();

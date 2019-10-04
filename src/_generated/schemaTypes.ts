/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: homePageQuery
// ====================================================

export interface homePageQuery_authenticatedUser {
  __typename: "User";
  displayName: string;
}

export interface homePageQuery {
  authenticatedUser: homePageQuery_authenticatedUser;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateChallenge
// ====================================================

export interface CreateChallenge_createChallenge {
  __typename: "Challenge";
  id: string;
  name: string;
}

export interface CreateChallenge {
  createChallenge: CreateChallenge_createChallenge;
}

export interface CreateChallengeVariables {
  newChallenge: NewChallenge;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface NewChallenge {
  name: string;
  startDate: string;
  endDate: string;
  entryFee: number;
}

//==============================================================
// END Enums and Input Objects
//==============================================================

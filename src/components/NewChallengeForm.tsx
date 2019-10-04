import React from "react";
import {
  TextField,
  InputAdornment,
  Button,
  Grid,
  Typography
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import moment, { Moment } from "moment";
import MomentUtils from "@date-io/moment";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import {
  NewChallenge,
  CreateChallengeVariables,
  CreateChallenge
} from "../_generated/schemaTypes";

interface State {
  name: string;
  entryFee: number;
  startDate: Moment;
  endDate: Moment;
}

const CREATE_CHALLENGE = gql`
  mutation CreateChallenge($newChallenge: NewChallenge!) {
    createChallenge(newChallenge: $newChallenge) {
      id
      name
    }
  }
`;

export default function NewChallengeForm() {
  const [name, setName] = React.useState<string>("");
  const [entryFee, setEntryFee] = React.useState<number>(0);
  const [startDate, setStartDate] = React.useState<Moment>(moment());
  const [endDate, setEndDate] = React.useState<Moment>(
    moment().add(4, "weeks")
  );
  const [createChallenge] = useMutation<
    CreateChallenge,
    CreateChallengeVariables
  >(CREATE_CHALLENGE);
  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={e => {
        e.preventDefault();
        const newChallenge: NewChallenge = {
          name,
          entryFee,
          startDate: startDate.format(),
          endDate: endDate.format()
        };
        createChallenge({
          variables: { newChallenge }
        });
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h5">New Challenge</Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            id="challengeName"
            label="Challenge Name"
            value={name}
            onChange={e => setName(e.target.value)}
            margin="normal"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            id="entry-fee"
            label="Entry Fee"
            value={entryFee}
            onChange={e => setEntryFee(parseInt(e.target.value))}
            margin="normal"
            fullWidth
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              )
            }}
          />
        </Grid>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Grid item xs={6}>
            <KeyboardDatePicker
              margin="normal"
              id="start-date-picker"
              label="Start Date"
              fullWidth
              value={startDate}
              onChange={e => e !== null && setStartDate(e)}
            />
          </Grid>
          <Grid item xs={6}>
            <KeyboardDatePicker
              margin="normal"
              id="end-date-picker"
              label="End Date"
              fullWidth
              value={endDate}
              onChange={e => e !== null && setEndDate(e)}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <Button variant="contained" color="primary" type="submit">
          Create Challenge
        </Button>
      </Grid>
    </form>
  );
}

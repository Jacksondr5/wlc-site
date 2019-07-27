import React from 'react';
import {
  TextField,
  InputAdornment,
  Button,
  Grid,
  Typography
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import moment, { Moment } from 'moment';
import MomentUtils from '@date-io/moment';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

interface State {
  name: String;
  entryFee: Number;
  startDate: Moment;
  endDate: Moment;
}

export default function NewChallengeForm() {
  const [state, setState] = React.useState<State>({
    name: '',
    entryFee: 0,
    startDate: moment(),
    endDate: moment().add(4, 'weeks')
  });
  const handleChange = (name: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState({ ...state, [name]: event.target.value });
  };
  const handleDatechange = (name: keyof State) => (
    date: MaterialUiPickersDate,
    value?: string | null | undefined
  ) => setState({ ...state, [name]: date });
  return (
    <form noValidate autoComplete="off">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h5">New Challenge</Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            id="challengeName"
            label="Challenge Name"
            value={state.name}
            onChange={handleChange('name')}
            margin="normal"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            id="entry-fee"
            label="Entry Fee"
            value={state.entryFee}
            onChange={handleChange('entryFee')}
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
              value={state.startDate}
              onChange={handleDatechange('startDate')}
            />
          </Grid>
          <Grid item xs={6}>
            <KeyboardDatePicker
              margin="normal"
              id="end-date-picker"
              label="End Date"
              fullWidth
              value={state.endDate}
              onChange={handleDatechange('endDate')}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </Grid>
    </form>
  );
}

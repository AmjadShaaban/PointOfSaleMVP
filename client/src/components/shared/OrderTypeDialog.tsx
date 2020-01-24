import React, { FC, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import OrderTypeDialogTabs from './OrderTypeDialogTabs';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import { OrderTypes } from '../../contexts/order';

const useStyles = makeStyles(theme => ({
  depositContext: {
    flex: 1
  },
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Transition = React.forwardRef<unknown, TransitionProps>(
  function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
  }
);
const OrderTypeDialog: FC<{ onCancel: () => void; isOpen: boolean }> = ({
  onCancel,
  isOpen
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [type, setType] = useState('');
  const classes = useStyles();

  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      aria-labelledby='alert-dialog-slide-title'
      aria-describedby='alert-dialog-slide-description'
    >
      <DialogTitle id='alert-dialog-slide-title'>{`New Order`}</DialogTitle>
      <DialogContent>
        <FormControl component='fieldset'>
          <form
            className={classes.form}
            noValidate
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <FormLabel component='legend'>Type</FormLabel>
            <RadioGroup
              aria-label='type'
              name='type'
              value={type}
              onChange={e => setType(e.target.value)}
              row
            >
              <FormControlLabel
                value={OrderTypes.DELIVERY}
                control={<Radio color='primary' />}
                label={OrderTypes.DELIVERY}
                labelPlacement='top'
              />
              <FormControlLabel
                value={OrderTypes.PICKUP}
                control={<Radio color='primary' />}
                label={OrderTypes.PICKUP}
                labelPlacement='top'
              />
              <FormControlLabel
                value={OrderTypes.ORDER_IN}
                control={<Radio color='primary' />}
                label={OrderTypes.ORDER_IN}
                labelPlacement='top'
              />
            </RadioGroup>{' '}
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='name'
              value={name}
              onChange={e => setName(e.target.value)}
              label='Customer Name'
              name='name'
              autoFocus
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='phone'
              value={phone}
              onChange={e => setPhone(e.target.value)}
              label='Phone'
              name='phone'
              autoFocus
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='address'
              value={address}
              onChange={e => setAddress(e.target.value)}
              label='Delivery Address'
              name='address'
              autoFocus
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Submit
            </Button>
          </form>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color='secondary'>
          Cancel
        </Button>
        <Button onClick={onCancel} color='primary'>
          Start
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderTypeDialog;
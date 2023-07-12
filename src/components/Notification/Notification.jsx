import PropTypes from 'prop-types';
import { Note } from './Notification.styled';

export default function Notification({ message }) {
  return <Note>{message}</Note>;
}

Notification.propTypes = { message: PropTypes.string };

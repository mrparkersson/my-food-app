import { Fragment } from 'react/cjs/react.production.min';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css'

const Backdrop = (props) =>{
  return <div className={classes.backdrop} onClick={props.onHideCarthandler}></div>
};

const ModalOverlay = props => {
  return <div className={classes.modal}>
    <div className={classes.content} key={Math.random()}>{props.children}</div>
  </div>

};

const portalElemet = document.getElementById('overlays')

const Modal = props =>{
return <Fragment>
  {ReactDOM.createPortal(<Backdrop onHideCarthandler={props.onHideCarthandler}/>, portalElemet)}
  {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElemet)}
</Fragment> 
};
export default Modal; 
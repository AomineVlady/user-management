import React, { useEffect, useState } from "react";
import './ChangeUser.css';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { pathList } from "../../common/constants";
import { updateUserDataRequested } from "../MainPage/Popup/store/popup.action";
import { getUsers } from "../MainPage/store/main-page.action";
import SvgIconArrow from "../../common/svgIcons/SvgIconArrow";

const ChangeUser = () => {
  const user = useSelector(state => state.popupReducer.user);
  const userList = useSelector(state => state.mainPageReducer.userList)
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({
    first_name: user.first_name,
    last_name: user.last_name
  });

  const handleSubmit = () => {
    dispatch(updateUserDataRequested(user._id, formValue));
  }

  const handleChange = (evt) => {
    setFormValue({
      ...formValue,
      [evt.target.name]: evt.target.value
    });
  }

  useEffect(() => {
    const changedUserList = userList.map(userData => {
      if (userData.id === user.id) {
        return {
          ...userData,
          name: user.first_name,
          surname: user.last_name,
          updatedAt: user.updatedAt
        }
      }
      else return userData;
    })
    dispatch(getUsers(changedUserList));
  }, [dispatch, user, userList])


  return (
    <div className="overlay">
      <form action="/" className="change__form" onSubmit={handleSubmit}>
        <div className="change__content">
          <label className="change__form-data" htmlFor="user-name">Name:
            <input type="text" id="user-name" name="first_name" defaultValue={user.first_name} onChange={handleChange} />
          </label>
          <label className="change__form-data" htmlFor="user-surname">Surname:
            <input type="text" id="user-surname" name="last_name" defaultValue={user.last_name} onChange={handleChange} />
          </label>
        </div>
        <div className="change__buttons">
          <Link to={pathList.main} className="change__close-button"><SvgIconArrow /></Link>
          <button type="submit" className="change__submit-button">to change</button>
        </div>
      </form>
    </div>
  )
}

export default ChangeUser;
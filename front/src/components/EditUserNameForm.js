import { useSelector } from "react-redux"
import Button from "./Button"
import { useState } from "react"
import { useEditUserNameMutation } from "../authRedux/authApi"
import { useDispatch } from "react-redux"
import { setUserName } from "../authRedux/userSlice"
import "../styles/form.css"

export default function EditUserNameForm() {
  const state = useSelector((state) => state.persistedReducer)
  const dispatch = useDispatch()

  const [newUserName, setNewUserName] = useState("")
  const [isEditUserName, setIsEditUserName] = useState(false)

  const [editUserName, { data }] = useEditUserNameMutation()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await editUserName({ userName: newUserName })
      if (data.status === 200) {
        dispatch(setUserName(newUserName))
      }
      setIsEditUserName(false)
    } catch (error) {
      console.error("Error", error)
    }
  }

  return (
    <>
      {!isEditUserName ? (
        <Button
          text={"Edit Name"}
          className={"btn edit-button"}
          onClick={() => setIsEditUserName(true)}
        />
      ) : (
        <div className="edit-username-content">
          <h1>Edit user infos</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="userName">User name: </label>
              <input
                id="userName"
                placeholder={state.userName}
                onChange={(e) => setNewUserName(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="userFirstName">First name: </label>
              <input id="userFirstName" value={state.firstName} disabled />
            </div>
            <div className="input-wrapper">
              <label htmlFor="userLastName">Last name: </label>
              <input id="userLastName" value={state.lastName} disabled />
            </div>
            <div className="btn-wrapper">
              <Button text={"Save"} className={"btn edit-button"} />
              <Button
                text={"Cancel"}
                className={"btn edit-button"}
                onClick={() => setIsEditUserName(false)}
              />
            </div>
          </form>
        </div>
      )}
    </>
  )
}

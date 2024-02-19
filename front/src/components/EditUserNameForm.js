import { useSelector } from "react-redux"
import Button from "./Button"
import { useState } from "react"
import { useEditUserNameMutation } from "../store/authApi"
import { useDispatch } from "react-redux"
import { setUserName } from "../store/authSlice"
import "../styles/editUserNameForm.css"

export default function EditUserNameForm() {
  const state = useSelector((state) => state.auth)
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
        <>
          <h1>Edit user infos</h1>
          <form onSubmit={handleSubmit} className="edit-form">
            <div className="input-group">
              <label htmlFor="userName">User name: </label>
              <input
                id="userName"
                placeholder={state.userName}
                onChange={(e) => setNewUserName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="userFirstName">First name: </label>
              <input id="userFirstName" value={state.firstName} disabled />
            </div>
            <div className="input-group">
              <label htmlFor="userLastName">Last name: </label>
              <input id="userLastName" value={state.lastName} disabled />
            </div>
            <div className="btn-group">
              <Button text={"Save"} className={"btn edit-button"} />
              <Button
                text={"Cancel"}
                className={"btn edit-button"}
                onClick={() => setIsEditUserName(false)}
              />
            </div>
          </form>
        </>
      )}
    </>
  )
}

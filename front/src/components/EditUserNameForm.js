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
  const [isError, setIsError] = useState(false)

  const [editUserName, { data }] = useEditUserNameMutation()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (newUserName === "") {
      setIsError(true)
      return
    }
    try {
      const { data } = await editUserName({ userName: newUserName })
      if (data.status === 200) {
        setIsError(false)
        dispatch(setUserName(newUserName))
      }
      setIsEditUserName(false)
      setNewUserName("")
    } catch (error) {
      console.error("Error", error)
    }
  }

  const handleCancel = () => {
    setIsEditUserName(false)
    setIsError(false)
    setNewUserName("")
  }

  return (
    <>
      {!isEditUserName ? (
        <Button
          text={"Edit Name"}
          className={"edit-button"}
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
            {isError && (
              <span className="error-message">
                Please enter a user name before save
              </span>
            )}
            <div className="btn-wrapper">
              <Button text={"Save"} className={"edit-button"} />
              <Button
                text={"Cancel"}
                className={"edit-button"}
                onClick={() => handleCancel()}
              />
            </div>
          </form>
        </div>
      )}
    </>
  )
}

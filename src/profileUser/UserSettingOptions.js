import AddFriend from "../FriendsList/addFriend/AddFriend";

/* These are the user options that are displayed as icons in the top left corner of the app. These options allow the
* user to perform actions such as adding a new friend and logging out of the app. */
function UserSettingOptions({userInfo, usersRegisterList, setUsersRegisterList, handleLogout}) {

    // User icon options.
    return (
        <>
            <ul className="icons">
                <i className="bi bi-door-closed logout_icon" onClick={handleLogout}/>
                <i className="bi bi-person-add add_friend_icon" data-bs-toggle="modal"
                   data-bs-target="#addFriendModal"/>
            </ul>
            <div className="modal fade" id="addFriendModal" tabIndex={-1} aria-labelledby="addFriendModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addFriendModalLabel">Add Friend</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <AddFriend userInfo={userInfo}
                                   usersRegisterList={usersRegisterList}
                                   setUsersRegisterList={setUsersRegisterList}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserSettingOptions;
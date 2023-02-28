// React ecosystem imports
import React from "react";

// React-router imports
import { NavLink } from 'react-router-dom';

// Style imports
import styles from './users.module.css'
import userAvatar from '../../assets/img/joe.jpg'

let Users = (props) => {

    let totalPagesCount = Math.ceil(props.totalUsersCount / props.onPageUsersCount)

    let pages = [];

    for (let i = 1; i <= totalPagesCount; i++) {
        if (i < 10) {
            pages.push(i);
        }
    }

    return (
        <div>
            <div>
                {
                    pages.map(page =>
                        <span
                            key={page}
                            onClick={() => { props.onPageChanged(page); props.toggleIsFetching(!props.isFetching) }}
                            className={props.currentPage === page && styles.selectedPage}>{page}</span>)
                }

            </div>
            {
                props.users.map(user =>
                    <div key={user.id}>
                        <span>
                            <div>
                                <NavLink to={`/profile/` + user.id}>
                                    <img
                                        className={styles.avatar}
                                        src={user.photos.small != null ? user.photos.small : userAvatar} alt="Joe Biden" />
                                </NavLink>
                            </div>
                            <div>
                                {user.followed ?
                                    <button
                                        disabled={props.followingInProgress.some(id => id === user.id)}
                                        onClick={() => { props.unfollowUser(user.id) }}>Unfollow</button> :
                                    <button
                                        disabled={props.followingInProgress.some(id => id === user.id)}
                                        onClick={() => { props.followUser(user.id) }}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{"user.location.city"}</div>
                                <div>{"user.location.country"}</div>
                            </span>
                        </span>

                    </div>)
            }
        </div>
    )
}

export default Users;
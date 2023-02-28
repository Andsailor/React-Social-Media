// React ecosystem imports
import React from 'react';

// Styles imports 
import classes from './ProfileInfo.module.css'

// Components imports
import Preloader from '../../common/Preloader/Preloader';

// Images imports
import facebook from '../../../assets/img/facebook.png'
import vk from '../../../assets/img/vk.png'
import twitter from '../../../assets/img/twitter.png'
import instagram from '../../../assets/img/instagram.png'
import github from '../../../assets/img/github.png'

import ProfileStatus from './ProfileStatus.jsx'

const ProfileInfo = (props) => {

    if (!props.profile) {

        return <Preloader />

    }

    let lookingForJobStatus = props.profile.lookingForAJob === true ? 'Looking for a job' : 'Working';

    return (
        <div>
            <div>
                <img className={classes.background} src="https://static.posters.cz/image/hp/61454.jpg" alt="background" />
            </div>
            <div className={classes.description}>
                <img className={classes.avatar} src={props.profile.photos.large} alt="profile avatar" />
                <div>
                    <div className={classes.fullname}>{props.profile.fullName.toUpperCase()}</div>
                    <div className={classes.aboutMe}>
                        <span className={classes.titles}>About me: </span>
                        <span className={classes.text}>{props.profile.aboutMe}</span>
                    </div>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                    <div className={classes.status}>
                        <span className={classes.titles}>Career Status: </span>
                        {<span className={classes.text}>{lookingForJobStatus.toUpperCase()}</span>}
                    </div>
                    <div>
                        <span className={classes.titles}>Contacts:</span>
                        <li>
                            <img className={classes.socials} src={facebook} alt="facebook" />
                            <a href={props.profile.contacts.facebook}>{props.profile.contacts.facebook}</a>
                        </li>
                        <li>
                            <img className={classes.socials} src={vk} alt="vk" />
                            <a href={props.profile.contacts.vk}>{props.profile.contacts.vk}</a>
                        </li>
                        <li>
                            <img className={classes.socials} src={twitter} alt="twitter" />
                            <a href={props.profile.contacts.twitter}>{props.profile.contacts.twitter}</a>
                        </li>
                        <li>
                            <img className={classes.socials} src={instagram} alt="instagram" />
                            <a href={props.profile.contacts.instagram}>{props.profile.contacts.instagram}</a>
                        </li>
                        <li>
                            <img className={classes.socials} src={github} alt="github" />
                            <a href={props.profile.contacts.github}>{props.profile.contacts.github}</a>
                        </li>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;
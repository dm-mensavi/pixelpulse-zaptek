const ProfileCard = (props) => {
    return (
        <div className="profile-info flex gap-3" >
            <figure className="w-14 h-14 rounded-full overflow-hidden">
                {props.profileInfo.image}
            </figure>

            <div className='flex font-semibold flex-col justify-evenly text-base'>
                <h3 className={`${props.nameColor}`}>
                    {props.profileInfo.name}
                </h3>

                <h3 className={`${props.jobColor} opacity-90 text-sm`}>
                    {props.profileInfo.jobTitle}
                </h3>
            </div>
        </div>
    )
}

export default ProfileCard
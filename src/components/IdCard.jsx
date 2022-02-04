export function IdCard(props) {
    return (
        <div className="card">
        <p><b>Full Name:</b>{props.fullName}</p>
        <p><b>Gender:</b>{props.gender}</p>
        <p><b>Birthday:</b>{props.birthday}</p>
        <img src={props.picture} alt='picturePeople' />
        </div>
    );
}


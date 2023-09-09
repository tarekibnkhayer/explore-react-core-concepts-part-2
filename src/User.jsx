export default function User({user}){
    const {name, email, } = user
    return (
        <div className="users">
            <h3>Name: {name} </h3>
            <h3>Email: {email} </h3>
        </div>
    )
}
export default function Worker(props) {
    return (
        <div className='worker'>
            <img src={props.src} alt='' className='img'/>
            <p className='name'>{props.name}</p>
            <p className='role'>{props.role}</p>
        </div>
    );
}
import Worker from './Worker';

export default function HomePage() {
    return (
        <div>
            <div style={{background: 'linear-gradient(rgb(110,4,4),rgb(2, 3, 48))'}} className='content'>
                <p>DCS Sustainable Housing is a business that will make repairing houses in Patulul, Guatemala cheaper. DCS was founded in 2023 by Adam DeBasc, Ben Chesnoff, and Ben Saacks under the belief that expenses should be reduced for housing impoverished people in any way possible. They decided to reduce the expenses by educating the citizens to repair their newly built homes.</p>
                <p>Miguel will be building houses for impoverished Guatemalans with no home in Patulul. However, repairing these houses will be expensive, and the residents won’t be able to afford these repairs. DCS will use a process to educate the residents to repair their homes so that by the time something is broken, they won't have to pay for expensive repairs; they can instead fix their houses themselves.</p>
                <div className='inset'></div>
                <h2>Meet the Team</h2>
                <div className='names'>
                    <Worker name='Ben Saacks' src='https://milkenschool.myschoolapp.com/ftpimages/618/user/large_user_6127551_889.jpg?resize=200,200' role='CEO'/>
                    <Worker name='Adam DeBasc' src='https://milkenschool.myschoolapp.com/ftpimages/618/user/large_user_6455734_256.jpg?resize=200,200' role='COO'/>
                    <Worker name='Ben Chesnoff' src='https://milkenschool.myschoolapp.com/ftpimages/618/user/large_user_6492136_803.jpg?resize=200,200' role='CFO'/>
                </div>
            </div>
        </div>
    );
}
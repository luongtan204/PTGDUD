import Filter from './Filter'
import no_find from '../assets/no_find.png'
function Main(){
    return (
        <>
            <div className="mt-30" id="section">
                <Filter/>
                <p className='text-2xl font-bold'>Sorry, no results were found for cakescascasa</p>
                <img src={no_find} alt="" />
            </div>
        </>
    )
}
export default Main;
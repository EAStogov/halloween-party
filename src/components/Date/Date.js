import './Date.css';

function Date() {
  return(
    <section className='date'>
      <h2 className='date__title'>WHEN?</h2>
      <p className='date__week-day'>СУББОТА</p>
      <div className='date__container'>
        <p className='date__month'>НОЯБРЬ</p>
        <p className='date__day'>04</p>
        <p className='date__time'>16:00</p>
      </div>
    </section>
  )
}

export default Date;
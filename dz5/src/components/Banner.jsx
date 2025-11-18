import bg from '../images/1.png'


export default function Banner() {
  return (
    <section style={{backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '550px'}}>
      <div className='container pt-[115px]'>
        <h1 className='text-[60px] w-[788px] mb-4'>Крупнейшая коллекция природных артефактов</h1>

        <p className='mb-6'>Являясь всего лишь частью общей картины, интерактивные прототипы, которые представляют собой яркий пример европейского типа политической и социальной культуры.</p>

        <p className='text-[#BAE249]'>Исследовать</p>
      </div>
    </section>
  )
}
import flower from '../images/Layer.png';

export default function Flowers() {
  const flowers = [
    {
      id: 1,
      img: flower,
      rate: '1.4',
      title: 'Fig. 1 (plant)',
      description: 'Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.'
    },
    {
      id: 2,
      img: flower,
      rate: '2.4',
      title: 'Fig. 2 (flower)',
      description: 'Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.'
    },
    {
      id: 3,
      img: flower,
      rate: '3.4',
      title: 'Fig. 3 (leaf)',
      description: 'Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.'
    },
    {
      id: 4,
      img: flower,
      rate: '4.4',
      title: 'Fig. 4 (wood)',
      description: 'Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.'
    },
  ]
  return (
    <section className='container mt-[30px]'>
      <div className='flex justify-between gap-[30px]'>
        {
          flowers?.map(flower => (
            <div key={flower.id} className='border border-[#0B1919]'>
              <div className='bg-[#0B1919] py-[36px] px-[16px]'>
                <p className='border border-[#fff] rounded-[50%] w-[30px] h-[30px] flex justify-center items-center'>{flower.rate}</p>
                <img src={flower.img} alt="" />
              </div>
              <div className='p-[16px]'>
                <h2 className='text-[24px]'>{flower.title}</h2>
                <p className='text-[#899D9D] mt-[8px] mb-[16px]'>{flower.description}</p>
                <button className='text-[#BAE249]'>Подробнее</button>
              </div>
            </div>
          )) 
        }
      </div>
    </section>
  )
}
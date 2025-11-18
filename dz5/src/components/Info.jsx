import pho from '../images/Group.png';

export default function Info() {
  return (
    <section className="px-[150px] pt-[70px]">
      <div className="w-[1110px] mx-auto">
        <div className="flex justify-center items-center mb-6">
          <button aria-hidden className="mr-4 text-white">←</button>
          <span className="text-white">1 из 3</span>
          <button aria-hidden className="ml-4 text-white">→</button>
        </div>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-white font-[Cormorant] font-bold text-[48px] leading-none">
              Новые артефакты
            </h1>
          </div>

          <div className="text-white text-sm select-none">
          
          </div>
        </div>


        <div
          className="grid"
          style={{
            gridTemplateColumns: '840px 255px',
            columnGap: '50px',
            alignItems: 'start'
          }}
        >
          <div>
            <img
              src={pho}
              alt="Group"
              className="w-[840px] h-[493px] object-contain block"
              style={{ display: 'block' }}
            />
          </div>

          <aside
            className="bg-[#BAE249] p-[25px] flex flex-col"
            style={{
              width: '255px',
              height: '493px',
              boxSizing: 'border-box'
            }}
          >
            <h2 className="text-black text-[20px] leading-tight">Kurische Nehrung 24</h2>

            <p className="text-[#506829] mt-4 leading-[22px]">
              Вот вам яркий пример современных тенденций — начало повседневной работы по формированию позиции
              выявляет срочную потребность методов управления процессами.
            </p>

            <p className="text-[#506829] mt-4 leading-[22px]">
              Есть над чем задуматься: представители современных социальных резервов своевременно верифицированы.
            </p>

            <button className="text-black font-semibold mt-auto flex items-center gap-2">
              Читать далее →
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}

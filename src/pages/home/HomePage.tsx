import './HomePage.css';

import markerImage from '@/assets/marker_icon.webp';
import firstHomeImage from '@/assets/first-home-image.webp';
import diplomaIcon from '@/assets/diploma_icon.webp';
import handIcon from '@/assets/hand_icon.webp';
import bookmarkIcon from '@/assets/bookmark_icon.webp';
import puzzleIcon from '@/assets/puzzle_icon.webp';
import treePoliv from '@/assets/poliv_tree.webp';
import matzerplasLogo from '@/assets/matzerplas_logo.webp';
import hunterLogo from '@/assets/hunter_logo.webp';
import checkIcon from '@/assets/check_icon.webp';
import truckIcon from '@/assets/truck_icon.webp';
import editIcon from '@/assets/edit_icon.webp';
import wandIcon from '@/assets/wand_icon.webp';
import logoutIcon from '@/assets/logout_icon.webp';

const fiveMainListSteps = [
    {
        id:1,
        title: '1.Виїзд',
        text: 'Заміри ділянки та консультація на об’єкті.',
        icon: truckIcon,
    },
    {
        id:2,
        title: '2.Проєкт',
        text: 'Розробка схеми поливу під вашу ділянку.',
        icon: editIcon,
    },
    {
        id:3,
        title: '3.Монтаж',
        text: 'Встановлення обладнання та прокладання системи.',
        icon: wandIcon,
    },
    {
        id:4,
        title: '4.Запуск',
        text: 'Налаштування, перевірка та пояснення роботи системи.',
        icon: logoutIcon,
    },
];

export function HomePage() {
    return (
        <main>
            <section className = "container-img-grass">
                <h1>Система автоматичного поливу</h1>
                <p>Проєктування, монтаж та обслуговування систем автоматичного поливу для газонів, садів, теплиць і присадибних ділянок.</p>
                <div className = 'container-main-text'>
                    <img src={markerImage} alt="search-icon" />
                    <p>Київ та область</p>
                </div>
            </section>
            <section className = "container-second-main">
                <div className = 'container-child-first'>
                    <img src={firstHomeImage} alt='Grass image'></img>
                    <div className= 'container-text-first'>
                        <h3>Автоматичний полив ділянки </h3>
                        <p>— це доступний засіб зробити газон розкішним, а сад – квітучим. </p>
                        <p>Кожен власник заміського будинку та садівник-аматор мріє про догляд за насадженнями,
                            що не займатиме багато часу та сил, а система поливу не буде громіздкою та незручною.
                            Якщо кілька років тому переносному шлангу не було альтернативи, а автоматичні системи поливу вважалися розкішшю,
                            то зараз вже багато власників заміських будинків із задоволенням ними користуються.
                            Монтаж коректної та раціональної системи поливу, що зроблена нашими фахівцями,
                            займе мінімум часу і не принесе клопоту господарям.
                        </p>
                    </div>
                </div>
                <div className='container-child-second'>
                    <h3>Пріоритети нашої компанії</h3>
                    <div className='child-second-box'> 
                        <div className='second-box-item'>
                            <img src={diplomaIcon} alt='Diploma icon'/>
                            <p>Тільки якісні матеріали та комплектуючі.</p>
                        </div>
                        <div className='second-box-item'>
                            <img src={handIcon} alt='Hand icon'/>
                            <p>Врахування індивідуальних побажань замовника.</p>
                        </div>
                    </div>
                    <div className='child-second-box'>
                        <div className='second-box-item'>
                            <img src= {bookmarkIcon} alt='Bookmark icon'/>
                            <p>Досвідчені фахівці, спроможні швидко та якісно здійснити ввід в експлуатацію систем любого рівня складності.</p>
                        </div>
                        <div className='second-box-item'>
                            <img src={puzzleIcon} alt='Puzzle icon'/>
                            <p>Комплексний підхід: проектування, монтаж і наладка обладнання, сервісне обслуговування, супровід.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container-third-main'>
                <div className='third-main-text'>
                    <h3>Автополив для газонів, садів і квітників</h3>
                    <p>Зелений і доглянутий сад без зайвих зусиль.</p>
                    <p>
                        Система автоматичного поливу забезпечує рівномірне 
                        зволоження газонів, квітників, кущів і дерев у будь-яку погоду. 
                        Ви економите воду, зберігаєте здоров’я рослин і насолоджуєтесь 
                        красою ділянки без витрат зайвого часу.
                    </p>
                    <p>
                        Ми підбираємо оптимальне рішення для вашої території — від компактних 
                        систем для невеликих квітників до повноцінних комплексів для садів і 
                        великих газонів. Автоматичний полив — це комфорт, надійність і турбота 
                        про ваш зелений простір.
                    </p>
                    <h3>Що враховує система</h3>
                    <div className='third-main-item'> 
                        <div className='cicle'>01</div>
                        <p>
                            Індивідуальна схема <br/><br/>
                            Індивідуальна схема розміщення системи поливу враховує розміри та особливості будь-якої ділянки. 
                        </p>
                    </div>
                    <div className='third-main-item'>
                        <div className='cicle'> 02 </div>
                        <p>
                            Автоматичний розрахунок<br/><br/>
                            Завчасно налаштована програма автоматично розрахує добову норму вологості для кожної групи рослин.
                        </p>
                    </div>
                    <div className='third-main-item'>
                        <div className='cicle'>03</div>
                        <p>
                            Датчики погоди<br/><br/>
                            Додаткові датчики, що контролюють зовнішнє середовище, визначають необхідність зволоження залежно від погоди.
                        </p>
                    </div>
                </div>
                <img src={treePoliv} alt='Tree poliv'/>
            </section>
            <section className='container-fourth-main'>
                <div className='fourth-main-text'>
                    <h3>Обладнання для системи поливу <br></br><br></br></h3>
                    <p>
                        Ми пропонуємо нашим клієнтам системи поливу від перевірених виробників.
                        <br></br><br></br>
                        Це професійне обладнання має чудову репутацію завдяки своїй якості та безвідмовній роботі.
                        Використовуючи продукцію тільки світових лідерів з випуску зрошувального обладнання та сертифіковані
                        засоби, ми гарантуємо тривалу роботу та зручності використання поливних систем.
                        Полив газонів буде надавати задоволення!<br></br>
                        Коли система автоматичного поливу змонтована,
                        власникам необхідно буде тільки встановити режим зрошення на контролері, після чого автоматика
                        виконує задані установки. За рівномірність розбризкування води відповідають форсунки та їх розташування
                        в місцях поливу. Фахівці порекомендують, який тип форсунки забезпечить найбільш сприятливе
                        зволоження для різних видів рослин і територій. Наші співробітники володіють великим
                        досвідом встановлення поливочних комплексів на різному рельєфі, в тому числі підвищеного
                        рівня складності.
                    </p>
                </div>
                <div  className='fourth-main-images'>
                    <img className='matzerplas-logo' src={matzerplasLogo} alt='Marzerplas Logo' />
                    <img className='hunter-logo' src={hunterLogo} alt='Hunter Logo' />
                </div>
            </section>
            <section className='fourth-main-perevagi'>
                <h3>Переваги автоматичного поливу на дачі</h3>
                <div className='main-perevagi-container'>
                    <div className='main-perevagi-item'>
                        <img src={checkIcon} alt="Check icon" />
                        <p>Гарантує своєчасний та повноцінний полив всієї ділянки.</p>
                    </div>
                    <div className='main-perevagi-item'>
                        <img src={checkIcon} alt='Check icon' /> 
                        <p>Позитивно впливає на зволоження та озонування повітря.</p>
                    </div>
                    <div className='main-perevagi-item'>
                        <img src={checkIcon} alt='Check icon' />
                        <p>Надає власникам вільний час та звільняє від тяжкої і нудної роботи.</p>
                    </div>
                </div>
            </section>
            <section className='container-five-main'>
                <div className='five-main-text'>
                    <h3>Монтаж системи поливу <br/><br/></h3>
                    <p>Повний цикл робіт — від виїзду на ділянку до налаштування обладнання. <br/><br/></p>
                    <p>
                        При роботі з замовниками ми враховуємо персональні умови та фінансові можливості.
                        Завдяки наявності великого асортименту комплектуючих, фахівці нашої компанії 
                        завжди зможуть підібрати відповідний раціональний варіант і провести монтаж
                        системи автополиву.<br/><br/>
                    </p>
                    <p>
                        В перелік послуг входять роботи повного циклу: виїзд на ділянку для замірів 
                        (за необхідністю), проектування системи поливу території, монтаж і наладка обладнання, 
                        земельні роботи з відновлення ділянки.<br/><br/>
                    </p>
                    <p>
                        ТОВ «БВС-ПОЛИВ» володіє необхідними можливостями та ресурсами щодо виконання замовлення
                        у встановлені терміни. Ми надаємо безкоштовні консультації та виїзд фахівця
                        для замірів та підготовки кошторису. Проводимо монтаж систем поливу: 
                        Київ, Київська область, по Україні. Відрядження бригад (за необхідністю) 
                        за домовленістю.
                    </p>
                </div>
                <div className='five-main-image-container'>
                    <ol className='five-main-list'>
                        { fiveMainListSteps.map((step) => (
                            
                            <li className='five-main-item' key ={step.id}>
                                <img src={step.icon}/>
                                <div className='five-main-item-text'>
                                    <h4> {step.title} </h4>
                                    <p> {step.text} </p>
                                </div>
                            </li>

                        ))}
                    </ol>          
                </div>
            </section>
        </main>
        
    );
}
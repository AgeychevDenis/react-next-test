import type { NextPage } from 'next';

import Image from 'next/image';
import imgAdult from '../assets/img/image-48.png';
import imgChild from '../assets/img/image-49.png';
import imgCircle from '../assets/img/image-50.png'
import styles from '../styles/page.module.scss'

import { useState } from 'react';

type Page = {
  className: string;
  placeholder: string;
}

const pageList: { id: string, imgUrl: string, description: string }[] = [
  { id: 'box1', imgUrl: 'https://i.ibb.co/2yygxGJ/Picture1.png', description: 'Сколиоз' },
  { id: 'box2', imgUrl: 'https://i.ibb.co/MfVHhbv/Picture8.png', description: 'Ограниченная способность поднимать руки и переносить предметы' },
  { id: 'box3', imgUrl: 'https://i.ibb.co/yQX905f/Picture2.png', description: 'Утомляемость' },
  { id: 'box4', imgUrl: 'https://i.ibb.co/2hj72f0/Picture7.png', description: 'Нарушения жевания и глотания' },
  { id: 'box5', imgUrl: 'https://i.ibb.co/9pHdjDx/Picture3.png', description: 'Вывих бедра' },
  { id: 'box6', imgUrl: 'https://i.ibb.co/gP4g67Y/Picture6.png', description: 'Дыхательная недостаточность/ респираторная дисфункция' },
  { id: 'box7', imgUrl: 'https://i.ibb.co/44b1q4D/Picture4.png', description: 'Контрактура суставов' },
  { id: 'box8', imgUrl: 'https://i.ibb.co/mq2j4kb/Picture5.png', description: 'Неспособность бегать, изменение походки' },
]

const Home: NextPage<Page> = () => {
  const [isHovering, setIsHovering] = useState(0);

  const handleMouseOver = (index: number) => {
    setIsHovering(index);
  };


  return (
    <main className="page container">
      <div className={styles.header}>
        <h1 className={styles.title}>А вдруг СМА?</h1>
        <h2 className={styles.subtitle}>Выберите, кто Ваш пациент:</h2>
      </div>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h4 className={styles.column__title}>Взрослый</h4>
          <div className={styles.column__img}>
            <Image src={imgAdult} alt="Adult" />
          </div>
          <div className={styles.column__texts}>
            <p className={styles.column__text}>
              Менее тяжелые формы СМА могут возникать и диагностироваться в зрелом возрасте.
            </p>
            <p className={styles.column__text}>
              По сравнению с СМА у детей, СМА у взрослых может иметь более легкие симптомы, но без патогенетической терапии пациенты со СМА 2-3 типа неуклонно теряют двигательные навыки.
            </p>
            <p className={styles.column__text}>
              По сравнению с СМА в детстве, течение СМА у взрослых может быть более коварным и трудным для распознавания.
            </p>
          </div>
        </div>
        <div className={styles.column}>
          <h4 className={styles.column__title}>Ребенок</h4>
          <div className={styles.column__img}>
            <Image src={imgChild} alt="Adult" />
          </div>
          <div className={styles.column__texts}>
            <p className={styles.column__text}>
              Ребенок, плохо удерживающий голову, когда ему придают сидячее положение, с вялыми
              движениями нижних конечностей или с трудом тянущийся к предметам, но при этом с
              осмысленным и ярким взглядом, улыбающийся и социально активный, вызывает настороженность
              в отношении наличия СМА.

            </p>
            <p className={styles.column__text}>
              Младенцам со СМА необходимо экстренное направление к специалисту, ранняя диагностика и обеспечение
              терапией, спасающей жизнь, поскольку эти мотонейроны очень быстро подвергаются
              дегенерации при прогрессировании заболевания
            </p>
          </div>
        </div>
      </div>
      <p className={styles.question}>
        Сообщает ли один из ваших пациентов о следующих симптомах? <span>(нажмите на любую иконку и узнайте больше)</span>
      </p>
      <div className={styles.body}>
        <div className={styles.body__img}>
          <Image src={imgCircle} alt="Adult" />
          <p>Взрослый</p>
        </div>
        <ul className={styles.list}>
          {pageList.map((li, i) => (
            <li key={li.id} id={li.id} onMouseMove={() => handleMouseOver(i)} className={`${isHovering === i ? 'active' : ''}`}>
              <Image src={li.imgUrl} width={300} height={300} layout='fill' alt="disease" />
              <p className={styles.text}>{li.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </main >
  )
}

export default Home;

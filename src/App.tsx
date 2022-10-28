import React from 'react'
import Card from './components/cards/Card'
import Decomposition from './components/decomposition/Decomposition'
import Collapse from './components/collapse/Collapse'
import { cards } from './data/cards'
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.taskTitle}>Cards</h2>
      <hr />

      <div className={styles.cards}>
        {cards.map((card) => (
          <Card title={card.title} text={card.text}>
            {card.img && (
              <img
                className='w-fill object-cover'
                src={card.img}
                alt='card.title'
              />
            )}
          </Card>
        ))}
      </div>

      <h2 className={styles.taskTitle}>Decomposition</h2>
      <hr />

      <div className={styles.decomposition}>
        <Decomposition></Decomposition>
      </div>

      <h2 className={styles.taskTitle}>Collapse</h2>
      <hr />

      <Collapse>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
        voluptatibus cum inventore eaque ex amet quae ipsum nostrum repellat
        aspernatur vero illo necessitatibus nobis iure fugit veniam vel ullam
        eligendi voluptatum ipsa sed, quos eos blanditiis dicta. Molestiae sit
        sequi eaque error aliquam perspiciatis tempore nesciunt mollitia. Aut
        itaque error quos! Consequuntur harum doloremque voluptatum nobis nemo,
        minus ut eum numquam consectetur! Sequi nesciunt delectus sed numquam
        aliquid magnam iste laudantium maiores in laborum! Eum nostrum tempora,
        nisi ratione minus impedit ea maiores dolorem minima laborum vero iusto,
        iste illo laudantium eaque adipisci placeat praesentium ad officiis.
        Veniam, officia explicabo.
      </Collapse>
    </div>
  )
}

export default App

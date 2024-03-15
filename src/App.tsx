import { FC, useEffect } from 'react';
import { media } from './api/media';
import Item from './components/Item/Item';
import CustomButton from './components/CustomButton/CustomButton';

import './App.scss'

export const App: FC = () => {
  useEffect(() => {
    document.title = 'Test task'
  }, []);

  return (
    <section className='app'>
      <h1 className='app__title'>
        We make  creative media that <span style={{ color: '#506BCA' }}>adds value</span>
      </h1>
      <article className='media'>
        {media.map(({ id, title, detailsList, description, imagesSrc }) => (
          <Item
            key={id}
            title={title}
            detailsList={detailsList}
            description={description}
            imagesSrc={imagesSrc}
          />
        ))}
      </article>
      <CustomButton />
    </section>
  )
}

export default App;

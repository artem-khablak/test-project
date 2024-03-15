import { FC } from "react";

import './Item.scss';

interface Props {
  title: string,
  detailsList?: string[],
  description: string,
  imagesSrc: string[],
}

const Item: FC<Props> = ({
  title,
  detailsList,
  description,
  imagesSrc,
}) => {
  return (
    <div className="item">
      <div className="item__images-container">
        {imagesSrc.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className="item__image"
            style={{
              backgroundImage: `url(${image})`,
            }}>
          </div>
        ))}
      </div>
      <div className="item__description-container">
        <h3 className="item__title">{title}</h3>
        {detailsList && detailsList.length > 0 && (
            <ul className="item__details-list">
              {detailsList.map((word, index) => (
                <li key={`${word}-${index}`}>{word}</li>
              ))}
            </ul>
          ) 
        }
        {description.split('. ').map((sentence, index, array) => (
          <p
            className="item__description"
            key={sentence}>{sentence}{index !== array.length - 1 ? '. ' : ''}
          </p>
        ))}
      </div>
    </div>
  )
};

export default Item;
    

import { Card } from '@/components/Card';
import Image from 'next/image';

export function CardsList(props) {
  const { gameCards, photos, isLockedNewAction, handleFlipCard, cardsSize } = props;

  return (
    <ul className='flex flex-wrap justify-center gap-2 mt-8'>
      {gameCards.map(card => {
        const selectedImageData = photos.filter(photo => photo.id === card.imgId);

        return (
          <li key={card.id}>
            <Card
              state={card.cardState}
              onClick={() => handleFlipCard(card.id)}
              isLocked={isLockedNewAction}
              cardsSize={cardsSize}
            >
              {selectedImageData[0] &&
                <Image
                  src={selectedImageData[0].url}
                  width={selectedImageData[0].width}
                  height={selectedImageData[0].height}
                  alt={selectedImageData[0].alt}
                  className="w-full rounded-md"
                />
              }
            </Card>
          </li>
        );
      })}
    </ul>
  )
}
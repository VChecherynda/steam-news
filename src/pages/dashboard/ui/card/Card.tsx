import {
  Card as CardContainer,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { Article } from "../../../../entities/models/news";

type CardProps = {
  card: Article;
};

export const Card = ({ card }: CardProps) => {
  return (
    <CardContainer key={card.gid} className='my-6'>
      <CardBody>
        <Typography variant='h5' color='blue-gray' className='mb-2'>
          {card.title}
        </Typography>
        <Typography>{card.contents}</Typography>
      </CardBody>
      <CardFooter className='pt-0'>
        <Button
          onClick={() => {
            window.open(card.url, "_blank", "noreferrer");
          }}
        >
          Read More
        </Button>
      </CardFooter>
    </CardContainer>
  );
};

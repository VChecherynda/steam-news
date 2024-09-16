import { useSelector } from "react-redux";
import { Header, Layout, Sidebar } from "../../shared/ui";
import { Pagination } from "../../widget";
import { useQuery } from "./Dashboard.api";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { activePage } from "../../widget/pagination/model/pagination.selector";

export function Dashboard() {
  const active = useSelector(activePage);

  const { data, isLoading } = useQuery({
    appId: 400,
    count: 5,
    maxLength: 300,
    activePage: active,
  });

  if (isLoading) {
    return "Loading...";
  }

  return (
    <Layout header={<Header />} sidebar={<Sidebar />}>
      <div className='m-6'>
        {data.map((card) => (
          <Card key={card.gid} className='my-6'>
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
          </Card>
        ))}

        <Pagination />
      </div>
    </Layout>
  );
}

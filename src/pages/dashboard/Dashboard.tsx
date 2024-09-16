import { useSelector } from "react-redux";
import { Header, Layout, Sidebar } from "../../shared/ui";
import { Pagination } from "../../widget";
import { useQuery } from "./Dashboard.api";

import { activePage } from "../../entities/pagination/pagination.selector";
import { Card } from "./ui";

export function Dashboard() {
  const active = useSelector(activePage);

  const { data, isLoading } = useQuery({
    appId: 400,
    count: 5,
    maxLength: 300,
    activePage: active,
  });

  if (isLoading || !data) {
    return "Loading...";
  }

  return (
    <Layout header={<Header />} sidebar={<Sidebar />}>
      <div className='m-6'>
        {data.map((card) => (
          <Card card={card} />
        ))}

        <Pagination />
      </div>
    </Layout>
  );
}

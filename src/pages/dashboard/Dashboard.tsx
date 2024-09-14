import { Header, Layout, Sidebar } from "../../shared/ui";

export function Dashboard() {
  return (
    <Layout header={<Header />} sidebar={<Sidebar />}>
      <>
        <div>Dashboard</div>
      </>
    </Layout>
  );
}

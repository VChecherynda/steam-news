import { Header, Layout, Sidebar } from "../../shared/ui";

export function Home() {
  return (
    <Layout header={<Header />} sidebar={<Sidebar />}>
      <>
        <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      </>
    </Layout>
  );
}

import { MainPage } from "@/pages/main/ui";
import { AppLayout } from "@/shared/layout/app";
import { Footer } from "@/widgets/footer/ui";
import { Header } from "@/widgets/header";

function App() {
  return (
    <AppLayout header={<Header />} footer={<Footer />}>
      <MainPage />
    </AppLayout>
  );
}

export default App;

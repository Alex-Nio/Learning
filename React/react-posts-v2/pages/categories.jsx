import { Header } from '../components/header/header';

export default function CategoriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <div className="px-8 mx-auto container-2xl">
          <h1 className="w-full text-2xl font-semibold text-center">
            Categories page
          </h1>
        </div>
      </main>
    </div>
  );
}

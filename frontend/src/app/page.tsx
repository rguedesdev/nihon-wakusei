// Axios
import api from "@/utils/api";

// Components
import { NewsCard } from "@/components/NewsCard";
import { Pagination } from "@/components/Pagination";

async function Home() {
  let posts = [];
  try {
    const response = await api.get("/posts/");
    posts = response.data;
  } catch (err) {
    console.error("Erro ao buscar posts:", err);
  }

  return (
    <div>
      <main>
        <NewsCard news={posts} />
      </main>
      <Pagination />
    </div>
  );
}

export default Home;

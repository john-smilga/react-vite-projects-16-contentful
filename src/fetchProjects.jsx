import { useEffect, useState } from 'react';
import { createClient } from 'contentful';
console.log(import.meta.env.VITE_API_KEY);

const client = createClient({
  space: 'qz00uzgg3leh',
  environment: 'master', // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_API_KEY,
});

const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'projects',
      });
      const projects = response.items.map((item) => {
        const title = item.fields.title;
        const url = item.fields.url;
        const id = item.sys.id;
        const img = item.fields.image?.fields?.file?.url;
        return { title, url, id, img };
      });
      setLoading(false);
      setProjects(projects);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};

export default useFetchProjects;

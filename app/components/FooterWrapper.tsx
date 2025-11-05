import Footer from './Footer';
import clientPromise from '@/lib/mongodb';

interface Category {
  _id: string;
  name: string;
  slug: string;
  sequence: number;
}

async function getCategories(): Promise<Category[]> {
  try {
    const client = await clientPromise;
    const db = client.db('BlogingBot');
    const categories = await db
      .collection('Categories')
      .find({})
      .sort({ sequence: 1 })
      .toArray();

    return categories.map(cat => ({
      _id: cat._id.toString(),
      name: cat.name,
      slug: cat.slug,
      sequence: cat.sequence
    }));
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export default async function FooterWrapper() {
  const categories = await getCategories();
  
  return <Footer categories={categories} />;
}

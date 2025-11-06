import Navbar from './Navbar';
import clientPromise from '@/lib/mongodb';

interface Category {
  _id: string;
  name: string;
  slug: string;
  description: string;
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

    // Convert MongoDB documents to plain objects
    return categories.map(cat => ({
      _id: cat._id.toString(),
      name: cat.name,
      slug: cat.slug,
      description: cat.description,
      sequence: cat.sequence
    }));
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

// Add unstable_cache for even better performance
export const revalidate = 300; // Revalidate every 5 minutes

export default async function NavbarWrapper() {
  const categories = await getCategories();
  
  return <Navbar categories={categories} />;
}

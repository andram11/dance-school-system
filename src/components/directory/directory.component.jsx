import DirectoryItem from '../directory-item/directory-item.component';

import {DirectoryContainer} from './directory.styles.jsx';

const categories = [
  {
    id: 1,
    title: 'pole dance',
    imageUrl: 'https://images.unsplash.com/photo-1525753609950-724d3715874d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    route: 'shop/pole%20dance'
  },
  {
    id: 2,
    title: 'aerial hoop',
    imageUrl: 'https://images.unsplash.com/photo-1517774729239-58be8e8875cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    route: 'shop/aerial%20hoop'
  },
  {
    id: 3,
    title: 'yoga',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    route: 'shop/yoga'
  },
  {
    id: 4,
    title: 'contemporary dance',
    imageUrl: 'https://images.unsplash.com/photo-1550026593-f369f98df0af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    route: 'shop/contemporary%20dance'
  },
  {
    id: 5,
    title: 'heels dance',
    imageUrl: 'https://images.unsplash.com/photo-1469564104555-19d9cf02b407?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    route:'shop/heels%20dance'
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;

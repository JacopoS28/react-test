import { Card } from './components/Card';
import Constants from './constants/Constants';
import { useAxios } from './hooks/useAxios';

const App = () => {

  const { data } = useAxios(`${Constants().API_URL}/posts?skip=0&limit=9`)

  return (
    <>
      <div className='flex justify-center'>
        <div className='flex flex-col w-max gap-8 p-2'>
          {
            data?.posts && data.posts.length > 0 && data.posts.map((post) => (
              <Card key={post.id} post={post}/>
            ))
          }
        </div>
      </div>

    </>
  )
}

export default App;

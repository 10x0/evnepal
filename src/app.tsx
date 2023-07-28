import data from './assets/data.json';
import Card from './components/Card';
import Mapbox from './components/Mapbox';

export function App() {
  return (
    <>
      <main className='select-none w-screen h-screen dark:bg-neutral-900 dark:text-white p-4'>
        <section className='w-full h-full flex'>
          <aside className='p-8 w-full h-full rounded-full'>
            {/* <Search /> */}
            <Mapbox />
          </aside>
          <aside className='w-2/6 h-full flex overflow-hidden'>
            <div className='noscroll flex flex-col gap-4 overflow-y-auto'>
              <h1 className='text-3xl text-emerald-500 font-bold text-center'>
                EV Station Nepal
              </h1>
              <form className='flex items-center gap-4'>
                <input
                  type='search'
                  placeholder='Find in location'
                  className='p-2 py-3 outline-none rounded-xl text-neutral-200 grow dark:bg-neutral-800'
                />
                <select className='outline-none rounded-xl dark:bg-neutral-800 self-stretch'>
                  <option selected>5km</option>
                  <option selected>10km</option>
                </select>
              </form>
              {data.map((station) => (
                <Card key={`card-${station.name}`} station={station} />
              ))}
            </div>
          </aside>
        </section>
      </main>
      {/* WIP */}
      <section className='fixed top-0 w-full p-2 text-center font-semibold dark:text-neutral-300'>
        Work in progress. Suggestions at{' '}
        <a
          href='mailto:aasseess@pm.me'
          className='text-indigo-500 border-b-2 border-indigo-500 p-1
          hover:bg-indigo-400/20'
        >
          aasseess@pm.me
        </a>
      </section>
    </>
  );
}

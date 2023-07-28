import { FaCar, FaDirections, FaMotorcycle, FaPhoneAlt } from 'react-icons/fa';
import { IStation } from '../types/station';

const Card = ({ station }: { station: IStation }) => (
  <section className={styles.card}>
    <div className='flex items-center justify-between'>
      <section className=''>
        <h3 className='text-lg font-semibold'>{station.name}</h3>
        <p className={styles.p}>{station.address}</p>
      </section>
      <div className='inline rounded-2xl p-2 bg-neutral-300 dark:bg-neutral-700/50'>
        <FaDirections className='inline text-3xl text-emerald-500' />
      </div>
    </div>
    <div className='py-2 flex gap-2 items-center font-semibold'>
      For:{' '}
      {station.type.map((item) => {
        return item === 'car' ? (
          <FaCar className='text-pink-400' />
        ) : (
          <FaMotorcycle />
        );
      })}
    </div>
    <div className='py-2'>
      <FaPhoneAlt className='inline mr-2' />
      {station.telephone !== '' ? station.telephone : 'N/A'}
    </div>
  </section>
);

const styles = {
  card: `bg-neutral-200 dark:bg-neutral-800 rounded-2xl shadow-lg p-4 cursor-pointer hover:bg-neutral-800/40`,
  p: `text-neutral-500`,
};

export default Card;

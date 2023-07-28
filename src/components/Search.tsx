// import { useEffect, useState } from 'preact/hooks';
// import { FaSearch } from 'react-icons/fa';
// import { searchSuggestions } from './Axios';

// const Search = () => {
//   const [from, setFrom] = useState('');
//   const [to, setTo] = useState('');
//   const [fromSuggestions, setFromSuggestions] = useState([]);
//   const [toSuggestions, setToSuggestions] = useState([]);

//   const searchFrom = async (from: string) => {
//     let response = await searchSuggestions(from);
//     setFromSuggestions(response.data.suggestions);
//   };

//   const searchTo = async (to: string) => {
//     let response = await searchSuggestions(to);
//     setToSuggestions(response.data.suggestions);
//   };

//   useEffect(() => {
//     if (from.length > 4) {
//       searchFrom(from);
//     } else {
//       setFromSuggestions([]);
//     }
//   }, [from]);

//   useEffect(() => {
//     if (to.length > 4) {
//       searchTo(to);
//     } else {
//       setToSuggestions([]);
//     }
//   }, [to]);

//   return (
//     <section className='p-4'>
//       <form className='flex gap-4'>
//         <div className='relative'>
//           <input
//             type='text'
//             placeholder='From'
//             className={styles.input}
//             value={from}
//             onChange={(e) => setFrom(e.target.value)}
//           />
//           {fromSuggestions && (
//             <div className={styles.suggestions}>
//               {fromSuggestions.map((suggestion) => (
//                 <div className='p-2 cursor-pointer hover:bg-blue-200'>
//                   <h1>{suggestion.name}</h1>
//                   <p>{suggestion.place_formatted}</p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//         <div className='relative'>
//           <input
//             type='text'
//             placeholder='To'
//             className={styles.input}
//             value={to}
//             onChange={(e) => setTo(e.target.value)}
//           />
//           {toSuggestions && (
//             <div className={styles.suggestions}>
//               {toSuggestions.map((suggestion) => (
//                 <div className='p-2 cursor-pointer hover:bg-blue-200'>
//                   <h1>{suggestion.name}</h1>
//                   <p>{suggestion.place_formatted}</p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//         <div className='bg-emerald-400 flex items-center p-3 rounded-xl hover:bg-emerald-400/50 cursor-pointer'>
//           <FaSearch className='text-xl text-neutral-800' />
//         </div>
//       </form>
//     </section>
//   );
// };

// const styles = {
//   input: `px-4 py-2 rounded-xl outline-none text-black`,
//   suggestions: `px-4 bg-gray-800 absolute z-10 top-100 rounded-xl`,
// };

// export default Search;

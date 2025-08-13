// import React, { useState } from 'react';
// // import { useClassroom } from '../../hooks/useClassroom';
// import { Modal } from '../common/Modal';
// import { Button } from '../common/Button';

// interface JoinClassProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export const JoinClass: React.FC<JoinClassProps> = ({ isOpen, onClose }) => {
//   // const { joinClassByCode, loading, error } = useClassroom();
//   const [code, setCode] = useState('');
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const joined = await joinClassByCode(code.toUpperCase());
//     if (joined) {
//       setSuccess(true);
//       setCode('');
//       setTimeout(() => {
//         setSuccess(false);
//         onClose();
//       }, 2000);
//     }
//   };

//   const handleClose = () => {
//     setCode('');
//     setSuccess(false);
//     onClose();
//   };

//   return (
//     <Modal isOpen={isOpen} onClose={handleClose} title="Join Class">
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {error && (
//           <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
//             {error}
//           </div>
//         )}
//         {success && (
//           <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded">
//             Successfully joined class!
//           </div>
//         )}
        
//         <div>
//           <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-1">
//             Class Code
//           </label>
//           <input
//             type="text"
//             id="code"
//             value={code}
//             onChange={(e) => setCode(e.target.value.toUpperCase())}
//             placeholder="Enter 6-character class code"
//             maxLength={6}
//             required
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 uppercase"
//           />
//           <p className="text-sm text-gray-500 mt-1">Ask your teacher for the class code</p>
//         </div>

//         <div className="flex justify-end space-x-2 pt-4">
//           <Button type="button" variant="secondary" onClick={handleClose}>
//             Cancel
//           </Button>
//           <Button type="submit" disabled={loading || code.length !== 6}>
//             {loading ? 'Joining...' : 'Join Class'}
//           </Button>
//         </div>
//       </form>
//     </Modal>
//   );
// };
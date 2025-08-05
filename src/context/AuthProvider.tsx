// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState, type ReactNode } from "react";
// import { AuthContext } from "./AuthContext";
// import type { ClassRoom, Post, User } from "../types";
// import { mockClasses, mockPosts, mockUser } from "../data/mockData";

// type Props = {
//     children: ReactNode;
// };

// const AuthProvider = ({ children }: Props) => {


//     const [user, setUser] = useState<User | null>(mockUser);
//     const [classes, setClasses] = useState<ClassRoom[]>(mockClasses);
//     const [posts, setPosts] = useState<Post[]>(mockPosts);
//     const [currentClass, setCurrentClass] = useState<ClassRoom | null>(null);

//     const addClass = (classRoom: ClassRoom) => {
//         setClasses(prev => [...prev, classRoom]);
//     };

//     const joinClass = (code: string): boolean => {
//         const classToJoin = classes.find(c => c.code === code);
//         if (classToJoin && user && !classToJoin.students.includes(user.id)) {
//             const updatedClass = {
//                 ...classToJoin,
//                 students: [...classToJoin.students, user.id]
//             };
//             setClasses(prev => prev.map(c => c.id === classToJoin.id ? updatedClass : c));
//             return true;
//         }
//         return false;
//     };

//     const addPost = (post: Post) => {
//         setPosts(prev => [post, ...prev]);
//     };

//     const getClassPosts = (classId: string): Post[] => {
//         return posts.filter(post => post.classId === classId).sort((a, b) =>
//             new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
//         );
//     };

//     const getUserClasses = (): ClassRoom[] => {
//         return classes.filter(c =>
//             c.students.includes(user?.id || '') || c.teacherId === user?.id
//         );
//     };

//     //   const registerUser = (email, password) => {
//     //     setLoading(true);
//     //     return createUserWithEmailAndPassword(auth, email, password);
//     //   };

//     //   const loginUser = (email, password) => {
//     //     setLoading(true);
//     //     return signInWithEmailAndPassword(auth, email, password);
//     //   };

//     //   const googleLogin=()=>{
//     //     setLoading(true)
//     //     return signInWithPopup(auth, googleProvider)
//     //   }

//     //   const logoutUser = () => {
//     //     setLoading(true);
//     //     return signOut(auth);
//     //   };
//     const authInfo: any = {
//         user,
//         classes,
//         posts,
//         currentClass,
//         setUser,
//         setCurrentClass,
//         addClass,
//         joinClass,
//         addPost,
//         getClassPosts,
//         getUserClasses
//     }
//     //   useEffect(() => {
//     //     // const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//     //     //   setUser(currentUser);

//     //     //   setLoading(false)
//     //     // })

//     //     // return () => {
//     //     //   unsubscribe();
//     //     // };
//     //   }, [loading]);

//     return (
//         <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//     );
// };

// export default AuthProvider;

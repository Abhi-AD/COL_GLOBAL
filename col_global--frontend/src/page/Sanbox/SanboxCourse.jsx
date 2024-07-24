import { FaEye } from "react-icons/fa";

const courses = [
     {
          id: 1,
          title: "Web design",
          views: "1.2k view",
          imageUrl: "https://img.freepik.com/free-photo/medium-shot-contemplative-man-seaside_23-2150531618.jpg?t=st=1721618750~exp=1721619350~hmac=e695de359484a51628273bdb02439a2ddad1bcc51d14930d9f796809204e5ac9",
     },
     {
          id: 2,
          title: "Web design",
          views: "1.2k view",
          imageUrl: "https://img.freepik.com/free-photo/medium-shot-contemplative-man-seaside_23-2150531618.jpg?t=st=1721618750~exp=1721619350~hmac=e695de359484a51628273bdb02439a2ddad1bcc51d14930d9f796809204e5ac9",
     },
     {
          id: 3,
          title: "Web design",
          views: "1.2k view",
          imageUrl: "https://img.freepik.com/free-photo/medium-shot-contemplative-man-seaside_23-2150531618.jpg?t=st=1721618750~exp=1721619350~hmac=e695de359484a51628273bdb02439a2ddad1bcc51d14930d9f796809204e5ac9",
     },
     {
          id: 4,
          title: "Web design",
          views: "1.2k view",
          imageUrl: "https://img.freepik.com/free-photo/medium-shot-contemplative-man-seaside_23-2150531618.jpg?t=st=1721618750~exp=1721619350~hmac=e695de359484a51628273bdb02439a2ddad1bcc51d14930d9f796809204e5ac9",
     },
     {
          id: 6,
          title: "Web design",
          views: "1.2k view",
          imageUrl: "https://img.freepik.com/free-photo/medium-shot-contemplative-man-seaside_23-2150531618.jpg?t=st=1721618750~exp=1721619350~hmac=e695de359484a51628273bdb02439a2ddad1bcc51d14930d9f796809204e5ac9",
     },

];

const SanboxCourse = () => {
     return (
          <div className="text-blue">
               <h1 className="font-bold mt-4 mb-6 text-lg md:text-2xl lg:text-3xl text-left">Course</h1>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {courses.map(course => (
                         <div key={course.id} className="max-w-sm flex bg-white rounded-lg items-center dark:bg-gray-800 dark:border-gray-700">
                              <div className="w-2/5 p-2">
                                   <a href="#">
                                        <img
                                             className="w-full h-auto rounded-lg"
                                             src={course.imageUrl}
                                             alt={course.title}
                                        />
                                   </a>
                              </div>
                              <div className="w-3/5 p-2 bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700">
                                   <h5 className="mb-2 md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{course.title}</h5>
                                   <div className="flex items-center text-gray-700 dark:text-gray-400">
                                        <FaEye className="text-sm" />
                                        <p className="mb-0 ml-2 font-normal ">{course.views}</p>
                                   </div>


                              </div>
                         </div>
                    ))}
               </div>
          </div>
     );
};

export default SanboxCourse;
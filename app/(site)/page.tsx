import Image from 'next/image'
import { Inter } from 'next/font/google'
import {getProjects} from '../../sanity/schemas/sanity-utils'
import { Project } from '@/types/project';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })

export default async  function Home() {

  const projects = await getProjects();
  return (
      <div className='max-w-5xl mx-auto'>
        <h1 className='text-7xl font-extrabold py-20 text-amber-500'>Hello I&apos;m 
        <span className="text-cyan-400"> RosEdward</span>
        </h1>

        <p className='mt-3 text-xl text-amber-500'>Aloha Everyone! Check out  my Projects</p>

        <h2 className='text-3xl fond-bold text-cyan-400 mt-24'> My Projects!</h2>
        <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project)=>(
          <Link  href={project.url}  className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition" key={project._id}>
            {project.image && (
               <Image
               src={project.image}
               alt={project.name}
               width={750}
               height={300}
               className="object-cover rounded-lg border border-gray-500"
             />
            )}

            <div className='text-amber-500 font-bold'>{project.name} </div>
         </Link>
        ))}
        </div>
      </div>
    
  )
}

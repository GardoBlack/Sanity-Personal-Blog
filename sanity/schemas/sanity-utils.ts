
import { Project } from '@/types/project'
import { createClient,groq } from 'next-sanity'
import React from 'react'

export async function getProjects(): Promise<Project[]>  {
  
 {
  const client = createClient({
    projectId: "ouvvqie3",

    dataset: "production",

    
    apiVersion: "2023-03-09",
  })
  return client.fetch(
      groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
      }`
    )
}
}
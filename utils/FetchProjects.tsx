// import 'server-only'
// import { cache } from 'react'
import { Project } from '@/lib/models/Project'

export const preloadProjects = () => {
  // eslint-disable-next-line no-void
  void getProjects()
}

export const getProjects = async () => {
  // cache(async () => {
  const maxWithImage = 345
  // const breakPoints = [200, 738, 1082, maxWithImage]
  const projects: Project[] = [
    {
      title: 'my portfolio',
      description: 'project_description1',
      image: {
        src: '/project1.webp',
        alt: 'thumbnail of my portfolio',
        sizes: `(max-width: ${maxWithImage}px) 100vw, ${maxWithImage}px`
      },
      links: {
        source: { href: 'https://github.com/DevXoje/trans', content: 'LinkCode' },
        webSite: { href: '', content: 'LinkWeb' }
      },
      isComplete: true,
      state: 'DONE'

    },
    {
      title: 'doors ch',
      description: 'this project blabla',
      image: {
        src: '/project2.webp',
        alt: 'thumbnail of door website',
        sizes: '(max-width: 1400px) 100vw, 1400px',
        srcset: ['project2_jxh5ts_c_scale,w_200.webp 200w',
          'project2_jxh5ts_c_scale,w_738.webp 738w',
          'project2_jxh5ts_c_scale,w_1082.webp 1082w',
          'project2_jxh5ts_c_scale,w_1400.webp 1400w']
      },
      links: {
        source: { href: 'https://github.com/DevXoje/puertas', content: 'LinkCode' },
        webSite: { href: 'https://devxoje.github.io/puertas', content: 'LinkWeb' }
      },
      isComplete: false,
      state: 'DOING'

    },
    {
      title: 'bibi',
      description: 'this project blabla',
      image: {
        src: '/project3.webp',
        alt: 'thumbnail of bibi website',
        sizes: '(max-width: 1400px) 100vw, 1400px',
        srcset: ['project2_jxh5ts_c_scale,w_200.webp 200w',
          'project2_jxh5ts_c_scale,w_738.webp 738w',
          'project2_jxh5ts_c_scale,w_1082.webp 1082w',
          'project2_jxh5ts_c_scale,w_1400.webp 1400w']
      },
      links: {
        source: { href: 'https://github.com/DevXoje/puertas', content: 'LinkCode' },
        webSite: { href: 'https://devxoje.github.io/puertas', content: 'LinkWeb' }
      },
      isComplete: false,
      state: 'DOING'
    }, {
      title: 'ecommerce',
      description: 'this project blabla',
      image: {
        src: '/placeholder.png',
        alt: 'thumbnail of bibi website',
        sizes: '(max-width: 1400px) 100vw, 1400px',
        srcset: ['project2_jxh5ts_c_scale,w_200.webp 200w',
          'project2_jxh5ts_c_scale,w_738.webp 738w',
          'project2_jxh5ts_c_scale,w_1082.webp 1082w',
          'project2_jxh5ts_c_scale,w_1400.webp 1400w']
      },
      links: {
        source: { href: 'https://github.com/DevXoje/puertas', content: 'LinkCode' },
        webSite: { href: 'https://devxoje.github.io/puertas', content: 'LinkWeb' }
      },
      isComplete: false,
      state: 'TODO'
    }
  ]
  // const projectsGenerated = projects.map((project) => {  })
  return projects
}

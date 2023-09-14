import Image from 'next/image'
import styles from './page.module.css'
import Tareas from './tareas'
import Link from 'next/link'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 


export default async function Home() {
  const data = await getData() 
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <h2> <Link href="/create"> Crear nueva tarea</Link></h2>
    
    {data.map( (task) => {
      return <Tareas id={task.id} title={task.title} completed={task.completed}></Tareas>
    })}
    </main>
  )
}

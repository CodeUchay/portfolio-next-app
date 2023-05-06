import styles from '@/app/globals.css' 
import Image from 'next/image'



export default function UnderConstruc() {
  return (
    <>
    <div className="construction-img">
      <Image src={"/images/under-construction.jpg"} alt='Under Contruction' width={400} height={400} 
         className={styles['my-image']} ></Image> 
      </div> 
      <h1>This page is still under construction</h1>
    </>
  )
}
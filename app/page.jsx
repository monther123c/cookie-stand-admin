"use client";
import Image from 'next/image'
import styles from './page.module.css'
import AdminForm from './components/AdminForm'
export default function Home() {
  return (
    <>
    <main className="flex-1 overflow-y-auto p-5">
      <AdminForm/>
    </main>

    </>
  )
}
import { deleteDoc, doc, collection, getDocs, addDoc, type DocumentData } from 'firebase/firestore'
import { db, storage } from '@/firebase'
import { getStorage, uploadBytes, getDownloadURL } from 'firebase/storage'
import { ref, computed } from 'vue'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import { useUser } from './useUser'

export const useContent = () => {
  const content = ref()
  const contentList = ref([] as DocumentData)
  const newContent = ref({})

  const loading = ref({
    content: false,
    contentList: false,
    newContent: false
  })

  async function getAllContent() {
    loading.value.contentList = true
    try {
      const querySnapshot = await getDocs(collection(db, 'contents'))
      contentList.value = querySnapshot.docs.map((doc) => doc.data())
      loading.value.contentList = false
    } catch (error) {
      console.error(error)
    }
  }

  async function getContentById(id: string) {
    loading.value.content = true
    try {
      const querySnapshot = await getDocs(collection(db, 'contents'))
      content.value = querySnapshot.docs
        .map((doc) => doc.data())
        .find((item: any) => item.id === id)
      loading.value.content = false
    } catch (error) {
      console.error(error)
    }
  }

  async function addContent() {
    const userRemake = useUser()
    loading.value.newContent = true
    try {
      if (newContent.value) {
        await addDoc(collection(db, 'contents'), newContent.value)
        loading.value.newContent = false
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteContent() {
    try {
      if (content.value) {
        await deleteDoc(doc(db, 'contents', content.value.id))
      }
    } catch (error) {
      console.error(error)
    }
  }

  return {
    content,
    contentList,
    loading,
    getAllContent,
    getContentById,
    addContent,
    deleteContent
  }
}
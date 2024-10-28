import { useEffect } from "react"

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-medicix`;
  }, [title])
}

export default useTitle;
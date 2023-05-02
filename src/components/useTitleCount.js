import React, { useEffect } from 'react'

const useTitleCount = (count) => {

    useEffect(() => {
        if (count >= 1) {
            document.title = `Chats (${count})`
        }
        else {
            document.title = 'Chats'
        }
    }, [count])

  return (
    <div>useTitleCount</div>
  )
}

export default useTitleCount
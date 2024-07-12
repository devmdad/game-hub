import React, { useState } from 'react'

function useGenre() {

    interface Genre {
        id: number;
        name: string;
        background_image: string;
      }

    const [genre, setGenre] = useState<Genre[]>([]);
  
}

export default useGenre
import React from 'react'
import useLanding from './use-landing'
import VideoPlayer from '@/shared/players/video'

const Landing = ({ ...data }) => {

    const { videoOptions } = useLanding(data)

  return (
      <div>
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
          <VideoPlayer {...videoOptions} />
    </div>
  )
}

export default Landing
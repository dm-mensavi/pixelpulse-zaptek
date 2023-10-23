const RenderSVG = (processList, processType) => {
    return (
      processList.map((list, index) => {

        const bgColor = processType === 'discovery' ? '' : 'bg-[#DBEAFE] p-2'
        const gap = processType === 'discovery' ? 'gap-0' : 'gap-5'
        const flexDirection =  processType === 'culture' ? 'flex-col' : '' 
        const alignItems = processType === 'discovery' ? 'items-start' : 'items-center'

        return (
          <div 
            key={list.header} 
            className={`${processType}-list ${flexDirection} flex justify-start ${gap} items-start`}
          >
            <figure className={`w-16`}>
              <div className={`${bgColor} rounded-md h-11 w-11 flex justify-center ${alignItems}`}>
                {list.icon}
              </div>
            </figure>

            { processType === 'discovery' &&
              <div>
                <p className='text-gray-500'>
                  <b className='text-black'>
                    {list.header}
                  </b>
                  {list.description}
                </p>
              </div>
            }

            {
             processType === 'strategy' &&
              <div>
                <h4 className='mb-2 font-bold text-[#f3f4f6]'>
                  {list.header}
                </h4>
                <p className='text-[#d1d5db]'>
                  {list.description}
                </p>
              </div>
            }
          </div>
        )
      })
    )
}

export default RenderSVG

  
import React, { useState, useCallback } from 'react';
import './App.css';
import Back from './svg/back-icon'
import Email from './svg/email';
import Upload from './svg/upload';
import { useDropzone } from 'react-dropzone'
import { useAlert } from 'react-alert'
import Success from './svg/success';
import Loading from './svg/loading';

function App() {
  const alert = useAlert()
  const [loading, setLoading] = useState(false)
  const [Result, setResult] = useState([]);
  const [submitted, setSubmitted] = useState(false)

  const onDropAccepted = useCallback(acceptedFiles => {
    setLoading(true)
    setTimeout(() => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader()

        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
          // Do whatever you want with the file contents
          const binaryStr = reader.result
          setResult(binaryStr)
          setLoading(false)
        }
        reader.readAsText(file)
      })
    }, 1500)
  }, [])

  const hancleCancel = () => {
    setSubmitted(false)
    setResult([])
  }

  const onDropRejected = useCallback(() => {
    alert.show('Please select a JSON file only!')
  })

  const { getRootProps, getInputProps} = useDropzone({
    onDropAccepted, accept: {
      'application/json': ['.json'], // you need to specify into this array the extensions you want to accept
    }, maxFiles: 1,
    onDropRejected
  })

  return (
    <>
      <div className={`flex flex-col h-full w-full font-['poppins'] overflow-x-hidden`}>
        <div className={`flex flex-col px-5 pt-16 pb-[103px] mb-5 overflow-x-hidden h-fit ${submitted ? 'pb-0' : ''}`}>
          <span className='flex flex-row items-center text-gray-700 text-xl font-semibold tracking-tighter mb-5'><Back /> Submit form</span>
          <span className='text-gray-700 text-14 tracking-tighter mb-5'>Full Name</span>
          <input placeholder='Full Name' className='rounded-10 bg-gray-100 flex w-full py-3 px-4 items-center mb-5'></input>
          <span className='text-gray-700 text-14 tracking-tighter mb-5'>Email</span>
          <input placeholder='Email' className='rounded-10 bg-gray-100 flex w-full py-3 px-4 items-center mb-5'></input>
          <span style={{ position: "relative", left: "90%", bottom: "50px" }}><Email /></span>
          <span className='text-gray-700 text-14 tracking-tighter mb-5'>Upload JSON File</span>
          <div className='flex items-center justify-center h-114 rounded-10 border-dashed border border-gray-300 bg-gray-100 mb-5' {...getRootProps()}>
            <input {...getInputProps()} />
            <div className='flex flex-col items-center justify-center'>{!loading ? <><Upload /><span className='text-gray-500 font-semibold text-10 leading-5 tracking-tighter'>Browse File</span></> : <><Loading /><span className='text-blue-500 text-10 font-semibold leading-10 tracking-tighter'>Validating...</span></>}</div>
          </div>
          <span className='text-gray-700 text-14 tracking-tighter mb-5'>File Contents</span>
          <div className='h-144 rounded-10 bg-gray-100 p-4 overflow-y-scroll overflow-x-scroll text-black text-14 text-left tracking-tighter'>
            <pre className='font-poppins font-14'>{Result}</pre>
          </div>
        </div>
        <div className='h-103 w-full flex items-center justify-center border border-gray-300 fixed bottom-0 bg-white'>
          <button onClick={() => setSubmitted(true)} disabled={Result.length ===0 ? true : false} className={`w-90 h-49 rounded-30 ${Result.length === 0 ? 'bg-blue-500 bg-opacity-50' : 'bg-blue-500'} text-white text-14 font-medium tracking-tighter`}>
            Submit
          </button>
        </div>
        <div className={`${submitted ? '' : 'hidden'} absolute w-full h-full bg-gray-600 bg-opacity-75`}></div>
        <div className={`${submitted ? '' : 'hidden'} absolute rounded-36 bg-white h-373 flex flex-col items-center w-302 justify-center top-1/4 self-center`}>
          <Success />
          <span className='text-blue-500 text-base font-semibold leading-5 tracking-tighter mb-4'>Success!</span>
          <span className='text-black text-14 font-normal leading-5 tracking-tighter mb-4'>{Result.length} entries successfully uploaded</span>
          <button onClick={hancleCancel} className='w-90 h-49 rounded-30 flex justify-center items-center bg-blue-500 text-white mb-5 cursor-pointer'>Go to my entries</button>
          <button onClick={hancleCancel} className='w-90 h-49 rounded-30 flex justify-center items-center bg-blue-100 text-blue-500 cursor-pointer'>Cancel</button>
        </div>
      </div>
    </>
  );
}

export default App;

import { useRef , useState } from 'react'



const App = () => {

const nameRef = useRef(null);
const emailRef = useRef(null);
const passwordRef = useRef(null);



  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Form submitted!')
    console.log(nameRef.current.value, emailRef.current.value, passwordRef.current.value)
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <form className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg" 
      onSubmit={handleSubmit}>
        <h2 className="mb-6 text-2xl font-bold text-gray-800">Simple Form</h2>

        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
           ref={nameRef} 
          />
        </div>

        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            ref={emailRef}

          />
        </div>

        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            ref={passwordRef}
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default App
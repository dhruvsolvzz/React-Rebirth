import { useForm } from "react-hook-form";

const App = () => {
  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    console.log(data);
    reset(); // Reset the form after submission
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <form
        onSubmit={handleSubmit(submitForm)}
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200"
      >
        <h2 className="mb-6 text-2xl font-bold text-slate-800">Simple Form</h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Name
          </label>
          <input
              {...register("name", {
          required: "Name is required",
          minLength: {
            value: 3,
            message: "Minimum 3 characters required",
          },
        })}
            type="text"
            placeholder="Enter your name"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
          {errors.name && (
            <p className="text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Email
          </label>
          <input
              {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Invalid email address",
          },
        })}
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters required",
              },
            })}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
           {errors.password && (
        <p>{errors.password.message}</p>
      )}
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-4 py-2.5 font-semibold text-white transition hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;

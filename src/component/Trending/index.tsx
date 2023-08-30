import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { MovieCard } from './MovieCard'
import { moviesData } from './moviesData'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { RadioButtons } from 'component/forms/RadioButtons'
import { SwitchButton } from 'component/forms/SwitchButton'

const Index = () => {
  const validationSchema = yup.object().shape({})

  const { handleSubmit, control } = useForm({
    defaultValues: {
      radio: 'other',
      switch: true,
    },
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <div className=" bg-neutral-9">
      <label htmlFor="" className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <BiSearch />
        </span>
        <input
          type="text"
          className="placeholder:italic placeholder:[#868E96] bg-[#F1F3F5] w-full border border-primary rounded-md py-2 pl-8 pr-3 shadow-sm focus:outline-none focus:border-[#ED1E24] caret-[#ED1E24] text-sm md:text-base transition-all"
          placeholder="Search for anything..."
          name="search"
        />
      </label>

      <label className="relative inline-flex items-center cursor-pointer">
        <SwitchButton name="switch" control={control} />
        <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Toggle me
        </span>
      </label>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center">
          <RadioButtons name="radio" control={control} />
        </div>
        <button type="submit">Submit</button>
      </form>

      <h3 className="border-b border-primary mt-12 mb-6 pb-4">Trending</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        {moviesData.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn md:hover:scale-125 transition ease-out duration-500">
          Load more
        </button>
      </div>
    </div>
  )
}

export default Index

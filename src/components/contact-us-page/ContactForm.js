import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { Instagram, Linkedin, Twitter } from 'react-feather';
import { useForm } from "react-hook-form"



const ContactForm = () => {

  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    defaultValues: {
      user_name: "",
      user_lastname: "",
      user_email: "",
      user_phone: "",
      user_subject: "",
      message: "",
    }
  })

    const form = useRef();

    const sendEmail = () => {
      emailjs.sendForm('service_jw4esws', 'template_ybwzlmf', form.current, 'TScVRtSxjchoseKm2')
        .then((result) => {
            console.log(result.text);
            reset()
        }, (error) => {
            console.log(error.text);
        });
    }

  return (

    <div className='w-full bg-white relative overflow-hidden'>
        
        <div className='relative w-full sm:mx-auto lg:px-24 lg:py-24 py-12 px-4'>
        <section className="relative bg-white" aria-labelledby="contact-heading">
          <div className="absolute h-1/2 w-full bg-warm-gray-50" aria-hidden="true" />
          {/* Decorative dot pattern */}
          <div className="relative mx-auto max-w-7xl px-3 lg:px-8">
            <svg
              className="absolute text-gray-300 top-0 right-0 z-0 -translate-y-16 translate-x-1/2 transform sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-warm-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
            </svg>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative bg-white shadow-xl">
              <h2 id="contact-heading" className="sr-only">
                Contact us
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Contact information */}
                <div className="relative overflow-hidden bg-gradient-to-b from-seroBlue to-seroBlue py-10 px-6 sm:px-10 xl:p-12">
                  {/* Decorative angle backgrounds */}
                  <div className="pointer-events-none absolute inset-0 sm:hidden" aria-hidden="true">
                    <svg
                      className="absolute inset-0 h-full w-full"
                      width={343}
                      height={388}
                      viewBox="0 0 343 388"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                    >
                      <path
                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                        fill="url(#linear1)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear1"
                          x1="254.553"
                          y1="107.554"
                          x2="961.66"
                          y2="814.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 h-full w-full"
                      width={359}
                      height={339}
                      viewBox="0 0 359 339"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                    >
                      <path
                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                        fill="url(#linear2)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear2"
                          x1="192.553"
                          y1="28.553"
                          x2="899.66"
                          y2="735.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 h-full w-full"
                      width={160}
                      height={678}
                      viewBox="0 0 160 678"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                    >
                      <path
                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                        fill="url(#linear3)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear3"
                          x1="192.553"
                          y1="325.553"
                          x2="899.66"
                          y2="1032.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white">Contact information</h3>
                  <p className="mt-6 max-w-3xl text-base text-teal-50">
                    Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor
                    lacus arcu.
                  </p>
                  <dl className="mt-8 space-y-6">
                    <dt>
                      <span className="sr-only">Phone number</span>
                    </dt>
                    <dd className="flex text-base text-teal-50">
                      <PhoneIcon className="h-6 w-6 flex-shrink-0 text-yellow-400" aria-hidden="true" />
                      <span className="ml-3">+1 (555) 123-4567</span>
                    </dd>
                    <dt>
                      <span className="sr-only">Email</span>
                    </dt>
                    <dd className="flex text-base text-teal-50">
                      <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-yellow-400" aria-hidden="true" />
                      <span className="ml-3">support@seroconstruction.com</span>
                    </dd>
                  </dl>
                  <ul role="list" className="mt-8 flex space-x-12">
                    <li>
                      <a className="text-yellow-400 hover:text-yellow-400" href="#">
                        <span className="sr-only">Linkedin</span>
                        <Linkedin size={24} />
                      </a>
                    </li>
                    <li>
                      <a className="text-yellow-400 hover:text-yellow-400" href="#">
                        <span className="sr-only">GitHub</span>
                        <Instagram size={24} />
                      </a>
                    </li>
                    <li>
                      <a className="text-yellow-400 hover:text-yellow-400" href="#">
                        <span className="sr-only">Twitter</span>
                        <Twitter size={24} />
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact form */}
                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                  <h3 className="text-lg font-medium text-warm-gray-900">Send us a message</h3>
                  <form ref={form} className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8" onSubmit={handleSubmit(sendEmail)}>
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-warm-gray-900">
                        First name
                      </label>
                      <div className="mt-1">
                        <input
                          {...register("user_name", {required: 'Please, enter your first-name'})}
                          autoComplete="given-name"
                          className="block w-full rounded-md border border-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-seroBlue focus:ring-seroBlue"
                        />
                        <p className='text-red-500 text-sm px-[12px] mt-1'>{errors.user_name?.message}</p>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-warm-gray-900">
                        Last name
                      </label>
                      <div className="mt-1">
                        <input
                           {...register("user_lastname", {required: 'Please, enter your last-name'})}
                          autoComplete="family-name"
                          className="block w-full rounded-md border border-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-seroBlue focus:ring-seroBlue"
                        />
                        <p className='text-red-500 text-sm px-[12px] mt-1'>{errors.user_lastname?.message}</p>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-warm-gray-900">
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                        {...register("user_email", {required: 'Please, enter your email'})}
                          autoComplete="email"
                          className="block w-full rounded-md border border-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-seroBlue focus:ring-seroBlue"
                        />
                        <p className='text-red-500 text-sm px-[12px] mt-1'>{errors.user_email?.message}</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <label htmlFor="phone" className="block text-sm font-medium text-warm-gray-900">
                          Phone
                        </label>
                        <span id="phone-optional" className="text-sm text-warm-gray-500">
                          Optional
                        </span>
                      </div>
                      <div className="mt-1">
                        <input
                          {...register("user_phone")}
                          autoComplete="tel"
                          className="block w-full rounded-md border border-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-seroBlue focus:ring-seroBlue"
                        />
                        <p className='text-red-500 text-sm px-[12px] mt-1'>{errors.user_phone?.message}</p>
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="subject" className="block text-sm font-medium text-warm-gray-900">
                        Subject
                      </label>
                      <div className="mt-1">
                        <input
                          {...register("user_subject", {required: 'Please, enter a valid subject'})}
                          className="block w-full rounded-md border border-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-seroBlue focus:ring-seroBlue"
                        />
                        <p className='text-red-500 text-sm px-[12px] mt-1'>{errors.user_subject?.message}</p>
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label htmlFor="message" className="block text-sm font-medium text-warm-gray-900">
                          Message
                        </label>
                        <span id="message-max" className="text-sm text-warm-gray-500">
                          Max. 500 characters
                        </span>
                      </div>
                      <div className="mt-1">
                        <textarea
                         {...register("message", {required: 'Please, leave us a message'})}
                          rows={4}
                          className="block w-full rounded-md border border-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-seroBlue focus:ring-seroBlue"
                          aria-describedby="message-max"
                        />
                        <p className='text-red-500 text-sm px-[12px] mt-1'>{errors.message?.message}</p>
                      </div>
                    </div>
                    <div className="sm:col-span-2 sm:flex sm:justify-end">
                      <button
                        type="submit"
                        className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-seroBlue px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-seroBlue focus:outline-none sm:w-auto"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </section>
        </div>
    </div>
    
  )
}

export default ContactForm

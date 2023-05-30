import React from 'react';
// import faq from '../assets/img/faq.png';

function FAQ(props) {
let key = 1;
  return (
    <>
<div className="p-8" id="faq">
    <div className="bg-white p-4 rounded-lg shadow-xl py-8 mt-12">
        <h4 className="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">FAQ</h4>
        <p className="text-center text-gray-600 text-md mt-2">Frequently Asked Questions on the iDICE Project</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-12 px-2 xl:px-12 mt-4">
        {
        props.data? props.data.map((faq)=>
        <>
        <div className="flex space-x-8 mt-8" key={key++}>
                <div className="h-12 w-12 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                    </svg>
                </div>
                <div>
                <details className="">
                <summary className="text-2xl font-bold text-gray-700"> 
                  {faq.title}
                </summary>
                <p className="text-gray-600 my-2 leading-[36px] text-justify">{faq.text}</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline capitalize" title="Read More">Read More</a>
              </details>
            </div>
            </div>
        </>
        
        ): "Loading data ......."
        
        } 
            {/* <div className="flex space-x-8 mt-8">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                </div>
                <div>
                    <h4 className="text-3xl font-bold text-gray-700">Consectetur adipisicing elit?</h4>
                    <p className="text-gray-600 my-2 leading-[36px] text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!</p>
                    <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline capitalize" title="Read More">Read More</a>
                </div>
            </div> */}

        </div>
    </div>
</div>
    </>
  )
}

export default FAQ;
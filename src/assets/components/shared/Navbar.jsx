import  PopoverTrigger from '/src/assets/components/ui/popover.jsx';
import PopoverContent from '/src/assets/components/ui/popover.jsx';
import Popover from '/src/assets/components/ui/popover.jsx';
import Avatar from '/src/assets/components/ui/avatar.jsx';
import React from 'react'
// import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="bg-white">
            <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
                <div>
                    <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Portal</span></h1>
                </div>
                <div>
                    <ul className='flex font-medium items-center gap-5'>
                        <li>Home</li>
                        <li>Jobs</li>
                        <li>Brower</li>
                    </ul>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Avatar>
                                <img src="https://i.pravatar.cc/150?img=3" alt="User Avatar" />
                            </Avatar>
                        </PopoverTrigger>
                        <PopoverContent>
                             <h1>hello</h1>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
    )
}
export default Navbar 
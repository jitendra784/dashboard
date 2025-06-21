import React from 'react'
import E_com_head from './e_com_head'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { useState } from "react";
import clsx from 'clsx'
import { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faWindowMaximize, faCube, faClock, faTeletype, faPaperPlane ,faCopy } from '@fortawesome/free-solid-svg-icons';

const categories = [
  {
    name: 'Daily',
   
  },
  {
    name: 'Monthly',
    
  },
  {
    name: 'Yearly',
   
  },
]


// --- StatItem
const StatItem = ({ label, value, change, color }) => (
  <div className="flex flex-col items-center mx-4">
    <div className="text-white">{label}</div>
    <div className="text-xl text-white font-bold">{value}</div>
    <div className={`${color} text-sm`}>{change}</div>
  </div>
);

// --- ContactCard
const ContactCard = ({ img, name, role, imp, stats }) => (
  <div className="bg-neutral-900 rounded-xl p-5 shadow overflow-hidden ">
    <div className="flex justify-between items-center  pb-5 mb-5 border-b border-dashed gap-y-2 ">
      <div className="flex">
        <img
          className="w-12 h-12 mt-1 rounded-full border-2 mr-3 border-white"
          src={img}
          alt={name}
        />
        <div>
          <div className="text-white">{name}</div>
          <div className="text-slate-400">{role}</div>
        </div>
      </div>
      <div className="bg-green-900 text-green-100 px-3 py-1 rounded-full text-sm">
        {imp}
      </div>
    </div>

    <div className="sm:flex justify-center mt-4 sm:divide-x sm:divide-dashed divide-neutral-700 grid grid-cols-1">
      {stats.map((item, idx) => (
        <div key={idx} className="flex-1 text-center px-4">
          <div className="text-slate-400 text-sm mb-1">{item.label}</div>
          <div className="flex justify-center items-baseline">
            <div className="text-white font-bold text-xl">{item.value}</div>
            <div className={`text-sm font-semibold ml-2 ${item.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {Math.abs(item.change)}%
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);


// --- CollaborationCard
const CollaborationCard = ({
  kickoffDate,
  projectName,
  title,
  post,
  titleImg,
  head,
  headName,
  headImg,
}) => (
  <div className="bg-neutral-900 rounded-xl p-5 shadow text-white">
    <div className="text-slate-400 mb-2 text-sm">Collaboration progress report</div>

    <div className="bg-emerald-900 text-emerald-100 px-3 py-1 rounded-md w-full mb-5 text-sm flex items-center gap-2">
  <FontAwesomeIcon icon={faClock} className="text-emerald-200" />
  <span>
    Project kick-off date: <span className="font-semibold">{kickoffDate}</span>
  </span>
</div>


    <div className="space-y-3 text-sm">
      <div>
        Project Name : <span className="font-bold">&nbsp;{projectName}</span>
      </div>

      <div className="flex items-center gap-2">
       
        <div className='flex'>
          {title} :  <img src={titleImg} alt="Project Manager" className="w-6 ml-2 h-6 rounded-full" /><span className="font-bold pl-3 underline decoration-dotted underline-offset-2">{ post}</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        
        <div className='flex'>
          {head} : <img src={headImg} alt="Creative Director" className="ml-2 w-6 h-6 rounded-full" /><span className=" pl-3 font-bold underline decoration-dotted underline-offset-2">{headName}</span>
        </div>
      </div>
    </div>
  </div>
);


const MemberItem = ({ avatar, name, email, role }) => (
  <div className="flex justify-between items-center py-3 border-b border-neutral-800 border-dashed">
    <div className="flex items-center">
      <img src={avatar} alt={name} className="w-10 h-10 rounded-full mr-3" />
      <div>
        <div className="text-white">{name}</div>
        <div className="text-slate-400 text-sm">{email}</div>
      </div>
    </div>
    <div className="bg-neutral-700 w-36 py-1 rounded-md text-slate-300 text-sm flex justify-center items-center">
      {role}
    </div>
  </div>
);

const MembersList = ({ members }) => {
  const [copied, setCopied] = useState(false);
  const invitationURL = "https://left4code.com/invitation?token=abcdefgh12345678";

  const handleCopy = () => {
    navigator.clipboard.writeText(invitationURL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-neutral-900 rounded-xl p-5 shadow text-white">
      <div className="mb-3">Everyone at project can access this file</div>

      {/* Email Input + Send Button */}
      <div className="flex bg-neutral-900 rounded-md w-full border border-neutral-700 mb-4">
        <input
          type="text"
          placeholder="Enter Email Address"
          className="bg-transparent text-sm text-slate-300 px-4 py-2 w-full outline-none"
        />
        <button className="flex items-center gap-2 px-5 py-2 rounded-md m-2 text-sm font-semibold text-slate-100 bg-neutral-800 hover:bg-[#1a1a2a] transition whitespace-nowrap">
          <FontAwesomeIcon icon={faPaperPlane} className="text-slate-300 text-base" />
          <span className="whitespace-nowrap">Send Invitation</span>
        </button>
      </div>

      {/* Member List */}
      {members.map((member, idx) => (
        <MemberItem key={idx} {...member} />
      ))}

      {/* Share Link Section */}
      <div className="mt-4">
        <label className="block mb-2 text-sm text-slate-400">Share invitation link</label>
        <div className="flex bg-neutral-900 border border-neutral-700 rounded-md overflow-hidden">
          <input
            type="text"
            value={invitationURL}
            readOnly
            className="w-full bg-transparent text-sm text-slate-300 px-4 py-2 outline-none"
          />
          <button
            onClick={handleCopy}
            className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 transition text-slate-300"
          >
            <FontAwesomeIcon icon={faCopy} />
          </button>
        </div>
        {copied && (
          <p className="text-xs text-green-400 mt-1">Link copied to clipboard!</p>
        )}
      </div>
    </div>
  );
}
// --- FileItem + FilesList
const FileItem = ({ thumbnail, title, link, members }) => (
   <div className="flex flex-col pb-3">
  <div className="w-full flex flex-col sm:flex-row items-center sm:items-start py-3 border border-dashed rounded-xl gap-4 border-neutral-700">
    
    <div className="px-3">
      <img src={thumbnail} alt={title} className="w-40 h-24 rounded-xl object-cover" />
    </div>

    <div className="flex-1 text-center sm:text-left px-3">
      <div className="text-white font-medium">{title}</div>
      <a href={link} className="text-blue-400 text-sm underline decoration-dotted break-all">{link}</a>
      <div className="text-slate-400 text-sm">{members} Members</div>
    </div>

  </div>
</div>

);

const FilesList = ({ files }) => (
  <div className="bg-neutral-900 rounded-xl p-5 shadow text-white">
    <div className="mb-3 text-lg">Shared Files</div>
    {files.map((file, idx) => (
      <FileItem key={idx} {...file} />
    ))}
  </div>
);
const stats = [
    { label: "Leads Generated", value: "2,176", change: +11 },
    { label: "Deals Closed", value: "2,027", change: 2  },
    { label: "Meetings Scheduled", value: "342", change: -4 },
    
  ];

  const members = [
    { avatar: "https://randomuser.me/api/portraits/women/2.jpg", name: "Julia Roberts", email: "julia@gmail.com", role: "Coordinator" },
    { avatar: "https://randomuser.me/api/portraits/men/4.jpg", name: "Cate Blanchett", email: "cate@gmail.com", role: "Project Manager" },
    { avatar: "https://randomuser.me/api/portraits/women/8.jpg", name: "Jennifer Lawrence", email: "jennifer@gmail.com", role: "CRM Admin" },
    { avatar: "https://randomuser.me/api/portraits/men/5.jpg", name: "Tom Hanks", email: "tom@gmail.com", role: "Product Manager" },
    { avatar: "https://image.tmdb.org/t/p/original/cMwXD3eiUfStgVh1gpVcwCnNelv.jpg", name: "Tom Cruise", email: "tomcruise@gmail.com", role: "Product Manager" },
  ];

  const files = [
    { thumbnail: "https://thumbs.dreamstime.com/z/group-discussion-top-view-diverse-people-meeting-table-office-setting-communicating-gesturing-248386037.jpg?ct=jpeg", title: "Email Campaign ", link: "http://left4code.com/1", members: "4+" },
    { thumbnail: "https://www.rivaliq.com/wp-content/uploads/2019/07/Social-media-team-1536x1025.jpg", title: "Social Analytics", link: "http://left4code.com/2", members: "4+" },
    { thumbnail: "https://static.vecteezy.com/system/resources/previews/032/168/361/non_2x/corporate-office-discussion-teamwork-administration-team-brainstorming-meeting-businessmen-group-laptop-indoors-top-cooperation-business-view-photo.jpg", title: "Sales Deck", link: "http://left4code.com/3", members: "4+" },
    { thumbnail: "https://th.bing.com/th/id/OIP.k7XFSPAi4te0mEcqyoxu9QHaE8?rs=1&pid=ImgDetMain", title: "Marketing Poster", link: "http://left4code.com/4", members: "4+" },
  ];



function Dashboard () {
  return (
    <div className='container mx-auto'>
         <div id='head' className='lg:flex justify-between grid grid-cols-1  '><p className='pt-1 font-semibold lg:pb-12 pb-3 ' >Project Statistic</p>
              <div id='main' className='flex-justify-end pb-4 pt-1'>
               
                <div className=" max-w-md flex">
                <TabGroup>
                  <TabList className="flex  bg-gradient-to-r from-blue-100 to-blue-300  via-blue-100 opacity-90  rounded-md p-1">
                    {categories.map(({ name }) => (
                      <Tab
                        key={name}
                        className="rounded-md px-10 py-1  font-semibold  focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white  data-selected:bg-neutral-500/20 data-selected:data-hover:bg-blue-500/10 opacity-90 "
                      >
                        {name}
                      </Tab>
                    ))}
                  </TabList>
                  
                </TabGroup>
              </div>
               
              </div>
              </div>
        <div className=" w-full  px-4 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 bg-neutral-950 rounded-2xl p-2 gap-3">
      <E_com_head 
      icon = {faDatabase}
      num="247,220"
      per="3%"
      title="Customer Engagement" />

      <E_com_head 
      icon={faWindowMaximize}
      num="124,625"
      per="3%"
      title="Lead Generation"
      />  
      
       <E_com_head 
      icon={faCube}
      num="749,220"
      per="4%"
      title="Support Tickets"
      />  
      <E_com_head 
      icon={faWindowMaximize}
      num="289,235"
      per="9%"
      title="Pipeline Management"
      />  
    </div>
     <div className=" bg-neutral-950 p-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 mt-3 rounded-xl pt-3">
        <div> <p className='pb-3 font-semibold'>Contact Details </p>
      <ContactCard img= "https://randomuser.me/api/portraits/women/11.jpg"name="Meryl Streep" role="HR Director" imp="High Priority" stats={stats} />
      </div>
      
      <div> <p className='pb-3 font-semibold'>Team Collaboration</p>
      <CollaborationCard
        kickoffDate="18 December 2021"
        projectName="Productivity Pioneers"
        title= "Project Manager"
        head="Creative Director"
        post="Jennifer Lawrence"
        headName="Meryl Streep"
        titleImg="https://randomuser.me/api/portraits/women/8.jpg"
        headImg="https://randomuser.me/api/portraits/women/11.jpg"
      /></div>
      <div> <p className='pb-3 font-semibold'>Invite Team Members</p>
      <MembersList members={members} /></div>
      <FilesList files={files} />
    </div>
    </div>
  )
}

export default Dashboard

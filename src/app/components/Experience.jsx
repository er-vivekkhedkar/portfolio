"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiPrisma,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiVercel,
  SiTypescript
} from 'react-icons/si';

function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skills = [
    {
      name: 'React.js',
      icon: FaReact,
      color: 'text-cyan-400',
      hoverColor: 'hover:text-cyan-300'
    },
    {
      name: 'JavaScript',
      icon: FaJs,
      color: 'text-yellow-400',
      hoverColor: 'hover:text-yellow-300'
    },
    {
      name: 'TypeScript',
      icon: SiTypescript,
      color: 'text-blue-500',
      hoverColor: 'hover:text-blue-400'
    },
    {
      name: 'Next.js',
      icon: SiNextdotjs,
      color: 'text-white',
      hoverColor: 'hover:text-gray-300'
    },
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
      color: 'text-teal-400',
      hoverColor: 'hover:text-teal-300'
    },
    {
      name: 'Node.js',
      icon: FaNodeJs,
      color: 'text-green-500',
      hoverColor: 'hover:text-green-400'
    },
    {
      name: 'Prisma',
      icon: SiPrisma,
      color: 'text-teal-400',
      hoverColor: 'hover:text-teal-300'
    }
,    
   
    {
      name: 'Vercel',
      icon: SiVercel,
      color: 'text-white',
      hoverColor: 'hover:text-gray-300'
    },
    {
      name: 'Git/GitHub',
      icon: FaGitAlt,
      color: 'text-red-500',
      hoverColor: 'hover:text-red-400'
    }
  ];

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section
      id="experience"
      className="py-8 md:py-14"
    >
      <div className="container mx-auto px-2 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-10 text-white"
        >
          Experience
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full md:max-w-7xl mx-auto px-0 md:px-2"
        >
          <motion.div
            variants={itemVariants}
            className="relative md:bg-gradient-to-br from-[#181818] to-[#1a1a1a] shadow-xl rounded-none md:rounded-2xl p-3 md:p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 group overflow-hidden"
          >
            

            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <motion.div 
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full blur-xl"
              />
              <motion.div 
                animate={{
                  rotate: -360,
                  scale: [1, 1.3, 1]
                }}
                transition={{
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -bottom-10 -left-10 w-16 h-16 bg-gradient-to-r from-secondary-500/10 to-primary-500/10 rounded-full blur-xl"
              />
            </div>
            
            {/* Gradient border effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-purple-500/20 to-secondary-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8 items-center lg:items-start">
              {/* Left Column - Content */}
              <div className="lg:col-span-2 space-y-2 md:space-y-4 text-center lg:text-left px-1 md:px-0">
                <motion.h3
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.02 }}
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mb-1 md:mb-2 text-center lg:text-left"
                >
                  Intern – Full Stack Developer
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
                  className="text-[#ADB7BE] text-sm md:text-base lg:text-lg mb-2 md:mb-4 text-center lg:text-left pointer-events-none"
                >
                  <a
                    href="https://simplifytech.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-400 hover:text-primary-300 transition-colors duration-300 font-semibold underline decoration-primary-400 hover:decoration-primary-300 cursor-pointer pointer-events-auto relative z-10"
                  >
                    Simplifytech.in
                  </a>
                  <span className="mx-2 text-[#9CA3AF]">•</span>
                  <span className="text-[#9CA3AF]">Feb 2025 – Jun 2025</span>
                </motion.p>

                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-1 md:space-y-2 text-[#ADB7BE] text-xs md:text-sm lg:text-base mb-3 md:mb-6 text-left px-1 md:px-0"
                >
                  <motion.li 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-start text-left"
                  >
                    <motion.span 
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="text-primary-400 mr-3 mt-0.5 flex-shrink-0"
                    >▸</motion.span>
                    Developed responsive front-end interfaces using React.js, Next.js, Tailwind CSS
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-start text-left"
                  >
                    <motion.span 
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                      className="text-primary-400 mr-3 mt-0.5 flex-shrink-0"
                    >▸</motion.span>
                    Built and integrated REST APIs with Node.js & Express.js
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex items-start text-left"
                  >
                    <motion.span 
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                      className="text-primary-400 mr-3 mt-0.5 flex-shrink-0"
                    >▸</motion.span>
                    Worked with MySQL for database design and management
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-start text-left"
                  >
                    <motion.span 
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                      className="text-primary-400 mr-3 mt-0.5 flex-shrink-0"
                    >▸</motion.span>
                    Deployed projects on Vercel and collaborated via Git/GitHub
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                    className="flex items-start text-left"
                  >
                    <motion.span 
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                      className="text-primary-400 mr-3 mt-0.5 flex-shrink-0"
                    >▸</motion.span>
                    Strengthened teamwork and problem-solving skills through client projects
                  </motion.li>
                </motion.ul>


               
              </div>

              {/* Right Column - Tech Stack Icons */}
              <div className="lg:col-span-1 flex flex-col items-center lg:items-start px-0 md:px-0">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-3 md:space-y-6 w-full"
                >
                  

                  
                  
                  {/* Desktop Grid layout for skills - 3 per row */}
                  <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center lg:justify-items-start w-full">
                    {skills.map((skill, index) => {
                      const IconComponent = skill.icon;
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 20, rotateX: -90 }}
                          animate={{ opacity: 1, y: 0, rotateX: 0 }}
                          transition={{
                            delay: 0.6 + index * 0.1,
                            type: "spring",
                            stiffness: 100,
                            damping: 10
                          }}
                          whileHover={{
                            scale: 1.08,
                            rotateY: 15,
                            rotateX: 5,
                            transition: { duration: 0.3 }
                          }}
                          className="group relative p-3 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-lg border border-primary-500/20 hover:border-primary-400/50 transition-all duration-500 cursor-pointer hover:shadow-lg hover:shadow-primary-500/20 flex flex-col items-center justify-center w-24 h-20"
                        >
                          {/* Hover gradient animation */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-purple-500/10 to-secondary-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            animate={{
                              background: [
                                "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(236, 72, 153, 0.1))",
                                "linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(147, 51, 234, 0.1))",
                                "linear-gradient(225deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1))",
                                "linear-gradient(315deg, rgba(59, 130, 246, 0.1), rgba(236, 72, 153, 0.1))"
                              ]
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />

                          {/* Icon + Text */}
                          <div className="relative flex flex-col items-center justify-center space-y-1 w-full">
                            <div className={`text-xl ${skill.color} ${skill.hoverColor} transition-colors duration-300`}>
                              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                                <IconComponent />
                              </motion.div>
                            </div>
                            <span className="text-xs text-[#ADB7BE] group-hover:text-white transition-colors duration-300 text-center leading-tight">
                              {skill.name}
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Mobile horizontal auto-scrolling slider */}
                  <div className="block md:hidden w-full -mx-1 md:mx-0">
                    <div className="relative overflow-hidden px-1">
                      <motion.div 
                        className="flex gap-4"
                        animate={{
                          x: [-800, 0]
                        }}
                        transition={{
                          duration: 15,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        {/* First set of skills */}
                        {skills.map((skill, index) => {
                          const IconComponent = skill.icon;
                          return (
                            <motion.div
                              key={`first-${skill.name}`}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                delay: 0.6 + index * 0.1,
                                type: "spring",
                                stiffness: 100,
                                damping: 10
                              }}
                              className="group relative p-3 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-lg border border-primary-500/20 hover:border-primary-400/50 transition-all duration-500 cursor-pointer hover:shadow-lg hover:shadow-primary-500/20 flex flex-col items-center justify-center min-w-[80px] h-16 flex-shrink-0"
                            >
                              {/* Hover gradient animation */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-purple-500/10 to-secondary-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                animate={{
                                  background: [
                                    "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(236, 72, 153, 0.1))",
                                    "linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(147, 51, 234, 0.1))",
                                    "linear-gradient(225deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1))",
                                    "linear-gradient(315deg, rgba(59, 130, 246, 0.1), rgba(236, 72, 153, 0.1))"
                                  ]
                                }}
                                transition={{
                                  duration: 4,
                                  repeat: Infinity,
                                  ease: "linear"
                                }}
                              />

                              {/* Icon + Text */}
                              <div className="relative flex flex-col items-center justify-center space-y-1 w-full">
                                <div className={`text-lg ${skill.color} ${skill.hoverColor} transition-colors duration-300`}>
                                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                                    <IconComponent />
                                  </motion.div>
                                </div>
                                <span className="text-xs text-[#ADB7BE] group-hover:text-white transition-colors duration-300 text-center leading-tight whitespace-nowrap">
                                  {skill.name}
                                </span>
                              </div>
                            </motion.div>
                          );
                        })}
                        
                        {/* Duplicate set for seamless loop */}
                        {skills.map((skill, index) => {
                          const IconComponent = skill.icon;
                          return (
                            <motion.div
                              key={`second-${skill.name}`}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                delay: 0.6 + index * 0.1,
                                type: "spring",
                                stiffness: 100,
                                damping: 10
                              }}
                              className="group relative p-3 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-lg border border-primary-500/20 hover:border-primary-400/50 transition-all duration-500 cursor-pointer hover:shadow-lg hover:shadow-primary-500/20 flex flex-col items-center justify-center min-w-[80px] h-16 flex-shrink-0"
                            >
                              {/* Hover gradient animation */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-purple-500/10 to-secondary-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                animate={{
                                  background: [
                                    "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(236, 72, 153, 0.1))",
                                    "linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(147, 51, 234, 0.1))",
                                    "linear-gradient(225deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1))",
                                    "linear-gradient(315deg, rgba(59, 130, 246, 0.1), rgba(236, 72, 153, 0.1))"
                                  ]
                                }}
                                transition={{
                                  duration: 4,
                                  repeat: Infinity,
                                  ease: "linear"
                                }}
                              />

                              {/* Icon + Text */}
                              <div className="relative flex flex-col items-center justify-center space-y-1 w-full">
                                <div className={`text-lg ${skill.color} ${skill.hoverColor} transition-colors duration-300`}>
                                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                                    <IconComponent />
                                  </motion.div>
                                </div>
                                <span className="text-xs text-[#ADB7BE] group-hover:text-white transition-colors duration-300 text-center leading-tight whitespace-nowrap">
                                  {skill.name}
                                </span>
                              </div>
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;

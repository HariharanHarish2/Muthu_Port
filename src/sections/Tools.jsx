import React from 'react'
import { motion } from 'framer-motion'

const Tools = () => {
  const toolCategories = [
    {
      title: 'UI & UX',
      items: [
        { name: 'Figma', description: 'Design & prototyping', color: '#a259ff' },
        { name: 'Canva', description: 'Graphics & visual content', color: '#00c4cc' }
      ]
    },
    {
      title: 'Editing',
      items: [
        { name: 'Filmora', description: 'Video editing', color: '#F97316' }
      ]
    }
  ]

  return (
    <section id="tools" className="py-20 relative overflow-hidden bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A]">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 blob"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 blob"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">Tools</h2>
          <p className="text-xl text-white/80">Design, UX & editing software</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {toolCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="glass rounded-3xl p-8 card-3d"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-2xl font-semibold text-[#FFFFFF] mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.15 + 0.1 }}
                viewport={{ once: true }}
              >
                {category.title}
              </motion.h3>
              <div className="space-y-4">
                {category.items.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: catIndex * 0.15 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.02,
                      borderColor: 'rgba(249, 115, 22, 0.4)',
                      backgroundColor: 'rgba(255,255,255,0.08)'
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg shrink-0"
                      style={{ backgroundColor: tool.color }}
                    >
                      {tool.name.charAt(0)}
                    </div>
                    <div>
                      <span className="text-[#FFFFFF] font-medium block">{tool.name}</span>
                      <span className="text-[#9CA3AF] text-sm">{tool.description}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tools

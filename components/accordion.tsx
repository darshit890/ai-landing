import React from 'react'

import {
    Accordion as Acco,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const Accordion = () => {
  return (
    <section className='max-w-5xl mx-auto py-20 px-5'>
        <h1 className='pb-10 text-3xl text-center font-medium tracking-tight underline decoration-4 decoration-primary'>FAQs</h1>
        <Acco type="single" collapsible className="w-full">
            {acc.map((item, index) => (
                <AccordionItem key={index} value={item.item}>
                    <AccordionTrigger>{item.title}</AccordionTrigger>
                    <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Acco>
    </section>
  )
}

export default Accordion

const acc = [
    {
        title: 'What is the FindMyAiTool and how can it be used?',
        description1: 'The FindMyAiTool is a list of ai tools of software tools that assist in developing and implementing AI projects. It includes programming libraries, frameworks, and SDKs to create AI-based applications, algorithms, and models.',
        description2: 'Users such as individuals, businesses, and researchers can use the directory to find the tools best suited to their needs. The directory provides information on the features, benefits, and limitations of each tool, making it a valuable resource for those interested in AI technology.',
        description3: 'By browsing through the directory, users can access relevant information on various AI tools and select the appropriate ones for their projects.',
        item: 'item-1'
    },
    {
        title: 'What is the FindMyAiTool and how can it be used?',
        description1: 'The FindMyAiTool is a list of ai tools of software tools that assist in developing and implementing AI projects. It includes programming libraries, frameworks, and SDKs to create AI-based applications, algorithms, and models.',
        description2: 'Users such as individuals, businesses, and researchers can use the directory to find the tools best suited to their needs. The directory provides information on the features, benefits, and limitations of each tool, making it a valuable resource for those interested in AI technology.',
        description3: 'By browsing through the directory, users can access relevant information on various AI tools and select the appropriate ones for their projects.',
        item: 'item-2'
    },
    {
        title: 'What is the FindMyAiTool and how can it be used?',
        description1: 'The FindMyAiTool is a list of ai tools of software tools that assist in developing and implementing AI projects. It includes programming libraries, frameworks, and SDKs to create AI-based applications, algorithms, and models.',
        description2: 'Users such as individuals, businesses, and researchers can use the directory to find the tools best suited to their needs. The directory provides information on the features, benefits, and limitations of each tool, making it a valuable resource for those interested in AI technology.',
        description3: 'By browsing through the directory, users can access relevant information on various AI tools and select the appropriate ones for their projects.',
        item: 'item-3'
    },
    {
        title: 'What is the FindMyAiTool and how can it be used?',
        description1: 'The FindMyAiTool is a list of ai tools of software tools that assist in developing and implementing AI projects. It includes programming libraries, frameworks, and SDKs to create AI-based applications, algorithms, and models.',
        description2: 'Users such as individuals, businesses, and researchers can use the directory to find the tools best suited to their needs. The directory provides information on the features, benefits, and limitations of each tool, making it a valuable resource for those interested in AI technology.',
        description3: 'By browsing through the directory, users can access relevant information on various AI tools and select the appropriate ones for their projects.',
        item: 'item-4'
    },
]
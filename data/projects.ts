/**
 * Project data file
 * 
 * To add a new project:
 * 1. Add a new object to the projects array
 * 2. Include: id, title, description, image (optional), tags, and any links
 * 3. The id will be used in the URL (e.g., /projects/my-project-id)
 * 
 * To add project images:
 * 1. Place images in the /public/images/projects/ directory
 * 2. Reference them as: '/images/projects/your-image.jpg'
 * 3. Or use external URLs for images hosted elsewhere
 */

export interface Project {
  id: string
  title: string
  description: string
  image?: string[]
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  reportUrl?: string
  details?: string // Full project description for detail page
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'EMG Bionic Hand',
    description: ' Engineered a functional bionic hand by integrating mechanical design, electronics, and biosignal processing.',
    image: ['/images/hand.jpg'],
    tags: ['Biomedical', 'Prosthetics', 'Arduino', 'CAD'],
    details: `I've always been interested in prosthetics, specifically upper arm extremity prosthetics. I wanted to make a bionic hand designed for transradial amputees. I engineered a functional bionic hand by integrating mechanical design, electronics, and biosignal processing. Using CAD, I designed joints, hand, and forearm which includes housing for electronics and a pulley actuation system. I programmed an Arduino to actuate five servos for each finger. The servos were powered using EMG-derived muscle signals by using an EMG sensor connected to the upper arm. `
  },
  {
    id: 'project-2',
    title: 'Electric Rollerblades',
    description: ' Designed and built rollerblade frame and integrated electrical components to make working electric skates that are adaptable to various foot sizes and can reach speeds up to ~15 mph',
    image: ['/images/rollerbladeframecad.png'],
    tags: ['CAD', 'Integration'],
    details: ` I have been rollerblading since I was eight and always wanted to build a pair of electric rollerblades. I designed a unique frame using a trinity mount that could house one hub motor in the rear. I built the rollerblade shoes using woodshop and shop skills. The result was a working pair of electric rollerblades that could fit various foot sizes that could reach speeds up to 15 mph. `
  },
  {
    id: 'project-3',
    title: 'Line Following Robot',
    description: 'Principals of Integrated Engineering project: build a robot that can follow a line',
    image: ['/images/robot.jpg',
      '/images/linerobotcad.png'
    ],
    tags: ['Integration', 'CAD', 'MATLAB',],
    details: `I created a line following robot that uses a live tuned PID controller to follow an obstacle course with angles less than 90 degrees. I designed a custom chassis for a line follower robot that could house 5 IR sensors, an arduino, a motorshield, and two gearboxes. The mechanical design for the robot was simple and the 3D printed chassis was designed to house electronics and be lightweight. `
  },
  {
    id: 'project-4',
    title: 'IMD Latch',
    description: 'Designed PCB layout in KiCad of insulation monitoring device latch and populated board for Olin MKVII formula car',
    image: ['/images/formulacar.jpg'],
    tags: ['KiCad', 'Electronics'],
    details: `As part of the Olin Electric Motorsport high voltage subteam, I designed the IMD latch to interface with the IMD to emergency shutdown the electric car. I performed electrical component analysis to minimize interference on the IMD latch PCB.`
  },
  {
    id: 'project-5',
    title: 'Braille E-Reader',
    description: 'Olin Assistive Technology Lab: Braille E-Reader',
    image: ['/images/camdot.png'],
    tags: ['CAD', 'Integration'],
    details: ` As a member of the mechanical electrical actuation integration subteam on Olin Assistive Technology Lab, I utilized CAD to collaboratively design the magnetic mechanical actuation of braille e-reader cells. I analyzed mechanical actuation systems to identify the most electrically efficient and manufacturable design for large-scale production.`
  },
  {
    id: 'project-6',
    title: 'Gourd Facial Detection',
    description: 'Quantatative Engineering Analysis 1: Facial detection program to match faces with gourds',
    image: ['/images/gourd.png'],
    tags: ['MATLAB', 'Linear Algebra'],
    details: `This project performs facial analysis by first converting 64x64 grayscale images into 4096-element vectors and normalizing them by subtracting the mean image. Principal Component Analysis is then applied to a training set of gourd images using Singular Value Decomposition, producing a set of principal components known as “eigengourds.” These components define a lower-dimensional space that captures the main variations in the gourd dataset. Face images are then projected into this eigengourd space, and their similarity to each gourd is measured by computing Euclidean distances between their projections. The system identifies the gourd that each face most closely resembles based on these distances.`
  },
  {
    id: 'project-7',
    title: 'Computer Vision Video Game',
    description: 'Created a boxing video game in python that uses computer vision as a controller',
    image: ['/images/boxatron.png'],
    tags: ['Python', 'OpenCV','Pygame'],
    githubUrl: 'https://github.com/olincollege/boxatron',
    liveUrl:'https://special-adventure-prl7y5j.pages.github.io/',
    details: `Inspired by the classic Wii Sports Boxing game, I set out to create an interactive boxing experience using computer vision. BOX-A-TRON is a Python-based webcam/keyboard boxing game that follows the Model-View-Controller (MVC) architecture. In this boxing game the user will be able to compete in a one-on-one boxing match against a computer-controlled opponent. Players can choose from 3 different difficulties (easy/medium/hard) and view the webcam footage alongside the game window. I used OpenCV computer vision to track red (#FF0000) and blue (#0000FF) object as the 'gloves' so the user can physically punch and block. `
  },
  {
    id: 'project-8',
    title: 'Machine Learning Drone',
    description: 'Principals of Integrated Engineering final project: Vlogging drone',
    image: ['/images/dronecad.png','/images/dronept1.jpg'],
    tags: ['CAD', 'Python', 'Integration'],
    details: `I collaborated with a team of five to develop a machine-learning-powered drone using a custom-trained YOLOv11 detection model. The drone integrates an NVIDIA Jetson Orin for onboard computing and a Pixhawk 2.4.8 flight controller, allowing it to autonomously identify and track a designated target. I trained the YOLOv11 model to improve detection accuracy by restricting identification parameters to a single class (person) and implemented the model on the Jetson for real-time processing. Additionally, I designed structural components for the drone in CAD and performed finite element analysis (FEA) to verify that the structures could withstand impact loads with a factor of safety of 2.`
  },

]


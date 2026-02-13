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

export type ProjectSection =
  | { type: 'text'; content: string }
  | { type: 'image'; src: string; caption?: string }
  | { type: 'video'; youtubeId: string; caption?: string }

export interface Project {
  id: string
  title: string
  description: string
  image?: string[]        // keep for ProjectCard thumbnail
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  reportUrl?: string
  details?: string        // optional fallback if no sections
  sections?: ProjectSection[]  // ordered blocks: text, image, text, etc.
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'EMG Bionic Hand',
    description: '...',
    image: ['/images/hand.jpg'],
    tags: ['Biomedical', 'Prosthetics', 'Arduino', 'CAD'],
    sections: [
      { type: 'text', content: "Out of interest in prosthetics, I designed a bionic hand that can be actuated by EMG signals" },
      { type: 'image', src: '/images/hand.jpg', caption: 'The bionic hand, showing the finger articulation system and EMG sensors.' },
      { type: 'image', src: '/images/handprogress.jpg', caption: 'Testing the first assembled finger joints' },
      { type: 'text', content: 'Using CAD, I designed joints, hand, and forearm. I implemetned a pulley actuation system drive by servos to move the fingers.' },
      { type: 'image', src: '/images/progress.jpg', caption: 'Assembling the 3D printed parts' },
      { type: 'video', youtubeId: 'https://youtu.be/K6ESFWITWqY', caption: 'The bionic hand in action.' },
      // add more images or text blocks in any order
    ]
  },
  {
    id: 'project-2',
    title: 'Electric Rollerblades',
    description: ' Designed and built rollerblade frame and integrated electrical components to make working electric skates that are adaptable to various foot sizes and can reach speeds up to ~15 mph',
    image: ['/images/rollerbladeframecad.png'],
    tags: ['CAD', 'Integration'],
    sections: [
      { type: 'text', content: "I have been rollerblading since I was eight and always wanted to build a pair of electric rollerblades. I designed a unique frame using a trinity mount that could house one hub motor in the rear. I built the rollerblade shoes using woodshop and fabrication skills. The result was a working pair of electric rollerblades that could fit various foot sizes that could reach speeds up to 15 mph. " },
      { type: 'image', src: '/images/rollerbladeframecad.png', caption: 'The CAD model of the rollerblade frame' },
    ]
  },
  {
    id: 'project-3',
    title: 'Line Following Robot',
    description: 'Principals of Integrated Engineering project: build a robot that can follow a line',
    image: ['/images/robot.jpg' ],
    tags: ['Integration', 'CAD', 'MATLAB',],
    sections: [
      { type: 'text', content: "I created a line following robot that uses a live tuned PID controller to follow an obstacle course with angles less than 90 degrees" },
      { type: 'image', src: '/images/linerobotcad.png', caption: 'The CAD model of the line following robot' },
      { type: 'text', content: 'I designed a custom chassis for a line follower robot that could house 5 IR sensors, an arduino, a motorshield, and two gearboxes. The mechanical design for the robot was simple and the 3D printed chassis was designed to house electronics and be lightweight. I used MATLAB to tune the PID controller to follow the line and avoid obstacles.' },
      { type: 'image', src: '/images/linebot_circut.png', caption: 'Electrical schematic of the line following robot' },

    ]
  },
  {
    id: 'project-4',
    title: 'IMD Latch',
    description: 'Designed PCB layout in KiCad of insulation monitoring device latch and populated board for Olin MKVII formula car',
    image: ['/images/formulacar.jpg'],
    tags: ['KiCad', 'Electronics'],
    sections: [
      { type: 'text', content: "As part of the Olin Electric Motorsport high voltage subteam, I designed the IMD latch to interface with the IMD to emergency shutdown the electric car. I performed electrical component analysis to minimize interference on the IMD latch PCB." },
      { type: 'image', src: '/images/imd_latch.png', caption: 'The CAD model of the IMD latch' },
    ]
  },
  {
    id: 'project-5',
    title: 'Braille E-Reader',
    description: 'Olin Assistive Technology Lab: Braille E-Reader',
    image: ['/images/camdot.png'],
    tags: ['CAD', 'Integration'],
    sections: [
      { type: 'text', content: "As a member of the mechanical electrical actuation integration subteam on Olin Assistive Technology Lab, I utilized CAD to collaboratively design the magnetic mechanical actuation of braille e-reader cells. I analyzed mechanical actuation systems to identify the most electrically efficient and manufacturable design for large-scale production." },
      { type: 'image', src: '/images/mechanism.png', caption: 'The CAD model of a single cell' },
      { type: 'text', content: 'I explored different mechanical actuation system, creating and testing a custom rotational actuation system inspired by a click pen but scaled down around 10mm in diameter. I created multiple prototypes to test the feasability of a scaled down version and compared it to other systems like a cams based system.  '},
    ]
  },
  {
    id: 'project-6',
    title: 'Gourd Facial Detection',
    description: 'Quantatative Engineering Analysis 1: Facial detection program to match faces with gourds',
    image: ['/images/gourd.png'],
    tags: ['MATLAB', 'Linear Algebra'],
    sections: [
      { type: 'image', src: '/images/gourd.png', caption: 'Gourd detection results' },
      {type: 'text', content: 'This project performs facial analysis by first converting 64x64 grayscale images into 4096-element vectors and normalizing them by subtracting the mean image. Principal Component Analysis is then applied to a training set of gourd images using Singular Value Decomposition, producing a set of principal components known as “eigengourds.” These components define a lower-dimensional space that captures the main variations in the gourd dataset. Face images are then projected into this eigengourd space, and their similarity to each gourd is measured by computing Euclidean distances between their projections. The system identifies the gourd that each face most closely resembles based on these distances.'}
    ]
  },
  {
    id: 'project-7',
    title: 'Computer Vision Video Game',
    description: 'Created a boxing video game in python that uses computer vision as a controller',
    image: ['/images/boxatron.png'],
    tags: ['Python', 'OpenCV','Pygame'],
    githubUrl: 'https://github.com/olincollege/boxatron',
    liveUrl:'https://special-adventure-prl7y5j.pages.github.io/',
    sections: [
      { type: 'text', content: "Inspired by the classic Wii Sports Boxing game, I set out to create a boxing video game that uses computer vision as a controller" },
      { type: 'image', src: '/images/boxatron.png', caption: 'The completed video game showing the computer vision controller.' },
      { type: 'text', content: 'I used OpenCV computer vision to track red and blue objects as the gloves so the user can physically punch and block. I used a frame by frame size analysis to determine if the users hand is rapidly approaching the camera which would detect that as a punch. I used Pygame to create the game window and keyboard controls.' },
      { type: 'video', youtubeId: 'https://youtu.be/DCyH_2mRtqA', caption: 'Video game description and demo' },
    ]  
  },
  {
    id: 'project-8',
    title: 'Machine Learning Drone',
    description: 'Principals of Integrated Engineering final project: Vlogging drone',
    image: ['/images/dronecad.png'],
    tags: ['CAD', 'Python', 'Integration'],
    githubUrl: 'https://github.com/aeveical/vlogging-drone',
    liveUrl:'https://aeveical.github.io/pie-2025-03/index.html',

    sections: [
      {type: 'text', content: "I collaborated with a team of five to develop a machine-learning-powered drone using a custom-trained YOLOv11 detection model. The drone integrates an NVIDIA Jetson Orin for onboard computing and a Pixhawk 2.4.8 flight controller, allowing it to autonomously identify and track a target. I trained the YOLOv11 model to improve detection accuracy by restricting identification parameters to a single class (person) and implemented the model on the Jetson for real-time processing." },
      {type:'text',content: 'I designed structural components for the drone in CAD and performed finite element analysis (FEA) to verify that the structures could withstand impact loads with a factor of safety of 2. I implemented thermal management feature in the chassis the reduced internal operating temperatures by 40%' },
      {type: 'image', src: '/images/dronecad1.png', caption: 'The CAD model of the drone' },
      {type: 'image', src: '/images/drone.heic', caption: 'Aseembled upper and lower parts of the drone'},
      {type: 'text', content: 'I worked in python with a cuton YOLOV11 algorithm to do fram by frame object detection analysis to identify only a single person when multiple people are in frame. Allowing the drone to track and stay with its target with 100% accuracy'},
      {type: 'image', src: '/images/livefeed.png', caption: 'Team photo taken on the drone from the live feed with singles person dectection implemented'}
    ]  
  },

]


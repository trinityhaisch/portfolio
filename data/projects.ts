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
    description: 'Design and assembled an upper arm EMG prosthetic ',
    image: ['/images/hand.jpg'],
    tags: ['Biomedical', 'Prosthetics', 'Arduino', 'CAD'],
    sections: [
      { type: 'text', content: "Out of interest in prosthetics, I designed a bionic hand that can be actuated by EMG signals. I learned about biosensors, prototyping, fabrication and a lot of troubleshooting. I enjoyed exploring different ways to represent the anatomy of a human hand through 3D printed parts. " },
      { type: 'image', src: '/images/hand.jpg', caption: 'The bionic hand, showing the finger articulation system and EMG sensors.' },
      { type: 'image', src: '/images/handprogress.jpg', caption: 'Testing the first assembled finger joints' },
      { type: 'text', content: 'Using CAD, I designed joints, hand, and forearm. I implemetned a pulley actuation system drive by servos to move the fingers.' },
      { type: 'image', src: '/images/progress.jpg', caption: 'Assembling the 3D printed parts' },
      { type: 'video', youtubeId: 'K6ESFWITWqY?si=KuCU3CZFdVLVYiD_', caption: 'Testing the actuation system of the hand with EMG' },
      // add more images or text blocks in any order
    ]
  },
  {
    id: 'project-8',
    title: 'Machine Learning Drone',
    description: 'Principals of Integrated Engineering final project: Vlogging drone',
    image: ['/images/sideview.JPG'],
    tags: ['CAD', 'Python', 'Integration'],
    githubUrl: 'https://github.com/aeveical/vlogging-drone',
    liveUrl:'https://aeveical.github.io/pie-2025-03/index.html',

    sections: [
      {type: 'text', content: "I collaborated with a team of five to develop a machine-learning-powered drone using a custom-trained YOLOv11 detection model. Our goal was to make a functional drone from scratch which could be controlled with a simple remote control but also work autonomously by tracking aperson and autonomously pathing to keep this person in frame at all times. Our motivations include our passion for drones and videography as well as wanting to work on something that is challenging. We were searching for a project to do that could implement computer vision, as it is a field we are all interested in. The drone integrates an NVIDIA Jetson Orin for onboard computing and a Pixhawk 2.4.8 flight controller, allowing it to autonomously identify and track a target. I trained the YOLOv11 model to improve detection accuracy by restricting identification parameters to a single class (person) and implemented the model on the Jetson for real-time processing." },
      {type:'text',content: 'After some sketches we decided on a quadcopter with a coffin shape as that design could balance out the center of mass and efficiently house all our electronics. The drones max weight is 2.4kg so we designed the drone chassis to pack each component inside with minimum extraneous space, which meant that wire management was difficult as we had little tolerance for wires lengths. The battery resides underneath the drone for weight balance and easy access since we need to recharge it frequently.'}, 
      {type: 'image', src: '/images/sketches.png', caption: 'First sketches of the drone' },
      {type:'text',content: 'I designed structural components for the drone in CAD and performed FEA to verify that the structures could withstand impact loads with a FOS of 2. I implemented thermal management feature in the chassis the reduced internal operating temperatures by 40%. I added a mount for a 390 LiDAR sensor to increase the autonomous ability of the drone.' },
      {type: 'image', src: '/images/dronecad1.png', caption: 'The CAD model of the drone' },
      {type: 'image', src: '/images/dronecad.png', caption: 'The model of the drone with all components' },
      {type: 'image', src: '/images/assembly1.jpg', caption: 'Upper and lower parts of the drone'},
      {type: 'text', content: 'I worked in python with a custom YOLOV11 algorithm to do frame by frame object detection analysis to identify only a single person when multiple people are in frame. Allowing the drone to track and stay with its target with 100% accuracy.'},
      {type: 'image', src: '/images/livefeed.png', caption: 'Team photo taken on the drone from the live feed with singles person dectection implemented'}
    ]  
  },
  {
    id: 'project-2',
    title: 'Electric Rollerblades',
    description: ' Designed and built rollerblade frame and integrated electrical components to make working electric skates that are adaptable to various foot sizes and can reach speeds up to ~15 mph',
    image: ['/images/rollerbladeframecad.png'],
    tags: ['CAD', 'Integration'],
    sections: [
      { type: 'text', content: "I have been rollerblading since I was eight and always wanted to build a pair of electric rollerblades. I designed a unique frame using a trinity mount that could house one hub motor in the rear. I wanted to make the frame durable enough to withstand the force of a human weight along with vibrations from moving along the ground. I added captive nut slots for attatching the wheels. I built the rollerblades using woodshop and fabrication skills."},
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
      { type: 'text', content: "I created a line following robot that uses a live tuned PID controller to follow an obstacle course that included sharp turns. We used an Arduino Uno R4 for the microcontroller." },
      { type: 'image', src: '/images/linerobotcad.png', caption: 'The CAD model of the line following robot' },
      { type: 'text', content: 'I designed a custom chassis for a line follower robot that could house 5 IR sensors, an arduino, a motorshield, and two gearboxes. The mechanical design for the robot was simple and the 3D printed chassis was designed to house electronics and be lightweight. I used MATLAB to tune the PID controller to follow the line and avoid obstacles.' },
      { type: 'image', src: '/images/linebot_circut.png', caption: 'Electrical schematic of the line following robot' },
      { type: 'video', youtubeId: 'https://www.youtube.com/embed/gddeJo4nk_E?si=r9YmJzKe7ug302SZ', caption: 'Demo of the line following robot' },
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
      { type: 'video', youtubeId: 'https://www.youtube.com/embed/DCyH_2mRtqA?si=yPgrDKDsGhc2B1oZ', caption: 'Video game description and demo' },
    ]  
  },
  {
    id: 'project-9',
    title: '3D Scanner',
    description: 'Principals of Integrated Engineering project: build a 3D scanner with pan/tilt mechanism',
    image: ['/images/distanceplot.png'],
    tags: ['Arduino', 'Integration', 'Python','Software'],
    sections: [
      { type: 'image', src: '/images/3dscanner.png', caption: 'The 3D scanner' },
      { type: 'text', content: "This mini-project focused on designing and building a rudimentary 3D scanner using a pan/tilt mechanism driven by two hobby servo motors and an infrared distance sensor, all controlled by an Arduino. The scanner was tasked with capturing spatial data from an object of known geometry and reconstructing its 3D profile through software-based visualization. The system integrated mechanical design, electrical wiring, and sensor calibration and data was transmitted via serial communication and processed using Python and MATLAB to generate both 2D and 3D visualizations. This project helped reinforce key skills in working with sensors and actuators, and introduced the challenge of turning physical measurements into digital models." },
      { type: 'image', src: '/images/scancad.png', caption: 'The CAD model of the 3D scanner' },
      { type: 'text', content:"The objective of the design was to enable the infrared distance sensor to rotate only in the horizontal (pan) and vertical (tilt) directions, ensuring controlled scanning of the target geometry. Two Vigor VS-2 hobby servos were used to drive the motion. The base servo provides horizontal rotation, while the second servo, mounted orthogonally on an arm, controls vertical tilt. This compact configuration allowed the sensor to sweep across the target plane without introducing unnecessary complexity. All custom components were modeled in CAD and fabricated with a 3D printer."},
      { type: 'image', src: '/images/codethings.png', caption: 'Data processing platforms used' },
      {type: 'text', content: 'The software workflow involved three main components: Arduino control code, serial data transmission, and visualization scripts in Python and MATLAB. The Arduino collected analog distance readings and servo angles, then sent the data over serial to a Python script running on the laptop. Python handled data parsing and organization, storing each sweep as a nested list corresponding to servo positions and sensor values. These structured datasets were then imported into MATLAB, where we generated both top-down and 3D visualizations of the scanned object. This multi-platform approach allowed us to separate hardware control from data processing and visualization, making the system easier to debug and extend. Python handled data parsing and organization, storing each sweep as a nested list corresponding to servo positions and sensor values. The scanning pattern followed a zigzag trajectory: each horizontal sweep was performed at a fixed tilt angle, starting from left to right, then incrementing the tilt slightly and sweeping right to left, and so on. This alternating pattern preserved spatial continuity and simplified grid construction for later visualization. It also ensured faster scanning by eliminating the need to reset the pan servo to its starting position after each sweep, allowing continuous motion and reducing mechanical delay.'},
      { type: 'image', src: '/images/simglesweepplot.png', caption: 'Single sweep data' },
      {type: 'text', content: 'This 3D surface plot visualizes the calibrated distance data collected from a single horizontal sweep using one servo. Although the dataset consists of only one row, the surface plot helps illustrate how distance varies across the sweep. A sharp drop-off near the end of the sweep indicates a significant change in surface geometry, and the bottom two corners of the star-shaped object begin to emerge in the profile.'},
      { type: 'image', src: '/images/scaninwork.png', caption: '3D scanner in use' },
      {type: 'text', content: 'The scanning system used two servos—one for horizontal (pan) and one for vertical (tilt) motion—allowing the IR sensor to sweep across a full 2D grid. At each (pan, tilt) coordinate, the sensor recorded an analog voltage corresponding to distance. These readings were stored row-by-row in a 2D array, forming a complete spatial dataset.'},
      { type: 'image', src: '/images/distanceplot.png', caption: '3D scanner processed results' },
      {type: 'text', content: 'The data was calibrated and visualized using MATLAB to produce both 3D surface plots and top-down heatmaps. his 3D surface plot visualizes the calibrated distance data collected from the pan/tilt scanner. The peaks and valleys in the surface clearly reveal the contour of the scanned shape, allowing us to map its geometry in physical space. The color gradient enhances interpretability, with cooler tones representing closer surfaces and warmer tones indicating greater distances.'},
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
      { type: 'image', src: '/images/imd_latch.png', caption: 'The KiCad model of the IMD latch' },
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
    id: 'project-10',
    title: 'Electromagnetic Lamp',
    description: 'Work in progress',
    image: ['/images/'],
    tags: ['Design', 'Electronics','CAD'],
    sections: [
    ]
  },
 

]


/*import React from'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
/*import image1 from '../images/s1.png';
import image2 from '../images/s2.png';

function Services() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
           <div className="s-heading">
            <h1>Services</h1>
            <p>Here are some Services we providing</p>
            
    <div className="w-3/4 m-auto">
      <div className="mt-20">
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.name} className="bg-white h-[450px] text-black">
                      <div className='h-56 bg-indigo-500 flex justify-center items-center'> 
                                    <img src={d.img} alt="" className="h-44 w-44"/> 
                       </div>

            <div className="flex flex-col items-center justify-center gap-4 p-4"> 
              <p className="text-xl font-semibold">{d.name}</p> 
              <p className="text-center">{d.review}</p> 
              <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button> 
            </div>
          </div>
        ))}
      </Slider>
      </div>
      
    </div>
    </div>
        
  );
   }
  

const data = [
  {
   name:'Lab tests for concrete',
   img:'/serviceimgs/s1.png',  
   review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
   
  {
    name: 'Geo technical Investigation',
    img: '/serviceimgs/s2.png',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Non-Destructive Testing',
    img:  '/serviceimgs/s2.png',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name:  'Structural & Foundation Design' ,
    img:  '/serviceimgs/s2.png',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Restoration & Rehabilitation of structures',
    img:  '/serviceimgs/s2.png',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },

  
];

export default Services;*/












import React from 'react';
import Box from './Box';
import image1 from '../images/s1.jpg';
import image2 from '../images/s2.jpg';
import image3 from '../images/s3.jpg';
import image4 from '../images/s4.jpg';
import image5 from '../images/s5.jpg';
import image6 from '../images/s6.jpg';
function Services() {
   
  return (
    <div id='services'>
      <div className='s-heading'>
            <h1>Services</h1>
            <p>Here are some Services we are providing</p>
        </div>
        <div className='b-container'>
            <Box image={image1} alte='image1'  button='Lab tests for concrete ' caption='We have the knowledge and experience to assist you with concrete testing 
            to assure the quality, durability, and performance of your concrete. Our lab assures the manufacturers that materials used in 
            construction fulfill quality and safety standards by providing a complete study based on the examination of materials used.
            •	Design mix for high performance concrete
            •	Material characterization
            •	Durability test on concrete'/>
            <Box image={image2} alte='image2' button='Geo technical Investigation' caption='We are a pioneering autonomous Geotechnical Investigation
               specialist, offering a broad and varied variety of ground investigation services which range from simple to complex methodologies. Throughout India, 
               we have acquired substantial technical knowledge relating to the geotechnical and geo environmental aspects of land.
               On the basis of the test data, we also supply geotechnical research results, test data, analysis, and design. We can deliver targeted, technical 
               advice and practical solutions if we know our clients demands.
               •	Standard foundation and pile evaluation
               •	Standard penetration test
               •	Cone penetration test
               •	Plate load test
               •	In-situ soil testing
               •	Lab tests on sample
               •	Rock sampling'/>
            <Box image={image3} alte='image3' button='Non-Destructive Testing' caption='In India, we are a prominent provider of Non-Destructive 
            Testing (NDT) Services. We have a long-standing track record and outstanding performance in NDT. Our non-destructive testing (NDT) 
            services provide a thorough examination of your assets through the use of well-designed processes and highly qualified personnel. 
            Because of our extensive experience and understanding in NDT, we are able to identify the most appropriate techniques and procedures 
            for detecting faults and abnormalities in concrete.
            Non-destructive testing (NDT) is a set of inspection techniques used to evaluate the properties and integrity of materials, components,
             or structures without causing any permanent damage to them. NDT methods are essential in various industries, including aerospace, 
             automotive, construction, manufacturing, and more, to ensure the safety, reliability, and quality of products and infrastructure.
             •	Rebound Hammer Test
             •	Ultrasonic pulse velocity Test
             •	Half-cell potential test
             •	Profometer testing
             •	Carbonation Testing
             •	Core extraction for compressive strength test
             •	Concrete core testing'/>
            <Box image={image4} alte='image4' button='Structural & Foundation Design' caption='The science of civil engineering relies heavily on 
            structural and foundation design. We have a skilled staff that can plan, analyze, and engineer structural systems and foundations to 
            withstand a wide range of loads and environmental conditions.
            Our specialist team will assist in the development of a structural design that optimizes material consumption, reduces costs, and 
            assures safety. This typically involves selecting appropriate materials, such as concrete, steel, or wood, as well as deciding the 
            proper size and arrangement of structural components such as beams, columns, and braces.
            •	Foundation design based on soil investigation results
            •	Structural design
            •	MEP drawings'/>
            <Box image={image5} alte='image5' button='Restoration & Rehabilitation of structures' caption='We recognize the importance of repairing
            the structures. The firm provides consulting services such as comprehensive assessment, restoration/rehabilitation procedures, and 
            analysis of predicted structure performance. For failure and faults in concrete, we use a variety of procedures available for repair 
            and rehabilitation of concrete structures. Budgets, timetables, service life, and any other particular structural requirements are all 
            addressed and taken into account.
            •	Physical inspection of the damaged structure
            •	Investigation of original structure drawings
            •	Review of repairs made over the structure
            •	Collection of samples and carrying out tests both in-situ and in lab
            •	Non-destructive testing
            •	Analyze/design for replacements'/>
            <Box image={image6} alte='image6' button='Other Consultancy Services' caption='There are few consultancy services they are Quality assurance,
            Quality control,Water proofing Consultancy,ETC..'/>            
          </div>
    </div>
  );
};

export default Services;
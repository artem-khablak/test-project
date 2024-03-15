import { MediaItem } from "../types";

import photography from './../assets/photography.png';
import photography2 from './../assets/photography-2.png';
import staging from './../assets/staging.png';
import renderings from './../assets/renderings.png';
import tours from './../assets/tours.png';
import floor from './../assets/floor.png';
import video from './../assets/video.png';

export const media: MediaItem[] = [
  { 
    id: 1,
    title: 'Photography',
    detailsList: ['Drone Photography','Interiors', 'Exteriors / Architectural'],
    description: 'Every photograph we produce finds the beauty in your property while serving as a profitable asset.',
    imagesSrc: [photography, photography2],
  },
  {
    id: 2,
    title: 'Virtual Staging',
    description: 'Our staging will help you sell the potential of your space. We can work off of our own photography or photos you provide.',
    imagesSrc: [staging],
  },
  {
    id: 3,
    title: 'Renderings',
    detailsList: ['Interiors','Exteriors'],
    description: 'Renderings are the gold standard in pre-construction marketing.',
    imagesSrc: [renderings],
  },
  {
    id: 4,
    title: 'Interactive Tours',
    detailsList: ['Matterport', 'Video Walkthroughs'],
    description: 'Give your audience the ability to explore your property without requiring in-person travel.',
    imagesSrc: [tours],
  },
  {
    id: 5,
    title: 'Floor Plans',
    detailsList: ['On-site Measure', '2D Floor Plans', '3D Floor Plans'],
    description: 'We produce laser-precise floor plans faster than any other service.',
    imagesSrc: [floor],
  },
  {
    id: 6,
    title: 'Video',
    detailsList: ['Drone Cinematography','Interiors', 'Exteriors / Architectural'],
    description: 'Video content has higher engagement and will help your property stand out online.',
    imagesSrc: [video],
  },
]
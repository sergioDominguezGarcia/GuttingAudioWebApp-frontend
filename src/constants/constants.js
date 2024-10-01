import GTTNEP001 from '../components/EpList/Portadas/GTTNEP001.jpg'
import GTTNEP002 from '../components/EpList/Portadas/GTTNEP002.jpg'
import GTTNEP003 from '../components/EpList/Portadas/GTTNEP003.jpg'
import GTTNEP004 from '../components/EpList/Portadas/GTTNEP004.jpg'



export const eps = [
  {
    id: '1',
    title: 'HIT ME DOWN EP',
    coverUrl: GTTNEP001, // URL de la portada del EP
    tracks: [
      {
        id: '001',
        title: 'Hit Me Down',
        audioUrl:
          'https://firebasestorage.googleapis.com/v0/b/gutting-audio.appspot.com/o/01%20Maniatics%20-%20Hit%20Me%20Down.mp3?alt=media&token=7860d3f1-87dd-47f2-b1f3-ee78e66e35a7', // URL de Google Drive
      },
      {
        id: '002',
        title: 'Brutal Murder',
        audioUrl:
          'https://firebasestorage.googleapis.com/v0/b/gutting-audio.appspot.com/o/02%20Maniatics%20-%20Brutal%20Murder.mp3?alt=media&token=f24af656-29db-44d5-a225-01f37950ecd4',
      },
    ],
  },
  {
    id: '002',
    title: 'RAMPAGE EP',
    coverUrl: GTTNEP002,
    tracks: [
      {
        id: '003',
        title: 'Rampage',
        audioUrl:
          'https://firebasestorage.googleapis.com/v0/b/gutting-audio.appspot.com/o/01.Fearless%20-%20Rampage.mp3?alt=media&token=4077885b-3e11-4811-936d-c6f48f00bcad',
      },
      {
        artist: 'track4',
        title: 'Daybreak',
        audioUrl:
          'https://firebasestorage.googleapis.com/v0/b/gutting-audio.appspot.com/o/02.Fearless%20-%20Daybreak.mp3?alt=media&token=5e4e1514-bf09-4908-ac68-5dd3d791af73',
      },
    ],
  },
  {
    id: '003',
    title: 'ASSAULT EP',
    coverUrl: GTTNEP003,
    tracks: [
      {
        artist: 'track3',
        title: 'Assault',
        audioUrl:
          'https://firebasestorage.googleapis.com/v0/b/gutting-audio.appspot.com/o/Suspect%20-%20Assault.mp3?alt=media&token=fa68bba9-3729-4e78-b5e5-fbe820b934b2',
      },
      {
        artist: 'track4',
        title: 'Gloom',
        audioUrl:
          'https://firebasestorage.googleapis.com/v0/b/gutting-audio.appspot.com/o/Suspect%20-%20Gloom.mp3?alt=media&token=407d3beb-abe0-48e8-994a-208f189cce5e',
      },
    ],
  },
  {
    id: '004',
    title: 'STRONGER THINGS EP',
    coverUrl: GTTNEP004,
    tracks: [
      {
        id: 'track3',
        title: 'Take Yours',
        audioUrl:
          'https://firebasestorage.googleapis.com/v0/b/gutting-audio.appspot.com/o/01%20QKhack%20-%20Take%20Yours.mp3?alt=media&token=33878512-3221-4916-9243-d5e5fd402113',
      },
      {
        id: 'track4',
        title: 'Come Up (ft. Vandermou)',
        audioUrl:
          'https://firebasestorage.googleapis.com/v0/b/gutting-audio.appspot.com/o/02%20QKhack%20-%20Come%20up%20(ft.%20Vandermou).mp3?alt=media&token=1d157092-e2a7-4f17-86f1-d2a3e542be9e',
      },
    ],
  },
]

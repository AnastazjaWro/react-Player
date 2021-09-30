import {v4 as uuidv4} from "uuid";

function chillHop() {
  return [
    {
      name: "flux",
      artist: "Sebastian Kamae, Dayle",
      cover: "https://chillhop.com/wp-content/uploads/2021/03/e2cf41018e0c244f7f683dd6f6313551996a2952-300x300.jpg",
      id: uuidv4(),
      active: true,
      color: ['#E46552', "#F28758"],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=16175',
      mandatory: "Sebastian Kamae, Dayle - Flux https://chll.to/bc72a85f",
    },
    {
      name: "Isla Bella",
      artist: "Kendall Miles",
      cover: "https://chillhop.com/wp-content/uploads/2020/07/7c9bf90a9ccf097b8408eea62ad6226f797a2107-300x300.jpg",
      id: uuidv4(),
      active: false,
      color: ['#472921', "#A98E74"],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=8349',
      mandatory: "Kendall Miles - Isla Bella https://chll.to/8921464c",
    },
    {
      name: "Places",
      artist: "Ruck P",
      cover: "https://chillhop.com/wp-content/uploads/2021/07/034f52eeaeceb144cca67b0930d705d32fc39e37-300x300.jpg",
      id: uuidv4(),
      active: false,
      color: ['#604E76', "#C16E78"],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=20563',
      mandatory: "Ruck P - Places https://chll.to/f6ac2487",
    },
    {
      name: "Vitamin D",
      artist: "fantompower",
      cover: "https://chillhop.com/wp-content/uploads/2021/07/3b73a510169f14c4af83ac4016e809917412702b-300x300.jpg",
      id: uuidv4(),
      active: false,
      color: ['#C19CBF', "#E3EBE0"],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=22790',
      mandatory: "fantompower - Move https://chll.to/45eb81d0",
    },
  ]
}

export default chillHop;
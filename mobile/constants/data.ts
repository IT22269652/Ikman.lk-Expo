import { Product } from "../types/types";

export const products: { [key: string]: Product[] } = {
  vehicles: [
    { id: "1", title: "Toyota Corolla", price: "Rs 5,000,000", description: "2018 model, low mileage.", image: "https://di-uploads-pod25.dealerinspire.com/edmarktoyota/uploads/2024/02/2024-toyota-corolla-banner.jpg" },
    { id: "2", title: "Honda Civic", price: "Rs 4,500,000", description: "Excellent condition.", image: "https://production.autoforce.com/uploads/version/profile_image/10101/model_main_webp_comprar-civic-hibrido_1119a8ae76.png.webp" },
    { id: "3", title: "Suzuki Alto", price: "Rs 2,200,000", description: "Fuel efficient city car.", image: "https://imgd.aeplcdn.com/664x374/cw/ec/39013/Maruti-Suzuki-Alto-Right-Front-Three-Quarter-154833.jpg?wm=0&q=80" },
  ],
  electronics: [
    { id: "1", title: "iPhone 14", price: "Rs 250,000", description: "Brand new, sealed.", image: "https://infinitystore.lk/wp-content/uploads/2025/04/iPhone-14-1.png" },
    { id: "2", title: "Laptop", price: "Rs 150,000", description: "High performance.", image: "https://www.itaf.eu/wp-content/uploads/2021/01/Best-laptops-in-2021-7-things-to-consider-when-buying-a-laptop.jpg" },
    { id: "3", title: "Smart TV", price: "Rs 100,000", description: "4K resolution.", image: "https://m.media-amazon.com/images/I/51lYbJhOmbL._UF1000,1000_QL80_.jpg" },
  ],
  jobs: [
    { id: "1", title: "Software Engineer", price: "Rs 200,000/month", description: "Full-time position.", image: "https://www.theladders.com/wp-content/uploads/coder_190517.jpg" },
    { id: "2", title: "Designer", price: "Rs 150,000/month", description: "Creative role.", image: "https://www.rmcad.edu/wp-content/uploads/2024/04/shutterstock_434383288.jpg" },
  ],
  property: [
    { id: "1", title: "Apartment in Colombo", price: "Rs 20,000,000", description: "2 bedrooms.", image: "https://thumbs.dreamstime.com/b/apartment-building-19532951.jpg" },
    { id: "2", title: "Land in Kandy", price: "Rs 5,000,000", description: "Prime location.", image: "https://img.freepik.com/free-photo/beautiful-landscape-with-clear-sky_23-2149721820.jpg?semt=ais_hybrid&w=740&q=80" },
  ],
  animals: [
    { id: "1", title: "Golden Retriever Puppy", price: "Rs 50,000", description: "Healthy and vaccinated.", image: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*" },
    { id: "2", title: "Persian Cat", price: "Rs 30,000", description: "Pure breed.", image: "https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=vvM97wWz-hMj7DLzfpYRmY2VswTqcFEKkC437hxm3Cg=" },
    { id: "3", title: "Parrot", price: "Rs 10,000", description: "Talkative and friendly.", image: "https://cdn.britannica.com/35/3635-050-96241EC1/Scarlet-macaw-ara-macao.jpg" },
  ],
  sports: [
    { id: "1", title: "Tennis Racket", price: "Rs 5,000", description: "Professional grade.", image: "https://img.freepik.com/free-vector/two-racket-tennis-ball-illustration_24877-60158.jpg" },
    { id: "2", title: "Football", price: "Rs 2,000", description: "Official size.", image: "https://static.vecteezy.com/system/resources/thumbnails/027/314/399/small_2x/soccer-ball-football-balls-isolated-sports-fitness-and-game-symbol-icon-3d-render-illustration-png.png" },
  ],
  educations: [
    { id: "2", title: "English Textbook", price: "Rs 1,000", description: "Latest edition.", image: "https://www.shutterstock.com/image-photo/book-open-pages-close-up-600nw-2562942291.jpg" },
    { id: "3", title: "Online Course Subscription", price: "Rs 10,000/year", description: "Access to all courses.", image: "https://blog.ipleaders.in/wp-content/uploads/2021/05/online-course-blog-header.jpg" },
  ],
  fashion_beauty: [
    { id: "2", title: "Makeup Kit", price: "Rs 4,000", description: "Complete set.", image: "https://media.istockphoto.com/id/517742444/photo/makeup-brushes-workplace-makeup-artist.jpg?s=612x612&w=0&k=20&c=XqHXC63fxIsLJ002GKrALP-EiRixA7xELkPSQn2T-OA=" },
    { id: "3", title: "Perfume", price: "Rs 6,000", description: "Long-lasting fragrance.", image: "https://vitabellaperfumes.com/cdn/shop/files/DSC_8151-2_440b424f-a58f-4469-aeb4-f746649561b9.jpg?v=1719288239" },
  ],
};
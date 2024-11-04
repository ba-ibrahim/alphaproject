// app/(Register)/layout.jsx
import React from 'react';
import Image from "next/image";
import logo from "@/public/assets/Vector.png";
import './containerlayout.css'
export default function Layout({ children }) {
  return (
    <>
     <div className='ContainerLayout'>
      <div className='topContainerLayout'>
     <Image
            src={logo} // Chemin vers ton image
            width={40}
            height={40}
          />


      <p>Alphadocs</p>
      </div>
      <h3 >Rejoignez-nous et trouvez le meilleur traducteur qui soit</h3>
      <p>Découvrez ou rejoignez le meilleur traducteur freelance du monde</p>
     {/* {children}  */}
     </div>
     
    </>
  );
}

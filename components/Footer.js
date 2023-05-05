import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 
    px-32 py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>SOBRE</h5>
            <p>Como funciona</p>
            <p>Artigos</p>
            <p>Bluebnb Plus</p>
            <p>Bluebnb Deluxe</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>COMUNIDADE</h5>
            <p>BlueBnB nas redes</p>
            <p>Apresentação</p>
            <p>Site clone do Airbnb</p>
            <p>Milhares de interações</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>SUPORTE</h5>
            <p>Centro de Ajuda</p>
            <p>Confiança e Segurança</p>
            <p>F.A.Q Garantias</p>
            <p>Fale conosco</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>TERMOS</h5>
            <p>Nossa missão</p>
            <p>Buscas e reservas</p>
            <p>Responsabilidades</p>
            <p>Controle de riscos</p>
        </div>

    </div>
  )
}

export default Footer
'use client';

import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import Tesseract from 'tesseract.js';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const App = () => {
  const webcamRef = useRef(null);
  const [imageData, setImageData] = useState(null);
  const [extractedText, setExtractedText] = useState('');
  const [encender, setEncender] = useState(false);
  const [tipoOpcion, setTipoOpcion] = useState('ambas');
  const [copied, setCopied] = useState(false);

  const capture = () => {
    setEncender(true);
    const image = webcamRef.current.getScreenshot();
    setImageData(image);
  };

  const recognizeText = async () => {
    if (!imageData) return;
    Tesseract.recognize(
      imageData,
      'spa',
      { logger: (m) => console.log(m) }
    ).then(({ data: { text } }) => {
      setExtractedText(text);
    });
  };

  const handleFileChange = (e) => {
    setTipoOpcion("archivo");
    const file = e.target.files[0];
    if (file) {
      setImageData(URL.createObjectURL(file));
    }
  };

  const limpiar = () => {
    setImageData(null);
    setExtractedText('');
    setTipoOpcion('ambas');
    setEncender(false);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(extractedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='min-h-screen bg-gray-100 text-center'>
      <Navbar />
      <h1 className='text-4xl font-bold mb-5 text-black pt-6'>Imagen a texto</h1>
      <p className='text-lg text-black max-w-2xl mx-auto'>
        Mediante la librería de <a href='https://www.npmjs.com/package/tesseract.js/v/4.1.1' className='text-blue-600 underline hover:font-semibold'>Tesseract-js</a>
        &nbsp;se puede obtener el texto de una imagen. Tesseract.js es una biblioteca de JavaScript que reconoce palabras en casi cualquier idioma.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-10 mt-10 px-4">

        {/* WebCam - solo visible en escritorio */}
        <div className="hidden md:block w-full md:w-1/2">
          <h3 className="text-xl font-semibold mb-2 text-black">Uso de WebCam</h3>
          {!encender ? (
            <button
              onClick={() => {
                setEncender(true);
                setTipoOpcion("webcam");
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded mb-2 hover:bg-blue-700"
            >
              Encender cámara
            </button>
          ) : (
            <button
              onClick={capture}
              className="bg-green-600 text-white px-4 py-2 rounded mb-2 hover:bg-green-700"
            >
              Capturar imagen
            </button>
          )}
          {encender && <Webcam ref={webcamRef} className="rounded shadow-md" />}
          {imageData && (
            <img
              src={imageData}
              alt="Captura"
              className="mt-4 max-w-xs mx-auto rounded shadow"
            />
          )}
        </div>

        {/* Archivo - visible en todos los dispositivos */}
        <div className="w-full md:w-1/2">
          <h3 className="text-xl font-semibold mb-2 text-black">Explorar Archivos</h3>
          {!imageData ? (
            <div className="border-2 border-dashed border-gray-300 p-6 rounded text-gray-600">
              <p className="mb-2">No hay imagen seleccionada</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="block mx-auto hover:cursor-pointer text-blue-600 text-sm"
              />
            </div>
          ) : (
            <img
              src={imageData}
              alt="Subida"
              className="max-w-xs mx-auto rounded shadow"
            />
          )}
        </div>
      </div>


      {/* Resultados */}
      <div className='mt-10 px-6 pb-3 '>
        <p className='text-left max-w-2xl mx-auto mb-4 whitespace-pre-wrap bg-white p-4 rounded shadow text-black'>
          {extractedText || 'El texto extraído aparecerá aquí.'}
        </p>

        <div className='flex flex-col items-center gap-3'>
          <button
            onClick={recognizeText}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Extraer texto
          </button>

          <div className="relative w-full max-w-md">
            <input
              value={extractedText}
              readOnly
              placeholder="Texto extraído"
              className="w-full px-4 py-2 border border-gray-300 rounded text-black"
            />
            <button
              type="button"
              onClick={copyToClipboard}
              className="bg-amber-100 w-20 h-1/2 opacity-90 absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-blue-600 hover:underline"
            >
              {copied ? "Copiado" : "Copiar"}
            </button>
          </div>

          <button
            onClick={limpiar}
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">
            Limpiar
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;

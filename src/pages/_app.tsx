import '@/styles/globals.css'
import React, { useState } from 'react';
import type { AppProps } from 'next/app'
import { HydrationProvider, Client } from "react-hydration-provider";

export default function App({ Component, pageProps }: AppProps) {

  return(
    <HydrationProvider>
      <Client>
        <Component {...pageProps} />
      </Client>
    </HydrationProvider>

  ) 
  
}

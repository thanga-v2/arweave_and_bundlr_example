import '@/styles/globals.css'
// importing providers and utils from ethers for wallet
import { providers,utils } from 'ethers';
// importing the web bundlr to start interacting
import { WebBundlr } from '@bundlr-network/client';
// using state and ref, we create a refernce to bundlr
import { useState,useRef } from 'react';

export default function App({ Component, pageProps }) {

      // using state to store bundlr instance
  const[bundlrInstance,setbundlrInstance] = useState();

  // creating initialize for bundlr
  async function initialize(){
    console.log("initialize function to init bundlr");
    // connect the ethereum object / wallet
    await window.ethereum.enable()
    //creating a provider
    const provider = new providers.Web3Provider(window.ethereum);
    console.log("provider status -",provider);
    await provider._ready()
    const bundlr = new WebBundlr("https://node1.bundlr.network","matic",provider);
    console.log("bundlr status",bundlr);
    await bundlr.ready()
    // using bundlr instnace state to store the state
    setbundlrInstance(bundlr);
    console.log("Is the bundlr state has been set ? ////",bundlrInstance);
  }

  // creating a function to fetch balance
  // but we need to reference bundlr before doing so. lets set a state ref
  async function fetchbalance(){

  }
  return (
    <div>
      <button onClick={initialize}>Initialize</button>
      <Component {...pageProps} />
    </div>
  )
}

"use strict";

const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;

let web3Modal
let provider;
let selectedAccount;


function init() {

  console.log("Initializing example");
  console.log("WalletConnectProvider is", WalletConnectProvider);
  console.log("Fortmatic is", Fortmatic);
  console.log("window.web3 is", window.web3, "window.ethereum is", window.ethereum);

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "69b74759029847a1b960566850c58b96"
      }
    },

    fortmatic: {
      package: Fortmatic,
      options: {
        key: "pk_test_F5744EA43D728BB2"
      }
    }
  };

  web3Modal = new Web3Modal({
    cacheProvider: false,
    providerOptions,
    disableInjectedProvider: false,
  });

}

async function onConnect() {

  try {
    provider = await web3Modal.connect();
  } catch (e) {
    return;
  }

  await refreshAccountData();
}

window.addEventListener('load', async () => {
  init();
  document.querySelector("#connect").addEventListener("click", onConnect);
});

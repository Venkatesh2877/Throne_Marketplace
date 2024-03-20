import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { input } from 'aws-amplify';
import { Contracts_Rinkeby } from 'src/app/core/BlockChainInfo';
import { AppService } from 'src/app/core/services/app.service';
import { ContractService } from 'src/app/core/services/contract.service';
import { Web3Service } from 'src/app/core/services/web3.service';
import Swal from 'sweetalert2';

declare var window: any;

const { ethereum } = window;
@Component({
  selector: 'app-ic-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  walletId: string;
  network_name: string;
  amount: number;
  accountNumber: any;
  erc20Owner: string;
  userAddress: any;

  constructor(public router: Router, private web3service: Web3Service, private appService: AppService) {
  }


  ngOnInit() {

    // this.walletId = null
    this.network_name = "Ethereum Rinkeby"
    this.web3service.setNetwork(this.network_name)
    console.log("Contract Network is set to ", this.network_name)

    if(localStorage.getItem('wallet address')!=undefined){
      this.walletId=localStorage.getItem('wallet address');
      this.web3service.intermidateConnect();
      }else
      {
      this.web3service.connectedAccId.subscribe(walletId => this.walletId = walletId)
      this.web3service.connectedAccId.subscribe(walletId => this.accountNumber = walletId)
      }

    // this.web3service.connectedAccId.subscribe(walletId => this.walletId = walletId)
    // this.web3service.connectedAccId.subscribe(walletId => this.accountNumber = walletId)

    const { ethereum } = window;
    if (!ethereum) {
      Swal.fire("Make sure you have metamask", '', 'info');
    }
    ethereum.on('networkChanged', (networkId) => {
      let setNetworkName = "Rinkeby test network";
      if (networkId == 1) {
        setNetworkName = "Ethereum Mainnet";
      } else
        if (networkId == 3) {
          setNetworkName = "Ropsten test network";
        } else
          if (networkId == 42) {
            setNetworkName = "Kovan test network";
          } else
            if (networkId == 4) {
              setNetworkName = "Rinkeby test network";
            } else
              if (networkId == 5) {
                setNetworkName = "Goerli test network";
              } else
                if (networkId == 11155111) {
                  setNetworkName = "Sepolia test network";
                }

      Swal.fire("Network Switched", setNetworkName, 'info')
      console.log("networkId- ", networkId);
      // Time to reload your interface with the new networkId
    })
    ethereum.on('accountsChanged', (accounts) => {
      console.log("neww account - ", accounts)
      // Swal.fire("Account Switched",accounts[0],'info');

      localStorage.setItem('wallet address', accounts[0]);
      this.walletId = accounts[0];
      console.log("this.walletId - ", this.walletId)
      if (this.walletId == undefined) {
        console.log("Disconnected1")
        this.connectWeb3();
      }
      else
        
        Swal.fire("Account Switched", accounts[0], 'info');
      // this.web3service.updateAccountAddress(accounts[0])

      // this.switchAccountAddress(accounts[0]);
      // getAccount();
    })



  }

  nftDirection() {
    this.router.navigate(['/creator/nft-wallet'])
  }

  connectNetwork(name) {
    this.network_name = name;
    if (this.network_name !== localStorage.getItem('networkName')) {
      alert("Your network changed to " + this.network_name)
      localStorage.setItem('networkName', this.network_name);
    }
  }

  redirectTo(path?) {
    if (path) {
      this.router.navigate(['/fan/buytickets'])
    }
    else {
      this.router.navigate(['/creator/collection'])
    }
  }

  buyAreveaToken(getAmount) {
    this.web3service.checkAndInstantiateWeb3().then((isweb3: any) => {
      if (isweb3 === 'connected') {
        this.amount = this.web3service.convertPriceToEther(getAmount)
        let erc20contract = this.web3service.getContract('ERC20');
        console.log('test', erc20contract.methods)
        let marketplacecontract = this.web3service.getContract('MarketPlace');
        marketplacecontract.methods.buyAreveaToken(erc20contract._address, this.accountNumber, this.amount)
          .send({ from: this.accountNumber })
          .once('receipt', (receipt) => {
            console.log("Rceipt of purchace of ThroneToken", receipt);
            alert("Successfully bought ThroneToken")
          })
      }
    })


  }

  sellAreveaToken(getAmount) {
    this.web3service.checkAndInstantiateWeb3().then((isweb3: any) => {
      if (isweb3 === 'connected') {
        this.amount = this.web3service.convertPriceToEther(getAmount)
        let erc20contract = this.web3service.getContract('ERC20');
        console.log('test', erc20contract.methods)
        erc20contract.methods.approve(Contracts_Rinkeby.MARKET_PLACE_ADDRESS, this.amount).send({ from: this.accountNumber })
          .then(response => {
            let marketplacecontract = this.web3service.getContract('MarketPlace');
            console.log("Response from approve erc20 Thronetoken ", response);
            marketplacecontract.methods.Sell_AreveaToken(erc20contract._address, this.accountNumber, this.amount)
              .send({ from: this.accountNumber })
              .once('receipt', (receipt) => {
                console.log("Rceipt of sell of ThroneToken", receipt);
                alert("Successfully sell ThroneToken")
              })
              .catch(err => {
                console.log(err)
                console.log("trnsaction faild")
                alert("trnsaction faild")
              })
          })
      }
    })


  }

  connectWeb3 = () => {
    if (!ethereum) {
      Swal.fire("MetaMask Wallet Not Found!", '', 'error');
    }
    console.log("Before hitting Web3 Service");
    this.web3service.connectAccount().then(response => {
      console.log(response);
      this.appService.checkUserAddress = response;
      this.appService.checkBlockUser().subscribe((data: any) => {
        this.userAddress = data.data[0].block_user;
        console.log('userAddress ->', this.userAddress)
        if (this.userAddress == 0) {
          this.web3service.updateAccountAddress(response);
          this.walletId = response;
          this.web3service.setContract();
          this.router.navigate(['/']);
          alert("Your wallet connected successfully")
          localStorage.setItem('AccountAddress save', this.accountNumber);
        }
        else {
          this.web3service.updateAccountAddress('');
          alert('Your accaunt has been blocked by Arevea')
        }
      })

    }).catch((error: any) => {
      console.error(error);
    });
  }
  signOut() {
    console.log("in signout")
    Swal.fire({
      title: 'Sign Out of Wallet',
      icon: 'info',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        'SignOut',

      cancelButtonText:
        'Cancel',

    }).then((confirm) => {
      if (confirm) {
        this.web3service.updateAccountAddress('');
        // this.walletId = null
        console.log("Signed Out")
      }
    });
  }

  switchAccountAddress() {
    // ethereum.on('accountsChanged', function (accounts) {
    //   console.log("neww account - ",accounts)
    //     Swal.fire("Account Switched",accounts[0],'info');
    //     // this.web3service.updateAccountAddress(accounts[0])
    //     localStorage.setItem('wallet address', accounts[0]);
    //     this.web3service.updateAccountAddress( accounts[0])
    //     // this.switchAccountAddress(accounts[0]);
    //   // getAccount();
    //   })

  }

  switchnetworkmumbai(){
    this.web3service.onChangeNetworkmumbai()
  }

  switchnetworkavax(){
    this.web3service.onChangeNetworkavax()
  }

  switchAccount() {

    this.web3service.switchAccounts().then(walletAddress => {
      console.log("Changed Wallet ADdress ", walletAddress)
      this.web3service.updateAccountAddress(walletAddress)
      if (walletAddress !== localStorage.getItem('wallet address')) {
        alert("Your wallet address changed to " + walletAddress + " successfully")
        localStorage.setItem('wallet address', walletAddress);
      }
    })
  }

  blockTestUser() {
    this.appService.checkBlockUser().subscribe((data: any) => {
      this.userAddress = data.data[0].block_user;
      console.log('userAddress ->', this.userAddress)
    })
  }

}


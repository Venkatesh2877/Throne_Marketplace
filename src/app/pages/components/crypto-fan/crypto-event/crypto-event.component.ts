import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Contracts_Rinkeby } from 'src/app/core/BlockChainInfo';
import { AppService } from 'src/app/core/services/app.service';
import { ContractService } from 'src/app/core/services/contract.service';
import { Web3Service } from 'src/app/core/services/web3.service';
import Web3 from 'web3';
const LAZY_MINT_JSON = require('src/app/Contracts/Rinkeby/LazyMint.json')
const ERC_20_JSON = require('src/app/Contracts/Rinkeby/ERC20.json')
import { ethers } from 'ethers';

@Component({
  selector: 'app-crypto-event',
  templateUrl: './crypto-event.component.html',
  styleUrls: ['./crypto-event.component.scss']
})
export class CryptoEventComponent implements OnInit {
  newApi = [];
  ImageData = 'https://dev1-uploads.arevea.com/organization/1602484109802_Music%20event.jpg';
  pofiledata = 'https://dev1-uploads.arevea.com/organization/1602484109802_Music%20event.jpg';
  id = "1234";
  searchfil: any = '';
  accountNumber: any;
  balance: string;
  marketPlace: any;
  tokenURIsList = [];
  tokenData: Object;
  tokenarray: any;
  tokenarray1: any;
  tokenarray2: any;
  lazymintData: any = [];
  nftPrice: any;
  buyNftData: any;
  nftPricel: any;
  availableCopies: any;
  buyLazynftDate: string;
  collection_id: any;
  batchmintNFT: any;
  batchmintdataofResale: any;

  constructor(private web3service: Web3Service, private router: Router, private route: ActivatedRoute, private appService: AppService, public datepipe: DatePipe) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.collection_id = params['collection_id'];
      localStorage.setItem('collecttion id', this.collection_id)
    })
    this.getNftList();
    console.log("IN Event")
    this.appService.lazymintNftdata().subscribe((data: any) => {
      this.lazymintData = data.data;
    });

    this.appService.batchmint().subscribe((data: any) => {
      this.batchmintNFT = data.data;
    });

    this.appService.buyNftdata().subscribe((data: any) => {
      this.buyNftData = data.data;
    });


    this.web3service.connectedAccId.subscribe(walletId => this.accountNumber = walletId)

    console.log("ACcount Number: ", this.accountNumber)
    if (this.accountNumber === undefined || this.accountNumber == null || this.accountNumber == "") {
      alert("Please connect your wallet")
      return
    } else {

      console.log("Account Connected: ", this.accountNumber)
    }
    let marketplacecontract = this.web3service.getContract('MarketPlace')
    let erc721contract = this.web3service.getContract('ERC721')
    let erc1155contract = this.web3service.getContract('ERC1155')

    this.web3service.checkAndInstantiateWeb3().then((isweb3: any) => {
      if (isweb3 === 'connected') {
        this.appService.dataCreatenft().subscribe((data: any) => {
          this.tokenURIsList = data.data;
        })
      } else {
        alert("Connect to WEB3 through browser extensions")
      }
    })
  }
  getdata(data) {

    console.log("data:", data)
    this.router.navigate(['/lists/bid/' + data.token_id + '/' + data.nft_type], {
      queryParams: {
        unique_id: data.unique_id,
        event: 'crypto'
      }
    })

  }
  getdata1(data) {

    console.log("data:", data)
    this.router.navigate(['/lists/bid/' + data.token_id + '/' + data.nft_type])
  }
  collectionId: any;
  getNftList() {
    this.collectionId = this.route.snapshot.params.id;
    // console.log(id, "getnftlist")
    let url = "nft/getCollectionItems/" + this.collectionId
    this.appService.getRequest(url).subscribe(response => {
      if (response.code == 200) {
        this.newApi = response.data || [];
      }
    });
  }

  getCopies(data) {


    let erc1155contract = this.web3service.getContract('ERC1155')
    let marketplacecontract_1155 = this.web3service.getContract('MarketPlace_1155')
    // erc1155contract.methods.getCreator(data.tokenURI_id || data.token_id).call()
    // .then(response =>{
    //   console.log(response)
    //   let ownerNmae = response;
    erc1155contract.methods.balanceOf(marketplacecontract_1155._address, data.tokenURI_id || data.token_id)
      .call().then(resp => {
        console.log("Response of balanceOf copies ", resp)
        alert('Available Copies are -' + resp)
      })



  }

  onBuyBatch(price, batch_id, name, token_uri, description,) {

    let erc20contract = this.web3service.getContract('ERC20');
    let batchmintmintmarketplace = this.web3service.getContract('BATCHMINT_MarketPlace')
    let batchmintmintcontract = this.web3service.getContract('BATCHMINT')
    this.nftPricel = this.web3service.convertPriceToEther(price)
    erc20contract.methods.approve(Contracts_Rinkeby.BATCH_MINT_MARKETPLACE_ADDRESS, this.nftPricel).send({ from: this.accountNumber })
      .then(response => {
        console.log('approve response', response)
        batchmintmintmarketplace.methods.buyFromFixedSale(Contracts_Rinkeby.BATCH_MINT_ADDRESS, batch_id, this.nftPricel, "0x00").send({ from: this.accountNumber })
          .then(resp => {
            console.log(resp)
            this.buyLazynftDate = this.datepipe.transform((new Date), 'MM/dd/yyyy');
            this.appService.batchmintForbuy(batch_id).subscribe(async (data: any) => {
              this.batchmintdataofResale = await data.data;
              for (var i = 0; i < data.data.length; i++) {
                let item = data.data[i];
                let body = {
                  "token_id": item.token_id,
                  "id": this.appService.collectionID,
                  "account_address": this.accountNumber,
                  "img_hash": item.token_uri,
                  "nft_type": "single",
                  "name": name,
                  "description": description,
                  "copies_number": 1,
                  "price": price,
                  "date": this.buyLazynftDate,
                  "sale_type": "batchmint",
                  "nft_seller_address": batch_id
                };

                this.appService.updateBuyNftData(body).subscribe((data: any) => {
                  console.log(data)
                  alert("Successfully bought the NFT batchmint")
                })
              }
            });
          })
      })
  }

  async onBuyLazymint(v, r, s, token_id, price, token_uri, signature, id, name, description) {

    this.nftPricel = this.web3service.convertPriceToEther(price)
    let erc20contract = this.web3service.getContract('ERC20')
    let lazymintcontract = this.web3service.getContract('LAZYMINT');
    debugger
    let token_ID = token_id - 1

    try {
      // =====================================================================>Erc20 Approve

      console.log("ERC20 abi", ERC_20_JSON);
      console.log("Lazy ABI ", LAZY_MINT_JSON)
      let provider = new ethers.providers.Web3Provider(window.ethereum);
      let signer = provider.getSigner();
      const approveContract = new ethers.Contract(
        Contracts_Rinkeby.ERC_20_ADDRESS,
        ERC_20_JSON,
        signer
      );

      const approveTx = await approveContract.approve(Contracts_Rinkeby.LAZY_MINT_ADDRESS, this.nftPricel)
      await approveTx.wait()
      console.log("Erc20 tx =>>>>>>>>>>>>>>>>>>>>>>>>>>>>", approveTx);



      //   // =>>>>>>>>>>Lazy minting call
      const lazyContract = new ethers.Contract(
        Contracts_Rinkeby.LAZY_MINT_ADDRESS,
        LAZY_MINT_JSON,
        signer
      );

      debugger

      const lazyTx = await lazyContract.redeem(this.accountNumber, v, r, s, this.nftPricel, [token_ID, this.nftPricel, token_uri, '0x' + signature])
      await lazyTx.wait()
      console.log("lazy tx =>>>>>>>>>>>>>>>>>>>>>>>>>>>>", lazyTx);

      // =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>EVents
      lazyContract.on("LazyMint", async (seller, buyer, salePrice) => {
        let info = {
          seller: seller,
          buyer: buyer,
          salePrice: salePrice.toString(),
        };
        console.log("info=>>>>>>>>>>>>>>>>>>", info);
      });
      this.buyLazynftDate = this.datepipe.transform((new Date), 'MM/dd/yyyy');
      let body = {
        "token_id": token_ID,
        "id": this.appService.collectionID,
        "account_address": this.accountNumber,
        "img_hash": token_uri,
        "nft_type": "single",
        "name": name,
        "description": description,
        "copies_number": 0,
        "price": price,
        "date": this.buyLazynftDate,
        "sale_type": "lazymint"
      };

      this.appService.updateBuyNftData(body).subscribe((data: any) => {
        console.log(data)
        alert("Successfully bought the NFT lazymint")
      })
    }
    catch (error) {
      console.log('>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<', error)
    }
  }

  // async onBuyLazymint(v, r, s, token_id, price, token_uri, signature, id, name, description) {
  //     
  //   this.nftPricel = this.web3service.convertPriceToEther(price)
  //   let erc20contract = this.web3service.getContract('ERC20')
  //   let lazymintcontract = this.web3service.getContract('LAZYMINT');
  //   await erc20contract.methods.approve(Contracts_Rinkeby.LAZY_MINT_ADDRESS, this.nftPricel).send({ from: this.accountNumber })
  //     .then(response => {
  //         
  //       console.log("Response from approve erc20 ", response)
  //     })
  //   await lazymintcontract.methods.redeem(this.accountNumber, v, r, s, this.nftPricel, [token_id, this.nftPricel, token_uri, '0x' + signature])
  //     .send({ from: this.accountNumber })
  //     .call().then( response => {
  //       console.log('assssssssssssssssssssssssssssssssssssssssssssssssssssss',response)
  //       console.log('assssssssssssssssssssssssssssssssssssssssssssssssssssss',response.token_id)
  //       alert("hello")
  //     })
  //   // try {
  //   //   lazymintcontract.method.redeem("LazyMint", async (seller, buyer, salePrice) => {
  //   //     let info = {
  //   //       seller: seller,
  //   //       buyer: buyer,
  //   //       salePrice: salePrice.toString(),
  //   //     };
  //   //     console.log(info);
  //   //     console.log('lazymint transaction  = ', Response)
  //   //     alert('lazymint successfull')
  //   //     // this.Web3js = new Web3(this.web3service.getprovider());
  //   //     // let count = this.Web3js.eth.getTransactionCount(this.accountNumber)
  //   //     // console.log('transaction Count = ', count)
  //   //     this.buyLazynftDate = this.datepipe.transform((new Date), 'MM/dd/yyyy');
  //   //     alert("Successfully bought the NFT lazymint")
  //   //     let body = {
  //   //       "token_id": token_id,
  //   //       "id": this.appService.collectionID,
  //   //       "account_address": this.accountNumber,
  //   //       "token_uri": token_uri,
  //   //       "nftaddress": "single",
  //   //       "name": name,
  //   //       "description": description,
  //   //       "copies_number": 0,
  //   //       "price": price,
  //   //       "date": this.buyLazynftDate,
  //   //       "sale_type": "lazymint"
  //   //     };
  //   //       
  //   //     this.appService.updateBuyNftData(body).subscribe((data: any) => {
  //   //       console.log(data)
  //   //     })
  //   //   })
  //   // }
  //   // catch (error) {
  //   //   console.log('>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<', error)
  //   // }

  // }

  Web3js: Web3;

  lastTransaction() {
    this.Web3js = new Web3(this.web3service.getprovider());
    let countTrns = this.Web3js.eth.getTransactionCount(this.accountNumber).then(res => {
      console.log('trnsaction count is - ', countTrns)
    })
  }

}

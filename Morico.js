let myNftS = [];

function mintNFT(name, about, uniqueness) {
  
    let nfTS = {
     name: name,
     about: about,
     uniqueness: uniqueness
    };
  
    myNftS.push(nfTS);
    console.log("Minted: " + name);
}

function listNFTs() {
    console.log("List of NFTs:");
    myNftS.forEach(function(nfTS, i) {
        console.log("NFT " + (i + 1) + ":");
        console.log("Name: " + nfTS.name);
        console.log("About: " + nfTS.about);
        console.log("Uniqueness: " + nfTS.uniqueness);
        console.log("____________________");
    });
}

function getTotalSupply() {
    console.log("Total NFTs minted: " + myNftS.length);
}

mintNFT("Rickrolled Doggo", "An internet Pranker Doggo", "Super Unique");
mintNFT("Tuko gecko", "A nonchalant Gekko gecko", "Very Unique");
mintNFT("Angry Cat", "A newly awake sleeping Cat", "Normal");


listNFTs();
getTotalSupply();

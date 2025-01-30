const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "x-api-key": process.env.NEXT_PUBLIC_BITSCRUNCH_API_KEY,
  },
};

const getNFTCollections = async () => {
  try {
    const res = await fetch(
      "https://api.unleashnfts.com/api/v2/nft/top_deals?sort_by=deal_score&sort_order=desc&offset=0&limit=5",
      options
    );
    return await res.json();
  } catch (error) {
    console.error("Error fetching NFT collections:", error);
    return null;
  }
};

const getAddress = async () => {
  try {
    const res = await fetch("https://bitcrunch-backend.vercel.app/api/data");
    const data = await res.json();
    console.log("Fetched addresses:", data);
    return data.length > 0 ? data[data.length - 1].address : null;
  } catch (error) {
    console.error("Error fetching address:", error);
    return null;
  }
};

const addNFTS = async () => {
  try {
    const res = await fetch(
      "https://api.unleashnfts.com/api/v2/nft/top_deals?sort_by=listing_timestamp&sort_order=desc&offset=0&limit=10",
      options
    );
    return await res.json();
  } catch (error) {
    console.error("Error fetching NFTs:", error);
    return null;
  }
};

const myCollections = async () => {
  try {
    const res = await fetch("https://bitcrunch-backend.vercel.app/api/data");
    return await res.json();
  } catch (error) {
    console.error("Error fetching collections:", error);
    return null;
  }
};

const topdeals = async () => {
  try {
    const res = await fetch(
      "https://api.unleashnfts.com/api/v2/nft/top_deals?sort_by=deal_score&sort_order=desc&offset=0&limit=30",
      options
    );
    const data = await res.json();
    console.log("Top Deals:", data);
    return data;
  } catch (error) {
    console.error("Error fetching top deals:", error);
    return null;
  }
};

const lineGraphaddress = async (topAddress) => {
  try {
    const res = await fetch(
      `https://api.unleashnfts.com/api/v2/nft/transactions?blockchain=ethereum&time_range=24h&contract_address=${topAddress}&offset=0&limit=30`,
      options
    );
    return await res.json();
  } catch (error) {
    console.error("Error fetching line graph data:", error);
    return null;
  }
};

const predictionGraph = async () => {
  try {
    const res = await fetch("https://bitcrunch-backend.vercel.app/api/metadata");
    return await res.json();
  } catch (error) {
    console.error("Error fetching prediction graph:", error);
    return null;
  }
};

export default {
  getNFTCollections,
  getAddress,
  addNFTS,
  myCollections,
  topdeals,
  lineGraphaddress,
  predictionGraph,
};

import { CardanoWalletSelector } from "use-cardano";

export const Navigation = () => {
  return (
    <nav className="flex h-24 items-center justify-between w-full py-2 fixed-nav" style={{ border: '2px solid #ccc', borderRadius: '10px' }}>

  <div className="flex-grow flex justify-center space-x-4"> 
    <a href="home.png" className="menu-item">Home</a>
    <div className="dropdown">
      <a href="Service.html" className="menu-item">Service</a>
      <div className="dropdown-content">
        <a href="#">Tạo hồ sơ</a>
        <a href="#">Tạo NFT</a>
        <a href="#">Update NFT</a>
      </div>
    </div>
    <a href="About.html" className="menu-item">About</a>
  </div>
  
  <div style={{  borderRadius: '5px', padding: '5px 10px' }}>
    <CardanoWalletSelector />
  </div>
</nav>
  );
};

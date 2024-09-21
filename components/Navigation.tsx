import { CardanoWalletSelector } from "use-cardano";

export const Navigation = () => {
  return (
    <nav className="flex h-24 items-center justify-between w-full py-2 fixed-nav">
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

  
      <div>
        <CardanoWalletSelector />
      </div>
    </nav>
  );
};

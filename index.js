let image = document.getElementById('bg-img');
let parent = document.getElementById('parent');
let season = prompt(`Which season do you prefer?
  summer
  winter
  autumn
  spring
  `)?.toLowerCase();

if (season === 'winter') {
    parent.className = "products-grid winter";
    parent.innerHTML = `
        <img src="https://i.pinimg.com/originals/79/75/f4/7975f44ff41b6ced689e00b910d38127.gif" id="bg-img" alt="bg image">
        
        <div class="product-card">
            <div class="image-wrapper">
                <span class="badge">Cold</span>
                <img class="product-image" src="https://thumbs.dreamstime.com/b/winter-snowman-wallpaper-hd-style-multiple-filter-effect-soft-sculptures-sudersan-pattnaik-cute-dreamy-beige-295840710.jpg" alt="Winter Scene">
            </div>
            <div class="content">
                <p class="category">Winter</p>
                <h2 class="title">Quiet Winter Moments</h2>
                
                <div class="rating">
                    <span class="stars">
                        <i class="fa-solid fa-snowflake"></i>
                        <i class="fa-solid fa-snowflake"></i>
                        <i class="fa-solid fa-snowflake"></i>
                        <i class="fa-solid fa-snowflake"></i>
                        <i class="fa-solid fa-snowflake"></i>
                    </span>
                    <span class="reviews-count">(124)</span>
                </div>
                
                <div class="footer">
                    <span class="temp">-4°C</span>
                    <button class="add-to-cart-btn">Embrace Winter</button>
                </div>
            </div>
        </div>`;
} 
else if (season === 'summer') {
    parent.className = "products-grid summer";
    parent.innerHTML = `
        <img src="https://i.pinimg.com/originals/c6/8d/7d/c68d7dc9e85b32773a526b34978786f5.gif" id="bg-img" alt="bg image">
        
        <div class="product-card">
            <div class="image-wrapper">
                <span class="badge">Hot</span>
                <img class="product-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJU-w9kkPhByDtuok5ENC3XbbSsLcu0sDn0itFdNjVTxGbfdcoSHZW-U&s=10" alt="Summer Scene">
            </div>
            <div class="content">
                <p class="category">Summer</p>
                <h2 class="title">Quiet Summer Moments</h2>
                
                <div class="rating">
                    <span class="stars">
                        <i class="fa-solid fa-sun"></i>
                        <i class="fa-solid fa-sun"></i>
                        <i class="fa-solid fa-sun"></i>
                        <i class="fa-solid fa-sun"></i>
                        <i class="fa-solid fa-sun"></i>
                    </span>
                    <span class="reviews-count">(130)</span>
                </div>
                
                <div class="footer">
                    <span class="temp">40°C</span>
                    <button class="add-to-cart-btn">Embrace Summer</button>
                </div>
            </div>
        </div>`;
}
else if (season === 'spring') {
    parent.className = "products-grid spring";
    parent.innerHTML = `
        <img src="https://i.pinimg.com/originals/28/7e/9e/287e9e16443f7e20eb74a71850f6384d.gif" id="bg-img" alt="bg image">
        
        <div class="product-card">
            <div class="image-wrapper">
                <span class="badge">Bloom</span>
                <img class="product-image" src="spring.png" alt="Summer Scene">
            </div>
            <div class="content">
                <p class="category">Spring</p>
                <h2 class="title">Quiet Spring Moments</h2>
                
                <div class="rating">
                    <span class="stars">
                        <i class="fa-solid fa-leaf"></i>
                        <i class="fa-solid fa-leaf"></i>
                        <i class="fa-solid fa-leaf"></i>
                        <i class="fa-solid fa-leaf"></i>
                    </span>
                    <span class="reviews-count">(125)</span>
                </div>
                
                <div class="footer">
                    <span class="temp">20°C</span>
                    <button class="add-to-cart-btn">Embrace Spring</button>
                </div>
            </div>
        </div>`;
}
else if (season === 'autumn') {
    parent.className = "products-grid autumn";
    parent.innerHTML = `
        <img src="https://gifsec.com/wp-content/uploads/2023/01/fall-gif-1.gif" id="bg-img" alt="bg image">
        
        <div class="product-card">
            <div class="image-wrapper">
                <span class="badge">Crisp</span>
                <img class="product-image" src="https://thumbs.dreamstime.com/b/cozy-fall-aesthetic-autumn-vibes-pumpkin-leaves-cartoon-style-cozy-fall-aesthetic-autumn-vibes-pumpkin-leaves-cartoon-style-336150583.jpg" alt="Summer Scene">
            </div>
            <div class="content">
                <p class="category">Autumn</p>
                <h2 class="title">Quiet Autumn Moments</h2>
                
                <div class="rating">
                    <span class="stars">
                        <i class="fa-solid fa-cannabis"></i>
                        <i class="fa-solid fa-cannabis"></i>
                        <i class="fa-solid fa-cannabis"></i>
                    </span>
                    <span class="reviews-count">(112)</span>
                </div>
                
                <div class="footer">
                    <span class="temp">31°C</span>
                    <button class="add-to-cart-btn">Embrace Autumn</button>
                </div>
            </div>
        </div>`;
}
else {
    parent.className = "products-grid not-found";
    parent.innerHTML = `
        <img src="seasonnotfound.png" id="bg-img" alt="bg image">`;
}
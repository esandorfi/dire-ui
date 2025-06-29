<template>
    <div class="formation-card">
      <!-- Header avec titre principal -->
      <div class="header-section">
        <h1 class="main-title">
          <span class="dire">DIRE</span>
          <span class="est">EST</span>
          <span class="un">UN</span>
          <span class="art">ART</span>
        </h1>
        <div class="author-info">
          <p class="author-name">NATHALIE PINOT</p>
          <p class="organization">ORGANISME DE FORMATION</p>
        </div>
      </div>
  
      <!-- Description -->
      <div class="description-section">
        <p class="description-text">
          VOUS PROPOSE DE TRAVAILLER LA PAROLE DANS TOUS SES ÉTATS
          <br>
          AVEC LA CRÉATIVITÉ COMME MOTEUR DE RECHERCHE
        </p>
      </div>
  
      <!-- Section formations -->
      <div class="formations-section">
        <h2 class="formations-title">LES 4 FORMATIONS</h2>
        <div class="contact-info">
          <p class="phone">RDV au <strong>06.63.96.39.10</strong></p>
          <p class="email">np@dire-estunart.com</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DireEstUnArt',
    data() {
      return {
        // Vous pouvez ajouter des données dynamiques ici si nécessaire
      }
    },
    methods: {
      // Méthodes pour interactions (ex: clic sur contact)
      handleContact() {
        window.open('tel:0663963910', '_self');
      },
      handleEmail() {
        window.open('mailto:np@dire-estunart.com', '_self');
      }
    }
  }
  </script>
  
  <style scoped>
  .formation-card {
    max-width: 400px;
    margin: 0 auto;
    background: white;
    border: 3px solid #8B4513;
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 0;
  }
  
  .header-section {
    padding: 30px 20px 20px;
    border-bottom: 1px solid #ccc;
  }
  
  .main-title {
    font-size: 48px;
    font-weight: bold;
    line-height: 0.9;
    margin: 0 0 20px 0;
    letter-spacing: -2px;
  }
  
  .dire, .un, .art {
    color: #2c2c2c;
    display: block;
  }
  
  .est {
    color: #ff6b35;
    font-size: 32px;
    display: inline-block;
    margin: 0 10px;
  }
  
  .author-info {
    margin-top: 20px;
  }
  
  .author-name {
    color: #ff6b35;
    font-weight: bold;
    font-size: 16px;
    margin: 5px 0;
    letter-spacing: 1px;
  }
  
  .organization {
    color: #2c2c2c;
    font-size: 12px;
    font-weight: bold;
    margin: 5px 0;
    letter-spacing: 0.5px;
  }
  
  .description-section {
    padding: 20px;
    border-left: 3px solid #8B4513;
    border-right: 3px solid #8B4513;
    margin: 0 20px;
  }
  
  .description-text {
    color: #ff6b35;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.3;
    margin: 0;
    text-transform: uppercase;
  }
  
  .formations-section {
    background: white;
    border: 3px solid #8B4513;
    margin: 20px;
    padding: 20px;
    border-left: 3px solid #8B4513;
    border-right: 3px solid #8B4513;
  }
  
  .formations-title {
    color: #ff6b35;
    font-size: 36px;
    font-weight: bold;
    margin: 0 0 20px 0;
    letter-spacing: -1px;
  }
  
  .contact-info {
    margin-top: 15px;
  }
  
  .phone, .email {
    color: #2c2c2c;
    font-size: 16px;
    margin: 8px 0;
    font-weight: normal;
  }
  
  .phone strong {
    font-weight: bold;
  }
  
  .email {
    font-size: 14px;
  }
  
  /* Responsive */
  @media (max-width: 480px) {
    .formation-card {
      max-width: 100%;
      margin: 10px;
    }
    
    .main-title {
      font-size: 36px;
    }
    
    .est {
      font-size: 24px;
    }
    
    .formations-title {
      font-size: 28px;
    }
  }
  
  /* Interactions optionnelles */
  .phone:hover, .email:hover {
    cursor: pointer;
    color: #ff6b35;
    transition: color 0.3s ease;
  }
  </style>
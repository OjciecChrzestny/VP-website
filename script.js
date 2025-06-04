// Navbar Hide/Show on Scroll
let lastScrollY = window.scrollY;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    if (window.scrollY > lastScrollY) {
        navbar.style.top = '-80px';
    } else {
        navbar.style.top = '0';
    }
    
    lastScrollY = window.scrollY;
    
    const navList = document.querySelector('#navbar nav ul');
    if (navList && navList.classList.contains('active')) {
        navList.classList.remove('active');
    }
});

// Smooth Scroll to Section
function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
}

// Smooth scrolling for nav links
document.querySelectorAll('nav ul li a').forEach((anchor) => {
  if (anchor.hash !== "") {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});

// Setup Carousels - Modified to remove crypto carousel handling
function setupCarousels() {
  // Carousel functionality removed
}

document.addEventListener('DOMContentLoaded', setupCarousels);
window.addEventListener('resize', setupCarousels);

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('#navbar nav ul');
  
  menuToggle.addEventListener('click', () => {
      navList.classList.toggle('active');
  });
});

// Slider functionality for Autonomous Blockchain-Powered Ad Campaigns Section
document.addEventListener('DOMContentLoaded', () => {
  const sliderNavButtons = document.querySelectorAll('.slider-nav button');
  const slides = document.querySelectorAll('.slider-content .slide');
  const adImage = document.querySelector('.ad-image img.ad-img');

  sliderNavButtons.forEach(button => {
    button.addEventListener('click', () => {
      sliderNavButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const target = button.getAttribute('data-target');
      slides.forEach(slide => {
        slide.classList.toggle('active', slide.getAttribute('data-slide') === target);
      });
      if (target === 'description') {
        adImage.src = 'images/ad-example-desc.jpg';
      } else if (target === 'invideo') {
        adImage.src = 'images/ad-example-invid.jpg';
      }
    });
  });
});

// Slider functionality for Blockchain-Powered Section
document.addEventListener('DOMContentLoaded', () => {
  const slides = [
    {
      title: 'Types of ads - PLaceholder',
      description: 'Description ads...',
      img: 'images/ad-example-desc.jpg'
    },
    {
      title: 'Types of ads',
      description: 'In-video ads...',
      img: 'images/ad-example-invid.jpg'
    }
  ];

  let currentSlide = 0;

  const featureItem = document.querySelector('.blockchain-powered .feature-item');
  const featureTitle = featureItem.querySelector('h3');
  const featureDescription = featureItem.querySelector('p');
  const featureImage = featureItem.querySelector('img.ad-img');

  function updateSlide(index) {
    featureTitle.textContent = slides[index].title;
    featureDescription.textContent = slides[index].description;
    featureImage.src = slides[index].img;
  }

  document.getElementById('prev-slide').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) < 0 ? slides.length - 1 : (currentSlide - 1 + slides.length) % slides.length;
    updateSlide(currentSlide);
  });

  document.getElementById('next-slide').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide(currentSlide);
  });

  updateSlide(currentSlide);
});

// Text Animation
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.changing-text');
  const words = [
    { text: 'USDC', color: '#2775ca' },
    { text: 'USDT', color: '#26a17b' },
    { text: 'ETH', color: '#48cbd9' },
    { text: 'BTC', color: '#F7931A' },
    { text: 'POL', color: '#8247e5' },
    { text: 'VIRAL', color: '#4a9aff' },
    { text: 'ERC-20 tokens', color: '#ff99bb' }
  ];
  let currentIndex = 0;
  
  const span = document.createElement('span');
  span.textContent = words[0].text;
  span.style.setProperty('--text-color', words[0].color);
  span.classList.add('visible');
  container.appendChild(span);
  
  setInterval(() => {
    const oldSpan = container.querySelector('span');
    oldSpan.classList.replace('visible', 'hidden');
    
    currentIndex = (currentIndex + 1) % words.length;
    
    const newSpan = document.createElement('span');
    newSpan.textContent = words[currentIndex].text;
    newSpan.style.setProperty('--text-color', words[currentIndex].color);
    newSpan.classList.add('visible');
    
    container.appendChild(newSpan);
    setTimeout(() => oldSpan.remove(), 500);
  }, 4500);
});

// Helper function to convert hex to rgb
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? 
    `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : 
    '0, 0, 0';
}

// Smooth scroll functionality
document.addEventListener('DOMContentLoaded', () => {
  const smoothScroll = (target) => {
    const element = document.querySelector(target);
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    // Easing function
    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  // Apply smooth scroll to Learn More button
  const learnMoreBtn = document.querySelector('.btn-outline');
  learnMoreBtn.addEventListener('click', (e) => {
    e.preventDefault();
    smoothScroll(e.target.getAttribute('href'));
  });
});

// Enhanced Typing Animation - Updated for inline styling
document.addEventListener('DOMContentLoaded', () => {
  const words = ['Product Placement','Stream Clips', 'Product Promotion', 'Branded Challenges', 'Product Reviews','Branded Trends' , 'Service Tutorials','Branded Description','In-video Overlays', 'Branded Hashtags'];
  const typingText = document.querySelector('.typing-text');
  const cursor = document.querySelector('.typing-cursor');
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 160;

  function createGradientText(text) {
    // Enhanced styling with gradient effects
    return `<span>${text}</span>`;
  }

  function type() {
    const currentWord = words[wordIndex];
    
    // Adjust typing speed for more natural feel
    typingSpeed = isDeleting ? 80 : (Math.random() * 50 + 80);
    
    if (isDeleting) {
      charIndex--;
      const text = currentWord.substring(0, charIndex);
      typingText.innerHTML = createGradientText(text);
    } else {
      charIndex++;
      const text = currentWord.substring(0, charIndex);
      typingText.innerHTML = createGradientText(text);
    }

    // Add pauses at appropriate moments
    if (!isDeleting && charIndex === currentWord.length) {
      typingSpeed = 1500; // Longer pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 500; // Pause before typing next word
    }

    setTimeout(type, typingSpeed);
  }

  // Initialize with empty text
  typingText.textContent = '';
  setTimeout(type, 1000);
});

// Remove any other carousel-related JavaScript functionality
document.addEventListener('DOMContentLoaded', () => {
  // Original carousel animation code removed
});

// Blockchain Oracle Graphic Interactive Connections
document.addEventListener('DOMContentLoaded', () => {
  // Get the connection container
  const connectionContainer = document.getElementById('connectionContainer');
  if (!connectionContainer) return;
  
  // Get all nodes
  const polygonNode = document.querySelector('.node.polygon');
  const aiModelNodes = document.querySelectorAll('.node.ai-model');
  const web2DataNodes = document.querySelectorAll('.node.web2-data');
  const oracleGraphic = document.querySelector('.oracle-graphic');
  
  // Set default state for polygon node - active when no other node is hovered
  if (polygonNode) {
    polygonNode.classList.add('active');
    highlightPolygonConnections();
  }
  
  // Create connections between nodes
  function createConnections() {
    // Clear existing connections
    connectionContainer.innerHTML = '';
    
    // Connect polygon to AI models
    aiModelNodes.forEach(node => {
      createConnection(polygonNode, node, connectionContainer, true);
    });
    
    // Connect AI models to Web2 data nodes
    aiModelNodes.forEach(aiNode => {
      web2DataNodes.forEach(dataNode => {
        // Only connect if they're on the same side (left/right)
        const aiNodeRect = aiNode.getBoundingClientRect();
        const dataNodeRect = dataNode.getBoundingClientRect();
        
        if ((aiNodeRect.left < window.innerWidth / 2 && dataNodeRect.left < window.innerWidth / 2) ||
            (aiNodeRect.left >= window.innerWidth / 2 && dataNodeRect.left >= window.innerWidth / 2)) {
          createConnection(aiNode, dataNode, connectionContainer, false);
        }
      });
    });
  }
  
  // Function to highlight Polygon connections
  function highlightPolygonConnections() {
    // Highlight connected lines from Polygon node
    const nodeClass = polygonNode.className.replace(/\s/g, '.');
    const connectedLines = document.querySelectorAll(`.connection[data-from="${nodeClass}"], .connection[data-to="${nodeClass}"]`);
    
    connectedLines.forEach(line => {
      line.classList.add('highlighted');
      line.style.opacity = '1';
      line.style.height = '3px';
      line.style.filter = 'drop-shadow(0 0 3px rgba(130, 71, 229, 0.8))';
    });
    
    // Show Polygon node label
    const nodeLabel = polygonNode.querySelector('.node-label');
    if (nodeLabel) {
      nodeLabel.style.opacity = '1';
      nodeLabel.style.transform = 'translate(-50%, 20px)'; // Center horizontally, push down
    }
    
    // Highlight Polygon node
    polygonNode.style.transform = 'translate(-50%, -50%) scale(1.1)';
    polygonNode.style.boxShadow = '0 8px 25px rgba(130, 71, 229, 0.4)';
  }
  
  // Function to reset Polygon highlight
  function resetPolygonHighlight() {
    const nodeClass = polygonNode.className.replace(/\s/g, '.');
    const connectedLines = document.querySelectorAll(`.connection[data-from="${nodeClass}"], .connection[data-to="${nodeClass}"]`);
    
    connectedLines.forEach(line => {
      line.classList.remove('highlighted');
      line.style.opacity = '0.6';
      line.style.height = '2px';
      line.style.filter = 'none';
    });
    
    // Hide Polygon node label
    const nodeLabel = polygonNode.querySelector('.node-label');
    if (nodeLabel) {
      nodeLabel.style.opacity = '0';
      nodeLabel.style.transform = 'translate(-50%, 10px)';
    }
    
    // Reset Polygon node
    polygonNode.style.transform = 'translate(-50%, -50%) scale(1)';
    polygonNode.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
  }
  
  // Add interactivity to all nodes
  const allNodes = document.querySelectorAll('.node');
  
  // For non-polygon nodes, deactivate polygon when hovering
  const nonPolygonNodes = document.querySelectorAll('.node:not(.polygon)');
  nonPolygonNodes.forEach(node => {
    node.addEventListener('mouseenter', () => {
      // Remove active state from polygon
      polygonNode.classList.remove('active');
      // Reset polygon highlight
      resetPolygonHighlight();
      
      // Highlight connected lines for this node
      const nodeClass = node.className.replace(/\s/g, '.');
      const connectedLines = document.querySelectorAll(`.connection[data-from="${nodeClass}"], .connection[data-to="${nodeClass}"]`);
      
      connectedLines.forEach(line => {
        line.style.opacity = '1';
        line.style.height = '3px';
        line.style.filter = 'drop-shadow(0 0 3px rgba(74, 154, 255, 0.8))';
      });
      
      // Also highlight connected nodes
      const connectedNodeClasses = [];
      connectedLines.forEach(line => {
        const fromClass = line.getAttribute('data-from');
        const toClass = line.getAttribute('data-to');
        if (fromClass !== nodeClass) connectedNodeClasses.push(fromClass);
        if (toClass !== nodeClass) connectedNodeClasses.push(toClass);
      });
      
      connectedNodeClasses.forEach(className => {
        const selector = '.' + className.replace(/\./g, ' ');
        const connectedNode = document.querySelector(selector);
        if (connectedNode) {
          connectedNode.style.transform = connectedNode.classList.contains('polygon') ? 
            'translate(-50%, -50%) scale(1.05)' : 'scale(1.05)';
          connectedNode.style.boxShadow = '0 8px 25px rgba(74, 154, 255, 0.35)';
        }
      });
    });
    
    node.addEventListener('mouseleave', () => {
      // Check if any other node is being hovered
      const hoveredNode = document.querySelector('.node:not(.polygon):hover');
      
      if (!hoveredNode) {
        // If no other node is hovered, reactivate polygon
        polygonNode.classList.add('active');
        highlightPolygonConnections();
      }
      
      // Return lines to normal
      const nodeClass = node.className.replace(/\s/g, '.');
      const connectedLines = document.querySelectorAll(`.connection[data-from="${nodeClass}"], .connection[data-to="${nodeClass}"]`);
      
      connectedLines.forEach(line => {
        line.style.opacity = '0.6';
        line.style.height = '2px';
        line.style.filter = 'none';
      });
      
      // Return connected nodes to normal
      const connectedNodeClasses = [];
      connectedLines.forEach(line => {
        const fromClass = line.getAttribute('data-from');
        const toClass = line.getAttribute('data-to');
        if (fromClass !== nodeClass) connectedNodeClasses.push(fromClass);
        if (toClass !== nodeClass) connectedNodeClasses.push(toClass);
      });
      
      connectedNodeClasses.forEach(className => {
        const selector = '.' + className.replace(/\./g, ' ');
        const connectedNode = document.querySelector(selector);
        if (connectedNode && !connectedNode.classList.contains('polygon')) {
          connectedNode.style.transform = 'scale(1)';
          connectedNode.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
        }
      });
    });
  });
  
  // For polygon node, always ensure it's active when hovered
  polygonNode.addEventListener('mouseenter', () => {
    polygonNode.classList.add('active');
    highlightPolygonConnections();
  });
  
  // If we move away from the entire graphic, reactivate polygon
  if (oracleGraphic) {
    oracleGraphic.addEventListener('mouseleave', () => {
      polygonNode.classList.add('active');
      highlightPolygonConnections();
    });
  }
  
  // Function to create connections between nodes (keeps existing code)
  function createConnection(fromNode, toNode, container, isPolygonConnection) {
    // Get positions
    const fromRect = fromNode.getBoundingClientRect();
    const toRect = toNode.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    
    // Calculate center points relative to the container
    const fromX = fromRect.left + fromRect.width/2 - containerRect.left;
    const fromY = fromRect.top + fromRect.height/2 - containerRect.top;
    const toX = toRect.left + toRect.width/2 - containerRect.left;
    const toY = toRect.top + toRect.height/2 - containerRect.top;
    
    // Calculate length and angle
    const length = Math.sqrt(Math.pow(toX - fromX, 2) + Math.pow(toY - fromY, 2));
    const angle = Math.atan2(toY - fromY, toX - fromX) * 180 / Math.PI;
    
    // Create connection line
    const connection = document.createElement('div');
    connection.className = `connection ${isPolygonConnection ? 'ai-connection' : ''}`;
    connection.dataset.from = fromNode.className.replace(/\s/g, '.');
    connection.dataset.to = toNode.className.replace(/\s/g, '.');
    
    // Position and rotate the line
    connection.style.width = `${length}px`;
    connection.style.left = `${fromX}px`;
    connection.style.top = `${fromY}px`;
    connection.style.transform = `rotate(${angle}deg)`;
    connection.style.opacity = '0.6';
    
    // Add data packet animation
    const packet = document.createElement('div');
    packet.className = `data-packet ${isPolygonConnection ? 'purple' : ''}`;
    packet.style.left = `${Math.random() * 80}%`;
    connection.appendChild(packet);
    
    // Add a second packet with different timing
    const packet2 = document.createElement('div');
    packet2.className = `data-packet ${isPolygonConnection ? 'purple' : ''}`;
    packet2.style.left = `${Math.random() * 80}%`;
    packet2.style.animationDelay = `${Math.random() * 3}s`;
    connection.appendChild(packet2);
    
    // Add to container
    container.appendChild(connection);
  }
  
  // Create initial connections
  createConnections();
  
  // Recalculate connections on window resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(createConnections, 200);
  });
});

// Animate slogan items when they come into view
document.addEventListener('DOMContentLoaded', () => {
  const sloganItems = document.querySelectorAll('.slogan-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  });
  
  sloganItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(item);
  });
});



// Marketing Platforms Section Animation
document.addEventListener('DOMContentLoaded', () => {
  const marketingSection = document.getElementById('marketing-platforms');
  
  if (marketingSection) {
    // Function to check if an element is in viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    }
    
    // Function to start animations when section comes into view
    function checkScrollPosition() {
      if (isInViewport(marketingSection)) {
        // Trigger animations for contract types
        document.querySelectorAll('.contract-type').forEach((item, index) => {
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
          }, 100 * index);
        });
        
        // Trigger animations for platform icons
        document.querySelectorAll('.platform-icon').forEach((item, index) => {
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 100 * index);
        });
        
        // Start connection animation
        document.querySelector('.connection-animation').style.opacity = '1';
        
        // Remove scroll event once animations are triggered
        window.removeEventListener('scroll', checkScrollPosition);
      }
    }
    
    // Check position on initial load and scroll
    checkScrollPosition();
    window.addEventListener('scroll', checkScrollPosition);
    
    // Add interaction effect to connection nodes
    const connectionNodes = document.querySelectorAll('.connection-node');
    
    connectionNodes.forEach(node => {
      node.addEventListener('mouseenter', () => {
        const dot = node.querySelector('.connection-dot');
        dot.style.transform = 'scale(1.2)';
        dot.style.boxShadow = '0 0 20px rgba(74, 154, 255, 0.5)';
      });
      
      node.addEventListener('mouseleave', () => {
        const dot = node.querySelector('.connection-dot');
        dot.style.transform = 'scale(1)';
        dot.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.3)';
      });
    });
  }
});

// Title animation for Features section
document.addEventListener('DOMContentLoaded', () => {
  const featuresTitle = document.querySelector('.features h1');
  if (featuresTitle) {
    const words = featuresTitle.textContent.split(' ');
    const specialWords = ['Agentic', 'AI', 'owned', 'controlled'];
    
    // Clear the heading and add each word wrapped in spans
    featuresTitle.innerHTML = '';
    
    words.forEach(word => {
      const wordSpan = document.createElement('span');
      wordSpan.className = 'word';
      
      // Add highlight class to special words
      if (specialWords.includes(word)) {
        const highlightSpan = document.createElement('span');
        highlightSpan.className = 'highlight';
        highlightSpan.textContent = word;
        wordSpan.appendChild(highlightSpan);
      } else {
        wordSpan.textContent = word;
      }
      
      featuresTitle.appendChild(wordSpan);
      // Add space after each word
      featuresTitle.appendChild(document.createTextNode(' '));
    });
  }
  
  // Observer to trigger animation when title is in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.word').forEach(word => {
          word.style.animationPlayState = 'running';
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  if (featuresTitle) {
    observer.observe(featuresTitle);
  }
});


// Add token dots to connection lines with variety

document.addEventListener('DOMContentLoaded', function() {
  
  // Keep only the token dot creation code
  const connectionLines = document.querySelectorAll('.node-connection .connection-line');
  
  const tokenTypes = ['token1', 'token2']; // Simplified to just two types
  
  connectionLines.forEach(line => {
    // Create just one token with no delay
    const tokenDot1 = document.createElement('div');
    tokenDot1.className = `token-dot ${tokenTypes[0]}`;
    tokenDot1.style.animationDelay = "0s"; // No delay for first token
    line.appendChild(tokenDot1);
    
    // Add a second token with more delay
    const tokenDot2 = document.createElement('div');
    tokenDot2.className = `token-dot ${tokenTypes[1]}`;
    tokenDot2.style.animationDelay = "8s"; // Set explicit delay
    line.appendChild(tokenDot2);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const connectionLines = document.querySelectorAll('.node-connection .connection-line');
  
  connectionLines.forEach(line => {
    // Add a second white dot for the top line
    const topDot = document.createElement('div');
    topDot.className = 'top-dot';
    line.appendChild(topDot);
    
    // The token dots are already being created in your existing code
  });
});

// Play video when it comes into view
document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('fullscreen-video');
  if (!video) return;
  
  // Create an Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // If the video is intersecting (visible)
      if (entry.isIntersecting) {
        // Play the video
        video.play().catch(e => {
          // Handle any autoplay restrictions
          console.log('Autoplay prevented:', e);
          // Add a play button as fallback
          const playButton = document.createElement('button');
          playButton.className = 'video-play-button';
          playButton.innerHTML = '<svg viewBox="0 0 24 24" width="64" height="64"><path fill="#ffffff" d="M8,5.14V19.14L19,12.14L8,5.14Z"/></svg>';
          
          // Add the button to the overlay
          const overlay = document.querySelector('.video-overlay');
          if (overlay) overlay.appendChild(playButton);
          
          // Set up click event to play video
          playButton.addEventListener('click', () => {
            video.play();
            playButton.style.display = 'none';
          });
        });
      } else {
        // Pause when out of view to save resources
        video.pause();
      }
    });
  }, { threshold: 0.3 }); // When at least 30% of the element is visible
  
  // Start observing the video element
  observer.observe(video);
});

// NFT Tokenization Animation
document.addEventListener('DOMContentLoaded', () => {
  const tokenizationSection = document.getElementById('tokenization-animation');
  if (!tokenizationSection) return;

  const marketingAsset = document.getElementById('marketing-asset');
  const marketingTerms = document.getElementById('marketing-terms');
  const nftResult = document.getElementById('nft-result');
  
  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  // Start animation sequence when scrolled into view
  function checkScrollPosition() {
    if (isInViewport(tokenizationSection)) {
      // Initial state - hidden
      marketingAsset.style.opacity = '0';
      marketingTerms.style.opacity = '0';
      nftResult.style.opacity = '0';
      
      // Animate each element with delays
      setTimeout(() => {
        marketingAsset.style.opacity = '1';
        marketingAsset.style.transform = 'translateY(0)';
      }, 300);
      
      setTimeout(() => {
        marketingTerms.style.opacity = '1';
        marketingTerms.style.transform = 'translateY(0)';
      }, 600);
      
      setTimeout(() => {
        nftResult.style.opacity = '1';
        nftResult.style.transform = 'translateY(0)';
      }, 1200);
      
      // Animate terms items one by one
      const termItems = document.querySelectorAll('.term-item');
      termItems.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateX(0)';
        }, 800 + (index * 150));
      });
      
      // NFT card special animation
      setTimeout(() => {
        const nftCard = document.querySelector('.nft-card');
        if (nftCard) {
          nftCard.style.boxShadow = '0 8px 25px rgba(74, 154, 255, 0.3)';
          nftCard.style.borderColor = 'rgba(74, 154, 255, 0.4)';
        }
      }, 1800);
      
      // Once animation is triggered, remove scroll event
      window.removeEventListener('scroll', checkScrollPosition);
    }
  }
  
  // Set initial styles for animation
  if (marketingAsset && marketingTerms && nftResult) {
    // Set initial styles
    marketingAsset.style.opacity = '0';
    marketingAsset.style.transform = 'translateY(20px)';
    marketingAsset.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    marketingTerms.style.opacity = '0';
    marketingTerms.style.transform = 'translateY(20px)';
    marketingTerms.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    nftResult.style.opacity = '0';
    nftResult.style.transform = 'translateY(20px)';
    nftResult.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    // Set initial styles for term items
    const termItems = document.querySelectorAll('.term-item');
    termItems.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateX(-20px)';
      item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
  }
  
  // Check on initial load and scroll
  checkScrollPosition();
  window.addEventListener('scroll', checkScrollPosition);
  
  // Interactive effects for term items on hover
  const termItems = document.querySelectorAll('.term-item');
  termItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      const icon = item.querySelector('.term-icon');
      if (icon) {
        icon.style.transform = 'scale(1.2)';
      }
    });
    
    item.addEventListener('mouseout', () => {
      const icon = item.querySelector('.term-icon');
      if (icon) {
        icon.style.transform = 'scale(1)';
      }
    });
  });
});

// Beta announcement section functionality
document.addEventListener('DOMContentLoaded', function() {
  // Add hover effects for beta columns
  const betaColumns = document.querySelectorAll('.beta-column');
  betaColumns.forEach(column => {
    column.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });
    column.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Handle beta section button clicks
  const creatorBetaBtn = document.querySelector('.creator-beta-btn');
  const brandBetaBtn = document.querySelector('.brand-beta-btn');

  if (creatorBetaBtn) {
    creatorBetaBtn.addEventListener('click', function(e) {
      e.preventDefault();
      // You could trigger a modal or redirect to a signup page
      console.log('Creator beta sign-up clicked');
      // Example of showing a custom message or triggering a modal
      alert('Creator beta signup process initiated!');
      // window.location.href = '/creator-signup.html'; // Uncomment to redirect
    });
  }

  if (brandBetaBtn) {
    brandBetaBtn.addEventListener('click', function(e) {
      e.preventDefault();
      // You could trigger a modal or redirect to an interest form
      console.log('Brand beta interest registration clicked');
      // Example of showing a custom message or triggering a modal
      alert('Brand interest registration received!');
      // window.location.href = '/brand-preregister.html'; // Uncomment to redirect
    });
  }

  // Animation for beta nodes
  const betaNodes = document.querySelectorAll('.beta-node');
  let delay = 0;
  betaNodes.forEach(node => {
    node.style.animationDelay = `${delay}s`;
    delay += 0.5;
  });
  
  // Handle exploration boxes interactions
  const explorationBoxes = document.querySelectorAll('.exploration-box');
  explorationBoxes.forEach(box => {
    // Add subtle animation effect when boxes come into view
    if (isInViewport(box)) {
      setTimeout(() => {
        box.style.opacity = '1';
        box.style.transform = 'translateY(0)';
      }, 300);
    }
    
    // Handle explore link clicks
    const exploreLink = box.querySelector('.explore-link');
    if (exploreLink) {
      exploreLink.addEventListener('click', function(e) {
        e.preventDefault();
        const title = box.querySelector('h4').textContent;
        console.log(`Exploration link clicked: ${title}`);
        // Example of showing different messages based on which box was clicked
        if (title.includes('Internal Operations')) {
          alert('Learn more about VIRAL token operations and ecosystem mechanics.');
        } else if (title.includes('Governance')) {
          alert('Discover VIRAL governance structure and tokenomics details.');
        }
      });
    }
  });
});

// Payment Terms Section Animation
document.addEventListener('DOMContentLoaded', function() {
  const paymentSection = document.getElementById('payment-terms');
  if (!paymentSection) return;
  
  const paymentOptions = document.querySelectorAll('.payment-option');
  const contractFeeInfo = document.querySelector('.contract-fee-info');
  
  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }
  
  // Function to animate payment options when scrolled into view
  function animatePaymentOptions() {
    if (isInViewport(paymentSection)) {
      paymentOptions.forEach((option, index) => {
        option.style.animationPlayState = 'running';
      });
      
      // Animate contract fee info section
      if (contractFeeInfo) {
        contractFeeInfo.style.animationPlayState = 'running';
      }
      
      // Remove scroll listener once animation is triggered
      window.removeEventListener('scroll', animatePaymentOptions);
    }
  }
  
  // Set initial animation state to paused
  paymentOptions.forEach(option => {
    option.style.animationPlayState = 'paused';
  });
  
  // Set initial animation state for contract fee info
  if (contractFeeInfo) {
    contractFeeInfo.style.animationPlayState = 'paused';
  }
  
  // Check on page load and when scrolling
  animatePaymentOptions();
  window.addEventListener('scroll', animatePaymentOptions);
  
  // Add hover effect for payment options
  paymentOptions.forEach(option => {
    option.addEventListener('mouseenter', function() {
      const icon = this.querySelector('.option-icon');
      if (icon) {
        icon.style.transform = 'scale(1.1)';
      }
    });
    
    option.addEventListener('mouseleave', function() {
      const icon = this.querySelector('.option-icon');
      if (icon) {
        icon.style.transform = 'scale(1)';
      }
    });
  });
  
  // Add click handler for Learn More button
  if (contractFeeInfo) {
    const learnMoreBtn = contractFeeInfo.querySelector('.learn-more-btn');
    if (learnMoreBtn) {
      learnMoreBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // You could redirect to a details page or show a modal with more information
        console.log('Contract fee learn more clicked');
        alert('Learn more about how our 5% fee system works to create a sustainable ecosystem.');
        // Alternative: window.location.href = '/tokenomics.html';
      });
    }
  }
});

// Roadmap Animation
function initRoadmap() {
  const roadmapItems = document.querySelectorAll('.roadmap-item');
  
  // Initially set the first two items as active (completed/in progress)
  roadmapItems[0].classList.add('active');
  roadmapItems[1].classList.add('active');
  
  // Function to check if an element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  }
  
  // Function to handle animation when scrolling
  function animateRoadmapOnScroll() {
    roadmapItems.forEach(item => {
      if (isInViewport(item)) {
        item.classList.add('animate');
      }
    });
  }
  
  // Initial check on page load
  animateRoadmapOnScroll();
  
  // Check on scroll
  window.addEventListener('scroll', animateRoadmapOnScroll);
}

// Initialize all functions when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Call existing initialization functions
  // ... 
  
  // Initialize roadmap
  initRoadmap();
});

// Token Marketing Metrics Animation
document.addEventListener('DOMContentLoaded', () => {
  // Find all metrics that need animation
  const metricValues = document.querySelectorAll('.metric-value');
  
  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= window.innerHeight &&
      rect.bottom >= 0
    );
  }
  
  // Function to animate a metric from 0 to target
  function animateMetric(element, targetValue) {
    let current = 0;
    const duration = 6000; // Total animation duration in ms
    const interval = 60; // Update interval in ms
    const steps = duration / interval;
    const increment = targetValue / steps;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        element.textContent = `${targetValue}K+`;
        clearInterval(timer);
      } else {
        element.textContent = `${Math.floor(current)}K+`;
      }
    }, interval);
  }
  
  // Setup scroll handler to check when metrics come into view
  function checkMetricsVisibility() {
    const metricsSection = document.querySelector('.metrics-display');
    
    if (metricsSection && isInViewport(metricsSection)) {
      // Find the specific 10K+ metric
      metricValues.forEach(metric => {
        if (metric.getAttribute('data-animate') === 'true') {
          const targetValue = parseInt(metric.getAttribute('data-target'));
          if (!isNaN(targetValue)) {
            // Start animation
            animateMetric(metric, targetValue);
            // Remove data-animate to prevent re-animation
            metric.removeAttribute('data-animate');
          }
        }
      });
      
      // Remove scroll listener once animation is triggered
      window.removeEventListener('scroll', checkMetricsVisibility);
    }
  }
  
  // Add scroll listener
  window.addEventListener('scroll', checkMetricsVisibility);
  
  // Check on initial load (in case metrics are already visible)
  setTimeout(checkMetricsVisibility, 500);
});

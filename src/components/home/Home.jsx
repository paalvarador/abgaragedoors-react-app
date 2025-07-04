import { useEffect, useRef } from "react";
import "./home.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

const Home = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        // Configurar tamaño del canvas
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Array para almacenar las partículas
        const particles = [];
        const rockets = [];

        // Clase para cohetes
        class Rocket {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height;
                this.targetY = Math.random() * (canvas.height * 0.3) + 100;
                this.speed = Math.random() * 3 + 2;
                this.trail = [];
                this.exploded = false;
                this.hue = Math.random() * 360;
            }

            update() {
                if (!this.exploded) {
                    this.y -= this.speed;
                    
                    // Crear rastro más fino
                    this.trail.push({ x: this.x, y: this.y, alpha: 1 });
                    if (this.trail.length > 15) { // Rastro más largo para efecto más suave
                        this.trail.shift();
                    }

                    // Explotar cuando llegue al objetivo
                    if (this.y <= this.targetY) {
                        this.explode();
                        this.exploded = true;
                    }
                }

                // Actualizar rastro con desvanecimiento más gradual
                this.trail.forEach((point, index) => {
                    point.alpha -= 0.06; // Desvanecimiento más gradual
                });
                this.trail = this.trail.filter(point => point.alpha > 0);
            }

            draw() {
                if (!this.exploded) {
                    // Dibujar rastro más fino
                    this.trail.forEach((point, index) => {
                        ctx.save();
                        ctx.globalAlpha = point.alpha;
                        ctx.fillStyle = `hsl(${this.hue}, 100%, 70%)`;
                        ctx.beginPath();
                        // Tamaño más pequeño para rastro más fino
                        const size = Math.max(0.5, 1.5 - (index * 0.1));
                        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
                        ctx.fill();
                        ctx.restore();
                    });

                    // Dibujar cohete
                    ctx.fillStyle = `hsl(${this.hue}, 100%, 70%)`;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2); // Cohete más pequeño
                    ctx.fill();
                }
            }

            explode() {
                const particleCount = Math.random() * 30 + 20;
                for (let i = 0; i < particleCount; i++) {
                    particles.push(new Particle(this.x, this.y, this.hue));
                }
            }
        }

        // Clase para partículas de explosión
        class Particle {
            constructor(x, y, hue) {
                this.x = x;
                this.y = y;
                this.hue = hue + Math.random() * 60 - 30; // Variación de color
                this.velocity = {
                    x: (Math.random() - 0.5) * 12,
                    y: (Math.random() - 0.5) * 12
                };
                this.gravity = 0.05;
                this.friction = 0.98;
                this.life = 1;
                this.decay = Math.random() * 0.02 + 0.01;
                this.size = Math.random() * 3 + 1;
            }

            update() {
                this.velocity.x *= this.friction;
                this.velocity.y *= this.friction;
                this.velocity.y += this.gravity;
                
                this.x += this.velocity.x;
                this.y += this.velocity.y;
                
                this.life -= this.decay;
                this.size *= 0.99;
            }

            draw() {
                ctx.save();
                ctx.globalAlpha = this.life;
                ctx.fillStyle = `hsl(${this.hue}, 100%, 70%)`;
                ctx.shadowBlur = 15;
                ctx.shadowColor = `hsl(${this.hue}, 100%, 70%)`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        // Función para dibujar la leyenda centrada
        const drawCenteredLegend = () => {
            ctx.save();
            
            // Configurar fuente y estilo
            ctx.font = 'bold 28px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            
            // Posición centrada
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            
            // Efecto de sombra
            ctx.shadowBlur = 20;
            ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
            
            // Texto con gradiente patriótico
            const gradient = ctx.createLinearGradient(centerX - 200, centerY, centerX + 200, centerY);
            gradient.addColorStop(0, '#FF0000');    // Rojo
            gradient.addColorStop(0.5, '#FFFFFF');  // Blanco
            gradient.addColorStop(1, '#0000FF');    // Azul
            
            ctx.fillStyle = gradient;
            ctx.fillText('HAPPY INDEPENDENCE DAY', centerX, centerY + 300);
            
            // Borde del texto
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.strokeText('HAPPY INDEPENDENCE DAY', centerX, centerY + 300);
            
            ctx.restore();
        };

        // Función de animación
        const animate = () => {
            // Limpiar canvas completamente para mantener transparencia
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Dibujar la leyenda centrada
            drawCenteredLegend();

            // Crear nuevos cohetes aleatoriamente
            if (Math.random() < 0.02) {
                rockets.push(new Rocket());
            }

            // Actualizar y dibujar cohetes
            for (let i = rockets.length - 1; i >= 0; i--) {
                rockets[i].update();
                rockets[i].draw();
                
                if (rockets[i].exploded && rockets[i].trail.length === 0) {
                    rockets.splice(i, 1);
                }
            }

            // Actualizar y dibujar partículas
            for (let i = particles.length - 1; i >= 0; i--) {
                particles[i].update();
                particles[i].draw();
                
                if (particles[i].life <= 0) {
                    particles.splice(i, 1);
                }
            }

            requestAnimationFrame(animate);
        };

        // Iniciar animación
        animate();

        // Crear algunos fuegos artificiales iniciales
        setTimeout(() => {
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    rockets.push(new Rocket());
                }, i * 500);
            }
        }, 1000);

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <section className="home_section" id="home">
            <canvas 
                ref={canvasRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                    zIndex: 10
                }}
            />
            <div className="home__content" style={{ position: 'relative', zIndex: 5 }}>
                <div className="home_card">
                    <div>
                        <span className="home_card-title">Your Security</span>
                    </div>
                    <div>
                        <span className="home_card-subtitle">Our Mission.</span>
                    </div>
                    <div>
                        <span className="home_card-description">
                            At AB Garage Doors, we provide security high-quality garage door services to protect your home or business-with professional care you can count on.
                        </span> 
                    </div>
                </div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={require('../../assets/sliders/slide1.jpg')} alt="slide1" /></SwiperSlide>
                    <SwiperSlide><img src={require('../../assets/sliders/slide6.jpg')} alt="slide6" /></SwiperSlide>
                    <SwiperSlide><img src={require('../../assets/sliders/slide7.jpg')} alt="slide7" /></SwiperSlide>
                    <SwiperSlide><img src={require('../../assets/sliders/slide8.jpg')} alt="slide8" /></SwiperSlide>
                    <SwiperSlide><img src={require('../../assets/sliders/slide9.jpg')} alt="slide9" /></SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Home;
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

const $ = id => document.getElementById(id);
const screens = ['homeScreen','setupScreen','gameScreen'];
const subjects = {
 pai:{name:'Pendidikan Agama Islam',questions:[
 ['Sebelum makan, sebaiknya kita…',['Berdoa','Berlari','Berteriak','Tidur'],0],
 ['Kitab suci umat Islam adalah…',['Weda','Al-Qur’an','Tripitaka','Injil'],1],
 ['Salat wajib dalam sehari semalam berjumlah…',['Tiga','Empat','Lima','Enam'],2],
 ['Sikap kepada orang tua yang baik adalah…',['Membentak','Menghormati','Mengabaikan','Mengejek'],1],
 ['Ucapan salam umat Islam adalah…',['Selamat tidur','Assalamu’alaikum','Sampai jumpa','Terima kasih'],1],
 ['Saat teman kesulitan, kita sebaiknya…',['Membantu','Menertawakan','Pergi','Menyalahkan'],0],
 ['Puasa Ramadan mengajarkan kita untuk…',['Boros','Sabar','Malas','Marah'],1],
 ['Tempat ibadah umat Islam disebut…',['Gereja','Pura','Masjid','Vihara'],2],
 ['Kebersihan adalah bagian dari…',['Keimanan','Permainan','Perlombaan','Hukuman'],0],
 ['Sifat berkata sesuai kenyataan disebut…',['Dengki','Jujur','Sombong','Curang'],1]]},
 mat:{name:'Matematika',questions:[
 ['7 + 5 = …',['10','11','12','13'],2],['15 − 8 = …',['6','7','8','9'],1],['4 × 3 = …',['7','12','14','16'],1],['20 ÷ 5 = …',['2','3','4','5'],2],['Bilangan setelah 199 adalah…',['198','200','201','190'],1],['Setengah dari 18 adalah…',['8','9','10','12'],1],['Bangun dengan 3 sisi disebut…',['Persegi','Lingkaran','Segitiga','Persegi panjang'],2],['Satu jam sama dengan… menit',['30','45','60','100'],2],['Keliling persegi sisi 4 cm adalah…',['8 cm','12 cm','16 cm','20 cm'],2],['Pecahan yang senilai dengan 1/2 adalah…',['1/3','2/4','3/5','2/3'],1]]},
 indo:{name:'Bahasa Indonesia',questions:[
 ['Lawan kata “besar” adalah…',['Tinggi','Kecil','Lebar','Panjang'],1],['Kalimat tanya diakhiri tanda…',['Titik','Koma','Tanya (?)','Seru'],2],['Kata baku yang benar adalah…',['Apotik','Apotek','Apotick','Apoték'],1],['Sinonim “gembira” adalah…',['Sedih','Marah','Senang','Takut'],2],['Kata kerja pada “Rani membaca buku” adalah…',['Rani','Membaca','Buku','Pada'],1],['Huruf pertama nama orang ditulis…',['Kecil','Kapital','Miring','Tebal'],1],['Cerita yang tokohnya hewan disebut…',['Fabel','Puisi','Pantun','Berita'],0],['“Tolong tutup pintu!” termasuk kalimat…',['Perintah','Tanya','Berita','Seru biasa'],0],['Kata “bermain” memiliki kata dasar…',['Main','Bermain','Ber','Mem'],0],['Informasi utama dalam paragraf disebut…',['Ide pokok','Judul buku','Tanda baca','Sampul'],0]]},
 pancasila:{name:'Pendidikan Pancasila',questions:[
 ['Lambang negara Indonesia adalah…',['Garuda Pancasila','Harimau','Merpati','Komodo'],0],['Sila pertama Pancasila berbunyi…',['Persatuan Indonesia','Ketuhanan Yang Maha Esa','Keadilan sosial','Kemanusiaan yang adil'],1],['Saat musyawarah kita harus…',['Memaksakan kehendak','Mendengarkan pendapat','Bertengkar','Pergi'],1],['Bendera Indonesia berwarna…',['Biru putih','Merah putih','Hijau kuning','Merah biru'],1],['Contoh gotong royong adalah…',['Membersihkan kelas bersama','Mengejek teman','Membuang sampah','Bermain sendiri'],0],['Aturan dibuat agar hidup menjadi…',['Kacau','Tertib','Sulit','Ramai saja'],1],['Menghargai teman berbeda agama merupakan sikap…',['Toleransi','Iri hati','Egois','Curang'],0],['Sila ketiga mengajarkan kita menjaga…',['Persatuan','Persaingan','Perpecahan','Kekayaan'],0],['Jika berbuat salah, kita sebaiknya…',['Menyalahkan teman','Meminta maaf','Kabur','Diam selamanya'],1],['Hak harus diimbangi dengan…',['Hadiah','Kewajiban','Permainan','Keinginan'],1]]},
 ipas:{name:'IPAS',questions:[
 ['Tumbuhan membuat makanan terutama di bagian…',['Akar','Daun','Bunga','Buah'],1],['Sumber energi utama bagi Bumi adalah…',['Bulan','Matahari','Angin malam','Batu'],1],['Hewan pemakan tumbuhan disebut…',['Karnivor','Herbivor','Omnivor','Predator'],1],['Air yang dipanaskan lama-lama akan…',['Membeku','Menguap','Menjadi batu','Hilang selamanya'],1],['Organ untuk bernapas pada manusia adalah…',['Paru-paru','Lambung','Tulang','Kulit saja'],0],['Arah terbit Matahari adalah…',['Barat','Utara','Timur','Selatan'],2],['Sampah daun kering termasuk sampah…',['Organik','Logam','Kaca','Elektronik'],0],['Gaya yang membuat benda jatuh ke bawah adalah…',['Magnet','Gravitasi','Gesek saja','Listrik'],1],['Bagian tumbuhan yang menyerap air adalah…',['Bunga','Akar','Buah','Daun'],1],['Contoh perubahan wujud mencair adalah…',['Air jadi es','Es jadi air','Air jadi uap','Uap jadi air'],1]]},
 jawa:{name:'Bahasa Jawa',questions:[
 ['Tembung “matur nuwun” tegese…',['Permisi','Terima kasih','Selamat pagi','Maaf'],1],['“Sugeng enjing” digunakake nalika…',['Esuk','Bengi','Tengah wengi','Sore banget'],0],['Basa krama kanggo “aku” yaiku…',['Kowe','Kula','Dheweke','Kita kabeh'],1],['“Monggo” tegese…',['Silakan','Tidak','Pergi','Cepat'],0],['Tembung kosok balen saka “gedhe” yaiku…',['Dawa','Cilik','Dhuwur','Akeh'],1],['“Bapak tindak kantor” nggunakake basa…',['Ngoko kasar','Krama alus','Bahasa Inggris','Bahasa gaul'],1],['Jeneng dina sawise Senin yaiku…',['Minggu','Selasa','Jumat','Sabtu'],1],['“Piye kabare?” tegese…',['Siapa namamu?','Apa kabar?','Mau ke mana?','Terima kasih'],1],['Tembung “banyu” ing basa Indonesia yaiku…',['Api','Air','Tanah','Angin'],1],['Yen ketemu guru, kita kudu…',['Ngguyu banter','Ngurmati','Mlayu','Ngganggu'],1]]},
 inggris:{name:'Bahasa Inggris',questions:[
 ['“Cat” artinya…',['Anjing','Kucing','Burung','Ikan'],1],['Good morning diucapkan pada…',['Pagi','Malam','Tengah malam','Sore larut'],0],['Warna “green” adalah…',['Merah','Hijau','Biru','Putih'],1],['Angka “eight” berarti…',['Enam','Tujuh','Delapan','Sembilan'],2],['“Thank you” berarti…',['Maaf','Tolong','Terima kasih','Sampai jumpa'],2],['Bentuk jamak dari “book” adalah…',['Bookes','Books','Bookies','Book'],1],['“I am happy” berarti…',['Saya lapar','Saya senang','Saya sedih','Saya tidur'],1],['Lawan kata “hot” adalah…',['Warm','Cold','Tall','Fast'],1],['“Apple” adalah nama…',['Buah','Hewan','Warna','Kendaraan'],0],['“How are you?” menanyakan…',['Nama','Kabar','Umur saja','Alamat'],1]]},
 pjok:{name:'PJOK',questions:[
 ['Sebelum olahraga kita melakukan…',['Pemanasan','Langsung tidur','Makan banyak','Duduk diam'],0],['Agar tubuh sehat, kita perlu…',['Bergerak dan berolahraga','Begadang','Jarang minum','Malas bergerak'],0],['Saat haus setelah olahraga, sebaiknya minum…',['Air putih','Minyak','Sirup sangat banyak','Air sabun'],0],['Permainan sepak bola menggunakan…',['Tangan saja','Kaki untuk menendang bola','Raket','Tongkat golf'],1],['Mencuci tangan membantu mencegah…',['Kebersihan','Penyakit','Olahraga','Tidur'],1],['Gerak berpindah tempat disebut gerak…',['Lokomotor','Diam','Nonlokomotor saja','Melingkar saja'],0],['Saat bermain, kita harus menaati…',['Aturan','Keinginan sendiri','Teman paling kuat','Tidak ada aturan'],0],['Istirahat cukup membantu tubuh…',['Pulih','Lelah terus','Sakit','Haus'],0],['Contoh olahraga untuk melatih daya tahan adalah…',['Jalan cepat','Duduk','Membaca','Tidur'],0],['Ketika teman jatuh saat bermain, kita…',['Menolong dan memberi tahu guru','Menertawakan','Meninggalkan','Mendorong lagi'],0]]},
 coding:{name:'Koding',questions:[
 ['Urutan langkah untuk menyelesaikan tugas disebut…',['Algoritma','Gambar','Warna','Suara'],0],['Untuk memberi perintah pada karakter, kita menggunakan…',['Instruksi','Tebakan','Hiasan','Makanan'],0],['Jika ingin mengulang langkah beberapa kali, gunakan…',['Perulangan','Penghapus','Judul','Warna'],0],['Memecah masalah besar menjadi bagian kecil disebut…',['Dekomposisi','Duplikasi','Dekorasi','Animasi'],0],['Perintah “jika… maka…” disebut…',['Percabangan','Perulangan selalu','Gambar','Suara'],0],['Informasi yang dimasukkan ke program disebut…',['Input','Output','Error','Warna'],0],['Hasil yang dikeluarkan program disebut…',['Input','Output','Papan','Kode rahasia'],1],['Bug dalam program berarti…',['Kesalahan','Hadiah','Karakter','Kecepatan'],0],['Urutan instruksi yang benar harus…',['Jelas dan logis','Acak selalu','Dirahasiakan','Tidak lengkap'],0],['Kata sandi yang baik sebaiknya…',['Dibagikan ke semua orang','Dijaga rahasia','Ditulis di tempat umum','Selalu “123”'],1]]},
 seni:{name:'Seni Rupa',questions:[
 ['Warna primer yang umum dipelajari adalah…',['Merah, kuning, biru','Hijau, jingga, ungu','Hitam, putih, abu','Cokelat, merah muda, emas'],0],['Alat untuk mewarnai gambar adalah…',['Krayon','Sendok','Penggaris saja','Piring'],0],['Garis yang berbelok-belok disebut garis…',['Lurus','Zigzag','Datar','Putus saja'],1],['Karya dari kertas yang dilipat disebut…',['Origami','Kolase saja','Patung batu','Lukisan air'],0],['Warna merah dicampur kuning menghasilkan…',['Hijau','Jingga','Ungu','Biru'],1],['Karya menempel potongan bahan pada bidang disebut…',['Kolase','Senam','Drama','Musik'],0],['Bentuk bola termasuk bentuk…',['Datar','Ruang','Garis','Titik'],1],['Saat membuat karya seni, kita perlu…',['Kreatif dan hati-hati','Merusak alat','Meniru tanpa berpikir','Membuang bahan'],0],['Alat untuk membuat garis lurus adalah…',['Penggaris','Kuas besar','Kain','Gelas'],0],['Susunan unsur rupa agar terlihat seimbang disebut…',['Komposisi','Cuaca','Irama lagu','Gerak'],0]]}
};

let renderer, scene, camera, clock, hero, heroMat, enemies=[], bolts=[], particles=[], trees=[], animationId;
let running=false, paused=false, soundOn=true, lives=3, score=0, kills=0, questionIndex=0, currentQuestions=[], answered=false;
let difficulty='mudah', mode='solo', grade=1, subject='mat', lastShot=0, invulnerable=0, heroTargetX=0, heroTargetY=0, gameElapsed=0, enemyTimer=0;
let audioCtx=null, pointerDown=false, pointerStart=null;
const world=$('world');

function showScreen(id){screens.forEach(s=>$(s).classList.toggle('hidden',s!==id));}
function sound(type='shoot'){
 if(!soundOn)return;
 try{audioCtx=audioCtx||new (window.AudioContext||window.webkitAudioContext)(); if(audioCtx.state==='suspended')audioCtx.resume();
  const now=audioCtx.currentTime, osc=audioCtx.createOscillator(), gain=audioCtx.createGain();osc.connect(gain);gain.connect(audioCtx.destination);
  const cfg={shoot:[680,1150,.12,'sawtooth'],hit:[160,65,.22,'square'],jump:[260,720,.18,'sine'],spark:[900,1450,.1,'triangle'],win:[440,880,.5,'sine'],wrong:[250,180,.25,'triangle'] }[type]||[400,600,.15,'sine'];
  osc.type=cfg[3];osc.frequency.setValueAtTime(cfg[0],now);osc.frequency.exponentialRampToValueAtTime(Math.max(40,cfg[1]),now+cfg[2]);gain.gain.setValueAtTime(.0001,now);gain.gain.exponentialRampToValueAtTime(.16,now+.015);gain.gain.exponentialRampToValueAtTime(.0001,now+cfg[2]);osc.start(now);osc.stop(now+cfg[2]+.02);
 }catch(e){}
}
function shuffled(a){return [...a].sort(()=>Math.random()-.5)}
function scaledQuestions(){
 const src=subjects[subject].questions;
 let qs=shuffled(src).slice(0,10);
 if(subject==='mat'){
   qs=qs.map(q=>{
    let [text,opts,correct]=q;
    if(grade>=4 && Math.random()>.5){let a=grade*3+Math.floor(Math.random()*10),b=grade+2+Math.floor(Math.random()*6),ans=a*b;text=`${a} × ${b} = …`;opts=shuffled([String(ans),String(ans+a),String(Math.max(1,ans-b)),String(ans+10)]);correct=opts.indexOf(String(ans));}
    else if(grade>=3 && Math.random()>.5){let a=grade*12+Math.floor(Math.random()*20),b=grade+3,ans=a-b;text=`${a} − ${b} = …`;opts=shuffled([String(ans),String(ans+1),String(ans-2),String(ans+5)]);correct=opts.indexOf(String(ans));}
    return [text,opts,correct];
   });
 }
 return qs.map(q=>({text:q[0],options:q[1],correct:q[2]}));
}
function init3D(){
 if(renderer){renderer.dispose();world.innerHTML='';}
 scene=new THREE.Scene();scene.background=new THREE.Color(0x9be7db);scene.fog=new THREE.Fog(0x9be7db,16,75);
 camera=new THREE.PerspectiveCamera(60,world.clientWidth/world.clientHeight,.1,120);camera.position.set(0,5.2,11);camera.lookAt(0,1,-8);
 renderer=new THREE.WebGLRenderer({antialias:true,alpha:false});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setSize(world.clientWidth,world.clientHeight);renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.outputColorSpace=THREE.SRGBColorSpace;world.appendChild(renderer.domElement);
 scene.add(new THREE.HemisphereLight(0xe6ffff,0x345b39,2.1));const sun=new THREE.DirectionalLight(0xfff4d1,2.5);sun.position.set(-4,12,6);sun.castShadow=true;scene.add(sun);
 const ground=new THREE.Mesh(new THREE.PlaneGeometry(90,100,1,1),new THREE.MeshStandardMaterial({color:0x5eb66b,roughness:1}));ground.rotation.x=-Math.PI/2;ground.position.set(0,-.5,-28);ground.receiveShadow=true;scene.add(ground);
 const path=new THREE.Mesh(new THREE.PlaneGeometry(7,100),new THREE.MeshStandardMaterial({color:0xc8b477,roughness:1}));path.rotation.x=-Math.PI/2;path.position.set(0,-.46,-28);scene.add(path);
 const loader=new THREE.TextureLoader();
 const makeSprite=(url,w,h, fallbackColor)=>{
  const mat=new THREE.MeshBasicMaterial({color:fallbackColor||0xffffff,transparent:true,side:THREE.DoubleSide,depthWrite:false});
  loader.load(url,tex=>{tex.colorSpace=THREE.SRGBColorSpace;mat.map=tex;mat.color.set(0xffffff);mat.needsUpdate=true;});return new THREE.Mesh(new THREE.PlaneGeometry(w,h),mat);
 };
 hero=makeSprite('assets/pikachu.png',2.15,2.15,0xffd928);hero.position.set(0,.8,3.5);hero.userData.baseY=.8;scene.add(hero);heroMat=hero.material;
 enemies=[];bolts=[];particles=[];trees=[];
 for(let i=0;i<45;i++){
  const z=6-Math.random()*80, side=Math.random()<.5?-1:1, x=side*(5+Math.random()*15);
  const trunk=new THREE.Mesh(new THREE.CylinderGeometry(.12,.22,1.4,6),new THREE.MeshStandardMaterial({color:0x775035}));trunk.position.set(x,.2,z);scene.add(trunk);
  const crown=new THREE.Mesh(new THREE.ConeGeometry(.9+Math.random()*1.1,2.3+Math.random()*2,7),new THREE.MeshStandardMaterial({color:[0x2c8554,0x3b995a,0x1c6d4c][i%3],roughness:1}));crown.position.set(x,1.9,z);scene.add(crown);trees.push({trunk,crown,speed:7+Math.random()*4});
 }
 for(let i=0;i<3;i++)spawnEnemy(true);
 clock=new THREE.Clock();gameElapsed=0;enemyTimer=0;
}
function spawnEnemy(initial=false){
 const useGengar=Math.random()>.45;const sprite=new THREE.Mesh(new THREE.PlaneGeometry(1.9,1.9),new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,side:THREE.DoubleSide,depthWrite:false}));
 new THREE.TextureLoader().load(useGengar?'assets/gengar.png':'assets/enemy.png',tex=>{tex.colorSpace=THREE.SRGBColorSpace;sprite.material.map=tex;sprite.material.needsUpdate=true;});
 sprite.position.set((Math.random()*8-4),.8,initial?-10-Math.random()*22:-42);sprite.userData={hp:difficulty==='sulit'?2:1,attack:0,phase:Math.random()*6,kind:useGengar?'gengar':'enemy'};scene.add(sprite);enemies.push(sprite);
}
function addBolt(x,y,z,target){
 const pts=[new THREE.Vector3(x,y,z),new THREE.Vector3(x+(Math.random()-.5)*.6,y+.3,z-1),new THREE.Vector3(x+(Math.random()-.5)*.6,y-.2,z-2),new THREE.Vector3(x,y,z-3)];
 const geo=new THREE.BufferGeometry().setFromPoints(pts),mat=new THREE.LineBasicMaterial({color:0xffed45,linewidth:3});const line=new THREE.Line(geo,mat);scene.add(line);bolts.push({mesh:line,life:.2,target});
 for(let i=0;i<4;i++){const s=new THREE.Mesh(new THREE.SphereGeometry(.07,6,6),new THREE.MeshBasicMaterial({color:0xfff77a}));s.position.set(x+(Math.random()-.5)*.7,y+(Math.random()-.5)*.6,z-Math.random()*2);scene.add(s);particles.push({mesh:s,life:.2});}
 sound('shoot');
}
function shoot(){
 if(!running||paused||!answered||performance.now()-lastShot<300)return;
 lastShot=performance.now();addBolt(hero.position.x,hero.position.y+.1,hero.position.z-1);
 let target=enemies.filter(e=>e.position.z<hero.position.z&&e.position.z>-30).sort((a,b)=>Math.abs(a.position.x-hero.position.x)-Math.abs(b.position.x-hero.position.x))[0];
 if(target&&Math.abs(target.position.x-hero.position.x)<3.1){target.userData.hp--;score+=10;sound('spark');if(target.userData.hp<=0){scene.remove(target);enemies=enemies.filter(e=>e!==target);kills++;score+=25;}}
 $('scoreText').textContent=score;
}
function jump(){if(!running||paused)return;heroTargetY=2.3;sound('jump');setTimeout(()=>heroTargetY=.8,650)}
function updateLives(){ $('livesText').textContent='❤️'.repeat(Math.max(0,lives))+'🖤'.repeat(3-Math.max(0,lives));}
function hitHero(){
 if(invulnerable>0)return;lives--;invulnerable=1.25;updateLives();sound('hit');score=Math.max(0,score-5);$('scoreText').textContent=score;
 if(lives<=0)finish(false);
}
function animate(){
 animationId=requestAnimationFrame(animate);if(!renderer||!scene)return;
 const dt=Math.min(clock.getDelta(),.04);
 if(running&&!paused){
  gameElapsed+=dt;hero.position.x=THREE.MathUtils.lerp(hero.position.x,heroTargetX,.12);hero.position.y=THREE.MathUtils.lerp(hero.position.y,heroTargetY,.12);hero.position.z=3.5+Math.sin(gameElapsed*2)*.08;
  hero.rotation.z=THREE.MathUtils.lerp(hero.rotation.z,(heroTargetX-hero.position.x)*-.05,.1);
  hero.material.opacity=invulnerable>0&&Math.floor(gameElapsed*14)%2===0?.4:1;invulnerable=Math.max(0,invulnerable-dt);
  trees.forEach(t=>{t.trunk.position.z+=t.speed*dt;t.crown.position.z+=t.speed*dt;if(t.trunk.position.z>8){let z=-70-Math.random()*12;t.trunk.position.z=z;t.crown.position.z=z;}});
  enemies.forEach(e=>{e.position.z+= (difficulty==='sulit'?7.8:difficulty==='sedang'?6.1:4.8)*dt;e.position.x+=Math.sin(gameElapsed*1.7+e.userData.phase)*dt*.7;e.lookAt(camera.position);e.userData.attack+=dt;
   if(e.position.z>hero.position.z-1&&Math.abs(e.position.x-hero.position.x)<1.35&&Math.abs(e.position.y-hero.position.y)<1.5){hitHero();e.position.z=7;}
   if(e.userData.attack>2.7&&e.position.z<hero.position.z-3){e.userData.attack=0; // visual enemy spark projectile
    const ball=new THREE.Mesh(new THREE.SphereGeometry(.14,8,8),new THREE.MeshBasicMaterial({color:0xff7a52}));ball.position.copy(e.position);ball.userData={vx:(hero.position.x-e.position.x)*.5,life:2.4};scene.add(ball);particles.push({mesh:ball,life:2.4,hostile:true});}
   if(e.position.z>8){e.position.z=-38-Math.random()*12;e.position.x=Math.random()*8-4;}
  });
  bolts.forEach(b=>{b.life-=dt;if(b.life<=0)scene.remove(b.mesh);});bolts=bolts.filter(b=>b.life>0);
  particles.forEach(p=>{p.life-=dt;if(p.hostile){p.mesh.position.z+=9*dt;p.mesh.position.x+=p.mesh.userData.vx*dt;if(p.mesh.position.z>hero.position.z-1&&Math.abs(p.mesh.position.x-hero.position.x)<.85){hitHero();p.life=0;}}if(p.life<=0)scene.remove(p.mesh);});particles=particles.filter(p=>p.life>0);
  enemyTimer+=dt;if(enemyTimer>(difficulty==='sulit'?2.0:2.8)&&enemies.length<5){spawnEnemy();enemyTimer=0;}
 }
 camera.position.x=THREE.MathUtils.lerp(camera.position.x,hero?hero.position.x*.18:0,.04);camera.lookAt(camera.position.x*.25,1.1,-8);
 renderer.render(scene,camera);
}
function nextQuestion(){
 if(questionIndex>=10){finish(true);return;}
 answered=false;$('quizCard').classList.remove('hidden');const q=currentQuestions[questionIndex];
 $('quizTag').textContent=subjects[subject].name.toUpperCase();$('quizNumber').textContent=`SOAL ${questionIndex+1}/10`;$('questionText').textContent=q.text;$('quizFeedback').textContent='';
 const grid=$('answerGrid');grid.innerHTML='';
 q.options.forEach((opt,i)=>{const b=document.createElement('button');b.className='answer-btn';b.textContent=String.fromCharCode(65+i)+'. '+opt;b.addEventListener('click',()=>answerQuestion(i,b));grid.appendChild(b);});
}
function answerQuestion(i,button){
 if(answered)return;answered=true;const q=currentQuestions[questionIndex],buttons=[...$('answerGrid').children];
 buttons.forEach((b,j)=>{b.disabled=true;if(j===q.correct)b.classList.add('correct');});
 if(i===q.correct){score+=100;button.classList.add('correct');$('quizFeedback').textContent='Hebat! Jawaban benar. +100 skor ⚡';sound('win');}
 else{button.classList.add('wrong');$('quizFeedback').textContent='Belum tepat. Yuk pelajari jawabannya!';score+=10;sound('wrong');}
 $('scoreText').textContent=score;questionIndex++;$('questionCount').textContent=`${questionIndex}/10`;
 setTimeout(()=>{if(!running)return;$('quizCard').classList.add('hidden');if(questionIndex>=10){finish(true);return;}answered=true;},1400);
}
function finish(won){
 running=false;paused=false;$('pauseOverlay').classList.add('hidden');$('quizCard').classList.add('hidden');$('resultOverlay').classList.remove('hidden');
 const stars=won?(score>=850?'⭐⭐⭐':score>=600?'⭐⭐':'⭐'):'⭐';
 $('resultIcon').textContent=won?'🏆':'💛';$('resultTitle').textContent=won?'Misi Berhasil!':'Pikachu Kehabisan Nyawa';$('resultMessage').textContent=won?`Kamu menyelesaikan 10 soal dan mengalahkan ${kills} musuh. Terus belajar dan berani mencoba!`:'Jangan menyerah! Coba lagi, geser untuk menghindar dan jawab soal dengan teliti.';$('rewardStars').textContent=stars;$('finalScore').textContent=score;sound(won?'win':'hit');
}
function startGame(){
 grade=+$('grade').value;subject=$('subject').value;currentQuestions=scaledQuestions();difficulty=document.querySelector('#difficultyChoices .active').dataset.value;mode=document.querySelector('#modeChoices .active').dataset.value;
 lives=3;score=0;kills=0;questionIndex=0;running=true;paused=false;answered=true;heroTargetX=0;heroTargetY=.8;invulnerable=0;
 $('missionTitle').textContent='Hutan Listrik';$('missionSub').textContent=`Kelas ${grade} • ${subjects[subject].name} • ${mode.toUpperCase()}`;$('scoreText').textContent='0';$('questionCount').textContent='0/10';updateLives();
 $('pauseOverlay').classList.add('hidden');$('resultOverlay').classList.add('hidden');$('quizCard').classList.add('hidden');showScreen('gameScreen');init3D();
 if(animationId)cancelAnimationFrame(animationId);animate();setTimeout(()=>{if(running&&!paused)nextQuestion();},600);
}
function toHome(){running=false;paused=false;$('pauseOverlay').classList.add('hidden');$('resultOverlay').classList.add('hidden');showScreen('homeScreen');}
$('startBtn').addEventListener('click',()=>{sound('jump');showScreen('setupScreen')});
$('backHome').addEventListener('click',()=>showScreen('homeScreen'));
$('playBtn').addEventListener('click',startGame);
$('soundToggle').addEventListener('click',()=>{soundOn=!soundOn;$('soundToggle').textContent=soundOn?'🔊 Suara: Aktif':'🔇 Suara: Mati';if(soundOn)sound('win')});
document.querySelectorAll('.choice-row').forEach(row=>row.querySelectorAll('.choice').forEach(btn=>btn.addEventListener('click',()=>{row.querySelectorAll('.choice').forEach(b=>b.classList.remove('active'));btn.classList.add('active')})));
$('pauseBtn').addEventListener('click',()=>{if(!running)return;paused=true;$('pauseOverlay').classList.remove('hidden')});
$('resumeBtn').addEventListener('click',()=>{paused=false;$('pauseOverlay').classList.add('hidden')});
$('homeGameBtn').addEventListener('click',toHome);$('pauseHomeBtn').addEventListener('click',toHome);$('resultHomeBtn').addEventListener('click',toHome);$('againBtn').addEventListener('click',startGame);
$('shootBtn').addEventListener('pointerdown',e=>{e.preventDefault();shoot()});$('jumpBtn').addEventListener('pointerdown',e=>{e.preventDefault();jump()});
world.addEventListener('pointerdown',e=>{if(!running||paused||$('quizCard').classList.contains('hidden')===false)return;pointerDown=true;pointerStart={x:e.clientX,y:e.clientY};world.setPointerCapture?.(e.pointerId);});
world.addEventListener('pointermove',e=>{if(!pointerDown||!pointerStart||!hero)return;const dx=(e.clientX-pointerStart.x)/Math.max(1,world.clientWidth);const dy=(e.clientY-pointerStart.y)/Math.max(1,world.clientHeight);heroTargetX=THREE.MathUtils.clamp(heroTargetX+dx*11,-4.2,4.2);heroTargetY=THREE.MathUtils.clamp(heroTargetY-dy*4,.65,2.7);pointerStart={x:e.clientX,y:e.clientY};});
world.addEventListener('pointerup',()=>{if(pointerDown&&pointerStart&&running&&!paused){/* drag controls movement; tapping fires */}pointerDown=false;pointerStart=null;});
world.addEventListener('click',e=>{if(!running||paused||!$('quizCard').classList.contains('hidden'))return;if(e.target.closest('button'))return;shoot()});
window.addEventListener('keydown',e=>{if(e.code==='Space'){e.preventDefault();shoot()}if(e.code==='ArrowLeft'||e.code==='KeyA')heroTargetX=Math.max(-4.2,heroTargetX-.7);if(e.code==='ArrowRight'||e.code==='KeyD')heroTargetX=Math.min(4.2,heroTargetX+.7);if(e.code==='ArrowUp'||e.code==='KeyW')jump();if(e.code==='Escape'&&running){paused=!paused;$('pauseOverlay').classList.toggle('hidden',!paused)}});
window.addEventListener('resize',()=>{if(renderer&&camera&&world.clientWidth){camera.aspect=world.clientWidth/world.clientHeight;camera.updateProjectionMatrix();renderer.setSize(world.clientWidth,world.clientHeight)}});
showScreen('homeScreen');

const $ = (id) => document.getElementById(id);
const screens = ["home-screen","game-screen","win-screen"];
const levels = [
 {name:"THE BEDROOM",objective:"Temukan kunci kecil, baca petunjuk di jam, lalu buka laci dengan kode yang benar.",code:"314",clues:3,
  objects:{
   bed:{title:"Kasur Berantakan",icon:"▰",text:"Ada sesuatu yang terselip di bawah bantal.",item:"Kunci kecil",clue:"Kamu menemukan KUNCI KECIL di bawah bantal.",once:true},
   clock:{title:"Jam Tua",icon:"◷",text:"Jarum jam berhenti pada pukul 3:14. Angka itu tampaknya penting.",clue:"Petunjuk kode: 3 - 1 - 4.",once:true},
   painting:{title:"Lukisan Misterius",icon:"▧",text:"Di balik lukisan tertulis: 'Waktu tidak pernah berbohong.'",clue:"Catatan: perhatikan angka pada jam.",once:true},
   desk:{title:"Meja dan Laci",icon:"▤",text:"Laci terkunci. Masukkan tiga angka untuk membukanya.",puzzle:true},
   cabinet:{title:"Lemari",icon:"▥",text:"Lemari berderit. Di dalamnya hanya ada debu dan gantungan baju.",clue:"Tidak ada apa-apa di sini.",once:true},
   shelf:{title:"Rak Kecil",icon:"▤",text:"Buku-buku lama. Salah satunya bertuliskan 'Cari jalan keluar'.",clue:"Kamu belum menemukan apa pun di rak.",once:true},
   door:{title:"Pintu Keluar",icon:"▣",text:"Pintu terkunci. Sepertinya laci menyimpan sesuatu untuk membukanya.",door:true}
  }},
 {name:"THE LIBRARY",objective:"Cari buku dengan tanda bintang, temukan urutan angka, lalu buka lemari arsip.",code:"527",clues:3,
  objects:{
   shelf:{title:"Rak Buku",icon:"▤",text:"Satu buku berwarna merah memiliki tanda bintang di punggungnya.",item:"Buku bertanda bintang",clue:"Kamu menemukan BUKU BERTANDA BINTANG.",once:true},
   painting:{title:"Lukisan Perpustakaan",icon:"▧",text:"Di belakang lukisan ada tulisan: 'Urutkan dari yang paling tua.'",clue:"Petunjuk: susun angka sesuai urutan usia buku.",once:true},
   clock:{title:"Jam Dinding",icon:"◷",text:"Jam menunjukkan pukul 5. Angka pertama mungkin 5.",clue:"Angka pertama: 5.",once:true},
   desk:{title:"Meja Pustakawan",icon:"▤",text:"Catatan peminjaman: Buku A (2), Buku B (7), Buku C (5). Urutannya terbalik berdasarkan usia: C, A, B.",clue:"Urutan buku C-A-B menghasilkan 5-2-7.",once:true},
   cabinet:{title:"Lemari Arsip",icon:"▥",text:"Lemari terkunci dengan keypad tiga digit.",puzzle:true},
   bed:{title:"Sofa Baca",icon:"▰",text:"Bantal sofa menyimpan pembatas buku kosong.",clue:"Hanya pembatas buku biasa.",once:true},
   door:{title:"Pintu Perpustakaan",icon:"▣",text:"Pintu menuju lorong berikutnya terkunci.",door:true}
  }},
 {name:"THE LABORATORY",objective:"Cocokkan simbol dengan warna pada tabel, lalu masukkan kode tiga angka ke panel.",code:"482",clues:3,
  objects:{
   shelf:{title:"Rak Tabung",icon:"▤",text:"Tabung berwarna merah, biru, dan hijau. Labelnya: merah=4, biru=8, hijau=2.",clue:"Kode warna: merah 4, biru 8, hijau 2.",once:true},
   painting:{title:"Diagram Simbol",icon:"▧",text:"Simbol segitiga berarti merah, lingkaran berarti biru, dan bintang berarti hijau.",clue:"Segitiga=merah, lingkaran=biru, bintang=hijau.",once:true},
   clock:{title:"Panel Eksperimen",icon:"◷",text:"Urutan simbol yang tertera: segitiga, lingkaran, bintang.",clue:"Urutan kode: segitiga - lingkaran - bintang.",once:true},
   desk:{title:"Meja Laboratorium",icon:"▤",text:"Ada catatan: 'Ikuti urutan simbol, bukan urutan warna.'",clue:"Jangan ubah urutan simbol.",once:true},
   cabinet:{title:"Panel Pintu",icon:"▥",text:"Panel membutuhkan kode tiga angka.",puzzle:true},
   bed:{title:"Meja Pemeriksaan",icon:"▰",text:"Kertas kosong dan sarung tangan. Tidak ada petunjuk lain.",clue:"Tidak ada petunjuk di sini.",once:true},
   door:{title:"Pintu Laboratorium",icon:"▣",text:"Pintu otomatis terkunci.",door:true}
  }},
 {name:"THE ABANDONED HOUSE",objective:"Temukan tiga benda penting dan pecahkan catatan misterius untuk membuka pintu.",code:"691",clues:3,
  objects:{
   bed:{title:"Kursi Goyang",icon:"▰",text:"Di bawah kursi ada koin kuno dengan angka 6.",item:"Koin kuno",clue:"Kamu menemukan KOIN KUNO bernomor 6.",once:true},
   shelf:{title:"Rak Berdebu",icon:"▤",text:"Sebuah foto keluarga bertuliskan angka 9 di belakangnya.",item:"Foto lama",clue:"Kamu menemukan FOTO LAMA dengan angka 9.",once:true},
   painting:{title:"Potret Tua",icon:"▧",text:"Di balik potret tertulis: 'Yang pertama adalah masa lalu, yang terakhir adalah awal.'",clue:"Catatan: susun benda sesuai urutan petunjuk.",once:true},
   clock:{title:"Jam Rusak",icon:"◷",text:"Di balik jam ada angka 1 yang dilingkari.",clue:"Angka terakhir: 1.",once:true},
   desk:{title:"Meja Tulis",icon:"▤",text:"Catatan: 'Koin, kenangan, permulaan.' Urutkan angka dari koin, foto, lalu jam.",clue:"Urutan: koin 6, foto 9, jam 1.",once:true},
   cabinet:{title:"Lemari Terkunci",icon:"▥",text:"Lemari memiliki keypad kecil.",puzzle:true},
   door:{title:"Pintu Depan",icon:"▣",text:"Pintu utama terkunci rapat.",door:true}
  }},
 {name:"THE FINAL ROOM",objective:"Gabungkan petunjuk dari seluruh perjalanan. Kode akhir adalah jumlah angka dari empat teka-teki sebelumnya.",code:"1314",clues:3,
  objects:{
   shelf:{title:"Rak Kenangan",icon:"▤",text:"Di buku catatan tertulis kode-kode sebelumnya: 314, 527, 482, dan 691. Jumlahkan digit pertama setiap kode: 3+5+4+6=18.",clue:"Digit pertama jika dijumlahkan = 18.",once:true},
   painting:{title:"Lukisan Terakhir",icon:"▧",text:"Di sisi belakang lukisan tertulis: jumlah digit kedua dari empat kode adalah 1+2+8+9=20.",clue:"Jumlah digit kedua = 20.",once:true},
   clock:{title:"Jam Pasir",icon:"◷",text:"Di dasar jam tertulis: jumlah digit ketiga adalah 4+7+2+1=14.",clue:"Jumlah digit ketiga = 14.",once:true},
   desk:{title:"Meja Kode",icon:"▤",text:"Petunjuk terakhir: ambil dua digit terakhir dari hasil penjumlahan digit ketiga (14), lalu tambahkan angka 13 di depannya. Kode akhir: 1314.",clue:"Kode akhir: 1314.",once:true},
   cabinet:{title:"Brankas Final",icon:"▥",text:"Brankas membutuhkan kode empat angka.",puzzle:true},
   bed:{title:"Tempat Istirahat",icon:"▰",text:"Kamu sudah terlalu jauh untuk menyerah. Periksa semua petunjuk.",clue:"Teruskan, pintu keluar sudah dekat.",once:true},
   door:{title:"Pintu Kebebasan",icon:"▣",text:"Pintu terakhir. Masukkan kode ke brankas untuk membukanya.",door:true}
  }}
];
let levelIndex=0,score=0,seconds=0,timerHandle=null,inventory=[],found={},solved={},muted=false,audioCtx=null;
function showScreen(id){screens.forEach(s=>$(s).classList.toggle("hidden",s!==id));}
function timeText(){return String(Math.floor(seconds/60)).padStart(2,"0")+":"+String(seconds%60).padStart(2,"0")}
function startTimer(){clearInterval(timerHandle);timerHandle=setInterval(()=>{seconds++;$("timer").textContent=timeText()},1000)}
function save(){localStorage.setItem("mysteryDoorSave",JSON.stringify({levelIndex,score,seconds,inventory,found,solved}))}
function load(){try{return JSON.parse(localStorage.getItem("mysteryDoorSave"))}catch{return null}}
function reset(){levelIndex=0;score=0;seconds=0;inventory=[];found={};solved={};save()}
function sound(freq=520,duration=.12,type="sine"){if(muted)return;try{audioCtx=audioCtx||new(window.AudioContext||window.webkitAudioContext)();let o=audioCtx.createOscillator(),g=audioCtx.createGain();o.type=type;o.frequency.value=freq;g.gain.setValueAtTime(.08,audioCtx.currentTime);g.gain.exponentialRampToValueAtTime(.001,audioCtx.currentTime+duration);o.connect(g);g.connect(audioCtx.destination);o.start();o.stop(audioCtx.currentTime+duration)}catch{}}
function toast(msg){let t=$("toast");t.textContent=msg;t.classList.add("show");clearTimeout(toast.handle);toast.handle=setTimeout(()=>t.classList.remove("show"),2200)}
function log(msg){let p=document.createElement("p");p.textContent="› "+msg;$("event-log").prepend(p);while($("event-log").children.length>6)$("event-log").lastChild.remove()}
function updateUI(){let l=levels[levelIndex];$("level-count").textContent=`LEVEL ${levelIndex+1} / 5`;$("level-name").textContent=l.name;$("scene-label").textContent=l.name;$("objective").textContent=l.objective;$("score").textContent=score;$("timer").textContent=timeText();$("progress-bar").style.width=((levelIndex+1)/5*100)+"%";$("clue-count").textContent=Object.keys(found[levelIndex]||{}).length+" / 3";$("room-status").textContent=solved[levelIndex]?"Kode terbuka — pintu siap diperiksa":"Cari petunjuk di ruangan ini";$("inventory").innerHTML=inventory.length?inventory.map(x=>`<span class="item">${x}</span>`).join(""):'<p class="empty">Belum ada barang ditemukan.</p>'}
function openModal(title,body,actions=[],icon="⌕",kicker="INVESTIGASI"){ $("modal-title").textContent=title;$("modal-body").innerHTML=body;$("modal-icon").textContent=icon;$("modal-kicker").textContent=kicker;$("modal-actions").replaceChildren();actions.forEach(a=>$("modal-actions").append(a));$("modal").classList.remove("hidden")}
function closeModal(){$("modal").classList.add("hidden")}
function button(label,fn,style="btn btn-gold"){let b=document.createElement("button");b.className=style;b.textContent=label;b.onclick=fn;return b}
function addFound(key,obj){found[levelIndex]=found[levelIndex]||{};if(!found[levelIndex][key]){found[levelIndex][key]=true;if(obj.item&&!inventory.includes(obj.item))inventory.push(obj.item);if(obj.clue)log(obj.clue);score+=10;sound(760,.16);toast(obj.item?`Đã menemukan: ${obj.item}`:"Petunjuk ditemukan!");save()}updateUI()}
function inspect(key){let obj=levels[levelIndex].objects[key];if(!obj)return;
 if(obj.door){if(solved[levelIndex]){sound(300,.3,"triangle");if(levelIndex===4)win();else{levelIndex++;save();renderLevel();toast("Pintu terbuka! Level berikutnya.");}}else openModal("Pintu Terkunci","Pintu belum bisa dibuka. Selesaikan teka-teki ruangan ini terlebih dahulu.",[button("MENGERTI",closeModal,"btn btn-outline")],"▣","AKSES DITOLAK");return}
 if(obj.puzzle){if(solved[levelIndex]){openModal(obj.title,"Laci / panel sudah terbuka. Kamu menemukan jalan untuk melanjutkan.",[button("TUTUP",closeModal,"btn btn-outline")],"✓","BERHASIL");return}let input=document.createElement("input");input.placeholder="•••";input.inputMode="numeric";input.maxLength=4;input.id="code-input";let check=button("BUKA KUNCI",()=>{let value=input.value.trim();if(value===levels[levelIndex].code){solved[levelIndex]=true;score+=100;addFound("puzzle-"+levelIndex,{clue:"Teka-teki berhasil dipecahkan!"});sound(880,.22);setTimeout(()=>sound(1100,.3),120);closeModal();updateUI();toast("Kode benar! Pintu sudah bisa dibuka.");log("Kode benar. Sekarang periksa pintu!");save()}else{score=Math.max(0,score-5);sound(170,.2,"sawtooth");toast("Kode salah. Coba periksa petunjuk lagi.");log("Kode yang dimasukkan belum tepat.");$("score").textContent=score;save()}}, "btn btn-gold");openModal(obj.title,obj.text,[input,check,button("BATAL",closeModal,"btn btn-outline")],"▣","MASUKKAN KODE");setTimeout(()=>input.focus(),50);return}
 if(obj.once&&found[levelIndex]?.[key]){openModal(obj.title,obj.text,[button("TUTUP",closeModal,"btn btn-outline")],obj.icon);return}
 openModal(obj.title,obj.text,[button("PERIKSA",()=>{addFound(key,obj);closeModal()}, "btn btn-gold"),button("TUTUP",closeModal,"btn btn-outline")],obj.icon);
}
function renderLevel(){showScreen("game-screen");updateUI();$("event-log").innerHTML="<p>Ruangan baru. Periksa benda-benda di sekitarmu.</p>";$("room-scene").querySelectorAll("[data-object]").forEach(el=>{el.onclick=()=>inspect(el.dataset.object);el.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();inspect(el.dataset.object)}}});save()}
function win(){clearInterval(timerHandle);$("final-score").textContent=score;$("final-time").textContent=timeText();showScreen("win-screen");localStorage.removeItem("mysteryDoorSave");sound(660,.18);setTimeout(()=>sound(880,.2),180);setTimeout(()=>sound(1100,.4),360)}
function begin(){let saved=load();if(saved){levelIndex=saved.levelIndex||0;score=saved.score||0;seconds=saved.seconds||0;inventory=saved.inventory||[];found=saved.found||{};solved=saved.solved||{};}else reset();startTimer();renderLevel()}
$("play-btn").onclick=()=>{begin()};
$("how-btn").onclick=()=>openModal("HOW TO PLAY","<p>1. Klik benda-benda di dalam ruangan untuk memeriksanya.</p><p>2. Temukan petunjuk dan kumpulkan barang ke inventory.</p><p>3. Buka laci, lemari, atau panel dengan memasukkan kode angka.</p><p>4. Setelah teka-teki selesai, klik pintu untuk lanjut ke level berikutnya.</p><p>5. Gunakan HINT jika benar-benar buntu. Hint mengurangi 20 poin.</p>",[button("SIAP BERMAIN",closeModal)],"⌖","PANDUAN");
$("about-btn").onclick=()=>openModal("ABOUT THE GAME","Escape Room: The Mystery Door adalah game petualangan teka-teki 2D. Jelajahi lima ruangan, temukan rahasia, dan buktikan kemampuan detektifmu.",[button("TUTUP",closeModal,"btn btn-outline")],"✦","MYSTERY ADVENTURES");
$("hint-btn").onclick=()=>{if(score<20){toast("Skor tidak cukup untuk menggunakan hint.");return}score-=20;let hints=["Periksa kasur untuk menemukan kunci. Jam menunjukkan kode laci.","Buku bertanda bintang dan catatan pustakawan memberi urutan kode.","Diagram simbol dan label tabung warna adalah kuncinya.","Periksa kursi, foto, jam, dan catatan di meja.","Baca semua catatan. Kode final yang harus dimasukkan adalah 1314."];openModal("PETUNJUK","<p>"+hints[levelIndex]+"</p>",[button("MENGERTI",()=>{closeModal();updateUI();save()}, "btn btn-gold")],"💡","HINT DIGUNAKAN");updateUI();save();log("Hint digunakan: −20 poin.")};
$("home-btn").onclick=()=>{clearInterval(timerHandle);showScreen("home-screen");$("saved-note").textContent="Progres tersimpan otomatis."};
$("modal-close").onclick=closeModal;$("modal").onclick=e=>{if(e.target===$("modal"))closeModal()};
$("sound-btn").onclick=()=>{muted=!muted;$("sound-btn").textContent=muted?"♫̸":"♫";toast(muted?"Suara dimatikan":"Suara diaktifkan");if(!muted)sound()};
$("again-btn").onclick=()=>{reset();begin()};$("menu-win-btn").onclick=()=>{showScreen("home-screen");$("saved-note").textContent=""};
window.addEventListener("beforeunload",save);
let existing=load();if(existing)$("saved-note").textContent="Progres tersimpan ditemukan. Tekan PLAY GAME untuk melanjutkan.";

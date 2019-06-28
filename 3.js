var nama = ''
var peran = 'penyihir'

if (nama === '' && peran === ''||nama===''){
  console.log("Nama harus diisi!")
}else if (peran===''){
  console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!")
} else if (nama !== '' && peran === 'ksatria'){
  console.log("Selamat datang di Dunia Proxytia, " + nama + '!\n' + 
"Halo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu!")
} else if (nama!== '' && peran === 'tabib'){
  console.log("Selamat datang di Dunia Proxytia, " + nama + '!\n' + 
"Halo Tabib " + nama + ", kamu akan membantu temanmu yang terluka.")
} else if (nama!==''&& peran === 'penyihir'){
  console.log("Selamat datang di Dunia Proxytia, " + nama + '!\n' + 
"Halo Penyihir " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!")
} 
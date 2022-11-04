function simpanGambar(link, nama){
      fetch(link)
        .then(resp => resp.blob())
        .then(blob => {
            const linkGambar = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = linkGambar;
            a.download = nama;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(linkGambar);
        })
        .catch(() => console.log('error'));
}

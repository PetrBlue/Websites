const editor = document.getElementById('editor');
      const preview = document.querySelector('.preview');
      const btnBold = document.getElementById('btn-bold');
      const btnItalic = document.getElementById('btn-italic');
      const btnUnderline = document.getElementById('btn-underline');
      const btnLink = document.getElementById('btn-link');
      const btnImage = document.getElementById('btn-image');

      function updatePreview() {
        preview.innerHTML = editor.value;
      }

      editor.addEventListener('input', updatePreview);
      editor.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          e.preventDefault();
          const start = editor.selectionStart;
          const end = editor.selectionEnd;
          editor.value = editor.value.substring(0, start) + '\t' + editor.value.substring(end);
          editor.selectionStart = editor.selectionEnd = start + 1;
        }
      });

      btnBold.addEventListener('click', () => {
        document.execCommand('bold', false, null);
        updatePreview();
      });

      btnItalic.addEventListener('click', () => {
        document.execCommand('italic', false, null);
        updatePreview();
      });

      btnUnderline.addEventListener('click', () => {
        document.execCommand('underline', false, null);
        updatePreview();
      });

      btnLink.addEventListener('click', () => {
        const url = prompt('Enter a URL:', 'http://');
        if (url) {
          document.execCommand('createLink', false, url);
          updatePreview();
        }
      });

      btnImage.addEventListener('click', () => {
        const url = prompt('Enter the URL of the image:', 'http://');
        if(url) {
            document.execCommand('insertImage', false, url);
            updatePreview();
          }
        });
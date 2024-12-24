// Import necessary files
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';

import FroalaEditorComponent from 'react-froala-wysiwyg';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createInstance } from '~/redux/interceptors';
import { loginSuccess } from '~/redux/authSlice';
import { updateImageUser } from '~/api/apiUser';
function TextEditor() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.login.currentUser);
  let instance = createInstance(user, dispatch, loginSuccess);
  const [model, setModel] = useState(() => {
    return localStorage.getItem('saveContents') || '';
  });
  return (
    <div className="editor-container">
      <div className="max-w-screen-lg">
        <FroalaEditorComponent
          model={model}
          onModelChange={(e) => setModel(e)}
          tag="textarea"
          config={{
            placeholderText: 'Viết nội dung ở đây...',
            toolbarButtons: {
              moreText: {
                buttons: [
                  'bold',
                  'italic',
                  'underline',
                  'strikeThrough',
                  'subscript',
                  'superscript',
                  'fontSize',
                  'textColor',
                  'backgroundColor',
                  'paragraphFormat',
                ],
              },
              moreParagraph: {
                buttons: ['alignJustify', 'alignLeft', 'alignCenter', 'alignRight', 'formatOL', 'formatUL'],
              },
              moreRich: {
                buttons: ['insertImage', 'undo', 'redo', 'insertLink'],
              },
            },
            pluginsEnabled: [
              'align',
              'fontSize',
              'textColor',
              'backgroundColor',
              'lists',
              'link',
              'image',
              'paragraphFormat',
              'charCounter',
              'save',
            ],
            fontSizeSelection: true,
            listAdvancedTypes: true,
            paragraphFormat: {
              N: 'Normal',
              H1: 'Heading 1',
              H2: 'Heading 2',
              H3: 'Heading 3',
              H4: 'Heading 4',
            },
            charCounterCount: true,
            charCounterMax: 1000,
            saveInterval: 2000,
            imageUploadURL: '/api/upload',
            imageUploadMethod: 'POST',
            imageUploadErrorCallback: function (data) {
              console.error('Image upload failed', data);
            },
            events: {
              'save.before': function (html) {
                console.log(html);
                localStorage.setItem('saveContents', html);
              },
              'image.beforeUpload': function (files) {
                const file = files[0]; // Lấy tệp ảnh đầu tiên
                return updateImageUser(instance, user.access_token, file)
                  .then((response) => {
                    // Sau khi ảnh được upload thành công, trả về URL ảnh
                    this.image.insert(response, true); // Chèn ảnh vào editor với URL trả về
                  })
                  .catch((error) => {
                    console.error('Upload image failed:', error);
                    return false; // Trả về false nếu upload không thành công
                  });
              },
            },
          }}
        />
      </div>
      <div className="flex justify-end">
        <button className="m-4 rounded-lg bg-lime-700 px-4 py-2 text-slate-50 hover:bg-third hover:text-black/60">
          Đăng bài
        </button>
      </div>
      <h2 className="p-4 text-2xl font-semibold">Xem trước:</h2>
      <div className="max-w-screen-lg px-4">
        <FroalaEditorView model={model} />
      </div>
    </div>
  );
}

export default TextEditor;

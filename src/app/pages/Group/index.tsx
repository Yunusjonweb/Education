import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UserPlusIcon } from '@heroicons/react/24/outline';
import PageHeader from 'app/components/PageHeader';
import Button from 'UI/Button';
import Search from 'app/components/Search';
import CreateModal from './components/Create';
import { Editor } from '@tinymce/tinymce-react';

export default function Group() {
  const editorRef = useRef();
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [search, setSearch] = useState<string>('');

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <>
      <PageHeader title="Group">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <Search onSearch={value => setSearch(value)} />
          <Button leftIcon={UserPlusIcon} onClick={() => setIsVisible(true)}>
            {t('Create Group')}
          </Button>
        </div>
      </PageHeader>
      <div>
        <Editor
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount',
            ],
            toolbar:
              'undo redo | formatselect | ' +
              'bold italic backcolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help',
            content_style:
              'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
          }}
        />
        <button onClick={log}>Log editor content</button>
      </div>
      <CreateModal
        isVisible={isVisible}
        handleClose={() => setIsVisible(false)}
      />
    </>
  );
}

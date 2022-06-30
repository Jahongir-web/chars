import React from 'react'
import { Editor } from "@tinymce/tinymce-react";


export default function Edit() {
  return (
    <div>
      <Editor onChange={(e)=> console.log(e.target.getContent())}
      initialValue="<p>This is the initial content of the editor</p>"
          apiKey="u4l8mcuk2j12ldmg3ags60ndu96nglyfyzl2bfe7gtq4oc8j"
          onInit={(evt, editor) => { }}
          init={{
              height: 400,
              menubar: false,
              plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste codesample help wordcount code media fullscreen',
              ],
              toolbar: 'undo redo | formatselect | '
                  + 'bold italic backcolor | alignleft aligncenter '
                  + 'alignright alignjustify | bullist numlist outdent indent | '
                  + 'removeformat | help | codesample media fullscreen',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
          }}
      />
                <button className="mt-auto ms-auto" variant="primary" >
                    Save
                </button>{' '}
    </div>
  )
}

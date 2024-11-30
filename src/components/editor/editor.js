import { useMarkdown } from '../../providers/markdown-provider';
import './editor.css';

const Editor = () => {
  const { markdown, setMarkdown } = useMarkdown();

  return (
    <div className="editor__wrap">
      <textarea
        className="editor"
        placeholder="Write your markdown here..."
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        aria-label="Markdown editor"
      />
    </div>
  );
};

export default Editor;

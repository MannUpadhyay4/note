import React, { useState } from 'react';
import { Plus, Trash2, Edit3, Save, X } from 'lucide-react';

const NoteMaker = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({
    date: new Date().toISOString().split('T')[0],
    lectureNo: '',
    header: '',
    content: [],
  });
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const addContentBlock = (type) => {
    setCurrentNote((prev) => ({
      ...prev,
      content: [...prev.content, { type, text: '', items: [] }],
    }));
  };

  const updateContentBlock = (index, value) => {
    setCurrentNote((prev) => ({
      ...prev,
      content: prev.content.map((block, i) => (i === index ? { ...block, text: value } : block)),
    }));
  };

  const updateBulletPoint = (contentIndex, itemIndex, value) => {
    setCurrentNote((prev) => ({
      ...prev,
      content: prev.content.map((block, i) =>
        i === contentIndex
          ? {
              ...block,
              items: block.items.map((item, j) => (j === itemIndex ? value : item)),
            }
          : block
      ),
    }));
  };

  const addBulletPoint = (contentIndex) => {
    setCurrentNote((prev) => ({
      ...prev,
      content: prev.content.map((block, i) =>
        i === contentIndex ? { ...block, items: [...block.items, ''] } : block
      ),
    }));
  };

  const removeContentBlock = (index) => {
    setCurrentNote((prev) => ({
      ...prev,
      content: prev.content.filter((_, i) => i !== index),
    }));
  };

  const saveNote = () => {
    if (editingIndex !== null) {
      setNotes((prev) => prev.map((note, i) => (i === editingIndex ? currentNote : note)));
      setEditingIndex(null);
    } else {
      setNotes((prev) => [...prev, currentNote]);
    }
    setCurrentNote({
      date: new Date().toISOString().split('T')[0],
      lectureNo: '',
      header: '',
      content: [],
    });
    setShowForm(false);
  };

  const editNote = (index) => {
    setCurrentNote(notes[index]);
    setEditingIndex(index);
    setShowForm(true);
  };

  const deleteNote = (index) => {
    setNotes((prev) => prev.filter((_, i) => i !== index));
  };

  const containerStyle = {
    padding: '24px',
    maxWidth: '800px',
    margin: '0 auto',
  };

  const buttonStyle = {
    padding: '8px 16px',
    backgroundColor: '#4f46e5',
    color: 'white',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    margin: '8px 0',
    borderRadius: '6px',
    border: '1px solid #ccc',
    backgroundColor: '#f0f0f0',
  };

  const formContainerStyle = {
    padding: '24px',
    backgroundColor: '#333',
    borderRadius: '8px',
    marginBottom: '24px',
  };

  return (
    <div style={containerStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>Notes Maker</h1>
        {!showForm && (
          <button style={buttonStyle} onClick={() => setShowForm(true)}>
            <Plus size={20} /> New Note
          </button>
        )}
      </div>

      {showForm && (
        <div style={formContainerStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={{ color: '#ccc', marginBottom: '4px', display: 'block' }}>Date</label>
              <input
                type="date"
                value={currentNote.date}
                onChange={(e) => setCurrentNote((prev) => ({ ...prev, date: e.target.value }))}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={{ color: '#ccc', marginBottom: '4px', display: 'block' }}>Lecture No.</label>
              <input
                type="text"
                value={currentNote.lectureNo}
                onChange={(e) => setCurrentNote((prev) => ({ ...prev, lectureNo: e.target.value }))}
                style={inputStyle}
                placeholder="e.g., Lecture 1"
              />
            </div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ color: '#ccc', marginBottom: '4px', display: 'block' }}>Header</label>
            <input
              type="text"
              value={currentNote.header}
              onChange={(e) => setCurrentNote((prev) => ({ ...prev, header: e.target.value }))}
              style={inputStyle}
              placeholder="Note title"
            />
          </div>

          {currentNote.content.map((block, index) => (
            <div key={index} style={{ marginBottom: '16px', position: 'relative' }}>
              {block.type === 'paragraph' && (
                <textarea
                  value={block.text}
                  onChange={(e) => updateContentBlock(index, e.target.value)}
                  style={{ ...inputStyle, minHeight: '100px' }}
                  placeholder="Write your paragraph..."
                />
              )}
              {block.type === 'code' && (
                <textarea
                  value={block.text}
                  onChange={(e) => updateContentBlock(index, e.target.value)}
                  style={{ ...inputStyle, backgroundColor: '#000', color: '#0f0', fontFamily: 'monospace', minHeight: '100px' }}
                  placeholder="Write your code..."
                />
              )}
              {block.type === 'bullets' && (
                <div>
                  {block.items.map((item, itemIndex) => (
                    <input
                      key={itemIndex}
                      type="text"
                      value={item}
                      onChange={(e) => updateBulletPoint(index, itemIndex, e.target.value)}
                      style={inputStyle}
                      placeholder="Bullet point..."
                    />
                  ))}
                  <button
                    onClick={() => addBulletPoint(index)}
                    style={{ ...buttonStyle, backgroundColor: 'transparent', color: '#4f46e5', fontSize: '14px', padding: '4px 8px' }}
                  >
                    <Plus size={16} /> Add bullet point
                  </button>
                </div>
              )}
              <button
                onClick={() => removeContentBlock(index)}
                style={{ position: 'absolute', top: 0, right: -40, color: '#f00', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>
          ))}

          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
            <button style={buttonStyle} onClick={() => addContentBlock('paragraph')}>
              Add Paragraph
            </button>
            <button style={buttonStyle} onClick={() => addContentBlock('code')}>
              Add Code Block
            </button>
            <button style={buttonStyle} onClick={() => addContentBlock('bullets')}>
              Add Bullet List
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
            <button
              onClick={() => {
                setShowForm(false);
                setEditingIndex(null);
                setCurrentNote({
                  date: new Date().toISOString().split('T')[0],
                  lectureNo: '',
                  header: '',
                  content: [],
                });
              }}
              style={{ ...buttonStyle, backgroundColor: '#666' }}
            >
              Cancel
            </button>
            <button style={buttonStyle} onClick={saveNote}>
              <Save size={20} /> Save Note
            </button>
          </div>
        </div>
      )}

      <div style={{ marginTop: '24px' }}>
        {notes.map((note, index) => (
          <div key={index} style={{ padding: '16px', backgroundColor: '#444', borderRadius: '8px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div>
                <div style={{ color: '#ccc', fontSize: '14px' }}>{note.date}</div>
                <div style={{ color: '#4f46e5', fontWeight: 'bold' }}>{note.lectureNo}</div>
                <h2 style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', marginTop: '8px' }}>{note.header}</h2>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => editNote(index)}
                  style={{ color: '#ccc', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <Edit3 size={20} />
                </button>
                <button
                  onClick={() => deleteNote(index)}
                  style={{ color: '#f00', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
            <div>
              {note.content.map((block, blockIndex) => (
                <div key={blockIndex} style={{ marginBottom: '16px' }}>
                  {block.type === 'paragraph' && (
                    <p style={{ color: '#ccc', lineHeight: '1.5' }}>{block.text}</p>
                  )}
                  {block.type === 'code' && (
                    <pre
                      style={{
                        backgroundColor: '#000',
                        color: '#0f0',
                        padding: '12px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        overflowX: 'auto',
                      }}
                    >
                      {block.text}
                    </pre>
                  )}
                  {block.type === 'bullets' && (
                    <ul style={{ color: '#ccc', paddingLeft: '20px' }}>
                      {block.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>)}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};                

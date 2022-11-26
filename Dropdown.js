import { useState } from 'react';
import './Dropdown.css'
function Dropdown(colors) {
    const [isOpen, setIsOpen] = useState(false);
    console.log(colors);
    return (
        
        <div className="dropdown">
            <div className="dropdown-btn" onClick={() => setIsOpen(!isOpen)}>
                <p id="label">Choose one</p>
                {isOpen ? (
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.1018 16.9814C5.02785 16.9814 4.45387 15.7165 5.16108 14.9083L10.6829 8.59762C11.3801 7.80079 12.6197 7.80079 13.3169 8.59762L18.8388 14.9083C19.5459 15.7165 18.972 16.9814 17.898 16.9814H6.1018Z" fill="#212121" />
                    </svg>
                ) : (
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.1018 8C5.02785 8 4.45387 9.2649 5.16108 10.0731L10.6829 16.3838C11.3801 17.1806 12.6197 17.1806 13.3169 16.3838L18.8388 10.0731C19.5459 9.2649 18.972 8 17.898 8H6.1018Z" fill="#212121" />
                    </svg>
                )}
            </div>
            {isOpen && (
                <div className="dropdown-content">
                    
                    {colors.options.map(color => (
                        
                        <div className="dropdown-item" onClick={() => { document.body.style.backgroundColor = color.value ; document.getElementById("label").innerHTML = color.label ; }}>
                            {color.label}
                          
                        </div>
                    ))}
                   
                </div>
            )}
        </div>
    )
}

export default Dropdown;
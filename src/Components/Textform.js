
import React, {useState} from 'react'


export default function Textform(props) {

    const [text, setText] = useState("");

    // To Convert into Upper Case
    const when_click_upper = () =>{
        setText(text.toUpperCase());
        props.show("Converted into Upper case","success");
    }

    // To Convert into Lower Case
    const when_click_lower = () =>{
        setText(text.toLowerCase());
        props.show("Converted into Lower case","success");
    }

    // To Clear the Text
    const clear_text = () =>{
        setText("");
        props.show("The text is cleared","success");
    }

    // To Remove the extra Space
    const remove_extraspace = () =>{
        var p = text.replace(/\s+/g,' ').trim();
        setText(p);
        props.show("Extra spaces are removed","success");
    }

    // To add the writting functionality into Text box
    const click_event = (event) =>{
        setText(event.target.value);
    }

    // Extra Space count Fixed 
    const words = text.split(' ');
    const nonEmptyWords = words.filter(word => word !== '');
    
    return (
        <div>
            {/* For Text box */}
            <h1><b>Text Analyzer</b></h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="4" value={text} onChange={click_event} style={{backgroundColor: props.mode==='light'?'#e3e5e8':'#252323', color: props.mode==='light'?'black':'white'}}></textarea>
            </div>
            
            {/* Buttons for Upper_case, Lowe_case, Remove_extra_Space, Clear */}
            <div>
                <button className="btn btn-primary mx-1 btn-sm" onClick={when_click_upper}><b>UPPER_CASE</b></button>
                <button className="btn btn-primary mx-1 btn-sm" onClick={when_click_lower}><b>Lower_CASE</b></button>
                <button className="btn btn-primary mx-1 btn-sm" onClick={remove_extraspace}><b>REMOVE_EXTRA_SPACE</b></button>
                <button className="btn btn-primary mx-1 btn-sm" onClick={clear_text}><b>CLEAR</b></button>
            </div>

            {/* Count Charecter, Word and Time taken  */}
            <div className="my-3">
                <h4><b>Your Text Summery</b></h4>
                <p><b>{text.length>0?nonEmptyWords.length:"0"}</b> Words and <b>{text.replace(/\s/g, "").length}</b> Charecters<br>
                </br><b>{nonEmptyWords.length>0?0.008 * (nonEmptyWords.length):"0"}</b> minute taken to read</p>
                <h5><b>Preview</b></h5>
                <p>{text.length>0?text:'Enter text to preview'}</p>
            </div> 
        </div>
    )
}
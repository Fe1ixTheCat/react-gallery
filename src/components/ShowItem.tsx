import example from "../assets/img/example2.jpg";
import { useState, useContext } from "react";
import axios from "axios";
import { IItem } from "../models";
import { ModalContext } from "../context/ModalContext";
import { useItem } from "../hooks/item";

interface CreateCommentProps {
  onCreate: () => void
}

export function ShowItem({ onCreate }: CreateCommentProps) {


  const [value, setValue] = useState<any>('');
  const [id, setId] = useState(localStorage.getItem('id'));
  const { item, loading } = useItem(Number(id));
  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    if (value.trim().length === 0) {return};
    const responce = await axios.post(`https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`, {
      comment: value,
      name: 'test'
    });
    onCreate();
  }




  return(
    <div className="modal">
      { loading && <span>Loading...</span> }
      { !loading && <>
        <img src={item.url} alt="img" />
        <form onSubmit={submitHandler}>
          <h2>Comment</h2>
          <textarea
            value={value}
            onChange={event => setValue(event.target.value)}
          />
          <p>Write a few sentences about the photo.</p>
          <button type="submit">Save</button>
        </form>
        <div className="comments">
          {item.comments.map((com, index) => <p key={index}><b>{com.id}</b>: {com.text}</p>)}
        </div>
      </> }
    </div>
  )
}

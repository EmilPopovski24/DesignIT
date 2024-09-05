import { useContext } from "react";
import { useForm } from "../../../hooks/useForm";
// import { OfferContext } from "../../../contexts/OfferContext";
// import { AuthContext } from "../../../contexts/AuthContext";
import "./AddOffer.css";

export const AddOffer = ({
    OnAddOfferSubmit
}) => {

    // const user = useContext(AuthContext);
    // const { OnAddOfferSubmit } = useContext(OfferContext);
    const {values, changeHandler, onSubmit } = useForm({
        type:'',
        name:'',
        imageUrl:'',
        description:'',
        colors:'',
        price:'',
    }, OnAddOfferSubmit)

    return(
        <>
        <h1 className='addOfferHeader'>Add Your Offer</h1>
            <section id ="create-page">
                <form id="create" method="POST" onSubmit={onSubmit}>
                    <label htmlFor="type-title">Type</label>
                    <input type="text" id="type" name="type" values={values.type} onChange={changeHandler} placeholder="Type..." className='parameters' />
                    <hr />
                    <label htmlFor="task-title">Name</label>
                    <input type="text" id="name" name="name" values={values.name} onChange={changeHandler} placeholder="Offer name..." className='parameters'/>
                    <hr />
                    <label htmlFor="image">Image URL</label> 
                    <input type="imageUrl" alt="PetPicture" id="imageUrl" name="imageUrl"  values={values.imageUrl} onChange={changeHandler}placeholder="Image..." className='parameters' />
                    <hr />
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" values={values.description} onChange={changeHandler} placeholder="Description..." className='parameters' />
                    <hr />
                    <label htmlFor="colors">Colors</label>
                    <input type="text" id="colors" name="colors" values={values.colors} onChange={changeHandler} placeholder="Colors..." className='parameters' />
                    <hr />
                    <label htmlFor="price">Price</label>
                    <input type="text" id="price" name="price" values={values.price} onChange={changeHandler} placeholder="Price..." className='parameters' /> <p>BGN</p>
                    <hr />
                    <button type="submit" className="addPetBtn">Submit an Offer</button>
                </form>
            </section>
        </>
    )
}
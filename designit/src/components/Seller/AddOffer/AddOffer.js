

export const AddOffer = () => {

    return(
        <>
        <h1 className='addPetHeader'>Add Your Offer</h1>
            <section id ="create-page">
                <form id="create" method="POST">
                    <label htmlFor="task-title">Name</label>
                    <input type="text" id="name" name="name" placeholder="Offer name..." className='parameters'/>
                    <hr />
                    <label htmlFor="type-title">Type</label>
                    <input type="text" id="type" name="type"  placeholder="Type..." className='parameters' />
                    <hr />
                    <label htmlFor="breed-title">Breed</label>
                    <input type="text" id="breed" name="breed"  placeholder="Breed..." className='parameters' />
                    <hr />
                    <label htmlFor="age">Age</label>
                    <input type="text" id="age" name="age"  placeholder="Age..." className='parameters' />
                    <hr />
                    <label htmlFor="color">Color</label>
                    <input type="text" id="color" name="color" placeholder="Color..." className='parameters' />
                    <hr />
                    <label htmlFor="image">Image URL</label> 
                                  
                    <input type="imageUrl" alt="PetPicture" id="imageUrl" name="imageUrl"  placeholder="Image..." className='parameters' />
                    <hr />
                    <button type="submit" className="addPetBtn">Add Your Pet</button>
                </form>
            </section>
        </>

    )
}
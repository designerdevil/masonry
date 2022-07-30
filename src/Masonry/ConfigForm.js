
function ConfigForm({ masonryState, setMasonryState }) {
    let itemValues = { itemWidth: '', itemHeight: '', itemImage: 'image1', itemFocus: '' };
    const handleOnChange = (e) => {
        setMasonryState({
            ...masonryState,
            [e.target.id]: e.target.value,
        });
    };
    const handleItemOnChange = (e) => {
        itemValues[e.target.id] = e.target.value;
    };
    const handleAddItem = () => {
        setMasonryState({
            ...masonryState,
            items: [
                ...masonryState.items,
                {...itemValues},
            ],
        });
        document.getElementById("itemImage").selectedIndex = 0;
        document.getElementById("itemWidth").selectedIndex = 0;
        document.getElementById("itemHeight").selectedIndex = 0;
        document.getElementById("itemFocus").selectedIndex = 0;
    };
    const handleRemoveItem = (val) => {
        setMasonryState({
            ...masonryState,
            items: [
                ...masonryState.items.splice(0, masonryState.items.length-1)
            ],
        });
    };
    return (
        <>
        <div>
            <select id="galleryType" onChange={handleOnChange}>
                <option value="">Choose Type</option>
                <option value="card">Card</option>
                <option value="imageonly">Image Only</option>
                <option value="imagebg">Image Background</option>
            </select>
            <select id="col" onChange={handleOnChange}>
                <option value="">Choose Column</option>
                <option value="col1">1 Column</option>
                <option value="col2">2 Column</option>
                <option value="col3">3 Column</option>
                <option value="col4">4 Column</option>
                <option value="col5">5 Column</option>
            </select>
            <select id="gap" onChange={handleOnChange}>
                <option value="">Choose Gap</option>
                <option value="gap1">1 Gap</option>
                <option value="gap2">2 Gap</option>
                <option value="gap3">3 Gap</option>
                <option value="gap4">4 Gap</option>
                <option value="gap5">5 Gap</option>
            </select>
            <select id="rounded" onChange={handleOnChange}>
                <option value="">Choose Curve</option>
                <option value="rounded-1">1 Rounded</option>
                <option value="rounded-2">2 Rounded</option>
                <option value="rounded-3">3 Rounded</option>
                <option value="rounded-4">4 Rounded</option>
                <option value="rounded-5">5 Rounded</option>
            </select>
            <select id="clickable" onChange={handleOnChange}>
                <option value="">Choose Clickable</option>
                <option value="clickable">Clickable</option>
                <option value="">Not Clickable</option>
            </select>
            <select id="theme" onChange={handleOnChange}>
                <option value="">Choose theme</option>
                <option value="light">light</option>
                <option value="dark">dark</option>
            </select>
        </div>
        <hr />
        <div>
            <select id="itemImage" onChange={handleItemOnChange}>
                <option value="">Choose Image</option>
                <option value="image1">Image 1</option>
                <option value="image2">Image 2</option>
                <option value="image3">Image 3</option>
                <option value="image4">Image 4</option>
                <option value="image5">Image 5</option>
                <option value="image6">Image 6</option>
                <option value="image7">Image 7</option>
                <option value="image8">Image 8</option>
                <option value="image9">Image 9</option>
                <option value="image10">Image 10</option>
                <option value="image11">Image 11</option>
            </select>
            <select id="itemWidth" onChange={handleItemOnChange}>
                <option value="">Choose Width Span</option>
                <option value="w1">Span w1</option>
                <option value="w2">Span w2</option>
                <option value="w3">Span w3</option>
                <option value="w4">Span w4</option>
                <option value="w5">Span w5</option>
            </select>
            <select id="itemHeight" onChange={handleItemOnChange}>
                <option value="">Choose Height Span</option>
                <option value="h1">Span h1</option>
                <option value="h2">Span h2</option>
                <option value="h3">Span h3</option>
                <option value="h4">Span h4</option>
                <option value="h5">Span h5</option>
            </select>
            <select id="itemFocus" onChange={handleItemOnChange}>
                <option value="">Is Item Focusable</option>
                <option value="">Non Focused</option>
                <option value="focused">Focused</option>
            </select>
            <button onClick={handleAddItem}>Add Item</button>
            <button onClick={handleRemoveItem}>Remove Item</button>
        </div>
        <hr />
        </>
    );
}

export default ConfigForm;

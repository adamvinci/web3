import { Context as DataContext } from 'contexts/dataContext';
import { useContext, useState } from 'react';
import { DatePicker, Space } from 'antd';
const AddSale = ({ game }) => {
    const { addSale } = useContext(DataContext);
    const [buyer, setBuyer] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [datePicker, setDate] = useState('')
    const onOk = (value) => {
        setDate(new Date(value._d).toISOString());
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        const date = datePicker.length !== 0 ? datePicker : new Date().toISOString()
        const newSale = { buyer, quantity, game }
        console.log(newSale)
        addSale(newSale)
        setBuyer('')
        setQuantity(0)
        setDate('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div> buyer name<input value={buyer} onChange={e => setBuyer(e.target.value)} type="text" required /></div>
                <div> quantity<input type="number" value={quantity} onChange={e => setQuantity(Number(e.target.value))} required /></div>
                <div>    <DatePicker showTime onOk={onOk} /></div>
                <button type="submit">create</button>
            </form>
        </div>
    )
}
export default AddSale
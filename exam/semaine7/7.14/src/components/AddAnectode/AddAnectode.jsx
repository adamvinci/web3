
import { useNavigate } from "react-router-dom"
import { Input, Button, Form } from 'antd';
const CreateNew = (props) => {

    const navigate = useNavigate()

    const handleSubmit = (values) => {
        props.addNew({
            ...values,
            votes: 0
        })
        props.setNotification(true);
        navigate("/")
    }

    return (
        <div>
            <h2>create a new anecdote</h2>
            <Form name="newAnecdote" onFinish={handleSubmit}>
                <Form.Item
                    label="content"
                    name="content"
                    rules={[
                        {
                            required: true,
                            message: 'Please input content!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="author"
                    name="author"
                    rules={[
                        {
                            required: true,
                            message: 'Please input author!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="url"
                    name="info"
                    rules={[
                        {
                            required: true,
                            message: 'Please input url!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Button htmlType="submit" type="primary">create</Button>
            </Form>
        </div>
    )

}

export default CreateNew;
// import { useState } from "react";
import {useForm} from 'react-hook-form';
import axios from 'axios';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import {yupResolver} from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    name: yup.string().min(10, 'Введите больше 10 символов').required('Вы забыли написать!'),
    age: yup.number().min(1, 'Введите больше значение чем 1').required('Введите возраст')
})


export default function FormUser({getUser}) {
    // const [username, setUsername] = useState();
    // const [age, setAge] = useState();
    const { register, handleSubmit, formState: {errors} } = useForm({resolver: yupResolver(schema)})

    const submitUser = (data) => {
        console.log(data);
        axios.post('http://localhost:8000/user', data)
        .then(() => getUser())
        .catch((e) => console.log(e));
        toast("Всё ок(пока что)", {
            autoClose: 4000,
                
        });
    }
  return (
    <div>
        <form onSubmit={handleSubmit(submitUser)}>
            <input 
                type="text" 
                {...register('name')}
                // value={username}
                // onChange={(e) => setUsername(e.target.value)} 
            />
            <p>{errors?.name?.message}</p>
            <input 
                type="number"  
                {...register('age')}
                // value={age}
                // onChange={(e) => setAge(e.target.value)}
            />
            <p>{errors?.age?.message}</p>
            <button type="submit">Создать пользователя</button>
        </form>

         <ToastContainer />
    </div>
  )
}
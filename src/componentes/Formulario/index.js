import Botao from '../Botao'
import './Formulario.css'
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
    apelido: yup.string()
        .required("O apelido é obrigatório")
        .max(15,"O apelido não pode ter mais de 15 letras")
    ,
    nome: yup.string()
        .required("O nome é obrigatório")
        .notOneOf(["Hamst", "hamst"], "Nome não permitido")
        .max(15,"O nome não pode ter mais de 15 letras")
,
})

const Formulario = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const OnSubmit = (data) => {
        console.log(data)
    }



    return (

        <form onSubmit={handleSubmit(OnSubmit)} className='formulario'>
            <label className='label'>
                Nome
                <input className='input'
                    {...register("nome")}
                />
                <span>{errors.nome?.message}</span>
               

            </label>

            <label className='label'>
                Apelido
                <input className='input'
                    {...register("apelido")}
                />
                <span className='span'>{errors.apelido?.message}</span>
            </label>


            <Botao
                botao="Salvar"
            />



        </form>



    )
}

export default Formulario 
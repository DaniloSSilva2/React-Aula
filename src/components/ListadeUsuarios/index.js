// src\components\ListadeUsuarios\index.js

import { useEffect, useState } from "react";
import axios from "axios";
import './styles.css'

function ListadeUsuarios () {
    const [usuarios, setUsuarios] = useState([])
    useEffect(() =>{

        const carregarUsuarios = async () => {
          try {
              const response = await axios.get('http://localhost:8080/usuarios')
              setUsuarios(response.data)
          } catch (error) {
              alert('Erro ao buscar usuários: ', error)
              setUsuarios([])
          }    
    }
    carregarUsuarios()   
}, [])

return (
    <ul id="listaUsurios" className="lista-usuarios">
        {usuarios.length === 0 ? (
            <li>Nenhum usuário encontrado.</li>
        ) : (
            usuarios.map( usuario => (
                <li key={usuario.id}>
                    <strong>Nome: </strong> {usuario.nome}<br />
                    <strong>E-mail: </strong> {usuario.email}<br />
                    <strong>Senha: </strong> {usuario.senha}          
                </li>
            ))
        )}
    </ul>
)

}

export default ListaDeUsuarios
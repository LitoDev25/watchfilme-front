import Header from '../partials/header';
import './erro.css';

export default function Erro() {
    return(
        <div className='error-handler'>
            <Header />
            <h1 className='h1-404'>404</h1>
            <h2>Página não encontrada</h2>
        </div>
    )
}
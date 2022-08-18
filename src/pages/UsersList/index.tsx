import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export default function UsersList() {
    const { permission } = useContext(AuthContext);

    return (
        <div>
            {permission ? (
                <h1>Permissão concedida</h1>
            ) : (
                <h1>Permissão negada</h1>
            )}
        </div>
    );
}

import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export default function UsersList() {
    const { permission } = useContext(AuthContext);
    console.log(
        '🚀 ~ file: index.tsx ~ line 6 ~ UsersList ~ permission',
        permission,
    );

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

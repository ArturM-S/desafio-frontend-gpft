import { useContext } from 'react';
import { AuthContext } from '../src/contexts/AuthContext';

export function VerifyPermission() {
    const { permission } = useContext(AuthContext);
    return permission;
}

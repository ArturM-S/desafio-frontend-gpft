import Link from 'next/link';
import { Container, Logo, Option } from './styles';

export default function Header() {
    return (
        <Container>
            <Link href="/Feed">
                <Logo
                    src="https://startupsmart.com.br/wp-content/uploads/2021/07/GLOBALPROFIT_MARCA_1-02.png"
                    alt="logo"
                />
            </Link>

            <Link href="/UsersList">
                <Option>Usuários</Option>
            </Link>
        </Container>
    );
}

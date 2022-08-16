import React, { ReactNode } from 'react';
import Header from '../components/Header';
import { Container } from './styles';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <Container>
            <Header />
            {children}
        </Container>
    );
}

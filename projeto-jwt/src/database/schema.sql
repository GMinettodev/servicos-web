-- Insere dois tipos de usuários
INSERT INTO
    users (email, password, role)
VALUES
    (
        'usuario@ifrs.edu.br',
        '$2b$10$382cEJJYi5YxSBNvWmufHeoPHX3dqIB9NP2R2XWzt/w.DnC0gmCr2',
        'user'
    ),
    (
        'admin@ifrs.edu.br',
        '$2b$10$/JLXJ62EBlk1bNq0xmpvMuTLDJb6AWmZUs74lgEJb4Z.J9.3kFJM.',
        'admin'
    );
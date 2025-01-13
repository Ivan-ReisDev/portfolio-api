"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailMarketing = emailMarketing;
function emailMarketing() {
    return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Currículo</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f6f9;
            color: #333333;
        }

        .container {
            width: 100%;
            max-width: 700px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .header {
            text-align: center;
            margin-bottom: 20px;
        }

        .header img {
            max-width: 120px;
            margin-bottom: 10px;
        }

        .header h1 {
            font-size: 26px;
            color: #0CA2BD;
            margin-top: 10px;
        }

        .content {
            text-align: left;
            font-size: 16px;
            line-height: 1.5;
            color: #555555;
        }

        .content p {
            margin: 12px 0;
        }

        .footer {
            text-align: center;
            margin-top: 40px;
            font-size: 14px;
            color: #777777;
        }

        .footer a {
            display: inline-block;
            margin: 0 12px;
            text-decoration: none;
            color: #0CA2BD;
            font-weight: 500;
            transition: color 0.3s ease;
        }

        .footer a:hover {
            color: #005e73;
        }

        .footer .socials {
            margin-top: 20px;
        }

        .footer .socials a {
            font-size: 18px;
            margin: 0 15px;
        }

        .btn {
            display: inline-block;
            background-color: #0CA2BD;
            color: #ffffff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 8px;
            margin-top: 20px;
            font-weight: bold;
            text-transform: uppercase;
            transition: background-color 0.3s ease;
        }

        .btn:hover {
            background-color: #0098a8;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://ivanreis.vercel.app/favicon.png" alt="Logo da Empresa">
            <h1>Currículo de Ivan Reis</h1>
        </div>

        <div class="content">
            <p>Olá,</p>

            <p>Estou compartilhando meu currículo em anexo e ficarei feliz em discutir futuras oportunidades que estejam alinhadas ao meu perfil profissional. Caso deseje entrar em contato para uma conversa, estou à disposição.</p>

            <p>Atenciosamente,<br><strong>Ivan Reis</strong></p>
        </div>

        <div class="footer">
            <p>Conecte-se comigo:</p>
            <div class="socials">
                <a href="https://github.com/Ivan-ReisDev" target="_blank">GitHub</a>
                <a href="https://www.linkedin.com/in/ivan-reis-b93b32248" target="_blank">LinkedIn</a>
                <a href="https://wa.me/5521985598348" target="_blank">WhatsApp</a>
            </div>
            <p>Obrigado pela atenção!</p>
        </div>
    </div>
</body>
</html>
    `;
}
//# sourceMappingURL=email.marketing.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordRecovery = passwordRecovery;
function passwordRecovery() {
    return `
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Recuperação de Senha</title>
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
        color: #0ca2bd;
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
        color: #0ca2bd;
        font-weight: 500;
        transition: color 0.3s ease;
      }

      .footer a:hover {
        color: #005e73;
      }

      .btn {
        display: inline-block;
        background-color: #0ca2bd;
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

      .btn-div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <img
          src="https://ivanreis.vercel.app/favicon.png"
          alt="Logo da Empresa"
        />
        <h1>Recuperação de Senha</h1>
      </div>

      <div class="content">
        <p>Olá,</p>

        <p>
          Recebemos uma solicitação para redefinir a senha da sua conta. Caso
          você tenha solicitado esta ação, clique no botão abaixo para
          prosseguir com a redefinição da sua senha:
        </p>
        <div class="btn-div">

            <a
            href="https://seusite.com/redefinir-senha?token=SEU_TOKEN_UNICO"
            class="btn"
            >Redefinir Senha</a
            >
        </div>

        <p>
          Se você não solicitou a recuperação de senha, por favor, ignore este
          e-mail. Sua senha permanecerá segura e nenhuma ação será realizada.
        </p>

        <p>Atenciosamente,<br /><strong>Equipe de Suporte</strong></p>
      </div>

      <div class="footer">
        <p>Conecte-se conosco:</p>
        <div class="socials">
          <a href="https://github.com/Ivan-ReisDev" target="_blank">GitHub</a>
          <a
            href="https://www.linkedin.com/in/ivan-reis-b93b32248"
            target="_blank"
            >LinkedIn</a
          >
          <a href="https://wa.me/5521985598348" target="_blank">WhatsApp</a>
        </div>
        <p>Obrigado por usar nossos serviços!</p>
      </div>
    </div>
  </body>
</html>
`;
}
//# sourceMappingURL=password.recovery.js.map
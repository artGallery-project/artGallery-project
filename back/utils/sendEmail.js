const nodemailer = require("nodemailer")

const sendEmail = async options => {
  /* Correo provicional mailtrap */
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "0dcd803c055390",
      pass: "0c58bd927d874b"
    }
  });
  const mensaje = {
    from: "Art-Gallery Project <noreply@artgalleryproject.com>",
    to: options.email,
    subject: options.subject,
    text: options.mensaje
  }
  /* Correo provicional mailtrap */


  /* Correo hotmail */
  /* 
  const transport = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        auth: {
          user: "titocolmen@hotmail.com",
          pass: "tuContraseñaDeAplicacion" // --> No se pudo generar la contraseña. Ir al video semana5 2022-11-03 14:44
        }
      });
    const mensaje={
        from: "Art-Gallery project <titocolmen@hotmail.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }
  */
  /* Correo hotmail */

  await transport.sendMail(mensaje);
}

module.exports = sendEmail;


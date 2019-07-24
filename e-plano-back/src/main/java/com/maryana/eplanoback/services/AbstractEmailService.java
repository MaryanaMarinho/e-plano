package com.maryana.eplanoback.services;

import com.maryana.eplanoback.domain.Formulario;
import com.maryana.eplanoback.dto.IdentificacaoDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.Date;

public abstract class AbstractEmailService implements EmailService {

    @Value("${default.sender}")
    private String sender;

    @Autowired
    private TemplateEngine templateEngine;

    @Autowired
    private JavaMailSender javaMailSender;

    @Override
    public void sendSavedFormEmail(Formulario obj) {
        SimpleMailMessage sm = prepareSimpleMailMessageFromFormulario(obj);
        sendEmail(sm);
    }

    protected SimpleMailMessage prepareSimpleMailMessageFromFormulario(Formulario obj) {

        String email = "";
        for (IdentificacaoDTO ident : obj.getIdentificacao()) {
            email = ident.getEmail();
        }

        SimpleMailMessage sm = new SimpleMailMessage();
        sm.setTo(email);
        sm.setFrom(sender);
        sm.setSubject("[e-Plano] Plano Semestral de Trabalho Docente");
        sm.setSentDate(new Date(System.currentTimeMillis()));
        sm.setText(obj.toString());

        return sm;
    }

    protected String htmlFromTemplateFormulario(Formulario obj) {
        Context context = new Context();
        context.setVariable("form", obj);

        for (IdentificacaoDTO ident : obj.getIdentificacao()) {
            context.setVariable("nome", ident.getNome());
            context.setVariable("ano", ident.getAnoSemestre());
        }

        return templateEngine.process("email/formularioSalvo", context);
    }

    @Override
    public void sendSavedFormHtmlEmail(Formulario obj) {

        try {
            MimeMessage mm = prepareMimeMessageFromFormulario(obj);
            sendHtmlEmail(mm);
        }
        catch (MessagingException e) {
            sendSavedFormEmail(obj);
        }

    }

    protected MimeMessage prepareMimeMessageFromFormulario(Formulario obj) throws MessagingException {

        String email = "";
        for (IdentificacaoDTO ident : obj.getIdentificacao()) {
            email = ident.getEmail();
        }

        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mmh = new MimeMessageHelper(mimeMessage, true);
        mmh.setTo(email);
        mmh.setFrom(sender);
        mmh.setSubject("[e-Plano] Plano Semestral de Trabalho Docente");
        mmh.setSentDate(new Date(System.currentTimeMillis()));
        mmh.setText(htmlFromTemplateFormulario(obj), true);

        return mimeMessage;
    }
}

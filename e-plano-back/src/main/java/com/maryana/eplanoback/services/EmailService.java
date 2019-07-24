package com.maryana.eplanoback.services;

import com.maryana.eplanoback.domain.Formulario;
import org.springframework.mail.SimpleMailMessage;

import javax.mail.internet.MimeMessage;


public interface EmailService {

    void sendSavedFormEmail(Formulario obj);

    void sendEmail(SimpleMailMessage msg);

    void sendSavedFormHtmlEmail(Formulario obj);

    void sendHtmlEmail(MimeMessage msg);
}

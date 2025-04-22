function sendEmail() {
      const email = "vijaysharmaram19@gmail.com";
      const subject = "Portfolio Contact - Message from Visitor";
      const body = `Hello,%0D%0A%0D%0AI visited your portfolio website and wanted to get in touch with you.%0D%0A%0D%0AName: [Your Name]%0D%0AEmail: [Your Email]%0D%0AMessage:%0D%0A[Type your message here]%0D%0A%0D%0ARegards,%0D%0AA Visitor`;
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    }
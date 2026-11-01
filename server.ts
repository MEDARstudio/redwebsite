import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// The dev server must run on port 3000 for the AI Studio preview environment
const PORT = 3000;

app.use(express.json());

interface BriefInquiry {
  id: string;
  timestamp: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  selected_services: string;
  project_scope: string;
  timeline: string;
  message: string;
  reference_link?: string;
}

const briefInquiries: BriefInquiry[] = [];

// Contact Brief Inquiries endpoint
app.post('/api/contact', async (req: Request, res: Response) => {
  try {
    const { name, email, company, phone, selected_services, project_scope, timeline, message, reference_link } = req.body;
    
    const newInquiry: BriefInquiry = {
      id: `brief-${Date.now()}`,
      timestamp: new Date().toISOString(),
      name: name || 'Anonymous',
      email: email || '',
      company: company || '',
      phone: phone || '',
      selected_services: selected_services || 'General Inquiry',
      project_scope: project_scope || 'Standard Project',
      timeline: timeline || 'Standard',
      message: message || '',
      reference_link: reference_link || '',
    };

    briefInquiries.unshift(newInquiry);

    console.log('=== [MEDAR STUDIO] NEW PROJECT BRIEF RECEIVED ===');
    console.log(`Target Email: contact@medarstudio.com`);
    console.log(`Date: ${newInquiry.timestamp}`);
    console.log(`Client: ${newInquiry.name} (${newInquiry.email})`);
    console.log(`Project / Brand: ${newInquiry.company || 'N/A'}`);
    console.log(`Phone: ${newInquiry.phone || 'N/A'}`);
    console.log(`Selected Services: ${newInquiry.selected_services}`);
    console.log(`Project Scope: ${newInquiry.project_scope}`);
    console.log(`Timeline: ${newInquiry.timeline}`);
    console.log(`Brief: ${newInquiry.message}`);
    console.log(`Reference: ${newInquiry.reference_link || 'N/A'}`);
    console.log('================================================');

    // Attempt direct real delivery via FormSubmit API to contact@medarstudio.com
    let formSubmitStatus = 'pending';
    let needsActivation = false;
    try {
      const fsRes = await fetch('https://formsubmit.co/ajax/contact@medarstudio.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': 'https://medarstudio.com',
          'Referer': 'https://medarstudio.com/'
        },
        body: JSON.stringify({
          _subject: `New Project Brief from ${newInquiry.name} - MEDAR STUDIO`,
          _captcha: 'false',
          _template: 'table',
          client_name: newInquiry.name,
          client_email: newInquiry.email,
          brand_or_project: newInquiry.company || 'N/A',
          phone: newInquiry.phone || 'N/A',
          services: newInquiry.selected_services,
          scope: newInquiry.project_scope,
          timeline: newInquiry.timeline,
          message: newInquiry.message,
          moodboard_reference: newInquiry.reference_link || 'N/A',
          date: new Date().toISOString()
        })
      });

      const fsData: any = await fsRes.json().catch(() => ({}));
      if (typeof fsData.message === 'string' && fsData.message.toLowerCase().includes('activation')) {
        needsActivation = true;
        formSubmitStatus = 'needs_activation';
      } else if (fsData.success === 'true' || fsData.success === true) {
        formSubmitStatus = 'delivered';
      }
    } catch (relayErr) {
      console.warn('FormSubmit contact relay warning:', relayErr);
    }

    return res.json({ 
      success: true, 
      message: 'Brief submitted successfully',
      inquiryId: newInquiry.id,
      deliveryStatus: formSubmitStatus,
      needsActivation
    });
  } catch (err) {
    console.error('Contact error:', err);
    return res.status(500).json({ error: 'Failed to process brief' });
  }
});

// View all received inquiries
app.get('/api/inquiries', (_req: Request, res: Response) => {
  return res.json({
    recipient: 'contact@medarstudio.com',
    count: briefInquiries.length,
    inquiries: briefInquiries
  });
});

// Newsletter Subscription endpoint (Aucun stockage dans un fichier ou base de données, envoi exclusif par email)
app.post('/api/newsletter', async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return res.status(400).json({ error: 'Adresse email invalide' });
    }
    const cleanEmail = email.trim().toLowerCase();

    console.log(`=== [MEDAR STUDIO] NOUVEL ABONNÉ NEWSLETTER : ${cleanEmail} ===`);
    console.log(`Destinataire exclusif : medarstudio@gmail.com`);
    console.log(`Date : ${new Date().toISOString()}`);
    console.log(`Stockage local : AUCUN (100% sécurisé et confidentiel, aucun fichier CSV)`);
    console.log(`================================================================`);

    // Attempt real delivery to medarstudio@gmail.com via FormSubmit
    let formSubmitStatus = 'pending';
    let needsActivation = false;
    try {
      const fsRes = await fetch('https://formsubmit.co/ajax/medarstudio@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': 'https://medarstudio.com',
          'Referer': 'https://medarstudio.com/'
        },
        body: JSON.stringify({
          _subject: `Nouvel Abonné Newsletter : ${cleanEmail} - MEDAR STUDIO`,
          _captcha: 'false',
          _template: 'table',
          email_abonne: cleanEmail,
          destination: 'medarstudio@gmail.com',
          date: new Date().toLocaleString('fr-FR', { timeZone: 'Africa/Casablanca' })
        })
      });

      const fsData: any = await fsRes.json().catch(() => ({}));
      if (typeof fsData.message === 'string' && fsData.message.toLowerCase().includes('activation')) {
        needsActivation = true;
        formSubmitStatus = 'needs_activation';
      } else if (fsData.success === 'true' || fsData.success === true) {
        formSubmitStatus = 'delivered';
      }
    } catch (fsErr) {
      console.warn('FormSubmit newsletter relay warning:', fsErr);
    }

    return res.json({ 
      success: true, 
      message: 'Subscription registered successfully.',
      deliveryStatus: formSubmitStatus,
      needsActivation
    });
  } catch (err) {
    console.error('Newsletter error:', err);
    return res.status(500).json({ error: 'Failed to process subscription' });
  }
});

// Newsletter Status
app.get('/api/newsletter', (_req: Request, res: Response) => {
  return res.json({
    status: 'active',
    mode: 'secure_direct_email',
    server_storage: 'none (confidential, zero public exposure)'
  });
});

app.get('/index.css', (_req: Request, res: Response) => {
  res.setHeader('Content-Type', 'text/css; charset=UTF-8');
  res.sendFile(path.resolve(__dirname, 'index.css'));
});

app.get('/index.js', (_req: Request, res: Response) => {
  res.setHeader('Content-Type', 'application/javascript; charset=UTF-8');
  res.sendFile(path.resolve(__dirname, 'index.js'));
});

app.use('/images', express.static(path.resolve(__dirname, 'public/images')));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.static(path.resolve(__dirname)));

async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR !== 'true',
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`MEDAR STUDIO server running on http://0.0.0.0:${PORT}`);
  });

  server.on('error', (err) => {
    console.error(`Server failed to start on port ${PORT}:`, err);
  });
}

startServer().catch((err) => {
  console.error('Fatal error starting server:', err);
});

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgvkoznv'

export async function submitContactForm(formData) {
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }

    return {
      success: true,
      message: 'Message envoye avec succes. Nous revenons vers vous tres vite.',
    }
  } catch {
    return {
      success: false,
      message: 'Envoi impossible pour le moment. Utilisez WhatsApp ou l email en alternative.',
    }
  }
}

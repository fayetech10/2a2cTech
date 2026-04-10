const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgvkoznv'

/**
 * Sends form data to Formspree endpoint.
 * Separates API logic from UI components.
 *
 * @param {Object} formData - The form fields to submit
 * @returns {Promise<{success: boolean, message: string}>}
 */
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
      message: 'Message envoyé avec succès ! Nous vous recontacterons rapidement.',
    }
  } catch {
    return {
      success: false,
      message: 'Échec de l\'envoi. Contactez-nous par WhatsApp ou email.',
    }
  }
}

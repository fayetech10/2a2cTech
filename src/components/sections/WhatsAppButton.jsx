import { MessageCircle } from 'lucide-react'
import { contactInfo } from '../../data/siteData'

function WhatsAppButton() {
  return (
    <a
      href={contactInfo.whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-black/[0.06] bg-white px-3 py-3 text-sm font-medium text-dark-900 shadow-[0_18px_42px_-28px_rgba(15,23,42,0.22)] transition-all hover:-translate-y-0.5"
      aria-label="Discuter sur WhatsApp"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f5ff] text-primary">
        <MessageCircle className="h-4 w-4" />
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  )
}

export default WhatsAppButton

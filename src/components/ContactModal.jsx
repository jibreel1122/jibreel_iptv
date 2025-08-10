import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { MessageCircle, Facebook, Phone } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
  const handleTelegramClick = () => {
    window.open('https://t.me/notjibreel', '_blank');
  };

  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/share/1F78bYJd2D/?mibextid=wwXIfr', '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/972599765211', '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-purple-900/95 border-purple-500/50 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center glow-text">
            تواصل معنا
          </DialogTitle>
          <DialogDescription className="text-center text-gray-300">
            اختر طريقة التواصل المفضلة لديك للحصول على اشتراك Jibreel IPTV
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 mt-6">
          <Button 
            onClick={handleTelegramClick}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 text-xl"
          >
            <MessageCircle className="mr-3 h-8 w-8" />
            Telegram: @notjibreel
          </Button>
          
          <Button 
            onClick={handleFacebookClick}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 text-xl"
          >
            <Facebook className="mr-3 h-8 w-8" />
            Facebook
          </Button>
          
          <Button 
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 text-xl"
          >
            <Phone className="mr-3 h-8 w-8" />
            WhatsApp: +972599765211
          </Button>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          سيتم الرد عليك في أسرع وقت ممكن
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;


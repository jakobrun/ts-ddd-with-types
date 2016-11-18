
interface Email {
    kind: 'Email'
    value: string
}

interface PhoneNumber {
    kind: 'PhoneNumber'
    value: string
}

type ContactInfo = Email | PhoneNumber

interface Contact {
    name: string
    primaryContactInfo: ContactInfo
    secondaryContactInfo: ContactInfo | undefined
}

function sendEmail(emailAddress: Email, message: string): boolean{
    console.log('send email to:', emailAddress.value, 'message:', message);
    return true;
}

function sendSms(phoneNumber: PhoneNumber, message: string): boolean {
    console.log('send sms to:', phoneNumber.value, 'message:', message);
    return true;
}

function notifyContact(contact: Contact, message: string): boolean {
    const contactInfo = contact.primaryContactInfo;
    switch(contactInfo.kind) {
        case 'Email': return sendEmail(contactInfo, message);
        case 'PhoneNumber': return sendSms(contactInfo, message);
    }
}

const contact: Contact = {
    name: 'Bob',
    primaryContactInfo: {
        kind: 'PhoneNumber',
        value: '8988247'
    },
    secondaryContactInfo: undefined
}

console.log(contact.name);
notifyContact(contact, 'This is cool stuff!!!');

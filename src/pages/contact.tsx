import PageTitle from '@/components/shared/PageTitle';
import AppLayout from '@/layouts/AppLayout';
import React from 'react';
import Image from 'next/image';
import Button from '@/components/form/Button';
import Input from '@/components/form/Input';
import TextArea from '@/components/form/Textarea';

type Props = {};

const Contact = (props: Props) => {
  return (
    <AppLayout title="contact">
      <PageTitle
        breadcrumb={[
          { label: 'Home', path: '/' },
          { label: 'Contact', path: '' },
        ]}
      >
        Contact
      </PageTitle>
      <div className="container py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="relative mb-10 h-48">
            <Image src="/images/map.svg" layout="fill" className="dark:invert" alt="map" />
            <h6 className="text-2xl font-bold">Contact Me</h6>
            <p className="mt-2">I would love to hear from you. 👋</p>
          </div>

          {/* Contact Form */}
          <div className="col-span-2">
            <form
              action="https://formspree.io/f/mldwbgwo" 
              method="POST"
            >
              <div className="grid gap-8 md:grid-cols-2">
                <Input name="name" placeholder="Your Name" required />
                <Input name="email" type="email" placeholder="Email Address" required />
              </div>

              <div className="mt-8">
                <Input name="subject" placeholder="Subject" required />
              </div>

              <div className="mt-8">
                <TextArea name="message" placeholder="Message" required />
              </div>

              <div className="mt-8">
                <Button
                  type="submit"
                  className="mt-5 bg-primary-500 px-8 font-semibold text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-200"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Contact;

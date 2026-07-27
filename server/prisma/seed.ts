import { PrismaClient, Role, GuestStatus, PaymentStatus } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  const adminPassword = await bcrypt.hash('admin123', 12);
  const userPassword = await bcrypt.hash('user123', 12);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@santani.com' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'admin@santani.com',
      password: adminPassword,
      role: Role.ADMIN,
    },
  });

  const user1 = await prisma.user.upsert({
    where: { email: 'priya@santani.com' },
    update: {},
    create: {
      name: 'Priya Sharma',
      email: 'priya@santani.com',
      password: userPassword,
      role: Role.USER,
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'rahul@santani.com' },
    update: {},
    create: {
      name: 'Rahul Verma',
      email: 'rahul@santani.com',
      password: userPassword,
      role: Role.USER,
    },
  });

  const event1 = await prisma.event.upsert({
    where: { id: '00000000-0000-0000-0000-000000000001' },
    update: {},
    create: {
      id: '00000000-0000-0000-0000-000000000001',
      title: 'Chaturmas Inauguration Ceremony',
      description: 'Grand opening ceremony of Chaturmas with traditional rituals and cultural performances.',
      date: new Date('2026-07-15T09:00:00Z'),
      location: 'Main Temple Hall',
      createdBy: admin.id,
    },
  });

  const event2 = await prisma.event.upsert({
    where: { id: '00000000-0000-0000-0000-000000000002' },
    update: {},
    create: {
      id: '00000000-0000-0000-0000-000000000002',
      title: 'Spiritual Discourse Series',
      description: 'Week-long spiritual discourse series by renowned scholars.',
      date: new Date('2026-07-20T16:00:00Z'),
      location: 'Meditation Hall',
      createdBy: admin.id,
    },
  });

  const event3 = await prisma.event.upsert({
    where: { id: '00000000-0000-0000-0000-000000000003' },
    update: {},
    create: {
      id: '00000000-0000-0000-0000-000000000003',
      title: 'Community Feast',
      description: 'Annual community feast with traditional cuisine and cultural exchange.',
      date: new Date('2026-08-05T12:00:00Z'),
      location: 'Community Center',
      createdBy: user1.id,
    },
  });

  const guestData = [
    { name: 'Amit Patel', email: 'amit@example.com', phone: '+91-9876543210', status: GuestStatus.CONFIRMED, eventId: event1.id },
    { name: 'Sneha Reddy', email: 'sneha@example.com', phone: '+91-9876543211', status: GuestStatus.CONFIRMED, eventId: event1.id },
    { name: 'Vikram Singh', email: 'vikram@example.com', phone: '+91-9876543212', status: GuestStatus.INVITED, eventId: event1.id },
    { name: 'Ananya Gupta', email: 'ananya@example.com', status: GuestStatus.DECLINED, eventId: event1.id },
    { name: 'Rajesh Kumar', phone: '+91-9876543213', status: GuestStatus.INVITED, eventId: event2.id },
    { name: 'Meera Joshi', email: 'meera@example.com', status: GuestStatus.CONFIRMED, eventId: event2.id },
    { name: 'Deepak Nair', email: 'deepak@example.com', phone: '+91-9876543214', status: GuestStatus.CONFIRMED, eventId: event3.id },
    { name: 'Kavita Desai', email: 'kavita@example.com', status: GuestStatus.INVITED, eventId: event3.id },
    { name: 'Arun Pillai', phone: '+91-9876543215', status: GuestStatus.CONFIRMED, eventId: event3.id },
    { name: 'Nalini Menon', email: 'nalini@example.com', phone: '+91-9876543216', status: GuestStatus.INVITED, eventId: event3.id },
  ];

  for (const guest of guestData) {
    await prisma.guest.create({ data: guest });
  }

  const announcements = [
    {
      title: 'Welcome to Chaturmas 2026',
      message: 'We are delighted to welcome everyone to this year\'s Chaturmas celebrations. Please check the schedule for upcoming events and participate actively.',
      createdBy: admin.id,
    },
    {
      title: 'Volunteer Registration Open',
      message: 'We are looking for volunteers to help with various activities during Chaturmas. Please sign up at the registration desk.',
      createdBy: admin.id,
    },
    {
      title: 'Special Announcement: Guest Speaker',
      message: 'We are honored to have Swami Ramanand Ji joining us for the Spiritual Discourse Series starting July 20th. Mark your calendars!',
      createdBy: user1.id,
    },
  ];

  for (const announcement of announcements) {
    await prisma.announcement.create({ data: announcement });
  }

  const donations = [
    { donorName: 'Amit Patel', amount: 5000, message: 'For the community feast', paymentStatus: PaymentStatus.COMPLETED },
    { donorName: 'Sneha Reddy', amount: 2500, message: 'In memory of my parents', paymentStatus: PaymentStatus.COMPLETED },
    { donorName: 'Vikram Singh', amount: 10000, message: 'For temple maintenance', paymentStatus: PaymentStatus.COMPLETED },
    { donorName: 'Rajesh Kumar', amount: 1500, paymentStatus: PaymentStatus.PENDING },
    { donorName: 'Meera Joshi', amount: 3000, message: 'For the discourse series', paymentStatus: PaymentStatus.COMPLETED },
    { donorName: 'Deepak Nair', amount: 7500, paymentStatus: PaymentStatus.PENDING },
    { donorName: 'Kavita Desai', amount: 2000, message: 'Blessings to all', paymentStatus: PaymentStatus.FAILED },
    { donorName: 'Anonymous', amount: 500, paymentStatus: PaymentStatus.COMPLETED },
  ];

  for (const donation of donations) {
    await prisma.donation.create({ data: donation });
  }

  console.log('Seed completed successfully');
  console.log(`  Users: 3 (admin@santani.com / admin123, 2 regular users / user123)`);
  console.log(`  Events: 3`);
  console.log(`  Guests: 10`);
  console.log(`  Announcements: 3`);
  console.log(`  Donations: 8`);
}

main()
  .catch((e) => {
    console.error('Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

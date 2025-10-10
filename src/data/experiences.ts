import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    jobTitle: 'Senior Data Engineer',
    company: 'Capital One - Regulatory Data Pipelines Team',
    startDate: 'August 2022',
    endDate: 'Present',
    description: 'Replaced third-party software with in-house data pipelines using Python, PySpark, Spark, Snowflake, and AWS, saving $2M annually.',
  },
  {
    jobTitle: 'Software Engineer',
    company: 'Capital One - Finance Monitoring Application Team',
    startDate: 'February 2022',
    endDate: 'August 2022',
    description: 'Built Python Lambda functions to monitor data arrivals in data lakes with timely notifications via SNS.',
  },
  {
    jobTitle: 'Full-Stack Developer',
    company: 'Capital One - Marketing Navigator Application Team',
    startDate: 'August 2020',
    endDate: 'February 2022',
    description: 'Engineered an email fulfillment microservice sending over 1M emails daily. Built a Kafka-based feedback system handling 40M messages/day to track customer interactions.',
  },
];

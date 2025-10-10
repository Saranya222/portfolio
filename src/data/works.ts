import { Work } from '@/types';

export const works: Work[] = [
  {
    id: 1,
    title: 'Regulatory Data Platform',
    category: 'Data Engineering',
    thumbnailUrl: '/images/works/data_pipeline_main.png',
    description: 'Led the development of in-house data pipelines that delivered critical regulatory data for analysis. They replaced costly third-party software, saving $2M annually. The data pipelines use technologies like PySpark, Python, Hadoop, Pandas, AWS Glue, AWS S3, and much more. These data piplines handle billions of records and very large amount of data. ',
    publishedAt: '01 July 2022',
    images: [],
    previewUrl: 'https://pofology.bdlancers.com/',
    featureList: [
      'Replaced third-party software with in-house data pipelines using Python, PySpark, Snowflake, Spark, AWS, and more, saving $2 million annually',
      'Optimized data storage and data retrieval, improving performance from 12 hours to 5 hours',
      'Led migration to a new pipeline orchestration tool, independently designing and integrating it with existing infrastructure. Established best practices while leading the team in execution',
      `Mentored two entry-level engineers by providing guidance, conducting code reviews, assigning work based on interest and experience, and offering support in their professional development outside of their technical scope`,
      'Contributed significantly to design discussions and played a pivotal role in shaping the application during its initial stages by developing proof of concepts and offering best practices',
    ],
    githubLink: 'https://github.com/',
    skills:['Python', 'PySpark', 'Apache Spark', 'AWS Glue', 'SQL', 'Scala', 'Pandas', 'NumPy', 'Snowflake', 'DataLakes', 'DataBricks', 'S3', 'EC2', 'ECS', 'ALB', 'SNS', 'CloudWatch', 'Jenkins', 'Build scripts', 'GIT'],
    attributes: [
      {
        name: 'Company',
        value: 'Capital One',
      },
      {
        name: 'Category',
        value: 'Data Engineering',
      },
      {
        name: 'Skills',
        value: 'Python, PySpark, Apache Spark, AWS Glue, SQL, Scala, Pandas, NumPy, Snowflake, DataBricks, S3, EC2, ECS, ALB, SNS, CloudWatch, Jenkins, Build scripts, GIT',
      }
    ],
  },

  {
    id: 2,
    title: 'Predicting Salary in Latin America',
    category: 'Machine Learning',
    thumbnailUrl: '/images/works/tea11.webp',
    description: 'This project uses machine learning models to predict salary across 11 Latin American countries. Using economic and demographic factors such as labor force participation, fertility rates, and more, we developed predictive models using Linear Regression, FFNN, Random Forests, and K-Nearest Neighbors. The results predict salary and provide insights for policymakers and organizations.',
    publishedAt: '01 July 2022',
    images: [ '/images/works/salary_conclusion.png','/images/works/salary_project.png', '/images/works/salary_datasets.png', '/images/works/salary_process.png'],
    previewUrl: 'https://pofology.bdlancers.com/',
    featureList: [
      'We compared multiple predictive models using Linear Regression, Feed Forward Neural Networks, Decision Trees, Random Forests, and K-Nearest Neighbors.',
      'Our analysis highlights GDP per capita and labor-force participation as the strongest wage predictors.',
      'K-Nearest Neighbors achieved the highest predictive accuracy (R² = 0.80), while Random Forests offered a good balance of interpretability and generalization.',
      'The results forecast compensation trends in the region, providing actionable insights for policymakers and organizations.'
    ],
    githubLink: 'https://github.com/dkmunoz/207',
    skills:['TensorFlow', 'Keras', 'scikit-learn', 'PyTorch', 'Python', 'Pandas', 'NumPy', 'Linear Regression', 'Feed Forward Neural Network', 'Decision Tree', 'Convolutional Neural Network', 'Random Forest', 'K-Nearest Neighbors', 'Matplotlib', 'Seaborn'],
    attributes: [
      {
        name: 'Company',
        value: 'UC Berkeley',
      },
      {
        name: 'Category',
        value: 'Machine Learning',
      },
      {
        name: 'Skills',
        value: 'TensorFlow, Keras, scikit-learn, PyTorch, Python, Pandas, NumPy, Linear, Regression, Feed, Forward, Neural, Network, Decision, Tree, Convolutional, Random, Forest, K-Nearest, Neighbors, Matplotlib, Seaborn'
      }
    ],
  },
  
  {
    id: 3,
    title: 'Statistical Insights into What Drives Article Shares',
    category: 'Machine Learning',
    thumbnailUrl: '/images/works/test2222.png',
    description: 'This project analyzes what factors make an online news article popular. We applied statistical inference and linear regression models (with log-transformed target) to investigate how structural features (title length, media count…), timing (weekday vs. weekend), sentiment polarity, and content category influence article shares on social media. ',
    publishedAt: '01 July 2022',
    images: ['/images/works/articles_model.png', '/images/works/article_model_results_1.png', '/images/works/article_model_results_2.png'],
    previewUrl: 'https://pofology.bdlancers.com/',
    featureList: [
      'Analyzed the Online News Popularity dataset from UCI Machine Learning Repository to uncover what makes some articles go viral while others don`t',
      'We used linear regression models to evaluate how article features—such as weekend vs. weekday publishing, number of images/videos, content category, and overall sentiment affect the number of social media shares',      
      'We applied data wrangling to clean up inconsistent and invalid data.',
      'We looked into model diagnostics to ensure reliable results by using robust standard errors to account for heteroskedasticity and more.',
      'Our findings showed that publishing on weekends and including more media can significantly increase article shares, while factors like title length and sentiment were surprisingly less impactful.'
    ],  
    githubLink: 'https://github.com/dkmunoz/207',
    skills: ['R', 'Statistical Analysis', 'Linear Regression', 'Data Visualization', 'Data Wrangling', 'ANOVA', 'Log Transformations', 'Hypothesis Testing', 'Feature Engineering', 'Exploratory Data Analysis (EDA)'],
    attributes: [
      {
        name: 'Company',
        value: 'UC Berkeley',
      },
      {
        name: 'Category',
        value: 'Statistical Analysis',
      },
      {
        name: 'Skills',
        value: 'R, Statistical, Analysis, Linear, Regression, Data, Visualization, Wrangling, ANOVA, Log, Transformations, Hypothesis, Testing, Feature, Engineering, Exploratory, Data, Analysis, EDA'
      },
    ],
  },

  // {
  //   id: 4,
  //   title: 'Garments Management System',
  //   category: 'Web Development',
  //   thumbnailUrl: '/images/works/garments-management-system.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },

  // {
  //   id: 5,
  //   title: 'POS System & Inventory Management',
  //   category: 'Web Development',
  //   thumbnailUrl: '/images/works/point-of-sale.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 6,
  //   title: 'Multi Vendor Ecommerce System',
  //   category: 'Web Development',
  //   thumbnailUrl: '/images/works/ecommerce.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 7,
  //   title: 'Digital Ecommerce Website Design',
  //   category: 'UI/UX Design',
  //   thumbnailUrl: '/images/works/ecommerce-website-design.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 8,
  //   title: 'Digital Marketing App & Website',
  //   category: 'Mobile App',
  //   thumbnailUrl: '/images/works/digital-marketing-app.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 9,
  //   title: 'Food Delivery System & Ecommerce',
  //   category: 'Mobile App',
  //   thumbnailUrl: '/images/works/food-delivery-app.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 10,
  //   title: 'Project Management System',
  //   category: 'Web Development',
  //   thumbnailUrl: '/images/works/project-management-system.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 11,
  //   title: 'Learning Management System',
  //   category: 'Web Development',
  //   thumbnailUrl: '/images/works/learning-management-system.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 12,
  //   title: 'ERP System & Inventory Management',
  //   category: 'Web Development',
  //   thumbnailUrl: '/images/works/erp-system.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
];

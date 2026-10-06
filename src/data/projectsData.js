const projectsData = [

  // =====================================================
  // 01 - MANUFACTURING EXECUTION SYSTEM
  // =====================================================

  {
    number: "01",

    title: "Manufacturing Execution System",

    description:
      "A manufacturing application developed to manage and monitor production activities, process data, and shop-floor operations.",

    problem:
      "The manufacturing process required a centralized application to manage production activities and provide better visibility into shop-floor operations.",

    solution:
      "Developed application modules for production-related operations, data management, monitoring, and integration with manufacturing workflows.",

    technologies: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "JPA / Hibernate",
      "MySQL",
      "REST API",
      "JavaScript",
    ],

    contribution: [
      "Developed backend modules using Java and Spring Boot",
      "Created REST APIs for application modules",
      "Implemented database operations using JPA/Hibernate",
      "Developed frontend functionality using JavaScript",
      "Worked on production-related application modules",
      "Debugged and supported application issues",
    ],

    github: "#",
    live: "#",
  },


  // =====================================================
  // 02 - MASTER DATABASE MANAGEMENT
  // =====================================================

  {
    number: "02",

    title: "Master Database Management",

    description:
      "A centralized application for managing master data used across different business and application modules.",

    problem:
      "Different application modules required consistent and centralized management of master data.",

    solution:
      "Developed modules for creating, updating, maintaining, and accessing master data through centralized application services.",

    technologies: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "JPA / Hibernate",
      "SQL Server",
      "REST API",
      "JavaScript",
    ],

    contribution: [
      "Developed master data management modules",
      "Created REST APIs",
      "Implemented database operations",
      "Worked with SQL Server",
      "Implemented validation and business logic",
      "Fixed bugs and enhanced existing modules",
    ],

    github: "#",
    live: "#",
  },


  // =====================================================
  // 03 - MACHINE INSPECTION & MONITORING SYSTEM
  // =====================================================

  {
    number: "03",

    title: "Machine Inspection & Monitoring System",

    description:
      "An application designed to capture machine inspection information and monitor machine-related operational data.",

    problem:
      "Machine inspection and monitoring activities required a structured application for recording, managing, and reviewing operational information.",

    solution:
      "Developed application modules for inspection data management, monitoring, database integration, and reporting-related operations.",

    technologies: [
      "Java",
      "Spring Boot",
      "REST API",
      "JPA / Hibernate",
      "MySQL",
      "JavaScript",
      "Bootstrap",
    ],

    contribution: [
      "Developed backend services",
      "Created REST APIs",
      "Implemented inspection-related modules",
      "Integrated application with database",
      "Developed frontend functionality",
      "Worked on debugging and production support",
    ],

    github: "#",
    live: "#",
  },


  // =====================================================
  // 04 - PROJECT MANAGEMENT SYSTEM
  // =====================================================

  {
    number: "04",

    title: "Project Management System",

    description:
      "An internal project management application used to distribute development tasks, track progress, and coordinate project activities.",

    problem:
      "Development activities required centralized task assignment, progress tracking, and coordination between team members.",

    solution:
      "Worked with an internal project management system to manage tasks, track development progress, coordinate activities, and maintain project workflow.",

    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "REST API",
      "JPA / Hibernate",
      "MySQL",
      "React.js",
    ],

    contribution: [
      "Worked on task management modules",
      "Implemented backend functionality",
      "Developed and integrated REST APIs",
      "Worked with authentication and authorization",
      "Managed database operations",
      "Supported development workflow and task tracking",
    ],

    github: "#",
    live: "#",
  },


  // =====================================================
  // 05 - ORDER MANAGEMENT SYSTEM
  // =====================================================

  {
    number: "05",

    title: "Order Management System",

    description:
      "A backend-driven order processing system using Spring Boot and Kafka for event-based communication.",

    problem:
      "The system needed a reliable way to process orders and send notifications without tightly coupling different services.",

    solution:
      "Implemented an event-driven architecture where the Order Service publishes events to Kafka and the Notification Service consumes those events.",

    technologies: [
      "Java",
      "Spring Boot",
      "Kafka",
      "JPA",
      "MySQL",
    ],

    contribution: [
      "Developed REST APIs using Spring Boot",
      "Implemented Kafka producer and consumer",
      "Implemented order event processing",
      "Integrated notification service",
      "Worked with JPA and MySQL",
    ],

    github: "#",
    live: "#",
  },


  // =====================================================
  // 06 - MICROSERVICES APPLICATION
  // =====================================================

  {
    number: "06",

    title: "Microservices Application",

    description:
      "A microservices-based application with independent services communicating through REST APIs.",

    problem:
      "The application needed independent services that could be developed and maintained separately.",

    solution:
      "Designed separate Spring Boot services with REST-based communication and centralized security.",

    technologies: [
      "Java",
      "Spring Boot",
      "Microservices",
      "Spring Security",
      "REST API",
    ],

    contribution: [
      "Developed microservices",
      "Created REST APIs",
      "Implemented authentication",
      "Configured service communication",
      "Worked on debugging and integration",
    ],

    github: "#",
    live: "#",
  },


  // =====================================================
  // 07 - FULL STACK WEB APPLICATION
  // =====================================================

  {
    number: "07",

    title: "Full Stack Web Application",

    description:
      "A full-stack application combining a React frontend with a Spring Boot backend.",

    problem:
      "The application required a responsive frontend connected to a backend REST API.",

    solution:
      "Built a React-based frontend and integrated it with Spring Boot REST APIs and a relational database.",

    technologies: [
      "React",
      "JavaScript",
      "Spring Boot",
      "MySQL",
    ],

    contribution: [
      "Developed React components",
      "Created REST APIs",
      "Integrated frontend with backend",
      "Worked with database operations",
      "Implemented application functionality",
    ],

    github: "#",
    live: "#",
  },


  // =====================================================
  // 08 - JOB PORTAL
  // INDEPENDENT PROJECT
  // =====================================================

  {
    number: "08",

    title: "Job Portal",

    description:
      "An independently developed job portal built using Spring Boot microservices, React, Kafka, Docker, Jenkins, and Kubernetes.",

    problem:
      "The application required a scalable architecture for user authentication, job-related functionality, account activation, and event-driven notifications.",

    solution:
      "Designed and developed a Spring Boot microservices-based application with API Gateway, authentication, user, activation, and notification services.",

    technologies: [
      "Java",
      "Spring Boot",
      "Microservices",
      "React.js",
      "Spring Security",
      "JWT",
      "Kafka",
      "SQL Server",
      "Docker",
      "Jenkins",
      "Kubernetes",
      "AWS",
    ],

    contribution: [
      "Independently designed and developed the application",
      "Developed Spring Boot microservices",
      "Implemented API Gateway and authentication service",
      "Implemented Spring Security and JWT authentication",
      "Implemented role-based access control",
      "Implemented Kafka-based event-driven workflows",
      "Built React frontend",
      "Containerized services using Docker",
      "Configured Jenkins CI/CD pipeline",
      "Deployed services using Kubernetes",
    ],

    github: "#",
    live: "#",
  },

];

export default projectsData;
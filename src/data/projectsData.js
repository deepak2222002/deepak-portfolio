const projectsData = [
  {
    number: "01",

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

  {
    number: "02",

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
    ],

    github: "#",

    live: "#",
  },

  {
    number: "03",

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
    ],

    github: "#",

    live: "#",
  },
];

export default projectsData;
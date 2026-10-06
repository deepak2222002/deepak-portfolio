import {
  ReactFlow,
  Handle,
  Position,
  MarkerType,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import { motion } from "framer-motion";


// =====================================================
// CUSTOM TECHNOLOGY NODE
// =====================================================

function TechNode({ data }) {
  return (
    <div
      style={{
        width: "215px",
        height: "82px",
        background: "#171f2f",
        border: "1px solid #3b485d",
        borderRadius: "13px",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        gap: "14px",
        padding: "12px 18px",

        boxShadow: "0 6px 18px rgba(0,0,0,0.30)",

        transition: "all 0.2s ease",

        position: "relative",
      }}
    >

      {/* TOP */}
      <Handle
        id="top"
        type="target"
        position={Position.Top}
        style={{
          opacity: 0,
        }}
      />

      {/* BOTTOM */}
      <Handle
        id="bottom"
        type="source"
        position={Position.Bottom}
        style={{
          opacity: 0,
        }}
      />

      {/* LEFT TARGET */}
      <Handle
        id="left-target"
        type="target"
        position={Position.Left}
        style={{
          opacity: 0,
        }}
      />

      {/* LEFT SOURCE */}
      <Handle
        id="left-source"
        type="source"
        position={Position.Left}
        style={{
          opacity: 0,
        }}
      />

      {/* RIGHT TARGET */}
      <Handle
        id="right-target"
        type="target"
        position={Position.Right}
        style={{
          opacity: 0,
        }}
      />

      {/* RIGHT SOURCE */}
      <Handle
        id="right-source"
        type="source"
        position={Position.Right}
        style={{
          opacity: 0,
        }}
      />


      {/* LOGO */}
      {data.logo ? (
        <img
          src={data.logo}
          alt={data.name}
          width="48"
          height="48"
          style={{
            objectFit: "contain",
            flexShrink: 0,
          }}
        />
      ) : (
        <div
          style={{
            width: "48px",
            height: "48px",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            color: "#67c7e8",
            fontSize: "30px",

            flexShrink: 0,
          }}
        >
          <i className={data.icon}></i>
        </div>
      )}


      {/* TECHNOLOGY NAME */}
      <span
        style={{
          color: "#f8fafc",
          fontSize: "16px",
          fontWeight: "650",
          whiteSpace: "nowrap",
        }}
      >
        {data.name}
      </span>

    </div>
  );
}


// =====================================================
// ROADMAP DATA
// =====================================================

const rows = [

  // ===================================================
  // 2023
  // ===================================================

  {
    year: "2023",
    title: "CORE JAVA",
    direction: "ltr",

    technologies: [

      {
        name: "Java",
        logo:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      },

      {
        name: "OOP",
        icon: "bi bi-diagram-3-fill",
      },

      {
        name: "Collections",
        icon: "bi bi-collection-fill",
      },

      {
        name: "SQL",
        logo:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      },

      {
        name: "Git",
        logo:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      },

    ],
  },


  // ===================================================
  // 2024
  // ===================================================

  {
    year: "2024",
    title: "BACKEND DEVELOPMENT",
    direction: "rtl",

    technologies: [

      {
        name: "Spring",
        logo:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
      },

      {
        name: "Spring Boot",
        logo:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/springboot/springboot-original.svg",
      },

      {
        name: "REST API",
        icon: "bi bi-diagram-3-fill",
      },

      {
        name: "JPA / Hibernate",
        logo:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg",
      },

      {
        name: "MySQL",
        logo:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      },

    ],
  },


  // ===================================================
  // 2025
  // ===================================================

  {
    year: "2025",
    title: "SECURITY & MICROSERVICES",
    direction: "ltr",

    technologies: [

      {
        name: "Spring Security",
        logo:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
      },

      {
        name: "Microservices",
        icon: "bi bi-boxes",
      },

      {
        name: "API Gateway",
        icon: "bi bi-diagram-3-fill",
      },

      {
        name: "Apache Kafka",
        logo:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg",
      },

      {
        name: "SQL Server",
        logo:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
      },

    ],
  },


  // ===================================================
  // 2026
  // ===================================================

  {
    year: "2026",
    title: "FULL STACK & DEVOPS",
    direction: "rtl",

    technologies: [

      {
        name: "React.js",
        logo:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },

      {
        name: "Docker",
        logo:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      },

      {
        name: "Jenkins",
        logo:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
      },

      {
        name: "CI/CD",
        icon: "bi bi-arrow-repeat",
      },

      {
        name: "Kubernetes",
        logo:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
      },

      {
        name: "AWS",
        logo:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },

    ],
  },


  // ===================================================
  // NEXT
  // ===================================================

  {
    year: "NEXT",
    title: "SYSTEM DESIGN",
    direction: "ltr",

    technologies: [

      {
        name: "System Design",
        icon: "bi bi-diagram-3-fill",
      },

      {
        name: "Distributed Systems",
        icon: "bi bi-diagram-2-fill",
      },

      {
        name: "Scalability",
        icon: "bi bi-bar-chart-line-fill",
      },

      {
        name: "Caching",
        icon: "bi bi-lightning-fill",
      },

    ],
  },

];


// =====================================================
// CREATE NODES
// =====================================================

const nodes = [];

const startX = 35;
const gapX = 255;

const rowHeight = 165;
const startY = 40;


rows.forEach((row, rowIndex) => {

  const y = startY + rowIndex * rowHeight;

  row.technologies.forEach((tech, techIndex) => {

    const x = startX + techIndex * gapX;

    nodes.push({
      id: `${rowIndex}-${techIndex}`,

      position: {
        x,
        y,
      },

      type: "tech",

      data: tech,

      draggable: false,
    });

  });

});


// =====================================================
// CREATE EDGES
// =====================================================

const edges = [];


rows.forEach((row, rowIndex) => {

  // ===================================================
  // TECHNOLOGY → TECHNOLOGY
  // ===================================================

  for (
    let i = 0;
    i < row.technologies.length - 1;
    i++
  ) {

    let sourceIndex;
    let targetIndex;


    // LEFT → RIGHT
    if (row.direction === "ltr") {

      sourceIndex = i;
      targetIndex = i + 1;

      edges.push({
        id: `row-${rowIndex}-${i}`,

        source: `${rowIndex}-${sourceIndex}`,
        target: `${rowIndex}-${targetIndex}`,

        sourceHandle: "right-source",
        targetHandle: "left-target",

        type: "smoothstep",

        style: {
          stroke: "#4da3d8",
          strokeWidth: 2.5,
        },

        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: "#4da3d8",
          width: 18,
          height: 18,
        },
      });

    }


    // RIGHT → LEFT
    else {

      sourceIndex = i + 1;
      targetIndex = i;

      edges.push({
        id: `row-${rowIndex}-${i}`,

        source: `${rowIndex}-${sourceIndex}`,
        target: `${rowIndex}-${targetIndex}`,

        sourceHandle: "left-source",
        targetHandle: "right-target",

        type: "smoothstep",

        style: {
          stroke: "#4da3d8",
          strokeWidth: 2.5,
        },

        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: "#4da3d8",
          width: 18,
          height: 18,
        },
      });

    }

  }


  // ===================================================
  // CONNECT CURRENT ROW → NEXT ROW
  // ===================================================

  if (rowIndex < rows.length - 1) {

    const currentLastIndex =
      row.direction === "ltr"
        ? row.technologies.length - 1
        : 0;


    const nextRow = rows[rowIndex + 1];


    const nextFirstIndex =
      nextRow.direction === "ltr"
        ? 0
        : nextRow.technologies.length - 1;


    edges.push({

      id: `vertical-${rowIndex}`,

      source: `${rowIndex}-${currentLastIndex}`,

      target: `${rowIndex + 1}-${nextFirstIndex}`,

      sourceHandle: "bottom",

      targetHandle: "top",

      type: "smoothstep",

      style: {
        stroke: "#4da3d8",
        strokeWidth: 2.5,
      },

      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: "#4da3d8",
        width: 18,
        height: 18,
      },

    });

  }

});


// =====================================================
// NODE TYPES
// =====================================================

const nodeTypes = {
  tech: TechNode,
};


// =====================================================
// JOURNEY COMPONENT
// =====================================================

function Journey() {

  return (

    <section
      id="journey"
      className="py-5"
      style={{
        backgroundColor: "#0f172a",
      }}
    >

      <div className="container-fluid px-3 px-lg-4">


        {/* =================================================
            HEADING
        ================================================= */}

        <motion.div
          className="text-center mb-4"

          initial={{
            opacity: 0,
            y: 25,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.6,
          }}
        >

          <p
            className="fw-semibold text-uppercase mb-2"
            style={{
              color: "#67c7e8",
              letterSpacing: "2px",
            }}
          >
            My Technical Journey
          </p>


          <h2 className="display-4 fw-bold text-light mb-2">
            Java Full Stack Developer Roadmap
          </h2>


          <p className="text-secondary mb-0">
            From Core Java to System Design
          </p>

        </motion.div>


        {/* =================================================
            ROADMAP
        ================================================= */}

        <div
          style={{
            width: "100%",
            maxWidth: "1450px",
            height: "900px",
            margin: "0 auto",
            background: "transparent",
            borderRadius: "15px",
          }}
        >

          <ReactFlow

            nodes={nodes}

            edges={edges}

            nodeTypes={nodeTypes}


            /* -----------------------------
               VIEW
            ----------------------------- */

            fitView

            fitViewOptions={{
              padding: 0.06,
              minZoom: 0.65,
              maxZoom: 1.25,
            }}


            /* -----------------------------
               DISABLE EDITING
            ----------------------------- */

            nodesDraggable={false}

            nodesConnectable={false}

            elementsSelectable={false}


            /* -----------------------------
               DISABLE ZOOM / PAN
            ----------------------------- */

            zoomOnScroll={false}

            zoomOnPinch={false}

            panOnScroll={false}

            panOnDrag={false}


            /* -----------------------------
               HIDE REACT FLOW BRANDING
            ----------------------------- */

            proOptions={{
              hideAttribution: true,
            }}

          />

        </div>

      </div>

    </section>

  );
}


export default Journey;
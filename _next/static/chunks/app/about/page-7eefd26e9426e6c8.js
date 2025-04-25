(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [301],
  {
    4414: function (e, s, i) {
      Promise.resolve().then(i.bind(i, 5959));
    },
    5959: function (e, s, i) {
      "use strict";
      i.d(s, {
        default: function () {
          return m;
        },
      });
      var a = i(7437),
        t = i(19),
        l = i(2265),
        r = i(9582),
        n = (e) => {
          let { item: s } = e,
            i = (0, l.useRef)();
          return (
            (0, t.V)(
              () => {
                r.ZP.from(i.current, {
                  y: "100%",
                  skewY: 7,
                  opacity: 0,
                  duration: 0.6,
                  ease: "power3",
                  scrollTrigger: {
                    trigger: i.current,
                    start: "top+=200 bottom",
                  },
                });
              },
              { scope: i }
            ),
            (0, a.jsxs)(
              "div",
              {
                className: "space-y-2",
                ref: i,
                children: [
                  (0, a.jsxs)("div", {
                    className: "opacity-50",
                    children: ["0", s.id],
                  }),
                  (0, a.jsx)("div", { className: "w-full border-t" }),
                  (0, a.jsx)("h4", { className: "content", children: s.title }),
                  (0, a.jsx)("p", {
                    className: "text-base lg:text-xl font-light",
                    children: s.desc,
                  }),
                ],
              },
              s.id
            )
          );
        },
        c = (e) => {
          let { item: s } = e,
            i = (0, l.useRef)();
          return (
            (0, t.V)(
              () => {
                r.ZP.from(i.current, {
                  y: "100%",
                  skewY: 7,
                  opacity: 0,
                  duration: 0.6,
                  ease: "power3",
                  scrollTrigger: {
                    trigger: i.current,
                    start: "top+=200 bottom",
                  },
                });
              },
              { scope: i }
            ),
            (0, a.jsxs)("div", {
              className: "border-t py-4 lg:py-8 flex gap-6 justify-between",
              ref: i,
              children: [
                (0, a.jsx)("div", {
                  className: "content",
                  children: s.company,
                }),
                (0, a.jsx)("div", { children: s.year }),
              ],
            })
          );
        };
      let o = [
          {
            id: 1,
            title: "Website Development",
            desc: "I build fast, modern websites with clean code and optimised performance across all browsers and devices.",
          },
          {
            id: 2,
            title: "CMS Integration",
            desc: "I develop and customise WordPress and Shopify sites, giving businesses control over their content with intuitive backends.",
          },
          {
            id: 3,
            title: "UI/UX Design",
            desc: "I design visually engaging, user-friendly interfaces that balance aesthetics with usability for stronger customer engagement.",
          },
          {
            id: 4,
            title: "SEO & Performance",
            desc: "I implement SEO best practices and performance enhancements to ensure better visibility, faster load times, and higher rankings.",
          },
          {
            id: 5,
            title: "AI-Powered Solutions",
            desc: "I integrate AI tools and workflows to streamline business operations, automate support, and personalise user experiences.",
          },
          {
            id: 6,
            title: "Technical Consulting",
            desc: "I advise brands on scalable tech solutions, helping them stay competitive through digital transformation and smart automation.",
          },
        ],
        d = [
          { id: 1, company: "Groe Global - AI Specialist & Website Developer", year: 2024 },
          {
            id: 2,
            company: "Shadow Luminous - Senior Website Developer",
            year: 2022,
          },
          { id: 3, company: "Vodacom - Website Developer & Digital Marketer", year: 2022 },
          { id: 4, company: "Walit - Website Developer", year: 2021 },
          { id: 5, company: "Ignition - L3 Technical Support", year: 2021 },
        ];
      var m = () => {
        let e = (0, l.useRef)(),
          s = (0, l.useRef)();
        return (
          (0, t.V)(
            () => {
              let e = document.body.classList.contains("loaded");
              r.ZP.timeline()
                .from(".small-title span", {
                  opacity: 0,
                  skewY: 7,
                  y: "100%",
                  duration: 0.6,
                  ease: "power3",
                  delay: e ? 0 : 2.5,
                })
                .from(
                  ".big-title span",
                  {
                    opacity: 0,
                    skewY: 7,
                    y: "50%",
                    duration: 0.4,
                    ease: "power3",
                  },
                  "-=0.2"
                )
                .from(
                  ".content",
                  {
                    opacity: 0,
                    skewY: 2,
                    y: "10%",
                    duration: 0.6,
                    ease: "power3",
                  },
                  "-=0.3"
                )
                .from(
                  ".content-small",
                  {
                    opacity: 0,
                    skewY: 2,
                    y: "10%",
                    duration: 0.6,
                    ease: "power3",
                  },
                  "-=0.3"
                )
                .from(
                  ".aboutImgContainer",
                  {
                    opacity: 0,
                    skewY: 2,
                    y: "5%",
                    duration: 0.6,
                    ease: "power3",
                  },
                  "-=0.5"
                ),
                r.ZP.timeline({
                  scrollTrigger: {
                    trigger: ".single-about-image",
                    start: "15% 100%",
                    end: "100% 0%",
                    scrub: 0,
                  },
                });
            },
            { scope: e }
          ),
          (0, t.V)(
            () => {
              r.ZP.from(".small-title span", {
                opacity: 0,
                skewY: 7,
                y: "100%",
                duration: 0.6,
                ease: "power3",
                delay: 0.2,
                scrollTrigger: { trigger: s.current, start: "clamp(top 60%)" },
              }),
                r.ZP.from(".skills", {
                  y: "100%",
                  skewY: 7,
                  opacity: 0,
                  duration: 0.6,
                  ease: "power3",
                  scrollTrigger: {
                    trigger: ".skills",
                    start: "top+=200 bottom",
                  },
                });
            },
            { scope: s }
          ),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("section", {
                className:
                  "pt-[var(--section-lg-padding)] pb-[var(--section-padding)] bg-[url('./../images/bg.png')] bg-center bg-repeat",
                ref: e,
                children: (0, a.jsxs)("div", {
                  className: "container",
                  children: [
                    (0, a.jsx)("div", {
                      className: "small-title",
                      children: (0, a.jsx)("span", {
                        className: "inline-block",
                        children: "ABOUT ME",
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "text-[calc(clamp(3rem,1.385rem+6.8906vw,8rem)*0.75)] leading-none font-light mb-10 lg:mb-32 big-title",
                      children: (0, a.jsx)("span", {
                        className: "inline-block",
                        children: "Innovating at the Intersection of Technology and Imagination",
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: "grid lg:grid-cols-5 gap-8",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "lg:col-span-2",
                          children: [
                            (0, a.jsx)("p", {
                              className: "content",
                              children:
                                "My journey has been shaped by a deep passion for both technology and creativity, allowing me to craft websites that not only perform at the highest level but also offer seamless, engaging user experiences. I approach every project with an eye for design, a focus on functionality, and a commitment to building meaningful digital touchpoints that leave a lasting impression. Collaborating with businesses of all sizes, from agile startups to established global enterprises, has exposed me to diverse challenges, industries, and goals. This breadth of experience has sharpened my ability to deliver tailored tech solutions that align with each company’s vision, values, and long-term strategy. I thrive in dynamic, fast-paced environments where innovation, adaptability, and growth are at the core, and I’m always eager to explore new technologies that push boundaries and unlock real business value.",
                            }),
                            (0, a.jsx)("p", {
                              className:
                                "text-xl mt-4 opacity-45 content-small",
                              children: "Endlessly evolving...",
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: "lg:col-span-3",
                          children: (0, a.jsx)("div", {
                            className: "aboutImgContainer",
                            children: (0, a.jsx)("div", {
                              className: "single-about-image",
                              children: (0, a.jsx)("div", {
                                className: "overlayImg",
                                "data-scroll": !0,
                                "data-scroll-speed": "-0.2",
                                "data-scroll-position": "top",
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, a.jsx)("section", {
                className: "section-padding",
                ref: s,
                children: (0, a.jsxs)("div", {
                  className: "container",
                  children: [
                    (0, a.jsx)("div", {
                      className: "small-title",
                      children: (0, a.jsx)("span", {
                        className: "inline-block",
                        children: "What I do",
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "grid grid-cols-1 lg:grid-cols-3 gap-10",
                      children: o.map((e) => (0, a.jsx)(n, { item: e }, e.id)),
                    }),
                    (0, a.jsxs)("div", {
                      className: "space-y-2 mt-24 skills",
                      children: [
                        (0, a.jsx)("div", {
                          className: "font-light",
                          children: "TECHNICAL SKILLS",
                        }),
                        (0, a.jsx)("div", {
                          className: "content",
                          children:
                            "AI Workflow Automation (Zapier, Make) | AI Sales Flows | AI Chatbots | Conversational AI | API Integrations | Prompt Engineering | HTML | CSS | JavaScript | PHP | Java | TypeScript | Bootstrap | C++ | C# | .NET | jQuery | Node.js | Express.js | React | Vue.js | AngularJS | MongoDB | MySQL | Git | CMS | WordPress | Shopify | UI/UX | Webflow | Figma | SEO | CRM | App Development | Game Development | Google Ads | Facebook/Instagram Ads | LinkedIn Ads | TikTok Ads | Social Media Management | Graphic Designing | Video Editing | L3 Technical Support | Frontend | Backend | Full-Stack | Adobe Creative Suite | Microsoft Office | English – Native Language",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, a.jsx)("section", {
                className:
                  "section-padding bg-[var(--dark)] text-[var(--foreground)] dark:text-[var(--background)]",
                children: (0, a.jsxs)("div", {
                  className: "container",
                  children: [
                    (0, a.jsx)("div", {
                      className: "small-title",
                      children: (0, a.jsx)("span", {
                        className: "inline-block",
                        children: "MY EXPERIENCE",
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "grid lg:grid-cols-5 gap-8 lg:gap-12 mt-8 lg:mt-16",
                      children: [
                        (0, a.jsx)("div", {
                          className: "lg:col-span-2",
                          children: (0, a.jsx)("div", {
                            className: "aboutImgContainer",
                            children: (0, a.jsx)("div", {
                              className:
                                "single-about-image single-about-image2",
                              children: (0, a.jsx)("div", {
                                className: "overlayImg",
                                "data-scroll": !0,
                                "data-scroll-speed": "-0.2",
                                "data-scroll-position": "top",
                              }),
                            }),
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: "lg:col-span-3",
                          children: d.map((e) =>
                            (0, a.jsx)(c, { item: e }, e.id)
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      };
    },
  },
  function (e) {
    e.O(0, [922, 19, 971, 23, 744], function () {
      return e((e.s = 4414));
    }),
      (_N_E = e.O());
  },
]);

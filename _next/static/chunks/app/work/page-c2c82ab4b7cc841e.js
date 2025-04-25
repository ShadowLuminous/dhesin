(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [534],
  {
    445: function (A, e, t) {
      Promise.resolve().then(t.bind(t, 2714));
    },
    281: function (A, e, t) {
      "use strict";
      var s = t(7437),
        E = t(19),
        i = t(6648),
        a = t(2265),
        B = t(9582),
        r = t(7138);
      e.Z = (A) => {
        let { work: e } = A,
          t = (0, a.useRef)(),
          o = (0, a.useRef)(),
          g = (0, a.useRef)();
        return (
          (0, E.V)(
            () => {
              B.ZP.from(t.current, {
                y: 50,
                skewY: 7,
                opacity: 0,
                duration: 0.6,
                ease: "power3",
                scrollTrigger: { trigger: t.current, start: "top+=200 bottom" },
              });
            },
            { scope: t }
          ),
          (0, a.useEffect)(() => {
            let A = g.current,
              e = (e) => {
                B.ZP.to(o.current, {
                  scale: 1,
                  opacity: 1,
                  duration: 0.2,
                  delay: 0.1,
                  ease: "power2",
                });
                let t = (e) => {
                  let t = A.getBoundingClientRect(),
                    s = e.clientX - t.left,
                    E = e.clientY - t.top;
                  B.ZP.to(o.current, {
                    x: s - o.current.clientWidth / 2,
                    y: E - o.current.clientHeight / 2,
                    duration: 0.3,
                    ease: "power2",
                  });
                };
                A.addEventListener("mousemove", t),
                  A.addEventListener("mouseleave", () => {
                    B.ZP.to(o.current, {
                      scale: 0,
                      opacity: 0,
                      duration: 0.2,
                      delay: 0.1,
                      ease: "power2.out",
                    }),
                      A && A.removeEventListener("mousemove", t);
                  });
              };
            return (
              A && A.addEventListener("mouseenter", e),
              () => {
                A && A.removeEventListener("mouseenter", e);
              }
            );
          }, []),
          (0, s.jsx)("div", {
            className: "".concat(
              e.id % 2 ? "" : "lg:-translate-y-52",
              " relative workCard"
            ),
            ref: t,
            children: (0, s.jsxs)(r.default, {
              href: e.url,
              target: "_blank",
              referrerPolicy: "no-referrer",
              className: "block",
              children: [
                (0, s.jsx)("div", {
                  className:
                    "font-roboto font-extrabold uppercase text-sm w-28 aspect-square bg-[#3d5aff] flex items-center justify-center rounded-full text-white scale-0 absolute opacity-0 pointer-events-none z-10",
                  ref: o,
                  children: "View",
                }),
                (0, s.jsx)(i.default, {
                  src: e.img,
                  width: 1e3,
                  height: 750,
                  alt: e.title,
                  priority: !0,
                  ref: g,
                }),
                (0, s.jsxs)("div", {
                  className: "flex items-center justify-between mt-2 text-xl",
                  children: [
                    (0, s.jsx)("div", {
                      className: "uppercase font-oswald",
                      children: e.title,
                    }),
                    (0, s.jsx)("div", {
                      className: "italic opacity-50",
                      children: e.type,
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
    },
    2714: function (A, e, t) {
      "use strict";
      t.d(e, {
        default: function () {
          return c;
        },
      });
      var s = t(7437),
        E = t(281),
        i = t(19),
        a = t(9582),
        B = t(2265),
        r = t(8593),
        o = t(2142),
        g = t(3927),
        Q = t(1457);
      let l = [
        {
          id: 1,
          title: "Chalo Chalein",
          type: "- Travel Blog",
          img: r.Z,
          url: "https://chalo-chalein.vercel.app",
        },
        {
          id: 2,
          title: "LinkLite",
          type: "- URL Shortner",
          img: o.Z,
          url: "https://urlshortener-client.vercel.app/",
        },
        {
          id: 3,
          title: "Havahavai",
          type: "- Weather Application",
          img: g.Z,
          url: "https://havahavai.vercel.app/",
        },
        {
          id: 4,
          title: "QuoteHub",
          type: "- Quote blog",
          img: Q.Z,
          url: "https://quote-client.supasell.co.za/",
        },
        {
          id: 5,
          title: "GCCPL",
          type: "- Pharmaceutical",
          img: {
            src: "/_next/static/media/work5.14a5e758.jpg",
            height: 750,
            width: 1e3,
            blurDataURL:
              "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAABoCh//8QAFhAAAwAAAAAAAAAAAAAAAAAAAhIT/9oACAEBAAEFAis//8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8Bj//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECAQE/AY//xAAYEAACAwAAAAAAAAAAAAAAAAAAIQIRUf/aAAgBAQAGPwJTV6f/xAAYEAACAwAAAAAAAAAAAAAAAAABMQARQf/aAAgBAQABPyEFwwsp/9oADAMBAAIAAwAAABD3/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERIf/aAAgBAwEBPxCIsP/EABYRAAMAAAAAAAAAAAAAAAAAAAABMf/aAAgBAgEBPxCmf//EABgQAQEAAwAAAAAAAAAAAAAAAAERACEx/9oACAEBAAE/ENKzNScFAmf/2Q==",
            blurWidth: 8,
            blurHeight: 6,
          },
          url: "https://www.nationagainstpneumonia.com/",
        },
        {
          id: 6,
          title: "Neume",
          type: "- Cosmetic e-commerce",
          img: {
            src: "/_next/static/media/work6.c4d83acf.jpg",
            height: 750,
            width: 1e3,
            blurDataURL:
              "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAABqRNf/8QAFhABAQEAAAAAAAAAAAAAAAAAAQAR/9oACAEBAAEFAgy//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwF//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwF//8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQAGPwJ//8QAGRAAAQUAAAAAAAAAAAAAAAAAAQARIUFR/9oACAEBAAE/IR6M2XX/2gAMAwEAAgADAAAAEAf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/EH//xAAWEQADAAAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8QiP/EABcQAQEBAQAAAAAAAAAAAAAAAAERIQD/2gAIAQEAAT8Qc1Kzeu//2Q==",
            blurWidth: 8,
            blurHeight: 6,
          },
          url: "https://neume.in/",
        },
      ];
      var c = () => {
        let A = (0, B.useRef)();
        return (
          (0, i.V)(
            () => {
              let A = document.body.classList.contains("loaded");
              a.ZP.timeline()
                .from(".small-title span", {
                  opacity: 0,
                  skewY: 7,
                  y: "100%",
                  duration: 0.6,
                  ease: "power3",
                  delay: A ? 0 : 2.5,
                })
                .from(
                  ".big-title span",
                  {
                    opacity: 0,
                    skewY: 2,
                    y: "50%",
                    duration: 0.4,
                    ease: "power3",
                  },
                  "-=0.2"
                );
            },
            { scope: A }
          ),
          (0, s.jsx)("section", {
            className:
              "pt-[var(--section-lg-padding)] pb-[var(--section-padding)] bg-[url('./../images/bg.png')] bg-center bg-repeat",
            ref: A,
            children: (0, s.jsxs)("div", {
              className: "container",
              children: [
                (0, s.jsx)("div", {
                  className: "small-title",
                  children: (0, s.jsx)("span", {
                    className: "inline-block",
                    children: "RECENT WORK",
                  }),
                }),
                (0, s.jsx)("div", {
                  className:
                    "text-[calc(clamp(3rem,1.385rem+6.8906vw,8rem)*0.75)] leading-none font-light lg:mb-40 big-title",
                  children: (0, s.jsx)("span", {
                    className: "inline-block",
                    children: "Shaping the Future of Web Solutions",
                  }),
                }),
                (0, s.jsx)("div", {
                  className:
                    "grid lg:grid-cols-2 gap-12 lg:gap-18 xl:gap-24 mt-8 lg:mt-12",
                  children: l.map((A) => (0, s.jsx)(E.Z, { work: A }, A.id)),
                }),
              ],
            }),
          })
        );
      };
    },
    8593: function (A, e) {
      "use strict";
      e.Z = {
        src: "/_next/static/media/work1.8d7148ab.jpg",
        height: 750,
        width: 1e3,
        blurDataURL:
          "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oADAMBAAIQAxAAAAGhBJ//xAAVEAEBAAAAAAAAAAAAAAAAAAABAv/aAAgBAQABBQJhX//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/AY//xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAgEBPwFb/8QAGBAAAgMAAAAAAAAAAAAAAAAAAREAEkH/2gAIAQEABj8CdysE/8QAFxAAAwEAAAAAAAAAAAAAAAAAABEhUf/aAAgBAQABPyF/4CH/2gAMAwEAAgADAAAAEAv/xAAWEQEBAQAAAAAAAAAAAAAAAAABEQD/2gAIAQMBAT8QA27/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQIBAT8QQwL/xAAaEAEAAgMBAAAAAAAAAAAAAAABEUEAIVGB/9oACAEBAAE/EI6Uo0w9Usp8c//Z",
        blurWidth: 8,
        blurHeight: 6,
      };
    },
    2142: function (A, e) {
      "use strict";
      e.Z = {
        src: "/_next/static/media/work2.52584c7a.jpg",
        height: 750,
        width: 1e3,
        blurDataURL:
          "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAGmF//EABcQAAMBAAAAAAAAAAAAAAAAAAECBAP/2gAIAQEAAQUCabU2/wD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAaEAABBQEAAAAAAAAAAAAAAAABAAMSEzFB/9oACAEBAAY/Ag7cYnmL/8QAGRABAAIDAAAAAAAAAAAAAAAAAQARITFB/9oACAEBAAE/IcxA0Wgcn//aAAwDAQACAAMAAAAQ+//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAEDAQE/EAv/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/EH//xAAYEAEAAwEAAAAAAAAAAAAAAAABACEx4f/aAAgBAQABPxB6aR5gIUnZ/9k=",
        blurWidth: 8,
        blurHeight: 6,
      };
    },
    3927: function (A, e) {
      "use strict";
      e.Z = {
        src: "/_next/static/media/work3.9169d698.jpg",
        height: 750,
        width: 1e3,
        blurDataURL:
          "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oADAMBAAIQAxAAAAG4A//EABYQAAMAAAAAAAAAAAAAAAAAAAMSE//aAAgBAQABBQJCU//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABgQAAIDAAAAAAAAAAAAAAAAAAASESIx/9oACAEBAAY/Ames4f/EABgQAAIDAAAAAAAAAAAAAAAAAAEhABFR/9oACAEBAAE/IXSs0Yn/2gAMAwEAAgADAAAAEAf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/EH//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPxCv/8QAGBABAAMBAAAAAAAAAAAAAAAAAQARIUH/2gAIAQEAAT8QEDpiI6ur7P/Z",
        blurWidth: 8,
        blurHeight: 6,
      };
    },
    1457: function (A, e) {
      "use strict";
      e.Z = {
        src: "/_next/static/media/work4.f9a439ae.jpg",
        height: 750,
        width: 1e3,
        blurDataURL:
          "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGqB//EABUQAQEAAAAAAAAAAAAAAAAAAAEx/9oACAEBAAEFAqf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAY/An//xAAWEAEBAQAAAAAAAAAAAAAAAAABEQD/2gAIAQEAAT8hFJs3/9oADAMBAAIAAwAAABDz/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPxB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPxB//8QAGRAAAQUAAAAAAAAAAAAAAAAAAQARITGh/9oACAEBAAE/ELtjGNC//9k=",
        blurWidth: 8,
        blurHeight: 6,
      };
    },
  },
  function (A) {
    A.O(0, [922, 19, 138, 648, 971, 23, 744], function () {
      return A((A.s = 445));
    }),
      (_N_E = A.O());
  },
]);

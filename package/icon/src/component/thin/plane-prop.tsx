
import { Icon } from "../../index";

/**
 * A component that renders the `plane-prop` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane-prop?s=thin plane-prop}
 * @preview ![plane-prop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjY5LjUgMGMtMTEuNyAwLTIxLjcgOC40LTIzLjcgMjBsLTYuMiAzNkwyMjQgNTZjLTIyLjEgMC00MCAxNy45LTQwIDQwczE3LjkgNDAgNDAgNDBsMiAwLTguOSA1Mi4xTDEzNS4yIDE5OWwtMTQtNTguN2MtMS43LTcuMi04LjItMTIuMy0xNS42LTEyLjNsLTM1LjMgMGMtNy41IDAtMTQgNS4yLTE1LjYgMTIuNUwzOC43IDIxMS44YzAgMCAwIDAgMCAwQzE2LjUgMjE0LjggMCAyMzMuNyAwIDI1NnMxNi41IDQxLjIgMzguNyA0NC4yYzAgMCAwIDAgMCAwbDE2LjEgNzEuNGMxLjYgNy4zIDguMSAxMi41IDE1LjYgMTIuNWwzNS4zIDBjNy40IDAgMTMuOC01LjEgMTUuNi0xMi4zbDE0LTU4LjcgODEuOSAxMC45TDIyNiAzNzZsLTIgMGMtMjIuMSAwLTQwIDE3LjktNDAgNDBzMTcuOSA0MCA0MCA0MGwxNS43IDAgNi4yIDM2YzIgMTEuNSAxMiAyMCAyMy43IDIwbDM3IDBjMTEuNyAwIDIxLjctOC40IDIzLjctMjBsNi4yLTM2IDQ3LjcgMCAwIDE2YzAgNC40IDMuNiA4IDggOHM4LTMuNiA4LThsMC00OCA4IDBjNC40IDAgOC0zLjYgOC04cy0zLjYtOC04LThsLTggMCAwLTQ4YzAtNC40LTMuNi04LTgtOHMtOCAzLjYtOCA4bDAgMTYtMzQgMCA4LjItNDggMTE2LjEgMGMxOC44IDAgNDMuNi03LjYgNjMuOC0xOS42QzU1Ny44IDI5Ni41IDU3NiAyNzguNSA1NzYgMjU2YzAtMTEuMS00LjctMjEuMi0xMS42LTI5LjhzLTE2LjItMTYuMS0yNi4zLTIyLjJjLTIwLjEtMTIuMi00NC45LTIwLTYzLjgtMjBsLTExNi4xIDBMMzUwIDEzNmwzNCAwIDAgMTZjMCA0LjQgMy42IDggOCA4czgtMy42IDgtOGwwLTQ4IDggMGM0LjQgMCA4LTMuNiA4LThzLTMuNi04LTgtOGwtOCAwIDAtNDhjMC00LjQtMy42LTgtOC04cy04IDMuNi04IDhsMCAxNi00Ny43IDAtNi4yLTM2Yy0yLTExLjUtMTItMjAtMjMuNy0yMGwtMzcgMHptNjkuNiA3MkwzODQgNzJsMCA0OC0zNi43IDAtOC4yLTQ4ek0yMzYuOSA3MmwtOC4yIDQ4LTQuNyAwYy0xMy4zIDAtMjQtMTAuNy0yNC0yNHMxMC43LTI0IDI0LTI0bDEyLjkgMHpNMzM5LjEgNDQwbDguMi00OCAzNi43IDAgMCA0OC00NC45IDB6TTIyOC43IDM5Mmw4LjIgNDhMMjI0IDQ0MGMtMTMuMyAwLTI0LTEwLjctMjQtMjRzMTAuNy0yNCAyNC0yNGw0LjcgMHpNMzQyIDE4NGwtOTQgMGMtLjQgMC0uNyAwLTEuMSAuMWwtMTMuMiAxLjhMMjYxLjYgMjIuN2MuNy0zLjggNC02LjcgNy45LTYuN2wzNyAwYzMuOSAwIDcuMiAyLjggNy45IDYuN0wzNDIgMTg0em0wIDE0NEwzMTQuNCA0ODkuM2MtLjcgMy44LTQgNi43LTcuOSA2LjdsLTM3IDBjLTMuOSAwLTcuMi0yLjgtNy45LTYuN0wyMzMuNyAzMjYuMmwxMy4yIDEuOGMuNCAwIC43IC4xIDEuMSAuMWw5NCAwek03MC40IDE0NGwzNS4zIDAgMTUuNyA2NS43YzEgNCA0LjggNi42IDguOCA2LjFMMjQ4LjUgMjAwbDIyNS44IDBjMTUuMyAwIDM3LjMgNi43IDU1LjUgMTcuN2M5IDUuNSAxNi43IDExLjggMjIuMSAxOC41czguMSAxMy40IDguMSAxOS44YzAgMTMuNS0xMS41IDI3LjUtMzAuMiAzOC42Yy0xOC4yIDEwLjktNDAuMiAxNy40LTU1LjUgMTcuNGwtMjI1LjggMEwxMzAuMiAyOTYuMmMtNC4xLS41LTcuOSAyLjEtOC44IDYuMUwxMDUuNyAzNjhsLTM1LjMgMEw1My4xIDI5MS4yYy0uNy0zLjMtMy40LTUuNy02LjctNi4ybC01LjYtLjdDMjYuNiAyODIuNCAxNiAyNzAuMyAxNiAyNTZzMTAuNi0yNi40IDI0LjgtMjguM2w1LjYtLjdjMy4zLS40IDYtMi45IDYuNy02LjJMNzAuNCAxNDR6Ii8+PC9zdmc+|width=32|height=32)
 */
const PlaneProp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M269.5 0c-11.7 0-21.7 8.4-23.7 20l-6.2 36L224 56c-22.1 0-40 17.9-40 40s17.9 40 40 40l2 0-8.9 52.1L135.2 199l-14-58.7c-1.7-7.2-8.2-12.3-15.6-12.3l-35.3 0c-7.5 0-14 5.2-15.6 12.5L38.7 211.8c0 0 0 0 0 0C16.5 214.8 0 233.7 0 256s16.5 41.2 38.7 44.2c0 0 0 0 0 0l16.1 71.4c1.6 7.3 8.1 12.5 15.6 12.5l35.3 0c7.4 0 13.8-5.1 15.6-12.3l14-58.7 81.9 10.9L226 376l-2 0c-22.1 0-40 17.9-40 40s17.9 40 40 40l15.7 0 6.2 36c2 11.5 12 20 23.7 20l37 0c11.7 0 21.7-8.4 23.7-20l6.2-36 47.7 0 0 16c0 4.4 3.6 8 8 8s8-3.6 8-8l0-48 8 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-8 0 0-48c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 16-34 0 8.2-48 116.1 0c18.8 0 43.6-7.6 63.8-19.6C557.8 296.5 576 278.5 576 256c0-11.1-4.7-21.2-11.6-29.8s-16.2-16.1-26.3-22.2c-20.1-12.2-44.9-20-63.8-20l-116.1 0L350 136l34 0 0 16c0 4.4 3.6 8 8 8s8-3.6 8-8l0-48 8 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-8 0 0-48c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 16-47.7 0-6.2-36c-2-11.5-12-20-23.7-20l-37 0zm69.6 72L384 72l0 48-36.7 0-8.2-48zM236.9 72l-8.2 48-4.7 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l12.9 0zM339.1 440l8.2-48 36.7 0 0 48-44.9 0zM228.7 392l8.2 48L224 440c-13.3 0-24-10.7-24-24s10.7-24 24-24l4.7 0zM342 184l-94 0c-.4 0-.7 0-1.1 .1l-13.2 1.8L261.6 22.7c.7-3.8 4-6.7 7.9-6.7l37 0c3.9 0 7.2 2.8 7.9 6.7L342 184zm0 144L314.4 489.3c-.7 3.8-4 6.7-7.9 6.7l-37 0c-3.9 0-7.2-2.8-7.9-6.7L233.7 326.2l13.2 1.8c.4 0 .7 .1 1.1 .1l94 0zM70.4 144l35.3 0 15.7 65.7c1 4 4.8 6.6 8.8 6.1L248.5 200l225.8 0c15.3 0 37.3 6.7 55.5 17.7c9 5.5 16.7 11.8 22.1 18.5s8.1 13.4 8.1 19.8c0 13.5-11.5 27.5-30.2 38.6c-18.2 10.9-40.2 17.4-55.5 17.4l-225.8 0L130.2 296.2c-4.1-.5-7.9 2.1-8.8 6.1L105.7 368l-35.3 0L53.1 291.2c-.7-3.3-3.4-5.7-6.7-6.2l-5.6-.7C26.6 282.4 16 270.3 16 256s10.6-26.4 24.8-28.3l5.6-.7c3.3-.4 6-2.9 6.7-6.2L70.4 144z" />
    </Icon>
);

export default PlaneProp;
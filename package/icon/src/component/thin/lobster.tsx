
import { Icon } from "../../index";

/**
 * A component that renders the `lobster` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lobster?s=thin lobster}
 * @preview ![lobster](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNzIgMTZDNDEuMSAxNiAxNiA0MS4xIDE2IDcybDAgNTZjMCAyNi41IDIxLjUgNDggNDggNDhzNDgtMjEuNSA0OC00OGwwLTQ4YzAtNC40IDMuNi04IDgtOHM4IDMuNiA4IDhsMCA0OGMwIDE4LjYtNy45IDM1LjQtMjAuNiA0Ny4xbDIzLjkgMjBjMTAuMSA4LjQgMjIuOCAxMyAzNS45IDEzbDE2LjggMGMwLTI2LjQgMTAuNC01MC4yIDIzLjQtNjguOWMyLjgtNCA1LjctNy44IDguNi0xMS4zTDIxNiA2NGMwLTE3LjctMTQuMy0zMi0zMi0zMmwtOCAwYy00LjQgMC04LTMuNi04LThzMy42LTggOC04bDggMGMyNi41IDAgNDggMjEuNSA0OCA0OGwwIDQ3LjNjNS44LTUuMSAxMS40LTkuMyAxNi40LTEyLjNjNC43LTIuOCAxMC41LTIuOCAxNS4xIDBjNSAzIDEwLjYgNy4xIDE2LjQgMTIuM0wyODAgNjRjMC0yNi41IDIxLjUtNDggNDgtNDhsOCAwYzQuNCAwIDggMy42IDggOHMtMy42IDgtOCA4bC04IDBjLTE3LjcgMC0zMiAxNC4zLTMyIDMybDAgNjMuOGMzIDMuNiA1LjkgNy4zIDguNiAxMS4zYzEzIDE4LjcgMjMuNCA0Mi41IDIzLjQgNjguOWwxNi44IDBjMTMuMSAwIDI1LjgtNC42IDM1LjgtMTNsMjMuOS0yMEMzOTEuOSAxNjMuNCAzODQgMTQ2LjYgMzg0IDEyOGwwLTQ4YzAtNC40IDMuNi04IDgtOHM4IDMuNiA4IDhsMCA0OGMwIDI2LjUgMjEuNSA0OCA0OCA0OHM0OC0yMS41IDQ4LTQ4bDAtNTZjMC0zMC45LTI1LjEtNTYtNTYtNTZsLTUuOSAwIDIxLjcgOTQuMmMxIDQuMy0xLjcgOC42LTYgOS42cy04LjYtMS43LTkuNi02bC0yNC0xMDRjLS41LTIuNCAwLTQuOSAxLjUtNi44czMuOC0zIDYuMy0zbDE2IDBjMzkuOCAwIDcyIDMyLjIgNzIgNzJsMCA1NmMwIDM1LjMtMjguNyA2NC02NCA2NGMtMTAuOCAwLTIwLjktMi43LTI5LjktNy40bC0yNy4yIDIyLjdDMzc4IDIxOC4xIDM2MS43IDIyNCAzNDQuOCAyMjRMMzI4IDIyNGwwIDMyIDQwLjkgMGM4LjcgMCAxNy4zLTIgMjUtNS45bDM0LjUtMTcuMmM0LTIgOC44LS40IDEwLjcgMy42cy40IDguOC0zLjYgMTAuN2wtMzQuNSAxNy4yYy0xMCA1LTIxIDcuNi0zMi4yIDcuNkwzMjggMjcybDAgMzIgNTkuNyAwYzcuMSAwIDE0LjItMS40IDIwLjgtNEw0MzcgMjg4LjZjNC4xLTEuNiA4LjggLjQgMTAuNCA0LjVzLS40IDguOC00LjUgMTAuNGwtMjguNiAxMS40Yy04LjUgMy40LTE3LjYgNS4xLTI2LjcgNS4xTDMyOCAzMjBsMCAzMiA0LjYgMGMxNC4yIDAgMjguMSA0LjIgMzkuOSAxMi4xbDcuOSA1LjNjMy43IDIuNSA0LjcgNy40IDIuMiAxMS4xcy03LjQgNC43LTExLjEgMi4ybC03LjktNS4zYy05LjItNi4xLTIwLTkuNC0zMS4xLTkuNGwtNi41IDAtMTkuMyA3Mi41YzI1LjYgMy43IDQ1LjIgMjUuNyA0NS4yIDUyLjNjMCAxMC42LTguNiAxOS4yLTE5LjIgMTkuMmwtMTUzLjYgMGMtMTAuNiAwLTE5LjItOC42LTE5LjItMTkuMmMwLTI2LjYgMTkuNi00OC42IDQ1LjItNTIuM0wxODUuOSAzNjhsLTYuNSAwYy0xMS4xIDAtMjEuOSAzLjMtMzEuMSA5LjRsLTcuOSA1LjNjLTMuNyAyLjUtOC42IDEuNS0xMS4xLTIuMnMtMS41LTguNiAyLjItMTEuMWw3LjktNS4zYzExLjgtNy45IDI1LjctMTIuMSAzOS45LTEyLjFsNC42IDAgMC0zMi01OS43IDBjLTkuMiAwLTE4LjItMS43LTI2LjctNS4xTDY5IDMwMy40Yy00LjEtMS42LTYuMS02LjMtNC41LTEwLjRzNi4zLTYuMSAxMC40LTQuNUwxMDMuNSAzMDBjNi42IDIuNiAxMy43IDQgMjAuOCA0bDU5LjcgMCAwLTMyLTQwLjkgMGMtMTEuMiAwLTIyLjItMi42LTMyLjItNy42TDc2LjQgMjQ3LjJjLTQtMi01LjYtNi44LTMuNi0xMC43czYuOC01LjYgMTAuNy0zLjZsMzQuNSAxNy4yYzcuOCAzLjkgMTYuNCA1LjkgMjUgNS45bDQwLjkgMCAwLTMyLTE2LjggMGMtMTYuOCAwLTMzLjItNS45LTQ2LjEtMTYuN0w5My45IDE4NC42Qzg0LjkgMTg5LjMgNzQuOCAxOTIgNjQgMTkyYy0zNS4zIDAtNjQtMjguNy02NC02NEwwIDcyQzAgMzIuMiAzMi4yIDAgNzIgMEw4OCAwYzIuNCAwIDQuNyAxLjEgNi4zIDNzMi4xIDQuNCAxLjUgNi44bC0yNCAxMDRjLTEgNC4zLTUuMyA3LTkuNiA2cy03LTUuMy02LTkuNkw3Ny45IDE2IDcyIDE2ek0yMDAgMjE2bDAgNDggMCAzMy44IDI2LjkgNi43YzE5LjEgNC44IDM5LjEgNC44IDU4LjIgMGwyNi45LTYuNyAwLTMzLjggMC00OCAwLThjMC0yMi4yLTguOC00Mi44LTIwLjUtNTkuOGMtMTEuNS0xNi42LTI1LjUtMjktMzUuNS0zNS4xYy0xMCA2LjEtMjMuOSAxOC41LTM1LjUgMzUuMUMyMDguOCAxNjUuMiAyMDAgMTg1LjggMjAwIDIwOGwwIDh6bTAgMTI5LjhsMjYuOSA2LjdjMTkuMSA0LjggMzkuMSA0LjggNTguMiAwbDI2LjktNi43IDAtMzEuNUwyODkgMzIwYy0yMS43IDUuNC00NC4zIDUuNC02NiAwbC0yMy01LjggMCAzMS41em0uOSAxNi43bDguNSAzMS45IDEzLjYgMy45YzIxLjUgNi4yIDQ0LjQgNi4yIDY1LjkgMGwxMy42LTMuOSA4LjUtMzEuOUwyODkgMzY4Yy0yMS43IDUuNC00NC4zIDUuNC02NiAwbC0yMi4xLTUuNXptMjIuMyA4My41Yy42IDIuNCAuMSA1LTEuNCA2LjlzLTMuOSAzLjEtNi4zIDMuMWwtMi43IDBjLTIwLjMgMC0zNi44IDE2LjUtMzYuOCAzNi44YzAgMS44IDEuNCAzLjIgMy4yIDMuMmwxNTMuNiAwYzEuOCAwIDMuMi0xLjQgMy4yLTMuMmMwLTIwLjMtMTYuNS0zNi44LTM2LjgtMzYuOGwtMi43IDBjLTIuNSAwLTQuOC0xLjItNi4zLTMuMXMtMi00LjUtMS40LTYuOWw4LjktMzMuNS00LjQgMS4zYy0yNC40IDctNTAuMyA3LTc0LjcgMGwtNC40LTEuMyA4LjkgMzMuNXoiLz48L3N2Zz4=|width=32|height=32)
 */
const Lobster: typeof Icon = x => (
    <Icon {...x}>
        <path d="M72 16C41.1 16 16 41.1 16 72l0 56c0 26.5 21.5 48 48 48s48-21.5 48-48l0-48c0-4.4 3.6-8 8-8s8 3.6 8 8l0 48c0 18.6-7.9 35.4-20.6 47.1l23.9 20c10.1 8.4 22.8 13 35.9 13l16.8 0c0-26.4 10.4-50.2 23.4-68.9c2.8-4 5.7-7.8 8.6-11.3L216 64c0-17.7-14.3-32-32-32l-8 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l8 0c26.5 0 48 21.5 48 48l0 47.3c5.8-5.1 11.4-9.3 16.4-12.3c4.7-2.8 10.5-2.8 15.1 0c5 3 10.6 7.1 16.4 12.3L280 64c0-26.5 21.5-48 48-48l8 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-8 0c-17.7 0-32 14.3-32 32l0 63.8c3 3.6 5.9 7.3 8.6 11.3c13 18.7 23.4 42.5 23.4 68.9l16.8 0c13.1 0 25.8-4.6 35.8-13l23.9-20C391.9 163.4 384 146.6 384 128l0-48c0-4.4 3.6-8 8-8s8 3.6 8 8l0 48c0 26.5 21.5 48 48 48s48-21.5 48-48l0-56c0-30.9-25.1-56-56-56l-5.9 0 21.7 94.2c1 4.3-1.7 8.6-6 9.6s-8.6-1.7-9.6-6l-24-104c-.5-2.4 0-4.9 1.5-6.8s3.8-3 6.3-3l16 0c39.8 0 72 32.2 72 72l0 56c0 35.3-28.7 64-64 64c-10.8 0-20.9-2.7-29.9-7.4l-27.2 22.7C378 218.1 361.7 224 344.8 224L328 224l0 32 40.9 0c8.7 0 17.3-2 25-5.9l34.5-17.2c4-2 8.8-.4 10.7 3.6s.4 8.8-3.6 10.7l-34.5 17.2c-10 5-21 7.6-32.2 7.6L328 272l0 32 59.7 0c7.1 0 14.2-1.4 20.8-4L437 288.6c4.1-1.6 8.8 .4 10.4 4.5s-.4 8.8-4.5 10.4l-28.6 11.4c-8.5 3.4-17.6 5.1-26.7 5.1L328 320l0 32 4.6 0c14.2 0 28.1 4.2 39.9 12.1l7.9 5.3c3.7 2.5 4.7 7.4 2.2 11.1s-7.4 4.7-11.1 2.2l-7.9-5.3c-9.2-6.1-20-9.4-31.1-9.4l-6.5 0-19.3 72.5c25.6 3.7 45.2 25.7 45.2 52.3c0 10.6-8.6 19.2-19.2 19.2l-153.6 0c-10.6 0-19.2-8.6-19.2-19.2c0-26.6 19.6-48.6 45.2-52.3L185.9 368l-6.5 0c-11.1 0-21.9 3.3-31.1 9.4l-7.9 5.3c-3.7 2.5-8.6 1.5-11.1-2.2s-1.5-8.6 2.2-11.1l7.9-5.3c11.8-7.9 25.7-12.1 39.9-12.1l4.6 0 0-32-59.7 0c-9.2 0-18.2-1.7-26.7-5.1L69 303.4c-4.1-1.6-6.1-6.3-4.5-10.4s6.3-6.1 10.4-4.5L103.5 300c6.6 2.6 13.7 4 20.8 4l59.7 0 0-32-40.9 0c-11.2 0-22.2-2.6-32.2-7.6L76.4 247.2c-4-2-5.6-6.8-3.6-10.7s6.8-5.6 10.7-3.6l34.5 17.2c7.8 3.9 16.4 5.9 25 5.9l40.9 0 0-32-16.8 0c-16.8 0-33.2-5.9-46.1-16.7L93.9 184.6C84.9 189.3 74.8 192 64 192c-35.3 0-64-28.7-64-64L0 72C0 32.2 32.2 0 72 0L88 0c2.4 0 4.7 1.1 6.3 3s2.1 4.4 1.5 6.8l-24 104c-1 4.3-5.3 7-9.6 6s-7-5.3-6-9.6L77.9 16 72 16zM200 216l0 48 0 33.8 26.9 6.7c19.1 4.8 39.1 4.8 58.2 0l26.9-6.7 0-33.8 0-48 0-8c0-22.2-8.8-42.8-20.5-59.8c-11.5-16.6-25.5-29-35.5-35.1c-10 6.1-23.9 18.5-35.5 35.1C208.8 165.2 200 185.8 200 208l0 8zm0 129.8l26.9 6.7c19.1 4.8 39.1 4.8 58.2 0l26.9-6.7 0-31.5L289 320c-21.7 5.4-44.3 5.4-66 0l-23-5.8 0 31.5zm.9 16.7l8.5 31.9 13.6 3.9c21.5 6.2 44.4 6.2 65.9 0l13.6-3.9 8.5-31.9L289 368c-21.7 5.4-44.3 5.4-66 0l-22.1-5.5zm22.3 83.5c.6 2.4 .1 5-1.4 6.9s-3.9 3.1-6.3 3.1l-2.7 0c-20.3 0-36.8 16.5-36.8 36.8c0 1.8 1.4 3.2 3.2 3.2l153.6 0c1.8 0 3.2-1.4 3.2-3.2c0-20.3-16.5-36.8-36.8-36.8l-2.7 0c-2.5 0-4.8-1.2-6.3-3.1s-2-4.5-1.4-6.9l8.9-33.5-4.4 1.3c-24.4 7-50.3 7-74.7 0l-4.4-1.3 8.9 33.5z" />
    </Icon>
);

export default Lobster;
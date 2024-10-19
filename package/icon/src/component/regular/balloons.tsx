
import { Icon } from "../../index";

/**
 * A component that renders the `balloons` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/balloons?s=regular balloons}
 * @preview ![balloons](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjcyIDE2MGMwLTYxLjktNTAuMS0xMTItMTEyLTExMlM0OCA5OC4xIDQ4IDE2MGMwIDMxLjYgMTUuMyA2NS4xIDM4LjIgOTYuNmMyMi41IDMwLjggNDguNyA1NC44IDYyLjQgNjYuM2M0LjQgMy43IDguMiA3LjkgMTEuNCAxMi41YzMuMi00LjYgNy04LjggMTEuNC0xMi41YzEzLjctMTEuNSAzOS45LTM1LjUgNjIuNC02Ni4zYzIzLTMxLjUgMzguMi02NSAzOC4yLTk2LjZ6TTExMiA0MDBsMTAtMjAuMWMzLjUtNi45IDEuNi0xNS4zLTQuNC0yMC4zQzg3LjIgMzM0IDAgMjUyLjUgMCAxNjBDMCA3MS42IDcxLjYgMCAxNjAgMHMxNjAgNzEuNiAxNjAgMTYwYzAgOTIuNS04Ny4yIDE3NC0xMTcuNyAxOTkuN2MtNS45IDUtNy44IDEzLjQtNC40IDIwLjNMMjA4IDQwMGwuMSAuMSAzIDYgMTEuNiAyMy4yYy45IDEuOCAxLjQgMy44IDEuNCA1LjhjMCA3LjEtNS44IDEyLjktMTIuOSAxMi45bC0yNS45IDAtNi43IDAtLjEgMC0zNi43IDAtLjEgMC02LjcgMHMwIDAgMCAwbC0yNS45IDBjLTcuMSAwLTEyLjktNS44LTEyLjktMTIuOWMwLTIgLjUtNCAxLjQtNS44bDExLjYtMjMuMiAzLTYgLjEtLjF6bTQ4LTI2NGMtMTMuMyAwLTI0IDEwLjctMjQgMjRzLTEwLjcgMjQtMjQgMjRzLTI0LTEwLjctMjQtMjRjMC0zOS44IDMyLjItNzIgNzItNzJjMTMuMyAwIDI0IDEwLjcgMjQgMjRzLTEwLjcgMjQtMjQgMjR6TTQzNy43IDQyMy43Yy0yNi4yLTIyLjEtOTQuNS04NS42LTExMy0xNjEuOEMzNDAuNSAyMzEuOCAzNTIgMTk3LjIgMzUyIDE2MGMwLTkuOS0uNy0xOS42LTIuMi0yOWMyOS00MC41IDc2LjUtNjcgMTMwLjItNjdjODguNCAwIDE2MCA3MS42IDE2MCAxNjBjMCA5Mi41LTg3LjIgMTc0LTExNy43IDE5OS43Yy01LjkgNS03LjggMTMuNC00LjQgMjAuM0w1MjggNDY0bC4xIC4xIDMgNiAxMS42IDIzLjJjLjkgMS44IDEuNCAzLjggMS40IDUuOGMwIDcuMS01LjggMTIuOS0xMi45IDEyLjlsLTI1LjkgMC02LjcgMC0uMSAwLTM2LjcgMC0uMSAwLTYuNyAwLTI1LjkgMGMtNy4xIDAtMTIuOS01LjgtMTIuOS0xMi45YzAtMiAuNS00IDEuNC01LjhsMTEuNi0yMy4yIDMtNiAuMS0uMSAxMC0yMC4xYzMuNS02LjkgMS42LTE1LjMtNC40LTIwLjN6TTQ4MCAxMTJjLTYxLjkgMC0xMTIgNTAuMS0xMTIgMTEyYzAgMzEuNiAxNS4zIDY1LjEgMzguMiA5Ni42YzIyLjUgMzAuOCA0OC43IDU0LjggNjIuNCA2Ni4zYzQuNCAzLjcgOC4yIDcuOSAxMS40IDEyLjVjMy4yLTQuNiA3LTguOCAxMS40LTEyLjVjMTMuNy0xMS41IDM5LjktMzUuNSA2Mi40LTY2LjNjMjMtMzEuNSAzOC4yLTY1IDM4LjItOTYuNmMwLTYxLjktNTAuMS0xMTItMTEyLTExMnpNNDU2IDIyNGMwIDEzLjMtMTAuNyAyNC0yNCAyNHMtMjQtMTAuNy0yNC0yNGMwLTM5LjggMzIuMi03MiA3Mi03MmMxMy4zIDAgMjQgMTAuNyAyNCAyNHMtMTAuNyAyNC0yNCAyNHMtMjQgMTAuNy0yNCAyNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Balloons: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M272 160c0-61.9-50.1-112-112-112S48 98.1 48 160c0 31.6 15.3 65.1 38.2 96.6c22.5 30.8 48.7 54.8 62.4 66.3c4.4 3.7 8.2 7.9 11.4 12.5c3.2-4.6 7-8.8 11.4-12.5c13.7-11.5 39.9-35.5 62.4-66.3c23-31.5 38.2-65 38.2-96.6zM112 400l10-20.1c3.5-6.9 1.6-15.3-4.4-20.3C87.2 334 0 252.5 0 160C0 71.6 71.6 0 160 0s160 71.6 160 160c0 92.5-87.2 174-117.7 199.7c-5.9 5-7.8 13.4-4.4 20.3L208 400l.1 .1 3 6 11.6 23.2c.9 1.8 1.4 3.8 1.4 5.8c0 7.1-5.8 12.9-12.9 12.9l-25.9 0-6.7 0-.1 0-36.7 0-.1 0-6.7 0s0 0 0 0l-25.9 0c-7.1 0-12.9-5.8-12.9-12.9c0-2 .5-4 1.4-5.8l11.6-23.2 3-6 .1-.1zm48-264c-13.3 0-24 10.7-24 24s-10.7 24-24 24s-24-10.7-24-24c0-39.8 32.2-72 72-72c13.3 0 24 10.7 24 24s-10.7 24-24 24zM437.7 423.7c-26.2-22.1-94.5-85.6-113-161.8C340.5 231.8 352 197.2 352 160c0-9.9-.7-19.6-2.2-29c29-40.5 76.5-67 130.2-67c88.4 0 160 71.6 160 160c0 92.5-87.2 174-117.7 199.7c-5.9 5-7.8 13.4-4.4 20.3L528 464l.1 .1 3 6 11.6 23.2c.9 1.8 1.4 3.8 1.4 5.8c0 7.1-5.8 12.9-12.9 12.9l-25.9 0-6.7 0-.1 0-36.7 0-.1 0-6.7 0-25.9 0c-7.1 0-12.9-5.8-12.9-12.9c0-2 .5-4 1.4-5.8l11.6-23.2 3-6 .1-.1 10-20.1c3.5-6.9 1.6-15.3-4.4-20.3zM480 112c-61.9 0-112 50.1-112 112c0 31.6 15.3 65.1 38.2 96.6c22.5 30.8 48.7 54.8 62.4 66.3c4.4 3.7 8.2 7.9 11.4 12.5c3.2-4.6 7-8.8 11.4-12.5c13.7-11.5 39.9-35.5 62.4-66.3c23-31.5 38.2-65 38.2-96.6c0-61.9-50.1-112-112-112zM456 224c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-39.8 32.2-72 72-72c13.3 0 24 10.7 24 24s-10.7 24-24 24s-24 10.7-24 24z" />
    </Icon>
);

export default Balloons;
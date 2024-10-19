
import { Icon } from "../../index";

/**
 * A component that renders the `brain-arrow-curved-right` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brain-arrow-curved-right?s=regular brain-arrow-curved-right}
 * @preview ![brain-arrow-curved-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTUzLjUgNzYuOWMtMS45IDYuOC02LjggMTIuNC0xMy4yIDE1LjNjLTE2LjYgNy41LTI4LjIgMjQuMS0yOC4zIDQzLjVjLS4xIDkuMS01LjIgMTcuMy0xMy4zIDIxLjNDODIuOCAxNjQuOSA3MiAxODEuMiA3MiAyMDBjMCA3LjEgMS41IDEzLjcgNC4yIDE5LjdjNC40IDkuNyAxLjkgMjEtNi4xIDI4QzU2LjUgMjU5LjQgNDggMjc2LjcgNDggMjk2YzAgMjAuMiA5LjMgMzguMSAyMy45IDQ5LjljNi43IDUuNCAxMCAxNCA4LjcgMjIuNWMtLjQgMi41LS42IDUtLjYgNy42YzAgMjYuMSAyMC44IDQ3LjMgNDYuNyA0OGM5LjIgLjMgMTcuNCA1LjcgMjEuMiAxNC4xYzYuOSAxNS4zIDIyLjMgMjUuOSA0MC4xIDI1LjljMjQuMyAwIDQ0LTE5LjcgNDQtNDRsMC0zMzJjMC0yMi4xLTE3LjktNDAtNDAtNDBjLTE4LjIgMC0zMy43IDEyLjItMzguNSAyOC45ek0yNTYgNDgyYy0xNi44IDE4LjUtNDEuMSAzMC02OCAzMGMtMzIuMiAwLTYwLjUtMTYuNS03Ni45LTQxLjVjLTQ1LTgtNzkuMS00Ny4zLTc5LjEtOTQuNWMwLS41IDAtMS4xIDAtMS42QzEyLjIgMzU0LjIgMCAzMjYuNSAwIDI5NmMwLTI3LjggMTAuMS01My4yIDI2LjgtNzIuN0MyNSAyMTUuOCAyNCAyMDggMjQgMjAwYzAtMzIuNiAxNi4zLTYxLjUgNDEuMS03OC44YzQuNS0yOC45IDIxLjgtNTMuNSA0NS45LTY3LjhDMTI0LjUgMjIgMTU1LjcgMCAxOTIgMGMyNS4yIDAgNDggMTAuNiA2NCAyNy42QzI3MiAxMC42IDI5NC44IDAgMzIwIDBjMzYuMyAwIDY3LjUgMjIgODAuOSA1My40YzI0LjEgMTQuMyA0MS41IDM4LjkgNDUuOSA2Ny44QzQ3MS43IDEzOC41IDQ4OCAxNjcuNCA0ODggMjAwYzAgOC0xIDE1LjgtMi44IDIzLjNjMS4zIDEuNSAyLjYgMy4xIDMuOCA0LjhjLTUuNyA4LTkgMTcuNy05IDI4bDAgMTYtMjAuNiAwYy0zLjgtOS40LTkuOC0xNy44LTE3LjQtMjQuM2MtOC02LjktMTAuNS0xOC4zLTYuMS0yOGMyLjctNiA0LjItMTIuNiA0LjItMTkuN2MwLTE4LjgtMTAuOC0zNS4xLTI2LjctNDNjLTguMS00LTEzLjMtMTIuMy0xMy4zLTIxLjNjLS4xLTE5LjMtMTEuNy0zNi0yOC4zLTQzLjVjLTYuNC0yLjktMTEuMy04LjUtMTMuMi0xNS4zQzM1My43IDYwLjIgMzM4LjIgNDggMzIwIDQ4Yy0yMi4xIDAtNDAgMTcuOS00MCA0MGwwIDMzMmMwIDE5LjggMTMuMSAzNi41IDMxIDQyLjFjNi41IDIwLjUgMTYuNiAzNi44IDI2LjQgNDljLTQuNCAuNi04LjggMS0xMy40IDFjLTI2LjkgMC01MS4yLTExLjYtNjgtMzB6TTUzOS4zIDI0NC43bDk2IDk2YzYuMiA2LjIgNi4yIDE2LjQgMCAyMi42bC05NiA5NmMtNC42IDQuNi0xMS41IDUuOS0xNy40IDMuNXMtOS45LTguMy05LjktMTQuOGwwLTQ4LTQ4IDBjLTM1LjMgMC02NCAyOC43LTY0IDY0bDAgMzUuN2MwIDYuOC01LjUgMTIuMy0xMi4zIDEyLjNjLTIuNCAwLTQuOC0uNy02LjctMi4yYy0xMC41LTguMi00NS0zOS41LTQ1LTkzLjhjMC02MS45IDUwLjEtMTEyIDExMi0xMTJsNjQgMCAwLTQ4YzAtNi41IDMuOS0xMi4zIDkuOS0xNC44czEyLjktMS4xIDE3LjQgMy41eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BrainArrowCurvedRight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M153.5 76.9c-1.9 6.8-6.8 12.4-13.2 15.3c-16.6 7.5-28.2 24.1-28.3 43.5c-.1 9.1-5.2 17.3-13.3 21.3C82.8 164.9 72 181.2 72 200c0 7.1 1.5 13.7 4.2 19.7c4.4 9.7 1.9 21-6.1 28C56.5 259.4 48 276.7 48 296c0 20.2 9.3 38.1 23.9 49.9c6.7 5.4 10 14 8.7 22.5c-.4 2.5-.6 5-.6 7.6c0 26.1 20.8 47.3 46.7 48c9.2 .3 17.4 5.7 21.2 14.1c6.9 15.3 22.3 25.9 40.1 25.9c24.3 0 44-19.7 44-44l0-332c0-22.1-17.9-40-40-40c-18.2 0-33.7 12.2-38.5 28.9zM256 482c-16.8 18.5-41.1 30-68 30c-32.2 0-60.5-16.5-76.9-41.5c-45-8-79.1-47.3-79.1-94.5c0-.5 0-1.1 0-1.6C12.2 354.2 0 326.5 0 296c0-27.8 10.1-53.2 26.8-72.7C25 215.8 24 208 24 200c0-32.6 16.3-61.5 41.1-78.8c4.5-28.9 21.8-53.5 45.9-67.8C124.5 22 155.7 0 192 0c25.2 0 48 10.6 64 27.6C272 10.6 294.8 0 320 0c36.3 0 67.5 22 80.9 53.4c24.1 14.3 41.5 38.9 45.9 67.8C471.7 138.5 488 167.4 488 200c0 8-1 15.8-2.8 23.3c1.3 1.5 2.6 3.1 3.8 4.8c-5.7 8-9 17.7-9 28l0 16-20.6 0c-3.8-9.4-9.8-17.8-17.4-24.3c-8-6.9-10.5-18.3-6.1-28c2.7-6 4.2-12.6 4.2-19.7c0-18.8-10.8-35.1-26.7-43c-8.1-4-13.3-12.3-13.3-21.3c-.1-19.3-11.7-36-28.3-43.5c-6.4-2.9-11.3-8.5-13.2-15.3C353.7 60.2 338.2 48 320 48c-22.1 0-40 17.9-40 40l0 332c0 19.8 13.1 36.5 31 42.1c6.5 20.5 16.6 36.8 26.4 49c-4.4 .6-8.8 1-13.4 1c-26.9 0-51.2-11.6-68-30zM539.3 244.7l96 96c6.2 6.2 6.2 16.4 0 22.6l-96 96c-4.6 4.6-11.5 5.9-17.4 3.5s-9.9-8.3-9.9-14.8l0-48-48 0c-35.3 0-64 28.7-64 64l0 35.7c0 6.8-5.5 12.3-12.3 12.3c-2.4 0-4.8-.7-6.7-2.2c-10.5-8.2-45-39.5-45-93.8c0-61.9 50.1-112 112-112l64 0 0-48c0-6.5 3.9-12.3 9.9-14.8s12.9-1.1 17.4 3.5z" />
    </Icon>
);

export default BrainArrowCurvedRight;
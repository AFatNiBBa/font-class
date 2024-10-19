
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-meatball` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-meatball?s=thin cloud-meatball}
 * @preview ![cloud-meatball](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzk4LjcgMTMxLjRjLS45IDQuNyAuNCA5LjYgMy41IDEzLjNzNy43IDUuOCAxMi41IDUuN2MuNCAwIC45IDAgMS4zIDBjNDMuNSAwIDgwIDM3LjIgODAgODQuOHMtMzYuNSA4NC44LTgwIDg0LjhsLTQzLjIgMGMyLjMgNS4yIDMuOSAxMC41IDQuOSAxNmwzOC4zIDBjNTMgMCA5Ni00NS4xIDk2LTEwMC44YzAtNTAuNS0zNS40LTkyLjMtODEuNS05OS43Yy00LjctLjctOS41LTEuMS0xNC41LTEuMWMtLjUgMC0xLjEgMC0xLjYgMGMxLTUuMiAxLjYtMTAuNSAxLjYtMTZsMC0uOGMwLTQ2LjQtMzUuOC04NC04MC04NGMtMTguNCAwLTM1LjQgNi41LTQ4LjkgMTcuNWMtNC4zIDMuNS04LjMgNy41LTExLjggMTEuOGMtMi41LTUuMS01LjQtOS45LTguNi0xNC41QzI0Ni4zIDE5LjEgMjEzLjMgMCAxNzYgMEMxMTQuMSAwIDY0IDUyLjcgNjQgMTE3LjZjMCA3LjUgLjcgMTQuOCAxLjkgMjEuOEMyNy42IDE1Mi43IDAgMTkwLjYgMCAyMzUuMkMwIDI5MC45IDQzIDMzNiA5NiAzMzZsMzguMyAwYzEtNS41IDIuNi0xMC44IDQuOS0xNkw5NiAzMjBjLTQzLjUgMC04MC0zNy4yLTgwLTg0LjhjMC0zOCAyMy41LTY5LjcgNTUuMi04MC42YzcuNC0yLjYgMTEuOS0xMC4yIDEwLjUtMTcuOWMtMS4xLTYuMi0xLjctMTIuNS0xLjctMTlDODAgNjAuNyAxMjMuNyAxNiAxNzYgMTZjMzYuNSAwIDY4LjYgMjEuNiA4NC45IDU0LjFjMi40IDQuOSA3LjIgOC4xIDEyLjUgOC43czEwLjctMS42IDE0LjItNS44YzExLjktMTQuNiAyOS4yLTIzLjUgNDguNC0yMy41YzM0LjYgMCA2NCAyOS43IDY0IDY4YzAgNC43LS41IDkuMy0xLjMgMTMuOHpNMjMyLjIgMzI0LjZDMjMzLjkgMzEzIDI0My45IDMwNCAyNTYgMzA0czIyLjEgOSAyMy44IDIwLjZjLjQgMi44IDIuMiA1LjIgNC45IDYuM3M1LjYgLjcgNy45LTFjOS40LTcuMSAyMi44LTYuMyAzMS40IDIuMnM5LjMgMjIgMi4yIDMxLjRjLTEuNyAyLjMtMi4xIDUuMy0xIDcuOXMzLjUgNC41IDYuMyA0LjlDMzQzIDM3Ny45IDM1MiAzODcuOSAzNTIgNDAwcy05IDIyLjEtMjAuNiAyMy44Yy0yLjggLjQtNS4yIDIuMi02LjMgNC45cy0uNyA1LjYgMSA3LjljNy4xIDkuNCA2LjMgMjIuOC0yLjIgMzEuNHMtMjIgOS4zLTMxLjQgMi4yYy0yLjMtMS43LTUuMy0yLjEtNy45LTFzLTQuNSAzLjUtNC45IDYuM0MyNzguMSA0ODcgMjY4LjEgNDk2IDI1NiA0OTZzLTIyLjEtOS0yMy44LTIwLjZjLS40LTIuOC0yLjItNS4yLTQuOS02LjNzLTUuNi0uNy03LjkgMWMtOS40IDcuMS0yMi44IDYuMy0zMS40LTIuMnMtOS4zLTIyLTIuMi0zMS40YzEuNy0yLjMgMi4xLTUuMyAxLTcuOXMtMy41LTQuNS02LjMtNC45QzE2OSA0MjIuMSAxNjAgNDEyLjEgMTYwIDQwMHM5LTIyLjEgMjAuNi0yMy44YzIuOC0uNCA1LjItMi4yIDYuMy00LjlzLjctNS42LTEtNy45Yy03LjEtOS40LTYuMy0yMi44IDIuMi0zMS40czIyLTkuMyAzMS40LTIuMmMyLjMgMS43IDUuMyAyLjEgNy45IDFzNC41LTMuNSA0LjktNi4zek0yNTYgMjg4Yy0xNi4zIDAtMzAuMyA5LjgtMzYuNiAyMy43Yy0xNC4zLTUuNS0zMS4xLTIuNS00Mi42IDkuMXMtMTQuNSAyOC4zLTkuMSA0Mi42Yy0xNCA2LjItMjMuNyAyMC4yLTIzLjcgMzYuNnM5LjggMzAuMyAyMy43IDM2LjZjLTUuNSAxNC4zLTIuNSAzMS4xIDkuMSA0Mi42czI4LjMgMTQuNSA0Mi42IDkuMWM2LjIgMTQgMjAuMyAyMy43IDM2LjYgMjMuN3MzMC4zLTkuOCAzNi42LTIzLjdjMTQuMyA1LjUgMzEuMSAyLjUgNDIuNi05LjFzMTQuNS0yOC4zIDkuMS00Mi42YzE0LTYuMiAyMy43LTIwLjIgMjMuNy0zNi42cy05LjgtMzAuMy0yMy43LTM2LjZjNS41LTE0LjMgMi41LTMxLjEtOS4xLTQyLjZzLTI4LjMtMTQuNS00Mi42LTkuMWMtNi4yLTE0LTIwLjMtMjMuNy0zNi42LTIzLjd6TTE2IDQwMGEzMiAzMiAwIDEgMSA2NCAwIDMyIDMyIDAgMSAxIC02NCAwem04MCAwQTQ4IDQ4IDAgMSAwIDAgNDAwYTQ4IDQ4IDAgMSAwIDk2IDB6bTM2OC0zMmEzMiAzMiAwIDEgMSAwIDY0IDMyIDMyIDAgMSAxIDAtNjR6bTAgODBhNDggNDggMCAxIDAgMC05NiA0OCA0OCAwIDEgMCAwIDk2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CloudMeatball: typeof Icon = x => (
    <Icon {...x}>
        <path d="M398.7 131.4c-.9 4.7 .4 9.6 3.5 13.3s7.7 5.8 12.5 5.7c.4 0 .9 0 1.3 0c43.5 0 80 37.2 80 84.8s-36.5 84.8-80 84.8l-43.2 0c2.3 5.2 3.9 10.5 4.9 16l38.3 0c53 0 96-45.1 96-100.8c0-50.5-35.4-92.3-81.5-99.7c-4.7-.7-9.5-1.1-14.5-1.1c-.5 0-1.1 0-1.6 0c1-5.2 1.6-10.5 1.6-16l0-.8c0-46.4-35.8-84-80-84c-18.4 0-35.4 6.5-48.9 17.5c-4.3 3.5-8.3 7.5-11.8 11.8c-2.5-5.1-5.4-9.9-8.6-14.5C246.3 19.1 213.3 0 176 0C114.1 0 64 52.7 64 117.6c0 7.5 .7 14.8 1.9 21.8C27.6 152.7 0 190.6 0 235.2C0 290.9 43 336 96 336l38.3 0c1-5.5 2.6-10.8 4.9-16L96 320c-43.5 0-80-37.2-80-84.8c0-38 23.5-69.7 55.2-80.6c7.4-2.6 11.9-10.2 10.5-17.9c-1.1-6.2-1.7-12.5-1.7-19C80 60.7 123.7 16 176 16c36.5 0 68.6 21.6 84.9 54.1c2.4 4.9 7.2 8.1 12.5 8.7s10.7-1.6 14.2-5.8c11.9-14.6 29.2-23.5 48.4-23.5c34.6 0 64 29.7 64 68c0 4.7-.5 9.3-1.3 13.8zM232.2 324.6C233.9 313 243.9 304 256 304s22.1 9 23.8 20.6c.4 2.8 2.2 5.2 4.9 6.3s5.6 .7 7.9-1c9.4-7.1 22.8-6.3 31.4 2.2s9.3 22 2.2 31.4c-1.7 2.3-2.1 5.3-1 7.9s3.5 4.5 6.3 4.9C343 377.9 352 387.9 352 400s-9 22.1-20.6 23.8c-2.8 .4-5.2 2.2-6.3 4.9s-.7 5.6 1 7.9c7.1 9.4 6.3 22.8-2.2 31.4s-22 9.3-31.4 2.2c-2.3-1.7-5.3-2.1-7.9-1s-4.5 3.5-4.9 6.3C278.1 487 268.1 496 256 496s-22.1-9-23.8-20.6c-.4-2.8-2.2-5.2-4.9-6.3s-5.6-.7-7.9 1c-9.4 7.1-22.8 6.3-31.4-2.2s-9.3-22-2.2-31.4c1.7-2.3 2.1-5.3 1-7.9s-3.5-4.5-6.3-4.9C169 422.1 160 412.1 160 400s9-22.1 20.6-23.8c2.8-.4 5.2-2.2 6.3-4.9s.7-5.6-1-7.9c-7.1-9.4-6.3-22.8 2.2-31.4s22-9.3 31.4-2.2c2.3 1.7 5.3 2.1 7.9 1s4.5-3.5 4.9-6.3zM256 288c-16.3 0-30.3 9.8-36.6 23.7c-14.3-5.5-31.1-2.5-42.6 9.1s-14.5 28.3-9.1 42.6c-14 6.2-23.7 20.2-23.7 36.6s9.8 30.3 23.7 36.6c-5.5 14.3-2.5 31.1 9.1 42.6s28.3 14.5 42.6 9.1c6.2 14 20.3 23.7 36.6 23.7s30.3-9.8 36.6-23.7c14.3 5.5 31.1 2.5 42.6-9.1s14.5-28.3 9.1-42.6c14-6.2 23.7-20.2 23.7-36.6s-9.8-30.3-23.7-36.6c5.5-14.3 2.5-31.1-9.1-42.6s-28.3-14.5-42.6-9.1c-6.2-14-20.3-23.7-36.6-23.7zM16 400a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm80 0A48 48 0 1 0 0 400a48 48 0 1 0 96 0zm368-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default CloudMeatball;
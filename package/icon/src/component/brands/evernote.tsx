
import { Icon } from "../../index";

/**
 * A component that renders the `evernote` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/evernote?s=brands evernote}
 * @preview ![evernote](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTIwLjgyIDEzMi4yMWMxLjYgMjIuMzEtMTcuNTUgMjEuNTktMjEuNjEgMjEuNTktNjguOTMgMC03My42NC0xLTgzLjU4IDMuMzQtLjU2LjIyLS43NCAwLS4zNy0uMzdMMTIzLjc5IDQ2LjQ1Yy4zOC0uMzcuNi0uMjIuMzguMzctNC4zNSA5Ljk5LTMuMzUgMTUuMDktMy4zNSA4NS4zOXptNzkgMzA4Yy0xNC42OC0zNy4wOCAxMy03Ni45MyA1Mi41Mi03Ni42MiAxNy40OSAwIDIyLjYgMjMuMjEgNy45NSAzMS40Mi02LjE5IDMuMy0yNC45NSAxLjc0LTI1LjE0IDE5LjItLjA1IDE3LjA5IDE5LjY3IDI1IDMxLjIgMjQuODlBNDUuNjQgNDUuNjQgMCAwIDAgMzEyIDM5My40NXYtLjA4YzAtMTEuNjMtNy43OS00Ny4yMi00Ny41NC01NS4zNC03LjcyLTEuNTQtNjUtNi4zNS02OC4zNS01MC41Mi0zLjc0IDE2LjkzLTE3LjQgNjMuNDktNDMuMTEgNjkuMDktOC43NCAxLjk0LTY5LjY4IDcuNjQtMTEyLjkyLTM2Ljc3IDAgMC0xOC41Ny0xNS4yMy0yOC4yMy01Ny45NS0zLjM4LTE1Ljc1LTkuMjgtMzkuNy0xMS4xNC02MiAwLTE4IDExLjE0LTMwLjQ1IDI1LjA3LTMyLjIgODEgMCA5MCAyLjMyIDEwMS03LjggOS44Mi05LjI0IDcuOC0xNS41IDcuOC0xMDIuNzggMS04LjMgNy43OS0zMC44MSA1My40MS0yNC4xNCA2IC44NiAzMS45MSA0LjE4IDM3LjQ4IDMwLjY0bDY0LjI2IDExLjE1YzIwLjQzIDMuNzEgNzAuOTQgNyA4MC42IDU3Ljk0IDIyLjY2IDEyMS4wOSA4LjkxIDIzOC40NiA3LjggMjM4LjQ2QzM2Mi4xNSA0ODUuNTMgMjY3LjA2IDQ4MCAyNjcuMDYgNDgwYy0xOC45NS0uMjMtNTQuMjUtOS40LTY3LjI3LTM5Ljgzem04MC45NC0yMDQuODRjLTEgMS45Mi0yLjIgNiAuODUgNyAxNC4wOSA0LjkzIDM5Ljc1IDYuODQgNDUuODggNS41MyAzLjExLS4yNSAzLjA1LTQuNDMgMi40OC02LjY1LTMuNTMtMjEuODUtNDAuODMtMjYuNS00OS4yNC01LjkyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Evernote: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M120.82 132.21c1.6 22.31-17.55 21.59-21.61 21.59-68.93 0-73.64-1-83.58 3.34-.56.22-.74 0-.37-.37L123.79 46.45c.38-.37.6-.22.38.37-4.35 9.99-3.35 15.09-3.35 85.39zm79 308c-14.68-37.08 13-76.93 52.52-76.62 17.49 0 22.6 23.21 7.95 31.42-6.19 3.3-24.95 1.74-25.14 19.2-.05 17.09 19.67 25 31.2 24.89A45.64 45.64 0 0 0 312 393.45v-.08c0-11.63-7.79-47.22-47.54-55.34-7.72-1.54-65-6.35-68.35-50.52-3.74 16.93-17.4 63.49-43.11 69.09-8.74 1.94-69.68 7.64-112.92-36.77 0 0-18.57-15.23-28.23-57.95-3.38-15.75-9.28-39.7-11.14-62 0-18 11.14-30.45 25.07-32.2 81 0 90 2.32 101-7.8 9.82-9.24 7.8-15.5 7.8-102.78 1-8.3 7.79-30.81 53.41-24.14 6 .86 31.91 4.18 37.48 30.64l64.26 11.15c20.43 3.71 70.94 7 80.6 57.94 22.66 121.09 8.91 238.46 7.8 238.46C362.15 485.53 267.06 480 267.06 480c-18.95-.23-54.25-9.4-67.27-39.83zm80.94-204.84c-1 1.92-2.2 6 .85 7 14.09 4.93 39.75 6.84 45.88 5.53 3.11-.25 3.05-4.43 2.48-6.65-3.53-21.85-40.83-26.5-49.24-5.92z" />
    </Icon>
);

export default Evernote;
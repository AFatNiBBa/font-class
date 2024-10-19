
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `linux` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/linux?s=brands linux}
 * @preview ![linux](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjAuOCAxMjMuM2MxIC41IDEuOCAxLjcgMyAxLjcgMS4xIDAgMi44LS40IDIuOS0xLjUuMi0xLjQtMS45LTIuMy0zLjItMi45LTEuNy0uNy0zLjktMS01LjUtLjEtLjQuMi0uOC43LS42IDEuMS4zIDEuMyAyLjMgMS4xIDMuNCAxLjd6bS0yMS45IDEuN2MxLjIgMCAyLTEuMiAzLTEuNyAxLjEtLjYgMy4xLS40IDMuNS0xLjYuMi0uNC0uMi0uOS0uNi0xLjEtMS42LS45LTMuOC0uNi01LjUuMS0xLjMuNi0zLjQgMS41LTMuMiAyLjkuMSAxIDEuOCAxLjUgMi44IDEuNHpNNDIwIDQwMy44Yy0zLjYtNC01LjMtMTEuNi03LjItMTkuNy0xLjgtOC4xLTMuOS0xNi44LTEwLjUtMjIuNC0xLjMtMS4xLTIuNi0yLjEtNC0yLjktMS4zLS44LTIuNy0xLjUtNC4xLTIgOS4yLTI3LjMgNS42LTU0LjUtMy43LTc5LjEtMTEuNC0zMC4xLTMxLjMtNTYuNC00Ni41LTc0LjQtMTcuMS0yMS41LTMzLjctNDEuOS0zMy40LTcyQzMxMS4xIDg1LjQgMzE1LjcuMSAyMzQuOCAwIDEzMi40LS4yIDE1OCAxMDMuNCAxNTYuOSAxMzUuMmMtMS43IDIzLjQtNi40IDQxLjgtMjIuNSA2NC43LTE4LjkgMjIuNS00NS41IDU4LjgtNTguMSA5Ni43LTYgMTcuOS04LjggMzYuMS02LjIgNTMuMy02LjUgNS44LTExLjQgMTQuNy0xNi42IDIwLjItNC4yIDQuMy0xMC4zIDUuOS0xNyA4LjNzLTE0IDYtMTguNSAxNC41Yy0yLjEgMy45LTIuOCA4LjEtMi44IDEyLjQgMCAzLjkuNiA3LjkgMS4yIDExLjggMS4yIDguMSAyLjUgMTUuNy44IDIwLjgtNS4yIDE0LjQtNS45IDI0LjQtMi4yIDMxLjcgMy44IDcuMyAxMS40IDEwLjUgMjAuMSAxMi4zIDE3LjMgMy42IDQwLjggMi43IDU5LjMgMTIuNSAxOS44IDEwLjQgMzkuOSAxNC4xIDU1LjkgMTAuNCAxMS42LTIuNiAyMS4xLTkuNiAyNS45LTIwLjIgMTIuNS0uMSAyNi4zLTUuNCA0OC4zLTYuNiAxNC45LTEuMiAzMy42IDUuMyA1NS4xIDQuMS42IDIuMyAxLjQgNC42IDIuNSA2Ljd2LjFjOC4zIDE2LjcgMjMuOCAyNC4zIDQwLjMgMjMgMTYuNi0xLjMgMzQuMS0xMSA0OC4zLTI3LjkgMTMuNi0xNi40IDM2LTIzLjIgNTAuOS0zMi4yIDcuNC00LjUgMTMuNC0xMC4xIDEzLjktMTguMy40LTguMi00LjQtMTcuMy0xNS41LTI5Ljd6TTIyMy43IDg3LjNjOS44LTIyLjIgMzQuMi0yMS44IDQ0LS40IDYuNSAxNC4yIDMuNiAzMC45LTQuMyA0MC40LTEuNi0uOC01LjktMi42LTEyLjYtNC45IDEuMS0xLjIgMy4xLTIuNyAzLjktNC42IDQuOC0xMS44LS4yLTI3LTkuMS0yNy4zLTcuMy0uNS0xMy45IDEwLjgtMTEuOCAyMy00LjEtMi05LjQtMy41LTEzLTQuNC0xLTYuOS0uMy0xNC42IDIuOS0yMS44ek0xODMgNzUuOGMxMC4xIDAgMjAuOCAxNC4yIDE5LjEgMzMuNS0zLjUgMS03LjEgMi41LTEwLjIgNC42IDEuMi04LjktMy4zLTIwLjEtOS42LTE5LjYtOC40LjctOS44IDIxLjItMS44IDI4LjEgMSAuOCAxLjktLjItNS45IDUuNS0xNS42LTE0LjYtMTAuNS01Mi4xIDguNC01Mi4xem0tMTMuNiA2MC43YzYuMi00LjYgMTMuNi0xMCAxNC4xLTEwLjUgNC43LTQuNCAxMy41LTE0LjIgMjcuOS0xNC4yIDcuMSAwIDE1LjYgMi4zIDI1LjkgOC45IDYuMyA0LjEgMTEuMyA0LjQgMjIuNiA5LjMgOC40IDMuNSAxMy43IDkuNyAxMC41IDE4LjItMi42IDcuMS0xMSAxNC40LTIyLjcgMTguMS0xMS4xIDMuNi0xOS44IDE2LTM4LjIgMTQuOS0zLjktLjItNy0xLTkuNi0yLjEtOC0zLjUtMTIuMi0xMC40LTIwLTE1LTguNi00LjgtMTMuMi0xMC40LTE0LjctMTUuMy0xLjQtNC45IDAtOSA0LjItMTIuM3ptMy4zIDMzNGMtMi43IDM1LjEtNDMuOSAzNC40LTc1LjMgMTgtMjkuOS0xNS44LTY4LjYtNi41LTc2LjUtMjEuOS0yLjQtNC43LTIuNC0xMi43IDIuNi0yNi40di0uMmMyLjQtNy42LjYtMTYtLjYtMjMuOS0xLjItNy44LTEuOC0xNSAuOS0yMCAzLjUtNi43IDguNS05LjEgMTQuOC0xMS4zIDEwLjMtMy43IDExLjgtMy40IDE5LjYtOS45IDUuNS01LjcgOS41LTEyLjkgMTQuMy0xOCA1LjEtNS41IDEwLTguMSAxNy43LTYuOSA4LjEgMS4yIDE1LjEgNi44IDIxLjkgMTZsMTkuNiAzNS42YzkuNSAxOS45IDQzLjEgNDguNCA0MSA2OC45em0tMS40LTI1LjljLTQuMS02LjYtOS42LTEzLjYtMTQuNC0xOS42IDcuMSAwIDE0LjItMi4yIDE2LjctOC45IDIuMy02LjIgMC0xNC45LTcuNC0yNC45LTEzLjUtMTguMi0zOC4zLTMyLjUtMzguMy0zMi41LTEzLjUtOC40LTIxLjEtMTguNy0yNC42LTI5LjlzLTMtMjMuMy0uMy0zNS4yYzUuMi0yMi45IDE4LjYtNDUuMiAyNy4yLTU5LjIgMi4zLTEuNy44IDMuMi04LjcgMjAuOC04LjUgMTYuMS0yNC40IDUzLjMtMi42IDgyLjQuNi0yMC43IDUuNS00MS44IDEzLjgtNjEuNSAxMi0yNy40IDM3LjMtNzQuOSAzOS4zLTExMi43IDEuMS44IDQuNiAzLjIgNi4yIDQuMSA0LjYgMi43IDguMSA2LjcgMTIuNiAxMC4zIDEyLjQgMTAgMjguNSA5LjIgNDIuNCAxLjIgNi4yLTMuNSAxMS4yLTcuNSAxNS45LTkgOS45LTMuMSAxNy44LTguNiAyMi4zLTE1IDcuNyAzMC40IDI1LjcgNzQuMyAzNy4yIDk1LjcgNi4xIDExLjQgMTguMyAzNS41IDIzLjYgNjQuNiAzLjMtLjEgNyAuNCAxMC45IDEuNCAxMy44LTM1LjctMTEuNy03NC4yLTIzLjMtODQuOS00LjctNC42LTQuOS02LjYtMi42LTYuNSAxMi42IDExLjIgMjkuMiAzMy43IDM1LjIgNTkgMi44IDExLjYgMy4zIDIzLjcuNCAzNS43IDE2LjQgNi44IDM1LjkgMTcuOSAzMC43IDM0LjgtMi4yLS4xLTMuMiAwLTQuMiAwIDMuMi0xMC4xLTMuOS0xNy42LTIyLjgtMjYuMS0xOS42LTguNi0zNi04LjYtMzguMyAxMi41LTEyLjEgNC4yLTE4LjMgMTQuNy0yMS40IDI3LjMtMi44IDExLjItMy42IDI0LjctNC40IDM5LjktLjUgNy43LTMuNiAxOC02LjggMjktMzIuMSAyMi45LTc2LjcgMzIuOS0xMTQuMyA3LjJ6bTI1Ny40LTExLjVjLS45IDE2LjgtNDEuMiAxOS45LTYzLjIgNDYuNS0xMy4yIDE1LjctMjkuNCAyNC40LTQzLjYgMjUuNXMtMjYuNS00LjgtMzMuNy0xOS4zYy00LjctMTEuMS0yLjQtMjMuMSAxLjEtMzYuMyAzLjctMTQuMiA5LjItMjguOCA5LjktNDAuNi44LTE1LjIgMS43LTI4LjUgNC4yLTM4LjcgMi42LTEwLjMgNi42LTE3LjIgMTMuNy0yMS4xLjMtLjIuNy0uMyAxLS41LjggMTMuMiA3LjMgMjYuNiAxOC44IDI5LjUgMTIuNiAzLjMgMzAuNy03LjUgMzguNC0xNi4zIDktLjMgMTUuNy0uOSAyMi42IDUuMSA5LjkgOC41IDcuMSAzMC4zIDE3LjEgNDEuNiAxMC42IDExLjYgMTQgMTkuNSAxMy43IDI0LjZ6TTE3My4zIDE0OC43YzIgMS45IDQuNyA0LjUgOCA3LjEgNi42IDUuMiAxNS44IDEwLjYgMjcuMyAxMC42IDExLjYgMCAyMi41LTUuOSAzMS44LTEwLjggNC45LTIuNiAxMC45LTcgMTQuOC0xMC40czUuOS02LjMgMy4xLTYuNi0yLjYgMi42LTYgNS4xYy00LjQgMy4yLTkuNyA3LjQtMTMuOSA5LjgtNy40IDQuMi0xOS41IDEwLjItMjkuOSAxMC4ycy0xOC43LTQuOC0yNC45LTkuN2MtMy4xLTIuNS01LjctNS03LjctNi45LTEuNS0xLjQtMS45LTQuNi00LjMtNC45LTEuNC0uMS0xLjggMy43IDEuNyA2LjV6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Linux(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M220.8 123.3c1 .5 1.8 1.7 3 1.7 1.1 0 2.8-.4 2.9-1.5.2-1.4-1.9-2.3-3.2-2.9-1.7-.7-3.9-1-5.5-.1-.4.2-.8.7-.6 1.1.3 1.3 2.3 1.1 3.4 1.7zm-21.9 1.7c1.2 0 2-1.2 3-1.7 1.1-.6 3.1-.4 3.5-1.6.2-.4-.2-.9-.6-1.1-1.6-.9-3.8-.6-5.5.1-1.3.6-3.4 1.5-3.2 2.9.1 1 1.8 1.5 2.8 1.4zM420 403.8c-3.6-4-5.3-11.6-7.2-19.7-1.8-8.1-3.9-16.8-10.5-22.4-1.3-1.1-2.6-2.1-4-2.9-1.3-.8-2.7-1.5-4.1-2 9.2-27.3 5.6-54.5-3.7-79.1-11.4-30.1-31.3-56.4-46.5-74.4-17.1-21.5-33.7-41.9-33.4-72C311.1 85.4 315.7.1 234.8 0 132.4-.2 158 103.4 156.9 135.2c-1.7 23.4-6.4 41.8-22.5 64.7-18.9 22.5-45.5 58.8-58.1 96.7-6 17.9-8.8 36.1-6.2 53.3-6.5 5.8-11.4 14.7-16.6 20.2-4.2 4.3-10.3 5.9-17 8.3s-14 6-18.5 14.5c-2.1 3.9-2.8 8.1-2.8 12.4 0 3.9.6 7.9 1.2 11.8 1.2 8.1 2.5 15.7.8 20.8-5.2 14.4-5.9 24.4-2.2 31.7 3.8 7.3 11.4 10.5 20.1 12.3 17.3 3.6 40.8 2.7 59.3 12.5 19.8 10.4 39.9 14.1 55.9 10.4 11.6-2.6 21.1-9.6 25.9-20.2 12.5-.1 26.3-5.4 48.3-6.6 14.9-1.2 33.6 5.3 55.1 4.1.6 2.3 1.4 4.6 2.5 6.7v.1c8.3 16.7 23.8 24.3 40.3 23 16.6-1.3 34.1-11 48.3-27.9 13.6-16.4 36-23.2 50.9-32.2 7.4-4.5 13.4-10.1 13.9-18.3.4-8.2-4.4-17.3-15.5-29.7zM223.7 87.3c9.8-22.2 34.2-21.8 44-.4 6.5 14.2 3.6 30.9-4.3 40.4-1.6-.8-5.9-2.6-12.6-4.9 1.1-1.2 3.1-2.7 3.9-4.6 4.8-11.8-.2-27-9.1-27.3-7.3-.5-13.9 10.8-11.8 23-4.1-2-9.4-3.5-13-4.4-1-6.9-.3-14.6 2.9-21.8zM183 75.8c10.1 0 20.8 14.2 19.1 33.5-3.5 1-7.1 2.5-10.2 4.6 1.2-8.9-3.3-20.1-9.6-19.6-8.4.7-9.8 21.2-1.8 28.1 1 .8 1.9-.2-5.9 5.5-15.6-14.6-10.5-52.1 8.4-52.1zm-13.6 60.7c6.2-4.6 13.6-10 14.1-10.5 4.7-4.4 13.5-14.2 27.9-14.2 7.1 0 15.6 2.3 25.9 8.9 6.3 4.1 11.3 4.4 22.6 9.3 8.4 3.5 13.7 9.7 10.5 18.2-2.6 7.1-11 14.4-22.7 18.1-11.1 3.6-19.8 16-38.2 14.9-3.9-.2-7-1-9.6-2.1-8-3.5-12.2-10.4-20-15-8.6-4.8-13.2-10.4-14.7-15.3-1.4-4.9 0-9 4.2-12.3zm3.3 334c-2.7 35.1-43.9 34.4-75.3 18-29.9-15.8-68.6-6.5-76.5-21.9-2.4-4.7-2.4-12.7 2.6-26.4v-.2c2.4-7.6.6-16-.6-23.9-1.2-7.8-1.8-15 .9-20 3.5-6.7 8.5-9.1 14.8-11.3 10.3-3.7 11.8-3.4 19.6-9.9 5.5-5.7 9.5-12.9 14.3-18 5.1-5.5 10-8.1 17.7-6.9 8.1 1.2 15.1 6.8 21.9 16l19.6 35.6c9.5 19.9 43.1 48.4 41 68.9zm-1.4-25.9c-4.1-6.6-9.6-13.6-14.4-19.6 7.1 0 14.2-2.2 16.7-8.9 2.3-6.2 0-14.9-7.4-24.9-13.5-18.2-38.3-32.5-38.3-32.5-13.5-8.4-21.1-18.7-24.6-29.9s-3-23.3-.3-35.2c5.2-22.9 18.6-45.2 27.2-59.2 2.3-1.7.8 3.2-8.7 20.8-8.5 16.1-24.4 53.3-2.6 82.4.6-20.7 5.5-41.8 13.8-61.5 12-27.4 37.3-74.9 39.3-112.7 1.1.8 4.6 3.2 6.2 4.1 4.6 2.7 8.1 6.7 12.6 10.3 12.4 10 28.5 9.2 42.4 1.2 6.2-3.5 11.2-7.5 15.9-9 9.9-3.1 17.8-8.6 22.3-15 7.7 30.4 25.7 74.3 37.2 95.7 6.1 11.4 18.3 35.5 23.6 64.6 3.3-.1 7 .4 10.9 1.4 13.8-35.7-11.7-74.2-23.3-84.9-4.7-4.6-4.9-6.6-2.6-6.5 12.6 11.2 29.2 33.7 35.2 59 2.8 11.6 3.3 23.7.4 35.7 16.4 6.8 35.9 17.9 30.7 34.8-2.2-.1-3.2 0-4.2 0 3.2-10.1-3.9-17.6-22.8-26.1-19.6-8.6-36-8.6-38.3 12.5-12.1 4.2-18.3 14.7-21.4 27.3-2.8 11.2-3.6 24.7-4.4 39.9-.5 7.7-3.6 18-6.8 29-32.1 22.9-76.7 32.9-114.3 7.2zm257.4-11.5c-.9 16.8-41.2 19.9-63.2 46.5-13.2 15.7-29.4 24.4-43.6 25.5s-26.5-4.8-33.7-19.3c-4.7-11.1-2.4-23.1 1.1-36.3 3.7-14.2 9.2-28.8 9.9-40.6.8-15.2 1.7-28.5 4.2-38.7 2.6-10.3 6.6-17.2 13.7-21.1.3-.2.7-.3 1-.5.8 13.2 7.3 26.6 18.8 29.5 12.6 3.3 30.7-7.5 38.4-16.3 9-.3 15.7-.9 22.6 5.1 9.9 8.5 7.1 30.3 17.1 41.6 10.6 11.6 14 19.5 13.7 24.6zM173.3 148.7c2 1.9 4.7 4.5 8 7.1 6.6 5.2 15.8 10.6 27.3 10.6 11.6 0 22.5-5.9 31.8-10.8 4.9-2.6 10.9-7 14.8-10.4s5.9-6.3 3.1-6.6-2.6 2.6-6 5.1c-4.4 3.2-9.7 7.4-13.9 9.8-7.4 4.2-19.5 10.2-29.9 10.2s-18.7-4.8-24.9-9.7c-3.1-2.5-5.7-5-7.7-6.9-1.5-1.4-1.9-4.6-4.3-4.9-1.4-.1-1.8 3.7 1.7 6.5z" />
        </Icon>
    </>
}
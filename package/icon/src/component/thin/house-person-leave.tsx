
import { Icon } from "../../index";

/**
 * A component that renders the `house-person-leave` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-person-leave?s=thin house-person-leave}
 * @preview ![house-person-leave](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjQ1LjIgMS45Yy0zLTIuNi03LjQtMi42LTEwLjQgMGwtMjMyIDIwMGMtMy4zIDIuOS0zLjcgNy45LS44IDExLjNzNy45IDMuNyAxMS4zIC44TDY0IDE3MC4zIDY0IDM2MGMwIDMwLjkgMjUuMSA1NiA1NiA1NmwxOTQuMiAwIDE2LTE2TDEyMCA0MDBjLTIyLjEgMC00MC0xNy45LTQwLTQwbDAtMjAzLjVMMjQwIDE4LjYgMzcwLjkgMTMxLjRjNC41LTMuMiA5LjItNi4yIDE0LjEtOUwyNDUuMiAxLjl6TTIyNCAxODRjNC40IDAgOCAzLjYgOCA4bDAgNjRjMCA0LjQtMy42IDgtOCA4bC02NCAwYy00LjQgMC04LTMuNi04LThsMC02NGMwLTQuNCAzLjYtOCA4LThsNjQgMHptLTY0LTE2Yy0xMy4zIDAtMjQgMTAuNy0yNCAyNGwwIDY0YzAgMTMuMyAxMC43IDI0IDI0IDI0bDY0IDBjMTMuMyAwIDI0LTEwLjcgMjQtMjRsMC02NGMwLTEzLjMtMTAuNy0yNC0yNC0yNGwtNjQgMHptMjk3LjEgMTkuM2MtNC42LTQtMTEtNS4xLTE2LjYtMi44Yy0xLjEgLjUtMi4yIC45LTMuNCAxLjRsLTUuNyAyLjVjLTIxLjYgOS42LTM3LjkgMjguMy00NC40IDUxLjFsLTMuNyAxMi45Yy0yLjQgOC41LTExLjMgMTMuNC0xOS44IDExcy0xMy40LTExLjMtMTEtMTkuOGwzLjctMTIuOWM5LjEtMzEuOSAzMS45LTU4LjEgNjIuMi03MS42bDUuNy0yLjVjMTguOC04LjMgMzktMTIuNiA1OS42LTEyLjZjMzguMSAwIDcyLjUgMjIuOSA4Ny4xIDU4LjFsMTYuNSAzOS43YzEuMSAyLjYgMi45IDQuOSA1LjIgNi42bDI1IDE4LjhjNy4xIDUuMyA4LjUgMTUuMyAzLjIgMjIuNHMtMTUuMyA4LjUtMjIuNCAzLjJsLTI4LjUtMjEuNGMtNC42LTMuNC04LjEtOC0xMC4zLTEzLjNsLTEwLjItMjQuNWMtMi42LTYuMy04LjktMTAuMi0xNS42LTkuOHMtMTIuNiA1LTE0LjUgMTEuNUw1MDAgMzAwLjhjLTEuNiA1LjQtLjIgMTEuMiAzLjYgMTUuM2w0OS41IDU0YzMuNiAzLjkgNi4yIDguNyA3LjUgMTMuOWwyMyA5Mi4xYzIuMSA4LjYtMy4xIDE3LjMtMTEuNiAxOS40cy0xNy4zLTMuMS0xOS40LTExLjZsLTIyLTg4LjFjLS42LTIuNi0xLjktNS0zLjctNi45bC03MC43LTc3LjFjLTExLjEtMTIuMS0xNS4yLTI5LTExLTQ0LjhMNDYyIDIwMy40YzEuNi01LjktLjMtMTIuMS00LjktMTYuMXpNNTI4IDE2YTM2IDM2IDAgMSAxIDAgNzIgMzYgMzYgMCAxIDEgMC03MnpNNDI3LjQgMjA5YzMuMy0yLjMgNi44LTQuMyAxMC42LTZsNS43LTIuNWMxLS40IDEuOS0uOCAyLjktMS4ybC0xLjMgNC44LTIuNiA5LjYtMS41IDUuNi0xMS42IDQzLjZjLTUuNiAyMS4xLS4xIDQzLjYgMTQuNyA1OS43bDcwLjcgNzcuMSAyMiA4OC4xYzQuMyAxNy4xIDIxLjcgMjcuNiAzOC44IDIzLjNzMjcuNi0yMS43IDIzLjMtMzguOGwtMjMtOTIuMWMtMS45LTcuOC01LjgtMTQuOS0xMS4yLTIwLjhsLTQ5LjUtNTQgMTIuMS00MS4yIDcuMi0yNC40IDkuOCAyMy41IC40IDFjMy4zIDcuOSA4LjcgMTQuOCAxNS41IDE5LjlsMjguNSAyMS40YzE0LjEgMTAuNiAzNC4yIDcuNyA0NC44LTYuNHM3LjctMzQuMi02LjQtNDQuOGwtMjUtMTguOC0xNi41LTM5LjdDNTY4LjUgMTU0LjggNTI4LjMgMTI4IDQ4My43IDEyOGMtMjIuOCAwLTQ1LjMgNC44LTY2LjEgMTRsLTUuNyAyLjVjLTM0LjYgMTUuNC02MC43IDQ1LjMtNzEuMSA4MS44bC0zLjcgMTIuOWMtNC45IDE3IDUgMzQuNyAyMiAzOS42czM0LjctNSAzOS42LTIybDMuNy0xMi45YzQuMS0xNC4zIDEzLTI2LjYgMjQuOS0zNC45ek01ODAgNTJBNTIgNTIgMCAxIDAgNDc2IDUyYTUyIDUyIDAgMSAwIDEwNCAwek00MTkgMzQzLjljLTQuMS0xLjYtOC44IC40LTEwLjQgNC41TDM4OC43IDM5OGwtNTkuNCA1OS40Yy0xMi41IDEyLjUtMTIuNSAzMi44IDAgNDUuM3MzMi44IDEyLjUgNDUuMyAwbDYxLjctNjEuN2M0LjYtNC42IDguMi0xMC4xIDEwLjYtMTYuMUw0NjIuMSAzODdjMS42LTQuMS0uNC04LjgtNC41LTEwLjRzLTguOCAuNC0xMC40IDQuNWwtMTUuMSAzNy45Yy0xLjYgNC00IDcuNy03LjEgMTAuN2wtNjEuNyA2MS43Yy02LjIgNi4yLTE2LjQgNi4yLTIyLjYgMHMtNi4yLTE2LjQgMC0yMi42bDYwLjUtNjAuNSAxLjItMS4yIC42LTEuNSAyMC41LTUxLjFjMS42LTQuMS0uNC04LjgtNC41LTEwLjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const HousePersonLeave: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M245.2 1.9c-3-2.6-7.4-2.6-10.4 0l-232 200c-3.3 2.9-3.7 7.9-.8 11.3s7.9 3.7 11.3 .8L64 170.3 64 360c0 30.9 25.1 56 56 56l194.2 0 16-16L120 400c-22.1 0-40-17.9-40-40l0-203.5L240 18.6 370.9 131.4c4.5-3.2 9.2-6.2 14.1-9L245.2 1.9zM224 184c4.4 0 8 3.6 8 8l0 64c0 4.4-3.6 8-8 8l-64 0c-4.4 0-8-3.6-8-8l0-64c0-4.4 3.6-8 8-8l64 0zm-64-16c-13.3 0-24 10.7-24 24l0 64c0 13.3 10.7 24 24 24l64 0c13.3 0 24-10.7 24-24l0-64c0-13.3-10.7-24-24-24l-64 0zm297.1 19.3c-4.6-4-11-5.1-16.6-2.8c-1.1 .5-2.2 .9-3.4 1.4l-5.7 2.5c-21.6 9.6-37.9 28.3-44.4 51.1l-3.7 12.9c-2.4 8.5-11.3 13.4-19.8 11s-13.4-11.3-11-19.8l3.7-12.9c9.1-31.9 31.9-58.1 62.2-71.6l5.7-2.5c18.8-8.3 39-12.6 59.6-12.6c38.1 0 72.5 22.9 87.1 58.1l16.5 39.7c1.1 2.6 2.9 4.9 5.2 6.6l25 18.8c7.1 5.3 8.5 15.3 3.2 22.4s-15.3 8.5-22.4 3.2l-28.5-21.4c-4.6-3.4-8.1-8-10.3-13.3l-10.2-24.5c-2.6-6.3-8.9-10.2-15.6-9.8s-12.6 5-14.5 11.5L500 300.8c-1.6 5.4-.2 11.2 3.6 15.3l49.5 54c3.6 3.9 6.2 8.7 7.5 13.9l23 92.1c2.1 8.6-3.1 17.3-11.6 19.4s-17.3-3.1-19.4-11.6l-22-88.1c-.6-2.6-1.9-5-3.7-6.9l-70.7-77.1c-11.1-12.1-15.2-29-11-44.8L462 203.4c1.6-5.9-.3-12.1-4.9-16.1zM528 16a36 36 0 1 1 0 72 36 36 0 1 1 0-72zM427.4 209c3.3-2.3 6.8-4.3 10.6-6l5.7-2.5c1-.4 1.9-.8 2.9-1.2l-1.3 4.8-2.6 9.6-1.5 5.6-11.6 43.6c-5.6 21.1-.1 43.6 14.7 59.7l70.7 77.1 22 88.1c4.3 17.1 21.7 27.6 38.8 23.3s27.6-21.7 23.3-38.8l-23-92.1c-1.9-7.8-5.8-14.9-11.2-20.8l-49.5-54 12.1-41.2 7.2-24.4 9.8 23.5 .4 1c3.3 7.9 8.7 14.8 15.5 19.9l28.5 21.4c14.1 10.6 34.2 7.7 44.8-6.4s7.7-34.2-6.4-44.8l-25-18.8-16.5-39.7C568.5 154.8 528.3 128 483.7 128c-22.8 0-45.3 4.8-66.1 14l-5.7 2.5c-34.6 15.4-60.7 45.3-71.1 81.8l-3.7 12.9c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l3.7-12.9c4.1-14.3 13-26.6 24.9-34.9zM580 52A52 52 0 1 0 476 52a52 52 0 1 0 104 0zM419 343.9c-4.1-1.6-8.8 .4-10.4 4.5L388.7 398l-59.4 59.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l61.7-61.7c4.6-4.6 8.2-10.1 10.6-16.1L462.1 387c1.6-4.1-.4-8.8-4.5-10.4s-8.8 .4-10.4 4.5l-15.1 37.9c-1.6 4-4 7.7-7.1 10.7l-61.7 61.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l60.5-60.5 1.2-1.2 .6-1.5 20.5-51.1c1.6-4.1-.4-8.8-4.5-10.4z" />
    </Icon>
);

export default HousePersonLeave;
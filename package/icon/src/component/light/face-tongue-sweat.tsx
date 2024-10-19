
import { Icon } from "../../index";

/**
 * A component that renders the `face-tongue-sweat` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-tongue-sweat?s=light face-tongue-sweat}
 * @preview ![face-tongue-sweat](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjg4IDMyQzE3NC40IDMyIDgwLjYgMTE2LjUgNjYgMjI2LjFjLTEuMiA4LjgtOS4yIDE0LjktMTggMTMuN3MtMTQuOS05LjItMTMuNy0xOEM1MC45IDk2LjYgMTU4LjIgMCAyODggMEM0MjkuNCAwIDU0NCAxMTQuNiA1NDQgMjU2YzAgODMuOC00MC4yIDE1OC4xLTEwMi40IDIwNC44QzM5OC44IDQ5Mi45IDM0NS42IDUxMiAyODggNTEycy0xMTAuOC0xOS4xLTE1My42LTUxLjJjLTcuMS01LjMtOC41LTE1LjMtMy4yLTIyLjRzMTUuMy04LjUgMjIuNC0zLjJjMTUuNiAxMS44IDMyLjkgMjEuNSA1MS4zIDI4LjljLTguMS0xMy45LTEyLjgtMzAuMS0xMi45LTQ3LjNjLTEwLjItNy4yLTE2LTE1LjctMTYtMjQuN2MwLTI2LjUgNTAuMS00OCAxMTItNDhzMTEyIDIxLjUgMTEyIDQ4YzAgOS01LjggMTcuNS0xNiAyNC43Yy0uMSAxNy4yLTQuOCAzMy40LTEyLjkgNDcuM2MxOC40LTcuNCAzNS43LTE3LjEgNTEuMy0yOC45QzQ3Ni44IDM5NC4zIDUxMiAzMjkuMyA1MTIgMjU2QzUxMiAxMzIuMyA0MTEuNyAzMiAyODggMzJ6TTY0IDMxNy41Yy01LjMgNy4yLTEwLjggMTUuMS0xNS44IDIzYy01LjQgOC41LTkuOCAxNi40LTEyLjggMjMuMWMtMi42IDUuOC0zLjIgOC44LTMuNCA5LjVsMCAuMUMzMiAzODUuNSA0My43IDQwMCA2NCA0MDBzMzItMTQuNSAzMi0yNi43YzAgLjEgMCAuMSAwLS4xYy0uMS0uNy0uOC0zLjctMy40LTkuNmMtMy02LjctNy40LTE0LjUtMTIuOC0yMy4xYy01LTcuOS0xMC41LTE1LjgtMTUuOC0yM3ptLTguNi00MS40YzQuMy01LjUgMTIuOC01LjUgMTcuMSAwYzE3LjYgMjEuNyA1NS41IDcyLjIgNTUuNSA5Ny4yYzAgMzIuNS0yOC43IDU4LjctNjQgNTguN3MtNjQtMjYuMi02NC01OC43YzAtMjUgMzguMS03NS41IDU1LjUtOTcuMnpNMzY3LjYgMjQ4YTI0IDI0IDAgMSAxIDAgNDggMjQgMjQgMCAxIDEgMC00OHptLTEzNiAyNGEyNCAyNCAwIDEgMSAtNDggMCAyNCAyNCAwIDEgMSA0OCAwek0yMTEuMyAxNzEuM2wtNy40IDcuNGMtMjMuNiAyMy42LTUzLjkgMzkuMi04Ni44IDQ0LjdsLTIuNSAuNGMtOC43IDEuNS0xNy00LjQtMTguNC0xMy4yczQuNC0xNyAxMy4yLTE4LjRsMi41LS40YzI2LjMtNC40IDUwLjYtMTYuOSA2OS41LTM1LjdsNy40LTcuNGM2LjItNi4yIDE2LjQtNi4yIDIyLjYgMHM2LjIgMTYuNCAwIDIyLjZ6bTE1My40LTIyLjZjNi4yLTYuMiAxNi40LTYuMiAyMi42IDBsNy40IDcuNGMxOC45IDE4LjkgNDMuMiAzMS40IDY5LjUgMzUuN2wyLjUgLjRjOC43IDEuNSAxNC42IDkuNyAxMy4yIDE4LjRzLTkuNyAxNC42LTE4LjQgMTMuMmwtMi41LS40Yy0zMi45LTUuNS02My4zLTIxLjEtODYuOC00NC43bC03LjQtNy40Yy02LjItNi4yLTYuMi0xNi40IDAtMjIuNnpNMjI0IDQxNy42YzAgMzQuNSAyNy45IDYyLjQgNjIuNCA2Mi40bDMuMiAwYzM0LjUgMCA2Mi40LTI3LjkgNjIuNC02Mi40bDAtMTQuNmMwLTE0LjktMTIuMS0yNy0yNy0yN2wtMi41IDBjLTEwLjkgMC0yMC40IDcuNC0yMyAxOGMtMyAxMi0yMCAxMi0yMyAwYy0yLjYtMTAuNi0xMi4xLTE4LTIzLTE4bC0yLjUgMGMtMTQuOSAwLTI3IDEyLjEtMjcgMjdsMCAxNC42eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const FaceTongueSweat: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 32C174.4 32 80.6 116.5 66 226.1c-1.2 8.8-9.2 14.9-18 13.7s-14.9-9.2-13.7-18C50.9 96.6 158.2 0 288 0C429.4 0 544 114.6 544 256c0 83.8-40.2 158.1-102.4 204.8C398.8 492.9 345.6 512 288 512s-110.8-19.1-153.6-51.2c-7.1-5.3-8.5-15.3-3.2-22.4s15.3-8.5 22.4-3.2c15.6 11.8 32.9 21.5 51.3 28.9c-8.1-13.9-12.8-30.1-12.9-47.3c-10.2-7.2-16-15.7-16-24.7c0-26.5 50.1-48 112-48s112 21.5 112 48c0 9-5.8 17.5-16 24.7c-.1 17.2-4.8 33.4-12.9 47.3c18.4-7.4 35.7-17.1 51.3-28.9C476.8 394.3 512 329.3 512 256C512 132.3 411.7 32 288 32zM64 317.5c-5.3 7.2-10.8 15.1-15.8 23c-5.4 8.5-9.8 16.4-12.8 23.1c-2.6 5.8-3.2 8.8-3.4 9.5l0 .1C32 385.5 43.7 400 64 400s32-14.5 32-26.7c0 .1 0 .1 0-.1c-.1-.7-.8-3.7-3.4-9.6c-3-6.7-7.4-14.5-12.8-23.1c-5-7.9-10.5-15.8-15.8-23zm-8.6-41.4c4.3-5.5 12.8-5.5 17.1 0c17.6 21.7 55.5 72.2 55.5 97.2c0 32.5-28.7 58.7-64 58.7s-64-26.2-64-58.7c0-25 38.1-75.5 55.5-97.2zM367.6 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm-136 24a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM211.3 171.3l-7.4 7.4c-23.6 23.6-53.9 39.2-86.8 44.7l-2.5 .4c-8.7 1.5-17-4.4-18.4-13.2s4.4-17 13.2-18.4l2.5-.4c26.3-4.4 50.6-16.9 69.5-35.7l7.4-7.4c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6zm153.4-22.6c6.2-6.2 16.4-6.2 22.6 0l7.4 7.4c18.9 18.9 43.2 31.4 69.5 35.7l2.5 .4c8.7 1.5 14.6 9.7 13.2 18.4s-9.7 14.6-18.4 13.2l-2.5-.4c-32.9-5.5-63.3-21.1-86.8-44.7l-7.4-7.4c-6.2-6.2-6.2-16.4 0-22.6zM224 417.6c0 34.5 27.9 62.4 62.4 62.4l3.2 0c34.5 0 62.4-27.9 62.4-62.4l0-14.6c0-14.9-12.1-27-27-27l-2.5 0c-10.9 0-20.4 7.4-23 18c-3 12-20 12-23 0c-2.6-10.6-12.1-18-23-18l-2.5 0c-14.9 0-27 12.1-27 27l0 14.6z" />
    </Icon>
);

export default FaceTongueSweat;
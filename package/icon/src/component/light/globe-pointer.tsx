
import { Icon } from "../../index";

/**
 * A component that renders the `globe-pointer` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/globe-pointer?s=light globe-pointer}
 * @preview ![globe-pointer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzE3LjkgNDIyLjdDMjk2LjQgNDY1LjYgMjcyLjcgNDgwIDI1NiA0ODBjLTcuOSAwLTE3LjMtMy4yLTI3LjMtMTFsLTYuOSAxOC42Yy0yLjkgNy44LTcuNyAxNC43LTEzLjkgMTkuOWMxNS42IDMgMzEuNiA0LjUgNDguMSA0LjVjMTQxLjQgMCAyNTYtMTE0LjYgMjU2LTI1NlMzOTcuNCAwIDI1NiAwUzAgMTE0LjYgMCAyNTZjMCAxNi40IDEuNSAzMi41IDQuNSA0OC4xYzUuMy02LjIgMTIuMS0xMSAxOS45LTEzLjlsOS42LTMuNWMtMS40LTEwLTIuMS0yMC4yLTIuMS0zMC42YzAtMjIuMiAzLjItNDMuNyA5LjMtNjRsOTAuOCAwYy0yLjUgMTkuMi0zLjkgMzkuMy00IDYwbDMyLjItMTEuOWMuNS0xNi43IDEuOS0zMi44IDQuMS00OC4xbDE4My40IDBjMi44IDIwLjIgNC4zIDQxLjcgNC4zIDY0cy0xLjUgNDMuOC00LjMgNjRsLTY0LjEgMC0xMS44IDMyIDcwLjIgMGMtNS45IDI3LTE0LjIgNTAuOS0yNC4xIDcwLjd6TTE5NC4xIDg5LjNDMjE1LjYgNDYuNCAyMzkuMyAzMiAyNTYgMzJzNDAuNCAxNC40IDYxLjkgNTcuM2M5LjkgMTkuOCAxOC4yIDQzLjcgMjQuMSA3MC43bC0xNzIgMGM1LjktMjcgMTQuMi01MC45IDI0LjEtNzAuN3pNMzg0IDI1NmMwLTIyLjEtMS40LTQzLjUtNC02NGw5MC44IDBjNiAyMC4zIDkuMyA0MS44IDkuMyA2NHMtMy4yIDQzLjctOS4zIDY0TDM4MCAzMjBjMi42LTIwLjUgNC00MS45IDQtNjR6bS05LjMtOTZjLTkuNi00Ny42LTI2LjItODgtNDcuMi0xMTYuM2M1Ny44IDE5LjUgMTA1IDYxLjggMTMwLjkgMTE2LjNsLTgzLjggMHpNNTMuNiAxNjBjMjUuOS01NC41IDczLjEtOTYuOSAxMzAuOS0xMTYuM2MtMjEgMjguMy0zNy41IDY4LjgtNDcuMiAxMTYuM2wtODMuNyAwek0zNzQuNyAzNTJsODMuOCAwYy0yNS45IDU0LjUtNzMuMSA5Ni45LTEzMC45IDExNi4zYzIxLTI4LjMgMzcuNi02OC44IDQ3LjItMTE2LjN6TTI3MSAyNjEuNWMyLjItNS45IC43LTEyLjQtMy43LTE2LjhzLTExLTUuOS0xNi44LTMuN2wtMjE1IDc5LjJjLTYuMiAyLjMtMTAuMyA4LjEtMTAuNSAxNC43czMuOCAxMi42IDkuOSAxNS4xbDc0IDMwLjVMNC43IDQ4NC43Yy02LjIgNi4yLTYuMiAxNi40IDAgMjIuNnMxNi40IDYuMiAyMi42IDBMMTMxLjUgNDAzLjFsMzAuNSA3NGMyLjUgNi4xIDguNSAxMCAxNS4xIDkuOXMxMi40LTQuMyAxNC43LTEwLjVsNzkuMi0yMTV6TTE0My4zIDM2MEw4NS4xIDMzNiAyMjkgMjgzIDE3NiA0MjYuOWwtMjQtNTguMmMtMS42LTMuOS00LjgtNy4xLTguNy04Ljd6Ii8+PC9zdmc+|width=32|height=32)
 */
const GlobePointer: typeof Icon = x => (
    <Icon {...x}>
        <path d="M317.9 422.7C296.4 465.6 272.7 480 256 480c-7.9 0-17.3-3.2-27.3-11l-6.9 18.6c-2.9 7.8-7.7 14.7-13.9 19.9c15.6 3 31.6 4.5 48.1 4.5c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256c0 16.4 1.5 32.5 4.5 48.1c5.3-6.2 12.1-11 19.9-13.9l9.6-3.5c-1.4-10-2.1-20.2-2.1-30.6c0-22.2 3.2-43.7 9.3-64l90.8 0c-2.5 19.2-3.9 39.3-4 60l32.2-11.9c.5-16.7 1.9-32.8 4.1-48.1l183.4 0c2.8 20.2 4.3 41.7 4.3 64s-1.5 43.8-4.3 64l-64.1 0-11.8 32 70.2 0c-5.9 27-14.2 50.9-24.1 70.7zM194.1 89.3C215.6 46.4 239.3 32 256 32s40.4 14.4 61.9 57.3c9.9 19.8 18.2 43.7 24.1 70.7l-172 0c5.9-27 14.2-50.9 24.1-70.7zM384 256c0-22.1-1.4-43.5-4-64l90.8 0c6 20.3 9.3 41.8 9.3 64s-3.2 43.7-9.3 64L380 320c2.6-20.5 4-41.9 4-64zm-9.3-96c-9.6-47.6-26.2-88-47.2-116.3c57.8 19.5 105 61.8 130.9 116.3l-83.8 0zM53.6 160c25.9-54.5 73.1-96.9 130.9-116.3c-21 28.3-37.5 68.8-47.2 116.3l-83.7 0zM374.7 352l83.8 0c-25.9 54.5-73.1 96.9-130.9 116.3c21-28.3 37.6-68.8 47.2-116.3zM271 261.5c2.2-5.9 .7-12.4-3.7-16.8s-11-5.9-16.8-3.7l-215 79.2c-6.2 2.3-10.3 8.1-10.5 14.7s3.8 12.6 9.9 15.1l74 30.5L4.7 484.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L131.5 403.1l30.5 74c2.5 6.1 8.5 10 15.1 9.9s12.4-4.3 14.7-10.5l79.2-215zM143.3 360L85.1 336 229 283 176 426.9l-24-58.2c-1.6-3.9-4.8-7.1-8.7-8.7z" />
    </Icon>
);

export default GlobePointer;
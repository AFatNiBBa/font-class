
import { Icon } from "../../index";

/**
 * A component that renders the `gear-complex-code` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gear-complex-code?s=regular gear-complex-code}
 * @preview ![gear-complex-code](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTg4LjIgMzYuN0MxOTMuNCAxNS4yIDIxMi43IDAgMjM0LjkgMGw0Mi4yIDBjMjIuMiAwIDQxLjUgMTUuMiA0Ni43IDM2LjdMMzMyIDcxbDEuMSAuNCAzMC0xOC40YzE4LjktMTEuNiA0My4zLTguNyA1OSA3bDI5LjggMjkuOGMxNS43IDE1LjcgMTguNiA0MC4xIDcgNTlsLTE4LjQgMzAgLjQgMS4xIDM0LjIgOC4zYzIxLjYgNS4yIDM2LjcgMjQuNSAzNi43IDQ2LjdsMCA0Mi4yYzAgMjIuMi0xNS4yIDQxLjUtMzYuNyA0Ni43TDQ0MSAzMzJsLS40IDEuMSAxOC40IDMwYzExLjYgMTguOSA4LjcgNDMuMy03IDU5bC0yOS44IDI5LjhjLTE1LjcgMTUuNy00MC4xIDE4LjYtNTkgN2wtMzAtMTguNEwzMzIgNDQxbC04LjMgMzQuMmMtNS4yIDIxLjYtMjQuNSAzNi43LTQ2LjcgMzYuN2wtNDIuMiAwYy0yMi4yIDAtNDEuNS0xNS4yLTQ2LjctMzYuN0wxODAgNDQxbC0xLjEtLjQtMzAgMTguNGMtMTguOSAxMS42LTQzLjMgOC43LTU5LTdMNjAuMSA0MjIuMWMtMTUuNy0xNS43LTE4LjYtNDAuMS03LTU5bDE4LjQtMzBMNzEgMzMybC0zNC4yLTguM0MxNS4yIDMxOC42IDAgMjk5LjMgMCAyNzcuMWwwLTQyLjJjMC0yMi4yIDE1LjItNDEuNSAzNi43LTQ2LjdMNzEgMTgwbC40LTEuMUw1MyAxNDguOWMtMTEuNi0xOC45LTguNy00My4zIDctNTlMODkuOSA2MC4xYzE1LjctMTUuNyA0MC4xLTE4LjYgNTktN2wzMCAxOC40TDE4MCA3MWw4LjMtMzQuMnpNMjc3LjEgNDhsLTQyLjIgMEwyMjMuNiA5NC42Yy0xLjkgOC03LjkgMTQuNS0xNS43IDE3LjFjLTYuOCAyLjMtMTMuNSA1LTE5LjkgOC4yYy03LjQgMy43LTE2LjIgMy4zLTIzLjMtMUwxMjMuOCA5NCA5NCAxMjMuOGwyNSA0MC45YzQuMyA3LjEgNC43IDE1LjkgMSAyMy4zYy0zLjIgNi40LTYgMTMtOC4yIDE5LjljLTIuNiA3LjktOS4xIDEzLjgtMTcuMSAxNS43TDQ4IDIzNC45bDAgNDIuMiA0Ni42IDExLjNjOCAxLjkgMTQuNSA3LjkgMTcuMSAxNS43YzIuMyA2LjggNSAxMy41IDguMiAxOS45YzMuNyA3LjQgMy4zIDE2LjItMSAyMy4zTDk0IDM4OC4yIDEyMy44IDQxOGw0MC45LTI1YzcuMS00LjMgMTUuOS00LjcgMjMuMy0xYzYuNCAzLjIgMTMgNiAxOS45IDguMmM3LjkgMi42IDEzLjggOS4xIDE1LjcgMTcuMUwyMzQuOSA0NjRsNDIuMiAwIDExLjMtNDYuNmMxLjktOCA3LjktMTQuNSAxNS43LTE3LjFjNi44LTIuMyAxMy41LTUgMTkuOS04LjJjNy40LTMuNyAxNi4yLTMuMyAyMy4zIDFsNDAuOSAyNUw0MTggMzg4LjJsLTI1LTQwLjljLTQuMy03LjEtNC43LTE1LjktMS0yMy4zYzMuMi02LjQgNi0xMyA4LjItMTkuOWMyLjYtNy45IDkuMS0xMy44IDE3LjEtMTUuN0w0NjQgMjc3LjFsMC00Mi4yLTQ2LjYtMTEuM2MtOC0xLjktMTQuNS03LjktMTcuMS0xNS43Yy0yLjMtNi44LTUtMTMuNS04LjItMTkuOWMtMy43LTcuNC0zLjMtMTYuMiAxLTIzLjNsMjUtNDAuOUwzODguMiA5NGwtNDAuOSAyNWMtNy4xIDQuMy0xNS45IDQuNy0yMy4zIDFjLTYuNC0zLjItMTMtNi0xOS45LTguMmMtNy45LTIuNi0xMy44LTkuMS0xNS43LTE3LjFMMjc3LjEgNDh6bTE0LjYgMTE1LjNsLTMyIDE5MmMtMS44IDEwLjktMTIuMSAxOC4zLTIzIDE2LjRzLTE4LjMtMTIuMS0xNi40LTIzbDMyLTE5MmMxLjgtMTAuOSAxMi4xLTE4LjMgMjMtMTYuNHMxOC4zIDEyLjEgMTYuNCAyM3ptLTkzLjYgNjYuOUwxNzIuMyAyNTZsMjUuOSAyNS45YzcuOCA3LjggNy44IDIwLjUgMCAyOC4zcy0yMC41IDcuOC0yOC4zIDBsLTQwLTQwYy03LjgtNy44LTcuOC0yMC41IDAtMjguM2w0MC00MGM3LjgtNy44IDIwLjUtNy44IDI4LjMgMHM3LjggMjAuNSAwIDI4LjN6bTE0NC0yOC4zbDQwIDQwYzcuOCA3LjggNy44IDIwLjUgMCAyOC4zbC00MCA0MGMtNy44IDcuOC0yMC41IDcuOC0yOC4zIDBzLTcuOC0yMC41IDAtMjguM0wzMzkuNyAyNTZsLTI1LjktMjUuOWMtNy44LTcuOC03LjgtMjAuNSAwLTI4LjNzMjAuNS03LjggMjguMyAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const GearComplexCode: typeof Icon = x => (
    <Icon {...x}>
        <path d="M188.2 36.7C193.4 15.2 212.7 0 234.9 0l42.2 0c22.2 0 41.5 15.2 46.7 36.7L332 71l1.1 .4 30-18.4c18.9-11.6 43.3-8.7 59 7l29.8 29.8c15.7 15.7 18.6 40.1 7 59l-18.4 30 .4 1.1 34.2 8.3c21.6 5.2 36.7 24.5 36.7 46.7l0 42.2c0 22.2-15.2 41.5-36.7 46.7L441 332l-.4 1.1 18.4 30c11.6 18.9 8.7 43.3-7 59l-29.8 29.8c-15.7 15.7-40.1 18.6-59 7l-30-18.4L332 441l-8.3 34.2c-5.2 21.6-24.5 36.7-46.7 36.7l-42.2 0c-22.2 0-41.5-15.2-46.7-36.7L180 441l-1.1-.4-30 18.4c-18.9 11.6-43.3 8.7-59-7L60.1 422.1c-15.7-15.7-18.6-40.1-7-59l18.4-30L71 332l-34.2-8.3C15.2 318.6 0 299.3 0 277.1l0-42.2c0-22.2 15.2-41.5 36.7-46.7L71 180l.4-1.1L53 148.9c-11.6-18.9-8.7-43.3 7-59L89.9 60.1c15.7-15.7 40.1-18.6 59-7l30 18.4L180 71l8.3-34.2zM277.1 48l-42.2 0L223.6 94.6c-1.9 8-7.9 14.5-15.7 17.1c-6.8 2.3-13.5 5-19.9 8.2c-7.4 3.7-16.2 3.3-23.3-1L123.8 94 94 123.8l25 40.9c4.3 7.1 4.7 15.9 1 23.3c-3.2 6.4-6 13-8.2 19.9c-2.6 7.9-9.1 13.8-17.1 15.7L48 234.9l0 42.2 46.6 11.3c8 1.9 14.5 7.9 17.1 15.7c2.3 6.8 5 13.5 8.2 19.9c3.7 7.4 3.3 16.2-1 23.3L94 388.2 123.8 418l40.9-25c7.1-4.3 15.9-4.7 23.3-1c6.4 3.2 13 6 19.9 8.2c7.9 2.6 13.8 9.1 15.7 17.1L234.9 464l42.2 0 11.3-46.6c1.9-8 7.9-14.5 15.7-17.1c6.8-2.3 13.5-5 19.9-8.2c7.4-3.7 16.2-3.3 23.3 1l40.9 25L418 388.2l-25-40.9c-4.3-7.1-4.7-15.9-1-23.3c3.2-6.4 6-13 8.2-19.9c2.6-7.9 9.1-13.8 17.1-15.7L464 277.1l0-42.2-46.6-11.3c-8-1.9-14.5-7.9-17.1-15.7c-2.3-6.8-5-13.5-8.2-19.9c-3.7-7.4-3.3-16.2 1-23.3l25-40.9L388.2 94l-40.9 25c-7.1 4.3-15.9 4.7-23.3 1c-6.4-3.2-13-6-19.9-8.2c-7.9-2.6-13.8-9.1-15.7-17.1L277.1 48zm14.6 115.3l-32 192c-1.8 10.9-12.1 18.3-23 16.4s-18.3-12.1-16.4-23l32-192c1.8-10.9 12.1-18.3 23-16.4s18.3 12.1 16.4 23zm-93.6 66.9L172.3 256l25.9 25.9c7.8 7.8 7.8 20.5 0 28.3s-20.5 7.8-28.3 0l-40-40c-7.8-7.8-7.8-20.5 0-28.3l40-40c7.8-7.8 20.5-7.8 28.3 0s7.8 20.5 0 28.3zm144-28.3l40 40c7.8 7.8 7.8 20.5 0 28.3l-40 40c-7.8 7.8-20.5 7.8-28.3 0s-7.8-20.5 0-28.3L339.7 256l-25.9-25.9c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0z" />
    </Icon>
);

export default GearComplexCode;
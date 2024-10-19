
import { Icon } from "../../index";

/**
 * A component that renders the `octopus` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octopus?s=regular octopus}
 * @preview ![octopus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjA4IDE2MGwwIDMuNGMwIDYuOSAuNiAxMy44IDEuOSAyMC42YzAgMCAwIDAgMCAwTDIyOSAyODkuNmw5IDQ5LjdjMS4zIDcgMS45IDE0LjIgMS45IDIxLjRsMCAyLjVjMCAxMC4xLTEuMyAxOS45LTMuNyAyOS4zbDEyLjItNi41YzIyLTExLjcgNDYuNi0xNy45IDcxLjUtMTcuOXM0OS41IDYuMSA3MS41IDE3LjlsMTIuMiA2LjVjLTIuNC05LjQtMy43LTE5LjItMy43LTI5LjNsMC0yLjVjMC03LjIgLjYtMTQuMyAxLjktMjEuNGw5LTQ5LjZjMCAwIDAgMCAwLS4xbDE5LjItMTA1LjVjMCAwIDAgMCAwLS4xczAgMCAwIDBjMS4yLTYuOCAxLjgtMTMuNyAxLjgtMjAuNmwwLTMuNGMwLTYxLjktNTAuMS0xMTItMTEyLTExMnMtMTEyIDUwLjEtMTEyIDExMnpNNDQ4LjEgMzY3LjJjMi4xIDM2LjIgMzIuMSA2NC44IDY4LjggNjQuOGMzMi41IDAgNjAuNi0yMi43IDY3LjQtNTQuNWw4LjMtMzguNmMyLjgtMTMgMTUuNS0yMS4yIDI4LjUtMTguNHMyMS4yIDE1LjUgMTguNCAyOC41bC04LjMgMzguNkM2MTkuNyA0NDEuNSA1NzIgNDgwIDUxNi45IDQ4MGwtLjIgMGMtMzMuNCAwLTY2LjItOC4zLTk1LjYtMjRsLTUyLjEtMjcuOGMtMTUuMS04LTMxLjktMTIuMi00OC45LTEyLjJzLTMzLjkgNC4yLTQ4LjkgMTIuMkwyMTguOSA0NTZjLTI5LjUgMTUuNy02Mi40IDI0LTk1LjggMjRDNjggNDgwIDIwLjMgNDQxLjUgOC44IDM4Ny42TC41IDM0OWMtMi44LTEzIDUuNS0yNS43IDE4LjQtMjguNXMyNS43IDUuNSAyOC41IDE4LjRsOC4zIDM4LjZjNi44IDMxLjggMzQuOSA1NC41IDY3LjQgNTQuNWMzNi43IDAgNjYuNy0yOC43IDY4LjgtNjQuOGMtMTAuMyA1LjYtMjIuMiA4LjgtMzUgOC44Yy0zMi41IDAtNjEuMi0yMS40LTcwLjMtNTIuNkw3Mi44IDI3Ni41QzY2LjQgMjU0LjkgNDYuNiAyNDAgMjQgMjQwYy0xMy4zIDAtMjQtMTAuNy0yNC0yNHMxMC43LTI0IDI0LTI0YzQzLjggMCA4Mi41IDI4LjkgOTQuOCA3MWwxMy44IDQ2LjljMy4yIDEwLjggMTMuMSAxOC4yIDI0LjMgMTguMmMxNS44IDAgMjcuNy0xNC4zIDI0LjktMjkuOGMwIDAgMCAwIDAgMEwxNjIuNiAxOTIuN3MwIDAgMCAwczAgMCAwIDBjLTEuNy05LjYtMi42LTE5LjQtMi42LTI5LjFjMCAwIDAgMCAwLS4xbDAtMy40QzE2MCA3MS42IDIzMS42IDAgMzIwIDBzMTYwIDcxLjYgMTYwIDE2MGwwIDMuNGMwIDAgMCAwIDAgLjFjMCA5LjgtLjkgMTkuNS0yLjYgMjkuMWMwIDAgMCAwIDAgMHMwIDAgMCAwTDQ1OC4yIDI5OC4yczAgMCAwIDBjLTIuOCAxNS41IDkuMSAyOS44IDI0LjkgMjkuOGMxMS4yIDAgMjEuMS03LjQgMjQuMy0xOC4yTDUyMS4yIDI2M2MxMi40LTQyLjEgNTEtNzEgOTQuOC03MWMxMy4zIDAgMjQgMTAuNyAyNCAyNHMtMTAuNyAyNC0yNCAyNGMtMjIuNiAwLTQyLjQgMTQuOS00OC44IDM2LjVsLTEzLjggNDYuOWMtOS4yIDMxLjItMzcuOCA1Mi42LTcwLjMgNTIuNmMtMTIuOCAwLTI0LjYtMy4yLTM1LTguOHpNMjU2IDI2OGEyMCAyMCAwIDEgMSA0MCAwIDIwIDIwIDAgMSAxIC00MCAwem0xMDgtMjBhMjAgMjAgMCAxIDEgMCA0MCAyMCAyMCAwIDEgMSAwLTQweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Octopus: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M208 160l0 3.4c0 6.9 .6 13.8 1.9 20.6c0 0 0 0 0 0L229 289.6l9 49.7c1.3 7 1.9 14.2 1.9 21.4l0 2.5c0 10.1-1.3 19.9-3.7 29.3l12.2-6.5c22-11.7 46.6-17.9 71.5-17.9s49.5 6.1 71.5 17.9l12.2 6.5c-2.4-9.4-3.7-19.2-3.7-29.3l0-2.5c0-7.2 .6-14.3 1.9-21.4l9-49.6c0 0 0 0 0-.1l19.2-105.5c0 0 0 0 0-.1s0 0 0 0c1.2-6.8 1.8-13.7 1.8-20.6l0-3.4c0-61.9-50.1-112-112-112s-112 50.1-112 112zM448.1 367.2c2.1 36.2 32.1 64.8 68.8 64.8c32.5 0 60.6-22.7 67.4-54.5l8.3-38.6c2.8-13 15.5-21.2 28.5-18.4s21.2 15.5 18.4 28.5l-8.3 38.6C619.7 441.5 572 480 516.9 480l-.2 0c-33.4 0-66.2-8.3-95.6-24l-52.1-27.8c-15.1-8-31.9-12.2-48.9-12.2s-33.9 4.2-48.9 12.2L218.9 456c-29.5 15.7-62.4 24-95.8 24C68 480 20.3 441.5 8.8 387.6L.5 349c-2.8-13 5.5-25.7 18.4-28.5s25.7 5.5 28.5 18.4l8.3 38.6c6.8 31.8 34.9 54.5 67.4 54.5c36.7 0 66.7-28.7 68.8-64.8c-10.3 5.6-22.2 8.8-35 8.8c-32.5 0-61.2-21.4-70.3-52.6L72.8 276.5C66.4 254.9 46.6 240 24 240c-13.3 0-24-10.7-24-24s10.7-24 24-24c43.8 0 82.5 28.9 94.8 71l13.8 46.9c3.2 10.8 13.1 18.2 24.3 18.2c15.8 0 27.7-14.3 24.9-29.8c0 0 0 0 0 0L162.6 192.7s0 0 0 0s0 0 0 0c-1.7-9.6-2.6-19.4-2.6-29.1c0 0 0 0 0-.1l0-3.4C160 71.6 231.6 0 320 0s160 71.6 160 160l0 3.4c0 0 0 0 0 .1c0 9.8-.9 19.5-2.6 29.1c0 0 0 0 0 0s0 0 0 0L458.2 298.2s0 0 0 0c-2.8 15.5 9.1 29.8 24.9 29.8c11.2 0 21.1-7.4 24.3-18.2L521.2 263c12.4-42.1 51-71 94.8-71c13.3 0 24 10.7 24 24s-10.7 24-24 24c-22.6 0-42.4 14.9-48.8 36.5l-13.8 46.9c-9.2 31.2-37.8 52.6-70.3 52.6c-12.8 0-24.6-3.2-35-8.8zM256 268a20 20 0 1 1 40 0 20 20 0 1 1 -40 0zm108-20a20 20 0 1 1 0 40 20 20 0 1 1 0-40z" />
    </Icon>
);

export default Octopus;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `onion` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/onion?s=duotone onion}
 * @preview ![onion](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI4OGMwIDgwLjQgNTggMTM1LjIgMTMxLjkgMTYwLjNjMTUgNS4xIDMwLjcgOSA0Ni43IDExLjZjNy4xIDEuMiAxNC4yIDIuMSAyMS40IDIuN2M4IC43IDE2IDEuMiAyNCAxLjNjOC0uMSAxNi0uNSAyNC0xLjNjNy4yLS43IDE0LjMtMS42IDIxLjQtMi43YzE2LTIuNiAzMS43LTYuNSA0Ni43LTExLjZDMzkwIDQyMy4yIDQ0OCAzNjguNCA0NDggMjg4YzAtODQuNS00OS0xMjQuMy05NS4zLTE2MkMzMTYgOTYuMiAyODEgNjcuOCAyNzMuNSAxOS44QzI3MS44IDkgMjYzLjEgMCAyNTIuMiAwYy03LjUgMC0xNC4zIDQuMi0xNy43IDEwLjlsLTMuNCA2LjhjLTIuOSA1LjktMTEuNCA1LjktMTQuMyAwbC0zLjQtNi44QzIxMC4xIDQuMiAyMDMuMyAwIDE5NS44IDBjLTEwLjkgMC0xOS42IDktMjEuMyAxOS44QzE2NyA2Ny44IDEzMiA5Ni4yIDk1LjMgMTI2QzQ5IDE2My43IDAgMjAzLjUgMCAyODh6bTczIDY5LjZjLTEzLjktMzctNi42LTgxLjMgMi42LTExNGM0LjctMTYuNyAxMC4yLTMxLjQgMTQuNS00MS44YzIuMi01LjIgNC05LjQgNS40LTEyLjNjLjctMS41IDEuMi0yLjYgMS42LTMuNGwuNC0uOWMuNC0uOCAuOC0xLjUgMS4yLTIuMmMyLjUtMy44IDYuNi02LjQgMTEuMy02LjljMS45LS4yIDMuOC0uMSA1LjYgLjNzMy42IDEuMiA1LjIgMi4yYzMuOSAyLjYgNi40IDYuOCA3IDExLjJjLjMgMS45IC4yIDMuOS0uMyA1LjljLS4zIDEuMy0uOCAyLjUtMS4zIDMuNmwtLjMgLjdjLS4zIC42LS44IDEuNi0xLjQgMi45Yy0xLjIgMi42LTIuOSA2LjQtNC45IDExLjJjLTQgOS42LTkgMjMtMTMuMyAzOC4yYy04LjggMzEuMy0xMy41IDY3LjEtMy40IDk0YzMuMSA4LjMtMS4xIDE3LjUtOS40IDIwLjZzLTE3LjUtMS4xLTIwLjYtOS40em0xMDMuNSAzMC4zYy0xNi45LTY3LjUtOC4zLTEzNC40IDQtMTgzLjhjNi4yLTI0LjggMTMuNC00NS41IDE5LjEtNjBjMi45LTcuMyA1LjMtMTMgNy4xLTE3Yy45LTIgMS42LTMuNSAyLjEtNC42bC42LTEuMmMuNC0uOCAuOC0xLjUgMS4yLTIuMmMyLjYtNCA2LjgtNi41IDExLjQtN2MxLjktLjIgMy44LS4xIDUuNiAuM3MzLjYgMS4yIDUuMiAyLjJjMy44IDIuNSA2LjQgNi42IDcgMTEuNGMuMiAxLjkgLjEgMy44LS4zIDUuNmMtLjMgMS4zLS44IDIuNS0xLjQgMy43bC0uNSAxYy0uNCAuOS0xIDIuMi0xLjggNGMtMS42IDMuNS0zLjkgOC44LTYuNSAxNS41Yy01LjMgMTMuNS0xMi4xIDMyLjgtMTcuOSA1NmMtMTEuNyA0Ni42LTE5LjEgMTA3LjctNCAxNjguMmMyLjEgOC42LTMuMSAxNy4zLTExLjYgMTkuNHMtMTcuMy0zLjEtMTkuNC0xMS42ek0yODggMTYwYzAtOC44IDcuMi0xNiAxNi0xNmMuMiAwIC40IDAgLjYgMGM1LjgtLjIgMTEuNiAyLjcgMTQuNyA4LjJsLjIgLjQgLjYgMS4xYy41IC45IDEuMiAyLjIgMi4xIDMuOWMxLjggMy40IDQuMiA4LjMgNy4xIDE0LjNjNS43IDEyLjEgMTMuMSAyOS4yIDE5LjggNDguOWMxMy4xIDM4LjcgMjQuNSA5MC42IDExLjcgMTM1LjVjLTIuNCA4LjUtMTEuMyAxMy40LTE5LjggMTFzLTEzLjQtMTEuMy0xMS0xOS44YzEwLTM1LjEgMS40LTc5LjItMTEuMi0xMTYuNWMtNi4yLTE4LjMtMTMuMS0zNC4yLTE4LjQtNDUuNmMtMi43LTUuNy00LjktMTAuMi02LjYtMTMuM2MtMy41LTIuOS01LjctNy4zLTUuNy0xMi4yeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTMxLjkgNDQ4LjNsLTEwLjcgMzIuMWMtNC4yIDEyLjYgMi42IDI2LjIgMTUuMiAzMC40czI2LjItMi42IDMwLjQtMTUuMkwxNzguNiA0NjBjLTE2LTIuNi0zMS43LTYuNS00Ni43LTExLjZ6TTIwMCA0NjIuN2wwIDI1LjNjMCAxMy4zIDEwLjcgMjQgMjQgMjRzMjQtMTAuNyAyNC0yNGwwLTI1LjNjLTggLjctMTYgMS4yLTI0IDEuM2MtOC0uMS0xNi0uNS0yNC0xLjN6bTY5LjQtMi43bDExLjkgMzUuNmM0LjIgMTIuNiAxNy44IDE5LjQgMzAuNCAxNS4yczE5LjQtMTcuOCAxNS4yLTMwLjRsLTEwLjctMzIuMWMtMTUgNS4xLTMwLjcgOS00Ni43IDExLjZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Onion: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 288c0 80.4 58 135.2 131.9 160.3c15 5.1 30.7 9 46.7 11.6c7.1 1.2 14.2 2.1 21.4 2.7c8 .7 16 1.2 24 1.3c8-.1 16-.5 24-1.3c7.2-.7 14.3-1.6 21.4-2.7c16-2.6 31.7-6.5 46.7-11.6C390 423.2 448 368.4 448 288c0-84.5-49-124.3-95.3-162C316 96.2 281 67.8 273.5 19.8C271.8 9 263.1 0 252.2 0c-7.5 0-14.3 4.2-17.7 10.9l-3.4 6.8c-2.9 5.9-11.4 5.9-14.3 0l-3.4-6.8C210.1 4.2 203.3 0 195.8 0c-10.9 0-19.6 9-21.3 19.8C167 67.8 132 96.2 95.3 126C49 163.7 0 203.5 0 288zm73 69.6c-13.9-37-6.6-81.3 2.6-114c4.7-16.7 10.2-31.4 14.5-41.8c2.2-5.2 4-9.4 5.4-12.3c.7-1.5 1.2-2.6 1.6-3.4l.4-.9c.4-.8 .8-1.5 1.2-2.2c2.5-3.8 6.6-6.4 11.3-6.9c1.9-.2 3.8-.1 5.6 .3s3.6 1.2 5.2 2.2c3.9 2.6 6.4 6.8 7 11.2c.3 1.9 .2 3.9-.3 5.9c-.3 1.3-.8 2.5-1.3 3.6l-.3 .7c-.3 .6-.8 1.6-1.4 2.9c-1.2 2.6-2.9 6.4-4.9 11.2c-4 9.6-9 23-13.3 38.2c-8.8 31.3-13.5 67.1-3.4 94c3.1 8.3-1.1 17.5-9.4 20.6s-17.5-1.1-20.6-9.4zm103.5 30.3c-16.9-67.5-8.3-134.4 4-183.8c6.2-24.8 13.4-45.5 19.1-60c2.9-7.3 5.3-13 7.1-17c.9-2 1.6-3.5 2.1-4.6l.6-1.2c.4-.8 .8-1.5 1.2-2.2c2.6-4 6.8-6.5 11.4-7c1.9-.2 3.8-.1 5.6 .3s3.6 1.2 5.2 2.2c3.8 2.5 6.4 6.6 7 11.4c.2 1.9 .1 3.8-.3 5.6c-.3 1.3-.8 2.5-1.4 3.7l-.5 1c-.4 .9-1 2.2-1.8 4c-1.6 3.5-3.9 8.8-6.5 15.5c-5.3 13.5-12.1 32.8-17.9 56c-11.7 46.6-19.1 107.7-4 168.2c2.1 8.6-3.1 17.3-11.6 19.4s-17.3-3.1-19.4-11.6zM288 160c0-8.8 7.2-16 16-16c.2 0 .4 0 .6 0c5.8-.2 11.6 2.7 14.7 8.2l.2 .4 .6 1.1c.5 .9 1.2 2.2 2.1 3.9c1.8 3.4 4.2 8.3 7.1 14.3c5.7 12.1 13.1 29.2 19.8 48.9c13.1 38.7 24.5 90.6 11.7 135.5c-2.4 8.5-11.3 13.4-19.8 11s-13.4-11.3-11-19.8c10-35.1 1.4-79.2-11.2-116.5c-6.2-18.3-13.1-34.2-18.4-45.6c-2.7-5.7-4.9-10.2-6.6-13.3c-3.5-2.9-5.7-7.3-5.7-12.2z" />
            <path d="M131.9 448.3l-10.7 32.1c-4.2 12.6 2.6 26.2 15.2 30.4s26.2-2.6 30.4-15.2L178.6 460c-16-2.6-31.7-6.5-46.7-11.6zM200 462.7l0 25.3c0 13.3 10.7 24 24 24s24-10.7 24-24l0-25.3c-8 .7-16 1.2-24 1.3c-8-.1-16-.5-24-1.3zm69.4-2.7l11.9 35.6c4.2 12.6 17.8 19.4 30.4 15.2s19.4-17.8 15.2-30.4l-10.7-32.1c-15 5.1-30.7 9-46.7 11.6z" />
    </Icon>
);

export default Onion;
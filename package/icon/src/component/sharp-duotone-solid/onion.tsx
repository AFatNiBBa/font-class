
import { Icon, generic } from "../../index";

/**
 * A component that renders the `onion` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/onion?s=sharp-duotone-solid onion}
 * @preview ![onion](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI4OGMwIDgwIDU3LjUgMTM0LjcgMTMwLjkgMTYwYzE1LjEgNS4yIDMwLjkgOS4yIDQ3IDExLjhjNy4zIDEuMiAxNC43IDIuMiAyMi4xIDIuOWM4IC43IDE2IDEuMiAyNCAxLjNjOC0uMSAxNi0uNSAyNC0xLjNjNy40LS43IDE0LjgtMS42IDIyLjEtMi45YzE2LjEtMi43IDMxLjktNi42IDQ3LTExLjhjNzMuNC0yNS4zIDEzMS04MCAxMzEtMTYwYzAtODQuNS00OS0xMjQuMy05NS4zLTE2MkMzMTEuMiA5Mi4zIDI3MiA2MC40IDI3MiAwTDI0MCAwIDIyNCAzMiAyMDggMCAxNzYgMGMwIDYwLjQtMzkuMiA5Mi4zLTgwLjcgMTI2QzQ5IDE2My43IDAgMjAzLjUgMCAyODh6bTczIDY5LjZjLTEzLjktMzctNi42LTgxLjMgMi42LTExNGM0LjctMTYuNyAxMC4yLTMxLjQgMTQuNS00MS44YzIuMi01LjIgNC05LjQgNS40LTEyLjNjLjctMS41IDEuMi0yLjYgMS42LTMuNGwuNS0uOSAuMi0uNEwxMTIgMTkyYzE0LjMgNy4yIDE0LjMgNy4yIDE0LjIgNy4zbC0uMyAuN2MtLjMgLjYtLjggMS42LTEuNCAyLjljLTEuMiAyLjYtMi45IDYuNC00LjkgMTEuMmMtNCA5LjYtOSAyMy0xMy4zIDM4LjJjLTguOCAzMS4zLTEzLjUgNjcuMS0zLjQgOTRMNzMgMzU3LjZ6bTEwMy44IDMxLjRjLTE3LjUtNTIuNS04LjUtMTIwLjMgMy42LTE3Mi43YzYuMS0yNi42IDEzLjMtNTAuMSAxOC45LTY3YzIuOC04LjQgNS4yLTE1LjIgNy0xOS45Yy45LTIuNCAxLjYtNC4yIDIuMS01LjRsLjYtMS41IC4yLS41TDIyNCAxMjhjMTQuOSA1LjkgMTQuOSA1LjkgMTQuOCA2bC0uMSAuMy0uNSAxLjNjLS40IDEuMS0xLjEgMi44LTEuOSA1Yy0xLjYgNC40LTQgMTAuOS02LjYgMTguOWMtNS40IDE2LjItMTIuMiAzOC43LTE4LjEgNjRjLTExLjkgNTEuNy0xOC45IDExMS45LTQuNCAxNTUuM2wtMzAuNCAxMC4xek0yOTEuMyAxNjcuOGwxNC03LjhjMTQtNy44IDE0LTcuOCAxNC03LjdsLjIgLjMgLjYgMS4xYy41IC45IDEuMiAyLjIgMi4xIDMuOWMxLjggMy40IDQuMiA4LjMgNy4xIDE0LjNjNS43IDEyLjEgMTMuMSAyOS4yIDE5LjggNDguOWMxMy4xIDM4LjcgMjQuNSA5MC42IDExLjcgMTM1LjVsLTMwLjgtOC43YzEwLTM1LjEgMS40LTc5LjItMTEuMi0xMTYuNWMtNi4yLTE4LjMtMTMuMS0zNC4yLTE4LjQtNDUuNmMtMi43LTUuNy00LjktMTAuMi02LjUtMTMuMmMtLjgtMS41LTEuNC0yLjctMS44LTMuNWMtLjItLjMtLjMtLjYtLjYtMS4xeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTMwLjkgNDQ4bC05LjIgMjMuMS04LjkgMjIuMyA0NC42IDE3LjggOC45LTIyLjMgMTEuNi0yOS4xYy0xNi4xLTIuNy0zMS45LTYuNi00Ny0xMS44ek0yMDAgNDYyLjdsMCAyNS4zIDAgMjQgNDggMCAwLTI0IDAtMjUuM2MtOCAuNy0xNiAxLjItMjQgMS4zYy04LS4xLTE2LS41LTI0LTEuM3ptNzAuMS0yLjlsMTEuNiAyOS4xIDguOSAyMi4zIDQ0LjYtMTcuOC04LjktMjIuM0wzMTcgNDQ4Yy0xNS4xIDUuMi0zMC45IDkuMi00NyAxMS44eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Onion: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 288c0 80 57.5 134.7 130.9 160c15.1 5.2 30.9 9.2 47 11.8c7.3 1.2 14.7 2.2 22.1 2.9c8 .7 16 1.2 24 1.3c8-.1 16-.5 24-1.3c7.4-.7 14.8-1.6 22.1-2.9c16.1-2.7 31.9-6.6 47-11.8c73.4-25.3 131-80 131-160c0-84.5-49-124.3-95.3-162C311.2 92.3 272 60.4 272 0L240 0 224 32 208 0 176 0c0 60.4-39.2 92.3-80.7 126C49 163.7 0 203.5 0 288zm73 69.6c-13.9-37-6.6-81.3 2.6-114c4.7-16.7 10.2-31.4 14.5-41.8c2.2-5.2 4-9.4 5.4-12.3c.7-1.5 1.2-2.6 1.6-3.4l.5-.9 .2-.4L112 192c14.3 7.2 14.3 7.2 14.2 7.3l-.3 .7c-.3 .6-.8 1.6-1.4 2.9c-1.2 2.6-2.9 6.4-4.9 11.2c-4 9.6-9 23-13.3 38.2c-8.8 31.3-13.5 67.1-3.4 94L73 357.6zm103.8 31.4c-17.5-52.5-8.5-120.3 3.6-172.7c6.1-26.6 13.3-50.1 18.9-67c2.8-8.4 5.2-15.2 7-19.9c.9-2.4 1.6-4.2 2.1-5.4l.6-1.5 .2-.5L224 128c14.9 5.9 14.9 5.9 14.8 6l-.1 .3-.5 1.3c-.4 1.1-1.1 2.8-1.9 5c-1.6 4.4-4 10.9-6.6 18.9c-5.4 16.2-12.2 38.7-18.1 64c-11.9 51.7-18.9 111.9-4.4 155.3l-30.4 10.1zM291.3 167.8l14-7.8c14-7.8 14-7.8 14-7.7l.2 .3 .6 1.1c.5 .9 1.2 2.2 2.1 3.9c1.8 3.4 4.2 8.3 7.1 14.3c5.7 12.1 13.1 29.2 19.8 48.9c13.1 38.7 24.5 90.6 11.7 135.5l-30.8-8.7c10-35.1 1.4-79.2-11.2-116.5c-6.2-18.3-13.1-34.2-18.4-45.6c-2.7-5.7-4.9-10.2-6.5-13.2c-.8-1.5-1.4-2.7-1.8-3.5c-.2-.3-.3-.6-.6-1.1z" />
            <path d="M130.9 448l-9.2 23.1-8.9 22.3 44.6 17.8 8.9-22.3 11.6-29.1c-16.1-2.7-31.9-6.6-47-11.8zM200 462.7l0 25.3 0 24 48 0 0-24 0-25.3c-8 .7-16 1.2-24 1.3c-8-.1-16-.5-24-1.3zm70.1-2.9l11.6 29.1 8.9 22.3 44.6-17.8-8.9-22.3L317 448c-15.1 5.2-30.9 9.2-47 11.8z" />
    </Icon>
);

export default Onion;
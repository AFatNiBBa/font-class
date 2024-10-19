
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-bolt` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-bolt?s=duotone circle-bolt}
 * @preview ![circle-bolt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTE0NC45IDUuM2MtMi4yLTYuNC0uMi0xMy41IDUuMS0xNy44bDE2MC0xMjhjNS45LTQuNyAxNC4yLTQuNyAyMC4xIC4xczcuNiAxMi45IDQuMiAxOS42TDI4MS45IDI0MGw3MC4xIDBjNi44IDAgMTIuOSA0LjMgMTUuMSAxMC43cy4yIDEzLjUtNS4xIDE3LjhsLTE2MCAxMjhjLTUuOSA0LjctMTQuMiA0LjctMjAuMS0uMXMtNy42LTEyLjktNC4zLTE5LjZMMjMwLjEgMjcyIDE2MCAyNzJjLTYuOCAwLTEyLjgtNC4zLTE1LjEtMTAuN3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMzNC4zIDEzNS4yYzMuNC02LjcgMS42LTE0LjktNC4yLTE5LjZzLTE0LjItNC43LTIwLjEtLjFsLTE2MCAxMjhjLTUuMyA0LjItNy40IDExLjQtNS4xIDE3LjhzOC4zIDEwLjcgMTUuMSAxMC43bDcwLjEgMEwxNzcuNyAzNzYuOGMtMy40IDYuNy0xLjYgMTQuOSA0LjMgMTkuNnMxNC4yIDQuNyAyMC4xIC4xbDE2MC0xMjhjNS4zLTQuMiA3LjQtMTEuNCA1LjEtMTcuOHMtOC4zLTEwLjctMTUuMS0xMC43bC03MC4xIDAgNTIuNC0xMDQuOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleBolt: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm144.9 5.3c-2.2-6.4-.2-13.5 5.1-17.8l160-128c5.9-4.7 14.2-4.7 20.1 .1s7.6 12.9 4.2 19.6L281.9 240l70.1 0c6.8 0 12.9 4.3 15.1 10.7s.2 13.5-5.1 17.8l-160 128c-5.9 4.7-14.2 4.7-20.1-.1s-7.6-12.9-4.3-19.6L230.1 272 160 272c-6.8 0-12.8-4.3-15.1-10.7z" />
            <path d="M334.3 135.2c3.4-6.7 1.6-14.9-4.2-19.6s-14.2-4.7-20.1-.1l-160 128c-5.3 4.2-7.4 11.4-5.1 17.8s8.3 10.7 15.1 10.7l70.1 0L177.7 376.8c-3.4 6.7-1.6 14.9 4.3 19.6s14.2 4.7 20.1 .1l160-128c5.3-4.2 7.4-11.4 5.1-17.8s-8.3-10.7-15.1-10.7l-70.1 0 52.4-104.8z" />
    </Icon>
);

export default CircleBolt;
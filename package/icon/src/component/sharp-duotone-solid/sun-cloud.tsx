
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sun-cloud` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sun-cloud?s=sharp-duotone-solid sun-cloud}
 * @preview ![sun-cloud](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE1MEw3My4xIDI1NiAwIDM2MmwxMjYuNyAyMy4zTDE1MCA1MTJsMTA2LTczLjFMMzYyIDUxMmwxMS44LTY0TDI4OCA0NDhsMC02OGMtMTAuMiAyLjYtMjEgNC0zMiA0Yy03MC43IDAtMTI4LTU3LjMtMTI4LTEyOHM1Ny4zLTEyOCAxMjgtMTI4YzYxLjMgMCAxMTIuNiA0My4xIDEyNS4xIDEwMC43YzIwLjUtMjIuNSA1MC0zNi43IDgyLjktMzYuN2M2LjEgMCAxMi4yIC41IDE4IDEuNEw1MTIgMTUwIDM4NS4zIDEyNi43IDM2MiAwIDI1NiA3My4xIDE1MCAwIDEyNi43IDEyNi43IDAgMTUwek0xNjAgMjU2YzAgNTMgNDMgOTYgOTYgOTZjMTEuMyAwIDIyLjEtMS45IDMyLjItNS41YzIuMi0zOS4zIDI4LjEtNzIuMyA2My43LTg1Yy4xLTEuOCAuMi0zLjcgLjItNS41YzAtNTMtNDMtOTYtOTYtOTZzLTk2IDQzLTk2IDk2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzIwIDQxNmw2NCAwIDE4NCAwIDcyIDAgMC03MmMwLTM5LjgtMzIuMi03Mi03Mi03MmMtMTAuMSAwLTE5LjcgMi4xLTI4LjQgNS44QzUyOC44IDI0Ni41IDQ5OSAyMjQgNDY0IDIyNGMtMzguNyAwLTcxIDI3LjUtNzguNCA2NGMtLjUgMC0xLjEgMC0xLjYgMGMtMzUuMyAwLTY0IDI4LjctNjQgNjRsMCA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const SunCloud: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 150L73.1 256 0 362l126.7 23.3L150 512l106-73.1L362 512l11.8-64L288 448l0-68c-10.2 2.6-21 4-32 4c-70.7 0-128-57.3-128-128s57.3-128 128-128c61.3 0 112.6 43.1 125.1 100.7c20.5-22.5 50-36.7 82.9-36.7c6.1 0 12.2 .5 18 1.4L512 150 385.3 126.7 362 0 256 73.1 150 0 126.7 126.7 0 150zM160 256c0 53 43 96 96 96c11.3 0 22.1-1.9 32.2-5.5c2.2-39.3 28.1-72.3 63.7-85c.1-1.8 .2-3.7 .2-5.5c0-53-43-96-96-96s-96 43-96 96z" />
            <path d="M320 416l64 0 184 0 72 0 0-72c0-39.8-32.2-72-72-72c-10.1 0-19.7 2.1-28.4 5.8C528.8 246.5 499 224 464 224c-38.7 0-71 27.5-78.4 64c-.5 0-1.1 0-1.6 0c-35.3 0-64 28.7-64 64l0 64z" />
    </Icon>
);

export default SunCloud;
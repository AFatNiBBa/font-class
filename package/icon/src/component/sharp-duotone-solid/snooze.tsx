
import { Icon, generic } from "../../index";

/**
 * A component that renders the `snooze` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snooze?s=sharp-duotone-solid snooze}
 * @preview ![snooze](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMGwzMiAwIDk2IDAgMzIgMCAwIDMyIDAgOCAwIDExLjgtNy43IDlMMjU0LjcgMTI4bDMzLjMgMCAzMiAwIDAgNjQtMzIgMC05NiAwLTMyIDAgMC0zMiAwLTggMC0xMS44IDcuNy05TDIyNS4zIDY0IDE5MiA2NGwtMzIgMCAwLTY0ek0yODggMjI0bDMyIDAgOTYgMCAzMiAwIDAgMzIgMCA4IDAgMTEuOC03LjcgOUwzODIuNyAzNTJsMzMuMyAwIDMyIDAgMCA2NC0zMiAwLTk2IDAtMzIgMCAwLTMyIDAtOCAwLTExLjggNy43LTlMMzUzLjMgMjg4IDMyMCAyODhsLTMyIDAgMC02NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMjU2bDMyIDAgMTYwIDAgMzIgMCAwIDMyIDAgMTYgMCAxMy4zLTkuNCA5LjRMOTMuMyA0NDhsOTguNyAwIDMyIDAgMCA2NC0zMiAwTDMyIDUxMiAwIDUxMmwwLTMyIDAtMTYgMC0xMy4zIDkuNC05LjRMMTMwLjcgMzIwIDMyIDMyMCAwIDMyMGwwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Snooze: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M160 0l32 0 96 0 32 0 0 32 0 8 0 11.8-7.7 9L254.7 128l33.3 0 32 0 0 64-32 0-96 0-32 0 0-32 0-8 0-11.8 7.7-9L225.3 64 192 64l-32 0 0-64zM288 224l32 0 96 0 32 0 0 32 0 8 0 11.8-7.7 9L382.7 352l33.3 0 32 0 0 64-32 0-96 0-32 0 0-32 0-8 0-11.8 7.7-9L353.3 288 320 288l-32 0 0-64z" />
            <path d="M0 256l32 0 160 0 32 0 0 32 0 16 0 13.3-9.4 9.4L93.3 448l98.7 0 32 0 0 64-32 0L32 512 0 512l0-32 0-16 0-13.3 9.4-9.4L130.7 320 32 320 0 320l0-64z" />
    </Icon>
);

export default Snooze;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `stopwatch` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stopwatch?s=sharp-duotone-solid stopwatch}
 * @preview ![stopwatch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNiAzMDRDMTYgMjAwIDkyLjMgMTEzLjggMTkyIDk4LjRjMTAuNC0xLjYgMjEuMS0yLjQgMzItMi40czIxLjYgLjggMzIgMi40YzM3LjUgNS44IDcxLjcgMjEuNiA5OS43IDQ0LjZjMTYuNiAxMy42IDMxIDI5LjcgNDIuOCA0Ny43QzQxOS43IDIyMy4zIDQzMiAyNjIuMiA0MzIgMzA0YzAgMTE0LjktOTMuMSAyMDgtMjA4IDIwOFMxNiA0MTguOSAxNiAzMDR6TTIwMCAxNjhsMCAyNCAwIDEyOCAwIDI0IDQ4IDAgMC0yNCAwLTEyOCAwLTI0LTQ4IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNDQgMGw0OCAwIDY0IDAgNDggMCAwIDY0LTQ4IDAgMCAzNC40Yy0xMC40LTEuNi0yMS4xLTIuNC0zMi0yLjRzLTIxLjYgLjgtMzIgMi40TDE5MiA2NGwtNDggMCAwLTY0ek0zNTUuNyAxNDNsMjEuNi0yMS42TDQwMCA5OC43IDQ0NS4zIDE0NGwtMjIuNiAyMi42LTI0LjEgMjQuMWMtMTEuNy0xOC0yNi4yLTM0LjEtNDIuOC00Ny43ek0yNDggMTkybDAgMTI4IDAgMjQtNDggMCAwLTI0IDAtMTI4IDAtMjQgNDggMCAwIDI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Stopwatch: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M16 304C16 200 92.3 113.8 192 98.4c10.4-1.6 21.1-2.4 32-2.4s21.6 .8 32 2.4c37.5 5.8 71.7 21.6 99.7 44.6c16.6 13.6 31 29.7 42.8 47.7C419.7 223.3 432 262.2 432 304c0 114.9-93.1 208-208 208S16 418.9 16 304zM200 168l0 24 0 128 0 24 48 0 0-24 0-128 0-24-48 0z" />
            <path d="M144 0l48 0 64 0 48 0 0 64-48 0 0 34.4c-10.4-1.6-21.1-2.4-32-2.4s-21.6 .8-32 2.4L192 64l-48 0 0-64zM355.7 143l21.6-21.6L400 98.7 445.3 144l-22.6 22.6-24.1 24.1c-11.7-18-26.2-34.1-42.8-47.7zM248 192l0 128 0 24-48 0 0-24 0-128 0-24 48 0 0 24z" />
    </Icon>
);

export default Stopwatch;
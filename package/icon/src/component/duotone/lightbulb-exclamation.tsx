
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lightbulb-exclamation` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lightbulb-exclamation?s=duotone lightbulb-exclamation}
 * @preview ![lightbulb-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNiAxNzZjMCAzNy4zIDExLjYgNzEuOSAzMS40IDEwMC4zYzUgNy4yIDEwLjIgMTQuMyAxNS40IDIxLjRjMTkuOCAyNy4xIDM5LjcgNTQuNCA0OS4yIDg2LjJsMTYwIDBjOS42LTMxLjkgMjkuNS01OS4xIDQ5LjItODYuMmM1LjItNy4xIDEwLjQtMTQuMiAxNS40LTIxLjRjMTkuOC0yOC41IDMxLjQtNjMgMzEuNC0xMDAuM0MzNjggNzguOCAyODkuMiAwIDE5MiAwUzE2IDc4LjggMTYgMTc2ek0yMjQgMjg4YTMyIDMyIDAgMSAxIC02NCAwIDMyIDMyIDAgMSAxIDY0IDB6TTE2OCA4OGMwLTEzLjMgMTAuNy0yNCAyNC0yNHMyNCAxMC43IDI0IDI0bDAgMTEyYzAgMTMuMy0xMC43IDI0LTI0IDI0cy0yNC0xMC43LTI0LTI0bDAtMTEyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTkyIDUxMmM0NC4yIDAgODAtMzUuOCA4MC04MFYzODRIMTEydjQ4YzAgNDQuMiAzNS44IDgwIDgwIDgweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const LightbulbExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c19.8 27.1 39.7 54.4 49.2 86.2l160 0c9.6-31.9 29.5-59.1 49.2-86.2c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176zM224 288a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM168 88c0-13.3 10.7-24 24-24s24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112z" />
            <path d="M192 512c44.2 0 80-35.8 80-80V384H112v48c0 44.2 35.8 80 80 80z" />
    </Icon>
);

export default LightbulbExclamation;
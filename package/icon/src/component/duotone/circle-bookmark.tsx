
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-bookmark` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-bookmark?s=duotone circle-bookmark}
 * @preview ![circle-bookmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTE2MC04MGMwLTI2LjUgMjEuNS00OCA0OC00OGw5NiAwYzI2LjUgMCA0OCAyMS41IDQ4IDQ4bDAgMTkyYzAgNi4yLTMuNSAxMS44LTkuMSAxNC40cy0xMi4xIDEuOS0xNi45LTEuOWwtNzAtNTYtNzAgNTZjLTQuOCAzLjgtMTEuNCA0LjYtMTYuOSAxLjlzLTkuMS04LjMtOS4xLTE0LjRsMC0xOTJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMDggMTI4Yy0yNi41IDAtNDggMjEuNS00OCA0OGwwIDE5MmMwIDYuMiAzLjUgMTEuOCA5LjEgMTQuNHMxMi4xIDEuOSAxNi45LTEuOWw3MC01NiA3MCA1NmM0LjggMy44IDExLjQgNC42IDE2LjkgMS45czkuMS04LjMgOS4xLTE0LjRsMC0xOTJjMC0yNi41LTIxLjUtNDgtNDgtNDhsLTk2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleBookmark: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm160-80c0-26.5 21.5-48 48-48l96 0c26.5 0 48 21.5 48 48l0 192c0 6.2-3.5 11.8-9.1 14.4s-12.1 1.9-16.9-1.9l-70-56-70 56c-4.8 3.8-11.4 4.6-16.9 1.9s-9.1-8.3-9.1-14.4l0-192z" />
            <path d="M208 128c-26.5 0-48 21.5-48 48l0 192c0 6.2 3.5 11.8 9.1 14.4s12.1 1.9 16.9-1.9l70-56 70 56c4.8 3.8 11.4 4.6 16.9 1.9s9.1-8.3 9.1-14.4l0-192c0-26.5-21.5-48-48-48l-96 0z" />
    </Icon>
);

export default CircleBookmark;
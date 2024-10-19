
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dragon` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dragon?s=sharp-duotone-solid dragon}
 * @preview ![dragon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmwxNzYtMTZMOTYgMzIwbDI1NiAwIDAtMTYgMC0yOS40IDAtMjYuNiAwLTM2LjhMMTYwIDk2IDAgMjU2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDQ4IDE2MGwwIDYxLjRMNjE3LjQgMzI3LjMgNjQwIDM0MS40bDAgMjYuNiAwIDk2IDAgNDgtNDggMC05NiAwLTY0IDBMMzIuMyA1MTJsLS43IDBMMCA1MTJsMC0zMS43IDAtLjdMMCA0NDhsMzAuNiAwTDQ0OCA0MTAuN2wwLTE4LjctODMuMi02Mi40TDM1MiAzMjBsMC0xNiAwLTI5LjQgMC0yNi42IDAtMTIwLTY0LTE2IDAtMzIgNDgtMjRMMjg4IDMybDAtMzIgOTYgMCAzMiAwIDk2IDAgOTYgMTI4IDAgNjQtOTYgMC0zMi0zMi0zMiAwem02Mi43LTgwLjNMNDY0LjMgNjguMWMtLjIgMS4zLS4zIDIuNi0uMyAzLjljMCAxMy4zIDEwLjcgMjQgMjQgMjRjMTAuNiAwIDE5LjUtNi44IDIyLjctMTYuM3oiLz48L3N2Zz4=|width=32|height=32)
 */
const Dragon: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 256l176-16L96 320l256 0 0-16 0-29.4 0-26.6 0-36.8L160 96 0 256z" />
            <path d="M448 160l0 61.4L617.4 327.3 640 341.4l0 26.6 0 96 0 48-48 0-96 0-64 0L32.3 512l-.7 0L0 512l0-31.7 0-.7L0 448l30.6 0L448 410.7l0-18.7-83.2-62.4L352 320l0-16 0-29.4 0-26.6 0-120-64-16 0-32 48-24L288 32l0-32 96 0 32 0 96 0 96 128 0 64-96 0-32-32-32 0zm62.7-80.3L464.3 68.1c-.2 1.3-.3 2.6-.3 3.9c0 13.3 10.7 24 24 24c10.6 0 19.5-6.8 22.7-16.3z" />
    </Icon>
);

export default Dragon;
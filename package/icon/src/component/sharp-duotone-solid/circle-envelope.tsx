
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-envelope` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-envelope?s=sharp-duotone-solid circle-envelope}
 * @preview ![circle-envelope](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTEyOC05NmwyNTYgMCAwIDQ0LjFMMjU2IDI1NC44IDEyOCAyMDQuMWwwLTQ0LjF6bTAgNzguNWwxMjIuMSA0OC40IDUuOSAyLjMgNS45LTIuM0wzODQgMjM4LjUgMzg0IDM1MmwtMjU2IDAgMC0xMTMuNXoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NCAxNjBsLTI1NiAwIDAgNDQuMSAxMjggNTAuNyAxMjgtNTAuNyAwLTQ0LjF6bTAgNzguNUwyNjEuOSAyODYuOWwtNS45IDIuMy01LjktMi4zTDEyOCAyMzguNSAxMjggMzUybDI1NiAwIDAtMTEzLjV6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleEnvelope: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128-96l256 0 0 44.1L256 254.8 128 204.1l0-44.1zm0 78.5l122.1 48.4 5.9 2.3 5.9-2.3L384 238.5 384 352l-256 0 0-113.5z" />
            <path d="M384 160l-256 0 0 44.1 128 50.7 128-50.7 0-44.1zm0 78.5L261.9 286.9l-5.9 2.3-5.9-2.3L128 238.5 128 352l256 0 0-113.5z" />
    </Icon>
);

export default CircleEnvelope;
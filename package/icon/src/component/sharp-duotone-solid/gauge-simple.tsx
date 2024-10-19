
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gauge-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-simple?s=sharp-duotone-solid gauge-simple}
 * @preview ![gauge-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTE5MiA5NmMwLTI2LjkgMTYuNS00OS45IDQwLTU5LjNMMjMyIDg4bDAtMjQgNDggMCAwIDI0IDAgMjA0LjdjMjMuNSA5LjUgNDAgMzIuNSA0MCA1OS4zYzAgMzUuMy0yOC43IDY0LTY0IDY0cy02NC0yOC43LTY0LTY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjgwIDg4bDAtMjQtNDggMCAwIDI0IDAgMjA0LjdjLTIzLjUgOS41LTQwIDMyLjUtNDAgNTkuM2MwIDM1LjMgMjguNyA2NCA2NCA2NHM2NC0yOC43IDY0LTY0YzAtMjYuOS0xNi41LTQ5LjktNDAtNTkuM0wyODAgODh6Ii8+PC9zdmc+|width=32|height=32)
 */
const GaugeSimple: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm192 96c0-26.9 16.5-49.9 40-59.3L232 88l0-24 48 0 0 24 0 204.7c23.5 9.5 40 32.5 40 59.3c0 35.3-28.7 64-64 64s-64-28.7-64-64z" />
            <path d="M280 88l0-24-48 0 0 24 0 204.7c-23.5 9.5-40 32.5-40 59.3c0 35.3 28.7 64 64 64s64-28.7 64-64c0-26.9-16.5-49.9-40-59.3L280 88z" />
    </Icon>
);

export default GaugeSimple;
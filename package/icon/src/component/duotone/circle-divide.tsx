
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-divide` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-divide?s=duotone circle-divide}
 * @preview ![circle-divide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTE0NCAwYzAtMTMuMyAxMC43LTI0IDI0LTI0bDE3NiAwYzEzLjMgMCAyNCAxMC43IDI0IDI0cy0xMC43IDI0LTI0IDI0bC0xNzYgMGMtMTMuMyAwLTI0LTEwLjctMjQtMjR6bTE0NC05NmEzMiAzMiAwIDEgMSAtNjQgMCAzMiAzMiAwIDEgMSA2NCAwem0wIDE5MmEzMiAzMiAwIDEgMSAtNjQgMCAzMiAzMiAwIDEgMSA2NCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjI0IDE2MGEzMiAzMiAwIDEgMSA2NCAwIDMyIDMyIDAgMSAxIC02NCAwem0tODAgOTZjMC0xMy4zIDEwLjctMjQgMjQtMjRsMTc2IDBjMTMuMyAwIDI0IDEwLjcgMjQgMjRzLTEwLjcgMjQtMjQgMjRsLTE3NiAwYy0xMy4zIDAtMjQtMTAuNy0yNC0yNHptMTEyIDY0YTMyIDMyIDAgMSAxIDAgNjQgMzIgMzIgMCAxIDEgMC02NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleDivide: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm144 0c0-13.3 10.7-24 24-24l176 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-176 0c-13.3 0-24-10.7-24-24zm144-96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm0 192a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
            <path d="M224 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-80 96c0-13.3 10.7-24 24-24l176 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-176 0c-13.3 0-24-10.7-24-24zm112 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default CircleDivide;
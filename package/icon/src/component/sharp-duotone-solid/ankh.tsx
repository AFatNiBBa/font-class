
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ankh` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ankh?s=sharp-duotone-solid ankh}
 * @preview ![ankh](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMzIwbDE5LjQgMGM3LjggNS4zIDEyLjYgOCAxMi42IDhzNC44LTIuNyAxMi42LThsMTkuNCAwIDAgMTkyLTY0IDAgMC0xOTJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik05NiAxMjhjMC0zNS4zIDI4LjctNjQgNjQtNjRzNjQgMjguNyA2NCA2NGMwIDQxLjYtMjAuNyA3Ni42LTQ2LjYgMTA0LjFjLTUuOSA2LjItMTEuOCAxMS44LTE3LjQgMTYuN2MtNS42LTQuOS0xMS41LTEwLjUtMTcuNC0xNi43QzExNi43IDIwNC42IDk2IDE2OS42IDk2IDEyOHpNMTYwIDBDODkuMyAwIDMyIDU3LjMgMzIgMTI4YzAgNTIuNCAyMS41IDk1LjUgNDYuOCAxMjhMMzIgMjU2IDAgMjU2bDAgNjQgMzIgMCAxMTUuNCAwYzcuOCA1LjMgMTIuNiA4IDEyLjYgOHM0LjgtMi43IDEyLjYtOEwyODggMzIwbDMyIDAgMC02NC0zMiAwLTQ2LjggMGMyNS40LTMyLjUgNDYuOC03NS42IDQ2LjgtMTI4QzI4OCA1Ny4zIDIzMC43IDAgMTYwIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Ankh: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M128 320l19.4 0c7.8 5.3 12.6 8 12.6 8s4.8-2.7 12.6-8l19.4 0 0 192-64 0 0-192z" />
            <path d="M96 128c0-35.3 28.7-64 64-64s64 28.7 64 64c0 41.6-20.7 76.6-46.6 104.1c-5.9 6.2-11.8 11.8-17.4 16.7c-5.6-4.9-11.5-10.5-17.4-16.7C116.7 204.6 96 169.6 96 128zM160 0C89.3 0 32 57.3 32 128c0 52.4 21.5 95.5 46.8 128L32 256 0 256l0 64 32 0 115.4 0c7.8 5.3 12.6 8 12.6 8s4.8-2.7 12.6-8L288 320l32 0 0-64-32 0-46.8 0c25.4-32.5 46.8-75.6 46.8-128C288 57.3 230.7 0 160 0z" />
    </Icon>
);

export default Ankh;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `jar` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jar?s=duotone jar}
 * @preview ![jar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDEyOEwwIDQ0OGMwIDM1LjMgMjguNyA2NCA2NCA2NGwxOTIgMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTMyMGMwLTM1LjMtMjguNy02NC02NC02NEw2NCA2NEMyOC43IDY0IDAgOTIuNyAwIDEyOHptNjQgOTZjMC0xNy43IDE0LjMtMzIgMzItMzJsMTI4IDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJsMCAxMjhjMCAxNy43LTE0LjMgMzItMzIgMzJMOTYgMzg0Yy0xNy43IDAtMzItMTQuMy0zMi0zMmwwLTEyOHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTY0IDBDNDYuMyAwIDMyIDE0LjMgMzIgMzJzMTQuMyAzMiAzMiAzMmwxOTIgMGMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMkw2NCAwek05NiAxOTJjLTE3LjcgMC0zMiAxNC4zLTMyIDMybDAgMTI4YzAgMTcuNyAxNC4zIDMyIDMyIDMybDEyOCAwYzE3LjcgMCAzMi0xNC4zIDMyLTMybDAtMTI4YzAtMTcuNy0xNC4zLTMyLTMyLTMyTDk2IDE5MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Jar: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 128L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 64C28.7 64 0 92.7 0 128zm64 96c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32L96 384c-17.7 0-32-14.3-32-32l0-128z" />
            <path d="M64 0C46.3 0 32 14.3 32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 0zM96 192c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32L96 192z" />
    </Icon>
);

export default Jar;
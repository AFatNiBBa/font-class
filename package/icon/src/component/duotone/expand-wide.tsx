
import { Icon, generic } from "../../index";

/**
 * A component that renders the `expand-wide` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/expand-wide?s=duotone expand-wide}
 * @preview ![expand-wide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyMGMwLTE3LjcgMTQuMy0zMiAzMi0zMnMzMiAxNC4zIDMyIDMybDAgNjQgNjQgMGMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMmwtOTYgMGMtMTcuNyAwLTMyLTE0LjMtMzItMzJsMC05NnpNMzUyIDk2YzAtMTcuNyAxNC4zLTMyIDMyLTMybDk2IDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJsMCA5NmMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMmwwLTY0LTY0IDBjLTE3LjcgMC0zMi0xNC4zLTMyLTMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAxOTJjMCAxNy43IDE0LjMgMzIgMzIgMzJzMzItMTQuMyAzMi0zMmwwLTY0IDY0IDBjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJMMzIgNjRDMTQuMyA2NCAwIDc4LjMgMCA5NmwwIDk2ek01MTIgMzIwYzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMybDAgNjQtNjQgMGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJzMTQuMyAzMiAzMiAzMmw5NiAwYzE3LjcgMCAzMi0xNC4zIDMyLTMybDAtOTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const ExpandWide: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 320c0-17.7 14.3-32 32-32s32 14.3 32 32l0 64 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-96zM352 96c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64-64 0c-17.7 0-32-14.3-32-32z" />
            <path d="M0 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 64C14.3 64 0 78.3 0 96l0 96zM512 320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z" />
    </Icon>
);

export default ExpandWide;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `paint-roller` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paint-roller?s=duotone paint-roller}
 * @preview ![paint-roller](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMzUybDAgMTI4YzAgMTcuNyAxNC4zIDMyIDMyIDMybDY0IDBjMTcuNyAwIDMyLTE0LjMgMzItMzJsMC0xMjhjMC0xNy43LTE0LjMtMzItMzItMzJsMC0xNmMwLTguOCA3LjItMTYgMTYtMTZsMTQ0IDBjNTMgMCA5Ni00MyA5Ni05NmwwLTMyYzAtNTMtNDMtOTYtOTYtOTZsMCA2NGMxNy43IDAgMzIgMTQuMyAzMiAzMmwwIDMyYzAgMTcuNy0xNC4zIDMyLTMyIDMybC0xNDQgMGMtNDQuMiAwLTgwIDM1LjgtODAgODBsMCAxNmMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik02NCAwQzI4LjcgMCAwIDI4LjcgMCA2NGwwIDY0YzAgMzUuMyAyOC43IDY0IDY0IDY0bDI4OCAwYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtNjRjMC0zNS4zLTI4LjctNjQtNjQtNjRMNjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const PaintRoller: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 352l0 128c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l0-16c0-8.8 7.2-16 16-16l144 0c53 0 96-43 96-96l0-32c0-53-43-96-96-96l0 64c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32l-144 0c-44.2 0-80 35.8-80 80l0 16c-17.7 0-32 14.3-32 32z" />
            <path d="M64 0C28.7 0 0 28.7 0 64l0 64c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 0z" />
    </Icon>
);

export default PaintRoller;
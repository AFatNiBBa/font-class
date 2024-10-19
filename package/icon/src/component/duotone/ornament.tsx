
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ornament` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ornament?s=duotone ornament}
 * @preview ![ornament](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyMGMwIDIyLjQgMy44IDQ0IDEwLjkgNjRsMzYyLjIgMGM3LjEtMjAgMTAuOS00MS42IDEwLjktNjRzLTMuOC00NC0xMC45LTY0TDEwLjkgMjU2QzMuOCAyNzYgMCAyOTcuNiAwIDMyMHpNMTI4IDY0YzAgMTEuNyAzLjEgMjIuNiA4LjYgMzJsNDUuOSAwYy0xMi43LTQuNC0yMi0xNy0yMi40LTMxYzAtLjMgMC0uNyAwLTFjMC0xNy43IDE0LjMtMzIgMzItMzJzMzIgMTQuMyAzMiAzMmMwIC4zIDAgLjYgMCAuOGMtLjQgMTQtOS43IDI2LjgtMjIuNCAzMS4ybDQ1LjkgMGM1LjQtOS40IDguNi0yMC4zIDguNi0zMmMwLTM1LjMtMjguNy02NC02NC02NHMtNjQgMjguNy02NCA2NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTk2IDEyOGMwLTE3LjcgMTQuMy0zMiAzMi0zMmwxMjggMGMxNy43IDAgMzIgMTQuMyAzMiAzMmwwIDI1LjdjMzkuMyAyMi43IDY5LjcgNTguOSA4NS4xIDEwMi4zTDEwLjkgMjU2QzI2LjMgMjEyLjYgNTYuNyAxNzYuNCA5NiAxNTMuN0w5NiAxMjh6TTEwLjkgMzg0bDM2Mi4xIDBDMzQ2LjcgNDU4LjYgMjc1LjYgNTEyIDE5MiA1MTJzLTE1NC43LTUzLjQtMTgxLjEtMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Ornament: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 320c0 22.4 3.8 44 10.9 64l362.2 0c7.1-20 10.9-41.6 10.9-64s-3.8-44-10.9-64L10.9 256C3.8 276 0 297.6 0 320zM128 64c0 11.7 3.1 22.6 8.6 32l45.9 0c-12.7-4.4-22-17-22.4-31c0-.3 0-.7 0-1c0-17.7 14.3-32 32-32s32 14.3 32 32c0 .3 0 .6 0 .8c-.4 14-9.7 26.8-22.4 31.2l45.9 0c5.4-9.4 8.6-20.3 8.6-32c0-35.3-28.7-64-64-64s-64 28.7-64 64z" />
            <path d="M96 128c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 25.7c39.3 22.7 69.7 58.9 85.1 102.3L10.9 256C26.3 212.6 56.7 176.4 96 153.7L96 128zM10.9 384l362.1 0C346.7 458.6 275.6 512 192 512s-154.7-53.4-181.1-128z" />
    </Icon>
);

export default Ornament;
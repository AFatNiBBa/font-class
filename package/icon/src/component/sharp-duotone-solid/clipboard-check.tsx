
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clipboard-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard-check?s=sharp-duotone-solid clipboard-check}
 * @preview ![clipboard-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0bDgwIDAgMCA3MiAwIDI0IDExMiAwIDg4IDAgMjQgMCAwLTcyIDAtMjQgODAgMCAwIDQ0OEwwIDUxMiAwIDY0ek02Mi4xIDMyMGwxNyAxNyA2NCA2NCAxNyAxNyAxNy0xN0wzMDUgMjczbDE3LTE3TDI4OCAyMjIuMWwtMTcgMTctMTExIDExMS00Ny00Ny0xNy0xN0w2Mi4xIDMyMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI3MC40IDY0QzI2MyAyNy41IDIzMC43IDAgMTkyIDBzLTcxIDI3LjUtNzguNCA2NEw4MCA2NGwwIDk2IDExMiAwIDExMiAwIDAtOTYtMzMuNiAwek0xNjggODBhMjQgMjQgMCAxIDEgNDggMCAyNCAyNCAwIDEgMSAtNDggMHpNMzA1IDI3M2wxNy0xN0wyODggMjIyLjFsLTE3IDE3LTExMSAxMTEtNDctNDctMTctMTdMNjIuMSAzMjBsMTcgMTcgNjQgNjQgMTcgMTcgMTctMTdMMzA1IDI3M3oiLz48L3N2Zz4=|width=32|height=32)
 */
const ClipboardCheck: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64l80 0 0 72 0 24 112 0 88 0 24 0 0-72 0-24 80 0 0 448L0 512 0 64zM62.1 320l17 17 64 64 17 17 17-17L305 273l17-17L288 222.1l-17 17-111 111-47-47-17-17L62.1 320z" />
            <path d="M270.4 64C263 27.5 230.7 0 192 0s-71 27.5-78.4 64L80 64l0 96 112 0 112 0 0-96-33.6 0zM168 80a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM305 273l17-17L288 222.1l-17 17-111 111-47-47-17-17L62.1 320l17 17 64 64 17 17 17-17L305 273z" />
    </Icon>
);

export default ClipboardCheck;
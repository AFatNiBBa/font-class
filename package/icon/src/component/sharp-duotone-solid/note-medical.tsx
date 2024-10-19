
import { Icon, generic } from "../../index";

/**
 * A component that renders the `note-medical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/note-medical?s=sharp-duotone-solid note-medical}
 * @preview ![note-medical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMybDQ0OCAwIDAgMjg4LTMyIDAtMzIgMC05NiAwIDAgOTYgMCAzMiAwIDMyTDAgNDgwIDAgMzJ6TTEyOCAxOTJsMCA2NCA2NCAwIDAgNjQgNjQgMCAwLTY0IDY0IDAgMC02NC02NCAwIDAtNjQtNjQgMCAwIDY0LTY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xOTIgMTI4bDY0IDAgMCA2NCA2NCAwIDAgNjQtNjQgMCAwIDY0LTY0IDAgMC02NC02NCAwIDAtNjQgNjQgMCAwLTY0em05NiAyODhsMC05NiA5NiAwIDMyIDAgMzIgMCAwIDE2IDAgMTMuMy05LjQgOS40LTExMiAxMTItOS40IDkuNEwzMDQgNDgwbC0xNiAwIDAtMzIgMC0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const NoteMedical: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l448 0 0 288-32 0-32 0-96 0 0 96 0 32 0 32L0 480 0 32zM128 192l0 64 64 0 0 64 64 0 0-64 64 0 0-64-64 0 0-64-64 0 0 64-64 0z" />
            <path d="M192 128l64 0 0 64 64 0 0 64-64 0 0 64-64 0 0-64-64 0 0-64 64 0 0-64zm96 288l0-96 96 0 32 0 32 0 0 16 0 13.3-9.4 9.4-112 112-9.4 9.4L304 480l-16 0 0-32 0-32z" />
    </Icon>
);

export default NoteMedical;
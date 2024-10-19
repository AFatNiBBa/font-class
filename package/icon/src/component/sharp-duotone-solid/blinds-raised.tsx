
import { Icon, generic } from "../../index";

/**
 * A component that renders the `blinds-raised` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blinds-raised?s=sharp-duotone-solid blinds-raised}
 * @preview ![blinds-raised](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDEyOEwxNiA2NGwxNiAwIDk2IDAgMCA2NEwwIDEyOHptMCA5NmwxNi02NCAxMTIgMCAwIDY0TDAgMjI0ek0xNjAgNjRsMzIwIDAgMTYgMCAxNiA2NC0zNTIgMCAwLTY0em0wIDk2bDMzNiAwIDE2IDY0LTM1MiAwIDAtNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDBMMzIgMCA0ODAgMGwzMiAwIDAgNjQtMzIgMEwxNjAgNjRsMCAzNTQuN2MxOC42IDYuNiAzMiAyNC40IDMyIDQ1LjNjMCAyNi41LTIxLjUgNDgtNDggNDhzLTQ4LTIxLjUtNDgtNDhjMC0yMC45IDEzLjQtMzguNyAzMi00NS4zTDEyOCA2NCAzMiA2NCAwIDY0IDAgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BlindsRaised: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 128L16 64l16 0 96 0 0 64L0 128zm0 96l16-64 112 0 0 64L0 224zM160 64l320 0 16 0 16 64-352 0 0-64zm0 96l336 0 16 64-352 0 0-64z" />
            <path d="M0 0L32 0 480 0l32 0 0 64-32 0L160 64l0 354.7c18.6 6.6 32 24.4 32 45.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3L128 64 32 64 0 64 0 0z" />
    </Icon>
);

export default BlindsRaised;
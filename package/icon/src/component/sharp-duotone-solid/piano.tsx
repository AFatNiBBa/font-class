
import { Icon, generic } from "../../index";

/**
 * A component that renders the `piano` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/piano?s=sharp-duotone-solid piano}
 * @preview ![piano](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM1MkwwIDQ4MGwwIDMyIDMyIDAgNDQ4IDAgMzIgMCAwLTMyIDAtMTI4LTY0IDAgMCA5Nkw2NCA0NDhsMC05NkwwIDM1MnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMTkyTDAgMzUybDk2IDAgMCA0OCAwIDE2IDMyIDAgMC0xNiAwLTQ4IDMyIDAgMCA0OCAwIDE2IDMyIDAgMC0xNiAwLTQ4IDMyIDAgMCA0OCAwIDE2IDMyIDAgMC0xNiAwLTQ4IDY0IDAgMCA0OCAwIDE2IDMyIDAgMC0xNiAwLTQ4IDMyIDAgMCA0OCAwIDE2IDMyIDAgMC0xNiAwLTQ4IDk2IDAgMC02NEwzODQgMjI0bDAtMzJDMzg0IDg2IDI5OCAwIDE5MiAwUzAgODYgMCAxOTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Piano: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 352L0 480l0 32 32 0 448 0 32 0 0-32 0-128-64 0 0 96L64 448l0-96L0 352z" />
            <path d="M0 192L0 352l96 0 0 48 0 16 32 0 0-16 0-48 32 0 0 48 0 16 32 0 0-16 0-48 32 0 0 48 0 16 32 0 0-16 0-48 64 0 0 48 0 16 32 0 0-16 0-48 32 0 0 48 0 16 32 0 0-16 0-48 96 0 0-64L384 224l0-32C384 86 298 0 192 0S0 86 0 192z" />
    </Icon>
);

export default Piano;
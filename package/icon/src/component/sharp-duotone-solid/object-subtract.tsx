
import { Icon, generic } from "../../index";

/**
 * A component that renders the `object-subtract` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-subtract?s=sharp-duotone-solid object-subtract}
 * @preview ![object-subtract](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMCA2NCAwIDI4OGwwIDY0IDY0IDAgOTYgMCAxMjggMCA2NCAwIDAtNjQgMC0xMjggMC05NiAwLTY0TDI4OCAwIDY0IDAgMCAwek02NCA2NGwyMjQgMCAwIDIyNEw2NCAyODggNjQgNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNjAgNTEybDM1MiAwIDAtMzUyLTE2MCAwIDAgMTkyLTE5MiAwIDAgMTYweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ObjectSubtract: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L0 64 0 288l0 64 64 0 96 0 128 0 64 0 0-64 0-128 0-96 0-64L288 0 64 0 0 0zM64 64l224 0 0 224L64 288 64 64z" />
            <path d="M160 512l352 0 0-352-160 0 0 192-192 0 0 160z" />
    </Icon>
);

export default ObjectSubtract;
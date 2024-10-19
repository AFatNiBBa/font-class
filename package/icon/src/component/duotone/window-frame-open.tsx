
import { Icon, generic } from "../../index";

/**
 * A component that renders the `window-frame-open` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-frame-open?s=duotone window-frame-open}
 * @preview ![window-frame-open](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiA2NGwwIDE2MCAxMzYgMCAwLTE2MEw5NiA2NHptMTg0IDBsMCAxNjAgMTM2IDAgMC0xNjBMMjgwIDY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDgwIDIyNGwwLTE2MGMwLTM1LjMtMjguNy02NC02NC02NEw5NiAwQzYwLjcgMCAzMiAyOC43IDMyIDY0bDAgMTYwIDAgNjQgNjQgMCAzMjAgMCA2NCAwIDAtNjR6bS02NCAwbC0xMzYgMCAwLTE2MCAxMzYgMCAwIDE2MHptLTE4NCAwTDk2IDIyNCA5NiA2NGwxMzYgMCAwIDE2MHpNOTYgNDQ4bDAtMTI4LTY0IDAgMCAxMjhjLTE3LjcgMC0zMiAxNC4zLTMyIDMyczE0LjMgMzIgMzIgMzJsMzIgMCAzODQgMCAzMiAwYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMybDAtMTI4LTY0IDAgMCAxMjhMOTYgNDQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const WindowFrameOpen: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 64l0 160 136 0 0-160L96 64zm184 0l0 160 136 0 0-160L280 64z" />
            <path d="M480 224l0-160c0-35.3-28.7-64-64-64L96 0C60.7 0 32 28.7 32 64l0 160 0 64 64 0 320 0 64 0 0-64zm-64 0l-136 0 0-160 136 0 0 160zm-184 0L96 224 96 64l136 0 0 160zM96 448l0-128-64 0 0 128c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 384 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-128-64 0 0 128L96 448z" />
    </Icon>
);

export default WindowFrameOpen;
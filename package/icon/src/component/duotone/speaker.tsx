
import { Icon, generic } from "../../index";

/**
 * A component that renders the `speaker` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/speaker?s=duotone speaker}
 * @preview ![speaker](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0QzAgMjguNyAyOC43IDAgNjQgMEwzMjAgMGMzNS4zIDAgNjQgMjguNyA2NCA2NGwwIDM4NGMwIDM1LjMtMjguNyA2NC02NCA2NEw2NCA1MTJjLTM1LjMgMC02NC0yOC43LTY0LTY0TDAgNjR6TTgwIDMzNmExMTIgMTEyIDAgMSAwIDIyNCAwQTExMiAxMTIgMCAxIDAgODAgMzM2em02NC0yMjRhNDggNDggMCAxIDAgOTYgMCA0OCA0OCAwIDEgMCAtOTYgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE5MiAxNjBhNDggNDggMCAxIDAgMC05NiA0OCA0OCAwIDEgMCAwIDk2em0wIDI4OGExMTIgMTEyIDAgMSAwIDAtMjI0IDExMiAxMTIgMCAxIDAgMCAyMjR6TTEyOCAzMzZhNjQgNjQgMCAxIDEgMTI4IDAgNjQgNjQgMCAxIDEgLTEyOCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Speaker: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM80 336a112 112 0 1 0 224 0A112 112 0 1 0 80 336zm64-224a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
            <path d="M192 160a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0 288a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM128 336a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default Speaker;
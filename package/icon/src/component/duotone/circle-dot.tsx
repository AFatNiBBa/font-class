
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-dot` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-dot?s=duotone circle-dot}
 * @preview ![circle-dot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTM1MiAwYTk2IDk2IDAgMSAxIC0xOTIgMCA5NiA5NiAwIDEgMSAxOTIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiAxNjBhOTYgOTYgMCAxIDAgMCAxOTIgOTYgOTYgMCAxIDAgMC0xOTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleDot: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm352 0a96 96 0 1 1 -192 0 96 96 0 1 1 192 0z" />
            <path d="M256 160a96 96 0 1 0 0 192 96 96 0 1 0 0-192z" />
    </Icon>
);

export default CircleDot;
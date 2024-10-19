
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-flushed` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-flushed?s=duotone face-flushed}
 * @preview ![face-flushed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTIzMi0zMkE3MiA3MiAwIDEgMSA4OCAyMjRhNzIgNzIgMCAxIDEgMTQ0IDB6TTE3NiAzODRjMC04LjggNy4yLTE2IDE2LTE2bDEyOCAwYzguOCAwIDE2IDcuMiAxNiAxNnMtNy4yIDE2LTE2IDE2bC0xMjggMGMtOC44IDAtMTYtNy4yLTE2LTE2ek00MjQgMjI0YTcyIDcyIDAgMSAxIC0xNDQgMCA3MiA3MiAwIDEgMSAxNDQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE2MCAyNDhhMjQgMjQgMCAxIDAgMC00OCAyNCAyNCAwIDEgMCAwIDQ4em0xOTIgMGEyNCAyNCAwIDEgMCAwLTQ4IDI0IDI0IDAgMSAwIDAgNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const FaceFlushed: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm232-32A72 72 0 1 1 88 224a72 72 0 1 1 144 0zM176 384c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16zM424 224a72 72 0 1 1 -144 0 72 72 0 1 1 144 0z" />
            <path d="M160 248a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm192 0a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default FaceFlushed;
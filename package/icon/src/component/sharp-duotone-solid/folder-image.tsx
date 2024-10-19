
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-image` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-image?s=sharp-duotone-solid folder-image}
 * @preview ![folder-image](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDUxMiAwIDAtMzg0TDI3MiA5NiAyMjQgMzIgMCAzMnpNOTYgMzc2LjVsNi4xLTYuOCA2NC03MkwxODQgMjc3LjVsMTcuOSAyMC4yTDIxOS4xIDMxN2w1Ny4zLTgxLjJMMjk2IDIwOGwxOS42IDI3LjggOTYgMTM2TDQxNiAzNzhsMCA3LjYgMCA4IDAgMjQtMjQgMC0xMjAgMC0yNCAwLTQ4IDAtMjQgMC01NiAwLTI0IDAgMC0yNCAwLTggMC05LjF6TTE3NiAyMjRhMzIgMzIgMCAxIDEgLTY0IDAgMzIgMzIgMCAxIDEgNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI5NiAyMDhsMTkuNiAyNy44IDk2IDEzNkw0MTYgMzc4bDAgNy42IDAgOCAwIDI0LTI0IDAtMTIwIDAtMjQgMC00OCAwLTI0IDAtNTYgMC0yNCAwIDAtMjQgMC04IDAtOS4xIDYuMS02LjggNjQtNzJMMTg0IDI3Ny41bDE3LjkgMjAuMkwyMTkuMSAzMTdsNTcuMy04MS4yTDI5NiAyMDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const FolderImage: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 480l512 0 0-384L272 96 224 32 0 32zM96 376.5l6.1-6.8 64-72L184 277.5l17.9 20.2L219.1 317l57.3-81.2L296 208l19.6 27.8 96 136L416 378l0 7.6 0 8 0 24-24 0-120 0-24 0-48 0-24 0-56 0-24 0 0-24 0-8 0-9.1zM176 224a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
            <path d="M296 208l19.6 27.8 96 136L416 378l0 7.6 0 8 0 24-24 0-120 0-24 0-48 0-24 0-56 0-24 0 0-24 0-8 0-9.1 6.1-6.8 64-72L184 277.5l17.9 20.2L219.1 317l57.3-81.2L296 208z" />
    </Icon>
);

export default FolderImage;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `do-not-enter` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/do-not-enter?s=sharp-duotone-solid do-not-enter}
 * @preview ![do-not-enter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik04MCAyMDhsMzUyIDAgMCA5Nkw4MCAzMDRsMC05NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiA1MTJBMjU2IDI1NiAwIDEgMCAyNTYgMGEyNTYgMjU2IDAgMSAwIDAgNTEyek00MzIgMjA4bDAgOTZMODAgMzA0bDAtOTYgMzUyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const DoNotEnter: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M80 208l352 0 0 96L80 304l0-96z" />
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM432 208l0 96L80 304l0-96 352 0z" />
    </Icon>
);

export default DoNotEnter;
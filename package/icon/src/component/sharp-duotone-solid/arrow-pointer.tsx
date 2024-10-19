
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-pointer` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-pointer?s=sharp-duotone-solid arrow-pointer}
 * @preview ![arrow-pointer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjUuMSAzNDYuNmM3LjMtOC45IDE0LjYtMTcuNyAyMS44LTI2LjZsMzYuNCAwIDQ3LjkgMTAyLjIgMTMuNiAyOS01Ny45IDI3LjItMTMuNi0yOUwxMjUuMSAzNDYuNnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgNDYuOUwzMiAzMiAzMTkuOSAyNzhsLjEgNDJIMTQ2LjlMMjkgNDYzLjggMCA0MzJWNDYuOXoiLz48L3N2Zz4=|width=32|height=32)
 */
const ArrowPointer: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M125.1 346.6c7.3-8.9 14.6-17.7 21.8-26.6l36.4 0 47.9 102.2 13.6 29-57.9 27.2-13.6-29L125.1 346.6z" />
            <path d="M0 46.9L32 32 319.9 278l.1 42H146.9L29 463.8 0 432V46.9z" />
    </Icon>
);

export default ArrowPointer;
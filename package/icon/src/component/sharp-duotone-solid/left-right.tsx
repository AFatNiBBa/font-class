
import { Icon, generic } from "../../index";

/**
 * A component that renders the `left-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-right?s=sharp-duotone-solid left-right}
 * @preview ![left-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgMjA4bDAgOTYgOTYgMCAwIDgwIDMyIDBMNTEyIDI1NiAzODQgMTI4bC0zMiAwIDAgODAtOTYgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMjU2TDEyOCAzODRsMzIgMCAwLTgwIDk2IDAgMC05Ni05NiAwIDAtODAtMzIgMEwwIDI1NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const LeftRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 208l0 96 96 0 0 80 32 0L512 256 384 128l-32 0 0 80-96 0z" />
            <path d="M0 256L128 384l32 0 0-80 96 0 0-96-96 0 0-80-32 0L0 256z" />
    </Icon>
);

export default LeftRight;
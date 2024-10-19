
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-half-stroke` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-half-stroke?s=sharp-duotone-solid circle-half-stroke}
 * @preview ![circle-half-stroke](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgMGwwIDY0YzEwNiAwIDE5MiA4NiAxOTIgMTkycy04NiAxOTItMTkyIDE5MmwwIDY0YzE0MS40IDAgMjU2LTExNC42IDI1Ni0yNTZTMzk3LjQgMCAyNTYgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiAwQzExNC42IDAgMCAxMTQuNiAwIDI1NlMxMTQuNiA1MTIgMjU2IDUxMkwyNTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleHalfStroke: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 0l0 64c106 0 192 86 192 192s-86 192-192 192l0 64c141.4 0 256-114.6 256-256S397.4 0 256 0z" />
            <path d="M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512L256 0z" />
    </Icon>
);

export default CircleHalfStroke;
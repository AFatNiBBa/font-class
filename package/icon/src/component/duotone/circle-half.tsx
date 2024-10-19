
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-half` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-half?s=duotone circle-half}
 * @preview ![circle-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgMEMzOTcuNCAwIDUxMiAxMTQuNiA1MTIgMjU2cy0xMTQuNiAyNTYtMjU2IDI1NkwyNTYgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiAwQzExNC42IDAgMCAxMTQuNiAwIDI1NlMxMTQuNiA1MTIgMjU2IDUxMkwyNTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleHalf: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 0C397.4 0 512 114.6 512 256s-114.6 256-256 256L256 0z" />
            <path d="M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512L256 0z" />
    </Icon>
);

export default CircleHalf;
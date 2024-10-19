
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-three-quarters` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-three-quarters?s=sharp-duotone-solid circle-three-quarters}
 * @preview ![circle-three-quarters](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgMGwwIDI1NiAyNTYgMEM1MTIgMTE0LjYgMzk3LjQgMCAyNTYgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiAwQzExNC42IDAgMCAxMTQuNiAwIDI1NlMxMTQuNiA1MTIgMjU2IDUxMnMyNTYtMTE0LjYgMjU2LTI1NkgyNTZWMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleThreeQuarters: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 0l0 256 256 0C512 114.6 397.4 0 256 0z" />
            <path d="M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256H256V0z" />
    </Icon>
);

export default CircleThreeQuarters;
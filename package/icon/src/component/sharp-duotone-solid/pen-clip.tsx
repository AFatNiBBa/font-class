
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-clip` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-clip?s=sharp-duotone-solid pen-clip}
 * @preview ![pen-clip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yODkgOTVMNDE3IDIyM2MzMS43LTMxLjcgNjMuNC02My40IDk1LTk1TDM4NCAwIDI4OSA5NXoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI0MSA0N2wtMTctMTdMMjA3IDQ3IDk1IDE1OWwtMTcgMTdMMTEyIDIwOS45bDE3LTE3IDk1LTk1IDMxIDMxTDMyIDM1MiAwIDUxMmwxNjAtMzJMMzgzIDI1N2wzMy0zMyAxLTFMMjQxIDQ3eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const PenClip: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M289 95L417 223c31.7-31.7 63.4-63.4 95-95L384 0 289 95z" />
            <path d="M241 47l-17-17L207 47 95 159l-17 17L112 209.9l17-17 95-95 31 31L32 352 0 512l160-32L383 257l33-33 1-1L241 47z" />
    </Icon>
);

export default PenClip;
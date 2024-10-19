
import { Icon, generic } from "../../index";

/**
 * A component that renders the `objects-align-top` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-top?s=sharp-duotone-solid objects-align-top}
 * @preview ![objects-align-top](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAxMjhsMCAzODQgMTYwIDAgMC0zODRMNjQgMTI4em0yMjQgMGwwIDI1NiAxNjAgMCAwLTI1Ni0xNjAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMEg1MTJWNDhIMFYweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ObjectsAlignTop: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 128l0 384 160 0 0-384L64 128zm224 0l0 256 160 0 0-256-160 0z" />
            <path d="M0 0H512V48H0V0z" />
    </Icon>
);

export default ObjectsAlignTop;
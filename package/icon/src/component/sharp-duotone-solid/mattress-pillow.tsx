
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mattress-pillow` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mattress-pillow?s=sharp-duotone-solid mattress-pillow}
 * @preview ![mattress-pillow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0TDAgNDQ4bDI1NiAwIDAtMzg0TDAgNjR6bTY0IDY0bDEyOCAwIDAgMjU2TDY0IDM4NGwwLTI1NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiA2NEg2NDBWNDQ4SDI1NlY2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const MattressPillow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448l256 0 0-384L0 64zm64 64l128 0 0 256L64 384l0-256z" />
            <path d="M256 64H640V448H256V64z" />
    </Icon>
);

export default MattressPillow;
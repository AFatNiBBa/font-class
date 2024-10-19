
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grid-horizontal` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grid-horizontal?s=sharp-duotone-solid grid-horizontal}
 * @preview ![grid-horizontal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI4OGwxMjggMCAwIDEyOEwwIDQxNiAwIDI4OHpNMTYwIDEyOGwxMjggMCAwIDEyOC0xMjggMCAwLTEyOHpNMzIwIDI4OGwxMjggMCAwIDEyOC0xMjggMCAwLTEyOHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMTI4bDEyOCAwIDAgMTI4TDAgMjU2IDAgMTI4ek0xNjAgMjg4bDEyOCAwIDAgMTI4LTEyOCAwIDAtMTI4ek00NDggMTI4bDAgMTI4LTEyOCAwIDAtMTI4IDEyOCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const GridHorizontal: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 288l128 0 0 128L0 416 0 288zM160 128l128 0 0 128-128 0 0-128zM320 288l128 0 0 128-128 0 0-128z" />
            <path d="M0 128l128 0 0 128L0 256 0 128zM160 288l128 0 0 128-128 0 0-128zM448 128l0 128-128 0 0-128 128 0z" />
    </Icon>
);

export default GridHorizontal;
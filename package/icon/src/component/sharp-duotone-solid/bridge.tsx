
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bridge` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bridge?s=sharp-duotone-solid bridge}
 * @preview ![bridge](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMybDMyIDAgNTEyIDAgMzIgMCAwIDY0LTMyIDAtNDAgMCAwIDY0LTQ4IDAgMC02NC04MCAwIDAgNjQtNDggMCAwLTY0LTgwIDAgMCA2NC00OCAwIDAtNjQtODAgMCAwIDY0LTQ4IDAgMC02NEwzMiA5NiAwIDk2IDAgMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDE2MEg1NzZWMjg4Yy01MyAwLTk2IDQzLTk2IDk2djk2SDM4NFYzODRjMC01My00My05Ni05Ni05NnMtOTYgNDMtOTYgOTZ2OTZIOTZWMzg0YzAtNTMtNDMtOTYtOTYtOTZWMTYweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Bridge: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32l32 0 512 0 32 0 0 64-32 0-40 0 0 64-48 0 0-64-80 0 0 64-48 0 0-64-80 0 0 64-48 0 0-64-80 0 0 64-48 0 0-64L32 96 0 96 0 32z" />
            <path d="M0 160H576V288c-53 0-96 43-96 96v96H384V384c0-53-43-96-96-96s-96 43-96 96v96H96V384c0-53-43-96-96-96V160z" />
    </Icon>
);

export default Bridge;
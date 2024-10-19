
import { Icon, generic } from "../../index";

/**
 * A component that renders the `oil-can` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/oil-can?s=sharp-duotone-solid oil-can}
 * @preview ![oil-can](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgNjRsMCA2NCA2NCAwIDAgMzIgNjQgMCAwLTMyIDY0IDAgMC02NEwxNjAgNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik05NiAyMDhsMCA4Ni4xTDQ4IDI3Mi44IDQ4IDIwOGw0OCAwek0wIDMwNGw5NiA0Mi43TDk2IDQxNmwyODggMCA0OCAwTDY0MCAxOTJsLTMyLTMyTDQ0OCAxOTJsLTY0LTMyLTI0MCAwLTQ4IDAtNDggMEwwIDE2MGwwIDQ4IDAgOTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const OilCan: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M160 64l0 64 64 0 0 32 64 0 0-32 64 0 0-64L160 64z" />
            <path d="M96 208l0 86.1L48 272.8 48 208l48 0zM0 304l96 42.7L96 416l288 0 48 0L640 192l-32-32L448 192l-64-32-240 0-48 0-48 0L0 160l0 48 0 96z" />
    </Icon>
);

export default OilCan;
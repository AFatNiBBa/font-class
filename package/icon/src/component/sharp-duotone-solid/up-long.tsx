
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-long` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-long?s=sharp-duotone-solid up-long}
 * @preview ![up-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAxOTJsMTI4IDAgMCAzMjBMOTYgNTEyYzAtNjQgMC0xMjggMC0xOTJjMC00Mi43IDAtODUuMyAwLTEyOHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMyMCAxNjBMMTYwIDAgMCAxNjBsMCAzMnMwIDAgMCAwbDk2IDAgMTI4IDAgOTYgMCAwLTMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const UpLong: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M96 192l128 0 0 320L96 512c0-64 0-128 0-192c0-42.7 0-85.3 0-128z" />
            <path d="M320 160L160 0 0 160l0 32s0 0 0 0l96 0 128 0 96 0 0-32z" />
    </Icon>
);

export default UpLong;
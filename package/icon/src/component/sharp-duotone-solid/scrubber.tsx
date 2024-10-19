
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scrubber` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scrubber?s=sharp-duotone-solid scrubber}
 * @preview ![scrubber](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOTIgMjU2YTY0IDY0IDAgMSAwIDEyOCAwIDY0IDY0IDAgMSAwIC0xMjggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiA1MTJBMjU2IDI1NiAwIDEgMCAyNTYgMGEyNTYgMjU2IDAgMSAwIDAgNTEyem0wLTMyMGE2NCA2NCAwIDEgMSAwIDEyOCA2NCA2NCAwIDEgMSAwLTEyOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Scrubber: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 256a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-320a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default Scrubber;
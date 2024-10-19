
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shoe-prints` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shoe-prints?s=sharp-duotone-solid shoe-prints}
 * @preview ![shoe-prints](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM1Mmw5NiAwIDAgMTI4TDAgNDgwIDAgMzUyem0xMjggMGw2NCAwIDEyOC02NCAxOTIgNDggMCAxMTJMMzIwIDUxMiAxMjggNDgwbDAtMTI4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU2IDE2MGw2NCAwIDEyOCA2NCAxOTItNDggMC0xMTJMNDQ4IDAgMjU2IDMybDAgMTI4ek0yMjQgMzJsLTk2IDAgMCAxMjggOTYgMCAwLTEyOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ShoePrints: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 352l96 0 0 128L0 480 0 352zm128 0l64 0 128-64 192 48 0 112L320 512 128 480l0-128z" />
            <path d="M256 160l64 0 128 64 192-48 0-112L448 0 256 32l0 128zM224 32l-96 0 0 128 96 0 0-128z" />
    </Icon>
);

export default ShoePrints;
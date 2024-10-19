
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-o` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-o?s=sharp-duotone-solid square-o}
 * @preview ![square-o](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6TTM1MiAyNTZBMTI4IDEyOCAwIDEgMSA5NiAyNTZhMTI4IDEyOCAwIDEgMSAyNTYgMHptLTIwOCAwYTgwIDgwIDAgMSAwIDE2MCAwIDgwIDgwIDAgMSAwIC0xNjAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIyNCAxNzZhODAgODAgMCAxIDAgMCAxNjAgODAgODAgMCAxIDAgMC0xNjB6bTEyOCA4MEExMjggMTI4IDAgMSAxIDk2IDI1NmExMjggMTI4IDAgMSAxIDI1NiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SquareO: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM352 256A128 128 0 1 1 96 256a128 128 0 1 1 256 0zm-208 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
            <path d="M224 176a80 80 0 1 0 0 160 80 80 0 1 0 0-160zm128 80A128 128 0 1 1 96 256a128 128 0 1 1 256 0z" />
    </Icon>
);

export default SquareO;
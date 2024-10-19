
import { Icon, generic } from "../../index";

/**
 * A component that renders the `box` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box?s=sharp-duotone-solid box}
 * @preview ![box](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MGwyMDggMCAwLTEyOEw2NCAzMiAwIDE2MHpNMjQwIDMybDAgMTI4IDIwOCAwTDM4NCAzMiAyNDAgMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNDAgMTYwbDIwOCAwIDAgMzIwTDAgNDgwIDAgMTYwbDIwOCAwIDAtMTI4IDMyIDAgMCAxMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const Box: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 160l208 0 0-128L64 32 0 160zM240 32l0 128 208 0L384 32 240 32z" />
            <path d="M240 160l208 0 0 320L0 480 0 160l208 0 0-128 32 0 0 128z" />
    </Icon>
);

export default Box;
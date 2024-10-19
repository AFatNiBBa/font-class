
import { Icon, generic } from "../../index";

/**
 * A component that renders the `box-dollar` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-dollar?s=duotone box-dollar}
 * @preview ![box-dollar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MGwyMDggMCAwLTEyOEw5My43IDMyQzc1LjUgMzIgNTguOSA0Mi4zIDUwLjcgNTguNUwwIDE2MHpNMjQwIDMybDAgMTI4IDIwOCAwTDM5Ny4zIDU4LjVDMzg5LjEgNDIuMyAzNzIuNSAzMiAzNTQuMyAzMkwyNDAgMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNDAgMTYwbDIwOCAwIDAgMjU2YzAgMzUuMy0yOC43IDY0LTY0IDY0TDY0IDQ4MGMtMzUuMyAwLTY0LTI4LjctNjQtNjRMMCAxNjBsMjA4IDAgMC0xMjggMzIgMCAwIDEyOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BoxDollar: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 160l208 0 0-128L93.7 32C75.5 32 58.9 42.3 50.7 58.5L0 160zM240 32l0 128 208 0L397.3 58.5C389.1 42.3 372.5 32 354.3 32L240 32z" />
            <path d="M240 160l208 0 0 256c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 160l208 0 0-128 32 0 0 128z" />
    </Icon>
);

export default BoxDollar;
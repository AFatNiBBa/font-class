
import { Icon, generic } from "../../index";

/**
 * A component that renders the `box-taped` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-taped?s=sharp-duotone-solid box-taped}
 * @preview ![box-taped](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MGwxNjAgMEwxOTIgMzIgNjQgMzIgMCAxNjB6bTE2MCAwbDEyOCAwIDAgMTI4LTEyOCAwIDAtMTI4ek0yNTYgMzJsMzIgMTI4IDE2MCAwTDM4NCAzMiAyNTYgMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNjAgMTYwTDAgMTYwIDAgNDgwbDQ0OCAwIDAtMzIwLTE2MCAwIDAgMTI4LTEyOCAwIDAtMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BoxTaped: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 160l160 0L192 32 64 32 0 160zm160 0l128 0 0 128-128 0 0-128zM256 32l32 128 160 0L384 32 256 32z" />
            <path d="M160 160L0 160 0 480l448 0 0-320-160 0 0 128-128 0 0-128z" />
    </Icon>
);

export default BoxTaped;
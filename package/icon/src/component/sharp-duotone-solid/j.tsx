
import { Icon, generic } from "../../index";

/**
 * A component that renders the `j` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/j?s=sharp-duotone-solid j}
 * @preview ![j](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMjAgMzJsMCAzMiAwIDI1NmMwIDg4LjQtNzEuNiAxNjAtMTYwIDE2MFMwIDQwOC40IDAgMzIwbDAtMzIgMC0zMiA2NCAwIDAgMzIgMCAzMmMwIDUzIDQzIDk2IDk2IDk2czk2LTQzIDk2LTk2bDAtMjU2IDAtMzIgNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const J: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M320 32l0 32 0 256c0 88.4-71.6 160-160 160S0 408.4 0 320l0-32 0-32 64 0 0 32 0 32c0 53 43 96 96 96s96-43 96-96l0-256 0-32 64 0z" />
    </Icon>
);

export default J;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `cubes-stacked` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cubes-stacked?s=sharp-duotone-solid cubes-stacked}
 * @preview ![cubes-stacked](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM1MmwxMjggMCAwIDEyOEwwIDQ4MCAwIDM1MnpNNTUgMjIzbDExMC45LTY0IDY0IDExMC45TDExOSAzMzMuOCA1NSAyMjN6TTMyMCAzNTJsMTI4IDAgMCAxMjgtMTI4IDAgMC0xMjh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMjAgMzJMMTkyIDMybDAgMTI4IDEyOCAwIDAtMTI4ek0yNTYgMzIwbDEyOCAwIDAtMTI4LTEyOCAwIDAgMTI4em0tOTYgMzJsMCAxMjggMTI4IDAgMC0xMjgtMTI4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const CubesStacked: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 352l128 0 0 128L0 480 0 352zM55 223l110.9-64 64 110.9L119 333.8 55 223zM320 352l128 0 0 128-128 0 0-128z" />
            <path d="M320 32L192 32l0 128 128 0 0-128zM256 320l128 0 0-128-128 0 0 128zm-96 32l0 128 128 0 0-128-128 0z" />
    </Icon>
);

export default CubesStacked;
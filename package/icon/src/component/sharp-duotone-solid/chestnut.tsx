
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chestnut` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chestnut?s=sharp-duotone-solid chestnut}
 * @preview ![chestnut](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM4NGw0NDggMCAwIDMyLTY0IDY0TDY0IDQ4MCAwIDQxNmwwLTMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDQ4IDM1MmMwLTEzNC4zLTEwMS43LTIxMy44LTE2OC40LTI2NS44QzI1MSA2My44IDIyOC44IDQ2LjQgMjI0IDMyYy00LjggMTQuNC0yNyAzMS44LTU1LjYgNTQuMkMxMDEuNyAxMzguMiAwIDIxNy43IDAgMzUydjMySDQ0OFYzNTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Chestnut: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 384l448 0 0 32-64 64L64 480 0 416l0-32z" />
            <path d="M448 352c0-134.3-101.7-213.8-168.4-265.8C251 63.8 228.8 46.4 224 32c-4.8 14.4-27 31.8-55.6 54.2C101.7 138.2 0 217.7 0 352v32H448V352z" />
    </Icon>
);

export default Chestnut;
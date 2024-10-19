
import { Icon, generic } from "../../index";

/**
 * A component that renders the `envelope` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope?s=sharp-duotone-solid envelope}
 * @preview ![envelope](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE0NEwwIDQ0OGw1MTIgMCAwLTMwNEwyNTYgMzIwIDAgMTQ0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAxNDRWNjRINTEydjgwTDI1NiAzMjAgMCAxNDR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Envelope: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 144L0 448l512 0 0-304L256 320 0 144z" />
            <path d="M0 144V64H512v80L256 320 0 144z" />
    </Icon>
);

export default Envelope;
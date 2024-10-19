
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tent` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tent?s=sharp-duotone-solid tent}
 * @preview ![tent](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDUxMmwyODggMCAwLTI1Nkw0NDggNTEybDEyOCAwTDU0NCAxNzYgMjg4IDAgMzIgMTYwIDAgNTEyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjg4IDI1NlY1MTJINDQ4TDI4OCAyNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Tent: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 512l288 0 0-256L448 512l128 0L544 176 288 0 32 160 0 512z" />
            <path d="M288 256V512H448L288 256z" />
    </Icon>
);

export default Tent;
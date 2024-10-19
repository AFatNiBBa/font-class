
import { Icon, generic } from "../../index";

/**
 * A component that renders the `right-from-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-from-line?s=sharp-duotone-solid right-from-line}
 * @preview ![right-from-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0TDAgOTYgMCA0MTZsMCAzMiA2NCAwIDAtMzJMNjQgOTZsMC0zMkwwIDY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDQ4IDI1NkwyODggOTZsLTMyIDAgMCA5Nkw5NiAxOTJsMCAxMjggMTYwIDAgMCA5NiAzMiAwTDQ0OCAyNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const RightFromLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 96 0 416l0 32 64 0 0-32L64 96l0-32L0 64z" />
            <path d="M448 256L288 96l-32 0 0 96L96 192l0 128 160 0 0 96 32 0L448 256z" />
    </Icon>
);

export default RightFromLine;
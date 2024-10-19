
import { Icon, generic } from "../../index";

/**
 * A component that renders the `stamp` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stamp?s=sharp-duotone-solid stamp}
 * @preview ![stamp](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA0MTZsNjQgMCAwIDMyIDMyMCAwIDAtMzIgNjQgMCAwIDMyIDAgNjQtNjQgMEw5NiA1MTJsLTY0IDAgMC02NCAwLTMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzUyIDk2YzAgMjguNC0xMi40IDU0LTMyIDcxLjZsMCA4OC40IDgwIDBjNjEuOSAwIDExMiA1MC4xIDExMiAxMTJsMCA0OEwwIDQxNmwwLTQ4YzAtNjEuOSA1MC4xLTExMiAxMTItMTEybDgwIDAgMC04OC40QzE3Mi40IDE1MCAxNjAgMTI0LjQgMTYwIDk2YzAtNTMgNDMtOTYgOTYtOTZzOTYgNDMgOTYgOTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Stamp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 416l64 0 0 32 320 0 0-32 64 0 0 32 0 64-64 0L96 512l-64 0 0-64 0-32z" />
            <path d="M352 96c0 28.4-12.4 54-32 71.6l0 88.4 80 0c61.9 0 112 50.1 112 112l0 48L0 416l0-48c0-61.9 50.1-112 112-112l80 0 0-88.4C172.4 150 160 124.4 160 96c0-53 43-96 96-96s96 43 96 96z" />
    </Icon>
);

export default Stamp;
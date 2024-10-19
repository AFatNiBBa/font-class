
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sack` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sack?s=sharp-duotone-solid sack}
 * @preview ![sack](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQxNmwwIDk2IDUxMiAwIDAtOTZjMC0xNjUuMS0xMjIuMy0yNDMuMy0xNzktMjc5LjZjLTQuOC0zLjEtOS4yLTUuOS0xMy04LjRsLTEyOCAwYy0zLjggMi41LTguMSA1LjMtMTMgOC40QzEyMi4zIDE3Mi43IDAgMjUwLjkgMCA0MTZ6TTEyOCAwbDY0IDk2IDEyOCAwTDM4NCAwIDEyOCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTc2IDk2bDE2IDAgMTI4IDAgMTYgMCAwIDMyLTE2IDAtMTI4IDAtMTYgMCAwLTMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Sack: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 416l0 96 512 0 0-96c0-165.1-122.3-243.3-179-279.6c-4.8-3.1-9.2-5.9-13-8.4l-128 0c-3.8 2.5-8.1 5.3-13 8.4C122.3 172.7 0 250.9 0 416zM128 0l64 96 128 0L384 0 128 0z" />
            <path d="M176 96l16 0 128 0 16 0 0 32-16 0-128 0-16 0 0-32z" />
    </Icon>
);

export default Sack;
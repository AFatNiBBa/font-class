
import { Icon, generic } from "../../index";

/**
 * A component that renders the `triangle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/triangle?s=sharp-duotone-solid triangle}
 * @preview ![triangle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ4MEwyNTYgMzIgNTEyIDQ4MEgweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const Triangle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 480L256 32 512 480H0z" />
    </Icon>
);

export default Triangle;
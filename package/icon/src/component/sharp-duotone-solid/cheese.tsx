
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cheese` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cheese?s=sharp-duotone-solid cheese}
 * @preview ![cheese](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1Nmw1MTIgMEM1MTIgMTMyLjMgNDExLjcgMzIgMjg4IDMyTDAgMjU2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAyNTZINTEyVjQ4MEgwVjI1NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Cheese: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256l512 0C512 132.3 411.7 32 288 32L0 256z" />
            <path d="M0 256H512V480H0V256z" />
    </Icon>
);

export default Cheese;
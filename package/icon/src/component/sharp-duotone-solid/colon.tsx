
import { Icon, generic } from "../../index";

/**
 * A component that renders the `colon` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/colon?s=sharp-duotone-solid colon}
 * @preview ![colon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAzMjBsMTI4IDAgMCAxMjhMMzIgNDQ4bDAtMTI4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzIgNjRIMTYwVjE5MkgzMlY2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Colon: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path class={generic.secondary} d="M32 320l128 0 0 128L32 448l0-128z" />
            <path d="M32 64H160V192H32V64z" />
    </Icon>
);

export default Colon;
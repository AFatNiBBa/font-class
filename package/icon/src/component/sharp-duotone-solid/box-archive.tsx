
import { Icon, generic } from "../../index";

/**
 * A component that renders the `box-archive` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-archive?s=sharp-duotone-solid box-archive}
 * @preview ![box-archive](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAxMjhsMCAzNTIgNDQ4IDAgMC0zNTJMMzIgMTI4em0xMjggNjRsMTkyIDAgMCA2NC0xOTIgMCAwLTY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAzMkg1MTJ2OTZIMFYzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const BoxArchive: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 128l0 352 448 0 0-352L32 128zm128 64l192 0 0 64-192 0 0-64z" />
            <path d="M0 32H512v96H0V32z" />
    </Icon>
);

export default BoxArchive;
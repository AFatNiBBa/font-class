
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diamond` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond?s=duotone diamond}
 * @preview ![diamond](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yODQuMyAxMS43Yy0xNS42LTE1LjYtNDAuOS0xNS42LTU2LjYgMGwtMjE2IDIxNmMtMTUuNiAxNS42LTE1LjYgNDAuOSAwIDU2LjZsMjE2IDIxNmMxNS42IDE1LjYgNDAuOSAxNS42IDU2LjYgMGwyMTYtMjE2YzE1LjYtMTUuNiAxNS42LTQwLjkgMC01Ni42bC0yMTYtMjE2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const Diamond: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z" />
    </Icon>
);

export default Diamond;
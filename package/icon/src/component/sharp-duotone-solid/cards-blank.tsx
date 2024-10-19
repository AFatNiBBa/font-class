
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cards-blank` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cards-blank?s=sharp-duotone-solid cards-blank}
 * @preview ![cards-blank](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMjAgNjRsMCA1MC4zIDE0NC45IDI1MUM0MTYuNiAzOTMuMiAzNjguMyA0MjEuMSAzMjAgNDQ5bDAgNjMgMzIwIDAgMC00NDhMMzIwIDY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjEwLjkgNTEybDI1NC0xNDYuNkwyNTQgMCAwIDE0Ni43IDIxMC45IDUxMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const CardsBlank: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M320 64l0 50.3 144.9 251C416.6 393.2 368.3 421.1 320 449l0 63 320 0 0-448L320 64z" />
            <path d="M210.9 512l254-146.6L254 0 0 146.7 210.9 512z" />
    </Icon>
);

export default CardsBlank;
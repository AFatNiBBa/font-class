
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mobile-button` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-button?s=duotone mobile-button}
 * @preview ![mobile-button](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNiAzODRsMzUyIDAgMCA2NGMwIDM1LjMtMjguNyA2NC02NCA2NEw4MCA1MTJjLTM1LjMgMC02NC0yOC43LTY0LTY0bDAtNjR6bTE0NCA2NGEzMiAzMiAwIDEgMCA2NCAwIDMyIDMyIDAgMSAwIC02NCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTYgNjRDMTYgMjguNyA0NC43IDAgODAgMEgzMDRjMzUuMyAwIDY0IDI4LjcgNjQgNjRWMzg0SDE2VjY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const MobileButton: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M16 384l352 0 0 64c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64l0-64zm144 64a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
            <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V384H16V64z" />
    </Icon>
);

export default MobileButton;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `phone-intercom` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-intercom?s=sharp-duotone-solid phone-intercom}
 * @preview ![phone-intercom](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMzJsMCA0NDggMzUyIDAgMC00NDhMMTYwIDMyem02NCA2NGwyMjQgMCAwIDE2MC0yMjQgMCAwLTE2MHptOTYgMjcyYTQ4IDQ4IDAgMSAxIC05NiAwIDQ4IDQ4IDAgMSAxIDk2IDB6bTMyLTQ4bDE2IDAgNjQgMCAxNiAwIDAgMzItMTYgMC02NCAwLTE2IDAgMC0zMnptMCA2NGwxNiAwIDY0IDAgMTYgMCAwIDMyLTE2IDAtNjQgMC0xNiAwIDAtMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMjggMzJMMCAzMiAwIDQ4MGwxMjggMCAwLTQ0OHpNMzY4IDMyMGwtMTYgMCAwIDMyIDE2IDAgNjQgMCAxNiAwIDAtMzItMTYgMC02NCAwem0wIDY0bC0xNiAwIDAgMzIgMTYgMCA2NCAwIDE2IDAgMC0zMi0xNiAwLTY0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const PhoneIntercom: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 32l0 448 352 0 0-448L160 32zm64 64l224 0 0 160-224 0 0-160zm96 272a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm32-48l16 0 64 0 16 0 0 32-16 0-64 0-16 0 0-32zm0 64l16 0 64 0 16 0 0 32-16 0-64 0-16 0 0-32z" />
            <path d="M128 32L0 32 0 480l128 0 0-448zM368 320l-16 0 0 32 16 0 64 0 16 0 0-32-16 0-64 0zm0 64l-16 0 0 32 16 0 64 0 16 0 0-32-16 0-64 0z" />
    </Icon>
);

export default PhoneIntercom;
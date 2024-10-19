
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bell-concierge` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-concierge?s=sharp-duotone-solid bell-concierge}
 * @preview ![bell-concierge](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQwMGwwIDQ4IDI0IDAgNDY0IDAgMjQgMCAwLTQ4LTI0IDAtOCAwTDMyIDQwMGwtOCAwTDAgNDAwek0xOTIgNjRsMCA0OCAyNCAwIDE2IDAgMCAzMy4zYzcuOS0uOCAxNS45LTEuMyAyNC0xLjNjMiAwIDQgMCA2LjEgLjFzNCAuMSA2IC4yYzQgLjIgOCAuNSAxMS45IDFsMC0zMy4zIDE2IDAgMjQgMCAwLTQ4LTI0IDAtNDAgMC00MCAwLTI0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00ODAgMzY4YzAtMTIzLjctMTAwLjMtMjI0LTIyNC0yMjRTMzIgMjQ0LjMgMzIgMzY4djMySDQ4MFYzNjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const BellConcierge: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 400l0 48 24 0 464 0 24 0 0-48-24 0-8 0L32 400l-8 0L0 400zM192 64l0 48 24 0 16 0 0 33.3c7.9-.8 15.9-1.3 24-1.3c2 0 4 0 6.1 .1s4 .1 6 .2c4 .2 8 .5 11.9 1l0-33.3 16 0 24 0 0-48-24 0-40 0-40 0-24 0z" />
            <path d="M480 368c0-123.7-100.3-224-224-224S32 244.3 32 368v32H480V368z" />
    </Icon>
);

export default BellConcierge;
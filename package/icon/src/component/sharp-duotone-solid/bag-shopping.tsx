
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bag-shopping` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bag-shopping?s=sharp-duotone-solid bag-shopping}
 * @preview ![bag-shopping](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MEwwIDUxMmw0NDggMCAwLTM1Mi0xMTIgMCAwIDcyIDAgMjQtNDggMCAwLTI0IDAtNzItMTI4IDAgMCA3MiAwIDI0LTQ4IDAgMC0yNCAwLTcyTDAgMTYweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjI0IDQ4Yy0zNS4zIDAtNjQgMjguNy02NCA2NGwwIDEyMCAwIDI0LTQ4IDAgMC0yNCAwLTEyMEMxMTIgNTAuMSAxNjIuMSAwIDIyNCAwczExMiA1MC4xIDExMiAxMTJsMCAxMjAgMCAyNC00OCAwIDAtMjQgMC0xMjBjMC0zNS4zLTI4LjctNjQtNjQtNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const BagShopping: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 160L0 512l448 0 0-352-112 0 0 72 0 24-48 0 0-24 0-72-128 0 0 72 0 24-48 0 0-24 0-72L0 160z" />
            <path d="M224 48c-35.3 0-64 28.7-64 64l0 120 0 24-48 0 0-24 0-120C112 50.1 162.1 0 224 0s112 50.1 112 112l0 120 0 24-48 0 0-24 0-120c0-35.3-28.7-64-64-64z" />
    </Icon>
);

export default BagShopping;
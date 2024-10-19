
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cassette-betamax` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cassette-betamax?s=sharp-duotone-solid cassette-betamax}
 * @preview ![cassette-betamax](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MGw1NzYgMCAwIDMyMEwwIDQ4MCAwIDE2MHpNNjQgMzIwYTk2IDk2IDAgMSAwIDE5MiAwQTk2IDk2IDAgMSAwIDY0IDMyMHptMjU2LTk2bDAgMTkyIDE5MiAwIDAtMTkyLTE5MiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNTc2IDMyTDAgMzIgMCAxNjBsNTc2IDAgMC0xMjh6TTE5MiAzMjBhMzIgMzIgMCAxIDEgLTY0IDAgMzIgMzIgMCAxIDEgNjQgMHptLTMyLTk2YTk2IDk2IDAgMSAwIDAgMTkyIDk2IDk2IDAgMSAwIDAtMTkyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CassetteBetamax: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 160l576 0 0 320L0 480 0 160zM64 320a96 96 0 1 0 192 0A96 96 0 1 0 64 320zm256-96l0 192 192 0 0-192-192 0z" />
            <path d="M576 32L0 32 0 160l576 0 0-128zM192 320a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm-32-96a96 96 0 1 0 0 192 96 96 0 1 0 0-192z" />
    </Icon>
);

export default CassetteBetamax;
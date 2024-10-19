
import { Icon, generic } from "../../index";

/**
 * A component that renders the `franc-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/franc-sign?s=sharp-duotone-solid franc-sign}
 * @preview ![franc-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyMGwwIDY0IDQ4IDAgMC02NEwwIDMyMHptMTEyIDBsMCA2NCAxMTIgMCAwLTY0LTExMiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNODAgMzJMNDggMzJsMCAzMiAwIDEyOCAwIDY0IDAgMTkyIDAgMzIgNjQgMCAwLTMyIDAtMTkyIDE3NiAwIDAtNjQtMTc2IDAgMC05NiAxNzYgMCAzMiAwIDAtNjQtMzIgMEw4MCAzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const FrancSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 320l0 64 48 0 0-64L0 320zm112 0l0 64 112 0 0-64-112 0z" />
            <path d="M80 32L48 32l0 32 0 128 0 64 0 192 0 32 64 0 0-32 0-192 176 0 0-64-176 0 0-96 176 0 32 0 0-64-32 0L80 32z" />
    </Icon>
);

export default FrancSign;
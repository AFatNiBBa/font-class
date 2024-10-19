
import { Icon, generic } from "../../index";

/**
 * A component that renders the `phone-arrow-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-arrow-right?s=sharp-duotone-solid phone-arrow-right}
 * @preview ![phone-arrow-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDE0NCAwbDgwIDE0NC04My44IDY3YzM2LjEgNjguNCA5Mi4zIDEyNC42IDE2MC44IDE2MC44TDM2OCAyODhsMTQ0IDgwTDQ4MCA1MTJsLTMyIDBDMjAwLjYgNTEyIDAgMzExLjQgMCA2NEwwIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzk2LjggNi4xbDE3IDE3IDgwIDgwIDE3IDE3LTE3IDE3LTgwIDgwLTE3IDE3TDM2Mi45IDIwMGwxNy0xNyAzOS0zOUwzMTIgMTQ0bC0yNCAwIDAtNDggMjQgMCAxMDYuOSAwLTM5LTM5LTE3LTE3TDM5Ni44IDYuMXoiLz48L3N2Zz4=|width=32|height=32)
 */
const PhoneArrowRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L144 0l80 144-83.8 67c36.1 68.4 92.3 124.6 160.8 160.8L368 288l144 80L480 512l-32 0C200.6 512 0 311.4 0 64L0 32z" />
            <path d="M396.8 6.1l17 17 80 80 17 17-17 17-80 80-17 17L362.9 200l17-17 39-39L312 144l-24 0 0-48 24 0 106.9 0-39-39-17-17L396.8 6.1z" />
    </Icon>
);

export default PhoneArrowRight;
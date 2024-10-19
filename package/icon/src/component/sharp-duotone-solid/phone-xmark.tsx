
import { Icon, generic } from "../../index";

/**
 * A component that renders the `phone-xmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-xmark?s=sharp-duotone-solid phone-xmark}
 * @preview ![phone-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAzMkwxNzYgMGw4MCAxNDQtODMuOCA2N2MzNi4xIDY4LjQgOTIuMyAxMjQuNiAxNjAuOCAxNjAuOEw0MDAgMjg4bDE0NCA4MEw1MTIgNTEybC0zMiAwQzIzMi42IDUxMiAzMiAzMTEuNCAzMiA2NGwwLTMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNTI5IDQ5bDE3LTE3TDUxMi0xLjkgNDk1IDE1bC00NyA0N0w0MDEgMTVsLTE3LTE3TDM1MC4xIDMybDE3IDE3IDQ3IDQ3LTQ3IDQ3LTE3IDE3TDM4NCAxOTMuOWwxNy0xNyA0Ny00NyA0NyA0NyAxNyAxN0w1NDUuOSAxNjBsLTE3LTE3LTQ3LTQ3IDQ3LTQ3eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const PhoneXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 32L176 0l80 144-83.8 67c36.1 68.4 92.3 124.6 160.8 160.8L400 288l144 80L512 512l-32 0C232.6 512 32 311.4 32 64l0-32z" />
            <path d="M529 49l17-17L512-1.9 495 15l-47 47L401 15l-17-17L350.1 32l17 17 47 47-47 47-17 17L384 193.9l17-17 47-47 47 47 17 17L545.9 160l-17-17-47-47 47-47z" />
    </Icon>
);

export default PhoneXmark;
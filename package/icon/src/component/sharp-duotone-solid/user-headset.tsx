
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-headset` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-headset?s=sharp-duotone-solid user-headset}
 * @preview ![user-headset](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAxOTJjMC03MC43IDU3LjMtMTI4IDEyOC0xMjhzMTI4IDU3LjMgMTI4IDEyOGMwIDIzLjMtNi4yIDQ1LjItMTcuMSA2NEwzMDQgMjU2bDAtMzItMzIgMC05NiAwLTMyIDAgMCAzMiAwIDM1LjljLTI5LjMtMjMuNS00OC01OS41LTQ4LTk5Ljl6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMjQgMzJDMTM1LjYgMzIgNjQgMTAzLjYgNjQgMTkybDAgMzItMzIgMCAwLTMyQzMyIDg2IDExOCAwIDIyNCAwUzQxNiA4NiA0MTYgMTkybDAgMTEyIDAgMTYtMTYgMC0xMjggMC00OCAwLTQ4IDAgMC02NCA5NiAwIDAgMzIgMTEyIDAgMC05NmMwLTg4LjQtNzEuNi0xNjAtMTYwLTE2MHpNNDQ4IDUxMkwwIDUxMiA0OCAzNTJsMzUyIDAgNDggMTYweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const UserHeadset: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 192c0-70.7 57.3-128 128-128s128 57.3 128 128c0 23.3-6.2 45.2-17.1 64L304 256l0-32-32 0-96 0-32 0 0 32 0 35.9c-29.3-23.5-48-59.5-48-99.9z" />
            <path d="M224 32C135.6 32 64 103.6 64 192l0 32-32 0 0-32C32 86 118 0 224 0S416 86 416 192l0 112 0 16-16 0-128 0-48 0-48 0 0-64 96 0 0 32 112 0 0-96c0-88.4-71.6-160-160-160zM448 512L0 512 48 352l352 0 48 160z" />
    </Icon>
);

export default UserHeadset;
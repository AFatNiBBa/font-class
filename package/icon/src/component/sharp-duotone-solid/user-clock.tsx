
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-clock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-clock?s=sharp-duotone-solid user-clock}
 * @preview ![user-clock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDUxMmwzOTQuOCAwQzM0OS41IDQ4MC4xIDMyMCA0MjcuNSAzMjAgMzY4YzAtMjIuNiA0LjMtNDQuMiAxMi02NEw2NCAzMDQgMCA1MTJ6TTk2IDEyOGExMjggMTI4IDAgMSAwIDI1NiAwQTEyOCAxMjggMCAxIDAgOTYgMTI4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDk2IDUxMmExNDQgMTQ0IDAgMSAwIDAtMjg4IDE0NCAxNDQgMCAxIDAgMCAyODh6bTE2LTIwOGwwIDQ4IDMyIDAgMTYgMCAwIDMyLTE2IDAtNDggMC0xNiAwIDAtMTYgMC02NCAwLTE2IDMyIDAgMCAxNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const UserClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 512l394.8 0C349.5 480.1 320 427.5 320 368c0-22.6 4.3-44.2 12-64L64 304 0 512zM96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128z" />
            <path d="M496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm16-208l0 48 32 0 16 0 0 32-16 0-48 0-16 0 0-16 0-64 0-16 32 0 0 16z" />
    </Icon>
);

export default UserClock;
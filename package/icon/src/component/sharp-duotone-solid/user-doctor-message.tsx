
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-doctor-message` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-doctor-message?s=sharp-duotone-solid user-doctor-message}
 * @preview ![user-doctor-message](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDUxMmw0NDggMEwzODQgMzA0bC02NCAwIDAgNThjMjcuNiA3LjEgNDggMzIuMiA0OCA2MmwwIDQwIDAgMTYtMTYgMC0xNiAwLTE2IDAgMC0zMiAxNiAwIDAtMjRjMC0xNy43LTE0LjMtMzItMzItMzJzLTMyIDE0LjMtMzIgMzJsMCAyNCAxNiAwIDAgMzItMTYgMC0xNiAwLTE2IDAgMC0xNiAwLTQwYzAtMjkuOCAyMC40LTU0LjkgNDgtNjJsMC01OC0xMjggMCAwIDY2LjNjMjMuMSA2LjkgNDAgMjguMyA0MCA1My43YzAgMzAuOS0yNS4xIDU2LTU2IDU2cy01Ni0yNS4xLTU2LTU2YzAtMjUuNCAxNi45LTQ2LjggNDAtNTMuN2wwLTY2LjMtNjQgMEwwIDUxMnpNOTYgMTI4YTEyOCAxMjggMCAxIDAgMjU2IDBBMTI4IDEyOCAwIDEgMCA5NiAxMjh6bTI0IDI5NmEyNCAyNCAwIDEgMCA0OCAwIDI0IDI0IDAgMSAwIC00OCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQwIDBMMzg0IDBsMCAyMjQgNjQgMCAwIDY0IDk2LTY0IDk2IDBMNjQwIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const UserDoctorMessage: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 512l448 0L384 304l-64 0 0 58c27.6 7.1 48 32.2 48 62l0 40 0 16-16 0-16 0-16 0 0-32 16 0 0-24c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 24 16 0 0 32-16 0-16 0-16 0 0-16 0-40c0-29.8 20.4-54.9 48-62l0-58-128 0 0 66.3c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7l0-66.3-64 0L0 512zM96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm24 296a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
            <path d="M640 0L384 0l0 224 64 0 0 64 96-64 96 0L640 0z" />
    </Icon>
);

export default UserDoctorMessage;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-doctor` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-doctor?s=sharp-duotone-solid user-doctor}
 * @preview ![user-doctor](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zNTIgMTI4QTEyOCAxMjggMCAxIDEgOTYgMTI4YTEyOCAxMjggMCAxIDEgMjU2IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNjAgMzA0bDAgNjYuM2MyMy4xIDYuOSA0MCAyOC4zIDQwIDUzLjdjMCAzMC45LTI1LjEgNTYtNTYgNTZzLTU2LTI1LjEtNTYtNTZjMC0yNS40IDE2LjktNDYuOCA0MC01My43bDAtNjYuMy02NCAwTDAgNTEybDQ0OCAwTDM4NCAzMDRsLTY0IDAgMCA1OGMyNy42IDcuMSA0OCAzMi4yIDQ4IDYybDAgNDAgMCAxNi0xNiAwLTE2IDAtMTYgMCAwLTMyIDE2IDAgMC0yNGMwLTE3LjctMTQuMy0zMi0zMi0zMnMtMzIgMTQuMy0zMiAzMmwwIDI0IDE2IDAgMCAzMi0xNiAwLTE2IDAtMTYgMCAwLTE2IDAtNDBjMC0yOS44IDIwLjQtNTQuOSA0OC02MmwwLTU4LTEyOCAwek0xNDQgNDQ4YTI0IDI0IDAgMSAwIDAtNDggMjQgMjQgMCAxIDAgMCA0OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const UserDoctor: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M352 128A128 128 0 1 1 96 128a128 128 0 1 1 256 0z" />
            <path d="M160 304l0 66.3c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7l0-66.3-64 0L0 512l448 0L384 304l-64 0 0 58c27.6 7.1 48 32.2 48 62l0 40 0 16-16 0-16 0-16 0 0-32 16 0 0-24c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 24 16 0 0 32-16 0-16 0-16 0 0-16 0-40c0-29.8 20.4-54.9 48-62l0-58-128 0zM144 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default UserDoctor;
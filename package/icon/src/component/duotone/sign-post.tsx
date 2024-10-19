
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sign-post` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-post?s=duotone sign-post}
 * @preview ![sign-post](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMjQgMzJjMC0xNy43IDE0LjMtMzIgMzItMzJzMzIgMTQuMyAzMiAzMmwwIDMyLTY0IDAgMC0zMnptMCAyMjRsNjQgMCAwIDIyNGMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMmwwLTIyNHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ0MS42IDc1LjVsNjEuOSA3NC4yYzQuOSA1LjkgNC45IDE0LjYgMCAyMC41bC02MS45IDc0LjJjLTYuMSA3LjMtMTUuMSAxMS41LTI0LjYgMTEuNUg2NGMtMTcuNyAwLTMyLTE0LjMtMzItMzJWOTZjMC0xNy43IDE0LjMtMzIgMzItMzJINDE3YzkuNSAwIDE4LjUgNC4yIDI0LjYgMTEuNXoiLz48L3N2Zz4=|width=32|height=32)
 */
const SignPost: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32-64 0 0-32zm0 224l64 0 0 224c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-224z" />
            <path d="M441.6 75.5l61.9 74.2c4.9 5.9 4.9 14.6 0 20.5l-61.9 74.2c-6.1 7.3-15.1 11.5-24.6 11.5H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32H417c9.5 0 18.5 4.2 24.6 11.5z" />
    </Icon>
);

export default SignPost;
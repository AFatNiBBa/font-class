
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-unlock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-unlock?s=sharp-duotone-solid user-unlock}
 * @preview ![user-unlock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDUxMmwzODQgMCAwLTIwOEw2NCAzMDQgMCA1MTJ6TTk2IDEyOGExMjggMTI4IDAgMSAwIDI1NiAwQTEyOCAxMjggMCAxIDAgOTYgMTI4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNTI4IDI0MGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJsMCA0OCAxNiAwIDQ4IDAgNDggMCAzMiAwIDAgMTkyLTIyNCAwIDAtMTkyIDMyIDAgMC00OGMwLTQ0LjIgMzUuOC04MCA4MC04MHM4MCAzNS44IDgwIDgwbC00OCAwYzAtMTcuNy0xNC4zLTMyLTMyLTMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const UserUnlock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 512l384 0 0-208L64 304 0 512zM96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128z" />
            <path d="M528 240c-17.7 0-32 14.3-32 32l0 48 16 0 48 0 48 0 32 0 0 192-224 0 0-192 32 0 0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l-48 0c0-17.7-14.3-32-32-32z" />
    </Icon>
);

export default UserUnlock;
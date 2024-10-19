
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-user` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-user?s=sharp-duotone-solid circle-user}
 * @preview ![circle-user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTEyMC4xIDM5MS42TDE0NCAzMjBsMjI0IDAgMjMuOSA3MS42QzM1Ny4xIDQyNi41IDMwOS4xIDQ0OCAyNTYgNDQ4cy0xMDEuMS0yMS41LTEzNS45LTU2LjR6TTMyOCAyMDBhNzIgNzIgMCAxIDEgLTE0NCAwIDcyIDcyIDAgMSAxIDE0NCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU2IDQ0OGM1My4xIDAgMTAxLjEtMjEuNSAxMzUuOS01Ni40TDM2OCAzMjBsLTIyNCAwLTIzLjkgNzEuNkMxNTQuOSA0MjYuNSAyMDIuOSA0NDggMjU2IDQ0OHptMC0xNzZhNzIgNzIgMCAxIDAgMC0xNDQgNzIgNzIgMCAxIDAgMCAxNDR6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleUser: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM120.1 391.6L144 320l224 0 23.9 71.6C357.1 426.5 309.1 448 256 448s-101.1-21.5-135.9-56.4zM328 200a72 72 0 1 1 -144 0 72 72 0 1 1 144 0z" />
            <path d="M256 448c53.1 0 101.1-21.5 135.9-56.4L368 320l-224 0-23.9 71.6C154.9 426.5 202.9 448 256 448zm0-176a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
    </Icon>
);

export default CircleUser;
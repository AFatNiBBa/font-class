
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-shield` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-shield?s=sharp-duotone-solid user-shield}
 * @preview ![user-shield](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDUxMmw0MjYuMSAwYy02OS4zLTQ5LjUtMTAzLjctMTMzLjMtMTA2LTIwOEw2NCAzMDQgMCA1MTJ6TTk2IDEyOGExMjggMTI4IDAgMSAwIDI1NiAwQTEyOCAxMjggMCAxIDAgOTYgMTI4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDk2IDI3NS41bDAgMTg0LjljNTYuNS0yNi4zIDkwLjItODcgOTUuMy0xNDhMNDk2IDI3NS41ek02NDAgMjk2YzAgODUuOC00OCAxODQtMTQ0IDIxNmMtOTYtMzItMTQ0LTEzMC4yLTE0NC0yMTZsMC0xNi4yTDQ5NiAyMjRsMTQ0IDU1LjggMCAxNi4yeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const UserShield: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 512l426.1 0c-69.3-49.5-103.7-133.3-106-208L64 304 0 512zM96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128z" />
            <path d="M496 275.5l0 184.9c56.5-26.3 90.2-87 95.3-148L496 275.5zM640 296c0 85.8-48 184-144 216c-96-32-144-130.2-144-216l0-16.2L496 224l144 55.8 0 16.2z" />
    </Icon>
);

export default UserShield;
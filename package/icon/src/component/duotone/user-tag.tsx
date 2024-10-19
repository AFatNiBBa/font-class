
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-tag` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-tag?s=duotone user-tag}
 * @preview ![user-tag](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ4Mi4zQzAgMzgzLjggNzkuOCAzMDQgMTc4LjMgMzA0bDkxLjQgMGMxNy41IDAgMzQuMyAyLjUgNTAuMyA3LjJsMCAzM2MwIDIxLjEgOC40IDQxLjIgMjMuMyA1Ni4xbDk5LjIgOTkuMmMtNS40IDcuNS0xNC4yIDEyLjUtMjQuMiAxMi41TDI5LjcgNTEyQzEzLjMgNTEyIDAgNDk4LjcgMCA0ODIuM3pNMzUyIDEyOEExMjggMTI4IDAgMSAxIDk2IDEyOGExMjggMTI4IDAgMSAxIDI1NiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzUyIDI1NmMwLTE3LjcgMTQuMy0zMiAzMi0zMmw4Mi43IDBjMTcgMCAzMy4zIDYuNyA0NS4zIDE4LjdMNjE5LjMgMzUwLjFjMTguNyAxOC43IDE4LjcgNDkuMSAwIDY3LjlsLTczLjQgNzMuNGMtMTguNyAxOC43LTQ5LjEgMTguNy02Ny45IDBMMzcwLjcgMzg0Yy0xMi0xMi0xOC43LTI4LjMtMTguNy00NS4zbDAtODIuN3ptODAgNzJhMjQgMjQgMCAxIDAgMC00OCAyNCAyNCAwIDEgMCAwIDQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const UserTag: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 482.3C0 383.8 79.8 304 178.3 304l91.4 0c17.5 0 34.3 2.5 50.3 7.2l0 33c0 21.1 8.4 41.2 23.3 56.1l99.2 99.2c-5.4 7.5-14.2 12.5-24.2 12.5L29.7 512C13.3 512 0 498.7 0 482.3zM352 128A128 128 0 1 1 96 128a128 128 0 1 1 256 0z" />
            <path d="M352 256c0-17.7 14.3-32 32-32l82.7 0c17 0 33.3 6.7 45.3 18.7L619.3 350.1c18.7 18.7 18.7 49.1 0 67.9l-73.4 73.4c-18.7 18.7-49.1 18.7-67.9 0L370.7 384c-12-12-18.7-28.3-18.7-45.3l0-82.7zm80 72a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default UserTag;
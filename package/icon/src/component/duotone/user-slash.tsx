
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-slash?s=duotone user-slash}
 * @preview ![user-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiA0ODIuM2MwIDE2LjQgMTMuMyAyOS43IDI5LjcgMjkuN2wzODguNiAwYzMuOSAwIDcuNi0uNyAxMS0yLjFsLTI2MS0yMDUuNkMxNzAuNSAzMDkuNCA5NiAzODcuMiA5NiA0ODIuM3ptOTYtMzU3LjFjNTMuOCA0Mi4xIDEwNy41IDg0LjMgMTYxLjMgMTI2LjRDNDA3LjkgMjM3IDQ0OCAxODcuMiA0NDggMTI4QzQ0OCA1Ny4zIDM5MC43IDAgMzIwIDBDMjUwLjIgMCAxOTMuNSA1NS44IDE5MiAxMjUuMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTUuMSA5LjJDMTMuMy0xLjIgMjguNC0zLjEgMzguOCA1LjFsNTkyIDQ2NGMxMC40IDguMiAxMi4zIDIzLjMgNC4xIDMzLjdzLTIzLjMgMTIuMy0zMy43IDQuMUw5LjIgNDIuOUMtMS4yIDM0LjctMy4xIDE5LjYgNS4xIDkuMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const UserSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 482.3c0 16.4 13.3 29.7 29.7 29.7l388.6 0c3.9 0 7.6-.7 11-2.1l-261-205.6C170.5 309.4 96 387.2 96 482.3zm96-357.1c53.8 42.1 107.5 84.3 161.3 126.4C407.9 237 448 187.2 448 128C448 57.3 390.7 0 320 0C250.2 0 193.5 55.8 192 125.2z" />
            <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default UserSlash;
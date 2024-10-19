
import { Icon, generic } from "../../index";

/**
 * A component that renders the `users` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/users?s=sharp-duotone-solid users}
 * @preview ![users](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyMEw0OCAxOTJsMTQ4IDBjLTIuNiAxMC4yLTQgMjEtNCAzMmMwIDM4LjIgMTYuOCA3Mi41IDQzLjMgOTZMMCAzMjB6TTIyNCA4MEE4MCA4MCAwIDEgMSA2NCA4MGE4MCA4MCAwIDEgMSAxNjAgMHpNNDA0LjcgMzIwYzI2LjYtMjMuNSA0My4zLTU3LjggNDMuMy05NmMwLTExLTEuNC0yMS44LTQtMzJsMTQ4IDAgNDggMTI4LTIzNS4zIDB6TTU5MiA4MEE4MCA4MCAwIDEgMSA0MzIgODBhODAgODAgMCAxIDEgMTYwIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMjAgMzIwYTk2IDk2IDAgMSAwIDAtMTkyIDk2IDk2IDAgMSAwIDAgMTkyek01MTIgNTEyTDQ2NCAzNTJsLTI4OCAwTDEyOCA1MTJsMzg0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Users: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 320L48 192l148 0c-2.6 10.2-4 21-4 32c0 38.2 16.8 72.5 43.3 96L0 320zM224 80A80 80 0 1 1 64 80a80 80 0 1 1 160 0zM404.7 320c26.6-23.5 43.3-57.8 43.3-96c0-11-1.4-21.8-4-32l148 0 48 128-235.3 0zM592 80A80 80 0 1 1 432 80a80 80 0 1 1 160 0z" />
            <path d="M320 320a96 96 0 1 0 0-192 96 96 0 1 0 0 192zM512 512L464 352l-288 0L128 512l384 0z" />
    </Icon>
);

export default Users;
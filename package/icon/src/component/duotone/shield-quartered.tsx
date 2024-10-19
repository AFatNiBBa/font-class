
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shield-quartered` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-quartered?s=duotone shield-quartered}
 * @preview ![shield-quartered](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNiAxNDBjLjEgMjQgMi42IDUyLjkgOC43IDg0TDI1NiAyMjRjMC03NC43IDAtMTQ5LjMgMC0yMjRjLS4yIDAtLjUgMC0uNyAwYy00LjQgLjEtOC43IDEuMS0xMi42IDIuOUw1NC4zIDgyLjhjLTIyIDkuMy0zOC40IDMxLTM4LjMgNTcuMnptMjQwLjcgODRjMCA5NS4xIDAgMTkwLjEgMCAyODUuMWM5IDAgMTguMS0yIDI2LjQtNkM0MTMuNyA0NDAuNyA0NjguOCAzMjEuMyA0ODggMjI0bC0yMzEuMyAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU2LjQgMGwuMyAwYzQuNiAwIDkuMiAxIDEzLjQgMi45TDQ1OC40IDgyLjhjMjIgOS4zIDM4LjQgMzEgMzguMyA1Ny4yYy0uMSAyNC0yLjYgNTIuOS04LjcgODRsLTIzMS4zIDAgMC0yMjRMMjU2IDBzMCAwIDAgMGwtLjcgMCAuNyAwIC4zIDB6TTIyOS42IDUwMy4yQzk5IDQ0MC43IDQ0IDMyMS4zIDI0LjcgMjI0TDI1NiAyMjRsMCAyODUuMWMtOSAwLTE4LjEtMi0yNi40LTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const ShieldQuartered: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16 140c.1 24 2.6 52.9 8.7 84L256 224c0-74.7 0-149.3 0-224c-.2 0-.5 0-.7 0c-4.4 .1-8.7 1.1-12.6 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2zm240.7 84c0 95.1 0 190.1 0 285.1c9 0 18.1-2 26.4-6C413.7 440.7 468.8 321.3 488 224l-231.3 0z" />
            <path d="M256.4 0l.3 0c4.6 0 9.2 1 13.4 2.9L458.4 82.8c22 9.3 38.4 31 38.3 57.2c-.1 24-2.6 52.9-8.7 84l-231.3 0 0-224L256 0s0 0 0 0l-.7 0 .7 0 .3 0zM229.6 503.2C99 440.7 44 321.3 24.7 224L256 224l0 285.1c-9 0-18.1-2-26.4-6z" />
    </Icon>
);

export default ShieldQuartered;
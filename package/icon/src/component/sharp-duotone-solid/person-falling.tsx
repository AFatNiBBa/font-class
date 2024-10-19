
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-falling` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-falling?s=sharp-duotone-solid person-falling}
 * @preview ![person-falling](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA4MGE0OCA0OCAwIDEgMCA5NiAwQTQ4IDQ4IDAgMSAwIDY0IDgweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzIwIDMybDAtMzJMMjU2IDBsMCAzMiAwIDc2LjJMMTEzLjcgMTc5LjQgOTYgMTg4LjIgOTYgMjA4bDAgMTQ0IDAgMzIgNjQgMCAwLTMyIDAtMTA5LjhMMzE3LjEgNDg0LjlsMTcuNCAyNi45TDM4OC4yIDQ3N2wtMTcuNC0yNi45TDI4Ni42IDMyMGwxLjQgMCA5NiAwIDM4LjQgNTEuMiAxOS4yIDI1LjYgNTEuMi0zOC40LTE5LjItMjUuNi00OC02NEw0MTYgMjU2bC0xNiAwLTk1LjUgMEwyNTIgMTgxLjhsNTAuMy0yNS4yIDE3LjctOC44IDAtMTkuOCAwLTk2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const PersonFalling: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 80a48 48 0 1 0 96 0A48 48 0 1 0 64 80z" />
            <path d="M320 32l0-32L256 0l0 32 0 76.2L113.7 179.4 96 188.2 96 208l0 144 0 32 64 0 0-32 0-109.8L317.1 484.9l17.4 26.9L388.2 477l-17.4-26.9L286.6 320l1.4 0 96 0 38.4 51.2 19.2 25.6 51.2-38.4-19.2-25.6-48-64L416 256l-16 0-95.5 0L252 181.8l50.3-25.2 17.7-8.8 0-19.8 0-96z" />
    </Icon>
);

export default PersonFalling;
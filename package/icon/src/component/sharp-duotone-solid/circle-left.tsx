
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-left?s=sharp-duotone-solid circle-left}
 * @preview ![circle-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTk2IDBMMjI0IDEyOGwzMiAwIDAgODAgMTI4IDAgMCA5Ni0xMjggMCAwIDgwLTMyIDBMOTYgMjU2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU2IDIwOGwwLTgwLTMyIDBMOTYgMjU2IDIyNCAzODRsMzIgMCAwLTgwIDEyOCAwIDAtOTYtMTI4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm96 0L224 128l32 0 0 80 128 0 0 96-128 0 0 80-32 0L96 256z" />
            <path d="M256 208l0-80-32 0L96 256 224 384l32 0 0-80 128 0 0-96-128 0z" />
    </Icon>
);

export default CircleLeft;
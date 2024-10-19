
import { Icon, generic } from "../../index";

/**
 * A component that renders the `magnet` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnet?s=duotone magnet}
 * @preview ![magnet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0bDAgOTYgMTI4IDAgMC05NmMwLTE3LjctMTQuMy0zMi0zMi0zMkwzMiAzMkMxNC4zIDMyIDAgNDYuMyAwIDY0em0zMjAgMGwwIDk2IDEyOCAwIDAtOTZjMC0xNy43LTE0LjMtMzItMzItMzJsLTY0IDBjLTE3LjcgMC0zMiAxNC4zLTMyIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAxNjBsMCA5NkMwIDM3OS43IDEwMC4zIDQ4MCAyMjQgNDgwczIyNC0xMDAuMyAyMjQtMjI0bDAtOTYtMTI4IDAgMCA5NmMwIDUzLTQzIDk2LTk2IDk2cy05Ni00My05Ni05NmwwLTk2TDAgMTYweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Magnet: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 64l0 96 128 0 0-96c0-17.7-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64zm320 0l0 96 128 0 0-96c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32z" />
            <path d="M0 160l0 96C0 379.7 100.3 480 224 480s224-100.3 224-224l0-96-128 0 0 96c0 53-43 96-96 96s-96-43-96-96l0-96L0 160z" />
    </Icon>
);

export default Magnet;
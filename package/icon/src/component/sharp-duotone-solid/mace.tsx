
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mace` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mace?s=sharp-duotone-solid mace}
 * @preview ![mace](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yLjcgNDY0TDQ4IDUwOS4zbDIyLjYtMjIuNkwyMTcuMSAzNDAuMWMtMTguNC0xMS4zLTM0LTI2LjgtNDUuMy00NS4zTDI1LjQgNDQxLjQgMi43IDQ2NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMyOC4zIDk0LjFjNDIuNyAxMy4yIDc2LjQgNDYuOSA4OS42IDg5LjZMNTEyIDIyNGwtOTQuMSA0MC4zYy0xMy4yIDQyLjctNDYuOSA3Ni40LTg5LjYgODkuNkwyODggNDQ4bC00MC4zLTk0LjFjLTQyLjctMTMuMi03Ni40LTQ2LjktODkuNi04OS42TDY0IDIyNGw5NC4xLTQwLjNjMTMuMi00Mi43IDQ2LjktNzYuNCA4OS42LTg5LjZMMjg4IDBsNDAuMyA5NC4xek0yODggMjU2YTMyIDMyIDAgMSAwIDAtNjQgMzIgMzIgMCAxIDAgMCA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Mace: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M2.7 464L48 509.3l22.6-22.6L217.1 340.1c-18.4-11.3-34-26.8-45.3-45.3L25.4 441.4 2.7 464z" />
            <path d="M328.3 94.1c42.7 13.2 76.4 46.9 89.6 89.6L512 224l-94.1 40.3c-13.2 42.7-46.9 76.4-89.6 89.6L288 448l-40.3-94.1c-42.7-13.2-76.4-46.9-89.6-89.6L64 224l94.1-40.3c13.2-42.7 46.9-76.4 89.6-89.6L288 0l40.3 94.1zM288 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Mace;
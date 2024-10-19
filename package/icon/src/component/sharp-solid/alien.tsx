
import { Icon } from "../../index";

/**
 * A component that renders the `alien` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alien?s=sharp-solid alien}
 * @preview ![alien](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjI0IDBDMTAwLjMgMCAwIDEwMC4zIDAgMjI0QzAgNDAwIDIyNCA1MTIgMjI0IDUxMnMyMjQtMTEyIDIyNC0yODhDNDQ4IDEwMC4zIDM0Ny43IDAgMjI0IDB6bTMyIDMwNGMwLTQ0LjIgMzUuOC04MCA4MC04MGw0OCAwIDAgMTZjMCA0NC4yLTM1LjggODAtODAgODBsLTQ4IDAgMC0xNnpNMTEyIDIyNGM0NC4yIDAgODAgMzUuOCA4MCA4MGwwIDE2LTQ4IDBjLTQ0LjIgMC04MC0zNS44LTgwLTgwbDAtMTYgNDggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Alien: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 0C100.3 0 0 100.3 0 224C0 400 224 512 224 512s224-112 224-288C448 100.3 347.7 0 224 0zm32 304c0-44.2 35.8-80 80-80l48 0 0 16c0 44.2-35.8 80-80 80l-48 0 0-16zM112 224c44.2 0 80 35.8 80 80l0 16-48 0c-44.2 0-80-35.8-80-80l0-16 48 0z" />
    </Icon>
);

export default Alien;
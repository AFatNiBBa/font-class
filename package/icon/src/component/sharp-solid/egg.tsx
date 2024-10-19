
import { Icon } from "../../index";

/**
 * A component that renders the `egg` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/egg?s=sharp-solid egg}
 * @preview ![egg](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTkyIDQ5NkM4NiA0OTYgMCAzOTQgMCAyODhDMCAxNzYgNjQgMTYgMTkyIDE2czE5MiAxNjAgMTkyIDI3MmMwIDEwNi04NiAyMDgtMTkyIDIwOHpNOTYgMjg4YzAtMjQuNSA1LTU0LjQgMTUuMS04Mi44YzEwLjEtMjguNSAyNS01NC4xIDQzLjctNzEuMmwtMjEuNi0yMy42Yy0yMy45IDIxLjgtNDEuMSA1Mi43LTUyLjMgODQuMkM2OS43IDIyNi4xIDY0IDI1OS43IDY0IDI4OGwwIDE2IDMyIDAgMC0xNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Egg: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 496C86 496 0 394 0 288C0 176 64 16 192 16s192 160 192 272c0 106-86 208-192 208zM96 288c0-24.5 5-54.4 15.1-82.8c10.1-28.5 25-54.1 43.7-71.2l-21.6-23.6c-23.9 21.8-41.1 52.7-52.3 84.2C69.7 226.1 64 259.7 64 288l0 16 32 0 0-16z" />
    </Icon>
);

export default Egg;
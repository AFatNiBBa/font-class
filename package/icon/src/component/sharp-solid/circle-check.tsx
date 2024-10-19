
import { Icon } from "../../index";

/**
 * A component that renders the `circle-check` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-check?s=sharp-solid circle-check}
 * @preview ![circle-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDUxMkEyNTYgMjU2IDAgMSAwIDI1NiAwYTI1NiAyNTYgMCAxIDAgMCA1MTJ6TTM2OSAyMDlMMjQxIDMzN2wtMTcgMTctMTctMTctNjQtNjQtMTctMTdMMTYwIDIyMi4xbDE3IDE3IDQ3IDQ3TDMzNSAxNzVsMTctMTdMMzg1LjkgMTkybC0xNyAxN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337l-17 17-17-17-64-64-17-17L160 222.1l17 17 47 47L335 175l17-17L385.9 192l-17 17z" />
    </Icon>
);

export default CircleCheck;
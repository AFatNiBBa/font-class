
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-left?s=sharp-regular chevron-left}
 * @preview ![chevron-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNLTEuOSAyNTZsMTctMTdMMjA3IDQ3bDE3LTE3TDI1Ny45IDY0IDI0MSA4MSA2NS45IDI1NiAyNDEgNDMxbDE3IDE3TDIyNCA0ODEuOWwtMTctMTdMMTUgMjczbC0xNy0xN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const ChevronLeft: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M-1.9 256l17-17L207 47l17-17L257.9 64 241 81 65.9 256 241 431l17 17L224 481.9l-17-17L15 273l-17-17z" />
    </Icon>
);

export default ChevronLeft;
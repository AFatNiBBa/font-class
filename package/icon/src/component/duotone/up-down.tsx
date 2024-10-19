
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-down?s=duotone up-down}
 * @preview ![up-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yIDM2Ni40Yy0zLjggOC43LTIuMSAxOC45IDQuNCAyNS45bDEwNCAxMTJjNC41IDQuOSAxMC45IDcuNyAxNy42IDcuN3MxMy0yLjggMTcuNi03LjdsMTA0LTExMmM2LjUtNyA4LjItMTcuMiA0LjQtMjUuOXMtMTIuNS0xNC40LTIyLTE0LjRsLTU2IDAgMC05Ni05NiAwIDAgOTYtNTYgMGMtOS41IDAtMTguMiA1LjctMjIgMTQuNHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTEyOCAwYzYuNyAwIDEzIDIuOCAxNy42IDcuN2wxMDQgMTEyYzYuNSA3IDguMiAxNy4yIDQuNCAyNS45cy0xMi41IDE0LjQtMjIgMTQuNGwtNTYgMCAwIDk2LTk2IDAgMC05Ni01NiAwYy05LjUgMC0xOC4yLTUuNy0yMi0xNC40cy0yLjEtMTguOSA0LjQtMjUuOWwxMDQtMTEyQzExNSAyLjggMTIxLjMgMCAxMjggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const UpDown: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M2 366.4c-3.8 8.7-2.1 18.9 4.4 25.9l104 112c4.5 4.9 10.9 7.7 17.6 7.7s13-2.8 17.6-7.7l104-112c6.5-7 8.2-17.2 4.4-25.9s-12.5-14.4-22-14.4l-56 0 0-96-96 0 0 96-56 0c-9.5 0-18.2 5.7-22 14.4z" />
            <path d="M128 0c6.7 0 13 2.8 17.6 7.7l104 112c6.5 7 8.2 17.2 4.4 25.9s-12.5 14.4-22 14.4l-56 0 0 96-96 0 0-96-56 0c-9.5 0-18.2-5.7-22-14.4s-2.1-18.9 4.4-25.9l104-112C115 2.8 121.3 0 128 0z" />
    </Icon>
);

export default UpDown;
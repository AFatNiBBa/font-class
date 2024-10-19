
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-phone-flip` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-phone-flip?s=sharp-duotone-solid circle-phone-flip}
 * @preview ![circle-phone-flip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTEyOCA1Nmw3Mi00MCAzMy41IDQxLjljMzQuMi0xOC4xIDYyLjMtNDYuMiA4MC40LTgwLjRMMjcyIDIwMGw0MC03MiA3MiAxNiAwIDE2YzAgMTIzLjctMTAwLjMgMjI0LTIyNCAyMjRsLTE2IDAtMTYtNzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zODQgMTQ0bC03Mi0xNi00MCA3MiA0MS45IDMzLjVjLTE4LjEgMzQuMi00Ni4yIDYyLjMtODAuNCA4MC40TDIwMCAyNzJsLTcyIDQwIDE2IDcyaDE2YzEyMy43IDAgMjI0LTEwMC4zIDIyNC0yMjRsMC0xNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const CirclePhoneFlip: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128 56l72-40 33.5 41.9c34.2-18.1 62.3-46.2 80.4-80.4L272 200l40-72 72 16 0 16c0 123.7-100.3 224-224 224l-16 0-16-72z" />
            <path d="M384 144l-72-16-40 72 41.9 33.5c-18.1 34.2-46.2 62.3-80.4 80.4L200 272l-72 40 16 72h16c123.7 0 224-100.3 224-224l0-16z" />
    </Icon>
);

export default CirclePhoneFlip;
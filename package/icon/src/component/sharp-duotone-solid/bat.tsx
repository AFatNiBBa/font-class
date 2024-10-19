
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bat` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bat?s=sharp-duotone-solid bat}
 * @preview ![bat](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOTYuMSAxNTkuN2M4LjIgMy45IDE2LjMgNy44IDI0LjUgMTEuN2M2LjQgMy4xIDEzLjUgNC43IDIwLjYgNC43bDkzLjUgMGM3LjEgMCAxNC4yLTEuNiAyMC42LTQuN2wyNC41LTExLjdMMzUyIDQ4IDMyMCA4MGwtNjQgMEwyMjQgNDggMTk2LjEgMTU5Ljd6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMzQuOCAxNzZIMjQxLjJjLTcuMSAwLTE0LjItMS42LTIwLjYtNC43TDk2IDExMkMzNC4xIDE4NC4zIDAgMjc2LjMgMCAzNzEuNVY0MDBsOTYtNDggNDggODAgNjQtNjQgODAgMTEyIDgwLTExMiA2NCA2NCA0OC04MCA5NiA0OFYzNzEuNWMwLTk1LjItMzQuMS0xODcuMi05Ni0yNTkuNUwzNTUuNCAxNzEuM2MtNi40IDMuMS0xMy41IDQuNy0yMC42IDQuN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const Bat: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M196.1 159.7c8.2 3.9 16.3 7.8 24.5 11.7c6.4 3.1 13.5 4.7 20.6 4.7l93.5 0c7.1 0 14.2-1.6 20.6-4.7l24.5-11.7L352 48 320 80l-64 0L224 48 196.1 159.7z" />
            <path d="M334.8 176H241.2c-7.1 0-14.2-1.6-20.6-4.7L96 112C34.1 184.3 0 276.3 0 371.5V400l96-48 48 80 64-64 80 112 80-112 64 64 48-80 96 48V371.5c0-95.2-34.1-187.2-96-259.5L355.4 171.3c-6.4 3.1-13.5 4.7-20.6 4.7z" />
    </Icon>
);

export default Bat;
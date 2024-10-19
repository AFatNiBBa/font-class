
import { Icon, generic } from "../../index";

/**
 * A component that renders the `check-double` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/check-double?s=sharp-duotone-solid check-double}
 * @preview ![check-double](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zNC43IDE0NGwyMi42IDIyLjYgODAgODBMMTYwIDI2OS4zbDIyLjYtMjIuNiAxNjAtMTYwTDM2NS4zIDY0IDMyMCAxOC43IDI5Ny40IDQxLjQgMTYwIDE3OC43bC01Ny40LTU3LjRMODAgOTguNyAzNC43IDE0NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ0Ny45IDIwNi41bC0yMy4yIDIyTDE4MSA0NTkuM2wtMjIgMjAuOC0yMi0yMC44TDIzLjIgMzUxLjYgMCAzMjkuNmw0NC00Ni41IDIzLjIgMjJMMTU5IDM5MiAzODAuNyAxODJsMjMuMi0yMiA0NCA0Ni41eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CheckDouble: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M34.7 144l22.6 22.6 80 80L160 269.3l22.6-22.6 160-160L365.3 64 320 18.7 297.4 41.4 160 178.7l-57.4-57.4L80 98.7 34.7 144z" />
            <path d="M447.9 206.5l-23.2 22L181 459.3l-22 20.8-22-20.8L23.2 351.6 0 329.6l44-46.5 23.2 22L159 392 380.7 182l23.2-22 44 46.5z" />
    </Icon>
);

export default CheckDouble;
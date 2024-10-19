
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sailboat` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sailboat?s=duotone sailboat}
 * @preview ![sailboat](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02Ni4xIDMyOC4xbDEyOC0yMjRjMy42LTYuMyAxMS05LjQgMTgtNy41czExLjkgOC4yIDExLjkgMTUuNWwwIDIyNGMwIDguOC03LjIgMTYtMTYgMTZMODAgMzUyYy01LjcgMC0xMS0zLTEzLjgtOHMtMi45LTExLS4xLTE2ek0yNTYgMTZjMC03IDQuNS0xMy4yIDExLjItMTUuM3MxMy45IC40IDE3LjkgNi4xbDIyNCAzMjBjMS45IDIuNyAyLjkgNiAyLjkgOS4yYzAgMi41LS42IDUuMS0xLjggNy40Yy0yLjggNS4zLTguMiA4LjYtMTQuMiA4LjZsLTIyNCAwYy04LjggMC0xNi03LjItMTYtMTZsMC0zMjB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik01LjcgNDA0LjNDMi44IDM5NC4xIDEwLjUgMzg0IDIxLjEgMzg0SDU1NC45YzEwLjYgMCAxOC4zIDEwLjEgMTUuNCAyMC4zbC00IDE0LjNDNTUwLjcgNDczLjkgNTAwLjQgNTEyIDQ0MyA1MTJIMTMzQzc1LjYgNTEyIDI1LjMgNDczLjkgOS43IDQxOC43bC00LTE0LjN6Ii8+PC9zdmc+|width=32|height=32)
 */
const Sailboat: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M66.1 328.1l128-224c3.6-6.3 11-9.4 18-7.5s11.9 8.2 11.9 15.5l0 224c0 8.8-7.2 16-16 16L80 352c-5.7 0-11-3-13.8-8s-2.9-11-.1-16zM256 16c0-7 4.5-13.2 11.2-15.3s13.9 .4 17.9 6.1l224 320c1.9 2.7 2.9 6 2.9 9.2c0 2.5-.6 5.1-1.8 7.4c-2.8 5.3-8.2 8.6-14.2 8.6l-224 0c-8.8 0-16-7.2-16-16l0-320z" />
            <path d="M5.7 404.3C2.8 394.1 10.5 384 21.1 384H554.9c10.6 0 18.3 10.1 15.4 20.3l-4 14.3C550.7 473.9 500.4 512 443 512H133C75.6 512 25.3 473.9 9.7 418.7l-4-14.3z" />
    </Icon>
);

export default Sailboat;
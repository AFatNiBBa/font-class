
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `car` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/car?s=regular car}
 * @preview ![car](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMTIgMjU2Qzk0LjMyOCAyNTYgODAgMjcwLjMyNiA4MCAyODhDODAgMzA1LjY3MiA5NC4zMjggMzIwIDExMiAzMjBTMTQ0IDMwNS42NzIgMTQ0IDI4OEMxNDQgMjcwLjMyNiAxMjkuNjcyIDI1NiAxMTIgMjU2Wk00MDAgMjU2QzM4Mi4zMjggMjU2IDM2OCAyNzAuMzI2IDM2OCAyODhDMzY4IDMwNS42NzIgMzgyLjMyOCAzMjAgNDAwIDMyMFM0MzIgMzA1LjY3MiA0MzIgMjg4QzQzMiAyNzAuMzI2IDQxNy42NzIgMjU2IDQwMCAyNTZaTTQ2Mi45MzkgMTg4Ljc0TDQyMi4zNzUgODcuMzI4QzQwOC45MzggNTMuNzE5IDM3Ni44NTkgMzIgMzQwLjY3MiAzMkgxNzEuMzI4QzEzNS4xNDEgMzIgMTAzLjA2MiA1My43MTkgODkuNjI1IDg3LjMyOEw0OS4wNjEgMTg4Ljc0QzE5LjkxIDIwNS4yMTkgMCAyMzYuMTI1IDAgMjcyVjQ0OEMwIDQ2NS42NzIgMTQuMzI2IDQ4MCAzMiA0ODBTNjQgNDY1LjY3MiA2NCA0NDhWNDAwSDQ0OFY0NDhDNDQ4IDQ2NS42NzIgNDYyLjMyNiA0ODAgNDgwIDQ4MFM1MTIgNDY1LjY3MiA1MTIgNDQ4VjI3MkM1MTIgMjM2LjEyNSA0OTIuMDkgMjA1LjIxOSA0NjIuOTM5IDE4OC43NFpNMTM0LjE4OCAxMDUuMTQxQzE0MC4yOTcgODkuODc1IDE1NC44NzUgODAgMTcxLjMyOCA4MEgzNDAuNjcyQzM1Ny4xMjUgODAgMzcxLjcwMyA4OS44NzUgMzc3LjgxMiAxMDUuMTQxTDQwNi4xNTYgMTc2SDEwNS44NDRMMTM0LjE4OCAxMDUuMTQxWk00NjQgMzUySDQ4VjI3MkM0OCAyNDUuNTMzIDY5LjUzMyAyMjQgOTYgMjI0SDQxNkM0NDIuNDY3IDIyNCA0NjQgMjQ1LjUzMyA0NjQgMjcyVjM1MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Car(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M112 256C94.328 256 80 270.326 80 288C80 305.672 94.328 320 112 320S144 305.672 144 288C144 270.326 129.672 256 112 256ZM400 256C382.328 256 368 270.326 368 288C368 305.672 382.328 320 400 320S432 305.672 432 288C432 270.326 417.672 256 400 256ZM462.939 188.74L422.375 87.328C408.938 53.719 376.859 32 340.672 32H171.328C135.141 32 103.062 53.719 89.625 87.328L49.061 188.74C19.91 205.219 0 236.125 0 272V448C0 465.672 14.326 480 32 480S64 465.672 64 448V400H448V448C448 465.672 462.326 480 480 480S512 465.672 512 448V272C512 236.125 492.09 205.219 462.939 188.74ZM134.188 105.141C140.297 89.875 154.875 80 171.328 80H340.672C357.125 80 371.703 89.875 377.812 105.141L406.156 176H105.844L134.188 105.141ZM464 352H48V272C48 245.533 69.533 224 96 224H416C442.467 224 464 245.533 464 272V352Z" />
        </Icon>
    </>
}
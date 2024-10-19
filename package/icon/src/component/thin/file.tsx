
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file?s=thin file}
 * @preview ![file](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzQuNjI5IDE1MC42MjdMMjMzLjM3MSA5LjM3M0MyMjcuMzcxIDMuMzcxIDIxOS4yMyAwIDIxMC43NDYgMEg2NEMyOC42NTIgMCAwIDI4LjY1MiAwIDY0VjQ0OEMwIDQ4My4zNDUgMjguNjUyIDUxMiA2NCA1MTJIMzIwQzM1NS4zNDggNTEyIDM4NCA0ODMuMzQ1IDM4NCA0NDhWMTczLjI1NEMzODQgMTY0Ljc2NyAzODAuNjI5IDE1Ni42MjkgMzc0LjYyOSAxNTAuNjI3Wk0zNjEuMzc1IDE2MEgyNDhDMjM0Ljc4MSAxNjAgMjI0IDE0OS4yMzQgMjI0IDEzNlYyMi42MjlMMzYxLjM3NSAxNjBaTTMyMCA0OTZINjRDMzcuNTMxIDQ5NiAxNiA0NzQuNDY3IDE2IDQ0OFY2NEMxNiAzNy41MzMgMzcuNTMxIDE2IDY0IDE2SDIwOFYxMzZDMjA4IDE1OC4wNjIgMjI1LjkzOCAxNzYgMjQ4IDE3NkgzNjhWNDQ4QzM2OCA0NzQuNDY3IDM0Ni40NjkgNDk2IDMyMCA0OTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function File(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M374.629 150.627L233.371 9.373C227.371 3.371 219.23 0 210.746 0H64C28.652 0 0 28.652 0 64V448C0 483.345 28.652 512 64 512H320C355.348 512 384 483.345 384 448V173.254C384 164.767 380.629 156.629 374.629 150.627ZM361.375 160H248C234.781 160 224 149.234 224 136V22.629L361.375 160ZM320 496H64C37.531 496 16 474.467 16 448V64C16 37.533 37.531 16 64 16H208V136C208 158.062 225.938 176 248 176H368V448C368 474.467 346.469 496 320 496Z" />
        </Icon>
    </>
}
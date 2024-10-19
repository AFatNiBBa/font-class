
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-up-from-square` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-from-square?s=duotone arrow-up-from-square}
 * @preview ![arrow-up-from-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCAxOTJIMzA0VjI1NkgzODRWNDQ4SDY0VjI1NkgxNDRWMTkySDY0QzI4LjcxOSAxOTIgMCAyMjAuNzE5IDAgMjU2VjQ0OEMwIDQ4My4yODEgMjguNzE5IDUxMiA2NCA1MTJIMzg0QzQxOS4yODEgNTEyIDQ0OCA0ODMuMjgxIDQ0OCA0NDhWMjU2QzQ0OCAyMjAuNzE5IDQxOS4yODEgMTkyIDM4NCAxOTJaICIgY2xhc3M9ImZhLXNlY29uZGFyeSI+PC9wYXRoPjxwYXRoIGQ9Ik0xMzUuODQgMTU5LjcyNUMxMTguMzY4IDE1OS43MjUgMTA0IDE0NS4zOTIgMTA0IDEyNy42ODJDMTA0IDExOS45NDkgMTA2Ljc4IDExMi4xOTEgMTEyLjQwOCAxMDYuMDM5TDIwMC40MDYgOS45NDVDMjA2LjQ2OCAzLjMxNCAyMTUuMjM0IC0wLjAwMSAyMjQgLTAuMDAxUzI0MS41MzEgMy4zMTQgMjQ3LjU5MyA5Ljk0NUwzMzUuNTkxIDEwNi4wMzlDMzQxLjIyIDExMi4xOTEgMzQzLjk5OSAxMTkuOTQ5IDM0My45OTkgMTI3LjY4MkMzNDMuOTk5IDE0NS4zOTggMzI5LjY3OCAxNTkuNzA4IDMxMi4wMzEgMTU5LjcwOEMzMDMuMzY2IDE1OS43MDggMjk0LjcyNSAxNTYuMjEzIDI4OC40MDQgMTQ5LjMzMkwyNTYgMTEzLjkzOFYzMjBDMjU2IDMzNy43MDMgMjQxLjY3MSAzNTIuMDMxIDIyNCAzNTIuMDMxUzE5MiAzMzcuNzAzIDE5MiAzMjBWMTEzLjkzOEwxNTkuNTk1IDE0OS4zMzJDMTUzLjQ2NSAxNTYuMDE1IDE0NC43MzUgMTU5LjcyNSAxMzUuODQgMTU5LjcyNVogIiBjbGFzcz0iZmEtcHJpbWFyeSI+PC9wYXRoPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowUpFromSquare(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M384 192H304V256H384V448H64V256H144V192H64C28.719 192 0 220.719 0 256V448C0 483.281 28.719 512 64 512H384C419.281 512 448 483.281 448 448V256C448 220.719 419.281 192 384 192Z " />
            <path d="M135.84 159.725C118.368 159.725 104 145.392 104 127.682C104 119.949 106.78 112.191 112.408 106.039L200.406 9.945C206.468 3.314 215.234 -0.001 224 -0.001S241.531 3.314 247.593 9.945L335.591 106.039C341.22 112.191 343.999 119.949 343.999 127.682C343.999 145.398 329.678 159.708 312.031 159.708C303.366 159.708 294.725 156.213 288.404 149.332L256 113.938V320C256 337.703 241.671 352.031 224 352.031S192 337.703 192 320V113.938L159.595 149.332C153.465 156.015 144.735 159.725 135.84 159.725Z " />
        </Icon>
    </>
}

import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-arrow-down` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-arrow-down?s=thin file-arrow-down}
 * @preview ![file-arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzQuNjI5IDE1MC42MjVMMjMzLjM3MSA5LjM3NUMyMjcuMzcxIDMuMzcxIDIxOS4yMyAwIDIxMC43NDYgMEg2NEMyOC42NTIgMCAwIDI4LjY1MiAwIDY0VjQ0OEMwIDQ4My4zNDQgMjguNjUyIDUxMiA2NCA1MTJIMzIwQzM1NS4zNDggNTEyIDM4NCA0ODMuMzQ0IDM4NCA0NDhWMTczLjI1NEMzODQgMTY0Ljc2NiAzODAuNjI5IDE1Ni42MjkgMzc0LjYyOSAxNTAuNjI1Wk0yMjQgMjIuNjI5TDM2MS4zNzUgMTYwSDI0OEMyMzQuNzgxIDE2MCAyMjQgMTQ5LjIzNCAyMjQgMTM2VjIyLjYyOVpNMzY4IDQ0OEMzNjggNDc0LjQ2OSAzNDYuNDY5IDQ5NiAzMjAgNDk2SDY0QzM3LjUzMSA0OTYgMTYgNDc0LjQ2OSAxNiA0NDhWNjRDMTYgMzcuNTMxIDM3LjUzMSAxNiA2NCAxNkgyMDhWMTM2QzIwOCAxNTguMDYyIDIyNS45MzggMTc2IDI0OCAxNzZIMzY4VjQ0OFpNMTk5LjQxNCAyMzJDMTk5LjQxNCAyMjcuNTk0IDE5NS44MzYgMjI0IDE5MS40MTQgMjI0UzE4My40MTQgMjI3LjU5NCAxODMuNDE0IDIzMlY0MjAuNjg4TDkwLjI0MiAzMjcuNTE2Qzg3LjExNyAzMjQuMzkxIDgyLjA1NSAzMjQuMzkxIDc4LjkzIDMyNy41MTZTNzUuODA1IDMzNS43MDMgNzguOTMgMzM4LjgyOEwxODUuNzU4IDQ0NS42NTZDMTg4Ljg4MyA0NDguNzgxIDE5My45NDUgNDQ4Ljc4MSAxOTcuMDcgNDQ1LjY1NkwzMDUuMDcgMzM3LjY1NkMzMDYuNjMzIDMzNi4wOTQgMzA3LjQxNCAzMzQuMDYyIDMwNy40MTQgMzMyUzMwNi42MzMgMzI3LjkwNiAzMDUuMDcgMzI2LjM0NEMzMDEuOTQ1IDMyMy4yMTkgMjk2Ljg4MyAzMjMuMjE5IDI5My43NTggMzI2LjM0NEwxOTkuNDE0IDQyMC42ODhWMjMyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FileArrowDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M374.629 150.625L233.371 9.375C227.371 3.371 219.23 0 210.746 0H64C28.652 0 0 28.652 0 64V448C0 483.344 28.652 512 64 512H320C355.348 512 384 483.344 384 448V173.254C384 164.766 380.629 156.629 374.629 150.625ZM224 22.629L361.375 160H248C234.781 160 224 149.234 224 136V22.629ZM368 448C368 474.469 346.469 496 320 496H64C37.531 496 16 474.469 16 448V64C16 37.531 37.531 16 64 16H208V136C208 158.062 225.938 176 248 176H368V448ZM199.414 232C199.414 227.594 195.836 224 191.414 224S183.414 227.594 183.414 232V420.688L90.242 327.516C87.117 324.391 82.055 324.391 78.93 327.516S75.805 335.703 78.93 338.828L185.758 445.656C188.883 448.781 193.945 448.781 197.07 445.656L305.07 337.656C306.633 336.094 307.414 334.062 307.414 332S306.633 327.906 305.07 326.344C301.945 323.219 296.883 323.219 293.758 326.344L199.414 420.688V232Z" />
        </Icon>
    </>
}
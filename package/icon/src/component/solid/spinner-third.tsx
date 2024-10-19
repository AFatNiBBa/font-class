
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `spinner-third` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/spinner-third?s=solid spinner-third}
 * @preview ![spinner-third](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYgMjU2QzQ5NiAyOTMuNzg1IDQ4Ny4xMjkgMzI5LjQzOCA0NzEuNTM1IDM2MS4yMTFDNDY3LjUyNyAzNjkuMzczIDQ1Ny4xMjUgMzcyLjEyMSA0NDkuMjUgMzY3LjU3NEw0MjEuNDQ3IDM1MS41MjFDNDE0LjA1NyAzNDcuMjU0IDQxMS42ODYgMzM4LjEyNyA0MTUuMzIyIDMzMC40MDZDNDI1Ljk3MSAzMDcuNzk1IDQzMiAyODIuNjA5IDQzMiAyNTZDNDMyIDE2NC4wOCAzNjEuMTcgODguMzkzIDI3MS4yMjMgODAuNjUyQzI2Mi43MzIgNzkuOTIyIDI1NiA3My4zMTIgMjU2IDY0Ljc5MVYzMi43MzRDMjU2IDIzLjYxNyAyNjMuNjY4IDE1Ljk0OSAyNzIuNzY0IDE2LjU3NkMzOTcuNDkyIDI1LjE4MiA0OTYgMTI5LjA4NiA0OTYgMjU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SpinnerThird(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M496 256C496 293.785 487.129 329.438 471.535 361.211C467.527 369.373 457.125 372.121 449.25 367.574L421.447 351.521C414.057 347.254 411.686 338.127 415.322 330.406C425.971 307.795 432 282.609 432 256C432 164.08 361.17 88.393 271.223 80.652C262.732 79.922 256 73.312 256 64.791V32.734C256 23.617 263.668 15.949 272.764 16.576C397.492 25.182 496 129.086 496 256Z" />
        </Icon>
    </>
}
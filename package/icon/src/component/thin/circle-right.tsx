
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-right` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-right?s=thin circle-right}
 * @preview ![circle-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODkuNjU0IDI3Mi45NzFDMzk0LjM0IDI2OC4yODMgMzk2LjY4NCAyNjIuMTQzIDM5Ni42ODQgMjU2UzM5NC4zNCAyNDMuNzE3IDM4OS42NTQgMjM5LjAyOUwyOTYuOTcxIDE0Ni4zNDZDMjgxLjg1MiAxMzEuMjI3IDI1NiAxNDEuOTM0IDI1NiAxNjMuMzE2VjIwOEgxNTJDMTM4Ljc0NCAyMDggMTI4IDIxOC43NDYgMTI4IDIzMlYyODBDMTI4IDI5My4yNTQgMTM4Ljc0NCAzMDQgMTUyIDMwNEgyNTZWMzQ4LjY4NEMyNTYgMzcwLjA2NiAyODEuODUyIDM4MC43NzMgMjk2Ljk3MSAzNjUuNjU0TDM4OS42NTQgMjcyLjk3MVpNMjc2LjkzOCAzNTYuMDc2QzI3NS40NTMgMzU1LjQ2MSAyNzIgMzUzLjUwOCAyNzIgMzQ4LjY4NFYyODhIMTUyQzE0Ny41ODggMjg4IDE0NCAyODQuNDEyIDE0NCAyODBWMjMyQzE0NCAyMjcuNTg4IDE0Ny41ODggMjI0IDE1MiAyMjRIMjcyVjE2My4zMTZDMjcyIDE1OC40OTIgMjc1LjQ1MyAxNTYuNTM5IDI3Ni45MzggMTU1LjkyNEMyNzguNDI0IDE1NS4zMTEgMjgyLjI0NCAxNTQuMjQ4IDI4NS42NTYgMTU3LjY2TDM3OC4zNCAyNTAuMzQ0QzM4MC4zNzkgMjUyLjM4MyAzODAuNjg0IDI1NC43NjIgMzgwLjY4NCAyNTZTMzgwLjM3OSAyNTkuNjE3IDM3OC4zNCAyNjEuNjU2TDI4NS42NTYgMzU0LjM0QzI4Mi4yNDQgMzU3Ljc1MiAyNzguNDI0IDM1Ni42ODkgMjc2LjkzOCAzNTYuMDc2Wk00OTYgMjU2QzQ5NiAxMjMuNDUxIDM4OC41NDkgMTYgMjU2IDE2UzE2IDEyMy40NTEgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDkgNDk2IDI1NlpNMzIgMjU2QzMyIDEzMi40ODYgMTMyLjQ4NiAzMiAyNTYgMzJTNDgwIDEzMi40ODYgNDgwIDI1NlMzNzkuNTE0IDQ4MCAyNTYgNDgwUzMyIDM3OS41MTQgMzIgMjU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M389.654 272.971C394.34 268.283 396.684 262.143 396.684 256S394.34 243.717 389.654 239.029L296.971 146.346C281.852 131.227 256 141.934 256 163.316V208H152C138.744 208 128 218.746 128 232V280C128 293.254 138.744 304 152 304H256V348.684C256 370.066 281.852 380.773 296.971 365.654L389.654 272.971ZM276.938 356.076C275.453 355.461 272 353.508 272 348.684V288H152C147.588 288 144 284.412 144 280V232C144 227.588 147.588 224 152 224H272V163.316C272 158.492 275.453 156.539 276.938 155.924C278.424 155.311 282.244 154.248 285.656 157.66L378.34 250.344C380.379 252.383 380.684 254.762 380.684 256S380.379 259.617 378.34 261.656L285.656 354.34C282.244 357.752 278.424 356.689 276.938 356.076ZM496 256C496 123.451 388.549 16 256 16S16 123.451 16 256S123.451 496 256 496S496 388.549 496 256ZM32 256C32 132.486 132.486 32 256 32S480 132.486 480 256S379.514 480 256 480S32 379.514 32 256Z" />
        </Icon>
    </>
}
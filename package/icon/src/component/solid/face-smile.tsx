
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `face-smile` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-smile?s=solid face-smile}
 * @preview ![face-smile](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYgMjU2QzQ5NiAzODguNTgxIDM4OC41ODEgNDk2IDI1NiA0OTZTMTYgMzg4LjU4MSAxNiAyNTZTMTIzLjQxOSAxNiAyNTYgMTZTNDk2IDEyMy40MTkgNDk2IDI1NlpNMzQ2LjE4OCAzMjUuNzAzQzMyMy44MTIgMzUyLjUgMjkxIDM2Ny45MDYgMjU2IDM2Ny45MDZTMTg4LjE4OCAzNTIuNTk0IDE2NS44MTIgMzI1LjcwM0MxNTIuMTg4IDMwOS41IDEyNy41OTQgMzI5LjkwNiAxNDEuMTg4IDM0Ni4yMDNDMTY5LjY4OCAzODAuNDA2IDIxMS41IDQwMCAyNTYgNDAwUzM0Mi4zMTIgMzgwLjQwNiAzNzAuODEyIDM0Ni4yMDNDMzg0LjMxMiAzMjkuOTA2IDM1OS41OTQgMzA5LjUgMzQ2LjE4OCAzMjUuNzAzWk0xNDQgMjA4QzE0NCAyMjUuNzAzIDE1OC4zMTIgMjQwIDE3NiAyNDBTMjA4IDIyNS43MDMgMjA4IDIwOFMxOTMuNjg4IDE3NiAxNzYgMTc2UzE0NCAxOTAuMjk3IDE0NCAyMDhaTTMwNCAyMDhDMzA0IDIyNS43MDMgMzE4LjMxMiAyNDAgMzM2IDI0MFMzNjggMjI1LjcwMyAzNjggMjA4UzM1My42ODggMTc2IDMzNiAxNzZTMzA0IDE5MC4yOTcgMzA0IDIwOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FaceSmile(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M496 256C496 388.581 388.581 496 256 496S16 388.581 16 256S123.419 16 256 16S496 123.419 496 256ZM346.188 325.703C323.812 352.5 291 367.906 256 367.906S188.188 352.594 165.812 325.703C152.188 309.5 127.594 329.906 141.188 346.203C169.688 380.406 211.5 400 256 400S342.312 380.406 370.812 346.203C384.312 329.906 359.594 309.5 346.188 325.703ZM144 208C144 225.703 158.312 240 176 240S208 225.703 208 208S193.688 176 176 176S144 190.297 144 208ZM304 208C304 225.703 318.312 240 336 240S368 225.703 368 208S353.688 176 336 176S304 190.297 304 208Z" />
        </Icon>
    </>
}
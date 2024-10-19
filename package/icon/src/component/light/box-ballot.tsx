
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `box-ballot` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/box-ballot?s=light box-ballot}
 * @preview ![box-ballot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MjggMTYwSDQ5NkM0ODcuMTU2IDE2MCA0ODAgMTY3LjE1NiA0ODAgMTc2UzQ4Ny4xNTYgMTkyIDQ5NiAxOTJINTI4QzUzNi44MTIgMTkyIDU0NCAxOTkuMTcyIDU0NCAyMDhWMzIwSDMyVjIwOEMzMiAxOTkuMTcyIDM5LjE4OCAxOTIgNDggMTkySDgwQzg4Ljg0NCAxOTIgOTYgMTg0Ljg0NCA5NiAxNzZTODguODQ0IDE2MCA4MCAxNjBINDhDMjEuNTMxIDE2MCAwIDE4MS41MzEgMCAyMDhWNDY0QzAgNDkwLjQ2OSAyMS41MzEgNTEyIDQ4IDUxMkg1MjhDNTU0LjQ2OSA1MTIgNTc2IDQ5MC40NjkgNTc2IDQ2NFYyMDhDNTc2IDE4MS41MzEgNTU0LjQ2OSAxNjAgNTI4IDE2MFpNNTQ0IDQ2NEM1NDQgNDcyLjgyOCA1MzYuODEyIDQ4MCA1MjggNDgwSDQ4QzM5LjE4OCA0ODAgMzIgNDcyLjgyOCAzMiA0NjRWMzUySDU0NFY0NjRaTTE0NCAyNTZINDMyQzQ0MC44NDQgMjU2IDQ0OCAyNDguODQ0IDQ0OCAyNDBWNDhDNDQ4IDIxLjUzMSA0MjYuNDY5IDAgNDAwIDBIMTc2QzE0OS41MzEgMCAxMjggMjEuNTMxIDEyOCA0OFYyNDBDMTI4IDI0OC44NDQgMTM1LjE1NiAyNTYgMTQ0IDI1NlpNMTYwIDQ4QzE2MCAzOS4xNzIgMTY3LjE4OCAzMiAxNzYgMzJINDAwQzQwOC44MTIgMzIgNDE2IDM5LjE3MiA0MTYgNDhWMjI0SDE2MFY0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BoxBallot(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M528 160H496C487.156 160 480 167.156 480 176S487.156 192 496 192H528C536.812 192 544 199.172 544 208V320H32V208C32 199.172 39.188 192 48 192H80C88.844 192 96 184.844 96 176S88.844 160 80 160H48C21.531 160 0 181.531 0 208V464C0 490.469 21.531 512 48 512H528C554.469 512 576 490.469 576 464V208C576 181.531 554.469 160 528 160ZM544 464C544 472.828 536.812 480 528 480H48C39.188 480 32 472.828 32 464V352H544V464ZM144 256H432C440.844 256 448 248.844 448 240V48C448 21.531 426.469 0 400 0H176C149.531 0 128 21.531 128 48V240C128 248.844 135.156 256 144 256ZM160 48C160 39.172 167.188 32 176 32H400C408.812 32 416 39.172 416 48V224H160V48Z" />
        </Icon>
    </>
}
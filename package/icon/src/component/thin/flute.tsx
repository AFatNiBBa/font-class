
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `flute` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/flute?s=thin flute}
 * @preview ![flute](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MDggMTYwSDMyQzE0LjM3NSAxNjAgMCAxNzQuMzc1IDAgMTkyVjMyMEMwIDMzNy42MjUgMTQuMzc1IDM1MiAzMiAzNTJINjA4QzYyNS42MjUgMzUyIDY0MCAzMzcuNjI1IDY0MCAzMjBWMTkyQzY0MCAxNzQuMzc1IDYyNS42MjUgMTYwIDYwOCAxNjBaTTExMiAzMzZIMzJDMjMuMTc4IDMzNiAxNiAzMjguODI0IDE2IDMyMFYxOTJDMTYgMTgzLjE3NiAyMy4xNzggMTc2IDMyIDE3NkgxMTJWMzM2Wk02MjQgMzIwQzYyNCAzMjguODI0IDYxNi44MjIgMzM2IDYwOCAzMzZIMTI4VjE3Nkg2MDhDNjE2LjgyMiAxNzYgNjI0IDE4My4xNzYgNjI0IDE5MlYzMjBaTTMyMCAyMjRDMzAyLjM1OSAyMjQgMjg4IDIzOC4zNDQgMjg4IDI1NlMzMDIuMzU5IDI4OCAzMjAgMjg4UzM1MiAyNzMuNjU2IDM1MiAyNTZTMzM3LjY0MSAyMjQgMzIwIDIyNFpNMzIwIDI3MkMzMTEuMTcyIDI3MiAzMDQgMjY0LjgxMiAzMDQgMjU2UzMxMS4xNzIgMjQwIDMyMCAyNDBTMzM2IDI0Ny4xODggMzM2IDI1NlMzMjguODI4IDI3MiAzMjAgMjcyWk00MTYgMjI0QzM5OC4zNTkgMjI0IDM4NCAyMzguMzQ0IDM4NCAyNTZTMzk4LjM1OSAyODggNDE2IDI4OFM0NDggMjczLjY1NiA0NDggMjU2UzQzMy42NDEgMjI0IDQxNiAyMjRaTTQxNiAyNzJDNDA3LjE3MiAyNzIgNDAwIDI2NC44MTIgNDAwIDI1NlM0MDcuMTcyIDI0MCA0MTYgMjQwUzQzMiAyNDcuMTg4IDQzMiAyNTZTNDI0LjgyOCAyNzIgNDE2IDI3MlpNNTEyIDIyNEM0OTQuMzU5IDIyNCA0ODAgMjM4LjM0NCA0ODAgMjU2UzQ5NC4zNTkgMjg4IDUxMiAyODhTNTQ0IDI3My42NTYgNTQ0IDI1NlM1MjkuNjQxIDIyNCA1MTIgMjI0Wk01MTIgMjcyQzUwMy4xNzIgMjcyIDQ5NiAyNjQuODEyIDQ5NiAyNTZTNTAzLjE3MiAyNDAgNTEyIDI0MFM1MjggMjQ3LjE4OCA1MjggMjU2UzUyMC44MjggMjcyIDUxMiAyNzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Flute(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M608 160H32C14.375 160 0 174.375 0 192V320C0 337.625 14.375 352 32 352H608C625.625 352 640 337.625 640 320V192C640 174.375 625.625 160 608 160ZM112 336H32C23.178 336 16 328.824 16 320V192C16 183.176 23.178 176 32 176H112V336ZM624 320C624 328.824 616.822 336 608 336H128V176H608C616.822 176 624 183.176 624 192V320ZM320 224C302.359 224 288 238.344 288 256S302.359 288 320 288S352 273.656 352 256S337.641 224 320 224ZM320 272C311.172 272 304 264.812 304 256S311.172 240 320 240S336 247.188 336 256S328.828 272 320 272ZM416 224C398.359 224 384 238.344 384 256S398.359 288 416 288S448 273.656 448 256S433.641 224 416 224ZM416 272C407.172 272 400 264.812 400 256S407.172 240 416 240S432 247.188 432 256S424.828 272 416 272ZM512 224C494.359 224 480 238.344 480 256S494.359 288 512 288S544 273.656 544 256S529.641 224 512 224ZM512 272C503.172 272 496 264.812 496 256S503.172 240 512 240S528 247.188 528 256S520.828 272 512 272Z" />
        </Icon>
    </>
}

import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `stretcher` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/stretcher?s=solid stretcher}
 * @preview ![stretcher](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MDggMTkxLjk5NkgxOTEuOTkyTDc5Ljg2NyA3NC43NEM2OC4xMTcgNjEuNDkgNDcuODY3IDYwLjM2NSAzNC42MTUgNzIuMTE1TDEwLjc0IDkzLjM2NUMtMi41MSAxMDUuMTE3IC0zLjYzNSAxMjUuMjQyIDguMTE1IDEzOC40OTJMMTI5Ljc0MiAyNjYuNDk4QzE0MS44NjcgMjgwLjEyNSAxNTkuMzY3IDI4OCAxNzcuNjE3IDI4OEg2MDhDNjI1LjYyNSAyODggNjQwIDI3My42MjMgNjQwIDI1NS45OThWMjIzLjk5NkM2NDAgMjA2LjM3MSA2MjUuNjI1IDE5MS45OTYgNjA4IDE5MS45OTZaTTQ4MCAzODRDNDY3LjM4OSAzODQgNDU1LjcwNyAzODcuNzczIDQ0NS43OTcgMzk0LjA3Mkw0MDkuMjk3IDM2OEw0NzYuNDk2IDMyMEgzOTMuOTAyTDM2OCAzMzguNTAyTDM0Mi4wOTggMzIwSDI1OS41MDRMMzI2LjcwMyAzNjhMMjkwLjIwMyAzOTQuMDcyQzI4MC4yOTMgMzg3Ljc3MyAyNjguNjExIDM4NCAyNTYgMzg0QzIyMC42NTQgMzg0IDE5MiA0MTIuNjUyIDE5MiA0NDhDMTkyIDQ4My4zNDYgMjIwLjY1NCA1MTIgMjU2IDUxMlMzMjAgNDgzLjM0NiAzMjAgNDQ4QzMyMCA0NDIuODYzIDMxOS4yMzQgNDM3LjkzNCAzMTguMDkyIDQzMy4xNDZMMzY4IDM5Ny40OThMNDE3LjkwOCA0MzMuMTQ2QzQxNi43NjYgNDM3LjkzNCA0MTYgNDQyLjg2MyA0MTYgNDQ4QzQxNiA0ODMuMzQ2IDQ0NC42NTQgNTEyIDQ4MCA1MTJTNTQ0IDQ4My4zNDYgNTQ0IDQ0OEM1NDQgNDEyLjY1MiA1MTUuMzQ2IDM4NCA0ODAgMzg0Wk0yNTYgNDY0QzI0Ny4xNzggNDY0IDI0MCA0NTYuODIyIDI0MCA0NDhTMjQ3LjE3OCA0MzIgMjU2IDQzMlMyNzIgNDM5LjE3OCAyNzIgNDQ4UzI2NC44MjIgNDY0IDI1NiA0NjRaTTQ4MCA0NjRDNDcxLjE3OCA0NjQgNDY0IDQ1Ni44MjIgNDY0IDQ0OFM0NzEuMTc4IDQzMiA0ODAgNDMyUzQ5NiA0MzkuMTc4IDQ5NiA0NDhTNDg4LjgyMiA0NjQgNDgwIDQ2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Stretcher(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M608 191.996H191.992L79.867 74.74C68.117 61.49 47.867 60.365 34.615 72.115L10.74 93.365C-2.51 105.117 -3.635 125.242 8.115 138.492L129.742 266.498C141.867 280.125 159.367 288 177.617 288H608C625.625 288 640 273.623 640 255.998V223.996C640 206.371 625.625 191.996 608 191.996ZM480 384C467.389 384 455.707 387.773 445.797 394.072L409.297 368L476.496 320H393.902L368 338.502L342.098 320H259.504L326.703 368L290.203 394.072C280.293 387.773 268.611 384 256 384C220.654 384 192 412.652 192 448C192 483.346 220.654 512 256 512S320 483.346 320 448C320 442.863 319.234 437.934 318.092 433.146L368 397.498L417.908 433.146C416.766 437.934 416 442.863 416 448C416 483.346 444.654 512 480 512S544 483.346 544 448C544 412.652 515.346 384 480 384ZM256 464C247.178 464 240 456.822 240 448S247.178 432 256 432S272 439.178 272 448S264.822 464 256 464ZM480 464C471.178 464 464 456.822 464 448S471.178 432 480 432S496 439.178 496 448S488.822 464 480 464Z" />
        </Icon>
    </>
}

import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `wave-square` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wave-square?s=light wave-square}
 * @preview ![wave-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02NDAgMjU2QzY0MCAyNjQuODIyIDYzMi44MjIgMjcyIDYyNCAyNzJINTEyQzUwMy4xNzggMjcyIDQ5NiAyNzkuMTc4IDQ5NiAyODhWNDE2QzQ5NiA0NDIuNDY3IDQ3NC40NjcgNDY0IDQ0OCA0NjRIMzUyQzMyNS41MzMgNDY0IDMwNCA0NDIuNDY3IDMwNCA0MTZWOTZDMzA0IDg3LjE3OCAyOTYuODIyIDgwIDI4OCA4MEgxOTJDMTgzLjE3OCA4MCAxNzYgODcuMTc4IDE3NiA5NlYyMjRDMTc2IDI1MC40NjcgMTU0LjQ2NyAyNzIgMTI4IDI3MkgxNkM3LjE3OCAyNzIgMCAyNjQuODIyIDAgMjU2UzcuMTc4IDI0MCAxNiAyNDBIMTI4QzEzNi44MjIgMjQwIDE0NCAyMzIuODIyIDE0NCAyMjRWOTZDMTQ0IDY5LjUzMyAxNjUuNTMzIDQ4IDE5MiA0OEgyODhDMzE0LjQ2NyA0OCAzMzYgNjkuNTMzIDMzNiA5NlY0MTZDMzM2IDQyNC44MjIgMzQzLjE3OCA0MzIgMzUyIDQzMkg0NDhDNDU2LjgyMiA0MzIgNDY0IDQyNC44MjIgNDY0IDQxNlYyODhDNDY0IDI2MS41MzMgNDg1LjUzMyAyNDAgNTEyIDI0MEg2MjRDNjMyLjgyMiAyNDAgNjQwIDI0Ny4xNzggNjQwIDI1NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function WaveSquare(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M640 256C640 264.822 632.822 272 624 272H512C503.178 272 496 279.178 496 288V416C496 442.467 474.467 464 448 464H352C325.533 464 304 442.467 304 416V96C304 87.178 296.822 80 288 80H192C183.178 80 176 87.178 176 96V224C176 250.467 154.467 272 128 272H16C7.178 272 0 264.822 0 256S7.178 240 16 240H128C136.822 240 144 232.822 144 224V96C144 69.533 165.533 48 192 48H288C314.467 48 336 69.533 336 96V416C336 424.822 343.178 432 352 432H448C456.822 432 464 424.822 464 416V288C464 261.533 485.533 240 512 240H624C632.822 240 640 247.178 640 256Z" />
        </Icon>
    </>
}
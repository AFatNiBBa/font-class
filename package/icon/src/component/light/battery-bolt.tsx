
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `battery-bolt` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/battery-bolt?s=light battery-bolt}
 * @preview ![battery-bolt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjYuNSAyNDkuMjM0QzM2My44NzUgMjQzLjYwOSAzNTguMjE5IDI0MCAzNTIgMjQwSDE5NC4zNDRMMzQwLjI1IDY2LjI5N0MzNDUuOTM4IDU5LjUzMSAzNDUuMDYyIDQ5LjQzNyAzMzguMjgxIDQzLjc1QzMzMS41MzEgMzguMDYyIDMyMS40MDYgMzguODkxIDMxNS43NSA0NS43MDNMMTQ3Ljc1IDI0NS43MDNDMTQzLjc1IDI1MC40NjkgMTQyLjg3NSAyNTcuMTI1IDE0NS41IDI2Mi43NjZDMTQ4LjEyNSAyNjguMzkxIDE1My43ODEgMjcyIDE2MCAyNzJIMzE3LjY1NkwxNzEuNzUgNDQ1LjcwM0MxNjYuMDYyIDQ1Mi40NjkgMTY2LjkzOCA0NjIuNTYzIDE3My43MTkgNDY4LjI1QzE3Ni43MTkgNDcwLjc2NiAxODAuMzQ0IDQ3MiAxODQgNDcyQzE4OC41NjIgNDcyIDE5My4wOTQgNDcwLjA2MiAxOTYuMjUgNDY2LjI5N0wzNjQuMjUgMjY2LjI5N0MzNjguMjUgMjYxLjUzMSAzNjkuMTI1IDI1NC44NzUgMzY2LjUgMjQ5LjIzNFpNMTI4IDM4NEg2NEM0Ni4zMjYgMzg0IDMyIDM2OS42NzIgMzIgMzUyVjE2MEMzMiAxNDIuMzI2IDQ2LjMyNiAxMjggNjQgMTI4SDE5MkMyMDAuODM2IDEyOCAyMDggMTIwLjgzNiAyMDggMTEyQzIwOCAxMDMuMTYyIDIwMC44MzYgOTYgMTkyIDk2SDY0QzI4LjY1NCA5NiAwIDEyNC42NTIgMCAxNjBWMzUyQzAgMzg3LjM0NiAyOC42NTQgNDE2IDY0IDQxNkgxMjhDMTM2LjgzNiA0MTYgMTQ0IDQwOC44MzYgMTQ0IDQwMEMxNDQgMzkxLjE2MiAxMzYuODM2IDM4NCAxMjggMzg0Wk00NDggOTZIMzg0QzM3NS4xNjQgOTYgMzY4IDEwMy4xNjIgMzY4IDExMkMzNjggMTIwLjgzNiAzNzUuMTY0IDEyOCAzODQgMTI4SDQ0OEM0NjUuNjc0IDEyOCA0ODAgMTQyLjMyNiA0ODAgMTYwVjM1MkM0ODAgMzY5LjY3MiA0NjUuNjc0IDM4NCA0NDggMzg0SDMyMEMzMTEuMTY0IDM4NCAzMDQgMzkxLjE2MiAzMDQgNDAwQzMwNCA0MDguODM2IDMxMS4xNjQgNDE2IDMyMCA0MTZINDQ4QzQ4My4zNDYgNDE2IDUxMiAzODcuMzQ2IDUxMiAzNTJWMTYwQzUxMiAxMjQuNjUyIDQ4My4zNDYgOTYgNDQ4IDk2Wk01NjAgMTkyQzU1MS4xNTYgMTkyIDU0NCAxOTkuMTU2IDU0NCAyMDhWMzA0QzU0NCAzMTIuODQ0IDU1MS4xNTYgMzIwIDU2MCAzMjBTNTc2IDMxMi44NDQgNTc2IDMwNFYyMDhDNTc2IDE5OS4xNTYgNTY4Ljg0NCAxOTIgNTYwIDE5MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BatteryBolt(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M366.5 249.234C363.875 243.609 358.219 240 352 240H194.344L340.25 66.297C345.938 59.531 345.062 49.437 338.281 43.75C331.531 38.062 321.406 38.891 315.75 45.703L147.75 245.703C143.75 250.469 142.875 257.125 145.5 262.766C148.125 268.391 153.781 272 160 272H317.656L171.75 445.703C166.062 452.469 166.938 462.563 173.719 468.25C176.719 470.766 180.344 472 184 472C188.562 472 193.094 470.062 196.25 466.297L364.25 266.297C368.25 261.531 369.125 254.875 366.5 249.234ZM128 384H64C46.326 384 32 369.672 32 352V160C32 142.326 46.326 128 64 128H192C200.836 128 208 120.836 208 112C208 103.162 200.836 96 192 96H64C28.654 96 0 124.652 0 160V352C0 387.346 28.654 416 64 416H128C136.836 416 144 408.836 144 400C144 391.162 136.836 384 128 384ZM448 96H384C375.164 96 368 103.162 368 112C368 120.836 375.164 128 384 128H448C465.674 128 480 142.326 480 160V352C480 369.672 465.674 384 448 384H320C311.164 384 304 391.162 304 400C304 408.836 311.164 416 320 416H448C483.346 416 512 387.346 512 352V160C512 124.652 483.346 96 448 96ZM560 192C551.156 192 544 199.156 544 208V304C544 312.844 551.156 320 560 320S576 312.844 576 304V208C576 199.156 568.844 192 560 192Z" />
        </Icon>
    </>
}
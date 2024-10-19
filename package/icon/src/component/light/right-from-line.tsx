
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `right-from-line` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/right-from-line?s=light right-from-line}
 * @preview ![right-from-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNiA0NDhDMjQuODQ0IDQ0OCAzMiA0NDAuODQ0IDMyIDQzMlY4MEMzMiA3MS4xNTYgMjQuODQ0IDY0IDE2IDY0UzAgNzEuMTU2IDAgODBWNDMyQzAgNDQwLjg0NCA3LjE1NiA0NDggMTYgNDQ4Wk0xMjQuODI4IDMyMEgyNDBWMzc4LjQwNkMyNDAgMzkzLjQwNiAyNDguOTA2IDQwNi45MzggMjYyLjc1IDQxMi45MzhDMjc2LjU0NyA0MTguODc1IDI5Mi41MzEgNDE2LjA2MiAzMDMuMjk3IDQwNS44NzVMNDM2LjUgMjgzLjM0NEM0NDMuODEyIDI3Ni40NjkgNDQ4IDI2Ni41IDQ0OCAyNTZTNDQzLjgxMiAyMzUuNTMxIDQzNi4zNDQgMjI4LjVMMzAzLjQ1MyAxMDYuMjgxQzI5Mi41MzEgOTUuOTM4IDI3Ni41NDcgOTMuMTI1IDI2Mi42ODggOTkuMDYzQzI0OC45MDYgMTA1LjA2MiAyNDAgMTE4LjU5NCAyNDAgMTMzLjU5NFYxOTJIMTI0LjgyOEMxMDAuMTA5IDE5MiA4MCAyMTIuMDk0IDgwIDIzNi44MTJWMjc1LjE4OEM4MCAyOTkuOTA2IDEwMC4xMDkgMzIwIDEyNC44MjggMzIwWk0xMTIgMjM2LjgxMkMxMTIgMjI5Ljc1IDExNy43NSAyMjQgMTI0LjgyOCAyMjRIMjcyVjEzMy41OTRDMjcyIDEzMS4zNzUgMjczLjM0NCAxMjkuMzQ0IDI3NS4zNzUgMTI4LjQzOEMyNzcuNDUzIDEyNy41NjIgMjc5Ljg0NCAxMjggMjgxLjY0MSAxMjkuNjg4TDQxNC41MzEgMjUxLjkwNkM0MTYuMzQ0IDI1My42NTYgNDE2LjE4NyAyNTguNSA0MTQuNjg3IDI1OS45MzhMMjgxLjQ4NCAzODIuNDY5QzI3OS44NDQgMzg0IDI3Ny40NTMgMzg0LjQzOCAyNzUuNDM4IDM4My41NjJDMjczLjM0NCAzODIuNjU2IDI3MiAzODAuNjI1IDI3MiAzNzguNDA2VjI4OEgxMjQuODI4QzExNy43NSAyODggMTEyIDI4Mi4yNSAxMTIgMjc1LjE4OFYyMzYuODEyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function RightFromLine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M16 448C24.844 448 32 440.844 32 432V80C32 71.156 24.844 64 16 64S0 71.156 0 80V432C0 440.844 7.156 448 16 448ZM124.828 320H240V378.406C240 393.406 248.906 406.938 262.75 412.938C276.547 418.875 292.531 416.062 303.297 405.875L436.5 283.344C443.812 276.469 448 266.5 448 256S443.812 235.531 436.344 228.5L303.453 106.281C292.531 95.938 276.547 93.125 262.688 99.063C248.906 105.062 240 118.594 240 133.594V192H124.828C100.109 192 80 212.094 80 236.812V275.188C80 299.906 100.109 320 124.828 320ZM112 236.812C112 229.75 117.75 224 124.828 224H272V133.594C272 131.375 273.344 129.344 275.375 128.438C277.453 127.562 279.844 128 281.641 129.688L414.531 251.906C416.344 253.656 416.187 258.5 414.687 259.938L281.484 382.469C279.844 384 277.453 384.438 275.438 383.562C273.344 382.656 272 380.625 272 378.406V288H124.828C117.75 288 112 282.25 112 275.188V236.812Z" />
        </Icon>
    </>
}

import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `flute` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/flute?s=light flute}
 * @preview ![flute](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgMjMyQzMwNi43NSAyMzIgMjk2IDI0Mi43NSAyOTYgMjU2UzMwNi43NSAyODAgMzIwIDI4MFMzNDQgMjY5LjI1IDM0NCAyNTZTMzMzLjI1IDIzMiAzMjAgMjMyWk01OTIgMTYwSDQ4QzIxLjYgMTYwIDAgMTgxLjYgMCAyMDhWMzA0QzAgMzMwLjQgMjEuNiAzNTIgNDggMzUySDU5MkM2MTguNCAzNTIgNjQwIDMzMC40IDY0MCAzMDRWMjA4QzY0MCAxODEuNiA2MTguNCAxNjAgNTkyIDE2MFpNMTEyIDMyMEg0OEMzOS4xNjQgMzIwIDMyIDMxMi44MzYgMzIgMzA0VjIwOEMzMiAxOTkuMTY0IDM5LjE2NCAxOTIgNDggMTkySDExMlYzMjBaTTYwOCAzMDRDNjA4IDMxMi44MzYgNjAwLjgzOCAzMjAgNTkyIDMyMEgxNDRWMTkySDU5MkM2MDAuODM4IDE5MiA2MDggMTk5LjE2NCA2MDggMjA4VjMwNFpNNTEyIDIzMkM0OTguNzUgMjMyIDQ4OCAyNDIuNzUgNDg4IDI1NlM0OTguNzUgMjgwIDUxMiAyODBTNTM2IDI2OS4yNSA1MzYgMjU2UzUyNS4yNSAyMzIgNTEyIDIzMlpNNDE2IDIzMkM0MDIuNzUgMjMyIDM5MiAyNDIuNzUgMzkyIDI1NlM0MDIuNzUgMjgwIDQxNiAyODBTNDQwIDI2OS4yNSA0NDAgMjU2UzQyOS4yNSAyMzIgNDE2IDIzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Flute(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M320 232C306.75 232 296 242.75 296 256S306.75 280 320 280S344 269.25 344 256S333.25 232 320 232ZM592 160H48C21.6 160 0 181.6 0 208V304C0 330.4 21.6 352 48 352H592C618.4 352 640 330.4 640 304V208C640 181.6 618.4 160 592 160ZM112 320H48C39.164 320 32 312.836 32 304V208C32 199.164 39.164 192 48 192H112V320ZM608 304C608 312.836 600.838 320 592 320H144V192H592C600.838 192 608 199.164 608 208V304ZM512 232C498.75 232 488 242.75 488 256S498.75 280 512 280S536 269.25 536 256S525.25 232 512 232ZM416 232C402.75 232 392 242.75 392 256S402.75 280 416 280S440 269.25 440 256S429.25 232 416 232Z" />
        </Icon>
    </>
}
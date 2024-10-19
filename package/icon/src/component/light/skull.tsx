
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `skull` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/skull?s=light skull}
 * @preview ![skull](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjAgMTkyQzEyNC42NjYgMTkyIDk2IDIyMC42NjYgOTYgMjU2Qzk2IDI5MS4zMzIgMTI0LjY2NiAzMjAgMTYwIDMyMFMyMjQgMjkxLjMzMiAyMjQgMjU2QzIyNCAyMjAuNjY2IDE5NS4zMzQgMTkyIDE2MCAxOTJaTTE2MCAyODhDMTQyLjMwMSAyODggMTI4IDI3My42OTkgMTI4IDI1NkMxMjggMjM4LjI5OSAxNDIuMzAxIDIyNCAxNjAgMjI0UzE5MiAyMzguMjk5IDE5MiAyNTZDMTkyIDI3My42OTkgMTc3LjY5OSAyODggMTYwIDI4OFpNMjU2IDBDMTE0LjYyNSAwIDAgMTAwLjI1IDAgMjI0QzAgMjk0LjEyNSAzNi44NzUgMzU2LjYyNSA5NC41IDM5Ny43NUMxMDQuMjUgNDA0LjYyNSAxMDkuNzUgNDE1Ljc1IDEwOCA0MjcuNjI1TDEwMC44NzUgNDQ4Ljg3NUM5MC42MjUgNDgwIDExMy43NSA1MTIgMTQ2LjUgNTEySDM2NS41QzM5OC4yNSA1MTIgNDIxLjM3NSA0ODAgNDExLjEyNSA0NDguODc1TDQwNCA0MjcuNjI1QzQwMi4yNSA0MTUuODc1IDQwNy43NSA0MDQuNjI1IDQxNy41IDM5Ny43NUM0NzUuMTI1IDM1Ni42MjUgNTEyIDI5NC4xMjUgNTEyIDIyNEM1MTIgMTAwLjI1IDM5Ny4zNzUgMCAyNTYgMFpNMzk4Ljg3NSAzNzEuNjI1QzM3OS4yNSAzODUuNjI1IDM2OSA0MDguNzUgMzcyLjI1IDQzMkMzNzIuOTk0IDQzNi4wOTYgMzcxLjgyNiA0MzIuMjU4IDM4MC43NSA0NTguODc1QzM4MyA0NjYuMTUyIDM3OS40NTkgNDc5Ljg3NSAzNjUuNSA0NzkuODc1SDMyMFY0MzEuODc1QzMyMCA0MjMuMDc0IDMxMi44MDEgNDE1Ljg3NSAzMDQgNDE1Ljg3NVMyODggNDIzLjA3NCAyODggNDMxLjg3NVY0NzkuODc1SDIyNFY0MzEuODc1QzIyNCA0MjMuMDc0IDIxNi44MDEgNDE1Ljg3NSAyMDggNDE1Ljg3NVMxOTIgNDIzLjA3NCAxOTIgNDMxLjg3NVY0NzkuODc1SDE0Ni41QzEzNS4xNjQgNDc5Ljg3NSAxMjcuOTMyIDQ2OC44MzIgMTMxLjI1IDQ1OC44NzVDMTQwLjE3NiA0MzIuMjU0IDEzOS4wMDQgNDM2LjEgMTM5Ljc1IDQzMkMxNDMgNDA4Ljc1IDEzMi43NSAzODUuNjI1IDExMy4xMjUgMzcxLjYyNUM2MS41IDMzNC44NzUgMzIgMjgxLjEyNSAzMiAyMjRDMzIgMTE4LjEyNSAxMzIuNSAzMiAyNTYgMzJTNDgwIDExOC4xMjUgNDgwIDIyNEM0ODAgMjgxLjEyNSA0NTAuNSAzMzQuODc1IDM5OC44NzUgMzcxLjYyNVpNMzUyIDE5MkMzMTYuNjY2IDE5MiAyODggMjIwLjY2NiAyODggMjU2QzI4OCAyOTEuMzMyIDMxNi42NjYgMzIwIDM1MiAzMjBTNDE2IDI5MS4zMzIgNDE2IDI1NkM0MTYgMjIwLjY2NiAzODcuMzM0IDE5MiAzNTIgMTkyWk0zNTIgMjg4QzMzNC4zMDEgMjg4IDMyMCAyNzMuNjk5IDMyMCAyNTZDMzIwIDIzOC4yOTkgMzM0LjMwMSAyMjQgMzUyIDIyNFMzODQgMjM4LjI5OSAzODQgMjU2QzM4NCAyNzMuNjk5IDM2OS42OTkgMjg4IDM1MiAyODhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Skull(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M160 192C124.666 192 96 220.666 96 256C96 291.332 124.666 320 160 320S224 291.332 224 256C224 220.666 195.334 192 160 192ZM160 288C142.301 288 128 273.699 128 256C128 238.299 142.301 224 160 224S192 238.299 192 256C192 273.699 177.699 288 160 288ZM256 0C114.625 0 0 100.25 0 224C0 294.125 36.875 356.625 94.5 397.75C104.25 404.625 109.75 415.75 108 427.625L100.875 448.875C90.625 480 113.75 512 146.5 512H365.5C398.25 512 421.375 480 411.125 448.875L404 427.625C402.25 415.875 407.75 404.625 417.5 397.75C475.125 356.625 512 294.125 512 224C512 100.25 397.375 0 256 0ZM398.875 371.625C379.25 385.625 369 408.75 372.25 432C372.994 436.096 371.826 432.258 380.75 458.875C383 466.152 379.459 479.875 365.5 479.875H320V431.875C320 423.074 312.801 415.875 304 415.875S288 423.074 288 431.875V479.875H224V431.875C224 423.074 216.801 415.875 208 415.875S192 423.074 192 431.875V479.875H146.5C135.164 479.875 127.932 468.832 131.25 458.875C140.176 432.254 139.004 436.1 139.75 432C143 408.75 132.75 385.625 113.125 371.625C61.5 334.875 32 281.125 32 224C32 118.125 132.5 32 256 32S480 118.125 480 224C480 281.125 450.5 334.875 398.875 371.625ZM352 192C316.666 192 288 220.666 288 256C288 291.332 316.666 320 352 320S416 291.332 416 256C416 220.666 387.334 192 352 192ZM352 288C334.301 288 320 273.699 320 256C320 238.299 334.301 224 352 224S384 238.299 384 256C384 273.699 369.699 288 352 288Z" />
        </Icon>
    </>
}
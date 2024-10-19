
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `ice-cream` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ice-cream?s=solid ice-cream}
 * @preview ![ice-cream](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTUuMzc1IDQ5My43NDlDMjAwLjUgNTA0Ljg3NCAyMTEuNzUgNTExLjk5OSAyMjQgNTExLjk5OVMyNDcuNSA1MDQuODc0IDI1Mi42MjUgNDkzLjc0OUwzNTIgMjg4SDk2TDE5NS4zNzUgNDkzLjc0OVpNMzY4IDE2MC4xNDFIMzY3QzM2Ny42NDQgMTU0LjU5NiAzNjcuOTYgMTQ5LjA2MyAzNjcuOTYgMTQzLjU2N0MzNjcuOTYgMTA2Ljk1NiAzMzguNzMgLTAuMDAxIDIyNCAtMC4wMDFDMTA4LjI2NCAtMC4wMDEgODAuMDQgMTA3LjE5NSA4MC4wNCAxNDMuNTY3QzgwLjA0IDE0OS4wNjMgODAuMzU2IDE1NC41OTYgODEgMTYwLjE0MUg4MEM1My41IDE2MC4xNDEgMzIgMTgxLjYxIDMyIDIwOC4wN1M1My41IDI1NiA4MCAyNTZIMzY4QzM5NC41IDI1NiA0MTYgMjM0LjUzMSA0MTYgMjA4LjA3UzM5NC41IDE2MC4xNDEgMzY4IDE2MC4xNDFaICI+PC9wYXRoPjwvc3ZnPg==|width=32|height=32)
 */
export default function IceCream(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M195.375 493.749C200.5 504.874 211.75 511.999 224 511.999S247.5 504.874 252.625 493.749L352 288H96L195.375 493.749ZM368 160.141H367C367.644 154.596 367.96 149.063 367.96 143.567C367.96 106.956 338.73 -0.001 224 -0.001C108.264 -0.001 80.04 107.195 80.04 143.567C80.04 149.063 80.356 154.596 81 160.141H80C53.5 160.141 32 181.61 32 208.07S53.5 256 80 256H368C394.5 256 416 234.531 416 208.07S394.5 160.141 368 160.141Z " />
        </Icon>
    </>
}
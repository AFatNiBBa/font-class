
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `backpack` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/backpack?s=solid backpack}
 * @preview ![backpack](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgMzIwSDEyOEMxMTAuMzc1IDMyMCA5NiAzMzQuMzc1IDk2IDM1MlYzODRIMzUyVjM1MkMzNTIgMzM0LjM3NSAzMzcuNjI1IDMyMCAzMjAgMzIwWk05NiA1MTJIMzUyVjQxNkg5NlY1MTJaTTMyMCA4MEgzMTJWNTZDMzEyIDI1LjEyNSAyODYuODc1IDAgMjU2IDBIMTkyQzE2MS4xMjUgMCAxMzYgMjUuMTI1IDEzNiA1NlY4MEgxMjhDNTcuMjUgODAgMCAxMzcuMjUgMCAyMDhWNDQ4QzAgNDgzLjM3NSAyOC42MjUgNTEyIDY0IDUxMlYzNTJDNjQgMzE2Ljc1IDkyLjc1IDI4OCAxMjggMjg4SDMyMEMzNTUuMjUgMjg4IDM4NCAzMTYuNzUgMzg0IDM1MlY1MTJDNDE5LjM3NSA1MTIgNDQ4IDQ4My4zNzUgNDQ4IDQ0OFYyMDhDNDQ4IDEzNy4yNSAzOTAuNzUgODAgMzIwIDgwWk0xODQgNTZDMTg0IDUxLjYyNSAxODcuNjI1IDQ4IDE5MiA0OEgyNTZDMjYwLjM3NSA0OCAyNjQgNTEuNjI1IDI2NCA1NlY4MEgxODRWNTZaTTMyMCAyMDBDMzIwIDIwNC4zNzUgMzE2LjM3NSAyMDggMzEyIDIwOEgxMzZDMTMxLjYyNSAyMDggMTI4IDIwNC4zNzUgMTI4IDIwMFYxODRDMTI4IDE3OS42MjUgMTMxLjYyNSAxNzYgMTM2IDE3NkgzMTJDMzE2LjM3NSAxNzYgMzIwIDE3OS42MjUgMzIwIDE4NFYyMDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Backpack(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M320 320H128C110.375 320 96 334.375 96 352V384H352V352C352 334.375 337.625 320 320 320ZM96 512H352V416H96V512ZM320 80H312V56C312 25.125 286.875 0 256 0H192C161.125 0 136 25.125 136 56V80H128C57.25 80 0 137.25 0 208V448C0 483.375 28.625 512 64 512V352C64 316.75 92.75 288 128 288H320C355.25 288 384 316.75 384 352V512C419.375 512 448 483.375 448 448V208C448 137.25 390.75 80 320 80ZM184 56C184 51.625 187.625 48 192 48H256C260.375 48 264 51.625 264 56V80H184V56ZM320 200C320 204.375 316.375 208 312 208H136C131.625 208 128 204.375 128 200V184C128 179.625 131.625 176 136 176H312C316.375 176 320 179.625 320 184V200Z" />
        </Icon>
    </>
}
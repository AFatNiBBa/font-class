
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bell-plus` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bell-plus?s=solid bell-plus}
 * @preview ![bell-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgNTEyQzI1OS4zNzUgNTEyIDI4OCA0ODMuMzc1IDI4OCA0NDhIMTYwQzE2MCA0ODMuMzc1IDE4OC42MjUgNTEyIDIyNCA1MTJaTTQzOS4zNzUgMzYyLjI1QzQyMC4xMjUgMzQxLjUgMzgzLjg3NSAzMTAuMjUgMzgzLjg3NSAyMDhDMzgzLjg3NSAxMzAuMjUgMzI5LjUgNjguMTI1IDI1NiA1Mi44NzVWMzJDMjU2IDE0LjM3NSAyNDEuNjI1IDAgMjI0IDBDMjA2LjI1IDAgMTkyIDE0LjM3NSAxOTIgMzJWNTIuODc1QzExOC41IDY4LjEyNSA2NC4xMjUgMTMwLjI1IDY0LjEyNSAyMDhDNjQuMTI1IDMxMC4yNSAyNy44NzUgMzQxLjUgOC42MjUgMzYyLjI1QzMgMzY4LjEyNSAwIDM3NS44NzUgMCAzODRDMC4xMjUgNDAwLjM3NSAxMyA0MTYgMzIuMTI1IDQxNkg0MTUuODc1QzQzNSA0MTYgNDQ3Ljg3NSA0MDAuMzc1IDQ0OCAzODRDNDQ4IDM3NS44NzUgNDQ1IDM2OC4xMjUgNDM5LjM3NSAzNjIuMjVaTTI4OCAyNjRIMjQ4VjMwNEMyNDggMzE3LjI1IDIzNy4yNSAzMjggMjI0IDMyOFMyMDAgMzE3LjI1IDIwMCAzMDRWMjY0SDE2MEMxNDYuNzUgMjY0IDEzNiAyNTMuMjUgMTM2IDI0MFMxNDYuNzUgMjE2IDE2MCAyMTZIMjAwVjE3NkMyMDAgMTYyLjc1IDIxMC43NSAxNTIgMjI0IDE1MlMyNDggMTYyLjc1IDI0OCAxNzZWMjE2SDI4OEMzMDEuMjUgMjE2IDMxMiAyMjYuNzUgMzEyIDI0MFMzMDEuMjUgMjY0IDI4OCAyNjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BellPlus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224 512C259.375 512 288 483.375 288 448H160C160 483.375 188.625 512 224 512ZM439.375 362.25C420.125 341.5 383.875 310.25 383.875 208C383.875 130.25 329.5 68.125 256 52.875V32C256 14.375 241.625 0 224 0C206.25 0 192 14.375 192 32V52.875C118.5 68.125 64.125 130.25 64.125 208C64.125 310.25 27.875 341.5 8.625 362.25C3 368.125 0 375.875 0 384C0.125 400.375 13 416 32.125 416H415.875C435 416 447.875 400.375 448 384C448 375.875 445 368.125 439.375 362.25ZM288 264H248V304C248 317.25 237.25 328 224 328S200 317.25 200 304V264H160C146.75 264 136 253.25 136 240S146.75 216 160 216H200V176C200 162.75 210.75 152 224 152S248 162.75 248 176V216H288C301.25 216 312 226.75 312 240S301.25 264 288 264Z" />
        </Icon>
    </>
}
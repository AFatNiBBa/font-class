
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bell` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bell?s=duotone bell}
 * @preview ![bell](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQzOS4zNzUgMzYyLjI1QzQyMC4xMjUgMzQxLjUgMzgzLjg3NSAzMTAuMjUgMzgzLjg3NSAyMDhDMzgzLjg3NSAxMzAuMjUgMzI5LjUgNjguMTI1IDI1NiA1Mi44NzVWMzJDMjU2IDE0LjM3NSAyNDEuNjI1IDAgMjI0IDBTMTkyIDE0LjM3NSAxOTIgMzJWNTIuODc1QzExOC41IDY4LjEyNSA2NC4xMjUgMTMwLjI1IDY0LjEyNSAyMDhDNjQuMTI1IDMxMC4yNSAyNy44NzUgMzQxLjUgOC42MjUgMzYyLjI1QzIuNjI1IDM2OC43NSAwIDM3Ni41IDAgMzg0QzAuMTI1IDQwMC4zNzUgMTMgNDE2IDMyLjEyNSA0MTZINDE1Ljg3NUM0MzUgNDE2IDQ0Ny44NzUgNDAwLjM3NSA0NDggMzg0QzQ0OCAzNzYuNSA0NDUuMzc1IDM2OC43NSA0MzkuMzc1IDM2Mi4yNVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMjg4IDQ0OEMyODggNDgzLjM3NSAyNTkuMzc1IDUxMiAyMjQgNTEyUzE2MCA0ODMuMzc1IDE2MCA0NDhIMjg4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Bell(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M439.375 362.25C420.125 341.5 383.875 310.25 383.875 208C383.875 130.25 329.5 68.125 256 52.875V32C256 14.375 241.625 0 224 0S192 14.375 192 32V52.875C118.5 68.125 64.125 130.25 64.125 208C64.125 310.25 27.875 341.5 8.625 362.25C2.625 368.75 0 376.5 0 384C0.125 400.375 13 416 32.125 416H415.875C435 416 447.875 400.375 448 384C448 376.5 445.375 368.75 439.375 362.25Z" />
            <path d="M288 448C288 483.375 259.375 512 224 512S160 483.375 160 448H288Z" />
        </Icon>
    </>
}

import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `hand-holding-medical` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding-medical?s=duotone hand-holding-medical}
 * @preview ![hand-holding-medical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU1OS43MjkgMzkyLjIxMUw0MjQuNjc2IDQ5MS43MjdDNDA2Ljg5NiA1MDQuODEyIDM4NS4wMDYgNTEyIDM2Mi45NzcgNTEySDE1Ljk5OEM3LjI1IDUxMiAwIDUwNC43NSAwIDQ5NlY0MDAuMDIzQzAgMzkxLjI3MyA3LjI1IDM4NC4wMjMgMTUuOTk4IDM4NC4wMjNINzEuMzY5TDExNy44NjcgMzQ2LjI4MUMxMzguODY1IDMyOS4yODEgMTY0Ljk4OCAzMjAuMDMxIDE5MS45ODYgMzIwLjAzMUgzNTEuOTc3QzM3MS40NzUgMzIwLjAzMSAzODYuODQ4IDMzNy40MDYgMzgzLjU5OCAzNTcuNDA2QzM4MC45NzUgMzczLjE0OCAzNjYuMjI1IDM4NC4wMjMgMzUwLjIyNyAzODQuMDIzSDI3MS45OEMyNjMuMjMyIDM4NC4wMjMgMjU1Ljk4MiAzOTEuMjczIDI1NS45ODIgNDAwLjAyM0MyNTUuOTgyIDQwOC43NjYgMjYzLjIzMiA0MTYuMDE2IDI3MS45OCA0MTYuMDE2SDM5Mi41OTJMNTEyLjI2NCAzMjcuODQ0QzUzMC4wNTkgMzE0LjY1NiA1NTUuMDcyIDMxOC41IDU2OC4xOTcgMzM2LjMxMkM1ODEuMzA1IDM1NC4wOTQgNTc3LjUxIDM3OS4xMTcgNTU5LjcyOSAzOTIuMjExWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00MDAgOTZWMTYwQzQwMCAxNjguODM2IDM5Mi44MzYgMTc2IDM4NCAxNzZIMzIwVjI0MEMzMjAgMjQ4LjgzNiAzMTIuODM2IDI1NiAzMDQgMjU2SDI0MEMyMzEuMTY0IDI1NiAyMjQgMjQ4LjgzNiAyMjQgMjQwVjE3NkgxNjBDMTUxLjE2NCAxNzYgMTQ0IDE2OC44MzYgMTQ0IDE2MFY5NkMxNDQgODcuMTYyIDE1MS4xNjQgODAgMTYwIDgwSDIyNFYxNkMyMjQgNy4xNjIgMjMxLjE2NCAwIDI0MCAwSDMwNEMzMTIuODM2IDAgMzIwIDcuMTYyIDMyMCAxNlY4MEgzODRDMzkyLjgzNiA4MCA0MDAgODcuMTYyIDQwMCA5NloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function HandHoldingMedical(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path opacity={.4} d="M559.729 392.211L424.676 491.727C406.896 504.812 385.006 512 362.977 512H15.998C7.25 512 0 504.75 0 496V400.023C0 391.273 7.25 384.023 15.998 384.023H71.369L117.867 346.281C138.865 329.281 164.988 320.031 191.986 320.031H351.977C371.475 320.031 386.848 337.406 383.598 357.406C380.975 373.148 366.225 384.023 350.227 384.023H271.98C263.232 384.023 255.982 391.273 255.982 400.023C255.982 408.766 263.232 416.016 271.98 416.016H392.592L512.264 327.844C530.059 314.656 555.072 318.5 568.197 336.312C581.305 354.094 577.51 379.117 559.729 392.211Z" />
            <path d="M400 96V160C400 168.836 392.836 176 384 176H320V240C320 248.836 312.836 256 304 256H240C231.164 256 224 248.836 224 240V176H160C151.164 176 144 168.836 144 160V96C144 87.162 151.164 80 160 80H224V16C224 7.162 231.164 0 240 0H304C312.836 0 320 7.162 320 16V80H384C392.836 80 400 87.162 400 96Z" />
        </Icon>
    </>
}
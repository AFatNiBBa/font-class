
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cauldron` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cauldron?s=duotone cauldron}
 * @preview ![cauldron](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE2MCAwQzE0Mi4zNzUgMCAxMjggMTQuMzc1IDEyOCAzMlMxNDIuMzc1IDY0IDE2MCA2NFMxOTIgNDkuNjI1IDE5MiAzMlMxNzcuNjI1IDAgMTYwIDBaTTI3MiAzMkMyNDUuNSAzMiAyMjQgNTMuNSAyMjQgODBTMjQ1LjUgMTI4IDI3MiAxMjhTMzIwIDEwNi41IDMyMCA4MFMyOTguNSAzMiAyNzIgMzJaTTk2IDI4OEM5NiAzMDUuNjcyIDExMC4zMjYgMzIwIDEyOCAzMjBTMTYwIDMwNS42NzIgMTYwIDI4OFYxNjBIOTZWMjg4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00MzQgMjI0SDQxNC4yNUM0MzUuNjI1IDI2Mi41IDQ0OCAzMDUuMjUgNDQ4IDM0NS42MjVDNDQ4IDM4NC42MjUgNDM2LjEyNSA0MTYuMjUgNDE2IDQ0MS4xMjVWNDg4QzQxNiA1MDEuMjUgNDA1LjI1IDUxMiAzOTIgNTEyUzM2OCA1MDEuMjUgMzY4IDQ4OFY0ODAuNUMzMjkgNTAxLjc1IDI3OC44NzUgNTEyIDIyNCA1MTJTMTE5IDUwMS43NSA4MCA0ODAuNVY0ODhDODAgNTAxLjI1IDY5LjI1IDUxMiA1NiA1MTJTMzIgNTAxLjI1IDMyIDQ4OFY0NDEuMTI1QzExLjg3NSA0MTYuMjUgMCAzODQuNjI1IDAgMzQ1LjYyNUMwIDMwNS4yNSAxMi4zNzUgMjYyLjUgMzMuNzUgMjI0SDE0QzYuMjUgMjI0IDAgMjE4LjYyNSAwIDIxMlYxNzJDMCAxNjUuMzc1IDYuMjUgMTYwIDE0IDE2MEg5NlYyODhDOTYgMzA1LjY3MiAxMTAuMzI2IDMyMCAxMjggMzIwUzE2MCAzMDUuNjcyIDE2MCAyODhWMTYwSDQzNEM0NDEuNzUgMTYwIDQ0OCAxNjUuMzc1IDQ0OCAxNzJWMjEyQzQ0OCAyMTguNjI1IDQ0MS43NSAyMjQgNDM0IDIyNFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Cauldron(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M160 0C142.375 0 128 14.375 128 32S142.375 64 160 64S192 49.625 192 32S177.625 0 160 0ZM272 32C245.5 32 224 53.5 224 80S245.5 128 272 128S320 106.5 320 80S298.5 32 272 32ZM96 288C96 305.672 110.326 320 128 320S160 305.672 160 288V160H96V288Z" />
            <path d="M434 224H414.25C435.625 262.5 448 305.25 448 345.625C448 384.625 436.125 416.25 416 441.125V488C416 501.25 405.25 512 392 512S368 501.25 368 488V480.5C329 501.75 278.875 512 224 512S119 501.75 80 480.5V488C80 501.25 69.25 512 56 512S32 501.25 32 488V441.125C11.875 416.25 0 384.625 0 345.625C0 305.25 12.375 262.5 33.75 224H14C6.25 224 0 218.625 0 212V172C0 165.375 6.25 160 14 160H96V288C96 305.672 110.326 320 128 320S160 305.672 160 288V160H434C441.75 160 448 165.375 448 172V212C448 218.625 441.75 224 434 224Z" />
        </Icon>
    </>
}
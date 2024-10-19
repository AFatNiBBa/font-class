
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-right-to-line` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-to-line?s=duotone arrow-right-to-line}
 * @preview ![arrow-right-to-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCA5NlY0MTZDMzg0IDQzMy42ODggMzk4LjMxMiA0NDggNDE2IDQ0OFM0NDggNDMzLjY4OCA0NDggNDE2Vjk2QzQ0OCA3OC4zMTIgNDMzLjY4OCA2NCA0MTYgNjRTMzg0IDc4LjMxMiAzODQgOTZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTEzNy4zNzUgMTA1LjM3NUMxNDkuODc1IDkyLjg3NSAxNzAuMTI1IDkyLjg3NSAxODIuNjI1IDEwNS4zNzVMMzEwLjYyNSAyMzMuMzc1QzMyMy4xMjUgMjQ1Ljg3NSAzMjMuMTI1IDI2Ni4xMjUgMzEwLjYyNSAyNzguNjI1TDE4Mi42MjUgNDA2LjYyNUMxNzAuMTI1IDQxOS4xMjUgMTQ5Ljg3NSA0MTkuMTI1IDEzNy4zNzUgNDA2LjYyNUMxMzEuMTI1IDQwMC4zNzUgMTI4IDM5Mi4xODggMTI4IDM4NFMxMzEuMTI1IDM2Ny42MjUgMTM3LjM3NSAzNjEuMzc1TDIxMC43NSAyODhIMzJDMTQuMzEyIDI4OCAwIDI3My42ODggMCAyNTZTMTQuMzEyIDIyNCAzMiAyMjRIMjEwLjc1TDEzNy4zNzUgMTUwLjYyNUMxMjQuODc1IDEzOC4xMjUgMTI0Ljg3NSAxMTcuODc1IDEzNy4zNzUgMTA1LjM3NVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function ArrowRightToLine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M384 96V416C384 433.688 398.312 448 416 448S448 433.688 448 416V96C448 78.312 433.688 64 416 64S384 78.312 384 96Z" />
            <path d="M137.375 105.375C149.875 92.875 170.125 92.875 182.625 105.375L310.625 233.375C323.125 245.875 323.125 266.125 310.625 278.625L182.625 406.625C170.125 419.125 149.875 419.125 137.375 406.625C131.125 400.375 128 392.188 128 384S131.125 367.625 137.375 361.375L210.75 288H32C14.312 288 0 273.688 0 256S14.312 224 32 224H210.75L137.375 150.625C124.875 138.125 124.875 117.875 137.375 105.375Z" />
        </Icon>
    </>
}
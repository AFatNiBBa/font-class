
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `greater-than` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/greater-than?s=duotone greater-than}
 * @preview ![greater-than](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCAyNTUuOTQ1QzM4NCAyNzEuMDk0IDM3NS40MzggMjg0LjkzMiAzNjEuODkxIDI5MS43MUw1Ny44OTggNDQzLjY0MkMzNC4yMzIgNDU1LjQ3IDExLjkxNSA0NDEuMTExIDQuMjI4IDQyNS43NDRDLTUuNjQ3IDQwNi4wMDMgMi4zNjggMzgxLjk4MiAyMi4xMTggMzcyLjExMkwyNTQuNTY2IDI1NS45NDVMMjIuMTE4IDEzOS43NzhDMi4zNjggMTI5LjkwNyAtNS42NDcgMTA1Ljg4NyA0LjIyOCA4Ni4xNDZDMTQuMTAyIDY2LjM0MiAzOC4xMDIgNTguMzQ2IDU3Ljg5OCA2OC4yNDdMMzYxLjg5MSAyMjAuMTc5QzM3NS40MzggMjI2Ljk1OCAzODQgMjQwLjc5NSAzODQgMjU1Ljk0NVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function GreaterThan(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M384 255.945C384 271.094 375.438 284.932 361.891 291.71L57.898 443.642C34.232 455.47 11.915 441.111 4.228 425.744C-5.647 406.003 2.368 381.982 22.118 372.112L254.566 255.945L22.118 139.778C2.368 129.907 -5.647 105.887 4.228 86.146C14.102 66.342 38.102 58.346 57.898 68.247L361.891 220.179C375.438 226.958 384 240.795 384 255.945Z" />
        </Icon>
    </>
}
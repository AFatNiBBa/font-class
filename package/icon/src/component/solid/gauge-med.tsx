
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-med` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-med?s=solid gauge-med}
 * @preview ![gauge-med](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODggMzJDMTI5IDMyIDAgMTYxIDAgMzIwQzAgMzcyLjc1IDE0LjI1IDQyMi4yNSAzOSA0NjQuNzVDNDQuNjI1IDQ3NC4zNzUgNTUuMzc1IDQ4MCA2Ni41IDQ4MEg1MDkuNUM1MjAuNjI1IDQ4MCA1MzEuMzc1IDQ3NC4zNzUgNTM3IDQ2NC43NUM1NjEuNzUgNDIyLjI1IDU3NiAzNzIuNzUgNTc2IDMyMEM1NzYgMTYxIDQ0NyAzMiAyODggMzJaTTk2IDM4NEM3OC4zNzUgMzg0IDY0IDM2OS42MjUgNjQgMzUyUzc4LjM3NSAzMjAgOTYgMzIwUzEyOCAzMzQuMzc1IDEyOCAzNTJTMTEzLjYyNSAzODQgOTYgMzg0Wk0xNDQgMjI0QzEyNi4zNzUgMjI0IDExMiAyMDkuNjI1IDExMiAxOTJTMTI2LjM3NSAxNjAgMTQ0IDE2MFMxNzYgMTc0LjM3NSAxNzYgMTkyUzE2MS42MjUgMjI0IDE0NCAyMjRaTTM0My4xMjUgNDE2SDIzMi44NzVDMjI3LjM3NSA0MDYuNSAyMjQgMzk1Ljc1IDIyNCAzODRDMjI0IDM1Ny4xMjUgMjQwLjUgMzM0LjI1IDI2NCAzMjQuNzVWMTI4QzI2NCAxMTQuNzUgMjc0Ljc1IDEwNCAyODggMTA0UzMxMiAxMTQuNzUgMzEyIDEyOFYzMjQuNzVDMzM1LjUgMzM0LjI1IDM1MiAzNTcuMTI1IDM1MiAzODRDMzUyIDM5NS43NSAzNDguNjI1IDQwNi41IDM0My4xMjUgNDE2Wk00MDAgMTkyQzQwMCAxNzQuMzc1IDQxNC4zNzUgMTYwIDQzMiAxNjBTNDY0IDE3NC4zNzUgNDY0IDE5MlM0NDkuNjI1IDIyNCA0MzIgMjI0UzQwMCAyMDkuNjI1IDQwMCAxOTJaTTQ4MCAzODRDNDYyLjM3NSAzODQgNDQ4IDM2OS42MjUgNDQ4IDM1MlM0NjIuMzc1IDMyMCA0ODAgMzIwUzUxMiAzMzQuMzc1IDUxMiAzNTJTNDk3LjYyNSAzODQgNDgwIDM4NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function GaugeMed(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M288 32C129 32 0 161 0 320C0 372.75 14.25 422.25 39 464.75C44.625 474.375 55.375 480 66.5 480H509.5C520.625 480 531.375 474.375 537 464.75C561.75 422.25 576 372.75 576 320C576 161 447 32 288 32ZM96 384C78.375 384 64 369.625 64 352S78.375 320 96 320S128 334.375 128 352S113.625 384 96 384ZM144 224C126.375 224 112 209.625 112 192S126.375 160 144 160S176 174.375 176 192S161.625 224 144 224ZM343.125 416H232.875C227.375 406.5 224 395.75 224 384C224 357.125 240.5 334.25 264 324.75V128C264 114.75 274.75 104 288 104S312 114.75 312 128V324.75C335.5 334.25 352 357.125 352 384C352 395.75 348.625 406.5 343.125 416ZM400 192C400 174.375 414.375 160 432 160S464 174.375 464 192S449.625 224 432 224S400 209.625 400 192ZM480 384C462.375 384 448 369.625 448 352S462.375 320 480 320S512 334.375 512 352S497.625 384 480 384Z" />
        </Icon>
    </>
}
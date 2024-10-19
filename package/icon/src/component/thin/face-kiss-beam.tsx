
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `face-kiss-beam` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-kiss-beam?s=thin face-kiss-beam}
 * @preview ![face-kiss-beam](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNzYgMTM2QzEzOC44MjggMTM2IDEyMi4wMzEgMTk4Ljg3NSAxMjAuMjM0IDIwNi4wNjJDMTE5LjE3MiAyMTAuMzQ0IDEyMS43NjYgMjE0LjY4OCAxMjYuMDYyIDIxNS43NUMxMzAuMjUgMjE2Ljc4MSAxMzQuNjcyIDIxNC4xODggMTM1Ljc2NiAyMDkuOTM4QzEzOS41MzEgMTk0LjkwNiAxNTUuMDMxIDE1MiAxNzYgMTUyUzIxMi40NjkgMTk0LjkwNiAyMTYuMjM0IDIwOS45MzhDMjE3LjE1NiAyMTMuNTYyIDIyMC40MDYgMjE2IDIyNCAyMTZDMjI0LjY0MSAyMTYgMjI1LjI5NyAyMTUuOTA2IDIyNS45MzggMjE1Ljc1QzIzMC4yMzQgMjE0LjY4OCAyMzIuODI4IDIxMC4zNDQgMjMxLjc2NiAyMDYuMDYyQzIyOS45NjkgMTk4Ljg3NSAyMTMuMTcyIDEzNiAxNzYgMTM2Wk0zMzYgMTM2QzI5OC44MjggMTM2IDI4Mi4wMzEgMTk4Ljg3NSAyODAuMjM0IDIwNi4wNjJDMjc5LjE3MiAyMTAuMzQ0IDI4MS43NjYgMjE0LjY4NyAyODYuMDYyIDIxNS43NUMyOTAuMjE5IDIxNi43ODEgMjk0LjY3MiAyMTQuMTg4IDI5NS43NjYgMjA5LjkzOEMyOTkuNTMxIDE5NC45MDYgMzE1LjAzMSAxNTIgMzM2IDE1MlMzNzIuNDY5IDE5NC45MDYgMzc2LjIzNCAyMDkuOTM4QzM3Ny4xNTYgMjEzLjU2MiAzODAuNDA2IDIxNiAzODQgMjE2QzM4NC42NDEgMjE2IDM4NS4yOTcgMjE1LjkwNiAzODUuOTM4IDIxNS43NUMzOTAuMjM0IDIxNC42ODggMzkyLjgyOCAyMTAuMzQ0IDM5MS43NjYgMjA2LjA2MkMzODkuOTY5IDE5OC44NzUgMzczLjE3MiAxMzYgMzM2IDEzNlpNMjU2IDE2QzEyMy40NTMgMTYgMTYgMTIzLjQ1MyAxNiAyNTZTMTIzLjQ1MyA0OTYgMjU2IDQ5NlM0OTYgMzg4LjU0NyA0OTYgMjU2UzM4OC41NDcgMTYgMjU2IDE2Wk0yNTYgNDgwQzEzMi40ODQgNDgwIDMyIDM3OS41MTYgMzIgMjU2UzEzMi40ODQgMzIgMjU2IDMyUzQ4MCAxMzIuNDg0IDQ4MCAyNTZTMzc5LjUxNiA0ODAgMjU2IDQ4MFpNMzIwIDI5OS45NzdDMzIwIDI3MC43OSAyNTIuNDY5IDI1Ni43MjcgMjQ5LjU5NCAyNTYuMTM0QzI0NS4zNzUgMjU1LjM1MiAyNDEuMDQ3IDI1OC4wNzEgMjQwLjE1NiAyNjIuMzg0QzIzOS4yODEgMjY2LjcyNyAyNDIuMDc4IDI3MC45NDYgMjQ2LjQwNiAyNzEuODIxQzI3Mi41IDI3Ny4xMDIgMzA0IDI5MC44NTIgMzA0IDI5OS45NzdTMjcyLjUgMzIyLjg1MiAyNDYuNDA2IDMyOC4xMzRDMjQyLjY3MiAzMjguODg0IDI0MCAzMzIuMTY1IDI0MCAzMzUuOTc3UzI0Mi42NzIgMzQzLjA3MSAyNDYuNDA2IDM0My44MjFDMjcyLjUgMzQ5LjEwMiAzMDQgMzYyLjg1MiAzMDQgMzcxLjk3N1MyNzIuNSAzOTQuODUyIDI0Ni40MDYgNDAwLjEzNEMyNDIuMDc4IDQwMS4wMDkgMjM5LjI4MSA0MDUuMjI3IDI0MC4xNTYgNDA5LjU3MUMyNDAuOTM4IDQxMy4zNTIgMjQ0LjI2NiA0MTUuOTc3IDI0Ny45ODQgNDE1Ljk3N0MyNDguNTE2IDQxNS45NzcgMjQ5LjA2MiA0MTUuOTE1IDI0OS41OTQgNDE1LjgyMUMyNTIuNDY5IDQxNS4yMjcgMzIwIDQwMS4xNjUgMzIwIDM3MS45NzdDMzIwIDM1NC45MTUgMjk2Ljk1MyAzNDMuMDQgMjc3LjIxOSAzMzUuOTc3QzI5Ni45NTMgMzI4LjkxNSAzMjAgMzE3LjA0IDMyMCAyOTkuOTc3WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FaceKissBeam(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M176 136C138.828 136 122.031 198.875 120.234 206.062C119.172 210.344 121.766 214.688 126.062 215.75C130.25 216.781 134.672 214.188 135.766 209.938C139.531 194.906 155.031 152 176 152S212.469 194.906 216.234 209.938C217.156 213.562 220.406 216 224 216C224.641 216 225.297 215.906 225.938 215.75C230.234 214.688 232.828 210.344 231.766 206.062C229.969 198.875 213.172 136 176 136ZM336 136C298.828 136 282.031 198.875 280.234 206.062C279.172 210.344 281.766 214.687 286.062 215.75C290.219 216.781 294.672 214.188 295.766 209.938C299.531 194.906 315.031 152 336 152S372.469 194.906 376.234 209.938C377.156 213.562 380.406 216 384 216C384.641 216 385.297 215.906 385.938 215.75C390.234 214.688 392.828 210.344 391.766 206.062C389.969 198.875 373.172 136 336 136ZM256 16C123.453 16 16 123.453 16 256S123.453 496 256 496S496 388.547 496 256S388.547 16 256 16ZM256 480C132.484 480 32 379.516 32 256S132.484 32 256 32S480 132.484 480 256S379.516 480 256 480ZM320 299.977C320 270.79 252.469 256.727 249.594 256.134C245.375 255.352 241.047 258.071 240.156 262.384C239.281 266.727 242.078 270.946 246.406 271.821C272.5 277.102 304 290.852 304 299.977S272.5 322.852 246.406 328.134C242.672 328.884 240 332.165 240 335.977S242.672 343.071 246.406 343.821C272.5 349.102 304 362.852 304 371.977S272.5 394.852 246.406 400.134C242.078 401.009 239.281 405.227 240.156 409.571C240.938 413.352 244.266 415.977 247.984 415.977C248.516 415.977 249.062 415.915 249.594 415.821C252.469 415.227 320 401.165 320 371.977C320 354.915 296.953 343.04 277.219 335.977C296.953 328.915 320 317.04 320 299.977Z" />
        </Icon>
    </>
}

import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-phone-hangup` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-phone-hangup?s=regular circle-phone-hangup}
 * @preview ![circle-phone-hangup](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0NDhDMTUwLjEzMSA0NDggNjQgMzYxLjg2OSA2NCAyNTZTMTUwLjEzMSA2NCAyNTYgNjRTNDQ4IDE1MC4xMzEgNDQ4IDI1NlMzNjEuODY5IDQ0OCAyNTYgNDQ4Wk00MTcuNzUyIDIzNi43M0MzMjguNTU3IDE0Ny41MzMgMTgzLjQzOCAxNDcuNTQxIDk0LjI1NCAyMzYuNzI1Qzg5LjA2NiAyNDEuOTEyIDg4LjE2IDI0OS44NjcgOTIuMDQzIDI1Ni4wNjFMMTE5LjQ1NSAyOTkuOTEyQzEyMy40MiAzMDYuMjY2IDEzMS40NTkgMzA4Ljk0NSAxMzguNDk2IDMwNi4xNDhMMTkzLjI5MyAyODQuMjMyQzE5OS43NjggMjgxLjY3IDIwMy43NjIgMjc1LjA0NyAyMDMuMDIxIDI2OC4xNjJMMTk5LjU2OCAyMzMuNTY0QzIzNi4wNzIgMjIxLjEwMiAyNzUuODc1IDIyMS4wOTYgMzEyLjM2MyAyMzMuNTUzTDMwOC45MjQgMjY4LjE3NkMzMDguMjI3IDI3NS4wOCAzMTIuMTg3IDI4MS42MzkgMzE4LjYyOSAyODQuMjM0TDM3My40NjMgMzA2LjE2NkMzODAuNTMzIDMwOC45MjggMzg4LjU2MSAzMDYuMjkzIDM5Mi41NDkgMjk5Ljg5Nkw0MTkuOTUxIDI1Ni4wNTVDNDIzLjg0IDI0OS44NjcgNDIyLjkzNCAyNDEuOTEyIDQxNy43NTIgMjM2LjczWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CirclePhoneHangup(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448ZM417.752 236.73C328.557 147.533 183.438 147.541 94.254 236.725C89.066 241.912 88.16 249.867 92.043 256.061L119.455 299.912C123.42 306.266 131.459 308.945 138.496 306.148L193.293 284.232C199.768 281.67 203.762 275.047 203.021 268.162L199.568 233.564C236.072 221.102 275.875 221.096 312.363 233.553L308.924 268.176C308.227 275.08 312.187 281.639 318.629 284.234L373.463 306.166C380.533 308.928 388.561 306.293 392.549 299.896L419.951 256.055C423.84 249.867 422.934 241.912 417.752 236.73Z" />
        </Icon>
    </>
}
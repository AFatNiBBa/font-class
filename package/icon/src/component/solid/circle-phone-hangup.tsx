
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-phone-hangup` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-phone-hangup?s=solid circle-phone-hangup}
 * @preview ![circle-phone-hangup](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTQxOS45NTEgMjU2LjA1NUwzOTIuNTQ5IDI5OS44OTZDMzg4LjU2MSAzMDYuMjkzIDM4MC41MzMgMzA4LjkyOCAzNzMuNDYzIDMwNi4xNjZMMzE4LjYyOSAyODQuMjM0QzMxMi4xODggMjgxLjYzOSAzMDguMjI3IDI3NS4wOCAzMDguOTI0IDI2OC4xNzZMMzEyLjM2MyAyMzMuNTUzQzI3NS44NzUgMjIxLjA5NiAyMzYuMDcyIDIyMS4xMDIgMTk5LjU2OCAyMzMuNTY0TDIwMy4wMjEgMjY4LjE2MkMyMDMuNzYyIDI3NS4wNDcgMTk5Ljc2OCAyODEuNjcgMTkzLjI5MyAyODQuMjMyTDEzOC40OTYgMzA2LjE0OEMxMzEuNDU5IDMwOC45NDUgMTIzLjQyIDMwNi4yNjYgMTE5LjQ1NSAyOTkuOTEyTDkyLjA0MyAyNTYuMDYxQzg4LjE2IDI0OS44NjcgODkuMDY2IDI0MS45MTIgOTQuMjU0IDIzNi43MjVDMTgzLjQzOCAxNDcuNTQxIDMyOC41NTcgMTQ3LjUzMyA0MTcuNzUyIDIzNi43M0M0MjIuOTM0IDI0MS45MTIgNDIzLjg0IDI0OS44NjcgNDE5Ljk1MSAyNTYuMDU1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CirclePhoneHangup(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM419.951 256.055L392.549 299.896C388.561 306.293 380.533 308.928 373.463 306.166L318.629 284.234C312.188 281.639 308.227 275.08 308.924 268.176L312.363 233.553C275.875 221.096 236.072 221.102 199.568 233.564L203.021 268.162C203.762 275.047 199.768 281.67 193.293 284.232L138.496 306.148C131.459 308.945 123.42 306.266 119.455 299.912L92.043 256.061C88.16 249.867 89.066 241.912 94.254 236.725C183.438 147.541 328.557 147.533 417.752 236.73C422.934 241.912 423.84 249.867 419.951 256.055Z" />
        </Icon>
    </>
}
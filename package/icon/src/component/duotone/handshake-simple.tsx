
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `handshake-simple` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/handshake-simple?s=duotone handshake-simple}
 * @preview ![handshake-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTYwOC4wMDIgMTI4LjIyOEg0ODAuMDAyQzQzOS4wMjQgODcuMjk5IDQxNS40NDYgNjQuMzAyIDM1Ny40OTMgNjQuMzAyQzM0Ni45OTkgNjQuMzAyIDMzNy41MTQgNjMuNDg2IDMyNy4yNTIgNzIuNjY2TDIxNy4wMDIgMTYzLjU2N0MxOTYuNzUyIDE4MC42NzkgMTk0LjIzNyAyMTAuOTY4IDIxMS4zNjIgMjMxLjE3MUMyMjAuODYyIDI0Mi4zOCAyMzQuMzkzIDI0OC4xNTcgMjQ4LjAzNCAyNDguMTU3QzI1OC45NzEgMjQ4LjE1NyAyNjkuOTg3IDI0NC40NDEgMjc5LjAwMiAyMzYuODIyTDMxMi41OTIgMjA4LjQyM0gzMTIuNTk0TDMxOC41NzcgMjAzLjM2NEw0ODMuODc3IDMzOC43NDZDNDg4LjIzOSAzNDIuMjg2IDQ5MC45NjkgMzQ2Ljg2OSA0OTIuOTI0IDM1MS43MzJINjA4LjAwMkM2MjUuNjAyIDM1MS43MzIgNjQwLjAwMiAzMzcuMzQ5IDY0MC4wMDIgMzE5Ljc2OVYxNjAuMTk1QzY0MC4wMDIgMTQyLjU0MSA2MjUuNjc2IDEyOC4yMjggNjA4LjAwMiAxMjguMjI4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00ODMuODc1IDMzOC43NDVDNDk3LjU1NSAzNDkuODQ2IDQ5OS42NTYgMzY5LjkxMiA0ODguNTc2IDM4My42MDVMNDc5IDM5NS40MzFDNDY3Ljg3NSA0MDkuMTcxIDQ0Ny43NSA0MTEuMTY5IDQzMy45OTkgNDAwLjE3OEw0MjguNjI1IDM5NS42ODFMMzk3LjI1IDQzNC4yNjhDMzg0LjI1IDQ1MC4xMjMgMzYwLjc1IDQ1Mi42MjEgMzQ0Ljg3NSA0MzkuNjM1TDMyNyA0MjQuMTUxTDMyNi43NSA0MjQuNDAxQzMwNC41IDQ1MS43NDYgMjY0LjI1IDQ1NS45OTMgMjM2Ljc1IDQzMy42NDNMMTQ2LjI1IDM1MS44NTZIMzEuOTg4QzE0LjM5NSAzNTEuODU2IDAgMzM3LjQ3MyAwIDMxOS44OTNWMTYwLjIwMkMwIDE0Mi42MTYgMTQuNCAxMjguMjI3IDMyIDEyOC4yMjdIMTI4TDEyOC4xNSAxMjguMDc5QzE2OC43NTMgODcuNjEzIDIyMy42MzIgNjQuMzc2IDI4MC45NDUgNjRMMzI3LjI1IDcyLjY2NkwyMTcgMTYzLjU2N0MxOTYuNzUgMTgwLjY3OCAxOTQuMjM0IDIxMC45NjcgMjExLjM1OSAyMzEuMTdDMjIwLjg1OSAyNDIuMzggMjM0LjM5MSAyNDguMTU2IDI0OC4wMzEgMjQ4LjE1NkMyNTguOTY5IDI0OC4xNTYgMjY5Ljk4NCAyNDQuNDQxIDI3OSAyMzYuODIyTDMxOC41NzQgMjAzLjM2NEw0ODMuODc1IDMzOC43NDVaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HandshakeSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M608.002 128.228H480.002C439.024 87.299 415.446 64.302 357.493 64.302C346.999 64.302 337.514 63.486 327.252 72.666L217.002 163.567C196.752 180.679 194.237 210.968 211.362 231.171C220.862 242.38 234.393 248.157 248.034 248.157C258.971 248.157 269.987 244.441 279.002 236.822L312.592 208.423H312.594L318.577 203.364L483.877 338.746C488.239 342.286 490.969 346.869 492.924 351.732H608.002C625.602 351.732 640.002 337.349 640.002 319.769V160.195C640.002 142.541 625.676 128.228 608.002 128.228Z" />
            <path d="M483.875 338.745C497.555 349.846 499.656 369.912 488.576 383.605L479 395.431C467.875 409.171 447.75 411.169 433.999 400.178L428.625 395.681L397.25 434.268C384.25 450.123 360.75 452.621 344.875 439.635L327 424.151L326.75 424.401C304.5 451.746 264.25 455.993 236.75 433.643L146.25 351.856H31.988C14.395 351.856 0 337.473 0 319.893V160.202C0 142.616 14.4 128.227 32 128.227H128L128.15 128.079C168.753 87.613 223.632 64.376 280.945 64L327.25 72.666L217 163.567C196.75 180.678 194.234 210.967 211.359 231.17C220.859 242.38 234.391 248.156 248.031 248.156C258.969 248.156 269.984 244.441 279 236.822L318.574 203.364L483.875 338.745Z" />
        </Icon>
    </>
}
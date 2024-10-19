
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `shield` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/shield?s=thin shield}
 * @preview ![shield](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjYuNSA4My42OEwyNzQuNSAzLjY3MkMyNjkuNjI1IDEuNjQxIDI2MS4zNDQgMCAyNTYuMDYyIDBDMjUwLjc1IDAgMjQyLjUgMS42NDEgMjM3LjU5NCAzLjY3Mkw0NS41OTQgODMuNjhDMjcuNjg4IDkxLjA3MiAxNiAxMDguNTc0IDE2IDEyNy45ODJDMTYgMzg1LjE1NyAyMDUuMTYzIDUxMiAyNTUuOTUzIDUxMkMzMDcuOTc1IDUxMiA0OTYgMzgzLjgxMSA0OTYgMTI3Ljk4MkM0OTYgMTA4LjU3NCA0ODQuMzEyIDkxLjA3MiA0NjYuNSA4My42OFpNMzIgMTI3Ljk4MkMzMiAxMTQuOTk0IDM5LjczNCAxMDMuNDEgNTEuNzUgOTguNDQ5TDI0My43MTUgMTguNDU1QzI0NC43NyAxOC4wMTggMjQ2LjQzIDE3LjY0MSAyNDggMTcuMjYyVjQ5NC40MTZDMjAwLjM1MiA0ODIuMDE3IDMyIDM3MC40IDMyIDEyNy45ODJaTTI2NCA0OTQuMzk1VjE3LjIzNkMyNjUuNjA1IDE3LjYxOSAyNjcuMzAxIDE4LjAwNiAyNjguMzQ0IDE4LjQ0MUw0NjAuMzY3IDk4LjQ1OUM0NzIuMjk3IDEwMy40MDggNDgwIDExNC45OTYgNDgwIDEyNy45ODJDNDgwIDQwMS4wMDUgMjc3LjU0NCA0OTAuODIgMjY0IDQ5NC4zOTVaICI+PC9wYXRoPjwvc3ZnPg==|width=32|height=32)
 */
export default function Shield(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M466.5 83.68L274.5 3.672C269.625 1.641 261.344 0 256.062 0C250.75 0 242.5 1.641 237.594 3.672L45.594 83.68C27.688 91.072 16 108.574 16 127.982C16 385.157 205.163 512 255.953 512C307.975 512 496 383.811 496 127.982C496 108.574 484.312 91.072 466.5 83.68ZM32 127.982C32 114.994 39.734 103.41 51.75 98.449L243.715 18.455C244.77 18.018 246.43 17.641 248 17.262V494.416C200.352 482.017 32 370.4 32 127.982ZM264 494.395V17.236C265.605 17.619 267.301 18.006 268.344 18.441L460.367 98.459C472.297 103.408 480 114.996 480 127.982C480 401.005 277.544 490.82 264 494.395Z " />
        </Icon>
    </>
}

import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `down-long` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/down-long?s=thin down-long}
 * @preview ![down-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yOTUuOTk5IDMyMC4xODJIMjIzLjk5OVYzMi4wMjNDMjIzLjk5OSAxNC4zMzYgMjA5LjY3MSAwIDE5MiAwSDEyOEMxMTAuMzI3IDAgOTYuMDAxIDE0LjMzNiA5Ni4wMDEgMzIuMDIzVjMyMC4xODJIMjQuMDAxQzE0LjQyMyAzMjAuMTgyIDUuNzUxIDMyNS44OTEgMS45NTUgMzM0LjY5M0MtMS44MjcgMzQzLjQ5NiAtMC4wMyAzNTMuNzIzIDYuNTQ4IDM2MC42OTVMMTQyLjU0NyA1MDQuNzk5QzE0Ny4wNzggNTA5LjYgMTUzLjUzOSA1MTIgMTYwIDUxMlMxNzIuOTIyIDUwOS42IDE3Ny40NTMgNTA0Ljc5OUwzMTMuNDUyIDM2MC42OTVDMzIwLjAzIDM1My43MjMgMzIxLjgyNyAzNDMuNDk2IDMxOC4wNDUgMzM0LjY5M0MzMTQuMjQ5IDMyNS44OTEgMzA1LjU3NyAzMjAuMTgyIDI5NS45OTkgMzIwLjE4MlpNMzAxLjgxNSAzNDkuNzEzTDE2NS44MTggNDkzLjgxNkMxNjQuNTI3IDQ5NS4xODQgMTYyLjM1MiA0OTYgMTYwIDQ5NlMxNTUuNDczIDQ5NS4xODQgMTU0LjE4NCA0OTMuODE2TDE4LjE4NyAzNDkuNzE1QzE1Ljk4NiAzNDcuMzgzIDE1LjM4NiAzNDMuOTY1IDE2LjY0NiAzNDEuMDI5QzE3LjkxNyAzMzguMDg0IDIwLjgwNCAzMzYuMTgyIDI0LjAwMSAzMzYuMTgySDExMlYzMi4wMjNDMTEyIDIzLjE4NyAxMTkuMTc4IDE2IDEyOCAxNkgxOTJDMjAwLjgyMiAxNiAyMDggMjMuMTg3IDIwOCAzMi4wMjNWMzM2LjE4MkgyOTUuOTk5QzI5OS4xOTYgMzM2LjE4MiAzMDIuMDgzIDMzOC4wODQgMzAzLjM0NCAzNDEuMDA4QzMwNC42MTQgMzQzLjk2NSAzMDQuMDE0IDM0Ny4zODMgMzAxLjgxNSAzNDkuNzEzWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function DownLong(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M295.999 320.182H223.999V32.023C223.999 14.336 209.671 0 192 0H128C110.327 0 96.001 14.336 96.001 32.023V320.182H24.001C14.423 320.182 5.751 325.891 1.955 334.693C-1.827 343.496 -0.03 353.723 6.548 360.695L142.547 504.799C147.078 509.6 153.539 512 160 512S172.922 509.6 177.453 504.799L313.452 360.695C320.03 353.723 321.827 343.496 318.045 334.693C314.249 325.891 305.577 320.182 295.999 320.182ZM301.815 349.713L165.818 493.816C164.527 495.184 162.352 496 160 496S155.473 495.184 154.184 493.816L18.187 349.715C15.986 347.383 15.386 343.965 16.646 341.029C17.917 338.084 20.804 336.182 24.001 336.182H112V32.023C112 23.187 119.178 16 128 16H192C200.822 16 208 23.187 208 32.023V336.182H295.999C299.196 336.182 302.083 338.084 303.344 341.008C304.614 343.965 304.014 347.383 301.815 349.713Z" />
        </Icon>
    </>
}
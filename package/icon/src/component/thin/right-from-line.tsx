
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `right-from-line` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/right-from-line?s=thin right-from-line}
 * @preview ![right-from-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDcyVjQ0MEMwIDQ0NC40MTggMy41ODIgNDQ4IDggNDQ4UzE2IDQ0NC40MTggMTYgNDQwVjcyQzE2IDY3LjU4MiAxMi40MTggNjQgOCA2NFMwIDY3LjU4MiAwIDcyWk0yNTYuMTgyIDEyMFYxOTJIMTI4LjA5MkMxMTAuNDA0IDE5MiA5Ni4wNjggMjA2LjMyOCA5Ni4wNjggMjI0VjI4OEM5Ni4wNjggMzA1LjY3NCAxMTAuNDA0IDMyMCAxMjguMDkyIDMyMEgyNTYuMTgyVjM5MkMyNTYuMTgyIDQwMS41NzggMjYxLjg5MSA0MTAuMjUgMjcwLjY5MyA0MTQuMDQ3QzI3OS40OTYgNDE3LjgyOCAyODkuNzIzIDQxNi4wMzEgMjk2LjY5NSA0MDkuNDUzTDQ0MC43OTkgMjczLjQ1M0M0NDUuNiAyNjguOTIyIDQ0OCAyNjIuNDYxIDQ0OCAyNTZTNDQ1LjYgMjQzLjA3OCA0NDAuNzk5IDIzOC41NDdMMjk2LjY5NSAxMDIuNTQ3QzI4OS43MjMgOTUuOTY5IDI3OS40OTYgOTQuMTcyIDI3MC42OTMgOTcuOTUzQzI2MS44OTEgMTAxLjc1IDI1Ni4xODIgMTEwLjQyMiAyNTYuMTgyIDEyMFpNMjg1LjcxMyAxMTQuMTg0TDQyOS44MTYgMjUwLjE4MkM0MzEuMTg0IDI1MS40NzMgNDMyIDI1My42NDggNDMyIDI1NlM0MzEuMTg0IDI2MC41MjcgNDI5LjgxNiAyNjEuODE2TDI4NS43MTUgMzk3LjgxNEMyODMuMzgzIDQwMC4wMTYgMjc5Ljk2NSA0MDAuNjE1IDI3Ny4wMjkgMzk5LjM1NUMyNzQuMDg0IDM5OC4wODQgMjcyLjE4MiAzOTUuMTk3IDI3Mi4xODIgMzkyVjMwNEgxMjguMDkyQzExOS4yNTYgMzA0IDExMi4wNjggMjk2LjgyMiAxMTIuMDY4IDI4OFYyMjRDMTEyLjA2OCAyMTUuMTc4IDExOS4yNTYgMjA4IDEyOC4wOTIgMjA4SDI3Mi4xODJWMTIwQzI3Mi4xODIgMTE2LjgwMyAyNzQuMDg0IDExMy45MTYgMjc3LjAwOCAxMTIuNjU0QzI3OS45NjUgMTExLjM4NSAyODMuMzgzIDExMS45ODQgMjg1LjcxMyAxMTQuMTg0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function RightFromLine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M0 72V440C0 444.418 3.582 448 8 448S16 444.418 16 440V72C16 67.582 12.418 64 8 64S0 67.582 0 72ZM256.182 120V192H128.092C110.404 192 96.068 206.328 96.068 224V288C96.068 305.674 110.404 320 128.092 320H256.182V392C256.182 401.578 261.891 410.25 270.693 414.047C279.496 417.828 289.723 416.031 296.695 409.453L440.799 273.453C445.6 268.922 448 262.461 448 256S445.6 243.078 440.799 238.547L296.695 102.547C289.723 95.969 279.496 94.172 270.693 97.953C261.891 101.75 256.182 110.422 256.182 120ZM285.713 114.184L429.816 250.182C431.184 251.473 432 253.648 432 256S431.184 260.527 429.816 261.816L285.715 397.814C283.383 400.016 279.965 400.615 277.029 399.355C274.084 398.084 272.182 395.197 272.182 392V304H128.092C119.256 304 112.068 296.822 112.068 288V224C112.068 215.178 119.256 208 128.092 208H272.182V120C272.182 116.803 274.084 113.916 277.008 112.654C279.965 111.385 283.383 111.984 285.713 114.184Z" />
        </Icon>
    </>
}

import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `filter` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/filter?s=thin filter}
 * @preview ![filter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NzkuMjk3IDQ4QzQ4Ni4wMjQgNDggNDkxLjY5NiA1MS41MjMgNDk0LjQ2OSA1Ny40MjZDNDk1LjcyNyA2MC4xMDIgNDk4LjAzMiA2Ny4wNyA0OTIuMzA5IDczLjk3MkwzMDcuNjg0IDI5Ni42MDlMMzA0LjAwMSAzMDEuMDUxVjMwNi44MjJWNDU1Ljk4NEMzMDQuMDAxIDQ2MS41MTMgMjk5LjI2NiA0NjQgMjk1LjkwNyA0NjRDMjk0LjMyNSA0NjQgMjkyLjgxNyA0NjMuNTA2IDI5MS40MjIgNDYyLjUzMkwyMTEuMzk1IDQwNi41MjhDMjA5LjI3IDQwNS4wNDcgMjA4LjAwMSA0MDIuNjA2IDIwOC4wMDEgNDAwVjMwNi44MjJWMzAxLjA1MUwyMDQuMzE3IDI5Ni42MDlMMTkuNjkyIDczLjk3M0MxMy45NjkgNjcuMDcgMTYuMjc0IDYwLjEwMiAxNy41MzIgNTcuNDI2QzIwLjMwNSA1MS41MjMgMjUuOTc3IDQ4IDMyLjcwNCA0OEg0NzkuMjk3TTQ3OS4yOTcgMzJIMzIuNzA0QzUuMjExIDMyIC05Ljk2NCA2My4yNzUgNy4zNzYgODQuMTg2TDE5Mi4wMDEgMzA2LjgyMlY0MDBDMTkyLjAwMSA0MDcuODI4IDE5NS44MTMgNDE1LjE3MiAyMDIuMjUxIDQxOS42NTZMMjgyLjI1MSA0NzUuNjQxQzI4Ni41MzYgNDc4LjYzOSAyOTEuMjc0IDQ4MCAyOTUuOTA3IDQ4MEMzMDguMzQgNDgwIDMyMC4wMDEgNDcwLjIwMyAzMjAuMDAxIDQ1NS45ODRWMzA2LjgyMkw1MDQuNjI2IDg0LjE4NkM1MjEuOTY1IDYzLjI3NSA1MDYuNzkgMzIgNDc5LjI5NyAzMkw0NzkuMjk3IDMyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Filter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M479.297 48C486.024 48 491.696 51.523 494.469 57.426C495.727 60.102 498.032 67.07 492.309 73.972L307.684 296.609L304.001 301.051V306.822V455.984C304.001 461.513 299.266 464 295.907 464C294.325 464 292.817 463.506 291.422 462.532L211.395 406.528C209.27 405.047 208.001 402.606 208.001 400V306.822V301.051L204.317 296.609L19.692 73.973C13.969 67.07 16.274 60.102 17.532 57.426C20.305 51.523 25.977 48 32.704 48H479.297M479.297 32H32.704C5.211 32 -9.964 63.275 7.376 84.186L192.001 306.822V400C192.001 407.828 195.813 415.172 202.251 419.656L282.251 475.641C286.536 478.639 291.274 480 295.907 480C308.34 480 320.001 470.203 320.001 455.984V306.822L504.626 84.186C521.965 63.275 506.79 32 479.297 32L479.297 32Z" />
        </Icon>
    </>
}
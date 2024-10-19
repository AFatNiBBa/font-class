
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `egg` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/egg?s=regular egg}
 * @preview ![egg](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgMEM4NiAwIDAgMjE0IDAgMzIwUzg2IDUxMiAxOTIgNTEyQzI5OCA1MTIgMzg0IDQyNiAzODQgMzIwUzI5OCAwIDE5MiAwWk0xOTIgNDY0QzExMi42MjUgNDY0IDQ4IDM5OS4zNzUgNDggMzIwQzQ4IDIwMi42MjUgMTM4LjYyNSA0OCAxOTIgNDhTMzM2IDIwMi42MjUgMzM2IDMyMEMzMzYgMzk5LjM3NSAyNzEuMzc1IDQ2NCAxOTIgNDY0Wk0xNjguMDI3IDEwMy45ODRDMTYwLjcyOSAxMDMuOTg0IDE1My45MTQgMTA3LjI0NiAxNDkuMzMyIDExMi45MzRDMTEzLjk1MyAxNTYuNzU2IDc2LjM0MiAyMzguNjE1IDc2LjM0MiAzMDQuMDAyQzc2LjM0MiAzMTcuMjM0IDg3LjEwOSAzMjguMDAyIDEwMC4zNDIgMzI4LjAwMkMxMTMuNTc4IDMyOC4wMDIgMTI0LjM0NCAzMTcuMjM0IDEyNC4zNDQgMzA0LjAwMkMxMjQuMzQ0IDI1MS41OCAxNTYuMDQ1IDE4MS4wMTIgMTg2LjY5MSAxNDMuMDc0QzE5NC45OTQgMTMyLjc4NSAxOTMuMzc5IDExNy42NDggMTgzLjA5NiAxMDkuMzI2QzE3OC44NDggMTA1Ljg4MyAxNzMuNDk0IDEwMy45ODQgMTY4LjAyNyAxMDMuOTg0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Egg(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192 0C86 0 0 214 0 320S86 512 192 512C298 512 384 426 384 320S298 0 192 0ZM192 464C112.625 464 48 399.375 48 320C48 202.625 138.625 48 192 48S336 202.625 336 320C336 399.375 271.375 464 192 464ZM168.027 103.984C160.729 103.984 153.914 107.246 149.332 112.934C113.953 156.756 76.342 238.615 76.342 304.002C76.342 317.234 87.109 328.002 100.342 328.002C113.578 328.002 124.344 317.234 124.344 304.002C124.344 251.58 156.045 181.012 186.691 143.074C194.994 132.785 193.379 117.648 183.096 109.326C178.848 105.883 173.494 103.984 168.027 103.984Z" />
        </Icon>
    </>
}
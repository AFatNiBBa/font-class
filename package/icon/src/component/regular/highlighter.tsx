
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `highlighter` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/highlighter?s=regular highlighter}
 * @preview ![highlighter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MjcuOTE1IDc5LjI1TDQ2NC45MzYgMTYuMTI1QzQ1NC4zMzYgNS4zNzUgNDQwLjI0MyAwIDQyNi4yNzYgMEM0MTMuMzA2IDAgNDAwLjQ2MSA0LjUgMzkwLjExIDEzLjc1TDEwMy42ODEgMjYxLjg0NEM5Mi45NTYgMjcxLjM0NCA4OC44NDEgMjg2LjIxOSA5Mi45NTYgMjk5Ljg0NEwxMDUuOTI2IDM0Mi43MTlMNzIuMTMgMzc2LjcxOUM2My4wNjUgMzg1LjgwNSA2Mi45NzcgNDAwLjE5NyA3MS40ODMgNDA5LjYxN0w2LjQwMyA0NzQuODQ4Qy03LjI3NiA0ODguNTU3IDIuNDEzIDUxMiAyMS43NTYgNTEySDk0LjI5NUM5OC41MjcgNTEyIDEwMi41ODggNTEwLjMxNCAxMDUuNTgxIDUwNy4zMTJMMTM3LjYwOCA0NzUuMjExQzE0Ni45NjQgNDgxLjgwOSAxNTkuNzk3IDQ4MS4zNDggMTY4LjE1NyA0NzIuOTY5TDIwMS44MjggNDM5LjA5NEwyNDQuNDc5IDQ1Mi4wOTRDMjQ3Ljk3MSA0NTMuMjE5IDI1MS41ODggNDUzLjcxOSAyNTUuMjA0IDQ1My43MTlDMjY1LjY4IDQ1My43MTkgMjc1LjY1NyA0NDkuMjE5IDI4Mi41MTYgNDQxLjM0NEw1MzAuMjg0IDE1NC4zNzVDNTQ5LjQ5IDEzMi42MjUgNTQ4LjM2NyA5OS43NSA1MjcuOTE1IDc5LjI1Wk0yNTEuMzM4IDQwMy45NjlMMTg4LjM2IDM4NC43MTlMMTUxLjE5NiA0MjEuOTY5TDEyMi44ODcgMzkzLjcxOUwxNjAuMTc1IDM1Ni4zNDRMMTQwLjk3IDI5My4wOTRMMTcyLjgzNyAyNjUuODVMMjc4LjY5MSAzNzEuOTQ5TDI1MS4zMzggNDAzLjk2OVpNNDkzLjg2OSAxMjMuMjVMMzA5Ljg2MyAzMzUuMzE4TDIwOS4zMzQgMjM0LjU1N0w0MjEuNzg2IDQ5Ljc1QzQyMy4wMzMgNDguNjI1IDQyNC41MyA0OCA0MjYuMjc2IDQ4QzQyNy41MjMgNDggNDI5LjM5NCA0OC4zNzUgNDMxLjE0IDUwTDQ5NC4xMTggMTEzLjI1QzQ5Ni42MTIgMTE1Ljc1IDQ5Ni43MzcgMTE5Ljg3NSA0OTMuODY5IDEyMy4yNVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Highlighter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M527.915 79.25L464.936 16.125C454.336 5.375 440.243 0 426.276 0C413.306 0 400.461 4.5 390.11 13.75L103.681 261.844C92.956 271.344 88.841 286.219 92.956 299.844L105.926 342.719L72.13 376.719C63.065 385.805 62.977 400.197 71.483 409.617L6.403 474.848C-7.276 488.557 2.413 512 21.756 512H94.295C98.527 512 102.588 510.314 105.581 507.312L137.608 475.211C146.964 481.809 159.797 481.348 168.157 472.969L201.828 439.094L244.479 452.094C247.971 453.219 251.588 453.719 255.204 453.719C265.68 453.719 275.657 449.219 282.516 441.344L530.284 154.375C549.49 132.625 548.367 99.75 527.915 79.25ZM251.338 403.969L188.36 384.719L151.196 421.969L122.887 393.719L160.175 356.344L140.97 293.094L172.837 265.85L278.691 371.949L251.338 403.969ZM493.869 123.25L309.863 335.318L209.334 234.557L421.786 49.75C423.033 48.625 424.53 48 426.276 48C427.523 48 429.394 48.375 431.14 50L494.118 113.25C496.612 115.75 496.737 119.875 493.869 123.25Z" />
        </Icon>
    </>
}
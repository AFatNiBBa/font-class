
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `pen` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pen?s=solid pen}
 * @preview ![pen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTcuOTM4IDc0LjE1OUw0MzcuODQ3IDE0LjA2M0M0MTkuMDk4IC00LjY4OCAzODguNjYyIC00LjY4OCAzNjkuOTEzIDE0LjA2M0wzMTMuMzg0IDcwLjYxMkw0NDEuMzc4IDE5OC42MzNMNDk3LjkzOCAxNDIuMDg0QzUxNi42ODcgMTIzLjMxNyA1MTYuNjg3IDkyLjkxIDQ5Ny45MzggNzQuMTU5Wk0yOTAuNzUgOTMuMjMyTDMxLjAzNyAzNTIuOTU1QzI4LjgwMyAzNTUuMTkgMjcuMjgyIDM1OC4wMzMgMjYuNjYgMzYxLjEzMUwwLjMyIDQ5Mi44NTNDLTEuOTIgNTA0LjA0OSA3Ljk1IDUxMy45MiAxOS4xNDUgNTExLjY4TDE1MC44NTYgNDg1LjMzNUMxNTMuOTU0IDQ4NC43MTYgMTU2Ljc5NyA0ODMuMTk1IDE1OS4wMzEgNDgwLjk2Mkw0MTguNzUgMjIxLjI1OUwyOTAuNzUgOTMuMjMyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Pen(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M497.938 74.159L437.847 14.063C419.098 -4.688 388.662 -4.688 369.913 14.063L313.384 70.612L441.378 198.633L497.938 142.084C516.687 123.317 516.687 92.91 497.938 74.159ZM290.75 93.232L31.037 352.955C28.803 355.19 27.282 358.033 26.66 361.131L0.32 492.853C-1.92 504.049 7.95 513.92 19.145 511.68L150.856 485.335C153.954 484.716 156.797 483.195 159.031 480.962L418.75 221.259L290.75 93.232Z" />
        </Icon>
    </>
}

import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `n` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/n?s=regular n}
 * @preview ![n](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIgNDgwQzM0Mi42ODggNDgwIDMzMy42MjUgNDc1LjkzOCAzMjcuNDA2IDQ2OC41TDY0IDE1Mi4zNzVWNDQ4QzY0IDQ2NS42ODggNDkuNjg4IDQ4MCAzMiA0ODBTMCA0NjUuNjg4IDAgNDQ4VjY0QzAgNTAuNTMxIDguNDM4IDM4LjUgMjEuMDk0IDMzLjkwNkMzMy43MTkgMjkuMzQ0IDQ3LjkzOCAzMy4xMjUgNTYuNTk0IDQzLjVMMzIwIDM1OS42MjVWNjRDMzIwIDQ2LjMxMiAzMzQuMzEyIDMyIDM1MiAzMlMzODQgNDYuMzEyIDM4NCA2NFY0NDhDMzg0IDQ2MS40NjkgMzc1LjU2MiA0NzMuNSAzNjIuOTA2IDQ3OC4wOTRDMzU5LjM0NCA0NzkuMzc1IDM1NS42NTYgNDgwIDM1MiA0ODBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function N(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M352 480C342.688 480 333.625 475.938 327.406 468.5L64 152.375V448C64 465.688 49.688 480 32 480S0 465.688 0 448V64C0 50.531 8.438 38.5 21.094 33.906C33.719 29.344 47.938 33.125 56.594 43.5L320 359.625V64C320 46.312 334.312 32 352 32S384 46.312 384 64V448C384 461.469 375.562 473.5 362.906 478.094C359.344 479.375 355.656 480 352 480Z" />
        </Icon>
    </>
}
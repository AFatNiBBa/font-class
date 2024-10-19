
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sort` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sort?s=light sort}
 * @preview ![sort](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODcuOTU0IDI4OEgzMi4wNDZDMy42ODIgMjg4IC0xMC42ODggMzIyLjUgOS40MjkgMzQyLjYyNUwxMzcuMzgzIDQ3MC42MjVDMTQ5Ljg3OSA0ODMuMTI1IDE3MC4yNDYgNDgzLjEyNSAxODIuNzQyIDQ3MC42MjVMMzEwLjY5NiAzNDIuNjI1QzMzMC42ODggMzIyLjUgMzE2LjMxOCAyODggMjg3Ljk1NCAyODhaTTE2MCA0NDhMMzIuMDQ2IDMyMEgyODcuOTU0TDE2MCA0NDhaTTMyLjA0NiAyMjRIMjg3Ljk1NEMzMTYuMzE4IDIyNCAzMzAuNjg4IDE4OS41IDMxMC41NzEgMTY5LjM3NUwxODIuNjE3IDQxLjM3NUMxNzAuMTIxIDI4Ljg3NSAxNDkuNzU0IDI4Ljg3NSAxMzcuMjU4IDQxLjM3NUw5LjMwNCAxNjkuMzc1Qy0xMC42ODggMTg5LjUgMy42ODIgMjI0IDMyLjA0NiAyMjRaTTE2MCA2NEwyODcuOTU0IDE5MkgzMi4wNDZMMTYwIDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Sort(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M287.954 288H32.046C3.682 288 -10.688 322.5 9.429 342.625L137.383 470.625C149.879 483.125 170.246 483.125 182.742 470.625L310.696 342.625C330.688 322.5 316.318 288 287.954 288ZM160 448L32.046 320H287.954L160 448ZM32.046 224H287.954C316.318 224 330.688 189.5 310.571 169.375L182.617 41.375C170.121 28.875 149.754 28.875 137.258 41.375L9.304 169.375C-10.688 189.5 3.682 224 32.046 224ZM160 64L287.954 192H32.046L160 64Z" />
        </Icon>
    </>
}
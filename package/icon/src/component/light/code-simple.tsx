
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `code-simple` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/code-simple?s=light code-simple}
 * @preview ![code-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xODYuNzY3IDY4LjE1NkMxODAuMjUxIDYyLjI1IDE3MC4xMTEgNjIuNjU2IDE2NC4xNTggNjkuMjVMNC4xNiAyNDUuMjVDLTEuMzg3IDI1MS4zNDQgLTEuMzg3IDI2MC42NTYgNC4xNiAyNjYuNzVMMTY0LjE1OCA0NDIuNzVDMTY3LjMxNCA0NDYuMjUgMTcxLjY1OCA0NDggMTc2LjAwMiA0NDhDMTc5Ljg0NSA0NDggMTgzLjcwNSA0NDYuNjI1IDE4Ni43NjcgNDQzLjg0NEMxOTMuMjk4IDQzNy45MDYgMTkzLjc4MyA0MjcuNzgxIDE4Ny44NDUgNDIxLjI1TDM3LjYyOCAyNTZMMTg3Ljg0NSA5MC43NUMxOTMuNzgzIDg0LjIxOSAxOTMuMjk4IDc0LjA5NCAxODYuNzY3IDY4LjE1NlpNNTcxLjg0IDI0NS4yNUw0MTEuODQyIDY5LjI1QzQwNS44ODkgNjIuNjU2IDM5NS43OCA2Mi4yNSAzODkuMjMzIDY4LjE1NkMzODIuNzAyIDc0LjA5NCAzODIuMjE3IDg0LjIxOSAzODguMTU1IDkwLjc1TDUzOC4zNzIgMjU2TDM4OC4xNTUgNDIxLjI1QzM4Mi4yMTcgNDI3Ljc4MSAzODIuNzAyIDQzNy45MDYgMzg5LjIzMyA0NDMuODQ0QzM5Mi4yOTUgNDQ2LjYyNSAzOTYuMTU1IDQ0OCAzOTkuOTk4IDQ0OEM0MDQuMzQyIDQ0OCA0MDguNjg2IDQ0Ni4yNSA0MTEuODQyIDQ0Mi43NUw1NzEuODQgMjY2Ljc1QzU3Ny4zODcgMjYwLjY1NiA1NzcuMzg3IDI1MS4zNDQgNTcxLjg0IDI0NS4yNVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CodeSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M186.767 68.156C180.251 62.25 170.111 62.656 164.158 69.25L4.16 245.25C-1.387 251.344 -1.387 260.656 4.16 266.75L164.158 442.75C167.314 446.25 171.658 448 176.002 448C179.845 448 183.705 446.625 186.767 443.844C193.298 437.906 193.783 427.781 187.845 421.25L37.628 256L187.845 90.75C193.783 84.219 193.298 74.094 186.767 68.156ZM571.84 245.25L411.842 69.25C405.889 62.656 395.78 62.25 389.233 68.156C382.702 74.094 382.217 84.219 388.155 90.75L538.372 256L388.155 421.25C382.217 427.781 382.702 437.906 389.233 443.844C392.295 446.625 396.155 448 399.998 448C404.342 448 408.686 446.25 411.842 442.75L571.84 266.75C577.387 260.656 577.387 251.344 571.84 245.25Z" />
        </Icon>
    </>
}
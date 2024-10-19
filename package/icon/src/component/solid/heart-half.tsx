
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `heart-half` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/heart-half?s=solid heart-half}
 * @preview ![heart-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgNDc5Ljk5MkMyNDcuNjU0IDQ4MC4wMDQgMjM5LjMwNSA0NzYuNzQyIDIzMi45NzQgNDcwLjE5NUwzOS44MjQgMjcwLjQ4NEMtMTYuMTk3IDIxMi41MTYgLTEzLjEwNCAxMTYuNjUyIDQ5LjA0MSA2Mi44NjFDMTAzLjMxNiAxNS44ODUgMTg2LjM3MSAyNC4zNTcgMjM2LjMyIDc1LjkyNEwyNTYgOTYuMjRWNDc5Ljk5MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function HeartHalf(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 479.992C247.654 480.004 239.305 476.742 232.974 470.195L39.824 270.484C-16.197 212.516 -13.104 116.652 49.041 62.861C103.316 15.885 186.371 24.357 236.32 75.924L256 96.24V479.992Z" />
        </Icon>
    </>
}
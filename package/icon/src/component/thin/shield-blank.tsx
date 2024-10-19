
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `shield-blank` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/shield-blank?s=thin shield-blank}
 * @preview ![shield-blank](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjYuNSA4My42OEwyNzQuNSAzLjY3MkMyNjkuNjI1IDEuNjQxIDI2MS4zNDQgMCAyNTYuMDYyIDBDMjUwLjc1IDAgMjQyLjUgMS42NDEgMjM3LjU5NCAzLjY3Mkw0NS41OTQgODMuNjhDMjcuNjg4IDkxLjA3MiAxNiAxMDguNTc0IDE2IDEyNy45ODJDMTYgMzg1LjE1NyAyMDUuMTYzIDUxMiAyNTUuOTUzIDUxMkMzMDcuOTc1IDUxMiA0OTYgMzgzLjgxMSA0OTYgMTI3Ljk4MkM0OTYgMTA4LjU3NCA0ODQuMzEyIDkxLjA3MiA0NjYuNSA4My42OFpNMjU1Ljk1MyA0OTZDMjEyLjEwNyA0OTYgMzIgMzc0LjAxMiAzMiAxMjcuOTgyQzMyIDExNC45OTQgMzkuNzMyIDEwMy40MSA1MS43NDggOTguNDQ5TDI0My43MTUgMTguNDU1QzI0Ni43MDcgMTcuMjE1IDI1Mi44MjIgMTYgMjU2LjA2MiAxNkMyNTkuMjQ2IDE2IDI2NS40NDMgMTcuMjMyIDI2OC4zNDYgMTguNDQxTDQ2MC4zNjcgOTguNDU5QzQ3Mi4yOTUgMTAzLjQwOCA0ODAgMTE0Ljk5NiA0ODAgMTI3Ljk4MkM0ODAgNDA1LjU5MiAyNzAuOTIzIDQ5NiAyNTUuOTUzIDQ5NlogIj48L3BhdGg+PC9zdmc+|width=32|height=32)
 */
export default function ShieldBlank(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M466.5 83.68L274.5 3.672C269.625 1.641 261.344 0 256.062 0C250.75 0 242.5 1.641 237.594 3.672L45.594 83.68C27.688 91.072 16 108.574 16 127.982C16 385.157 205.163 512 255.953 512C307.975 512 496 383.811 496 127.982C496 108.574 484.312 91.072 466.5 83.68ZM255.953 496C212.107 496 32 374.012 32 127.982C32 114.994 39.732 103.41 51.748 98.449L243.715 18.455C246.707 17.215 252.822 16 256.062 16C259.246 16 265.443 17.232 268.346 18.441L460.367 98.459C472.295 103.408 480 114.996 480 127.982C480 405.592 270.923 496 255.953 496Z " />
        </Icon>
    </>
}
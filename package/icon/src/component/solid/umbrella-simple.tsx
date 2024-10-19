
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `umbrella-simple` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/umbrella-simple?s=solid umbrella-simple}
 * @preview ![umbrella-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODguMDAxIDM0LjE4OFYzMkMyODguMDAxIDE0LjMyNiAyNzMuNjc1IDAgMjU2LjAwMSAwUzIyNC4wMDEgMTQuMzI2IDIyNC4wMDEgMzJWMzQuMTg4QzEwOC41NTMgNDguMzYxIDE2LjY1MSAxMzcuODI4IDAuMzE5IDI1MS42MjVDLTIuNDM1IDI3MC44MTIgMTMuMDAzIDI4OCAzMi41NTUgMjg4SDQ3OS40NDZDNDk4Ljk5OSAyODggNTE0LjQzNiAyNzAuODEyIDUxMS42ODIgMjUxLjYyNUM0OTUuMzUgMTM3LjgyOCA0MDMuNDQ4IDQ4LjM2MSAyODguMDAxIDM0LjE4OFpNMjIzLjk5NyA0MzIuMDc4QzIyMy45OTcgNDQwLjg5MyAyMTYuODA5IDQ0OC4wODIgMjA3Ljk5NyA0NDguMDgyQzIwMC4xODIgNDQ4LjA4MiAxOTQuODA3IDQ0Mi43NjggMTkyLjkwMSA0MzcuMzkzQzE4Ni45OTUgNDIwLjY3IDE2OC44MDUgNDExLjk4IDE1Mi4wODcgNDE3Ljg4OUMxMzUuMzk3IDQyMy43NjQgMTI2LjY3OCA0NDIuMDggMTMyLjU4NSA0NTguNjc4QzE0My44MDUgNDkwLjU5IDE3NC4xODIgNTEyIDIwNy45OTcgNTEyQzI1Mi4wOTMgNTEyIDI4OC4wMDEgNDc2LjA4NiAyODguMDAxIDQzMS45ODRWMzIwSDIyMy45OTdWNDMyLjA3OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function UmbrellaSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M288.001 34.188V32C288.001 14.326 273.675 0 256.001 0S224.001 14.326 224.001 32V34.188C108.553 48.361 16.651 137.828 0.319 251.625C-2.435 270.812 13.003 288 32.555 288H479.446C498.999 288 514.436 270.812 511.682 251.625C495.35 137.828 403.448 48.361 288.001 34.188ZM223.997 432.078C223.997 440.893 216.809 448.082 207.997 448.082C200.182 448.082 194.807 442.768 192.901 437.393C186.995 420.67 168.805 411.98 152.087 417.889C135.397 423.764 126.678 442.08 132.585 458.678C143.805 490.59 174.182 512 207.997 512C252.093 512 288.001 476.086 288.001 431.984V320H223.997V432.078Z" />
        </Icon>
    </>
}
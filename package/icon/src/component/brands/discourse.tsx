
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `discourse` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/discourse?s=brands discourse}
 * @preview ![discourse](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjUuOSAzMkMxMDMuMyAzMiAwIDEzMC41IDAgMjUyLjEgMCAyNTYgLjEgNDgwIC4xIDQ4MGwyMjUuOC0uMmMxMjIuNyAwIDIyMi4xLTEwMi4zIDIyMi4xLTIyMy45QzQ0OCAxMzQuMyAzNDguNiAzMiAyMjUuOSAzMnpNMjI0IDM4NGMtMTkuNCAwLTM3LjktNC4zLTU0LjQtMTIuMUw4OC41IDM5MmwyMi45LTc1Yy05LjgtMTguMS0xNS40LTM4LjktMTUuNC02MSAwLTcwLjcgNTcuMy0xMjggMTI4LTEyOHMxMjggNTcuMyAxMjggMTI4LTU3LjMgMTI4LTEyOCAxMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Discourse(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M225.9 32C103.3 32 0 130.5 0 252.1 0 256 .1 480 .1 480l225.8-.2c122.7 0 222.1-102.3 222.1-223.9C448 134.3 348.6 32 225.9 32zM224 384c-19.4 0-37.9-4.3-54.4-12.1L88.5 392l22.9-75c-9.8-18.1-15.4-38.9-15.4-61 0-70.7 57.3-128 128-128s128 57.3 128 128-57.3 128-128 128z" />
        </Icon>
    </>
}

import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `product-hunt` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/product-hunt?s=brands product-hunt}
 * @preview ![product-hunt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjYuMyAyMTguOGMwIDIwLjUtMTYuNyAzNy4yLTM3LjIgMzcuMmgtNzAuM3YtNzQuNGg3MC4zYzIwLjUgMCAzNy4yIDE2LjcgMzcuMiAzNy4yek01MDQgMjU2YzAgMTM3LTExMSAyNDgtMjQ4IDI0OFM4IDM5MyA4IDI1NiAxMTkgOCAyNTYgOHMyNDggMTExIDI0OCAyNDh6bS0xMjguMS0zNy4yYzAtNDcuOS0zOC45LTg2LjgtODYuOC04Ni44SDE2OS4ydjI0OGg0OS42di03NC40aDcwLjNjNDcuOSAwIDg2LjgtMzguOSA4Ni44LTg2Ljh6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function ProductHunt(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M326.3 218.8c0 20.5-16.7 37.2-37.2 37.2h-70.3v-74.4h70.3c20.5 0 37.2 16.7 37.2 37.2zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-128.1-37.2c0-47.9-38.9-86.8-86.8-86.8H169.2v248h49.6v-74.4h70.3c47.9 0 86.8-38.9 86.8-86.8z" />
        </Icon>
    </>
}
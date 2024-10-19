
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `p` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/p?s=regular p}
 * @preview ![p](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMiA0ODBDMTQuMzEyIDQ4MCAwIDQ2NS42ODggMCA0NDhWNjRDMCA0Ni4zMTIgMTQuMzEyIDMyIDMyIDMySDE2MEMyNDguMjE5IDMyIDMyMCAxMDMuNzgxIDMyMCAxOTJTMjQ4LjIxOSAzNTIgMTYwIDM1Mkg2NFY0NDhDNjQgNDY1LjY4OCA0OS42ODggNDgwIDMyIDQ4MFpNNjQgMjg4SDE2MEMyMTIuOTM4IDI4OCAyNTYgMjQ0LjkzOCAyNTYgMTkyUzIxMi45MzggOTYgMTYwIDk2SDY0VjI4OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function P(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M32 480C14.312 480 0 465.688 0 448V64C0 46.312 14.312 32 32 32H160C248.219 32 320 103.781 320 192S248.219 352 160 352H64V448C64 465.688 49.688 480 32 480ZM64 288H160C212.938 288 256 244.938 256 192S212.938 96 160 96H64V288Z" />
        </Icon>
    </>
}

import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `mug-saucer` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mug-saucer?s=solid mug-saucer}
 * @preview ![mug-saucer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMzJIMTIwQzEwNi43NSAzMiA5NiA0Mi43NSA5NiA1NlYyODhDOTYgMzQxIDEzOSAzODQgMTkyIDM4NEgzODRDNDM3IDM4NCA0ODAgMzQxIDQ4MCAyODhINTEyQzU4Mi42MjUgMjg4IDY0MCAyMzAuNjI1IDY0MCAxNjBTNTgyLjYyNSAzMiA1MTIgMzJaTTUxMiAyMjRINDgwVjk2SDUxMkM1NDcuMjUgOTYgNTc2IDEyNC43NSA1NzYgMTYwUzU0Ny4yNSAyMjQgNTEyIDIyNFpNNTYwIDQxNkgxNkM3LjE2NCA0MTYgMCA0MjMuMTY0IDAgNDMyQzAgNDU4LjUwOCAyMS40OSA0ODAgNDggNDgwSDUyOEM1NTQuNTEgNDgwIDU3NiA0NTguNTA4IDU3NiA0MzJDNTc2IDQyMy4xNjQgNTY4LjgzOCA0MTYgNTYwIDQxNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function MugSaucer(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M512 32H120C106.75 32 96 42.75 96 56V288C96 341 139 384 192 384H384C437 384 480 341 480 288H512C582.625 288 640 230.625 640 160S582.625 32 512 32ZM512 224H480V96H512C547.25 96 576 124.75 576 160S547.25 224 512 224ZM560 416H16C7.164 416 0 423.164 0 432C0 458.508 21.49 480 48 480H528C554.51 480 576 458.508 576 432C576 423.164 568.838 416 560 416Z" />
        </Icon>
    </>
}
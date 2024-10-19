
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `inbox` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/inbox?s=solid inbox}
 * @preview ![inbox](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDcuMDMxIDU2LjI1QzQ0My40NjkgNDIgNDMwLjY4OCAzMiA0MTYgMzJIOTZDODEuMzEyIDMyIDY4LjUzMSA0MiA2NC45NjkgNTYuMjVMMy43MTUgMzA0LjkxOEMxLjI0NyAzMTQuOTM2IDAgMzI1LjIxNSAwIDMzNS41MzNWNDMyQzAgNDU4LjUxIDIxLjQ5IDQ4MCA0OCA0ODBINDY0QzQ5MC41MSA0ODAgNTEyIDQ1OC41MSA1MTIgNDMyVjMzNS41MzNDNTEyIDMyNS4yMTUgNTEwLjc1MyAzMTQuOTM2IDUwOC4yODUgMzA0LjkxOEw0NDcuMDMxIDU2LjI1Wk0zNTIgMzUySDE2MEwxMjggMjg4SDcyLjk3NUwxMjEgOTZIMzkxTDQzOS4wMjUgMjg4SDM4NEwzNTIgMzUyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Inbox(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M447.031 56.25C443.469 42 430.688 32 416 32H96C81.312 32 68.531 42 64.969 56.25L3.715 304.918C1.247 314.936 0 325.215 0 335.533V432C0 458.51 21.49 480 48 480H464C490.51 480 512 458.51 512 432V335.533C512 325.215 510.753 314.936 508.285 304.918L447.031 56.25ZM352 352H160L128 288H72.975L121 96H391L439.025 288H384L352 352Z" />
        </Icon>
    </>
}
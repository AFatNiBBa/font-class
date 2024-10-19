
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-r` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-r?s=solid square-r}
 * @preview ![square-r](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjU0IDQxOS4zNDYgMzIgMzg0IDMyWk0zMjMuNDA2IDM0NS44OTFDMzMxLjIxOSAzNTYuNjA5IDMyOC44NDQgMzcxLjYwOSAzMTguMTI1IDM3OS40MDZDMzEzLjg0NCAzODIuNTE2IDMwOC45MDYgMzg0IDMwNC4wMzEgMzg0QzI5Ni41OTQgMzg0IDI4OS4yODEgMzgwLjU3OCAyODQuNTk0IDM3NC4xMDlMMjIxLjk2OSAyODhIMTc2VjM2MEMxNzYgMzczLjI1IDE2NS4yNSAzODQgMTUyIDM4NFMxMjggMzczLjI1IDEyOCAzNjBWMTUyQzEyOCAxMzguNzUgMTM4Ljc1IDEyOCAxNTIgMTI4SDI1NkMzMDAuMTI1IDEyOCAzMzYgMTYzLjg5MSAzMzYgMjA4QzMzNiAyNDQuMTk1IDMxMS42ODggMjc0LjUgMjc4LjY0MSAyODQuMzM4TDMyMy40MDYgMzQ1Ljg5MVpNMjU2IDE3NkgxNzZWMjQwSDI1NkMyNzMuNjU2IDI0MCAyODggMjI1LjY0MSAyODggMjA4UzI3My42NTYgMTc2IDI1NiAxNzZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SquareR(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM323.406 345.891C331.219 356.609 328.844 371.609 318.125 379.406C313.844 382.516 308.906 384 304.031 384C296.594 384 289.281 380.578 284.594 374.109L221.969 288H176V360C176 373.25 165.25 384 152 384S128 373.25 128 360V152C128 138.75 138.75 128 152 128H256C300.125 128 336 163.891 336 208C336 244.195 311.688 274.5 278.641 284.338L323.406 345.891ZM256 176H176V240H256C273.656 240 288 225.641 288 208S273.656 176 256 176Z" />
        </Icon>
    </>
}
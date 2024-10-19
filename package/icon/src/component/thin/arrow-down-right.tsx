
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-right` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-right?s=thin arrow-down-right}
 * @preview ![arrow-down-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIgMTY3Ljk5OVY0MDguMDAxQzM1MiA0MTIuNDIgMzQ4LjQyIDQxNiAzNDQuMDAxIDQxNkgxMDMuOTk5Qzk5LjU4IDQxNiA5NiA0MTIuNDIgOTYgNDA4LjAwMVM5OS41OCA0MDAuMDAyIDEwMy45OTkgNDAwLjAwMkgzMjQuNjg4TDM0LjM0MSAxMDkuNjU1QzMxLjIyNSAxMDYuNTM5IDMxLjIxNCAxMDEuNDY4IDM0LjM0MSA5OC4zNDFTNDIuNTM5IDk1LjIyNSA0NS42NTUgOTguMzQxTDMzNi4wMDIgMzg4LjY4OFYxNjcuOTk5QzMzNi4wMDIgMTYzLjU4IDMzOS41ODEgMTYwIDM0NC4wMDEgMTYwQzM0OC40MjMgMTYwIDM1MiAxNjMuNTc3IDM1MiAxNjcuOTk5WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowDownRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M352 167.999V408.001C352 412.42 348.42 416 344.001 416H103.999C99.58 416 96 412.42 96 408.001S99.58 400.002 103.999 400.002H324.688L34.341 109.655C31.225 106.539 31.214 101.468 34.341 98.341S42.539 95.225 45.655 98.341L336.002 388.688V167.999C336.002 163.58 339.581 160 344.001 160C348.423 160 352 163.577 352 167.999Z" />
        </Icon>
    </>
}
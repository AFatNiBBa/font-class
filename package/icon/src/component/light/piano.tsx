
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `piano` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/piano?s=light piano}
 * @preview ![piano](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NzYuNTE0IDI3MC4xOTVMNDE3Ljg0MiAyNDAuOTg3QzM5Ni4xNzEgMjMwLjE5OSAzODQuMTI5IDIwNy42NyAzODMuOTk2IDE4My40NjJDMzgzLjQzOCA4Mi4wNjQgMzAxLjAyOSAwIDE5OS41IDBIMTg0LjVDODIuNjAzIDAgMCA4Mi42MDMgMCAxODQuNVY0NDhDMCA0ODMuMiAyOC44IDUxMiA2NCA1MTJINDQ4QzQ4My4yIDUxMiA1MTIgNDgzLjIgNTEyIDQ0OFYzMjcuNUM1MTIgMzAzLjIxMyA0OTguMjU2IDI4MS4wMTggNDc2LjUxNCAyNzAuMTk1Wk00NDggNDgwSDY0QzQ2LjMyNyA0ODAgMzIgNDY1LjY3MyAzMiA0NDhWMzg0SDgwVjQxNkM4MCA0MjQuOCA4Ny4yIDQzMiA5NiA0MzJIOTZDMTA0LjggNDMyIDExMiA0MjQuOCAxMTIgNDE2VjM4NEgxNDRWNDE2QzE0NCA0MjQuOCAxNTEuMiA0MzIgMTYwIDQzMkgxNjBDMTY4LjggNDMyIDE3NiA0MjQuOCAxNzYgNDE2VjM4NEgyMDhWNDE2QzIwOCA0MjQuOCAyMTUuMiA0MzIgMjI0IDQzMkgyMjRDMjMyLjggNDMyIDI0MCA0MjQuOCAyNDAgNDE2VjM4NEgzMzZWNDE2QzMzNiA0MjQuOCAzNDMuMiA0MzIgMzUyIDQzMkgzNTJDMzYwLjggNDMyIDM2OCA0MjQuOCAzNjggNDE2VjM4NEg0MDBWNDE2QzQwMCA0MjQuOCA0MDcuMiA0MzIgNDE2IDQzMkg0MTZDNDI0LjggNDMyIDQzMiA0MjQuOCA0MzIgNDE2VjM4NEg0ODBWNDQ4QzQ4MCA0NjUuNjczIDQ2NS42NzMgNDgwIDQ0OCA0ODBaTTQ4MCAzNTJIMzJWMTg0LjVDMzIgMTAwLjM3NSAxMDAuMzc1IDMyIDE4NC41IDMySDE5OS41QzI4My42MjUgMzIgMzUyIDEwMC4zNzUgMzUyIDE4NC41QzM1MS44NzUgMjIwLjg3NSAzNzIuNSAyNTQuMTI1IDQwNS4xMjUgMjcwLjI1TDQ2Mi4yNSAyOTguODc1QzQ3My4xMjUgMzA0LjM3NSA0ODAgMzE1LjM3NSA0ODAgMzI3LjVWMzUyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Piano(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M476.514 270.195L417.842 240.987C396.171 230.199 384.129 207.67 383.996 183.462C383.438 82.064 301.029 0 199.5 0H184.5C82.603 0 0 82.603 0 184.5V448C0 483.2 28.8 512 64 512H448C483.2 512 512 483.2 512 448V327.5C512 303.213 498.256 281.018 476.514 270.195ZM448 480H64C46.327 480 32 465.673 32 448V384H80V416C80 424.8 87.2 432 96 432H96C104.8 432 112 424.8 112 416V384H144V416C144 424.8 151.2 432 160 432H160C168.8 432 176 424.8 176 416V384H208V416C208 424.8 215.2 432 224 432H224C232.8 432 240 424.8 240 416V384H336V416C336 424.8 343.2 432 352 432H352C360.8 432 368 424.8 368 416V384H400V416C400 424.8 407.2 432 416 432H416C424.8 432 432 424.8 432 416V384H480V448C480 465.673 465.673 480 448 480ZM480 352H32V184.5C32 100.375 100.375 32 184.5 32H199.5C283.625 32 352 100.375 352 184.5C351.875 220.875 372.5 254.125 405.125 270.25L462.25 298.875C473.125 304.375 480 315.375 480 327.5V352Z" />
        </Icon>
    </>
}
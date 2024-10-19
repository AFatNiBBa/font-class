
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `message-pen` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/message-pen?s=regular message-pen}
 * @preview ![message-pen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjUuNjkxIDExNy4yNzNDMzE4LjY2IDExMC4yNDIgMzA3LjI0NiAxMTAuMjQyIDMwMC4yMTcgMTE3LjI3M0wyODEuOTgyIDEzNS41MDhMMzI5Ljk4OCAxODMuNTE2TDM0OC4yMjcgMTY1LjI3N0MzNTUuMjU2IDE1OC4yNDIgMzU1LjI1NiAxNDYuODM2IDM0OC4yMjcgMTM5LjgwNUwzMjUuNjkxIDExNy4yNzNaTTE3NC40MjIgMjQzLjA2MkMxNzIuNzQ2IDI0NC43NDIgMTcxLjYwNCAyNDYuODc1IDE3MS4xNDEgMjQ5LjE5NUwxNjEuNjE5IDI5Ni44MDVDMTYwLjc4MSAzMDEgMTY0LjQ4IDMwNC43MDMgMTY4LjY3OCAzMDMuODYzTDIxNi4yODkgMjk0LjM0NEMyMTguNjExIDI5My44NzUgMjIwLjc0NCAyOTIuNzM0IDIyMi40MiAyOTEuMDYyTDMxMy4wMDIgMjAwLjQ5NkwyNjQuOTk4IDE1Mi40OTJMMTc0LjQyMiAyNDMuMDYyWk00NDggMEg2NEMyOC43NSAwIDAgMjguNzUgMCA2NFYzNTIuMDAyQzAgMzg3LjI1MiAyOC43NSA0MTYuMDAyIDY0IDQxNi4wMDJIMTYwVjUwMC4wMDJDMTYwIDUwOS44MzggMTcxLjAyMyA1MTUuNDc5IDE3OS4xMjUgNTA5LjYyN0wzMDQgNDE2LjAwMkg0NDhDNDgzLjI1IDQxNi4wMDIgNTEyIDM4Ny4yNTIgNTEyIDM1Mi4wMDJWNjRDNTEyIDI4Ljc1IDQ4My4yNSAwIDQ0OCAwWk00NjQgMzUyLjAwMkM0NjQgMzYwLjc1MiA0NTYuNzUgMzY4LjAwMiA0NDggMzY4LjAwMkgyODhMMjA4IDQyOC4wMDJWMzY4LjAwMkg2NEM1NS4yNSAzNjguMDAyIDQ4IDM2MC43NTIgNDggMzUyLjAwMlY2NEM0OCA1NS4yNSA1NS4yNSA0OCA2NCA0OEg0NDhDNDU2Ljc1IDQ4IDQ2NCA1NS4yNSA0NjQgNjRWMzUyLjAwMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function MessagePen(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M325.691 117.273C318.66 110.242 307.246 110.242 300.217 117.273L281.982 135.508L329.988 183.516L348.227 165.277C355.256 158.242 355.256 146.836 348.227 139.805L325.691 117.273ZM174.422 243.062C172.746 244.742 171.604 246.875 171.141 249.195L161.619 296.805C160.781 301 164.48 304.703 168.678 303.863L216.289 294.344C218.611 293.875 220.744 292.734 222.42 291.062L313.002 200.496L264.998 152.492L174.422 243.062ZM448 0H64C28.75 0 0 28.75 0 64V352.002C0 387.252 28.75 416.002 64 416.002H160V500.002C160 509.838 171.023 515.479 179.125 509.627L304 416.002H448C483.25 416.002 512 387.252 512 352.002V64C512 28.75 483.25 0 448 0ZM464 352.002C464 360.752 456.75 368.002 448 368.002H288L208 428.002V368.002H64C55.25 368.002 48 360.752 48 352.002V64C48 55.25 55.25 48 64 48H448C456.75 48 464 55.25 464 64V352.002Z" />
        </Icon>
    </>
}

import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `gas-pump` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gas-pump?s=light gas-pump}
 * @preview ![gas-pump](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDIuNjQ2IDEyMC4wMjFMNDEyLjMyIDI5LjU4NkM0MDYuMDcgMjMuMzI2IDM5NS45MjggMjMuMzIyIDM4OS42NzIgMjkuNTc4QzM4My40MyAzNS44MiAzODMuNDE4IDQ1LjkzOSAzODkuNjQ4IDUyLjE5NUw0MTYgNzguNjI1VjE2MEM0MTYgMTg2LjUxIDQzNy40OSAyMDggNDY0IDIwOEg0ODBWMzgyLjI1QzQ4MCAzOTguMjE3IDQ2OS4xMjcgNDEzLjA3IDQ1My4zNjUgNDE1LjYyN0M0MzMuMzY5IDQxOC44NjkgNDE2IDQwMy40OTYgNDE2IDM4NFYzMzZDNDE2IDI5MS44MTYgMzgwLjE4NCAyNTYgMzM2IDI1NkgzMjBWNjRDMzIwIDI4LjgwMSAyOTEuMjAxIDAgMjU2IDBIOTZDNjAuODAxIDAgMzIgMjguODAxIDMyIDY0VjQ4MEgxNkM3LjIwMSA0ODAgMCA0ODcuMTk5IDAgNDk2UzcuMjAxIDUxMiAxNiA1MTJIMzM2QzM0NC44MDEgNTEyIDM1MiA1MDQuODAxIDM1MiA0OTZTMzQ0LjgwMSA0ODAgMzM2IDQ4MEgzMjBWMjg4SDMzNkMzNjIuNTEgMjg4IDM4NCAzMDkuNDkgMzg0IDMzNlYzODAuOTkyQzM4NCA0MTEuOTM5IDQwNC41NyA0NDAuNTc4IDQzNC45MDggNDQ2LjY5NUM0NzUuODgzIDQ1NC45NTUgNTEyIDQyMy41MDQgNTEyIDM4NFYxNDIuNjI1QzUxMiAxMzQuMTQ4IDUwOC42MzcgMTI2LjAyIDUwMi42NDYgMTIwLjAyMVpNMjg4IDQ4MEg2NFYyMjRIMjg4VjQ4MFpNMjg4IDE5Mkg2NFY2NEM2NCA0Ni4zNzUgNzguMzc1IDMyIDk2IDMySDI1NkMyNzMuNjI1IDMyIDI4OCA0Ni4zNzUgMjg4IDY0VjE5MlpNNDgwIDE3Nkg0NjRDNDU1LjI1IDE3NiA0NDggMTY4Ljc1IDQ0OCAxNjBWMTEwLjYyNUw0ODAgMTQyLjYyNVYxNzZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function GasPump(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M502.646 120.021L412.32 29.586C406.07 23.326 395.928 23.322 389.672 29.578C383.43 35.82 383.418 45.939 389.648 52.195L416 78.625V160C416 186.51 437.49 208 464 208H480V382.25C480 398.217 469.127 413.07 453.365 415.627C433.369 418.869 416 403.496 416 384V336C416 291.816 380.184 256 336 256H320V64C320 28.801 291.201 0 256 0H96C60.801 0 32 28.801 32 64V480H16C7.201 480 0 487.199 0 496S7.201 512 16 512H336C344.801 512 352 504.801 352 496S344.801 480 336 480H320V288H336C362.51 288 384 309.49 384 336V380.992C384 411.939 404.57 440.578 434.908 446.695C475.883 454.955 512 423.504 512 384V142.625C512 134.148 508.637 126.02 502.646 120.021ZM288 480H64V224H288V480ZM288 192H64V64C64 46.375 78.375 32 96 32H256C273.625 32 288 46.375 288 64V192ZM480 176H464C455.25 176 448 168.75 448 160V110.625L480 142.625V176Z" />
        </Icon>
    </>
}
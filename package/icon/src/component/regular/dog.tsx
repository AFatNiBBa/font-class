
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `dog` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dog?s=regular dog}
 * @preview ![dog](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTYgOTYuMDAyQzQwNy4xMjUgOTYuMDAyIDQwMCAxMDMuMTI3IDQwMCAxMTIuMDAyUzQwNy4xMjUgMTI4LjAwMiA0MTYgMTI4LjAwMlM0MzIgMTIwLjg3NyA0MzIgMTEyLjAwMlM0MjQuODc1IDk2LjAwMiA0MTYgOTYuMDAyWk01MzYgNjQuMDAySDQ4Ni44NzVMNDg2LjI1IDYzLjAwMkM0NzUuNTk0IDQ1Ljk1MyA0NTAuNDI0IDMyLjAwMiA0MzAuMzE2IDMyLjAwMkgzNjBDMzU5LjUgMzIuMDAyIDM1OSAzMi4xMjcgMzU4LjUgMzIuMTI3TDM1OC42MjUgMzIuMDAyTDMzMS4yNSA0Ljc1MkMzMjEuMjUgLTUuMzczIDMwNCAxLjc1MiAzMDQgMTYuMDAyVjE5Mi4wMDJIMTg0QzE1Mi42MjUgMTkyLjAwMiAxMjQuMzc1IDIwNC4zNzcgMTAzIDIyNC4wMDJIOTAuOTgyQzY4LjYzMyAyMjQuMDAyIDQ3LjM3MyAyMDcuMDIxIDQ3Ljk5IDE4NC42OEM0OC4zNjUgMTcxLjEyMSAzNy40NzUgMTYwLjAwMiAyNCAxNjAuMDAyQzEwLjc1IDE2MC4wMDIgMCAxNzAuNzUyIDAgMTg0LjAwMkMwLjEyNSAyMjYuMzc3IDMwLjI1IDI2Mi42MjcgNzEuODc1IDI3MC4zNzdDNjYuNzUgMjgzLjYyNyA2NC4xMjUgMjk3Ljc1IDY0IDMxMlY0NDhDNjQgNDgzLjE5OSA5Mi44MDEgNTEyIDEyOCA1MTJIMTQ0QzE3OS4xOTkgNTEyIDIwOCA0ODMuMTk5IDIwOCA0NDhWMzg0SDMzNlY0NDhDMzM2IDQ4My4xOTkgMzY0LjgwMSA1MTIgNDAwIDUxMkg0MTZDNDUxLjE5OSA1MTIgNDgwIDQ4My4xOTkgNDgwIDQ0OFYyNDAuMDAySDQ4OEM1MzYuNjAyIDI0MC4wMDIgNTc2IDIwMC42MDQgNTc2IDE1Mi4wMDJWMTA0LjAwMkM1NzYgODEuOTEgNTU4LjA5MiA2NC4wMDIgNTM2IDY0LjAwMlpNNDMyIDQ0OEM0MzIgNDU2LjgzNiA0MjQuODM2IDQ2NCA0MTYgNDY0SDQwMEMzOTEuMTY0IDQ2NCAzODQgNDU2LjgzNiAzODQgNDQ4VjMzNkgxNjBWNDQ4QzE2MCA0NTYuODM2IDE1Mi44MzYgNDY0IDE0NCA0NjRIMTI4QzExOS4xNjQgNDY0IDExMiA0NTYuODM2IDExMiA0NDhWMzEyQzExMiAyNzIuMjM2IDE0NC4yMzYgMjQwLjAwMiAxODQgMjQwLjAwMkgzMjBMNDMyIDI2OC43NTJWNDQ4Wk01MjggMTUyLjAwMkM1MjggMTc0LjEyNyA1MTAuMTI1IDE5Mi4wMDIgNDg4IDE5Mi4wMDJINDMyVjIxOS4yNTJMMzUyIDE5OS4yNTJWODguMDAyQzM1MiA4My42MjcgMzU1LjYyNSA4MC4wMDIgMzYwIDgwLjAwMkg0MzYuMjVDNDM5LjI1IDgwLjAwMiA0NDIgODEuNzUyIDQ0My4zNzUgODQuMzc3TDQ1Ny4xMjUgMTEyLjAwMkg1MjhWMTUyLjAwMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Dog(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M416 96.002C407.125 96.002 400 103.127 400 112.002S407.125 128.002 416 128.002S432 120.877 432 112.002S424.875 96.002 416 96.002ZM536 64.002H486.875L486.25 63.002C475.594 45.953 450.424 32.002 430.316 32.002H360C359.5 32.002 359 32.127 358.5 32.127L358.625 32.002L331.25 4.752C321.25 -5.373 304 1.752 304 16.002V192.002H184C152.625 192.002 124.375 204.377 103 224.002H90.982C68.633 224.002 47.373 207.021 47.99 184.68C48.365 171.121 37.475 160.002 24 160.002C10.75 160.002 0 170.752 0 184.002C0.125 226.377 30.25 262.627 71.875 270.377C66.75 283.627 64.125 297.75 64 312V448C64 483.199 92.801 512 128 512H144C179.199 512 208 483.199 208 448V384H336V448C336 483.199 364.801 512 400 512H416C451.199 512 480 483.199 480 448V240.002H488C536.602 240.002 576 200.604 576 152.002V104.002C576 81.91 558.092 64.002 536 64.002ZM432 448C432 456.836 424.836 464 416 464H400C391.164 464 384 456.836 384 448V336H160V448C160 456.836 152.836 464 144 464H128C119.164 464 112 456.836 112 448V312C112 272.236 144.236 240.002 184 240.002H320L432 268.752V448ZM528 152.002C528 174.127 510.125 192.002 488 192.002H432V219.252L352 199.252V88.002C352 83.627 355.625 80.002 360 80.002H436.25C439.25 80.002 442 81.752 443.375 84.377L457.125 112.002H528V152.002Z" />
        </Icon>
    </>
}
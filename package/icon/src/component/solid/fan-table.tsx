
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `fan-table` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/fan-table?s=solid fan-table}
 * @preview ![fan-table](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMTkyQzIxNS4xMjUgMTkyIDIwOCAxOTkuMTI1IDIwOCAyMDhTMjE1LjEyNSAyMjQgMjI0IDIyNFMyNDAgMjE2Ljg3NSAyNDAgMjA4UzIzMi44NzUgMTkyIDIyNCAxOTJaTTMyMCA0NDhIMjU2VjQxMy4yMDFDMzU1LjU4MiAzOTcuODA3IDQzMiAzMTEuOTU5IDQzMiAyMDhDNDMyIDkzLjEyNSAzMzguODc1IDAgMjI0IDBTMTYgOTMuMTI1IDE2IDIwOEMxNiAzMTEuOTU5IDkyLjQxOCAzOTcuODA3IDE5MiA0MTMuMjAxVjQ0OEgxMjhDOTkuNjI1IDQ0OCA3MyA0NjYuNSA2NC43NSA0OTIuMTI1QzYxLjUgNTAyLjAwMSA2OS44NzUgNTEyIDgwLjI1IDUxMkgzNjcuNzVDMzc4LjEyNSA1MTIgMzg2LjUgNTAyLjAwMSAzODMuMjUgNDkyLjEyNUMzNzUgNDY2LjUgMzQ4LjM3NSA0NDggMzIwIDQ0OFpNMTE5LjYyNSAzMzQuNzVDMTEyLjYyNSAzMzAuNzUgMTA1LjEyNSAzMTguMDAxIDExNC41IDMwNi41TDE4MiAyMjQuNUMxMjQuODc1IDIwNC4yNSAxMTIuODc1IDE0Ny4yNSAxMjIuMzc1IDExMS41QzEyOC43NSA4Ny4yNSAxNDQuNjI1IDY2LjYyNSAxNjYuMzc1IDU0LjEyNUMxNzkuMzc1IDQ2Ljc1IDE5MC42MjUgNTYuNSAxOTMuMzc1IDYzLjg3NUwyMzAuNSAxNjIuODc1QzI1OC41IDEzOSAyOTcuODc1IDEzMy42MjUgMzMxLjM3NSAxNDkuMTI1QzM2NC43NSAxNjQuNjI1IDM4Ni4xMjUgMTk4LjEyNSAzODYgMjM1QzM4NiAyNDAuNSAzODMuNjI1IDI0NS43NSAzNzkuMzc1IDI0OS4zNzVTMzY5LjUgMjU0LjUgMzY0LjEyNSAyNTMuNjI1TDI1OS4zNzUgMjM2LjEyNUMyNjMuNjI1IDI1OC4xMjUgMjU5Ljg3NSAyODAuODc1IDI0OC43NSAzMDAuMjVDMjIyLjYyNSAzNDUuMzc1IDE2NC44NzUgMzYwLjg3NSAxMTkuNjI1IDMzNC43NVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FanTable(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224 192C215.125 192 208 199.125 208 208S215.125 224 224 224S240 216.875 240 208S232.875 192 224 192ZM320 448H256V413.201C355.582 397.807 432 311.959 432 208C432 93.125 338.875 0 224 0S16 93.125 16 208C16 311.959 92.418 397.807 192 413.201V448H128C99.625 448 73 466.5 64.75 492.125C61.5 502.001 69.875 512 80.25 512H367.75C378.125 512 386.5 502.001 383.25 492.125C375 466.5 348.375 448 320 448ZM119.625 334.75C112.625 330.75 105.125 318.001 114.5 306.5L182 224.5C124.875 204.25 112.875 147.25 122.375 111.5C128.75 87.25 144.625 66.625 166.375 54.125C179.375 46.75 190.625 56.5 193.375 63.875L230.5 162.875C258.5 139 297.875 133.625 331.375 149.125C364.75 164.625 386.125 198.125 386 235C386 240.5 383.625 245.75 379.375 249.375S369.5 254.5 364.125 253.625L259.375 236.125C263.625 258.125 259.875 280.875 248.75 300.25C222.625 345.375 164.875 360.875 119.625 334.75Z" />
        </Icon>
    </>
}

import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `hat-winter` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hat-winter?s=solid hat-winter}
 * @preview ![hat-winter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTUuMjUgMTA1LjI1QzE4OS43NSAxMTUuMjUgMTkwLjc1IDEyOCAxOTkuMzc1IDEzNi42MjVDMjA0LjYyNSAxNDEuNzUgMjExLjM3NSAxNDQuMzc1IDIxOC4yNSAxNDQuMzc1QzIyMi43NSAxNDQuMzc1IDIyNi44NzUgMTQyLjg3NSAyMzAuNzUgMTQwLjc1QzIzNC4xMjUgMTUxLjc1IDI0My44NzUgMTYwIDI1NiAxNjBDMjY4LjEyNSAxNjAgMjc3Ljg3NSAxNTEuNzUgMjgxLjI1IDE0MC43NUMyODUuMjUgMTQyLjg3NSAyODkuMzc1IDE0NC4zNzUgMjkzLjc1IDE0NC4zNzVDMzAwLjUgMTQ0LjM3NSAzMDcuMjUgMTQxLjc1IDMxMi42MjUgMTM2LjYyNUMzMjEuMjUgMTI4IDMyMi4yNSAxMTUuMjUgMzE2Ljc1IDEwNS4yNUMzMjcuNzUgMTAxLjg3NSAzMzYgOTIuMTI1IDMzNiA4MFMzMjcuNzUgNTguMTI1IDMxNi43NSA1NC43NUMzMjIuMjUgNDQuNzUgMzIxLjI1IDMyIDMxMi42MjUgMjMuMzc1QzMwNCAxNC43NSAyOTEuMjUgMTMuNzUgMjgxLjI1IDE5LjI1QzI3Ny44NzUgOC4yNSAyNjguMTI1IDAgMjU2IDBDMjQzLjg3NSAwIDIzNC4xMjUgOC4yNSAyMzAuNzUgMTkuMjVDMjIwLjc1IDEzLjc1IDIwOCAxNC43NSAxOTkuMzc1IDIzLjM3NUMxOTAuNzUgMzIgMTg5Ljc1IDQ0Ljc1IDE5NS4yNSA1NC43NUMxODQuMjUgNTguMTI1IDE3NiA2Ny44NzUgMTc2IDgwUzE4NC4yNSAxMDEuODc1IDE5NS4yNSAxMDUuMjVaTTEyOCAyNzAuMTI1TDE5MiAzMDIuMTI1TDI1NiAyNzAuMTI1TDMyMCAzMDIuMTI1TDM4NCAyNzAuMTI1TDQ0OCAzMDIuMTI1TDQ1NS4yNSAyOTguNUM0MzUuNSAyNDguMjUgNDAwIDE5My42MjUgMzM2LjI1IDE1OEMzMzUuNzUgMTU4LjM3NSAzMzUuNjI1IDE1OC43NSAzMzUuMjUgMTU5LjI1QzMyNC42MjUgMTY5Ljc1IDMxMC42MjUgMTc1Ljg3NSAyOTUuNjI1IDE3Ni4zNzVDMjg1LjEyNSAxODYuMjUgMjcxLjEyNSAxOTIuMTI1IDI1NiAxOTIuMTI1QzI0MC43NSAxOTIuMTI1IDIyNi43NSAxODYuMjUgMjE2LjM3NSAxNzYuMzc1QzIwMS41IDE3NS44NzUgMTg3LjUgMTY5Ljg3NSAxNzYuNzUgMTU5LjI1QzE3Ni4zNzUgMTU4Ljc1IDE3Ni4yNSAxNTguMzc1IDE3NS43NSAxNThDMTExLjg3NSAxOTMuNjI1IDc2LjM3NSAyNDguMzc1IDU2Ljc1IDI5OC41TDY0IDMwMi4xMjVMMTI4IDI3MC4xMjVaTTQ5NiA0NDhIMTZDNy4yNSA0NDggMCA0NTUuMjUgMCA0NjRWNDk2QzAgNTA0Ljc1IDcuMjUgNTEyIDE2IDUxMkg0OTZDNTA0Ljc1IDUxMiA1MTIgNTA0Ljc1IDUxMiA0OTZWNDY0QzUxMiA0NTUuMjUgNTA0Ljc1IDQ0OCA0OTYgNDQ4Wk00NjUuNzUgMzI5LjEyNUw0NDggMzM3Ljg3NUwzODQgMzA1Ljg3NUwzMjAgMzM3Ljg3NUwyNTYgMzA1Ljg3NUwxOTIgMzM3Ljg3NUwxMjggMzA1Ljg3NUw2NCAzMzcuODc1TDQ2LjI1IDMyOS4xMjVDMzIuMjUgMzc3Ljc1IDMyIDQxNiAzMiA0MTZINDgwQzQ4MCA0MTYgNDc5Ljc1IDM3Ny43NSA0NjUuNzUgMzI5LjEyNVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function HatWinter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M195.25 105.25C189.75 115.25 190.75 128 199.375 136.625C204.625 141.75 211.375 144.375 218.25 144.375C222.75 144.375 226.875 142.875 230.75 140.75C234.125 151.75 243.875 160 256 160C268.125 160 277.875 151.75 281.25 140.75C285.25 142.875 289.375 144.375 293.75 144.375C300.5 144.375 307.25 141.75 312.625 136.625C321.25 128 322.25 115.25 316.75 105.25C327.75 101.875 336 92.125 336 80S327.75 58.125 316.75 54.75C322.25 44.75 321.25 32 312.625 23.375C304 14.75 291.25 13.75 281.25 19.25C277.875 8.25 268.125 0 256 0C243.875 0 234.125 8.25 230.75 19.25C220.75 13.75 208 14.75 199.375 23.375C190.75 32 189.75 44.75 195.25 54.75C184.25 58.125 176 67.875 176 80S184.25 101.875 195.25 105.25ZM128 270.125L192 302.125L256 270.125L320 302.125L384 270.125L448 302.125L455.25 298.5C435.5 248.25 400 193.625 336.25 158C335.75 158.375 335.625 158.75 335.25 159.25C324.625 169.75 310.625 175.875 295.625 176.375C285.125 186.25 271.125 192.125 256 192.125C240.75 192.125 226.75 186.25 216.375 176.375C201.5 175.875 187.5 169.875 176.75 159.25C176.375 158.75 176.25 158.375 175.75 158C111.875 193.625 76.375 248.375 56.75 298.5L64 302.125L128 270.125ZM496 448H16C7.25 448 0 455.25 0 464V496C0 504.75 7.25 512 16 512H496C504.75 512 512 504.75 512 496V464C512 455.25 504.75 448 496 448ZM465.75 329.125L448 337.875L384 305.875L320 337.875L256 305.875L192 337.875L128 305.875L64 337.875L46.25 329.125C32.25 377.75 32 416 32 416H480C480 416 479.75 377.75 465.75 329.125Z" />
        </Icon>
    </>
}
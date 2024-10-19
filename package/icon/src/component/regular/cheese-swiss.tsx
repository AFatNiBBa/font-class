
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `cheese-swiss` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cheese-swiss?s=regular cheese-swiss}
 * @preview ![cheese-swiss](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNzYgMzE5Ljg3NUMxNDkuNSAzMTkuODc1IDEyOCAzNDEuMzc1IDEyOCAzNjcuODc1UzE0OS41IDQxNS44NzUgMTc2IDQxNS44NzVTMjI0IDM5NC4zNzUgMjI0IDM2Ny44NzVTMjAyLjUgMzE5Ljg3NSAxNzYgMzE5Ljg3NVpNMjk5Ljg3NSAzMkgyOTguMzc1QzI5MS4yNSAzMi4xMjUgMjg0LjI1IDM0LjUgMjc4Ljc1IDM5TDAgMjU1Ljg3NVY0NDhDMCA0NjUuNjI1IDE0LjM3NSA0ODAgMzIgNDgwSDQ4MEM0OTcuNjI1IDQ4MCA1MTIgNDY1LjYyNSA1MTIgNDQ4VjI1NS44NzVDNTEyIDEzNiA0MTcuOTk5IDM4LjI1IDI5OS44NzUgMzJaTTE5Ni41IDE2My43NUMyMDQuNjI1IDE4MS44NzUgMjIzLjEyNSAxOTMgMjQyLjg3NSAxOTEuODc1QzI2Mi43NSAxOTAuNjI1IDI3OS43NSAxNzcuMzc1IDI4NS43NSAxNTguNVMyODUuNSAxMTkgMjY5Ljk5OSAxMDYuNjI1TDMwMy42MjUgODAuNUMzOTEuMzc1IDg4LjEyNSA0NTkuMjUgMTU5Ljg3NSA0NjMuMjUgMjQ3Ljg3NUg0MDkuMzc1QzQwMC44NzUgMjMzIDM4NS4xMjUgMjIzLjg3NSAzNjggMjIzLjg3NVMzMzUuMTI1IDIzMyAzMjYuNjI1IDI0Ny44NzVIODguNUwxOTYuNSAxNjMuNzVaTTQ2NCA0MzJINDhWMjk1Ljg3NUgzMjYuNjI1QzMzNS4xMjUgMzEwLjc1IDM1MC44NzUgMzE5Ljg3NSAzNjggMzE5Ljg3NVM0MDAuODc1IDMxMC43NSA0MDkuMzc1IDI5NS44NzVINDY0VjQzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CheeseSwiss(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M176 319.875C149.5 319.875 128 341.375 128 367.875S149.5 415.875 176 415.875S224 394.375 224 367.875S202.5 319.875 176 319.875ZM299.875 32H298.375C291.25 32.125 284.25 34.5 278.75 39L0 255.875V448C0 465.625 14.375 480 32 480H480C497.625 480 512 465.625 512 448V255.875C512 136 417.999 38.25 299.875 32ZM196.5 163.75C204.625 181.875 223.125 193 242.875 191.875C262.75 190.625 279.75 177.375 285.75 158.5S285.5 119 269.999 106.625L303.625 80.5C391.375 88.125 459.25 159.875 463.25 247.875H409.375C400.875 233 385.125 223.875 368 223.875S335.125 233 326.625 247.875H88.5L196.5 163.75ZM464 432H48V295.875H326.625C335.125 310.75 350.875 319.875 368 319.875S400.875 310.75 409.375 295.875H464V432Z" />
        </Icon>
    </>
}
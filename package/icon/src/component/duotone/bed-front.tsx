
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `bed-front` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bed-front?s=duotone bed-front}
 * @preview ![bed-front](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiAyODhWMzUySDBWMjg4QzAgMjUyLjYyNSAyOC42MjUgMjI0IDY0IDIyNEg0NDhDNDgzLjM3NSAyMjQgNTEyIDI1Mi42MjUgNTEyIDI4OFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMCAzNTJWNDY0QzAgNDcyLjg3NSA3LjEyNSA0ODAgMTYgNDgwSDQ4QzU2Ljg3NSA0ODAgNjQgNDcyLjg3NSA2NCA0NjRWNDE2SDQ0OFY0NjRDNDQ4IDQ3Mi44NzUgNDU1LjEyNSA0ODAgNDY0IDQ4MEg0OTZDNTA0Ljg3NSA0ODAgNTEyIDQ3Mi44NzUgNTEyIDQ2NFYzNTJIMFpNODAgMjI0VjE2MEM4MCAxNDIuMzc1IDk0LjM3NSAxMjggMTEyIDEyOEgyMDhDMjI1LjYyNSAxMjggMjQwIDE0Mi4zNzUgMjQwIDE2MFYyMjRIMjcyVjE2MEMyNzIgMTQyLjM3NSAyODYuMzc1IDEyOCAzMDQgMTI4SDQwMEM0MTcuNjI1IDEyOCA0MzIgMTQyLjM3NSA0MzIgMTYwVjIyNEg0NDhDNDU5LjcyMyAyMjQgNDcwLjU1NyAyMjcuMzczIDQ4MCAyMzIuODYzVjY0QzQ4MCA0Ni4zNzUgNDY1LjYyNSAzMiA0NDggMzJINjRDNDYuMzc1IDMyIDMyIDQ2LjM3NSAzMiA2NFYyMzIuODYzQzQxLjQ0MyAyMjcuMzczIDUyLjI3NyAyMjQgNjQgMjI0SDgwWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BedFront(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M512 288V352H0V288C0 252.625 28.625 224 64 224H448C483.375 224 512 252.625 512 288Z" />
            <path d="M0 352V464C0 472.875 7.125 480 16 480H48C56.875 480 64 472.875 64 464V416H448V464C448 472.875 455.125 480 464 480H496C504.875 480 512 472.875 512 464V352H0ZM80 224V160C80 142.375 94.375 128 112 128H208C225.625 128 240 142.375 240 160V224H272V160C272 142.375 286.375 128 304 128H400C417.625 128 432 142.375 432 160V224H448C459.723 224 470.557 227.373 480 232.863V64C480 46.375 465.625 32 448 32H64C46.375 32 32 46.375 32 64V232.863C41.443 227.373 52.277 224 64 224H80Z" />
        </Icon>
    </>
}

import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-arrow-up-right` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-up-right?s=duotone square-arrow-up-right}
 * @preview ![square-arrow-up-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCAzMkg2NEMyOC42NTQgMzIgMCA2MC42NTYgMCA5NlY0MTZDMCA0NTEuMzQ0IDI4LjY1NCA0ODAgNjQgNDgwSDM4NEM0MTkuMzQ2IDQ4MCA0NDggNDUxLjM0NCA0NDggNDE2Vjk2QzQ0OCA2MC42NTYgNDE5LjM0NiAzMiAzODQgMzJaTTM0NCAzMTJDMzQ0IDMyOS42ODggMzI5LjY4OCAzNDQgMzEyIDM0NFMyODAgMzI5LjY4OCAyODAgMzEyVjI0NS4yNUwxNTguNjI1IDM2Ni42MjVDMTUyLjM3NSAzNzIuODc1IDE0NC4xODggMzc2IDEzNiAzNzZTMTE5LjYyNSAzNzIuODc1IDExMy4zNzUgMzY2LjYyNUMxMDAuODc1IDM1NC4xMjUgMTAwLjg3NSAzMzMuODc1IDExMy4zNzUgMzIxLjM3NUwyMzQuNzUgMjAwSDE2OEMxNTAuMzEyIDIwMCAxMzYgMTg1LjY4OCAxMzYgMTY4UzE1MC4zMTIgMTM2IDE2OCAxMzZIMzEyQzMyOS42ODggMTM2IDM0NCAxNTAuMzEyIDM0NCAxNjhWMzEyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zNDQgMzEyQzM0NCAzMjkuNjg4IDMyOS42ODcgMzQ0IDMxMiAzNDRTMjgwIDMyOS42ODggMjgwIDMxMlYyNDUuMjVMMTU4LjYyNSAzNjYuNjI1QzE1Mi4zNzUgMzcyLjg3NSAxNDQuMTg3IDM3NiAxMzYgMzc2UzExOS42MjUgMzcyLjg3NSAxMTMuMzc1IDM2Ni42MjVDMTAwLjg3NSAzNTQuMTI1IDEwMC44NzUgMzMzLjg3NSAxMTMuMzc1IDMyMS4zNzVMMjM0Ljc1IDIwMEgxNjhDMTUwLjMxMiAyMDAgMTM2IDE4NS42ODggMTM2IDE2OFMxNTAuMzEyIDEzNiAxNjggMTM2SDMxMkMzMjkuNjg3IDEzNiAzNDQgMTUwLjMxMiAzNDQgMTY4VjMxMloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function SquareArrowUpRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M384 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.656 419.346 32 384 32ZM344 312C344 329.688 329.688 344 312 344S280 329.688 280 312V245.25L158.625 366.625C152.375 372.875 144.188 376 136 376S119.625 372.875 113.375 366.625C100.875 354.125 100.875 333.875 113.375 321.375L234.75 200H168C150.312 200 136 185.688 136 168S150.312 136 168 136H312C329.688 136 344 150.312 344 168V312Z" />
            <path d="M344 312C344 329.688 329.687 344 312 344S280 329.688 280 312V245.25L158.625 366.625C152.375 372.875 144.187 376 136 376S119.625 372.875 113.375 366.625C100.875 354.125 100.875 333.875 113.375 321.375L234.75 200H168C150.312 200 136 185.688 136 168S150.312 136 168 136H312C329.687 136 344 150.312 344 168V312Z" />
        </Icon>
    </>
}
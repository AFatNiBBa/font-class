
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-to-line` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-to-line?s=solid arrow-left-to-line}
 * @preview ![arrow-left-to-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTAuNjI1IDEwNS4zNzVDMjk4LjEyNSA5Mi44NzUgMjc3Ljg3NSA5Mi44NzUgMjY1LjM3NSAxMDUuMzc1TDEzNy4zNzUgMjMzLjM3NUMxMjQuODc1IDI0NS44NzUgMTI0Ljg3NSAyNjYuMTI1IDEzNy4zNzUgMjc4LjYyNUwyNjUuMzc1IDQwNi42MjVDMjc3Ljg3NSA0MTkuMTI1IDI5OC4xMjUgNDE5LjEyNSAzMTAuNjI1IDQwNi42MjVDMzE2Ljg3NSA0MDAuMzc1IDMyMCAzOTIuMTg4IDMyMCAzODRTMzE2Ljg3NSAzNjcuNjI1IDMxMC42MjUgMzYxLjM3NUwyMzcuMjUgMjg4SDQxNkM0MzMuNjg4IDI4OCA0NDggMjczLjY4OCA0NDggMjU2UzQzMy42ODggMjI0IDQxNiAyMjRIMjM3LjI1TDMxMC42MjUgMTUwLjYyNUMzMjMuMTI1IDEzOC4xMjUgMzIzLjEyNSAxMTcuODc1IDMxMC42MjUgMTA1LjM3NVpNMzIgNjRDMTQuMzEyIDY0IDAgNzguMzEyIDAgOTZWNDE2QzAgNDMzLjY4OCAxNC4zMTIgNDQ4IDMyIDQ0OFM2NCA0MzMuNjg4IDY0IDQxNlY5NkM2NCA3OC4zMTIgNDkuNjg4IDY0IDMyIDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowLeftToLine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M310.625 105.375C298.125 92.875 277.875 92.875 265.375 105.375L137.375 233.375C124.875 245.875 124.875 266.125 137.375 278.625L265.375 406.625C277.875 419.125 298.125 419.125 310.625 406.625C316.875 400.375 320 392.188 320 384S316.875 367.625 310.625 361.375L237.25 288H416C433.688 288 448 273.688 448 256S433.688 224 416 224H237.25L310.625 150.625C323.125 138.125 323.125 117.875 310.625 105.375ZM32 64C14.312 64 0 78.312 0 96V416C0 433.688 14.312 448 32 448S64 433.688 64 416V96C64 78.312 49.688 64 32 64Z" />
        </Icon>
    </>
}

import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `standard-definition` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/standard-definition?s=thin standard-definition}
 * @preview ![standard-definition](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMzJINjRDMjguNjU0IDMyIDAgNjAuNjUyIDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEg1MTJDNTQ3LjM0NiA0ODAgNTc2IDQ1MS4zNDYgNTc2IDQxNlY5NkM1NzYgNjAuNjUyIDU0Ny4zNDYgMzIgNTEyIDMyWk01NjAgNDE2QzU2MCA0NDIuNDY3IDUzOC40NjcgNDY0IDUxMiA0NjRINjRDMzcuNTMzIDQ2NCAxNiA0NDIuNDY3IDE2IDQxNlY5NkMxNiA2OS41MzMgMzcuNTMzIDQ4IDY0IDQ4SDUxMkM1MzguNDY3IDQ4IDU2MCA2OS41MzMgNTYwIDk2VjQxNlpNMzg0IDE2MEgzMjBDMzE1LjU5NCAxNjAgMzEyIDE2My41NzggMzEyIDE2OFYzNDRDMzEyIDM0OC40MjIgMzE1LjU5NCAzNTIgMzIwIDM1MkgzODRDNDM2LjkzOCAzNTIgNDgwIDMwOC45MzggNDgwIDI1NlM0MzYuOTM4IDE2MCAzODQgMTYwWk0zODQgMzM2SDMyOFYxNzZIMzg0QzQyOC4xMjUgMTc2IDQ2NCAyMTEuODkxIDQ2NCAyNTZTNDI4LjEyNSAzMzYgMzg0IDMzNlpNMTkzLjc4MSAyNDguMTcyTDE4NC4zMTIgMjQ1LjkzOEMxNDMuNjI1IDIzNi4yMDMgMTIzLjg3NSAyMjcuMDc4IDEyOC43MTkgMjA0LjE3MkMxMzMuMzEyIDE4Mi42MjUgMTY1LjU2MiAxNzEuNzk3IDIwOS4zNzUgMTc3LjQzOEMyMTguNTYyIDE3OC42MDkgMjI5LjUzMSAxODEuMDMxIDI0My44NDQgMTg1LjA0N0MyNDguMDMxIDE4Ni4xNzIgMjUyLjUgMTgzLjc1IDI1My42ODggMTc5LjUxNkMyNTQuOTA2IDE3NS4yNSAyNTIuNDA2IDE3MC44NDQgMjQ4LjE1NiAxNjkuNjQxQzIzMy4wNjIgMTY1LjQwNiAyMjEuMzc1IDE2Mi44MjggMjExLjM3NSAxNjEuNTYyQzE1OC40MDYgMTU0Ljg1OSAxMTkuNTk0IDE3MC4xODggMTEzLjA5NCAyMDAuODU5QzEwNC4xMjUgMjQzLjIwMyAxNTEuOTY5IDI1NC42NTYgMTgwLjU2MiAyNjEuNUwxOTAuMTU2IDI2My43NUMyMzQuMjgxIDI3NC4wNDcgMjYwLjcxOSAyODIuMTU2IDI1NS4yODEgMzA3LjgyOEMyNTAuNjg3IDMyOS4zNzUgMjE4LjM3NSAzNDAuMDMxIDE3NC41OTQgMzM0LjU2MkMxNjAuMjE5IDMzMi43OTcgMTQzLjg0NCAzMjcuOTg0IDEyOS4zNzUgMzIzLjczNEwxMjIuMjE5IDMyMS42NDFDMTE3Ljc4MSAzMjAuMzQ0IDExMy41IDMyMi44NzUgMTEyLjMxMiAzMjcuMTA5QzExMS4wOTQgMzMxLjM0NCAxMTMuNTMxIDMzNS43ODEgMTE3Ljc4MSAzMzcuMDE2TDEyNC44NzUgMzM5LjA3OEMxMzkuOTA2IDM0My41IDE1Ni45NjkgMzQ4LjUxNiAxNzIuNjI1IDM1MC40MzdDMTgwLjkzNyAzNTEuNSAxODguOTA2IDM1Mi4wMTYgMTk2LjQ2OSAzNTIuMDE2QzIzNy4xMjUgMzUyLjAxNiAyNjUuNDM3IDMzNyAyNzAuOTA2IDMxMS4xNDFDMjgwIDI2OC4yODEgMjM0LjE4OCAyNTcuNTk0IDE5My43ODEgMjQ4LjE3MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function StandardDefinition(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M512 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H512C547.346 480 576 451.346 576 416V96C576 60.652 547.346 32 512 32ZM560 416C560 442.467 538.467 464 512 464H64C37.533 464 16 442.467 16 416V96C16 69.533 37.533 48 64 48H512C538.467 48 560 69.533 560 96V416ZM384 160H320C315.594 160 312 163.578 312 168V344C312 348.422 315.594 352 320 352H384C436.938 352 480 308.938 480 256S436.938 160 384 160ZM384 336H328V176H384C428.125 176 464 211.891 464 256S428.125 336 384 336ZM193.781 248.172L184.312 245.938C143.625 236.203 123.875 227.078 128.719 204.172C133.312 182.625 165.562 171.797 209.375 177.438C218.562 178.609 229.531 181.031 243.844 185.047C248.031 186.172 252.5 183.75 253.688 179.516C254.906 175.25 252.406 170.844 248.156 169.641C233.062 165.406 221.375 162.828 211.375 161.562C158.406 154.859 119.594 170.188 113.094 200.859C104.125 243.203 151.969 254.656 180.562 261.5L190.156 263.75C234.281 274.047 260.719 282.156 255.281 307.828C250.687 329.375 218.375 340.031 174.594 334.562C160.219 332.797 143.844 327.984 129.375 323.734L122.219 321.641C117.781 320.344 113.5 322.875 112.312 327.109C111.094 331.344 113.531 335.781 117.781 337.016L124.875 339.078C139.906 343.5 156.969 348.516 172.625 350.437C180.937 351.5 188.906 352.016 196.469 352.016C237.125 352.016 265.437 337 270.906 311.141C280 268.281 234.188 257.594 193.781 248.172Z" />
        </Icon>
    </>
}

import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `star` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/star?s=duotone star}
 * @preview ![star](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMxNi43NCAxNy44MDVMMzgyLjE3MSAxNTAuMTk2TDUyOC41MzIgMTcxLjQ5MUM1NTQuNzk4IDE3NS4yODcgNTY1LjMxNyAyMDcuNTggNTQ2LjI4MyAyMjYuMDc4TDQ0MC4zNzEgMzI5LjA2N0w0NjUuNDE3IDQ3NC41NTFDNDY5LjkyNSA1MDAuODYgNDQyLjE4NyA1MjAuNDUyIDQxOC45MjYgNTA4LjI1TDI4OCA0MzkuNTU1TDE1Ny4wNzQgNTA4LjI1QzEzMy44MTMgNTIwLjU0NiAxMDYuMDc1IDUwMC44NiAxMTAuNTgzIDQ3NC41NTFMMTM1LjYyOSAzMjkuMDY3TDI5LjcxNyAyMjYuMDc4QzEwLjY4MyAyMDcuNTggMjEuMjAyIDE3NS4yODcgNDcuNDY4IDE3MS40OTFMMTkzLjgyOSAxNTAuMTk2TDI1OS4yNiAxNy44MDVDMjcxLjA2MyAtNi4wODMgMzA1LjAzMSAtNS43ODYgMzE2Ljc0IDE3LjgwNVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Star(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path opacity={.4} d="M316.74 17.805L382.171 150.196L528.532 171.491C554.798 175.287 565.317 207.58 546.283 226.078L440.371 329.067L465.417 474.551C469.925 500.86 442.187 520.452 418.926 508.25L288 439.555L157.074 508.25C133.813 520.546 106.075 500.86 110.583 474.551L135.629 329.067L29.717 226.078C10.683 207.58 21.202 175.287 47.468 171.491L193.829 150.196L259.26 17.805C271.063 -6.083 305.031 -5.786 316.74 17.805Z" />
        </Icon>
    </>
}
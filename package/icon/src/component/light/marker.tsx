
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `marker` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/marker?s=light marker}
 * @preview ![marker](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MjEuMzk3IDBDMzk4LjI3NCAwIDM3NS4xNDkgOC44NzUgMzU3LjM5OSAyNi41TDMxNS4yNzIgNjguNjQ2TDI4OS45MzggNDMuMzEyQzI3MS4yNTEgMjQuNTk0IDI0MC43NTEgMjQuNTk0IDIyMi4wNjMgNDMuMzEyTDExNi42ODggMTQ4LjY4OEMxMTAuNDM4IDE1NC45MzggMTEwLjQzOCAxNjUuMDYzIDExNi42ODggMTcxLjMxMkMxMTkuODEzIDE3NC40MzggMTIzLjkwNyAxNzYgMTI4LjAwMSAxNzZTMTM2LjE4OCAxNzQuNDM4IDEzOS4zMTMgMTcxLjMxMkwyNDQuNjg4IDY1LjkzN0MyNTAuOTM4IDU5LjY4NyAyNjEuMDYzIDU5LjY4NyAyNjcuMzEzIDY1LjkzN0wyOTIuNjUzIDkxLjI3N0w5NC4wMjggMjkwQzQxLjUzIDM0Mi41IDguNDA1IDQxMS4zNzUgMC4xNTUgNDg1LjEyNVY0ODUuMzc1Qy0xLjQ3IDQ5OS43NSA5LjkwNSA1MTIgMjQuMDMgNTEyQzI0LjkwNSA1MTIgMjUuNzggNTEyIDI2LjY1NSA1MTEuODc1QzEwMC41MjggNTAzLjYyNSAxNjkuNDAzIDQ3MC42MjUgMjIxLjkwMSA0MThMNDg1LjM5NyAxNTQuNUM1NDIuNTIgOTcuMzc1IDUwMS4zOTcgMCA0MjEuMzk3IDBaTTE5OS4yNDcgMzk1LjRDMTU0Ljc4MiA0MzkuOTczIDk2LjQ4MyA0NjkuMjc1IDMzLjI0MSA0NzguNzQ0QzQyLjQzNCA0MTYuMTI3IDcxLjgyMyAzNTcuNDYxIDExNi42NjEgMzEyLjYyMUwxODcuMzExIDI0MS45MzZMMjcwLjAxIDMyNC42MzVMMTk5LjI0NyAzOTUuNFpNNDYyLjc3IDEzMS44NzNMMjkyLjYzNSAzMDIuMDFMMjA5LjkzIDIxOS4zMDVMMzc5Ljk0NiA0OS4yMDdDMzkxLjEyMiAzOC4xMTEgNDA1Ljg0MiAzMiA0MjEuMzk3IDMyQzQ1MC4wODkgMzIgNDY4LjA4MSA1MC43NTQgNDc1LjM1IDY4LjMwN0M0ODQuNzAyIDkwLjg4MSA0NzkuOTk5IDExNC42NDMgNDYyLjc3IDEzMS44NzNaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Marker(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M421.397 0C398.274 0 375.149 8.875 357.399 26.5L315.272 68.646L289.938 43.312C271.251 24.594 240.751 24.594 222.063 43.312L116.688 148.688C110.438 154.938 110.438 165.063 116.688 171.312C119.813 174.438 123.907 176 128.001 176S136.188 174.438 139.313 171.312L244.688 65.937C250.938 59.687 261.063 59.687 267.313 65.937L292.653 91.277L94.028 290C41.53 342.5 8.405 411.375 0.155 485.125V485.375C-1.47 499.75 9.905 512 24.03 512C24.905 512 25.78 512 26.655 511.875C100.528 503.625 169.403 470.625 221.901 418L485.397 154.5C542.52 97.375 501.397 0 421.397 0ZM199.247 395.4C154.782 439.973 96.483 469.275 33.241 478.744C42.434 416.127 71.823 357.461 116.661 312.621L187.311 241.936L270.01 324.635L199.247 395.4ZM462.77 131.873L292.635 302.01L209.93 219.305L379.946 49.207C391.122 38.111 405.842 32 421.397 32C450.089 32 468.081 50.754 475.35 68.307C484.702 90.881 479.999 114.643 462.77 131.873Z" />
        </Icon>
    </>
}
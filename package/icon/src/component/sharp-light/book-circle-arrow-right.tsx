
import { Icon } from "../../index";

/**
 * A component that renders the `book-circle-arrow-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-circle-arrow-right?s=sharp-light book-circle-arrow-right}
 * @preview ![book-circle-arrow-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgMEMyOC43IDAgMCAyOC43IDAgNjRMMCA0NDhzMCAwIDAgMGMwIDM1LjMgMjguNyA2NCA2NCA2NGwzMzAuOCAwYy0xMi45LTkuMS0yNC41LTE5LjktMzQuNi0zMkw2NCA0ODBjLTE3LjcgMC0zMi0xNC4zLTMyLTMyczE0LjMtMzIgMzItMzJsMjYyLjYgMGMtMi45LTEwLjMtNC45LTIxLTUuOS0zMkw2NCAzODRjLTExLjcgMC0yMi42IDMuMS0zMiA4LjZMMzIgNjRjMC0xNy43IDE0LjMtMzIgMzItMzJsMzUyIDAgMCAxNzkuMmMxMC4xLTUuMiAyMC44LTkuNCAzMi0xMi42TDQ0OCAxNmwwLTE2TDQzMiAwIDY0IDB6TTQ5NiAyNTZhMTEyIDExMiAwIDEgMSAwIDIyNCAxMTIgMTEyIDAgMSAxIDAtMjI0em0wIDI1NmExNDQgMTQ0IDAgMSAwIDAtMjg4IDE0NCAxNDQgMCAxIDAgMCAyODh6bTgtMjIyLjZMNDgxLjQgMzEybDExLjMgMTEuMyAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMSAuMWMwIDAgMCAwIC4xIC4xTDQzMiAzNTJsLTE2IDAgMCAzMiAxNiAwIDg5LjQgMC0yOC43IDI4LjdMNDgxLjQgNDI0IDUwNCA0NDYuNmwxMS4zLTExLjMgNTYtNTZMNTgyLjYgMzY4bC0xMS4zLTExLjNMNTYwIDM2OGwxMS4zLTExLjNzMCAwIDAgMHMwIDAgMCAwczAgMCAwIDBzMCAwIDAgMHMwIDAgMCAwczAgMCAwIDBzMCAwIDAgMHMwIDAgMCAwczAgMCAwIDBzMCAwIDAgMHMwIDAgMCAwczAgMCAwIDBzMCAwIDAgMHMwIDAgMCAwczAgMCAwIDBzMCAwIDAgMHMwIDAgMCAwczAgMCAwIDBzMCAwIDAgMHMwIDAgMCAwczAgMCAwIDBzMCAwIDAgMHMwIDAgMCAwczAgMCAwIDBzMCAwIDAgMHMwIDAgMCAwczAgMCAwIDBzMCAwIDAgMHMwIDAgMCAwczAgMCAwIDBzMCAwIDAgMHMwIDAgMCAwczAgMCAwIDBzMCAwIDAgMHMwIDAgMCAwczAgMCAwIDBzMCAwIDAgMHMwIDAgMCAwczAgMCAwIDBzMCAwIDAgMHMwIDAgMCAwczAgMCAwIDBzMCAwIDAgMHMwIDAgMCAwczAgMCAwIDBzMCAwIDAgMHMwIDAgMCAwczAgMCAwIDBzMCAwIDAgMHMwIDAgMCAwczAgMCAwIDBzMCAwIDAgMHMwIDAgMCAwczAgMCAwIDBzMCAwIDAgMHMwIDAgMCAwczAgMCAwIDBzMCAwIDAgMHMwIDAgMCAwczAgMCAwIDBzMCAwIDAgMHMwIDAgMCAwczAgMCAwIDBzMCAwIDAgMHMwIDAgMCAwczAgMCAwIDBzMCAwIDAgMHMwIDAgMCAwczAgMC0uMS0uMXMwIDAgMCAwczAgMC0uMS0uMXMwIDAtLjEtLjFzMCAwLS4xLS4xczAgMC0uMS0uMXMwIDAtLjEtLjFzMCAwLS4xLS4xczAgMC0uMS0uMXMwIDAtLjEtLjFzMCAwLS4xLS4xczAgMC0uMS0uMXMwIDAtLjEtLjFzMCAwLS4xLS4xczAgMC0uMS0uMXMwIDAtLjEtLjFzMCAwLS4xLS4xczAgMC0uMS0uMXMwIDAtLjEtLjFzMCAwLS4xLS4xczAgMC0uMS0uMXMwIDAtLjEtLjFzMCAwLS4xLS4xczAgMC0uMS0uMXMwIDAtLjEtLjFzMCAwLS4xLS4xczAgMC0uMS0uMXMwIDAtLjEtLjFzMCAwLS4xLS4xczAgMC0uMS0uMXMwIDAtLjEtLjFzMCAwLS4xLS4xbC0uMS0uMWMwIDAgMCAwLS4xLS4xbC0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMS0uMUw1MDQgMjg5LjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const BookCircleArrowRight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 0C28.7 0 0 28.7 0 64L0 448s0 0 0 0c0 35.3 28.7 64 64 64l330.8 0c-12.9-9.1-24.5-19.9-34.6-32L64 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l262.6 0c-2.9-10.3-4.9-21-5.9-32L64 384c-11.7 0-22.6 3.1-32 8.6L32 64c0-17.7 14.3-32 32-32l352 0 0 179.2c10.1-5.2 20.8-9.4 32-12.6L448 16l0-16L432 0 64 0zM496 256a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 256a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm8-222.6L481.4 312l11.3 11.3 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1 .1c0 0 0 0 .1 .1L432 352l-16 0 0 32 16 0 89.4 0-28.7 28.7L481.4 424 504 446.6l11.3-11.3 56-56L582.6 368l-11.3-11.3L560 368l11.3-11.3s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0-.1-.1s0 0 0 0s0 0-.1-.1s0 0-.1-.1s0 0-.1-.1s0 0-.1-.1s0 0-.1-.1s0 0-.1-.1s0 0-.1-.1s0 0-.1-.1s0 0-.1-.1s0 0-.1-.1s0 0-.1-.1s0 0-.1-.1s0 0-.1-.1s0 0-.1-.1s0 0-.1-.1s0 0-.1-.1s0 0-.1-.1s0 0-.1-.1s0 0-.1-.1s0 0-.1-.1s0 0-.1-.1s0 0-.1-.1s0 0-.1-.1s0 0-.1-.1s0 0-.1-.1s0 0-.1-.1s0 0-.1-.1s0 0-.1-.1s0 0-.1-.1s0 0-.1-.1l-.1-.1c0 0 0 0-.1-.1l-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1L504 289.4z" />
    </Icon>
);

export default BookCircleArrowRight;
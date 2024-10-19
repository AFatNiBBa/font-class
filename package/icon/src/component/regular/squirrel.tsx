
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `squirrel` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/squirrel?s=regular squirrel}
 * @preview ![squirrel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NzkuOTY1IDI1NkM0OTcuNTg5IDI1NiA1MTEuOTYzIDI0MS42MjUgNTExLjk2MyAyMjRWMTkyQzUxMS45NjMgMTMzLjUgNDc0Ljg0IDg2LjEyNSA0MjMuOTY5IDc0LjYyNVY0OEM0MjMuOTY5IDM0Ljc1IDQxMy4yMiAyNCAzOTkuOTcxIDI0QzM0NC42IDI0IDMxMS4yMjcgNjYuNzUgMjkzLjQ3OSA5Ny4yNUMyNjQuOTgxIDQzIDIwNi4xMSAwIDE0Ny43MzkgMEM2Ni4yNDUgMCAwIDY2LjI1IDAgMTQ3Ljc1QzAgMjE2Ljc1IDQ3LjYyMiAyNzQuODc1IDExMS43NDIgMjkxTDEwMi44NjggMzA5LjM3NUM4NC4yNDQgMzU4LjI1IDkxLjM2OCA0MDkuNSAxMjUuNDkxIDQ1Mi4xMjVDMTU2Ljg2NCA0OTEuMzc1IDIwNS45ODUgNTEyIDI1Ni4yMzEgNTEySDQ5NS45NjRDNTA0LjIxMyA1MTIgNTExLjU4OCA1MDUuNzUgNTExLjk2MyA0OTcuNjI1QzUxMi44MzggNDc5LjEyNSA0OTguMjE0IDQ2NCA0NzkuOTY1IDQ2NEg0NTAuMDkyQzQ2Mi44NDEgNDQ1LjYyNSA0NzEuOTY2IDQyMy41IDQ3MS45NjYgNDAwQzQ3MS45NjYgMzQ4LjYyNSA0NDEuOTY3IDMxMC4zNzUgMzk2LjA5NiAyOTkuMjVMNDAzLjk3MSAyNTZINDc5Ljk2NVpNMzUzLjIyNCAzNDRDMzczLjcyMyAzNDQgMzk0LjA5NiAzNTEuMTI1IDQwOC41OTUgMzY1LjYyNUM0NTAuNDY3IDQwNy41IDM5NS4yMjEgNDU4LjYyNSAzODEuNTk3IDQ2NEgyNDIuNDgyQzE4Ni4zNjEgNDY0IDE0MC44NjUgNDE4LjM3NSAxNDAuODY1IDM2Mi4zNzVDMTQwLjg2NSAzNTAuNjI1IDE0My4xMTUgMzM4LjUgMTQ2Ljk4OSAzMjguMjVMMTg1Ljk4NiAyNDcuNUgxNTEuMjM5QzEwMC40OTMgMjQ3LjUgNTUuMjQ2IDIxMS4xMjUgNDguODcxIDE2MC44NzVDNDAuOTk3IDEwMCA4OC4zNjkgNDggMTQ3LjczOSA0OEMyMDIuNjEgNDggMjYyLjk4MSAxMDguMjUgMjYyLjk4MSAxNjMuMjVIMjYzLjM1NkwyMDguOTg1IDI5My44NzVDMjA1LjYxIDMwMiAyMDkuNDg1IDMxMS4zNzUgMjE3LjYwOSAzMTQuNzVMMjMyLjQ4MyAzMjFDMjQwLjYwNyAzMjQuMzc1IDI0OS45ODEgMzIwLjUgMjUzLjM1NyAzMTIuMjVMMzI1LjQ3NiAxMzguNzVDMzQxLjQ3NSAxMDYuNzUgMzU3Ljg0OSA4Ni43NSAzNzUuOTczIDc3Ljc1VjEyMEgzOTkuOTcxQzQzNS44NDMgMTIwIDQ2My45NjYgMTUxLjYyNSA0NjMuOTY2IDE5MlYyMDhIMzYzLjk3M0wzMzkuMjI1IDM0NEgzNTMuMjI0Wk0zOTkuOTcxIDE3NkM0MDguODQ1IDE3NiA0MTUuOTcgMTY4Ljg3NSA0MTUuOTcgMTYwUzQwOC44NDUgMTQ0IDM5OS45NzEgMTQ0UzM4My45NzIgMTUxLjEyNSAzODMuOTcyIDE2MFMzOTEuMDk2IDE3NiAzOTkuOTcxIDE3NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Squirrel(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M479.965 256C497.589 256 511.963 241.625 511.963 224V192C511.963 133.5 474.84 86.125 423.969 74.625V48C423.969 34.75 413.22 24 399.971 24C344.6 24 311.227 66.75 293.479 97.25C264.981 43 206.11 0 147.739 0C66.245 0 0 66.25 0 147.75C0 216.75 47.622 274.875 111.742 291L102.868 309.375C84.244 358.25 91.368 409.5 125.491 452.125C156.864 491.375 205.985 512 256.231 512H495.964C504.213 512 511.588 505.75 511.963 497.625C512.838 479.125 498.214 464 479.965 464H450.092C462.841 445.625 471.966 423.5 471.966 400C471.966 348.625 441.967 310.375 396.096 299.25L403.971 256H479.965ZM353.224 344C373.723 344 394.096 351.125 408.595 365.625C450.467 407.5 395.221 458.625 381.597 464H242.482C186.361 464 140.865 418.375 140.865 362.375C140.865 350.625 143.115 338.5 146.989 328.25L185.986 247.5H151.239C100.493 247.5 55.246 211.125 48.871 160.875C40.997 100 88.369 48 147.739 48C202.61 48 262.981 108.25 262.981 163.25H263.356L208.985 293.875C205.61 302 209.485 311.375 217.609 314.75L232.483 321C240.607 324.375 249.981 320.5 253.357 312.25L325.476 138.75C341.475 106.75 357.849 86.75 375.973 77.75V120H399.971C435.843 120 463.966 151.625 463.966 192V208H363.973L339.225 344H353.224ZM399.971 176C408.845 176 415.97 168.875 415.97 160S408.845 144 399.971 144S383.972 151.125 383.972 160S391.096 176 399.971 176Z" />
        </Icon>
    </>
}
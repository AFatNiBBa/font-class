
import { Icon } from "../../index";

/**
 * A component that renders the `place-of-worship` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/place-of-worship?s=light place-of-worship}
 * @preview ![place-of-worship](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMDUuMDg2IDMxNC4xNzZMMTcuMzc1IDM1NkM3IDM2MSAwIDM3My44NzUgMCAzODguMzc1VjQ5NS4wMjdDMCA1MDMuMDA2IDUuNCA1MTAuNDQ3IDEzLjI3IDUxMS43N0MyMy4yNjIgNTEzLjQ0OSAzMiA1MDUuNjkzIDMyIDQ5NlYzODguMzc1QzMyIDM4Ni4zNzUgMzIuNSAzODQuODc1IDMyLjc1IDM4NC4xMjVMMTE4Ljg2OSAzNDMuMUMxMjQuNDQ3IDM0MC40NDEgMTI4IDMzNC44MTQgMTI4IDMyOC42MzdDMTI4IDMxNi44NTcgMTE1LjcxNyAzMDkuMTA3IDEwNS4wODYgMzE0LjE3NlpNMzEzLjc1IDMyMC4yNUMyODAuMzc1IDMyMy41IDI1NiAzNTMuMzc1IDI1NiAzODYuNzVWNDk2QzI1NiA1MDQuNzk5IDI2My4xOTkgNTEyIDI3MiA1MTJTMjg4IDUwNC43OTkgMjg4IDQ5NlYzODUuNzVDMjg4IDM2OS44NzUgMjk4Ljg3NSAzNTUgMzE0LjYyNSAzNTIuNUMzMzQuNjI1IDM0OS4xMjUgMzUyIDM2NC42MjUgMzUyIDM4NFY0OTZDMzUyIDUwNC43OTkgMzU5LjE5OSA1MTIgMzY4IDUxMlMzODQgNTA0Ljc5OSAzODQgNDk2VjM4NEMzODQgMzQ2LjYyNSAzNTEuODc1IDMxNi42MjUgMzEzLjc1IDMyMC4yNVpNNDY0LjUgMjQ2LjYyNUw0MTYgMjE3LjYyNVYxMDIuNjI1QzQxNiA5NC4xMzEgNDEyLjYyMyA4NS45ODYgNDA2LjYxMSA3OS45ODZMMzMxLjI1IDQuNzVDMzI4LjI1IDEuNSAzMjQuMTI1IDAgMzIwIDBTMzExLjc1IDEuNSAzMDguNzUgNC43NUwyMzMuMzg5IDc5Ljk4NkMyMjcuMzc3IDg1Ljk4NiAyMjQgOTQuMTMxIDIyNCAxMDIuNjI1VjIxNy42MjVMMTc1LjUgMjQ2LjYyNUMxNjUuODc1IDI1Mi41IDE2MCAyNjIuODc1IDE2MCAyNzQuMTI1VjQ5NkMxNjAgNTA0Ljc5OSAxNjcuMTk5IDUxMiAxNzYgNTEyUzE5MiA1MDQuNzk5IDE5MiA0OTZWMjc0LjEyNUwyNTYgMjM1Ljc1VjEwMi42MjVMMzIwIDM4LjYyNUwzODQgMTAyLjYyNVYyMzUuNzVMNDQ4IDI3NC4xMjVWNDk2QzQ0OCA1MDQuNzk5IDQ1NS4xOTkgNTEyIDQ2NCA1MTJTNDgwIDUwNC43OTkgNDgwIDQ5NlYyNzQuMTI1QzQ4MCAyNjIuODc1IDQ3NC4xMjUgMjUyLjUgNDY0LjUgMjQ2LjYyNVpNNjIyLjYyNSAzNTZMNTM0LjkxNCAzMTQuMTc2QzUyNC4yODMgMzA5LjEwNyA1MTIgMzE2Ljg1NyA1MTIgMzI4LjYzN0M1MTIgMzM0LjgxNCA1MTUuNTUzIDM0MC40NDEgNTIxLjEzMSAzNDMuMUw2MDcuMjUgMzg0LjEyNUM2MDcuNSAzODQuODc1IDYwOCAzODYuMzc1IDYwOCAzODguMzc1VjQ5NS4wMjdDNjA4IDUwMy4wMDYgNjEzLjQgNTEwLjQ0NyA2MjEuMjcgNTExLjc3QzYzMS4yNjIgNTEzLjQ0OSA2NDAgNTA1LjY5MyA2NDAgNDk2VjM4OC4zNzVDNjQwIDM3My44NzUgNjMzIDM2MSA2MjIuNjI1IDM1NloiLz48L3N2Zz4=|width=32|height=32)
 */
const PlaceOfWorship: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M105.086 314.176L17.375 356C7 361 0 373.875 0 388.375V495.027C0 503.006 5.4 510.447 13.27 511.77C23.262 513.449 32 505.693 32 496V388.375C32 386.375 32.5 384.875 32.75 384.125L118.869 343.1C124.447 340.441 128 334.814 128 328.637C128 316.857 115.717 309.107 105.086 314.176ZM313.75 320.25C280.375 323.5 256 353.375 256 386.75V496C256 504.799 263.199 512 272 512S288 504.799 288 496V385.75C288 369.875 298.875 355 314.625 352.5C334.625 349.125 352 364.625 352 384V496C352 504.799 359.199 512 368 512S384 504.799 384 496V384C384 346.625 351.875 316.625 313.75 320.25ZM464.5 246.625L416 217.625V102.625C416 94.131 412.623 85.986 406.611 79.986L331.25 4.75C328.25 1.5 324.125 0 320 0S311.75 1.5 308.75 4.75L233.389 79.986C227.377 85.986 224 94.131 224 102.625V217.625L175.5 246.625C165.875 252.5 160 262.875 160 274.125V496C160 504.799 167.199 512 176 512S192 504.799 192 496V274.125L256 235.75V102.625L320 38.625L384 102.625V235.75L448 274.125V496C448 504.799 455.199 512 464 512S480 504.799 480 496V274.125C480 262.875 474.125 252.5 464.5 246.625ZM622.625 356L534.914 314.176C524.283 309.107 512 316.857 512 328.637C512 334.814 515.553 340.441 521.131 343.1L607.25 384.125C607.5 384.875 608 386.375 608 388.375V495.027C608 503.006 613.4 510.447 621.27 511.77C631.262 513.449 640 505.693 640 496V388.375C640 373.875 633 361 622.625 356Z" />
    </Icon>
);

export default PlaceOfWorship;

import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `video` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/video?s=thin video}
 * @preview ![video](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzYgNjRINDhDMjEuNDkyIDY0IDAgODUuNDkgMCAxMTJWNDAwQzAgNDI2LjUxIDIxLjQ5MiA0NDggNDggNDQ4SDMzNkMzNjIuNTA4IDQ0OCAzODQgNDI2LjUxIDM4NCA0MDBWMTEyQzM4NCA4NS40OSAzNjIuNTA4IDY0IDMzNiA2NFpNMzY4IDQwMEMzNjggNDE3LjY0NSAzNTMuNjQ1IDQzMiAzMzYgNDMySDQ4QzMwLjM1NSA0MzIgMTYgNDE3LjY0NSAxNiA0MDBWMTEyQzE2IDk0LjM1NSAzMC4zNTUgODAgNDggODBIMzM2QzM1My42NDUgODAgMzY4IDk0LjM1NSAzNjggMTEyVjQwMFpNNTU1LjY1NiAxMDAuNDg0QzU0Mi45MDYgOTMuNzUgNTI3LjUgOTQuNjI1IDUxNS42ODggMTAyLjczNEw0MTkuNTYzIDE2Ni41NDdDNDE1LjkwNiAxNjkgNDE0LjkwNiAxNzMuOTY5IDQxNy4zNDQgMTc3LjY0MUM0MTkuNzgxIDE4MS4zNDQgNDI0Ljc1IDE4Mi4yODEgNDI4LjQzOCAxNzkuODkxTDUyNC42NTYgMTE2QzUzMS43ODEgMTExLjE0MSA1NDAuNTMxIDExMC42MDkgNTQ4LjIxOSAxMTQuNjQxQzU1NS41OTQgMTE4LjUzMSA1NjAgMTI1LjczNCA1NjAgMTMzLjkyMlYzNzcuOTg0QzU2MCAzODYuMTg4IDU1NS41OTQgMzkzLjQwNiA1NDguMjE5IDM5Ny4yODFDNTQwLjU5NCA0MDEuMzI4IDUzMS43MTkgNDAwLjc4MSA1MjQuNTMxIDM5NS44MjhMNDI4LjQwNiAzMzIuMDk0QzQyNC43ODEgMzI5LjY4NyA0MTkuNzgxIDMzMC42NDEgNDE3LjM0NCAzMzQuMzQ0QzQxNC45MDYgMzM4LjAzMSA0MTUuOTA2IDM0Mi45ODQgNDE5LjU5NCAzNDUuNDM3TDUxNS41OTQgNDA5LjA5NEM1MjIuMTg4IDQxMy42MjUgNTI5Ljg0NCA0MTUuOTM3IDUzNy41NjIgNDE1LjkzN0M1NDMuNzUgNDE1LjkzNyA1NDkuOTY5IDQxNC40MzcgNTU1LjY1NiA0MTEuNDM3QzU2OC40MDYgNDA0Ljc1IDU3NiAzOTIuMjM0IDU3NiAzNzcuOTg0VjEzMy45MjJDNTc2IDExOS42ODggNTY4LjQwNiAxMDcuMTg4IDU1NS42NTYgMTAwLjQ4NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Video(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M336 64H48C21.492 64 0 85.49 0 112V400C0 426.51 21.492 448 48 448H336C362.508 448 384 426.51 384 400V112C384 85.49 362.508 64 336 64ZM368 400C368 417.645 353.645 432 336 432H48C30.355 432 16 417.645 16 400V112C16 94.355 30.355 80 48 80H336C353.645 80 368 94.355 368 112V400ZM555.656 100.484C542.906 93.75 527.5 94.625 515.688 102.734L419.563 166.547C415.906 169 414.906 173.969 417.344 177.641C419.781 181.344 424.75 182.281 428.438 179.891L524.656 116C531.781 111.141 540.531 110.609 548.219 114.641C555.594 118.531 560 125.734 560 133.922V377.984C560 386.188 555.594 393.406 548.219 397.281C540.594 401.328 531.719 400.781 524.531 395.828L428.406 332.094C424.781 329.687 419.781 330.641 417.344 334.344C414.906 338.031 415.906 342.984 419.594 345.437L515.594 409.094C522.188 413.625 529.844 415.937 537.562 415.937C543.75 415.937 549.969 414.437 555.656 411.437C568.406 404.75 576 392.234 576 377.984V133.922C576 119.688 568.406 107.188 555.656 100.484Z" />
        </Icon>
    </>
}
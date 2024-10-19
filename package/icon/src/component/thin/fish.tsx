
import { Icon } from "../../index";

/**
 * A component that renders the `fish` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/fish?s=thin fish}
 * @preview ![fish](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjYuMDU2IDU2QzIyMy42MTYgNTYgMTQ2LjM5NSAxMzkuNDA2IDExOC41MDQgMTc0LjQzOEw0MC4yNjcgMTA2Ljg0NEMzMi43MDUgOTkuNjg4IDIyLjQ1NCA5OC4yMTkgMTMuNTAxIDEwMy4wOTRDMy42NDEgMTA4LjQwNiAtMS42MDkgMTE5Ljg0NCAwLjUwMSAxMzEuODc1TDI3Ljc5OCAyNTZMMC40MzggMzgwLjQwNkMtMS42MDkgMzkyLjA5NCAzLjY0MSA0MDMuNTYyIDEzLjUzMiA0MDguODc1QzIyLjQ1NCA0MTMuNzgxIDMyLjY1OCA0MTIuMzEyIDM5LjkwOCA0MDUuNDY5TDExOC40MSAzMzcuNTYyQzE0Ni4zNDggMzcyLjU5NCAyMjMuNzEgNDU2IDMyNi4wNTYgNDU2QzQ2Ni43MTYgNDU2IDU3NiAyOTYuNDY5IDU3NiAyNTZTNDY2LjcxNiA1NiAzMjYuMDU2IDU2Wk0zMjYuMDU2IDQ0MEMyMjMuNzU3IDQ0MCAxNDcuMDIgMzQ5LjA2MiAxMjUuOTI2IDMyMS4xODhMMTIwLjc4NSAzMTQuMzc1TDI5LjE4OSAzOTMuNTYzQzI2LjExMSAzOTYuNSAyMy4xMTEgMzk1Ljg3NSAyMS4xMjYgMzk0LjgxM0MxNy45NTQgMzkzLjA5NCAxNS4yMDQgMzg4Ljg0NCAxNi4xMjYgMzgzLjVMNDQuMTc0IDI1NkwxNi4xODkgMTI4Ljc4MUMxNS4yMDQgMTIzLjEyNSAxNy45MzkgMTE4Ljg3NSAyMS4wOTUgMTE3LjE4OEMyMy4wNjQgMTE2LjA5NCAyNi4wOCAxMTUuNDM4IDI5LjU0OCAxMTguNzE5TDEyMC44OTQgMTk3LjY1NkwxMjYuMDUxIDE5MC44MTNDMTY5LjM4IDEzMy4zNzUgMjQ0LjY3OSA3MiAzMjYuMDU2IDcyQzQ1NC45MDMgNzIgNTYwIDIxOS45MzggNTYwIDI1NlM0NTQuOTAzIDQ0MCAzMjYuMDU2IDQ0MFpNNDE1Ljk5NiAyMTZDMzkzLjkzMyAyMTYgMzc1Ljk5NSAyMzMuOTM4IDM3NS45OTUgMjU2UzM5My45MzMgMjk2IDQxNS45OTYgMjk2QzQzOC4wNTkgMjk2IDQ1NS45OTcgMjc4LjA2MiA0NTUuOTk3IDI1NlM0MzguMDU5IDIxNiA0MTUuOTk2IDIxNlpNNDE1Ljk5NiAyODBDNDAyLjc2MSAyODAgMzkxLjk5NSAyNjkuMjE5IDM5MS45OTUgMjU2UzQwMi43NjEgMjMyIDQxNS45OTYgMjMyQzQyOS4yMzEgMjMyIDQzOS45OTYgMjQyLjc4MSA0MzkuOTk2IDI1NlM0MjkuMjMxIDI4MCA0MTUuOTk2IDI4MFoiLz48L3N2Zz4=|width=32|height=32)
 */
const Fish: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M326.056 56C223.616 56 146.395 139.406 118.504 174.438L40.267 106.844C32.705 99.688 22.454 98.219 13.501 103.094C3.641 108.406 -1.609 119.844 0.501 131.875L27.798 256L0.438 380.406C-1.609 392.094 3.641 403.562 13.532 408.875C22.454 413.781 32.658 412.312 39.908 405.469L118.41 337.562C146.348 372.594 223.71 456 326.056 456C466.716 456 576 296.469 576 256S466.716 56 326.056 56ZM326.056 440C223.757 440 147.02 349.062 125.926 321.188L120.785 314.375L29.189 393.563C26.111 396.5 23.111 395.875 21.126 394.813C17.954 393.094 15.204 388.844 16.126 383.5L44.174 256L16.189 128.781C15.204 123.125 17.939 118.875 21.095 117.188C23.064 116.094 26.08 115.438 29.548 118.719L120.894 197.656L126.051 190.813C169.38 133.375 244.679 72 326.056 72C454.903 72 560 219.938 560 256S454.903 440 326.056 440ZM415.996 216C393.933 216 375.995 233.938 375.995 256S393.933 296 415.996 296C438.059 296 455.997 278.062 455.997 256S438.059 216 415.996 216ZM415.996 280C402.761 280 391.995 269.219 391.995 256S402.761 232 415.996 232C429.231 232 439.996 242.781 439.996 256S429.231 280 415.996 280Z" />
    </Icon>
);

export default Fish;
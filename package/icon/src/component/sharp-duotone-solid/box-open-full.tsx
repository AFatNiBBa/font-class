
import { Icon, generic } from "../../index";

/**
 * A component that renders the `box-open-full` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-open-full?s=sharp-duotone-solid box-open-full}
 * @preview ![box-open-full](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI4OEw2NCAxNjBsMjU2IDMyTDIyNCAzNTIgNjQgMzA2LjNDNDIuNyAzMDAuMiAyMS4zIDI5NC4xIDAgMjg4em0zMjAtOTZsMjU2LTMyIDY0IDEyOGMtMjEuMyA2LjEtNDIuNyAxMi4yLTY0IDE4LjNjLTUzLjMgMTUuMi0xMDYuNyAzMC41LTE2MCA0NS43Yy0zMi01My4zLTY0LTEwNi43LTk2LTE2MHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMxMi44IDE1Ny42YzQuNi04LjggNy4yLTE4LjkgNy4yLTI5LjZjMC0zNS4zLTI4LjctNjQtNjQtNjRzLTY0IDI4LjctNjQgNjRjMCA1LjEgLjYgMTAgMS43IDE0LjdsLTY1LjUtOC4yYy0uMS0yLjItLjItNC4zLS4yLTYuNUMxMjggNTcuMyAxODUuMyAwIDI1NiAwczEyOCA1Ny4zIDEyOCAxMjhjMCAxLjIgMCAyLjQgMCAzLjVMNDQ0LjYgMy41bDg2LjggNDEuMS00NC4xIDkzTDMyMCAxNTguNWwtNy4yLS45ek0yMjQgMzUybDk2LTE2MCA5NiAxNjAgMTYwLTQ1LjdMNTc2IDQ0OCAzMjAgNTEyIDY0IDQ0OGwwLTE0MS43TDIyNCAzNTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const BoxOpenFull: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 288L64 160l256 32L224 352 64 306.3C42.7 300.2 21.3 294.1 0 288zm320-96l256-32 64 128c-21.3 6.1-42.7 12.2-64 18.3c-53.3 15.2-106.7 30.5-160 45.7c-32-53.3-64-106.7-96-160z" />
            <path d="M312.8 157.6c4.6-8.8 7.2-18.9 7.2-29.6c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 5.1 .6 10 1.7 14.7l-65.5-8.2c-.1-2.2-.2-4.3-.2-6.5C128 57.3 185.3 0 256 0s128 57.3 128 128c0 1.2 0 2.4 0 3.5L444.6 3.5l86.8 41.1-44.1 93L320 158.5l-7.2-.9zM224 352l96-160 96 160 160-45.7L576 448 320 512 64 448l0-141.7L224 352z" />
    </Icon>
);

export default BoxOpenFull;
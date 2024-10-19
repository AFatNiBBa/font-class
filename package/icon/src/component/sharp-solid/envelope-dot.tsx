
import { Icon } from "../../index";

/**
 * A component that renders the `envelope-dot` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-dot?s=sharp-solid envelope-dot}
 * @preview ![envelope-dot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDk2IDBhODAgODAgMCAxIDEgMCAxNjBBODAgODAgMCAxIDEgNDk2IDB6TTAgNjRsMzg1LjEgMGMtLjcgNS4yLTEuMSAxMC42LTEuMSAxNmMwIDQ3IDI5IDg3LjMgNzAgMTAzLjlMMjU2IDMyMCAwIDE0NCAwIDY0ek0yNzQuMSAzNDYuNEw0OTguNyAxOTJjNC41LS4xIDguOS0uNSAxMy4zLTEuMUw1MTIgNDQ4IDAgNDQ4IDAgMTgyLjggMjM3LjkgMzQ2LjQgMjU2IDM1OC44bDE4LjEtMTIuNXoiLz48L3N2Zz4=|width=32|height=32)
 */
const EnvelopeDot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M496 0a80 80 0 1 1 0 160A80 80 0 1 1 496 0zM0 64l385.1 0c-.7 5.2-1.1 10.6-1.1 16c0 47 29 87.3 70 103.9L256 320 0 144 0 64zM274.1 346.4L498.7 192c4.5-.1 8.9-.5 13.3-1.1L512 448 0 448 0 182.8 237.9 346.4 256 358.8l18.1-12.5z" />
    </Icon>
);

export default EnvelopeDot;
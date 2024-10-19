
import { Icon, generic } from "../../index";

/**
 * A component that renders the `star-half` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-half?s=sharp-duotone-solid star-half}
 * @preview ![star-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yODggLjFsMCA0MzAuMUw0NTQuMyA1MTIgNDI3LjkgMzI4LjUgNTU3LjEgMTk1LjYgMzc0LjUgMTY0IDI4OCAuMXoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTEyMS43IDUxMkwyODggNDMwLjIgMjg4IC4xIDIwMS41IDE2NCAxOC45IDE5NS42IDE0OC4xIDMyOC41IDEyMS43IDUxMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const StarHalf: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M288 .1l0 430.1L454.3 512 427.9 328.5 557.1 195.6 374.5 164 288 .1z" />
            <path d="M121.7 512L288 430.2 288 .1 201.5 164 18.9 195.6 148.1 328.5 121.7 512z" />
    </Icon>
);

export default StarHalf;
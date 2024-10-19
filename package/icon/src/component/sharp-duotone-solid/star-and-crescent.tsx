
import { Icon, generic } from "../../index";

/**
 * A component that renders the `star-and-crescent` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-and-crescent?s=sharp-duotone-solid star-and-crescent}
 * @preview ![star-and-crescent](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNDcgMjE5LjVsNjguNSA2Ni43LTE2LjIgOTQuMkwzODQgMzM2bDg0LjYgNDQuNS0xNi4yLTk0LjJMNTIxIDIxOS41bC05NC42LTEzLjhMMzg0IDEyMGwtNDIuMyA4NS44TDI0NyAyMTkuNXoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ0Ni42IDg1LjFDNDEzIDYxLjcgMzcyLjEgNDggMzI4IDQ4Yy0xMTQuOSAwLTIwOCA5My4xLTIwOCAyMDhzOTMuMSAyMDggMjA4IDIwOGM0NC4xIDAgODUtMTMuNyAxMTguNi0zNy4xQzM5OS44IDQ3OS4xIDMzMS43IDUxMiAyNTYgNTEyQzExNC42IDUxMiAwIDM5Ny40IDAgMjU2UzExNC42IDAgMjU2IDBjNzUuNyAwIDE0My44IDMyLjkgMTkwLjYgODUuMXoiLz48L3N2Zz4=|width=32|height=32)
 */
const StarAndCrescent: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M247 219.5l68.5 66.7-16.2 94.2L384 336l84.6 44.5-16.2-94.2L521 219.5l-94.6-13.8L384 120l-42.3 85.8L247 219.5z" />
            <path d="M446.6 85.1C413 61.7 372.1 48 328 48c-114.9 0-208 93.1-208 208s93.1 208 208 208c44.1 0 85-13.7 118.6-37.1C399.8 479.1 331.7 512 256 512C114.6 512 0 397.4 0 256S114.6 0 256 0c75.7 0 143.8 32.9 190.6 85.1z" />
    </Icon>
);

export default StarAndCrescent;
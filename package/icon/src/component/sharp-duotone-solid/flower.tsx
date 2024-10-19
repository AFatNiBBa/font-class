
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flower` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flower?s=sharp-duotone-solid flower}
 * @preview ![flower](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MGMwIDM4LjIgMTYuOCA3Mi41IDQzLjMgOTZDMTYuOCAyNzkuNSAwIDMxMy44IDAgMzUyYzAgNzAuNyA1Ny4zIDEyOCAxMjggMTI4YzM4LjIgMCA3Mi41LTE2LjggOTYtNDMuM2MyMy41IDI2LjYgNTcuOCA0My4zIDk2IDQzLjNjNzAuNyAwIDEyOC01Ny4zIDEyOC0xMjhjMC0zOC4yLTE2LjgtNzIuNS00My4zLTk2YzI2LjYtMjMuNSA0My4zLTU3LjggNDMuMy05NmMwLTcwLjctNTcuMy0xMjgtMTI4LTEyOGMtMzguMiAwLTcyLjUgMTYuOC05NiA0My4zQzIwMC41IDQ4LjggMTY2LjIgMzIgMTI4IDMyQzU3LjMgMzIgMCA4OS4zIDAgMTYwem0xMjggOTZsOTYtOTYgOTYgOTYtOTYgOTYtOTYtOTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMjggMjU2bDk2IDk2IDk2LTk2LTk2LTk2LTk2IDk2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Flower: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 160c0 38.2 16.8 72.5 43.3 96C16.8 279.5 0 313.8 0 352c0 70.7 57.3 128 128 128c38.2 0 72.5-16.8 96-43.3c23.5 26.6 57.8 43.3 96 43.3c70.7 0 128-57.3 128-128c0-38.2-16.8-72.5-43.3-96c26.6-23.5 43.3-57.8 43.3-96c0-70.7-57.3-128-128-128c-38.2 0-72.5 16.8-96 43.3C200.5 48.8 166.2 32 128 32C57.3 32 0 89.3 0 160zm128 96l96-96 96 96-96 96-96-96z" />
            <path d="M128 256l96 96 96-96-96-96-96 96z" />
    </Icon>
);

export default Flower;
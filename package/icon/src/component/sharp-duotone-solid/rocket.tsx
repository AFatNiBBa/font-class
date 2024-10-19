
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rocket` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rocket?s=sharp-duotone-solid rocket}
 * @preview ![rocket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI4Ny42TDgwIDEyOGwxMjAgMGMtMjYuNSA0My44LTUzLjMgMTEyLjYtNzAuMiAxNTkuOUwwIDI4Ny42em0yMjQgOTMuMWM0Ny43LTE2LjUgMTE2LjMtNDIuNSAxNjAtNjguOGwwIDEyMEwyMjQgNTEybDAtMTMxLjJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNzAuMSAzOTguNGwtNTguMi01OC4yczQ5LjQtMTU1LjkgOTUuMy0yMjMuNUMyOTYuNi0xNS4xIDQzMy43LTcuOSA1MDIuNyA5LjNjMTcuMiA2OC45IDI0LjUgMjA2LTEwNy40IDI5NS40Yy02Ny45IDQ2LTIyNS4yIDkzLjctMjI1LjIgOTMuN3pNMzg0IDE2OGE0MCA0MCAwIDEgMCAwLTgwIDQwIDQwIDAgMSAwIDAgODB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Rocket: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 287.6L80 128l120 0c-26.5 43.8-53.3 112.6-70.2 159.9L0 287.6zm224 93.1c47.7-16.5 116.3-42.5 160-68.8l0 120L224 512l0-131.2z" />
            <path d="M170.1 398.4l-58.2-58.2s49.4-155.9 95.3-223.5C296.6-15.1 433.7-7.9 502.7 9.3c17.2 68.9 24.5 206-107.4 295.4c-67.9 46-225.2 93.7-225.2 93.7zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
    </Icon>
);

export default Rocket;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `stocking` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stocking?s=sharp-duotone-solid stocking}
 * @preview ![stocking](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM4Ni45bDAgMi4yQzAgNDU3IDU1IDUxMiAxMjIuOCA1MTJjMjQuMiAwIDQ4LTcuMiA2OC4xLTIwLjZsNjYtNDRjLTIwLjQtMjAuMy0zMy00OC4zLTMzLTc5LjRjMC02MS45IDUwLjEtMTEyIDExMi0xMTJjNS40IDAgMTAuOCAuNCAxNiAxLjFMMzUyIDk2IDk2IDk2bDAgMTYwTDU1LjcgMjgyLjlDMjAuOSAzMDYuMSAwIDM0NS4xIDAgMzg2Ljl6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zODQgMEw2NCAwbDAgOTYgMzIwIDAgMC05NnpNMzUyIDM4NGwwLTEyNi45Yy01LjItLjctMTAuNi0xLjEtMTYtMS4xYy02MS45IDAtMTEyIDUwLjEtMTEyIDExMmMwIDMxIDEyLjYgNTkuMSAzMyA3OS40TDM1MiAzODR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Stocking: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 386.9l0 2.2C0 457 55 512 122.8 512c24.2 0 48-7.2 68.1-20.6l66-44c-20.4-20.3-33-48.3-33-79.4c0-61.9 50.1-112 112-112c5.4 0 10.8 .4 16 1.1L352 96 96 96l0 160L55.7 282.9C20.9 306.1 0 345.1 0 386.9z" />
            <path d="M384 0L64 0l0 96 320 0 0-96zM352 384l0-126.9c-5.2-.7-10.6-1.1-16-1.1c-61.9 0-112 50.1-112 112c0 31 12.6 59.1 33 79.4L352 384z" />
    </Icon>
);

export default Stocking;
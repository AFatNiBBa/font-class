
import { Icon, generic } from "../../index";

/**
 * A component that renders the `heart-circle-plus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-circle-plus?s=sharp-duotone-solid heart-circle-plus}
 * @preview ![heart-circle-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2Ny44YzAgMzYgMTQuMyA3MC41IDM5LjggOTZMNjQgMjg4IDI1NiA0ODBsMjMuNy0yMy43Yy0xNS4xLTI2LTIzLjctNTYuMS0yMy43LTg4LjNjMC05Ny4yIDc4LjgtMTc2IDE3Ni0xNzZjMjYuNCAwIDUxLjQgNS44IDczLjggMTYuMmM0LTEzIDYuMi0yNi42IDYuMi00MC40QzUxMiA5Mi44IDQ1MS4yIDMyIDM3Ni4yIDMyYy0zNiAwLTcwLjUgMTQuMy05NiAzOS44TDI1NiA5NiAyMzEuOCA3MS44Yy0yNS41LTI1LjUtNjAtMzkuOC05Ni0zOS44QzYwLjggMzIgMCA5Mi44IDAgMTY3Ljh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yODggMzY4YTE0NCAxNDQgMCAxIDEgMjg4IDAgMTQ0IDE0NCAwIDEgMSAtMjg4IDB6bTE2MC04MGwtMzIgMCAwIDE2IDAgNDgtNDggMC0xNiAwIDAgMzIgMTYgMCA0OCAwIDAgNDggMCAxNiAzMiAwIDAtMTYgMC00OCA0OCAwIDE2IDAgMC0zMi0xNiAwLTQ4IDAgMC00OCAwLTE2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HeartCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 167.8c0 36 14.3 70.5 39.8 96L64 288 256 480l23.7-23.7c-15.1-26-23.7-56.1-23.7-88.3c0-97.2 78.8-176 176-176c26.4 0 51.4 5.8 73.8 16.2c4-13 6.2-26.6 6.2-40.4C512 92.8 451.2 32 376.2 32c-36 0-70.5 14.3-96 39.8L256 96 231.8 71.8c-25.5-25.5-60-39.8-96-39.8C60.8 32 0 92.8 0 167.8z" />
            <path d="M288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm160-80l-32 0 0 16 0 48-48 0-16 0 0 32 16 0 48 0 0 48 0 16 32 0 0-16 0-48 48 0 16 0 0-32-16 0-48 0 0-48 0-16z" />
    </Icon>
);

export default HeartCirclePlus;
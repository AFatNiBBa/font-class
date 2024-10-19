
import { Icon, generic } from "../../index";

/**
 * A component that renders the `microphone` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microphone?s=sharp-duotone-solid microphone}
 * @preview ![microphone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNiAxOTJsMCAyNCAwIDQwYzAgODkuMSA2Ni4yIDE2Mi43IDE1MiAxNzQuNGwwIDMzLjYtNDggMC0yNCAwIDAgNDggMjQgMCA3MiAwIDcyIDAgMjQgMCAwLTQ4LTI0IDAtNDggMCAwLTMzLjZjODUuOC0xMS43IDE1Mi04NS4zIDE1Mi0xNzQuNGwwLTQwIDAtMjQtNDggMCAwIDI0IDAgNDBjMCA3MC43LTU3LjMgMTI4LTEyOCAxMjhzLTEyOC01Ny4zLTEyOC0xMjhsMC00MCAwLTI0LTQ4IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik05NiAwSDI4OFYyNTZjMCA1My00MyA5Ni05NiA5NnMtOTYtNDMtOTYtOTZWMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Microphone: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M16 192l0 24 0 40c0 89.1 66.2 162.7 152 174.4l0 33.6-48 0-24 0 0 48 24 0 72 0 72 0 24 0 0-48-24 0-48 0 0-33.6c85.8-11.7 152-85.3 152-174.4l0-40 0-24-48 0 0 24 0 40c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-40 0-24-48 0z" />
            <path d="M96 0H288V256c0 53-43 96-96 96s-96-43-96-96V0z" />
    </Icon>
);

export default Microphone;
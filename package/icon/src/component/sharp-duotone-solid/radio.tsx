
import { Icon, generic } from "../../index";

/**
 * A component that renders the `radio` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/radio?s=sharp-duotone-solid radio}
 * @preview ![radio](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDEyOGM2My4zIDAgMTI2LjUgMCAxODkuOCAwYzEwNy40IDAgMjE0LjggMCAzMjIuMiAwbDAgMzg0TDAgNTEyIDAgMTI4ek02NCAzMDRsMCAzMiAxNiAwIDEyOCAwIDE2IDAgMC0zMi0xNiAwTDgwIDMwNGwtMTYgMHptMTYtNjRsMCAzMiAxNiAwIDk2IDAgMTYgMCAwLTMyLTE2IDAtOTYgMC0xNiAwem0wIDEyOGwwIDMyIDE2IDAgOTYgMCAxNiAwIDAtMzItMTYgMC05NiAwLTE2IDB6bTIwOC00OGE4MCA4MCAwIDEgMCAxNjAgMCA4MCA4MCAwIDEgMCAtMTYwIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik01MDkgNDkuNmwtMjMuMyA1LjdMMTg5LjggMTI4IDAgMTI4bDAtMi44IDE4LjMtNC41IDQ1Ni0xMTJMNDk3LjYgMyA1MDkgNDkuNnpNMzY4IDI0MGE4MCA4MCAwIDEgMSAwIDE2MCA4MCA4MCAwIDEgMSAwLTE2MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Radio: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 128c63.3 0 126.5 0 189.8 0c107.4 0 214.8 0 322.2 0l0 384L0 512 0 128zM64 304l0 32 16 0 128 0 16 0 0-32-16 0L80 304l-16 0zm16-64l0 32 16 0 96 0 16 0 0-32-16 0-96 0-16 0zm0 128l0 32 16 0 96 0 16 0 0-32-16 0-96 0-16 0zm208-48a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
            <path d="M509 49.6l-23.3 5.7L189.8 128 0 128l0-2.8 18.3-4.5 456-112L497.6 3 509 49.6zM368 240a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
    </Icon>
);

export default Radio;
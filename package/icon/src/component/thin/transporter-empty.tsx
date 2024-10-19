
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `transporter-empty` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/transporter-empty?s=thin transporter-empty}
 * @preview ![transporter-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgNDg4VjUwNEMzMjAgNTA4LjQyMiAzMTYuNDA2IDUxMiAzMTIgNTEyUzMwNCA1MDguNDIyIDMwNCA1MDRWNDg4QzMwNCA0NzQuNzY2IDI5My4yMTkgNDY0IDI4MCA0NjRINDBDMjYuNzgxIDQ2NCAxNiA0NzQuNzY2IDE2IDQ4OFY1MDRDMTYgNTA4LjQyMiAxMi40MDYgNTEyIDggNTEyUzAgNTA4LjQyMiAwIDUwNFY0ODhDMCA0NjUuOTM4IDE3LjkzOCA0NDggNDAgNDQ4SDI4MEMzMDIuMDYyIDQ0OCAzMjAgNDY1LjkzOCAzMjAgNDg4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TransporterEmpty(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M320 488V504C320 508.422 316.406 512 312 512S304 508.422 304 504V488C304 474.766 293.219 464 280 464H40C26.781 464 16 474.766 16 488V504C16 508.422 12.406 512 8 512S0 508.422 0 504V488C0 465.938 17.938 448 40 448H280C302.062 448 320 465.938 320 488Z" />
        </Icon>
    </>
}
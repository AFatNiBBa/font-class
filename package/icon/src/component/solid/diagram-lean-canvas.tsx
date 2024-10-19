
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `diagram-lean-canvas` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-lean-canvas?s=solid diagram-lean-canvas}
 * @preview ![diagram-lean-canvas](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzYgMzJINjRDMjguNjUyIDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTIgNDgwIDY0IDQ4MEg1NzZDNjExLjM0OCA0ODAgNjQwIDQ1MS4zNDYgNjQwIDQxNlY5NkM2NDAgNjAuNjU0IDYxMS4zNDggMzIgNTc2IDMyWk01NzYgOTZWMzIwSDUxMlY5Nkg1NzZaTTQwMCAyMzJINDY0VjMyMEg0MDBWMjMyWk00NjQgOTZWMTg0SDQwMFY5Nkg0NjRaTTM1MiA5NlYzMjBIMjg4Vjk2SDM1MlpNMTc2IDIzMkgyNDBWMzIwSDE3NlYyMzJaTTI0MCA5NlYxODRIMTc2Vjk2SDI0MFpNMTI4IDk2VjMyMEg2NFY5NkgxMjhaTTY0IDQxNlYzNjhIMjk2VjQxNkg2NFpNMzQ0IDQxNlYzNjhINTc2VjQxNkgzNDRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function DiagramLeanCanvas(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M576 32H64C28.652 32 0 60.654 0 96V416C0 451.346 28.652 480 64 480H576C611.348 480 640 451.346 640 416V96C640 60.654 611.348 32 576 32ZM576 96V320H512V96H576ZM400 232H464V320H400V232ZM464 96V184H400V96H464ZM352 96V320H288V96H352ZM176 232H240V320H176V232ZM240 96V184H176V96H240ZM128 96V320H64V96H128ZM64 416V368H296V416H64ZM344 416V368H576V416H344Z" />
        </Icon>
    </>
}
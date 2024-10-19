
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `diagram-lean-canvas` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-lean-canvas?s=regular diagram-lean-canvas}
 * @preview ![diagram-lean-canvas](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzYgMzJINjRDMjguNjUyIDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTIgNDgwIDY0IDQ4MEg1NzZDNjExLjM0OCA0ODAgNjQwIDQ1MS4zNDYgNjQwIDQxNlY5NkM2NDAgNjAuNjU0IDYxMS4zNDggMzIgNTc2IDMyWk01NzYgODBDNTg0LjgyNCA4MCA1OTIgODcuMTc4IDU5MiA5NlYzMDRINTEyVjgwSDU3NlpNNDY0IDgwVjE3Nkg0MDBWODBINDY0Wk00MDAgMjI0SDQ2NFYzMDRINDAwVjIyNFpNMzUyIDgwVjMwNEgyODhWODBIMzUyWk0yNDAgODBWMTc2SDE3NlY4MEgyNDBaTTE3NiAyMjRIMjQwVjMwNEgxNzZWMjI0Wk02NCA4MEgxMjhWMzA0SDQ4Vjk2QzQ4IDg3LjE3OCA1NS4xNzYgODAgNjQgODBaTTQ4IDQxNlYzNTJIMjk2VjQzMkg2NEM1NS4xNzYgNDMyIDQ4IDQyNC44MjIgNDggNDE2Wk01OTIgNDE2QzU5MiA0MjQuODIyIDU4NC44MjQgNDMyIDU3NiA0MzJIMzQ0VjM1Mkg1OTJWNDE2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function DiagramLeanCanvas(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M576 32H64C28.652 32 0 60.654 0 96V416C0 451.346 28.652 480 64 480H576C611.348 480 640 451.346 640 416V96C640 60.654 611.348 32 576 32ZM576 80C584.824 80 592 87.178 592 96V304H512V80H576ZM464 80V176H400V80H464ZM400 224H464V304H400V224ZM352 80V304H288V80H352ZM240 80V176H176V80H240ZM176 224H240V304H176V224ZM64 80H128V304H48V96C48 87.178 55.176 80 64 80ZM48 416V352H296V432H64C55.176 432 48 424.822 48 416ZM592 416C592 424.822 584.824 432 576 432H344V352H592V416Z" />
        </Icon>
    </>
}
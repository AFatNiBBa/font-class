
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `diagram-lean-canvas` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-lean-canvas?s=thin diagram-lean-canvas}
 * @preview ![diagram-lean-canvas](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzYgMzJINjRDMjguNjUyIDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTIgNDgwIDY0IDQ4MEg1NzZDNjExLjM0OCA0ODAgNjQwIDQ1MS4zNDYgNjQwIDQxNlY5NkM2NDAgNjAuNjU0IDYxMS4zNDggMzIgNTc2IDMyWk0zOTIgNDhINDg4VjE5MkgzOTJWNDhaTTM5MiAyMDhINDg4VjM0NEgzOTJWMjA4Wk0yNjQgNDhIMzc2VjM0NEgyNjRWNDhaTTE1MiA0OEgyNDhWMTkySDE1MlY0OFpNMTUyIDIwOEgyNDhWMzQ0SDE1MlYyMDhaTTE2IDk2QzE2IDY5LjUzMyAzNy41MzEgNDggNjQgNDhIMTM2VjM0NEgxNlY5NlpNMzEyIDQ2NEg2NEMzNy41MzEgNDY0IDE2IDQ0Mi40NjcgMTYgNDE2VjM2MEgzMTJWNDY0Wk02MjQgNDE2QzYyNCA0NDIuNDY3IDYwMi40NjkgNDY0IDU3NiA0NjRIMzI4VjM2MEg2MjRWNDE2Wk02MjQgMzQ0SDUwNFY0OEg1NzZDNjAyLjQ2OSA0OCA2MjQgNjkuNTMzIDYyNCA5NlYzNDRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function DiagramLeanCanvas(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M576 32H64C28.652 32 0 60.654 0 96V416C0 451.346 28.652 480 64 480H576C611.348 480 640 451.346 640 416V96C640 60.654 611.348 32 576 32ZM392 48H488V192H392V48ZM392 208H488V344H392V208ZM264 48H376V344H264V48ZM152 48H248V192H152V48ZM152 208H248V344H152V208ZM16 96C16 69.533 37.531 48 64 48H136V344H16V96ZM312 464H64C37.531 464 16 442.467 16 416V360H312V464ZM624 416C624 442.467 602.469 464 576 464H328V360H624V416ZM624 344H504V48H576C602.469 48 624 69.533 624 96V344Z" />
        </Icon>
    </>
}
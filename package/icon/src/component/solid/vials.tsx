
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `vials` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/vials?s=solid vials}
 * @preview ![vials](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDAgMzJIMjRDMTAuNzQ2IDMyIDAgNDIuNzQyIDAgNTZDMCA2OS4yNTQgMTAuNzQ2IDgwIDI0IDgwSDMyVjQwMEMzMiA0NDQuMTI1IDY3Ljg3NSA0ODAgMTEyIDQ4MFMxOTIgNDQ0LjEyNSAxOTIgNDAwVjgwSDIwMEMyMTMuMjU0IDgwIDIyNCA2OS4yNTQgMjI0IDU2QzIyNCA0Mi43NDIgMjEzLjI1NCAzMiAyMDAgMzJaTTE0NCAyNTZIODBWODBIMTQ0VjI1NlpNNDg4IDMySDMxMkMyOTguNzQ2IDMyIDI4OCA0Mi43NDIgMjg4IDU2QzI4OCA2OS4yNTQgMjk4Ljc0NiA4MCAzMTIgODBIMzIwVjQwMEMzMjAgNDQ0LjEyNSAzNTUuODc1IDQ4MCA0MDAgNDgwUzQ4MCA0NDQuMTI1IDQ4MCA0MDBWODBINDg4QzUwMS4yNTQgODAgNTEyIDY5LjI1NCA1MTIgNTZDNTEyIDQyLjc0MiA1MDEuMjU0IDMyIDQ4OCAzMlpNNDMyIDI1NkgzNjhWODBINDMyVjI1NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Vials(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M200 32H24C10.746 32 0 42.742 0 56C0 69.254 10.746 80 24 80H32V400C32 444.125 67.875 480 112 480S192 444.125 192 400V80H200C213.254 80 224 69.254 224 56C224 42.742 213.254 32 200 32ZM144 256H80V80H144V256ZM488 32H312C298.746 32 288 42.742 288 56C288 69.254 298.746 80 312 80H320V400C320 444.125 355.875 480 400 480S480 444.125 480 400V80H488C501.254 80 512 69.254 512 56C512 42.742 501.254 32 488 32ZM432 256H368V80H432V256Z" />
        </Icon>
    </>
}
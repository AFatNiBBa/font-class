
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `dumbbell` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dumbbell?s=solid dumbbell}
 * @preview ![dumbbell](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMDQgOTZINTZDNDIuNzUgOTYgMzIgMTA2Ljc1IDMyIDEyMFYyMjRDMTQuMzI4IDIyNCAwIDIzOC4zMjYgMCAyNTZDMCAyNzMuNjcyIDE0LjMyOCAyODggMzIgMjg4VjM5MkMzMiA0MDUuMjUgNDIuNzUgNDE2IDU2IDQxNkgxMDRDMTE3LjI1IDQxNiAxMjggNDA1LjI1IDEyOCAzOTJWMTIwQzEyOCAxMDYuNzUgMTE3LjI1IDk2IDEwNCA5NlpNNDU2IDMySDQwOEMzOTQuNzUgMzIgMzg0IDQyLjc1IDM4NCA1NlYyMjRIMjU2VjU2QzI1NiA0Mi43NSAyNDUuMjUgMzIgMjMyIDMySDE4NEMxNzAuNzUgMzIgMTYwIDQyLjc1IDE2MCA1NlY0NTZDMTYwIDQ2OS4yNSAxNzAuNzUgNDgwIDE4NCA0ODBIMjMyQzI0NS4yNSA0ODAgMjU2IDQ2OS4yNSAyNTYgNDU2VjI4OEgzODRWNDU2QzM4NCA0NjkuMjUgMzk0Ljc1IDQ4MCA0MDggNDgwSDQ1NkM0NjkuMjUgNDgwIDQ4MCA0NjkuMjUgNDgwIDQ1NlY1NkM0ODAgNDIuNzUgNDY5LjI1IDMyIDQ1NiAzMlpNNjA4IDIyNFYxMjBDNjA4IDEwNi43NSA1OTcuMjUgOTYgNTg0IDk2SDUzNkM1MjIuNzUgOTYgNTEyIDEwNi43NSA1MTIgMTIwVjM5MkM1MTIgNDA1LjI1IDUyMi43NSA0MTYgNTM2IDQxNkg1ODRDNTk3LjI1IDQxNiA2MDggNDA1LjI1IDYwOCAzOTJWMjg4QzYyNS42NzIgMjg4IDY0MCAyNzMuNjcyIDY0MCAyNTZDNjQwIDIzOC4zMjYgNjI1LjY3MiAyMjQgNjA4IDIyNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Dumbbell(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M104 96H56C42.75 96 32 106.75 32 120V224C14.328 224 0 238.326 0 256C0 273.672 14.328 288 32 288V392C32 405.25 42.75 416 56 416H104C117.25 416 128 405.25 128 392V120C128 106.75 117.25 96 104 96ZM456 32H408C394.75 32 384 42.75 384 56V224H256V56C256 42.75 245.25 32 232 32H184C170.75 32 160 42.75 160 56V456C160 469.25 170.75 480 184 480H232C245.25 480 256 469.25 256 456V288H384V456C384 469.25 394.75 480 408 480H456C469.25 480 480 469.25 480 456V56C480 42.75 469.25 32 456 32ZM608 224V120C608 106.75 597.25 96 584 96H536C522.75 96 512 106.75 512 120V392C512 405.25 522.75 416 536 416H584C597.25 416 608 405.25 608 392V288C625.672 288 640 273.672 640 256C640 238.326 625.672 224 608 224Z" />
        </Icon>
    </>
}
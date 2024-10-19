
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `dumbbell` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dumbbell?s=duotone dumbbell}
 * @preview ![dumbbell](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTAgMjU2QzAgMjczLjY3MiAxNC4zMjggMjg4IDMyIDI4OFYyMjRDMTQuMzI4IDIyNCAwIDIzOC4zMjYgMCAyNTZaTTEyOCAyODhIMTYwVjIyNEgxMjhWMjg4Wk02MDggMjI0VjI4OEM2MjUuNjcyIDI4OCA2NDAgMjczLjY3MiA2NDAgMjU2QzY0MCAyMzguMzI2IDYyNS42NzIgMjI0IDYwOCAyMjRaTTQ4MCAyODhINTEyVjIyNEg0ODBWMjg4Wk0yNTYgMjg4SDM4NFYyMjRIMjU2VjI4OFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMTA0IDk2SDU2QzQyLjc1IDk2IDMyIDEwNi43NSAzMiAxMjBWMzkyQzMyIDQwNS4yNSA0Mi43NSA0MTYgNTYgNDE2SDEwNEMxMTcuMjUgNDE2IDEyOCA0MDUuMjUgMTI4IDM5MlYxMjBDMTI4IDEwNi43NSAxMTcuMjUgOTYgMTA0IDk2Wk0yMzIgMzJIMTg0QzE3MC43NSAzMiAxNjAgNDIuNzUgMTYwIDU2VjQ1NkMxNjAgNDY5LjI1IDE3MC43NSA0ODAgMTg0IDQ4MEgyMzJDMjQ1LjI1IDQ4MCAyNTYgNDY5LjI1IDI1NiA0NTZWNTZDMjU2IDQyLjc1IDI0NS4yNSAzMiAyMzIgMzJaTTU4NCA5Nkg1MzZDNTIyLjc1IDk2IDUxMiAxMDYuNzUgNTEyIDEyMFYzOTJDNTEyIDQwNS4yNSA1MjIuNzUgNDE2IDUzNiA0MTZINTg0QzU5Ny4yNSA0MTYgNjA4IDQwNS4yNSA2MDggMzkyVjEyMEM2MDggMTA2Ljc1IDU5Ny4yNSA5NiA1ODQgOTZaTTQ1NiAzMkg0MDhDMzk0Ljc1IDMyIDM4NCA0Mi43NSAzODQgNTZWNDU2QzM4NCA0NjkuMjUgMzk0Ljc1IDQ4MCA0MDggNDgwSDQ1NkM0NjkuMjUgNDgwIDQ4MCA0NjkuMjUgNDgwIDQ1NlY1NkM0ODAgNDIuNzUgNDY5LjI1IDMyIDQ1NiAzMloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Dumbbell(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path opacity={.4} d="M0 256C0 273.672 14.328 288 32 288V224C14.328 224 0 238.326 0 256ZM128 288H160V224H128V288ZM608 224V288C625.672 288 640 273.672 640 256C640 238.326 625.672 224 608 224ZM480 288H512V224H480V288ZM256 288H384V224H256V288Z" />
            <path d="M104 96H56C42.75 96 32 106.75 32 120V392C32 405.25 42.75 416 56 416H104C117.25 416 128 405.25 128 392V120C128 106.75 117.25 96 104 96ZM232 32H184C170.75 32 160 42.75 160 56V456C160 469.25 170.75 480 184 480H232C245.25 480 256 469.25 256 456V56C256 42.75 245.25 32 232 32ZM584 96H536C522.75 96 512 106.75 512 120V392C512 405.25 522.75 416 536 416H584C597.25 416 608 405.25 608 392V120C608 106.75 597.25 96 584 96ZM456 32H408C394.75 32 384 42.75 384 56V456C384 469.25 394.75 480 408 480H456C469.25 480 480 469.25 480 456V56C480 42.75 469.25 32 456 32Z" />
        </Icon>
    </>
}
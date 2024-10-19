
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `salad` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/salad?s=regular salad}
 * @preview ![salad](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIuMDAzIDI0MC4wNjZDNTEyLjAwMyAxOTAuMjAzIDQ4My4wMDMgMTQ3LjIxMyA0NDEuMTI4IDEyNi4yMTlDNDI4LjYyOCA5Mi45NzcgMzk4LjYyOCA2OS42MDcgMzYzLjM3OCA2NS4yMzRDMzUwLjYyOCA2My4yMzQgMzM5LjEyOCA2NC40ODQgMzI2Ljc1MyA2Ny44NTdDMzA5LjAwMyAyNi43NDIgMjY4LjYyOCAwIDIyMy43NTMgMEMxNzkuMDAzIDAgMTM4LjUwMyAyNi43NDIgMTIwLjg3OCA2Ny44NTdDMTAzLjAwMyA2Mi45ODQgOTEuMjUzIDY0LjEwOSA4NC4yNTMgNjUuMjM0QzM4LjAwMyA3MC43MzIgMi41MDMgMTA4LjcyMyAwLjEyOCAxNTUuMjExQy0wLjg3MiAxNzEuMjA3IDQuMjUzIDE5Mi4yMDMgMTAuNzUzIDIwNC4zMjRDMTkuNzUzIDIyMS4zMiAyNi42MjggMjM5LjMxNiAyOS43NTMgMjU3LjkzN0MyMi4zNzggMjU5LjY4NiAxNS4zNzggMjYyLjkzNiAxMC4xMjggMjY4LjY4NEMyLjg3OCAyNzYuNTU3IC0wLjc0NyAyODcuMDU1IDAuMTI4IDI5Ny42NzhDNi4zNzggMzcwLjUzMyA1MS41MDMgNDM0LjE0MyAxMTYuNzUzIDQ2NC4wMTJDMTE5LjYyOCA0OTAuODc5IDE0Mi4xMjggNTEyIDE2OS41MDMgNTEySDM0My4xMjhDMzcwLjUwMyA1MTIgMzkzLjI1MyA0OTAuODc5IDM5NS44NzggNDYzLjc2MkM0NjAuODc4IDQzMy43NyA1MDUuNzUzIDM3MC4yODMgNTExLjg3OCAyOTcuNjc4QzUxMi41MDMgMjg5LjkzIDUxMC4wMDMgMjgyLjU1NSA1MDYuMTI4IDI3NS44MDdDNTA5LjYyOCAyNjQuNDM2IDUxMi4wMDMgMjUyLjU2MiA1MTIuMDAzIDI0MC4wNjZaTTIwOCAxMTJDMjA4IDEwMy4xNTYgMjE1LjE1NiA5NiAyMjQgOTZTMjQwIDEwMy4xNTYgMjQwIDExMlYyNTZIMjA4VjExMlpNNjguNjg3IDE0OC42ODhDNzQuOTM3IDE0Mi40MzggODUuMDYyIDE0Mi40MzggOTEuMzEyIDE0OC42ODhMMTk4LjYyNSAyNTZIMTUzLjM3NUw2OC42ODcgMTcxLjMxMkM2Mi40MzcgMTY1LjA2MiA2Mi40MzcgMTU0LjkzOCA2OC42ODcgMTQ4LjY4OFpNMzY0LjAwMyA0MjUuMDIxTDM0OC4yNTMgNDMwLjc3VjQ1OC4yNjJDMzQ4LjI1MyA0NjEuNTEyIDM0NS44NzggNDY0LjAxMiAzNDMuMTI4IDQ2NC4wMTJIMTY5LjUwM0MxNjYuNzUzIDQ2NC4wMTIgMTY0LjM3OCA0NjEuNTEyIDE2NC4zNzggNDU4LjI2MlY0MzAuODk1TDE0OC41MDMgNDI1LjI3MUM5NS43NTMgNDA2LjI3NSA1Ny43NTMgMzU5LjQxMiA0OS4yNTMgMzA0LjA1MUg0NjIuNzUzQzQ1NC4zNzggMzU5LjI4NyA0MTYuNTAzIDQwNi4wMjUgMzY0LjAwMyA0MjUuMDIxWk00NjEuNzUzIDI1Ni4wNjJIMzA2LjEyOEMzMDUuMDAzIDI1MC44MTIgMzAzLjg3OCAyNDUuNjg5IDMwMy44NzggMjQwLjA2NkMzMDMuODc4IDE5NS44MjYgMzM5Ljc1MyAxNjAuMDg2IDM4My44NzggMTYwLjA4NkM0MzAuMDAzIDE2MC4wODYgNDY0LjAwMyAxOTguOTUxIDQ2NC4wMDMgMjQwLjA2NkM0NjQuMDAzIDI0NS42ODkgNDYyLjg3OCAyNTAuODEyIDQ2MS43NTMgMjU2LjA2MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Salad(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M512.003 240.066C512.003 190.203 483.003 147.213 441.128 126.219C428.628 92.977 398.628 69.607 363.378 65.234C350.628 63.234 339.128 64.484 326.753 67.857C309.003 26.742 268.628 0 223.753 0C179.003 0 138.503 26.742 120.878 67.857C103.003 62.984 91.253 64.109 84.253 65.234C38.003 70.732 2.503 108.723 0.128 155.211C-0.872 171.207 4.253 192.203 10.753 204.324C19.753 221.32 26.628 239.316 29.753 257.937C22.378 259.686 15.378 262.936 10.128 268.684C2.878 276.557 -0.747 287.055 0.128 297.678C6.378 370.533 51.503 434.143 116.753 464.012C119.628 490.879 142.128 512 169.503 512H343.128C370.503 512 393.253 490.879 395.878 463.762C460.878 433.77 505.753 370.283 511.878 297.678C512.503 289.93 510.003 282.555 506.128 275.807C509.628 264.436 512.003 252.562 512.003 240.066ZM208 112C208 103.156 215.156 96 224 96S240 103.156 240 112V256H208V112ZM68.687 148.688C74.937 142.438 85.062 142.438 91.312 148.688L198.625 256H153.375L68.687 171.312C62.437 165.062 62.437 154.938 68.687 148.688ZM364.003 425.021L348.253 430.77V458.262C348.253 461.512 345.878 464.012 343.128 464.012H169.503C166.753 464.012 164.378 461.512 164.378 458.262V430.895L148.503 425.271C95.753 406.275 57.753 359.412 49.253 304.051H462.753C454.378 359.287 416.503 406.025 364.003 425.021ZM461.753 256.062H306.128C305.003 250.812 303.878 245.689 303.878 240.066C303.878 195.826 339.753 160.086 383.878 160.086C430.003 160.086 464.003 198.951 464.003 240.066C464.003 245.689 462.878 250.812 461.753 256.062Z" />
        </Icon>
    </>
}
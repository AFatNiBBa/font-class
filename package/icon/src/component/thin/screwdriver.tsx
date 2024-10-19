
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `screwdriver` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/screwdriver?s=thin screwdriver}
 * @preview ![screwdriver](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDkuNjMzIDY0LjM0NEw0NDcuNjMzIDIuMzQ0QzQ0NC43ODkgLTAuNSA0NDAuMjczIC0wLjgxMiA0MzcuMTMzIDEuNjI1TDMxNS4xMzMgOTQuNjI1QzMxMy4xNDggOTYuMTU2IDMxMS45NzcgOTguNSAzMTEuOTc3IDEwMVYxODguNjg4TDIzNC4xODQgMjY2LjQ4QzIwMi42MzUgMjQwLjczNiAxNTYuMTAyIDI0Mi4xODYgMTI2LjY5NSAyNzEuNTYyTDEyLjg1MiAzODUuMjgxQy00LjI4OSA0MDIuNTk0IC00LjI4OSA0MzAuNjU2IDEyLjg4MyA0NDcuODQ0TDY0LjE0OCA0OTkuMDk0QzcyLjc0MiA1MDcuNjg4IDg0LjA1NSA1MTIgOTUuMzgzIDUxMlMxMTguMDU1IDUwNy42ODggMTI2LjcxMSA0OTkuMDk0TDI0MC40MTQgMzg1LjI4MUMyNjkuODIgMzU1Ljg3NSAyNzEuMjcxIDMwOS4zMzggMjQ1LjQ5OCAyNzcuNzkxTDMyMy4yODkgMjAwSDQxMC45NzdDNDEzLjQ3NyAyMDAgNDE1LjgyIDE5OC44NDQgNDE3LjMzNiAxOTYuODQ0TDUxMC4zMzYgNzQuODQ0QzUxMi43NzMgNzEuNjU2IDUxMi40NjEgNjcuMTg4IDUwOS42MzMgNjQuMzQ0Wk0yMjkuMTAyIDM3My45NjlMMTE1LjQxNCA0ODcuNzVDMTA0LjM4MyA0OTguNzE5IDg2LjQ0NSA0OTguNzUgNzUuNDYxIDQ4Ny43ODFMMjQuMTk1IDQzNi41MzFDMTMuMjQyIDQyNS41NjMgMTMuMjU4IDQwNy42MjUgMjQuMTk1IDM5Ni41NjNMMTM4LjAwOCAyODIuODc1QzE2My4xMzMgMjU3LjgxMyAyMDMuOTc3IDI1Ny44MTMgMjI5LjEwMiAyODIuODc1QzI1NC4xOTUgMzA4IDI1NC4xOTUgMzQ4Ljg0NCAyMjkuMTAyIDM3My45NjlaTTQwNy4wMDggMTg0SDMyNy45NzdWMTA0Ljk2OUw0NDEuMjU4IDE4LjU5NEw0OTMuMzY3IDcwLjcxOUw0MDcuMDA4IDE4NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Screwdriver(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M509.633 64.344L447.633 2.344C444.789 -0.5 440.273 -0.812 437.133 1.625L315.133 94.625C313.148 96.156 311.977 98.5 311.977 101V188.688L234.184 266.48C202.635 240.736 156.102 242.186 126.695 271.562L12.852 385.281C-4.289 402.594 -4.289 430.656 12.883 447.844L64.148 499.094C72.742 507.688 84.055 512 95.383 512S118.055 507.688 126.711 499.094L240.414 385.281C269.82 355.875 271.271 309.338 245.498 277.791L323.289 200H410.977C413.477 200 415.82 198.844 417.336 196.844L510.336 74.844C512.773 71.656 512.461 67.188 509.633 64.344ZM229.102 373.969L115.414 487.75C104.383 498.719 86.445 498.75 75.461 487.781L24.195 436.531C13.242 425.563 13.258 407.625 24.195 396.563L138.008 282.875C163.133 257.813 203.977 257.813 229.102 282.875C254.195 308 254.195 348.844 229.102 373.969ZM407.008 184H327.977V104.969L441.258 18.594L493.367 70.719L407.008 184Z" />
        </Icon>
    </>
}
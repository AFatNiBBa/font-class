
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `moon-stars` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/moon-stars?s=thin moon-stars}
 * @preview ![moon-stars](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzQuMDMxIDQyNi4xOTNDMzMzLjQ1MyA0MjYuMTkzIDMzMi44NTcgNDI2LjI1MiAzMzIuMjUgNDI2LjM3NUMzMjIuNjA1IDQyOC4yMTMgMzEzLjA0MSA0MjkuMDk2IDMwMy42NDggNDI5LjA5NkMyMjIuMzU0IDQyOS4wOTYgMTUzLjc1IDM2My4wMTQgMTUzLjc1IDI3OC43NUMxNTMuNzUgMjI0LjUgMTgyLjc1IDE3NC43NSAyMjkuNzUgMTQ3Ljg3NUMyMzcuMTI1IDE0My43NSAyMzUuMjUgMTMyLjc1IDIyNyAxMzEuMjVDMjE1LjA2MiAxMjkuMDQxIDIwMy4yMDkgMTI3Ljk4IDE5MS41NjYgMTI3Ljk3OUM4Ny44ODkgMTI3Ljk3MyAwIDIxMi4xMTUgMCAzMjBDMCA0MjYuMDAxIDg1Ljc1IDUxMiAxOTEuNzUgNTEyQzI1MSA1MTIgMzA1IDQ4NS4xMjUgMzQwLjc1IDQ0MC44NzVDMzQ1LjcxNyA0MzQuODY5IDM0MS4wNzggNDI2LjE5MyAzMzQuMDMxIDQyNi4xOTNaTTE5MS43NSA0OTZDOTQuODQyIDQ5NiAxNiA0MTcuMDQ3IDE2IDMyMEMxNiAyNzIuNTY4IDM0LjUyMSAyMjguMTQ1IDY4LjE1IDE5NC45MUMxMDEuMzg5IDE2Mi4wNjQgMTQ1LjIxOSAxNDMuOTc3IDE5MS41NjYgMTQzLjk3OUMxOTYuMjI5IDE0My45NzkgMjAwLjkxOCAxNDQuMTY4IDIwNS42MTEgMTQ0LjU0M0MxNjMuMzM2IDE3NS43NDIgMTM3Ljc1IDIyNS41ODggMTM3Ljc1IDI3OC43NUMxMzcuNzUgMzcwLjQ3MyAyMTIuMTcyIDQ0NS4wOTYgMzAzLjY0OCA0NDUuMDk2QzMwNy43NCA0NDUuMDk2IDMxMS44NSA0NDQuOTQzIDMxNS44ODkgNDQ0LjY0NUMyODMuMTI3IDQ3Ny40ODQgMjM4LjgxOCA0OTYgMTkxLjc1IDQ5NlpNNTA0IDIxNkg0MjRWMTM2QzQyNCAxMzEuNTc4IDQyMC40MDYgMTI4IDQxNiAxMjhTNDA4IDEzMS41NzggNDA4IDEzNlYyMTZIMzI4QzMyMy41OTQgMjE2IDMyMCAyMTkuNTc4IDMyMCAyMjRTMzIzLjU5NCAyMzIgMzI4IDIzMkg0MDhWMzEyQzQwOCAzMTYuNDIyIDQxMS41OTQgMzIwIDQxNiAzMjBTNDI0IDMxNi40MjIgNDI0IDMxMlYyMzJINTA0QzUwOC40MDYgMjMyIDUxMiAyMjguNDIyIDUxMiAyMjRTNTA4LjQwNiAyMTYgNTA0IDIxNlpNMjY0IDcySDMxMlYxMjBDMzEyIDEyNC40MjIgMzE1LjU5NCAxMjggMzIwIDEyOFMzMjggMTI0LjQyMiAzMjggMTIwVjcySDM3NkMzODAuNDA2IDcyIDM4NCA2OC40MjIgMzg0IDY0UzM4MC40MDYgNTYgMzc2IDU2SDMyOFY4QzMyOCAzLjU3OCAzMjQuNDA2IDAgMzIwIDBTMzEyIDMuNTc4IDMxMiA4VjU2SDI2NEMyNTkuNTk0IDU2IDI1NiA1OS41NzggMjU2IDY0UzI1OS41OTQgNzIgMjY0IDcyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MoonStars(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M334.031 426.193C333.453 426.193 332.857 426.252 332.25 426.375C322.605 428.213 313.041 429.096 303.648 429.096C222.354 429.096 153.75 363.014 153.75 278.75C153.75 224.5 182.75 174.75 229.75 147.875C237.125 143.75 235.25 132.75 227 131.25C215.062 129.041 203.209 127.98 191.566 127.979C87.889 127.973 0 212.115 0 320C0 426.001 85.75 512 191.75 512C251 512 305 485.125 340.75 440.875C345.717 434.869 341.078 426.193 334.031 426.193ZM191.75 496C94.842 496 16 417.047 16 320C16 272.568 34.521 228.145 68.15 194.91C101.389 162.064 145.219 143.977 191.566 143.979C196.229 143.979 200.918 144.168 205.611 144.543C163.336 175.742 137.75 225.588 137.75 278.75C137.75 370.473 212.172 445.096 303.648 445.096C307.74 445.096 311.85 444.943 315.889 444.645C283.127 477.484 238.818 496 191.75 496ZM504 216H424V136C424 131.578 420.406 128 416 128S408 131.578 408 136V216H328C323.594 216 320 219.578 320 224S323.594 232 328 232H408V312C408 316.422 411.594 320 416 320S424 316.422 424 312V232H504C508.406 232 512 228.422 512 224S508.406 216 504 216ZM264 72H312V120C312 124.422 315.594 128 320 128S328 124.422 328 120V72H376C380.406 72 384 68.422 384 64S380.406 56 376 56H328V8C328 3.578 324.406 0 320 0S312 3.578 312 8V56H264C259.594 56 256 59.578 256 64S259.594 72 264 72Z" />
        </Icon>
    </>
}
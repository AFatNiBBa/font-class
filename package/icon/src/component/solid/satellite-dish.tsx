
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `satellite-dish` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/satellite-dish?s=solid satellite-dish}
 * @preview ![satellite-dish](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMTUuOTk5IDEwNEMyMDIuNzQ5IDEwNCAxOTEuOTk5IDExNC43NSAxOTEuOTk5IDEyOFMyMDIuNzQ5IDE1MiAyMTUuOTk5IDE1MkMyOTUuNDA2IDE1MiAzNTkuOTk5IDIxNi41OTQgMzU5Ljk5OSAyOTZDMzU5Ljk5OSAzMDkuMjUgMzcwLjc0OSAzMjAgMzgzLjk5OSAzMjBTNDA3Ljk5OSAzMDkuMjUgNDA3Ljk5OSAyOTZDNDA3Ljk5OSAxOTAuMTI1IDMyMS44NzQgMTA0IDIxNS45OTkgMTA0Wk0yMjMuOTk5IDBDMjA2LjMyNyAwIDE5MS45OTkgMTQuMzEyIDE5MS45OTkgMzJTMjA2LjMyNyA2NCAyMjMuOTk5IDY0QzM0Ny41MTUgNjQgNDQ3Ljk5OSAxNjQuNSA0NDcuOTk5IDI4OEM0NDcuOTk5IDMwNS42ODggNDYyLjMyNyAzMjAgNDc5Ljk5OSAzMjBTNTExLjk5OSAzMDUuNjg4IDUxMS45OTkgMjg4QzUxMS45OTkgMTI5LjE4OCAzODIuNzk2IDAgMjIzLjk5OSAwWk0xODguODY1IDM0Ni4wMDhMMjE2LjIzOCAzMTguNjM3QzIxOC44NjMgMzE5LjI2MiAyMjEuMjM4IDMyMC4xMzcgMjIzLjk4OCAzMjAuMTM3QzI0MS43MzYgMzIwLjEzNyAyNTUuOTg2IDMwNS44ODcgMjU1Ljk4NiAyODguMTQxQzI1NS45ODYgMjcwLjUxNiAyNDEuNzM2IDI1Ni4xNDEgMjIzLjk4OCAyNTYuMTQxQzIwNi4zNjMgMjU2LjE0MSAxOTEuOTg4IDI3MC41MTYgMTkxLjk4OCAyODguMTQxQzE5MS45ODggMjkxLjAxNiAxOTIuODYzIDI5My4zOTEgMTkzLjYxMyAyOTYuMDE2TDE2Ni4yNCAzMjMuMzg3TDQ5LjM2OCAyMDYuNTE2QzQyLjExOCAxOTkuMjY2IDI5LjI0NSAyMDAuNTE2IDI0LjM3IDIwOS41MTZDLTE3LjM3OCAyODcuMzkxIC01LjUwNSAzODYuMjU4IDYwLjExOCA0NTEuODgzQzEyNS43NDEgNTE3LjUwNCAyMjQuNzM2IDUyOS4zNzkgMzAyLjQ4NCA0ODcuNjMzQzMxMS42MDkgNDgyLjYzMyAzMTIuODU5IDQ2OS44ODMgMzA1LjQ4NCA0NjIuNjMzTDE4OC44NjUgMzQ2LjAwOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SatelliteDish(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M215.999 104C202.749 104 191.999 114.75 191.999 128S202.749 152 215.999 152C295.406 152 359.999 216.594 359.999 296C359.999 309.25 370.749 320 383.999 320S407.999 309.25 407.999 296C407.999 190.125 321.874 104 215.999 104ZM223.999 0C206.327 0 191.999 14.312 191.999 32S206.327 64 223.999 64C347.515 64 447.999 164.5 447.999 288C447.999 305.688 462.327 320 479.999 320S511.999 305.688 511.999 288C511.999 129.188 382.796 0 223.999 0ZM188.865 346.008L216.238 318.637C218.863 319.262 221.238 320.137 223.988 320.137C241.736 320.137 255.986 305.887 255.986 288.141C255.986 270.516 241.736 256.141 223.988 256.141C206.363 256.141 191.988 270.516 191.988 288.141C191.988 291.016 192.863 293.391 193.613 296.016L166.24 323.387L49.368 206.516C42.118 199.266 29.245 200.516 24.37 209.516C-17.378 287.391 -5.505 386.258 60.118 451.883C125.741 517.504 224.736 529.379 302.484 487.633C311.609 482.633 312.859 469.883 305.484 462.633L188.865 346.008Z" />
        </Icon>
    </>
}
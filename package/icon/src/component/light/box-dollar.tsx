
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `box-dollar` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/box-dollar?s=light box-dollar}
 * @preview ![box-dollar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMTQuODI4IDM2Ny4wNjJDMjA3IDM2NS45NTMgMTk3LjM3NSAzNjIuNjQxIDE4OC45MDYgMzU5LjczNEwxODQuMzI4IDM1OC4xNzJDMTc1LjkzOCAzNTUuMzEyIDE2Ni44NzUgMzU5LjgyOCAxNjQuMDQ3IDM2OC4yMDNTMTY1LjcwMyAzODUuNjU2IDE3NC4wNzggMzg4LjQ4NEwxNzguNSAzOTBDMTg3Ljc1OCAzOTMuMTggMTk4LjE4IDM5Ni42MjEgMjA4LjM0MiAzOTguMzA5QzIwOC4yNzcgMzk4Ljg5MyAyMDggMzk5LjQgMjA4IDQwMFY0MDhDMjA4IDQxNi44NDQgMjE1LjE1NiA0MjQgMjI0IDQyNFMyNDAgNDE2Ljg0NCAyNDAgNDA4VjQwMEMyNDAgMzk5LjQyMiAyMzkuNzMgMzk4LjkzNCAyMzkuNjcyIDM5OC4zNzNDMjYzLjMzIDM5NC43MzIgMjgwLjI5NyAzODEuOTczIDI4My45ODQgMzYxLjc1QzI5MS4yMzQgMzIxLjcxOSAyNTMuMzEyIDMxMS4zOTEgMjI4LjIxOSAzMDQuNTQ3TDIyMi4zNTkgMzAyLjkzN0MxOTMuNTMxIDI5NC44NTkgMTk0LjQwNiAyOTAuMDYyIDE5NS41IDI4My45NjlDMTk3LjU0NyAyNzIuODI4IDIxNi40NTMgMjcwLjQzNyAyMzMuMDc4IDI3Mi45MjJDMjM5LjI4MSAyNzMuODQ0IDI0Ni4xMDkgMjc1Ljg1OSAyNTIuNTk0IDI3OEMyNjAuOTIyIDI4MC43NSAyNzAuMDMxIDI3Ni4xODggMjcyLjc5NyAyNjcuNzk3QzI3NS41NDcgMjU5LjQwNiAyNzAuOTg0IDI1MC4zNTkgMjYyLjU5NCAyNDcuNTk0QzI1My41OTIgMjQ0LjYzNSAyNDYuNDMyIDI0Mi44MyAyNDAgMjQxLjcyM1YyMzJDMjQwIDIyMy4xNTYgMjMyLjg0NCAyMTYgMjI0IDIxNlMyMDggMjIzLjE1NiAyMDggMjMyVjI0MS4xNDNDMTg0LjMzNCAyNDQuNzc1IDE2Ny43MDMgMjU4LjAyNyAxNjQuMDE2IDI3OC4yNUMxNTYuODI4IDMxNy44MTIgMTk1LjI2NiAzMjguNTc4IDIxMy43MzQgMzMzLjc1TDIxOS43OTcgMzM1LjQyMkMyNDkuOTUzIDM0My42NDEgMjU0LjA2MiAzNDcuMzkxIDI1Mi41IDM1Ni4wMzFDMjUwLjQ1MyAzNjcuMTU2IDIzMS41OTQgMzY5LjU5NCAyMTQuODI4IDM2Ny4wNjJaTTQ0Mi45MzggMTYyLjA5NEwzOTEuMTU2IDU4LjU0N0MzODMuMDIgNDIuMjc3IDM2Ni4zOTEgMzIgMzQ4LjE5OSAzMkg5OS43ODFDODEuNTk2IDMyIDY0Ljk3MyA0Mi4yNzMgNTYuODQgNTguNTM5TDUuMDY2IDE2Mi4wODZDMS43MzQgMTY4Ljc1IDAgMTc2LjA5OCAwIDE4My41NDdWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlYxODMuNTM1QzQ0OCAxNzYuMDkyIDQ0Ni4yNjggMTY4Ljc1MiA0NDIuOTM4IDE2Mi4wOTRaTTI0MCA2NEgzNDguMjE5QzM1NC4zNDQgNjQgMzU5LjgxMiA2Ny4zNzUgMzYyLjUzMSA3Mi44NDRMNDA2LjEwOSAxNjBIMjQwVjY0Wk04NS40NjkgNzIuODI4Qzg4LjE4OCA2Ny4zNzUgOTMuNjU2IDY0IDk5Ljc4MSA2NEgyMDhWMTYwSDQxLjg4OUw4NS40NjkgNzIuODI4Wk00MTYgNDE2QzQxNiA0MzMuNjc0IDQwMS42NzQgNDQ4IDM4NCA0NDhINjRDNDYuMzI2IDQ0OCAzMiA0MzMuNjc0IDMyIDQxNlYxOTJINDE2VjQxNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BoxDollar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M214.828 367.062C207 365.953 197.375 362.641 188.906 359.734L184.328 358.172C175.938 355.312 166.875 359.828 164.047 368.203S165.703 385.656 174.078 388.484L178.5 390C187.758 393.18 198.18 396.621 208.342 398.309C208.277 398.893 208 399.4 208 400V408C208 416.844 215.156 424 224 424S240 416.844 240 408V400C240 399.422 239.73 398.934 239.672 398.373C263.33 394.732 280.297 381.973 283.984 361.75C291.234 321.719 253.312 311.391 228.219 304.547L222.359 302.937C193.531 294.859 194.406 290.062 195.5 283.969C197.547 272.828 216.453 270.437 233.078 272.922C239.281 273.844 246.109 275.859 252.594 278C260.922 280.75 270.031 276.188 272.797 267.797C275.547 259.406 270.984 250.359 262.594 247.594C253.592 244.635 246.432 242.83 240 241.723V232C240 223.156 232.844 216 224 216S208 223.156 208 232V241.143C184.334 244.775 167.703 258.027 164.016 278.25C156.828 317.812 195.266 328.578 213.734 333.75L219.797 335.422C249.953 343.641 254.062 347.391 252.5 356.031C250.453 367.156 231.594 369.594 214.828 367.062ZM442.938 162.094L391.156 58.547C383.02 42.277 366.391 32 348.199 32H99.781C81.596 32 64.973 42.273 56.84 58.539L5.066 162.086C1.734 168.75 0 176.098 0 183.547V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V183.535C448 176.092 446.268 168.752 442.938 162.094ZM240 64H348.219C354.344 64 359.812 67.375 362.531 72.844L406.109 160H240V64ZM85.469 72.828C88.188 67.375 93.656 64 99.781 64H208V160H41.889L85.469 72.828ZM416 416C416 433.674 401.674 448 384 448H64C46.326 448 32 433.674 32 416V192H416V416Z" />
        </Icon>
    </>
}
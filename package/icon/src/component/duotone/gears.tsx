
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `gears` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gears?s=duotone gears}
 * @preview ![gears](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTYyOC44NzEgMzE4LjE3NEM2MjcuODU1IDMxMy4zMzQgNjIzLjQxOCAzMDkuOTQxIDYxOC40NzUgMzA5Ljk0MUg1ODQuMzgxQzU3OS4wNTUgMjk0LjcyMyA1NzEuMDE4IDI4MC45NjMgNTYwLjcyMSAyNjguOTg0TDU3Ny44MTMgMjM5LjM4N0M1NzguNzgzIDIzNy43MDcgNTc5LjI2MiAyMzUuODI4IDU3OS4yNjIgMjMzLjk2N0M1NzkuMjYyIDIzMS4wNzQgNTc4LjEwNSAyMjguMjIzIDU3NS44NDYgMjI2LjIxOUM1NTkuMDE4IDIxMS4yOTcgNTM5LjE2NCAxOTkuNzU4IDUxNy4zMjggMTkyLjUwOEM1MTIuNjI1IDE5MC45NDcgNTA3LjQwOCAxOTMuMDk4IDUwNC45MyAxOTcuMzkxTDQ4OC4xNjIgMjI2LjQzMkM0ODAuMzMgMjI0LjkzNCA0NzIuMjk1IDIyNCA0NjQuMDI5IDIyNEM0NTUuODkzIDIyNCA0NDcuOTkgMjI0Ljk0MyA0NDAuMjczIDIyNi4zOTVMNDIzLjUzMyAxOTcuMzkxQzQyMS4wNTMgMTkzLjA5OCA0MTUuODM0IDE5MC45NDcgNDExLjEzMSAxOTIuNTA4QzM4OS4yOTkgMTk5Ljc1OCAzNjkuNDM5IDIxMS4yOTcgMzUyLjYxNSAyMjYuMjE5QzM1MC4zNTUgMjI4LjIyMyAzNDkuMTk1IDIzMS4wNzYgMzQ5LjE5NSAyMzMuOTY3QzM0OS4xOTUgMjM1LjgyOCAzNDkuNjc0IDIzNy43MDUgMzUwLjY0NiAyMzkuMzg3TDM2Ny41NyAyNjguNjk5QzM1Ny4xNjIgMjgwLjc0IDM0OS4wNDMgMjk0LjYwNSAzNDMuNjc4IDMwOS45NDFIMzA5Ljk4NEMzMDUuMDQzIDMwOS45NDEgMzAwLjYwMiAzMTMuMzM0IDI5OS41ODYgMzE4LjE3NEMyOTcuMjk5IDMyOS4xMDIgMjk2IDM0MC4zOTEgMjk2IDM1MkMyOTYgMzYzLjYwNyAyOTcuMjk5IDM3NC44OTYgMjk5LjU4NiAzODUuODI0QzMwMC42MDIgMzkwLjY2NCAzMDUuMDQzIDM5NC4wNTcgMzA5Ljk4NCAzOTQuMDU3SDM0My42NzRDMzQ5LjAzOSA0MDkuMzkzIDM1Ny4xNjIgNDIzLjI1OCAzNjcuNTcgNDM1LjMwMUwzNTAuNjQ2IDQ2NC42MTNDMzQ5LjY3NCA0NjYuMjkzIDM0OS4xOTUgNDY4LjE3MiAzNDkuMTk1IDQ3MC4wMzNDMzQ5LjE5NSA0NzIuOTI0IDM1MC4zNTUgNDc1Ljc3NSAzNTIuNjE1IDQ3Ny43ODFDMzY5LjQzOSA0OTIuNzAzIDM4OS4yOTkgNTA0LjI0MiA0MTEuMTMxIDUxMS40OTJDNDE1LjgzNCA1MTMuMDU1IDQyMS4wNTMgNTEwLjkwMiA0MjMuNTMzIDUwNi42MDlMNDQwLjI3MyA0NzcuNjA1QzQ0Ny45ODYgNDc5LjA1NyA0NTUuODkzIDQ4MCA0NjQuMDI5IDQ4MEM0NzIuMjk3IDQ4MCA0ODAuMzMgNDc5LjA2NiA0ODguMTYyIDQ3Ny41NjhMNTA0LjkzIDUwNi42MDlDNTA3LjQwOCA1MTAuOTAyIDUxMi42MjUgNTEzLjA1NSA1MTcuMzI4IDUxMS40OTJDNTM5LjE2NCA1MDQuMjQyIDU1OS4wMTggNDkyLjcwMyA1NzUuODQ2IDQ3Ny43ODFDNTc4LjEwNSA0NzUuNzc1IDU3OS4yNjIgNDcyLjkyNCA1NzkuMjYyIDQ3MC4wMzNDNTc5LjI2MiA0NjguMTcyIDU3OC43ODMgNDY2LjI5NyA1NzcuODEyIDQ2NC42MTNMNTYwLjcyMSA0MzUuMDE2QzU3MS4wMTggNDIzLjAzNyA1NzkuMDU5IDQwOS4yNzUgNTg0LjM4MyAzOTQuMDU3SDYxOC40NzVDNjIzLjQxOCAzOTQuMDU3IDYyNy44NTUgMzkwLjY2NCA2MjguODcxIDM4NS44MjRDNjMxLjE1OCAzNzQuODk2IDYzMi40NTkgMzYzLjYwNyA2MzIuNDU5IDM1MkM2MzIuNDU5IDM0MC4zOTEgNjMxLjE1OCAzMjkuMTAyIDYyOC44NzEgMzE4LjE3NFpNNDY0LjAyOSA0MDBDNDM3LjUxOCA0MDAgNDE2LjAyOSAzNzguNTEgNDE2LjAyOSAzNTJTNDM3LjUxOCAzMDQgNDY0LjAyOSAzMDRDNDkwLjUzOSAzMDQgNTEyLjAyOSAzMjUuNDkgNTEyLjAyOSAzNTJTNDkwLjUzOSA0MDAgNDY0LjAyOSA0MDBaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI4NS42MDUgMTk5Ljk1NUMyODcuMDU3IDE5Mi4yNCAyODggMTg0LjMzNiAyODggMTc2LjE5OUMyODggMTY3LjkzMiAyODcuMDY2IDE1OS44OTYgMjg1LjU2OCAxNTIuMDY2TDMxNC42MDkgMTM1LjI5OUMzMTguOTAyIDEzMi44MTggMzIxLjA1NSAxMjcuNjA0IDMxOS40OTIgMTIyLjlDMzEyLjI0MiAxMDEuMDY0IDMwMC43MDMgODEuMjExIDI4NS43ODEgNjQuMzgxQzI4My43NzUgNjIuMTIzIDI4MC45MjQgNjAuOTY3IDI3OC4wMzMgNjAuOTY3QzI3Ni4xNzIgNjAuOTY3IDI3NC4yOTcgNjEuNDQ1IDI3Mi42MTMgNjIuNDE2TDI0My4wMTYgNzkuNTA2QzIzMS4wMzcgNjkuMjExIDIxNy4yNzUgNjEuMTcgMjAyLjA1NyA1NS44NDZWMjEuNzU0QzIwMi4wNTcgMTYuODExIDE5OC42NjQgMTIuMzczIDE5My44MjQgMTEuMzU3QzE4Mi44OTcgOS4wNjggMTcxLjYwNyA3Ljc3IDE2MCA3Ljc3QzE0OC4zOTEgNy43NyAxMzcuMTAyIDkuMDY4IDEyNi4xNzQgMTEuMzU3QzEyMS4zMzQgMTIuMzczIDExNy45NDEgMTYuODExIDExNy45NDEgMjEuNzU0VjU1Ljg0OEMxMDIuNzIzIDYxLjE3MiA4OC45NjMgNjkuMjExIDc2Ljk4NCA3OS41MDZMNDcuMzg3IDYyLjQxNkM0NS43MDcgNjEuNDQ1IDQzLjgyOCA2MC45NjcgNDEuOTY3IDYwLjk2N0MzOS4wNzQgNjAuOTY3IDM2LjIyMyA2Mi4xMjMgMzQuMjE5IDY0LjM4MUMxOS4yOTcgODEuMjExIDcuNzU4IDEwMS4wNjQgMC41MDggMTIyLjlDLTEuMDUzIDEyNy42MDQgMS4wOTggMTMyLjgxOCA1LjM5MSAxMzUuMjk5TDM0LjQzMiAxNTIuMDY2QzMyLjkzNCAxNTkuODk2IDMyIDE2Ny45MzQgMzIgMTc2LjE5OUMzMiAxODQuMzM2IDMyLjk0MyAxOTIuMjM4IDM0LjM5NSAxOTkuOTUzTDUuMzkxIDIxNi42OTVDMS4wOTggMjE5LjE3NiAtMS4wNTMgMjI0LjM5NSAwLjUwOCAyMjkuMDk4QzcuNzU4IDI1MC45MyAxOS4yOTcgMjcwLjc4NyAzNC4yMTkgMjg3LjYxM0MzNi4yMjMgMjg5Ljg3MyAzOS4wNzYgMjkxLjAzMSA0MS45NjcgMjkxLjAzMUM0My44MjggMjkxLjAzMSA0NS43MDUgMjkwLjU1MyA0Ny4zODcgMjg5LjU4Mkw3Ni42OTkgMjcyLjY1NkM4OC43NCAyODMuMDY2IDEwMi42MDUgMjkxLjE4NiAxMTcuOTQxIDI5Ni41NTFWMzMwLjI0NEMxMTcuOTQxIDMzNS4xODYgMTIxLjMzNCAzMzkuNjI1IDEyNi4xNzQgMzQwLjY0MUMxMzcuMTAyIDM0Mi45MyAxNDguMzkxIDM0NC4yMjkgMTYwIDM0NC4yMjlDMTcxLjYwNyAzNDQuMjI5IDE4Mi44OTcgMzQyLjkzIDE5My44MjQgMzQwLjY0MUMxOTguNjY0IDMzOS42MjUgMjAyLjA1NyAzMzUuMTg2IDIwMi4wNTcgMzMwLjI0NFYyOTYuNTUzQzIxNy4zOTMgMjkxLjE4NyAyMzEuMjU4IDI4My4wNjYgMjQzLjMwMSAyNzIuNjU2TDI3Mi42MTMgMjg5LjU4MkMyNzQuMjkzIDI5MC41NTMgMjc2LjE3MiAyOTEuMDMxIDI3OC4wMzMgMjkxLjAzMUMyODAuOTI0IDI5MS4wMzEgMjgzLjc3NSAyODkuODczIDI4NS43ODEgMjg3LjYxM0MzMDAuNzAzIDI3MC43ODcgMzEyLjI0MiAyNTAuOTMgMzE5LjQ5MiAyMjkuMDk4QzMyMS4wNTUgMjI0LjM5NSAzMTguOTAyIDIxOS4xNzYgMzE0LjYwOSAyMTYuNjk1TDI4NS42MDUgMTk5Ljk1NVpNMTYwIDIyNC4xOTlDMTMzLjQ5IDIyNC4xOTkgMTEyIDIwMi43MDkgMTEyIDE3Ni4xOTlTMTMzLjQ5IDEyOC4xOTkgMTYwIDEyOC4xOTlTMjA4IDE0OS42ODkgMjA4IDE3Ni4xOTlTMTg2LjUxIDIyNC4xOTkgMTYwIDIyNC4xOTlaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Gears(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M628.871 318.174C627.855 313.334 623.418 309.941 618.475 309.941H584.381C579.055 294.723 571.018 280.963 560.721 268.984L577.813 239.387C578.783 237.707 579.262 235.828 579.262 233.967C579.262 231.074 578.105 228.223 575.846 226.219C559.018 211.297 539.164 199.758 517.328 192.508C512.625 190.947 507.408 193.098 504.93 197.391L488.162 226.432C480.33 224.934 472.295 224 464.029 224C455.893 224 447.99 224.943 440.273 226.395L423.533 197.391C421.053 193.098 415.834 190.947 411.131 192.508C389.299 199.758 369.439 211.297 352.615 226.219C350.355 228.223 349.195 231.076 349.195 233.967C349.195 235.828 349.674 237.705 350.646 239.387L367.57 268.699C357.162 280.74 349.043 294.605 343.678 309.941H309.984C305.043 309.941 300.602 313.334 299.586 318.174C297.299 329.102 296 340.391 296 352C296 363.607 297.299 374.896 299.586 385.824C300.602 390.664 305.043 394.057 309.984 394.057H343.674C349.039 409.393 357.162 423.258 367.57 435.301L350.646 464.613C349.674 466.293 349.195 468.172 349.195 470.033C349.195 472.924 350.355 475.775 352.615 477.781C369.439 492.703 389.299 504.242 411.131 511.492C415.834 513.055 421.053 510.902 423.533 506.609L440.273 477.605C447.986 479.057 455.893 480 464.029 480C472.297 480 480.33 479.066 488.162 477.568L504.93 506.609C507.408 510.902 512.625 513.055 517.328 511.492C539.164 504.242 559.018 492.703 575.846 477.781C578.105 475.775 579.262 472.924 579.262 470.033C579.262 468.172 578.783 466.297 577.812 464.613L560.721 435.016C571.018 423.037 579.059 409.275 584.383 394.057H618.475C623.418 394.057 627.855 390.664 628.871 385.824C631.158 374.896 632.459 363.607 632.459 352C632.459 340.391 631.158 329.102 628.871 318.174ZM464.029 400C437.518 400 416.029 378.51 416.029 352S437.518 304 464.029 304C490.539 304 512.029 325.49 512.029 352S490.539 400 464.029 400Z" />
            <path d="M285.605 199.955C287.057 192.24 288 184.336 288 176.199C288 167.932 287.066 159.896 285.568 152.066L314.609 135.299C318.902 132.818 321.055 127.604 319.492 122.9C312.242 101.064 300.703 81.211 285.781 64.381C283.775 62.123 280.924 60.967 278.033 60.967C276.172 60.967 274.297 61.445 272.613 62.416L243.016 79.506C231.037 69.211 217.275 61.17 202.057 55.846V21.754C202.057 16.811 198.664 12.373 193.824 11.357C182.897 9.068 171.607 7.77 160 7.77C148.391 7.77 137.102 9.068 126.174 11.357C121.334 12.373 117.941 16.811 117.941 21.754V55.848C102.723 61.172 88.963 69.211 76.984 79.506L47.387 62.416C45.707 61.445 43.828 60.967 41.967 60.967C39.074 60.967 36.223 62.123 34.219 64.381C19.297 81.211 7.758 101.064 0.508 122.9C-1.053 127.604 1.098 132.818 5.391 135.299L34.432 152.066C32.934 159.896 32 167.934 32 176.199C32 184.336 32.943 192.238 34.395 199.953L5.391 216.695C1.098 219.176 -1.053 224.395 0.508 229.098C7.758 250.93 19.297 270.787 34.219 287.613C36.223 289.873 39.076 291.031 41.967 291.031C43.828 291.031 45.705 290.553 47.387 289.582L76.699 272.656C88.74 283.066 102.605 291.186 117.941 296.551V330.244C117.941 335.186 121.334 339.625 126.174 340.641C137.102 342.93 148.391 344.229 160 344.229C171.607 344.229 182.897 342.93 193.824 340.641C198.664 339.625 202.057 335.186 202.057 330.244V296.553C217.393 291.187 231.258 283.066 243.301 272.656L272.613 289.582C274.293 290.553 276.172 291.031 278.033 291.031C280.924 291.031 283.775 289.873 285.781 287.613C300.703 270.787 312.242 250.93 319.492 229.098C321.055 224.395 318.902 219.176 314.609 216.695L285.605 199.955ZM160 224.199C133.49 224.199 112 202.709 112 176.199S133.49 128.199 160 128.199S208 149.689 208 176.199S186.51 224.199 160 224.199Z" />
        </Icon>
    </>
}
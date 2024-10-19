
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `trees` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/trees?s=thin trees}
 * @preview ![trees](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yOTguMzY5IDI4OEgzMjguOTk4QzMzNy45OTYgMjg4IDM0NS45OTggMjgzIDM0OS44NzMgMjc1QzM1My42MjMgMjY2Ljg3NSAzNTIuMzczIDI1Ny42MjUgMzQ2LjQ5OCAyNTAuODc1TDI2OC4zNjUgMTYwSDI5Ny4yNDJDMzA2LjM2OSAxNjAgMzE0LjYyMSAxNTQuNjI1IDMxOC4xMjEgMTQ2LjM3NUMzMjEuNzQ2IDEzOC4yNSAzMTkuOTk2IDEyOC43NSAzMTMuODcxIDEyMi4yNUwyMDMuNjA1IDQuODc1QzIwMC42MDcgMS42MjUgMTk2LjI5NSAwIDE5MS45ODIgMEMxODcuNjY4IDAgMTgzLjM1NSAxLjYyNSAxODAuMzU1IDQuODc1TDY5Ljk2NSAxMjIuMjVDNjMuOTY3IDEyOC43NSA2Mi4yMTcgMTM4LjI1IDY1Ljg0IDE0Ni4zNzVDNjkuMzQgMTU0LjYyNSA3Ny41OTIgMTYwIDg2LjcxNyAxNjBIMTE1LjU5NkwzNy40NjMgMjUwLjg3NUMzMS41ODggMjU3Ljc1IDMwLjMzOCAyNjYuODc1IDM0LjA4OCAyNzVDMzcuOTYzIDI4MyA0NS44NCAyODggNTQuOTY1IDI4OEg4NS41OTJMNS43MDkgMzc4LjVDLTAuMjkxIDM4NS4yNSAtMS42NjggMzk0LjYyNSAyLjA4NCA0MDIuNzVDNS44MzQgNDEwLjc1IDE0LjA4NCA0MTYgMjMuMDg2IDQxNkgxODQuMDAyVjUwMy45OThDMTg0LjAwMiA1MDguNDIyIDE4Ny41OCA1MTIgMTkyLjAwMiA1MTJTMjAwLjAwMiA1MDguNDIyIDIwMC4wMDIgNTAzLjk5OFY0MTZIMzYwLjg3NUMzNjkuODc1IDQxNiAzNzguMTI3IDQxMC43NSAzODEuODc3IDQwMi43NUMzODUuNjI3IDM5NC42MjUgMzg0LjM3NyAzODUuMjUgMzc4LjM3NyAzNzguNUwyOTguMzY5IDI4OFpNMzY3LjM5MSAzOTUuOTU5QzM2Ni4yNTggMzk4LjM3NSAzNjMuNjM5IDQwMCAzNjAuODc1IDQwMEgyMDAuMDAyVjM1NS4zMTJMMjUzLjY1NiAzMDEuNjQ4QzI1Ni43ODEgMjk4LjUyMyAyNTYuNzgxIDI5My40NjEgMjUzLjY1NiAyOTAuMzM2UzI0NS40NjkgMjg3LjIxMSAyNDIuMzQ0IDI5MC4zMzZMMjAwLjAwMiAzMzIuNjg2VjE2OEMyMDAuMDAyIDE2My41NzggMTk2LjQyNCAxNjAgMTkyLjAwMiAxNjBTMTg0LjAwMiAxNjMuNTc4IDE4NC4wMDIgMTY4VjI2OC42ODZMMTQxLjY1NCAyMjYuMzRDMTM4LjUyOSAyMjMuMjE1IDEzMy40NjkgMjIzLjIxNSAxMzAuMzQ0IDIyNi4zNFMxMjcuMjE5IDIzNC41MjcgMTMwLjM0NCAyMzcuNjUyTDE4NC4wMDIgMjkxLjMxMlY0MDBIMjMuMDg2QzIwLjMyMiA0MDAgMTcuNzA1IDM5OC4zNzUgMTYuNjExIDM5Ni4wNDNDMTUuNTIxIDM5My42ODQgMTUuOTE2IDM5MS4xIDE3LjcwNSAzODkuMDg4TDk3LjU4OCAyOTguNTg4TDEyMS4wNTcgMjcySDU0Ljk2NUM1Mi4wMjkgMjcyIDQ5LjczIDI3MC41ODggNDguNjE1IDI2OC4yOTVDNDcuNDcxIDI2NS44MTIgNDcuODIgMjYzLjM4MyA0OS41OTYgMjYxLjMwN0wxMjcuNzI4IDE3MC40MzJMMTUwLjQ1MyAxNDRIODYuNzE3Qzg0LjAyMyAxNDQgODEuNTUzIDE0Mi40NDMgODAuNDUxIDEzOS44NTVDNzkuNDg0IDEzNy42ODggNzkuOTk0IDEzNC45NzMgODEuNjE5IDEzMy4yMTFMMTkxLjcxNyAxNi4wMzVDMTkxLjc0MiAxNi4wMjUgMTkxLjg0IDE2IDE5MS45ODIgMTZMMTkxLjk0NSAxNS44M0wzMDIuMjI3IDEzMy4yMjNDMzAzLjk3NSAxMzUuMDc4IDMwNC40NzggMTM3LjY4MiAzMDMuMzkzIDE0MC4xMjVDMzAyLjQwOCAxNDIuNDQzIDI5OS45MzcgMTQ0IDI5Ny4yNDIgMTQ0SDIzMy41MDhMMjU2LjIzNCAxNzAuNDMyTDMzNC40MzIgMjYxLjM3OUMzMzYuMTM3IDI2My4zNCAzMzYuNDcxIDI2NS44NTkgMzM1LjQ3NyAyNjguMDI1QzMzNC4yNjkgMjcwLjUxNCAzMzEuODQ4IDI3MiAzMjguOTk4IDI3MkgyNjIuODY3TDI4Ni4zODMgMjk4LjU5OEwzNjYuNDE4IDM4OS4xMjlDMzY4LjExNyAzOTEuMDQxIDM2OC40NjcgMzkzLjYyNyAzNjcuMzkxIDM5NS45NTlaTTYzNC4yOTEgMzc4LjVMNTU0LjQwNiAyODhINTg1LjAzNUM1OTQuMDM1IDI4OCA2MDIuMDM3IDI4MyA2MDUuOTEyIDI3NUM2MDkuNjYyIDI2Ni44NzUgNjA4LjQxMiAyNTcuNjI1IDYwMi41MzcgMjUwLjg3NUw1MjQuNDAyIDE2MEg1NTMuMjgxQzU2Mi40MDYgMTYwIDU3MC42NTggMTU0LjYyNSA1NzQuMTU4IDE0Ni4zNzVDNTc3Ljc4MyAxMzguMjUgNTc2LjAzMyAxMjguNzUgNTY5LjkwOCAxMjIuMjVMNDU5LjY0MyA0Ljg3NUM0NTYuNjQzIDEuNjI1IDQ1Mi4zMyAwIDQ0OC4wMTggMEM0NDMuNzAzIDAgNDM5LjM5MSAxLjYyNSA0MzYuMzkxIDQuODc1TDM0MC43MjMgMTA1LjcxM0MzMzcuNzQgMTA4Ljg1NyAzMzcuODA3IDExMy44MDUgMzQwLjg3MSAxMTYuODY5QzM0NC4wNTMgMTIwLjA1MSAzNDkuMjMyIDExOS45ODIgMzUyLjMyOCAxMTYuNzE3TDQ0Ny43NTIgMTYuMDM1QzQ0Ny43NzcgMTYuMDI1IDQ0Ny44NzUgMTYgNDQ4LjAxOCAxNkw0NDcuOTggMTUuODNMNTU4LjI2NCAxMzMuMjIzQzU2MC4wMTQgMTM1LjA3OCA1NjAuNTE2IDEzNy42ODIgNTU5LjQzIDE0MC4xMjVDNTU4LjQ0NSAxNDIuNDQzIDU1NS45NzcgMTQ0IDU1My4yODEgMTQ0SDQ4OS41NDVMNTkwLjQ2OSAyNjEuMzc5QzU5Mi4xNzQgMjYzLjM0IDU5Mi41MDggMjY1Ljg1OSA1OTEuNTEyIDI2OC4wMjVDNTkwLjMwNyAyNzAuNTE0IDU4Ny44ODUgMjcyIDU4NS4wMzUgMjcySDUxOC45NDFMNjIyLjMzMiAzODkuMTI5QzYyNC4wODQgMzkxLjEgNjI0LjQ3OCAzOTMuNjg0IDYyMy40MyAzOTUuOTU5QzYyMi4yOTcgMzk4LjM3NSA2MTkuNjc4IDQwMCA2MTYuOTE0IDQwMEg0NTUuOTk4VjI5MS4zMTJMNTA5LjY1NiAyMzcuNjUyQzUxMi43ODEgMjM0LjUyNyA1MTIuNzgxIDIyOS40NjUgNTA5LjY1NiAyMjYuMzRTNTAxLjQ3MSAyMjMuMjE1IDQ5OC4zNDYgMjI2LjM0TDQ1NS45OTggMjY4LjY4NlYxNjhDNDU1Ljk5OCAxNjMuNTc4IDQ1Mi40MiAxNjAgNDQ3Ljk5OCAxNjBTNDM5Ljk5OCAxNjMuNTc4IDQzOS45OTggMTY4VjMzMi42ODZMMzk3LjY1NiAyOTAuMzM2QzM5NC41MzEgMjg3LjIxMSAzODkuNDY5IDI4Ny4yMTEgMzg2LjM0NCAyOTAuMzM2UzM4My4yMTkgMjk4LjUyMyAzODYuMzQ0IDMwMS42NDhMNDM5Ljk5OCAzNTUuMzEyVjUwMy45OThDNDM5Ljk5OCA1MDguNDIyIDQ0My41NzYgNTEyIDQ0Ny45OTggNTEyUzQ1NS45OTggNTA4LjQyMiA0NTUuOTk4IDUwMy45OThWNDE2SDYxNi45MTRDNjI1LjkxNiA0MTYgNjM0LjE2NiA0MTAuNzUgNjM3LjkxNiA0MDIuNzVDNjQxLjY2OCAzOTQuNjI1IDY0MC4yOTEgMzg1LjI1IDYzNC4yOTEgMzc4LjVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Trees(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M298.369 288H328.998C337.996 288 345.998 283 349.873 275C353.623 266.875 352.373 257.625 346.498 250.875L268.365 160H297.242C306.369 160 314.621 154.625 318.121 146.375C321.746 138.25 319.996 128.75 313.871 122.25L203.605 4.875C200.607 1.625 196.295 0 191.982 0C187.668 0 183.355 1.625 180.355 4.875L69.965 122.25C63.967 128.75 62.217 138.25 65.84 146.375C69.34 154.625 77.592 160 86.717 160H115.596L37.463 250.875C31.588 257.75 30.338 266.875 34.088 275C37.963 283 45.84 288 54.965 288H85.592L5.709 378.5C-0.291 385.25 -1.668 394.625 2.084 402.75C5.834 410.75 14.084 416 23.086 416H184.002V503.998C184.002 508.422 187.58 512 192.002 512S200.002 508.422 200.002 503.998V416H360.875C369.875 416 378.127 410.75 381.877 402.75C385.627 394.625 384.377 385.25 378.377 378.5L298.369 288ZM367.391 395.959C366.258 398.375 363.639 400 360.875 400H200.002V355.312L253.656 301.648C256.781 298.523 256.781 293.461 253.656 290.336S245.469 287.211 242.344 290.336L200.002 332.686V168C200.002 163.578 196.424 160 192.002 160S184.002 163.578 184.002 168V268.686L141.654 226.34C138.529 223.215 133.469 223.215 130.344 226.34S127.219 234.527 130.344 237.652L184.002 291.312V400H23.086C20.322 400 17.705 398.375 16.611 396.043C15.521 393.684 15.916 391.1 17.705 389.088L97.588 298.588L121.057 272H54.965C52.029 272 49.73 270.588 48.615 268.295C47.471 265.812 47.82 263.383 49.596 261.307L127.728 170.432L150.453 144H86.717C84.023 144 81.553 142.443 80.451 139.855C79.484 137.688 79.994 134.973 81.619 133.211L191.717 16.035C191.742 16.025 191.84 16 191.982 16L191.945 15.83L302.227 133.223C303.975 135.078 304.478 137.682 303.393 140.125C302.408 142.443 299.937 144 297.242 144H233.508L256.234 170.432L334.432 261.379C336.137 263.34 336.471 265.859 335.477 268.025C334.269 270.514 331.848 272 328.998 272H262.867L286.383 298.598L366.418 389.129C368.117 391.041 368.467 393.627 367.391 395.959ZM634.291 378.5L554.406 288H585.035C594.035 288 602.037 283 605.912 275C609.662 266.875 608.412 257.625 602.537 250.875L524.402 160H553.281C562.406 160 570.658 154.625 574.158 146.375C577.783 138.25 576.033 128.75 569.908 122.25L459.643 4.875C456.643 1.625 452.33 0 448.018 0C443.703 0 439.391 1.625 436.391 4.875L340.723 105.713C337.74 108.857 337.807 113.805 340.871 116.869C344.053 120.051 349.232 119.982 352.328 116.717L447.752 16.035C447.777 16.025 447.875 16 448.018 16L447.98 15.83L558.264 133.223C560.014 135.078 560.516 137.682 559.43 140.125C558.445 142.443 555.977 144 553.281 144H489.545L590.469 261.379C592.174 263.34 592.508 265.859 591.512 268.025C590.307 270.514 587.885 272 585.035 272H518.941L622.332 389.129C624.084 391.1 624.478 393.684 623.43 395.959C622.297 398.375 619.678 400 616.914 400H455.998V291.312L509.656 237.652C512.781 234.527 512.781 229.465 509.656 226.34S501.471 223.215 498.346 226.34L455.998 268.686V168C455.998 163.578 452.42 160 447.998 160S439.998 163.578 439.998 168V332.686L397.656 290.336C394.531 287.211 389.469 287.211 386.344 290.336S383.219 298.523 386.344 301.648L439.998 355.312V503.998C439.998 508.422 443.576 512 447.998 512S455.998 508.422 455.998 503.998V416H616.914C625.916 416 634.166 410.75 637.916 402.75C641.668 394.625 640.291 385.25 634.291 378.5Z" />
        </Icon>
    </>
}
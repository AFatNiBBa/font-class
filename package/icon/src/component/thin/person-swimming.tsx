
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `person-swimming` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/person-swimming?s=thin person-swimming}
 * @preview ![person-swimming](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik04LjU4NyA0MTUuNzAzQzM5LjgwNiA0MTMuMzgzIDY5Ljg2OCAzOTguMjE1IDk2LjAyNiAzNzEuNjY0QzEyNC45MzMgNDAwLjcxMSAxNTguMDI2IDQxNiAxOTIuMjE2IDQxNkgxOTIuNTkxQzIyNi43MTYgNDE1Ljg5MSAyNTkuNTYyIDQwMC42MDIgMjg4LjAzIDM3MS42OEMzMTYuOTM3IDQwMC43MTEgMzUwLjAzMiA0MTYgMzg0LjIyIDQxNkgzODQuNTk1QzQxOC43MiA0MTUuODkxIDQ1MS41NjYgNDAwLjYwMiA0ODAuMDM0IDM3MS42OEM1MDYuMzE4IDM5OC4wNzQgNTM2LjM0OSA0MTMuMjI3IDU2Ny4zOCA0MTUuNjQxQzU3Mi41MzYgNDE2LjI4MSA1NzUuNjMgNDEyLjY1NiA1NzUuOTc0IDQwOC4yNjZDNTc2LjMxOCA0MDMuODQ0IDU3My4wMzYgMzk5Ljk3MyA1NjguNjMgMzk5LjY0MUM1MzkuMzQ5IDM5Ny4zNTIgNTEwLjc1NSAzODEuNzgxIDQ4NS45MDkgMzU0LjYwMkM0ODQuMzc4IDM1Mi45NDEgNDgyLjI1MyAzNTIgNDgwLjAwMyAzNTJINDc5Ljk3MkM0NzcuNzIyIDM1MiA0NzUuNTk3IDM1Mi45NTcgNDc0LjA2NiAzNTQuNjMzQzQ0Ny40MDkgMzg0LjE2NCA0MTYuNDM5IDM5OS44MjggMzg0LjU2NCAzOTkuOTQxSDM4NC4yMkMzNTIuMjgyIDM5OS45NDEgMzIxLjAzIDM4NC4yNTggMjkzLjkwNSAzNTQuNjAyQzI5Mi4zNzQgMzUyLjk0MSAyOTAuMjQ5IDM1MiAyODcuOTk5IDM1MkgyODcuOTY4QzI4NS43MTggMzUyIDI4My41OTMgMzUyLjk1NyAyODIuMDYyIDM1NC42MzNDMjU1LjQwNSAzODQuMTY0IDIyNC40MzUgMzk5LjgyOCAxOTIuNTYgMzk5Ljk0MUgxOTIuMjE2QzE2MC4yNzYgMzk5Ljk0MSAxMjkuMDI2IDM4NC4yNTggMTAxLjkwMSAzNTQuNjAyQzEwMC4zNyAzNTIuOTQxIDk4LjI0NSAzNTIgOTUuOTk1IDM1Mkg5NS45NjRDOTMuNzE0IDM1MiA5MS41ODkgMzUyLjk1NyA5MC4wNTggMzU0LjYzM0M2NS40IDM4MS45MjIgMzYuODA2IDM5Ny41MDggNy40IDM5OS42NzJDMi45OTMgNDAwLjAwNCAtMC4zMTkgNDAzLjg1OSAwLjAyNSA0MDguMjgxQzAuMzY4IDQxMi42OTEgMy4zNjggNDE1LjgyOCA4LjU4NyA0MTUuNzAzWk05NS45OTkgMjI0QzEzMS4zNDUgMjI0IDE1OS45OTkgMTk1LjM0NiAxNTkuOTk5IDE2MEMxNTkuOTk5IDEyNC42NTIgMTMxLjM0NSA5NiA5NS45OTkgOTZTMzEuOTk5IDEyNC42NTIgMzEuOTk5IDE2MEMzMS45OTkgMTk1LjM0NiA2MC42NTMgMjI0IDk1Ljk5OSAyMjRaTTk1Ljk5OSAxMTJDMTIyLjQ2NiAxMTIgMTQzLjk5OSAxMzMuNTMzIDE0My45OTkgMTYwUzEyMi40NjYgMjA4IDk1Ljk5OSAyMDhTNDcuOTk5IDE4Ni40NjcgNDcuOTk5IDE2MFM2OS41MzIgMTEyIDk1Ljk5OSAxMTJaTTE0NC40MzcgMzI3Ljk4NEMxNDQuNjI0IDMyOCAxNDQuODEyIDMyOCAxNDQuOTk5IDMyOEMxNDkuMTU1IDMyOCAxNTIuNjg3IDMyNC43ODEgMTUyLjk2OCAzMjAuNTYyQzE1NS40MzcgMjg1LjYwOSAxNjcuNTkzIDI1MS4xNzIgMTg2LjM3NCAyMjYuMDMxTDIwOC4yNDkgMTk2Ljc1QzIyOC4yNDkgMTY5LjIzNCAyNTUuOTM3IDE0Ni44NTkgMjg4LjM0MyAxMzJDMzMyLjQzNyAxMTEuODEyIDM4Mi45OTkgMTA2Ljc2NiA0MzAuNzggMTE3LjY1Nkw0NjkuMzc0IDEyNi41QzQ3NS42MjQgMTI3LjkyMiA0ODAuOTM3IDEzMS43MDMgNDg0LjMxMiAxMzcuMTQxQzQ4Ny43MTggMTQyLjU2MiA0ODguODEyIDE0OSA0ODcuNDA1IDE1NS4yMzRDNDg1LjkzNyAxNjEuNTE2IDQ4Mi4xNTUgMTY2Ljg0NCA0NzYuNjg3IDE3MC4yNjZDNDcxLjIxOCAxNzMuNjU2IDQ2NC44MTIgMTc0Ljc1IDQ1OC42MjQgMTczLjI4MUw0MjAuMDMgMTY0LjQzOEMzODAuNDM3IDE1NS4zNzUgMzQ4LjAzIDE3MC4zNDQgMzE2LjY4NyAxODQuNzE5QzMxNC4yNDkgMTg1LjgyOCAzMTIuNDk5IDE4OC4xMjUgMzEyLjA2MiAxOTAuNzgxQzMxMS4xODcgMTk2LjM5MSAzMTAuOTk5IDE5Ny41NjMgNDUwLjU5MyAzMjUuODkxQzQ1My44NDMgMzI4Ljg1OSA0NTguOTM3IDMyOC42NTYgNDYxLjg3NCAzMjUuNDIyQzQ2NC44NzQgMzIyLjE1NiA0NjQuNjU1IDMxNy4wOTQgNDYxLjQwNSAzMTQuMTA5QzQxOS4zMTIgMjc1LjQyMiAzNTQuNzggMjE1LjU3OCAzMzMuNDY4IDE5NC43MDNDMzYzLjk2OCAxODEuMTI1IDM4Ny43NDkgMTczLjQ4NCA0MTYuNDY4IDE4MC4wMzFMNDU1LjAzIDE4OC44NzVDNDY1LjM0MyAxOTEuMjUgNDc2LjA2MiAxODkuNSA0ODUuMTU1IDE4My44MjhDNDk0LjI0OSAxNzguMTU2IDUwMC41NjIgMTY5LjI2NiA1MDIuOTk5IDE1OC44MTNDNTA3LjkwNSAxMzcuMzEzIDQ5NC40MzcgMTE1LjgxMyA0NzIuOTM3IDExMC45MDZMNDM0LjM0MyAxMDIuMDYzQzM4My4xNTUgOTAuMzc1IDMyOC44NzQgOTUuODEzIDI4MS42NTUgMTE3LjQ2OUMyNDYuNzggMTMzLjQ1MyAyMTYuOTA1IDE1Ny42MDkgMTk1LjM3NCAxODcuMjY2TDE3My41NjIgMjE2LjQ2OUMxNTIuOTk5IDI0My45ODQgMTM5LjY4NyAyODEuNTE2IDEzNy4wMyAzMTkuNDM4QzEzNi43MTggMzIzLjg0NCAxNDAuMDMgMzI3LjY3MiAxNDQuNDM3IDMyNy45ODRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function PersonSwimming(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M8.587 415.703C39.806 413.383 69.868 398.215 96.026 371.664C124.933 400.711 158.026 416 192.216 416H192.591C226.716 415.891 259.562 400.602 288.03 371.68C316.937 400.711 350.032 416 384.22 416H384.595C418.72 415.891 451.566 400.602 480.034 371.68C506.318 398.074 536.349 413.227 567.38 415.641C572.536 416.281 575.63 412.656 575.974 408.266C576.318 403.844 573.036 399.973 568.63 399.641C539.349 397.352 510.755 381.781 485.909 354.602C484.378 352.941 482.253 352 480.003 352H479.972C477.722 352 475.597 352.957 474.066 354.633C447.409 384.164 416.439 399.828 384.564 399.941H384.22C352.282 399.941 321.03 384.258 293.905 354.602C292.374 352.941 290.249 352 287.999 352H287.968C285.718 352 283.593 352.957 282.062 354.633C255.405 384.164 224.435 399.828 192.56 399.941H192.216C160.276 399.941 129.026 384.258 101.901 354.602C100.37 352.941 98.245 352 95.995 352H95.964C93.714 352 91.589 352.957 90.058 354.633C65.4 381.922 36.806 397.508 7.4 399.672C2.993 400.004 -0.319 403.859 0.025 408.281C0.368 412.691 3.368 415.828 8.587 415.703ZM95.999 224C131.345 224 159.999 195.346 159.999 160C159.999 124.652 131.345 96 95.999 96S31.999 124.652 31.999 160C31.999 195.346 60.653 224 95.999 224ZM95.999 112C122.466 112 143.999 133.533 143.999 160S122.466 208 95.999 208S47.999 186.467 47.999 160S69.532 112 95.999 112ZM144.437 327.984C144.624 328 144.812 328 144.999 328C149.155 328 152.687 324.781 152.968 320.562C155.437 285.609 167.593 251.172 186.374 226.031L208.249 196.75C228.249 169.234 255.937 146.859 288.343 132C332.437 111.812 382.999 106.766 430.78 117.656L469.374 126.5C475.624 127.922 480.937 131.703 484.312 137.141C487.718 142.562 488.812 149 487.405 155.234C485.937 161.516 482.155 166.844 476.687 170.266C471.218 173.656 464.812 174.75 458.624 173.281L420.03 164.438C380.437 155.375 348.03 170.344 316.687 184.719C314.249 185.828 312.499 188.125 312.062 190.781C311.187 196.391 310.999 197.563 450.593 325.891C453.843 328.859 458.937 328.656 461.874 325.422C464.874 322.156 464.655 317.094 461.405 314.109C419.312 275.422 354.78 215.578 333.468 194.703C363.968 181.125 387.749 173.484 416.468 180.031L455.03 188.875C465.343 191.25 476.062 189.5 485.155 183.828C494.249 178.156 500.562 169.266 502.999 158.813C507.905 137.313 494.437 115.813 472.937 110.906L434.343 102.063C383.155 90.375 328.874 95.813 281.655 117.469C246.78 133.453 216.905 157.609 195.374 187.266L173.562 216.469C152.999 243.984 139.687 281.516 137.03 319.438C136.718 323.844 140.03 327.672 144.437 327.984Z" />
        </Icon>
    </>
}
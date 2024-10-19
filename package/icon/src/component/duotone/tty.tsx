
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `tty` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tty?s=duotone tty}
 * @preview ![tty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE4OCAzNTJDMTgxLjM3NSAzNTIgMTc2IDM1Ny4zNzUgMTc2IDM2NFY0MDRDMTc2IDQxMC42MjUgMTgxLjM3NSA0MTYgMTg4IDQxNkgyMjhDMjM0LjYyNSA0MTYgMjQwIDQxMC42MjUgMjQwIDQwNFYzNjRDMjQwIDM1Ny4zNzUgMjM0LjYyNSAzNTIgMjI4IDM1MkgxODhaTTIzNiAzMjBIMjc2QzI4Mi42MjUgMzIwIDI4OCAzMTQuNjI1IDI4OCAzMDhWMjY4QzI4OCAyNjEuMzc1IDI4Mi42MjUgMjU2IDI3NiAyNTZIMjM2QzIyOS4zNzUgMjU2IDIyNCAyNjEuMzc1IDIyNCAyNjhWMzA4QzIyNCAzMTQuNjI1IDIyOS4zNzUgMzIwIDIzNiAzMjBaTTMzMiAzMjBIMzcyQzM3OC42MjUgMzIwIDM4NCAzMTQuNjI1IDM4NCAzMDhWMjY4QzM4NCAyNjEuMzc1IDM3OC42MjUgMjU2IDM3MiAyNTZIMzMyQzMyNS4zNzUgMjU2IDMyMCAyNjEuMzc1IDMyMCAyNjhWMzA4QzMyMCAzMTQuNjI1IDMyNS4zNzUgMzIwIDMzMiAzMjBaTTE0MCAzMjBIMTgwQzE4Ni42MjUgMzIwIDE5MiAzMTQuNjI1IDE5MiAzMDhWMjY4QzE5MiAyNjEuMzc1IDE4Ni42MjUgMjU2IDE4MCAyNTZIMTQwQzEzMy4zNzUgMjU2IDEyOCAyNjEuMzc1IDEyOCAyNjhWMzA4QzEyOCAzMTQuNjI1IDEzMy4zNzUgMzIwIDE0MCAzMjBaTTM2OCAzNjRWNDA0QzM2OCA0MTAuNjI1IDM3My4zNzUgNDE2IDM4MCA0MTZINDIwQzQyNi42MjUgNDE2IDQzMiA0MTAuNjI1IDQzMiA0MDRWMzY0QzQzMiAzNTcuMzc1IDQyNi42MjUgMzUyIDQyMCAzNTJIMzgwQzM3My4zNzUgMzUyIDM2OCAzNTcuMzc1IDM2OCAzNjRaTTI4NCAzNTJDMjc3LjM3NSAzNTIgMjcyIDM1Ny4zNzUgMjcyIDM2NFY0MDRDMjcyIDQxMC42MjUgMjc3LjM3NSA0MTYgMjg0IDQxNkgzMjRDMzMwLjYyNSA0MTYgMzM2IDQxMC42MjUgMzM2IDQwNFYzNjRDMzM2IDM1Ny4zNzUgMzMwLjYyNSAzNTIgMzI0IDM1MkgyODRaTTQ2OCA0NDhINDI4QzQyMS4zNzUgNDQ4IDQxNiA0NTMuMzc1IDQxNiA0NjBWNTAwQzQxNiA1MDYuNjI1IDQyMS4zNzUgNTEyIDQyOCA1MTJINDY4QzQ3NC42MjUgNTEyIDQ4MCA1MDYuNjI1IDQ4MCA1MDBWNDYwQzQ4MCA0NTMuMzc1IDQ3NC42MjUgNDQ4IDQ2OCA0NDhaTTQ2OCAyNTZINDI4QzQyMS4zNzUgMjU2IDQxNiAyNjEuMzc1IDQxNiAyNjhWMzA4QzQxNiAzMTQuNjI1IDQyMS4zNzUgMzIwIDQyOCAzMjBINDY4QzQ3NC42MjUgMzIwIDQ4MCAzMTQuNjI1IDQ4MCAzMDhWMjY4QzQ4MCAyNjEuMzc1IDQ3NC42MjUgMjU2IDQ2OCAyNTZaTTM3MiA0NDhIMTQwQzEzMy4zNzUgNDQ4IDEyOCA0NTMuMzc1IDEyOCA0NjBWNTAwQzEyOCA1MDYuNjI1IDEzMy4zNzUgNTEyIDE0MCA1MTJIMzcyQzM3OC42MjUgNTEyIDM4NCA1MDYuNjI1IDM4NCA1MDBWNDYwQzM4NCA0NTMuMzc1IDM3OC42MjUgNDQ4IDM3MiA0NDhaTTQ0IDMyMEg4NEM5MC42MjUgMzIwIDk2IDMxNC42MjUgOTYgMzA4VjI2OEM5NiAyNjEuMzc1IDkwLjYyNSAyNTYgODQgMjU2SDQ0QzM3LjM3NSAyNTYgMzIgMjYxLjM3NSAzMiAyNjhWMzA4QzMyIDMxNC42MjUgMzcuMzc1IDMyMCA0NCAzMjBaTTkyIDM1MkM4NS4zNzUgMzUyIDgwIDM1Ny4zNzUgODAgMzY0VjQwNEM4MCA0MTAuNjI1IDg1LjM3NSA0MTYgOTIgNDE2SDEzMkMxMzguNjI1IDQxNiAxNDQgNDEwLjYyNSAxNDQgNDA0VjM2NEMxNDQgMzU3LjM3NSAxMzguNjI1IDM1MiAxMzIgMzUySDkyWk04NCA0NDhINDRDMzcuMzc1IDQ0OCAzMiA0NTMuMzc1IDMyIDQ2MFY1MDBDMzIgNTA2LjYyNSAzNy4zNzUgNTEyIDQ0IDUxMkg4NEM5MC42MjUgNTEyIDk2IDUwNi42MjUgOTYgNTAwVjQ2MEM5NiA0NTMuMzc1IDkwLjYyNSA0NDggODQgNDQ4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik01MDQuOTEgMTAyLjkzOEMzNjcuNjY0IC0zNC4zMSAxNDQuMzQyIC0zNC4zMTggNy4wOCAxMDIuOTQ2Qy0wLjg5NSAxMTAuOTE5IC0yLjI4OSAxMjMuMTYxIDMuNjk1IDEzMi42ODRMNDUuODYxIDIwMC4xNTFDNTIuMDAyIDIwOS45OTUgNjQuMzUzIDIxNC4wNDkgNzUuMjM0IDIwOS43OTlMMTU5LjYxOSAxNzYuMDQ5QzE2OS41MzMgMTcyLjA1MyAxNzUuNjI3IDE2MS45NjIgMTc0LjU1NiAxNTEuMzM1TDE2OS4yNiA5OC4wNTdDMjI1LjQxMiA3OC44ODUgMjg2LjY2NCA3OC44OTUgMzQyLjg0IDk4LjA3NUwzMzcuNTI3IDE1MS4zMTlDMzM2LjM4OSAxNjEuOTExIDM0Mi41MzUgMTcyLjEwNCAzNTIuNDk4IDE3Ni4wNDlMNDM2LjgyNCAyMDkuNzc0QzQ0Ny42NTQgMjE0LjA3NyA0NjAuMDIzIDIwOS45NTIgNDY2LjEyOSAyMDAuMTc2TDUwOC4zMTIgMTMyLjY5MkM1MTQuMjg5IDEyMy4xNjEgNTEyLjg5NCAxMTAuOTE5IDUwNC45MSAxMDIuOTM4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Tty(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M188 352C181.375 352 176 357.375 176 364V404C176 410.625 181.375 416 188 416H228C234.625 416 240 410.625 240 404V364C240 357.375 234.625 352 228 352H188ZM236 320H276C282.625 320 288 314.625 288 308V268C288 261.375 282.625 256 276 256H236C229.375 256 224 261.375 224 268V308C224 314.625 229.375 320 236 320ZM332 320H372C378.625 320 384 314.625 384 308V268C384 261.375 378.625 256 372 256H332C325.375 256 320 261.375 320 268V308C320 314.625 325.375 320 332 320ZM140 320H180C186.625 320 192 314.625 192 308V268C192 261.375 186.625 256 180 256H140C133.375 256 128 261.375 128 268V308C128 314.625 133.375 320 140 320ZM368 364V404C368 410.625 373.375 416 380 416H420C426.625 416 432 410.625 432 404V364C432 357.375 426.625 352 420 352H380C373.375 352 368 357.375 368 364ZM284 352C277.375 352 272 357.375 272 364V404C272 410.625 277.375 416 284 416H324C330.625 416 336 410.625 336 404V364C336 357.375 330.625 352 324 352H284ZM468 448H428C421.375 448 416 453.375 416 460V500C416 506.625 421.375 512 428 512H468C474.625 512 480 506.625 480 500V460C480 453.375 474.625 448 468 448ZM468 256H428C421.375 256 416 261.375 416 268V308C416 314.625 421.375 320 428 320H468C474.625 320 480 314.625 480 308V268C480 261.375 474.625 256 468 256ZM372 448H140C133.375 448 128 453.375 128 460V500C128 506.625 133.375 512 140 512H372C378.625 512 384 506.625 384 500V460C384 453.375 378.625 448 372 448ZM44 320H84C90.625 320 96 314.625 96 308V268C96 261.375 90.625 256 84 256H44C37.375 256 32 261.375 32 268V308C32 314.625 37.375 320 44 320ZM92 352C85.375 352 80 357.375 80 364V404C80 410.625 85.375 416 92 416H132C138.625 416 144 410.625 144 404V364C144 357.375 138.625 352 132 352H92ZM84 448H44C37.375 448 32 453.375 32 460V500C32 506.625 37.375 512 44 512H84C90.625 512 96 506.625 96 500V460C96 453.375 90.625 448 84 448Z" />
            <path d="M504.91 102.938C367.664 -34.31 144.342 -34.318 7.08 102.946C-0.895 110.919 -2.289 123.161 3.695 132.684L45.861 200.151C52.002 209.995 64.353 214.049 75.234 209.799L159.619 176.049C169.533 172.053 175.627 161.962 174.556 151.335L169.26 98.057C225.412 78.885 286.664 78.895 342.84 98.075L337.527 151.319C336.389 161.911 342.535 172.104 352.498 176.049L436.824 209.774C447.654 214.077 460.023 209.952 466.129 200.176L508.312 132.692C514.289 123.161 512.894 110.919 504.91 102.938Z" />
        </Icon>
    </>
}
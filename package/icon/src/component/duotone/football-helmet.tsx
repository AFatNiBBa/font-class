
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `football-helmet` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/football-helmet?s=duotone football-helmet}
 * @preview ![football-helmet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ5Ni40NTMgMzIwSDM1NC43MzRMMzQwLjQ4NCAyNDQuMDMxTDMwOC43MTEgMjQ4LjE2OEwzMjIuMTcyIDMyMEgyNzRDMjc0IDMyMCAyOTIuNzE5IDM2Ni43OTcgMjg2LjgxMiAzNTJIMzI4LjE3MkwzMzguMDQ3IDQwNC42NTZDMzQ3Ljk4NCA0NTcuNTk0IDM5NC4yOTcgNDk2IDQ0OC4xNDEgNDk2SDQ5Ni40NTNDNTA1LjI5NyA0OTYgNTEyLjQ1MyA0ODguODQ0IDUxMi40NTMgNDgwVjMzNkM1MTIuNDUzIDMyNy4xNTYgNTA1LjI5NyAzMjAgNDk2LjQ1MyAzMjBaTTQ4MC40NTMgNDY0SDQ0OC4xNDFDNDE1Ljg2MyA0NjQgMzg3LjYwNSA0NDQuNTU1IDM3NS4wNyA0MTZINDgwLjQ1M1Y0NjRaTTQ4MC40NTMgMzg0SDM2Ni43MjdMMzYwLjczNCAzNTJINDgwLjQ1M1YzODRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI1NiAxNkMxMjMuNDUzIDE2IDE2IDEyMy40NTMgMTYgMjU2QzE2IDMxMi4wOSAzNS40MDYgMzYzLjUyNyA2Ny42OCA0MDQuMzYzQzczLjYyMSA0MTEuODgzIDgyLjk4NCA0MTUuOTQ1IDkyLjU3IDQxNS45NDVIMTE5Ljk2MUwyMDUuNzExIDQ2MC45NDVDMjMwLjgzNiA0NzMuNTcgMjYxLjMzNiA0NjguNjk1IDI4MS4zMzYgNDQ4LjY5NUMzMTcuNTUxIDQxMi40OCAyOTIuMjY2IDM2Ni43OTcgMjg2LjM1OSAzNTJMMjYzLjIxMSAyOTQuMTk1QzI1NS40NjEgMjc0LjgyIDI2OC4yMTEgMjUzLjMyIDI4OC44MzYgMjUwLjY5NUw0NzcuMDg2IDIyNi4xOTVDNDg1LjYwOSAyMjUuMDA4IDQ5MS43NjIgMjE3LjE4IDQ5MC45MjYgMjA4LjgyQzQ1OS40MjIgNjEuNzAzIDMzMi41NDcgMTYgMjU2IDE2Wk0xNzUuOTYxIDM1OS45NDVDMTYyLjcxMSAzNTkuOTQ1IDE1MS45NjEgMzQ5LjE5NSAxNTEuOTYxIDMzNS45NDVTMTYyLjcxMSAzMTEuOTQ1IDE3NS45NjEgMzExLjk0NVMxOTkuOTYxIDMyMi42OTUgMTk5Ljk2MSAzMzUuOTQ1UzE4OS4yMTEgMzU5Ljk0NSAxNzUuOTYxIDM1OS45NDVaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FootballHelmet(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M496.453 320H354.734L340.484 244.031L308.711 248.168L322.172 320H274C274 320 292.719 366.797 286.812 352H328.172L338.047 404.656C347.984 457.594 394.297 496 448.141 496H496.453C505.297 496 512.453 488.844 512.453 480V336C512.453 327.156 505.297 320 496.453 320ZM480.453 464H448.141C415.863 464 387.605 444.555 375.07 416H480.453V464ZM480.453 384H366.727L360.734 352H480.453V384Z" />
            <path d="M256 16C123.453 16 16 123.453 16 256C16 312.09 35.406 363.527 67.68 404.363C73.621 411.883 82.984 415.945 92.57 415.945H119.961L205.711 460.945C230.836 473.57 261.336 468.695 281.336 448.695C317.551 412.48 292.266 366.797 286.359 352L263.211 294.195C255.461 274.82 268.211 253.32 288.836 250.695L477.086 226.195C485.609 225.008 491.762 217.18 490.926 208.82C459.422 61.703 332.547 16 256 16ZM175.961 359.945C162.711 359.945 151.961 349.195 151.961 335.945S162.711 311.945 175.961 311.945S199.961 322.695 199.961 335.945S189.211 359.945 175.961 359.945Z" />
        </Icon>
    </>
}
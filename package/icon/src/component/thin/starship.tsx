
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `starship` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/starship?s=thin starship}
 * @preview ![starship](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggNjRDMzQxLjk2MSA2NCAyNTYgMTQ5Ljk2MSAyNTYgMjU2UzM0MS45NjEgNDQ4IDQ0OCA0NDhTNjQwIDM2Mi4wMzkgNjQwIDI1NlM1NTQuMDM5IDY0IDQ0OCA2NFpNNDQ4IDQzMkMzNTAuOTUzIDQzMiAyNzIgMzUzLjA0NyAyNzIgMjU2UzM1MC45NTMgODAgNDQ4IDgwUzYyNCAxNTguOTUzIDYyNCAyNTZTNTQ1LjA0NyA0MzIgNDQ4IDQzMlpNNDQ4IDE3NkM0MDMuODE4IDE3NiAzNjggMjExLjgxNiAzNjggMjU2UzQwMy44MTggMzM2IDQ0OCAzMzZDNDkyLjE4NCAzMzYgNTI4IDMwMC4xODQgNTI4IDI1NlM0OTIuMTg0IDE3NiA0NDggMTc2Wk00NDggMzIwQzQxMi43MTEgMzIwIDM4NCAyOTEuMjg5IDM4NCAyNTZTNDEyLjcxMSAxOTIgNDQ4IDE5MlM1MTIgMjIwLjcxMSA1MTIgMjU2UzQ4My4yODkgMzIwIDQ0OCAzMjBaTTQ0OCAyMjRDNDMwLjMyOCAyMjQgNDE2IDIzOC4zMjYgNDE2IDI1NlM0MzAuMzI4IDI4OCA0NDggMjg4QzQ2NS42NzQgMjg4IDQ4MCAyNzMuNjc0IDQ4MCAyNTZTNDY1LjY3NCAyMjQgNDQ4IDIyNFpNNDQ4IDI3MkM0MzkuMTc4IDI3MiA0MzIgMjY0LjgyMiA0MzIgMjU2UzQzOS4xNzggMjQwIDQ0OCAyNDBTNDY0IDI0Ny4xNzggNDY0IDI1NlM0NTYuODIyIDI3MiA0NDggMjcyWk0yNDAgMTI4QzI0MCAxMTAuMzc1IDIyNS42MjUgOTYgMjA4IDk2SDI0QzEwLjc1IDk2IDAgMTA2Ljc1IDAgMTIwVjEzNkMwIDE0OS4yNSAxMC43NSAxNjAgMjQgMTYwSDExNi42ODhMMTYzLjU2MyAyMDYuODc1TDEyOS45OTkgMjA5LjkwNkMxMDYuMDYyIDIxMi4xODggODggMjMyIDg4IDI1NlMxMDYuMDYyIDI5OS44MTIgMTMwLjAzMSAzMDIuMDk0TDE2My41NjQgMzA1LjEyM0wxMTYuNjg4IDM1MkgyNEMxMC43NSAzNTIgMCAzNjIuNzUgMCAzNzZWMzkyQzAgNDA1LjI1IDEwLjc1IDQxNiAyNCA0MTZIMjA4QzIyNS42MjUgNDE2IDI0MCA0MDEuNjI1IDI0MCAzODRTMjI1LjYyNSAzNTIgMjA4IDM1MkgxMzkuMzEyTDE4NC4zMTQgMzA2Ljk5OEwyMjguMjgxIDMxMC45NjlDMjI4LjUzMSAzMTEgMjI4Ljc4MSAzMTEgMjI5IDMxMUMyMzMuMDk0IDMxMSAyMzYuNTk0IDMwNy44NzUgMjM2Ljk2OSAzMDMuNzE5QzIzNy4zNzUgMjk5LjMxMiAyMzQuMTI1IDI5NS40MzcgMjI5LjcxOSAyOTUuMDMxTDEzMS41IDI4Ni4xNTZDMTE1LjgxMiAyODQuNjU2IDEwNCAyNzEuNjg4IDEwNCAyNTZTMTE1LjgxMiAyMjcuMzQ0IDEzMS40NjkgMjI1Ljg0NEwyMjkuNzE5IDIxNi45NjlDMjM0LjEyNSAyMTYuNTYyIDIzNy4zNzUgMjEyLjY4NyAyMzYuOTY5IDIwOC4yODFDMjM2LjU2MiAyMDMuOTA2IDIzMy4xNTYgMjAwLjIxOSAyMjguMjgxIDIwMS4wMzFMMTg0LjMxNCAyMDUuMDAyTDEzOS4zMTIgMTYwSDIwOEMyMjUuNjI1IDE2MCAyNDAgMTQ1LjYyNSAyNDAgMTI4Wk0yMDggMzY4QzIxNi44MjIgMzY4IDIyNCAzNzUuMTc4IDIyNCAzODRTMjE2LjgyMiA0MDAgMjA4IDQwMEgyNEMxOS41OSA0MDAgMTYgMzk2LjQxMiAxNiAzOTJWMzc2QzE2IDM3MS41ODggMTkuNTkgMzY4IDI0IDM2OEgyMDhaTTI0IDE0NEMxOS41OSAxNDQgMTYgMTQwLjQxMiAxNiAxMzZWMTIwQzE2IDExNS41ODggMTkuNTkgMTEyIDI0IDExMkgyMDhDMjE2LjgyMiAxMTIgMjI0IDExOS4xNzggMjI0IDEyOFMyMTYuODIyIDE0NCAyMDggMTQ0SDI0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Starship(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M448 64C341.961 64 256 149.961 256 256S341.961 448 448 448S640 362.039 640 256S554.039 64 448 64ZM448 432C350.953 432 272 353.047 272 256S350.953 80 448 80S624 158.953 624 256S545.047 432 448 432ZM448 176C403.818 176 368 211.816 368 256S403.818 336 448 336C492.184 336 528 300.184 528 256S492.184 176 448 176ZM448 320C412.711 320 384 291.289 384 256S412.711 192 448 192S512 220.711 512 256S483.289 320 448 320ZM448 224C430.328 224 416 238.326 416 256S430.328 288 448 288C465.674 288 480 273.674 480 256S465.674 224 448 224ZM448 272C439.178 272 432 264.822 432 256S439.178 240 448 240S464 247.178 464 256S456.822 272 448 272ZM240 128C240 110.375 225.625 96 208 96H24C10.75 96 0 106.75 0 120V136C0 149.25 10.75 160 24 160H116.688L163.563 206.875L129.999 209.906C106.062 212.188 88 232 88 256S106.062 299.812 130.031 302.094L163.564 305.123L116.688 352H24C10.75 352 0 362.75 0 376V392C0 405.25 10.75 416 24 416H208C225.625 416 240 401.625 240 384S225.625 352 208 352H139.312L184.314 306.998L228.281 310.969C228.531 311 228.781 311 229 311C233.094 311 236.594 307.875 236.969 303.719C237.375 299.312 234.125 295.437 229.719 295.031L131.5 286.156C115.812 284.656 104 271.688 104 256S115.812 227.344 131.469 225.844L229.719 216.969C234.125 216.562 237.375 212.687 236.969 208.281C236.562 203.906 233.156 200.219 228.281 201.031L184.314 205.002L139.312 160H208C225.625 160 240 145.625 240 128ZM208 368C216.822 368 224 375.178 224 384S216.822 400 208 400H24C19.59 400 16 396.412 16 392V376C16 371.588 19.59 368 24 368H208ZM24 144C19.59 144 16 140.412 16 136V120C16 115.588 19.59 112 24 112H208C216.822 112 224 119.178 224 128S216.822 144 208 144H24Z" />
        </Icon>
    </>
}
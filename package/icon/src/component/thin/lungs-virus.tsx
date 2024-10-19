
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `lungs-virus` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/lungs-virus?s=thin lungs-virus}
 * @preview ![lungs-virus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzMuMTQzIDM4Ny44NzFMNDI0LjU2NCAzNzkuMjkzQzQxNy41NTEgMzcyLjI4MSA0MjAuMTM5IDM2NC4xOCA0MjEuMSAzNjEuODU5QzQyMi4wNTkgMzU5LjUzOSA0MjUuOTYxIDM1MS45ODQgNDM1Ljg3OSAzNTEuOTg0SDQ0OEM0NjUuNjQ1IDM1MS45ODQgNDgwIDMzNy42MjUgNDgwIDMxOS45ODRTNDY1LjY0NSAyODcuOTg0IDQ0OCAyODcuOTg0SDQzNS44NzlDNDI1Ljk2MSAyODcuOTg0IDQyMi4wNTkgMjgwLjQzIDQyMS4wOTggMjc4LjEwOUM0MjAuMTM5IDI3NS43ODkgNDE3LjU1MyAyNjcuNjkxIDQyNC41NjYgMjYwLjY3Nkw0MzMuMTQzIDI1Mi4wOThDNDQ1LjYxNyAyMzkuNjI1IDQ0NS42MTkgMjE5LjMyOCA0MzMuMTQzIDIwNi44NTJDNDI3LjA5OCAyMDAuODA1IDQxOS4wNjIgMTk3LjQ3NyA0MTAuNTE2IDE5Ny40NzdDNDAxLjk3MSAxOTcuNDc3IDM5My45MzQgMjAwLjgwNSAzODcuODkxIDIwNi44NTJMMzc5LjMxMiAyMTUuNDNDMzc1LjM4NyAyMTkuMzUyIDM3MS4xMjEgMjIwLjE4IDM2OC4yMyAyMjAuMThDMzYwLjI1NCAyMjAuMTggMzUyIDIxNC4xNjQgMzUyIDIwNC4xMTNWMTkxLjk5MkMzNTIgMTc0LjM0NCAzMzcuNjQ1IDE1OS45OTIgMzIwIDE1OS45OTJTMjg4IDE3NC4zNDQgMjg4IDE5MS45OTJWMjA0LjExM0MyODggMjE0LjE2NCAyNzkuNzQ4IDIyMC4xOCAyNzEuNzcgMjIwLjE4QzI2OC44ODEgMjIwLjE4IDI2NC42MTMgMjE5LjM1MiAyNjAuNjg4IDIxNS40M0wyNTIuMTExIDIwNi44NTJDMjQ2LjA2NiAyMDAuODA1IDIzOC4wMzEgMTk3LjQ3NyAyMjkuNDg0IDE5Ny40NzdDMjIwLjkzOSAxOTcuNDc3IDIxMi45MDIgMjAwLjgwNSAyMDYuODU5IDIwNi44NTJDMTk0LjM4MyAyMTkuMzI4IDE5NC4zODMgMjM5LjYyNSAyMDYuODU5IDI1Mi4wOThMMjE1LjQzNCAyNjAuNjc2QzIyMi40NDkgMjY3LjY5MSAyMTkuODYzIDI3NS43ODkgMjE4LjkwMiAyNzguMTA5QzIxNy45NDMgMjgwLjQzIDIxNC4wNDEgMjg3Ljk4NCAyMDQuMTIxIDI4Ny45ODRIMTkyQzE3NC4zNTUgMjg3Ljk4NCAxNjAgMzAyLjM0NCAxNjAgMzE5Ljk4NFMxNzQuMzU1IDM1MS45ODQgMTkyIDM1MS45ODRIMjA0LjEyMUMyMTQuMDQxIDM1MS45ODQgMjE3Ljk0MyAzNTkuNTM5IDIxOC45MDIgMzYxLjg1OVMyMjIuNDQ5IDM3Mi4yODEgMjE1LjQzNCAzNzkuMjk3TDIwNi44NTkgMzg3Ljg2N0MyMDAuODE0IDM5My45MTQgMTk3LjQ4NCA0MDEuOTQ1IDE5Ny40ODQgNDEwLjQ5MlMyMDAuODE0IDQyNy4wNzggMjA2Ljg1OSA0MzMuMTE3QzIxMi45MDQgNDM5LjE2NCAyMjAuOTM5IDQ0Mi40OTIgMjI5LjQ4NCA0NDIuNDkyQzIzOC4wMzEgNDQyLjQ5MiAyNDYuMDY2IDQzOS4xNjQgMjUyLjExMSA0MzMuMTE3TDI2MC42ODYgNDI0LjU0N0MyNjQuNjEzIDQyMC42MTcgMjY4Ljg4MSA0MTkuNzk3IDI3MS43NjggNDE5Ljc5N0MyNzkuNzQ4IDQxOS43OTcgMjg4IDQyNS44MDUgMjg4IDQzNS44NTlWNDQ3Ljk3N0MyODggNDY1LjYxNyAzMDIuMzU1IDQ3OS45NzcgMzIwIDQ3OS45NzdTMzUyIDQ2NS42MTcgMzUyIDQ0Ny45NzdWNDM1Ljg1OUMzNTIgNDI1LjgwNSAzNjAuMjU0IDQxOS43OTcgMzY4LjIzMiA0MTkuNzk3QzM3MS4xMjEgNDE5Ljc5NyAzNzUuMzg3IDQyMC42MTcgMzc5LjMxMiA0MjQuNTQ3TDM4Ny44OTEgNDMzLjEyMUMzOTMuOTM0IDQzOS4xNjQgNDAxLjk3MSA0NDIuNDkyIDQxMC41MTYgNDQyLjQ5MkM0MTkuMDYyIDQ0Mi40OTIgNDI3LjA5OCA0MzkuMTY0IDQzMy4xNDMgNDMzLjExN0M0MzkuMTg3IDQyNy4wNzggNDQyLjUxNiA0MTkuMDM5IDQ0Mi41MTYgNDEwLjQ5MlM0MzkuMTg4IDM5My45MTQgNDMzLjE0MyAzODcuODcxWk00MjEuODI4IDQyMS44MDVDNDE4LjcwMyA0MjQuOTMgNDE0LjYwOSA0MjYuNDkyIDQxMC41MTYgNDI2LjQ5MlM0MDIuMzI4IDQyNC45MyAzOTkuMjAzIDQyMS44MDVMMzkwLjYyNyA0MTMuMjM0QzM4NC4xMDkgNDA2LjcxMSAzNzYuMDk0IDQwMy43OTcgMzY4LjIzMiA0MDMuNzk3QzM1MS43ODEgNDAzLjc5NyAzMzYgNDE2LjU3IDMzNiA0MzUuODU5VjQ0Ny45NzdDMzM2IDQ1Ni44MiAzMjguODQ0IDQ2My45NzcgMzIwIDQ2My45NzdTMzA0IDQ1Ni44MiAzMDQgNDQ3Ljk3N1Y0MzUuODU5QzMwNCA0MTYuNTcgMjg4LjIyMSA0MDMuNzk3IDI3MS43NjggNDAzLjc5N0MyNjMuOTA4IDQwMy43OTcgMjU1Ljg5MSA0MDYuNzExIDI0OS4zNzMgNDEzLjIzNEwyNDAuNzk3IDQyMS44MDVDMjM3LjY3MiA0MjQuOTMgMjMzLjU3OCA0MjYuNDkyIDIyOS40ODQgNDI2LjQ5MlMyMjEuMjk3IDQyNC45MyAyMTguMTcyIDQyMS44MDVDMjExLjkyMiA0MTUuNTU1IDIxMS45MjIgNDA1LjQzIDIxOC4xNzIgMzk5LjE4NEwyMjYuNzQ4IDM5MC42MDlDMjQ2LjkwNiAzNzAuNDQ5IDIzMi42MjkgMzM1Ljk4NCAyMDQuMTIxIDMzNS45ODRIMTkyQzE4My4xNTYgMzM1Ljk4NCAxNzYgMzI4LjgyOCAxNzYgMzE5Ljk4NFMxODMuMTU2IDMwMy45ODQgMTkyIDMwMy45ODRIMjA0LjEyMUMyMzIuNjI5IDMwMy45ODQgMjQ2LjkwNiAyNjkuNTIgMjI2Ljc0OCAyNDkuMzYzTDIxOC4xNzIgMjQwLjc4NUMyMTEuOTIyIDIzNC41MzkgMjExLjkyMiAyMjQuNDE0IDIxOC4xNzIgMjE4LjE2NEMyMjEuMjk3IDIxNS4wMzkgMjI1LjM5MSAyMTMuNDc3IDIyOS40ODQgMjEzLjQ3N1MyMzcuNjcyIDIxNS4wMzkgMjQwLjc5NyAyMTguMTY0TDI0OS4zNzMgMjI2Ljc0MkMyNTUuODkzIDIzMy4yNTggMjYzLjkwNiAyMzYuMTggMjcxLjc3IDIzNi4xOEMyODguMjE5IDIzNi4xOCAzMDQgMjIzLjM5OCAzMDQgMjA0LjExM1YxOTEuOTkyQzMwNCAxODMuMTQ1IDMxMS4xNTYgMTc1Ljk5MiAzMjAgMTc1Ljk5MlMzMzYgMTgzLjE0NSAzMzYgMTkxLjk5MlYyMDQuMTEzQzMzNiAyMjMuNDA2IDM1MS43ODEgMjM2LjE4IDM2OC4yMyAyMzYuMThDMzc2LjA5NCAyMzYuMTggMzg0LjEwOSAyMzMuMjU4IDM5MC42MjcgMjI2Ljc0MkwzOTkuMjAzIDIxOC4xNjRDNDAyLjMyOCAyMTUuMDM5IDQwNi40MjIgMjEzLjQ3NyA0MTAuNTE2IDIxMy40NzdTNDE4LjcwMyAyMTUuMDM5IDQyMS44MjggMjE4LjE2NEM0MjguMDc4IDIyNC40MTQgNDI4LjA3OCAyMzQuNTM5IDQyMS44MjggMjQwLjc4NUw0MTMuMjUyIDI0OS4zNjNDMzkzLjA5NCAyNjkuNTIgNDA3LjM3MSAzMDMuOTg0IDQzNS44NzkgMzAzLjk4NEg0NDhDNDU2Ljg0NCAzMDMuOTg0IDQ2NCAzMTEuMTQxIDQ2NCAzMTkuOTg0UzQ1Ni44NDQgMzM1Ljk4NCA0NDggMzM1Ljk4NEg0MzUuODc5QzQwNy4zNzEgMzM1Ljk4NCAzOTMuMDk0IDM3MC40NDkgNDEzLjI1MiAzOTAuNjA5TDQyMS44MjggMzk5LjE4NEM0MjguMDc4IDQwNS40MyA0MjguMDc4IDQxNS41NTUgNDIxLjgyOCA0MjEuODA1Wk0yODggMjcxLjk4NEMyNzkuMTY0IDI3MS45ODQgMjcyIDI3OS4xNDggMjcyIDI4Ny45ODRTMjc5LjE2NCAzMDMuOTg0IDI4OCAzMDMuOTg0UzMwNCAyOTYuODIgMzA0IDI4Ny45ODRTMjk2LjgzNiAyNzEuOTg0IDI4OCAyNzEuOTg0Wk0zNTIgMzM1Ljk4NEMzNDMuMTY0IDMzNS45ODQgMzM2IDM0My4xNDggMzM2IDM1MS45ODRTMzQzLjE2NCAzNjcuOTggMzUyIDM2Ny45OFMzNjggMzYwLjgyIDM2OCAzNTEuOTg0UzM2MC44MzYgMzM1Ljk4NCAzNTIgMzM1Ljk4NFpNMTkyLjIwMyA0NzIuNzAzQzE4OC4wMzEgNDc0LjY0MSAxODMuNjU2IDQ3Ni4yNSAxNzkuMDk0IDQ3Ny41TDEyMy4yOTcgNDkyLjc2NkM5Ni44MjggNTAwLjA3OCA2OS4zNDQgNDk0LjgyOCA0Ny43OTcgNDc4LjQyMkMyNy41OTQgNDYzLjAzNSAxNiA0NDAuMDIgMTYgNDE1LjI3M0MxNiA0MDYuMjQyIDE3LjEyNSAzOTcuMzUyIDE5LjM3NSAzODguODA1QzM5LjQ4NCAzMTEuMzQgNzEuMzI4IDIzNy4zNTkgMTE0LjA0NyAxNjguOTNMMTE5LjAzMSAxNjAuODJDMTM3LjA3OCAxMzEuNDE0IDE0OC45ODQgMTExLjk5MiAxODIuMzc1IDExMS45OTJDMjE0LjE1NiAxMTEuOTkyIDI0MCAxMzYuNzU4IDI0MCAxNjcuMjExQzI0MCAxNzEuNjMzIDI0My41NzggMTc1LjIxMSAyNDggMTc1LjIxMVMyNTYgMTcxLjYzMyAyNTYgMTY3LjIxMUMyNTYgMTI3Ljk0NSAyMjIuOTY5IDk1Ljk5MiAxODIuMzc1IDk1Ljk5MkMxNDAuMDMxIDk1Ljk5MiAxMjMuOTg0IDEyMi4xNjQgMTA1LjQwNiAxNTIuNDYxTDEwMC40NjkgMTYwLjQ2MUM1Ni44OTEgMjMwLjI2NiAyNC40MDYgMzA1Ljc0NiAzLjg5MSAzODQuNzU4QzEuMzEyIDM5NC42MTcgMCA0MDQuODgzIDAgNDE1LjI3M0MwIDQ0NS4wNjYgMTMuODkxIDQ3Mi43MTkgMzguMDk0IDQ5MS4xNTZDNTYuMTA5IDUwNC44NzUgNzcuNjI1IDUxMiA5OS43MDMgNTEyQzEwOC45NTMgNTEyIDExOC4yOTcgNTEwLjc1IDEyNy41MzEgNTA4LjIwM0wxODMuMzI4IDQ5Mi45MzhDMTg4LjY3MiA0OTEuNDY5IDE5My45MDYgNDg5LjU0NyAxOTguOTIyIDQ4Ny4yMzRDMjAyLjkzOCA0ODUuMzc1IDIwNC42NzIgNDgwLjYyNSAyMDIuODI4IDQ3Ni42MDlDMjAwLjk1MyA0NzIuNTk0IDE5Ni4yNSA0NzAuODU5IDE5Mi4yMDMgNDcyLjcwM1pNMzIwIDEyNi44NjdDMzI0LjQyMiAxMjYuODY3IDMyOCAxMjMuMjg5IDMyOCAxMTguODY3VjhDMzI4IDMuNTc4IDMyNC40MjIgMCAzMjAgMFMzMTIgMy41NzggMzEyIDhWMTE4Ljg2N0MzMTIgMTIzLjI4OSAzMTUuNTc4IDEyNi44NjcgMzIwIDEyNi44NjdaTTYzNi4xMjUgMzg0Ljc3M0M2MTUuNTk0IDMwNS43NDYgNTgzLjEwOSAyMzAuMjY2IDUzOS41NDcgMTYwLjQ2MUw1MzQuNTk0IDE1Mi40NjFDNTE2LjAxNiAxMjIuMTY0IDQ5OS45NjkgOTUuOTkyIDQ1Ny42MjUgOTUuOTkyQzQxNy4wMzEgOTUuOTkyIDM4NCAxMjcuOTQ1IDM4NCAxNjcuMjExQzM4NCAxNzEuNjMzIDM4Ny41NzggMTc1LjIxMSAzOTIgMTc1LjIxMVM0MDAgMTcxLjYzMyA0MDAgMTY3LjIxMUM0MDAgMTM2Ljc1OCA0MjUuODQ0IDExMS45OTIgNDU3LjYyNSAxMTEuOTkyQzQ5MS4wMTYgMTExLjk5MiA1MDIuOTIyIDEzMS40MTQgNTIwLjk2OSAxNjAuODJMNTI1Ljk2OSAxNjguOTNDNTY4LjY3MiAyMzcuMzU5IDYwMC41MTYgMzExLjM0IDYyMC42NDEgMzg4LjgyQzYyMi44NzUgMzk3LjM1MiA2MjQgNDA2LjI0MiA2MjQgNDE1LjI3M0M2MjQgNDQwLjAyIDYxMi40MDYgNDYzLjAzNSA1OTIuMjAzIDQ3OC40MjJDNTcwLjY3MiA0OTQuODU5IDU0My4xNDEgNTAwLjA3OCA1MTYuNjg4IDQ5Mi43NjZMNDYwLjkyMiA0NzcuNUM0NTYuMzQ0IDQ3Ni4yNSA0NTEuOTUzIDQ3NC42MjUgNDQ3Ljc2NiA0NzIuNzAzQzQ0My44MTIgNDcwLjg1OSA0MzkgNDcyLjU5NCA0MzcuMTU2IDQ3Ni42MjVDNDM1LjMxMiA0ODAuNjQxIDQzNy4wNjIgNDg1LjM5MSA0NDEuMDc4IDQ4Ny4yMzRDNDQ2LjEwOSA0ODkuNTQ3IDQ1MS4zNDQgNDkxLjQ2OSA0NTYuNjg4IDQ5Mi45MzhMNTEyLjQ1MyA1MDguMjAzQzUyMS42ODggNTEwLjc1IDUzMS4wNDcgNTEyIDU0MC4zMTIgNTEyQzU2Mi4zNzUgNTEyIDU4My44OTEgNTA0Ljg1OSA2MDEuOTA2IDQ5MS4xNTZDNjI2LjEwOSA0NzIuNzE5IDY0MCA0NDUuMDY2IDY0MCA0MTUuMjczQzY0MCA0MDQuODgzIDYzOC42ODggMzk0LjYxNyA2MzYuMTI1IDM4NC43NzNaIi8+PC9zdmc+|width=32|height=32)
 */
export default function LungsVirus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M433.143 387.871L424.564 379.293C417.551 372.281 420.139 364.18 421.1 361.859C422.059 359.539 425.961 351.984 435.879 351.984H448C465.645 351.984 480 337.625 480 319.984S465.645 287.984 448 287.984H435.879C425.961 287.984 422.059 280.43 421.098 278.109C420.139 275.789 417.553 267.691 424.566 260.676L433.143 252.098C445.617 239.625 445.619 219.328 433.143 206.852C427.098 200.805 419.062 197.477 410.516 197.477C401.971 197.477 393.934 200.805 387.891 206.852L379.312 215.43C375.387 219.352 371.121 220.18 368.23 220.18C360.254 220.18 352 214.164 352 204.113V191.992C352 174.344 337.645 159.992 320 159.992S288 174.344 288 191.992V204.113C288 214.164 279.748 220.18 271.77 220.18C268.881 220.18 264.613 219.352 260.688 215.43L252.111 206.852C246.066 200.805 238.031 197.477 229.484 197.477C220.939 197.477 212.902 200.805 206.859 206.852C194.383 219.328 194.383 239.625 206.859 252.098L215.434 260.676C222.449 267.691 219.863 275.789 218.902 278.109C217.943 280.43 214.041 287.984 204.121 287.984H192C174.355 287.984 160 302.344 160 319.984S174.355 351.984 192 351.984H204.121C214.041 351.984 217.943 359.539 218.902 361.859S222.449 372.281 215.434 379.297L206.859 387.867C200.814 393.914 197.484 401.945 197.484 410.492S200.814 427.078 206.859 433.117C212.904 439.164 220.939 442.492 229.484 442.492C238.031 442.492 246.066 439.164 252.111 433.117L260.686 424.547C264.613 420.617 268.881 419.797 271.768 419.797C279.748 419.797 288 425.805 288 435.859V447.977C288 465.617 302.355 479.977 320 479.977S352 465.617 352 447.977V435.859C352 425.805 360.254 419.797 368.232 419.797C371.121 419.797 375.387 420.617 379.312 424.547L387.891 433.121C393.934 439.164 401.971 442.492 410.516 442.492C419.062 442.492 427.098 439.164 433.143 433.117C439.187 427.078 442.516 419.039 442.516 410.492S439.188 393.914 433.143 387.871ZM421.828 421.805C418.703 424.93 414.609 426.492 410.516 426.492S402.328 424.93 399.203 421.805L390.627 413.234C384.109 406.711 376.094 403.797 368.232 403.797C351.781 403.797 336 416.57 336 435.859V447.977C336 456.82 328.844 463.977 320 463.977S304 456.82 304 447.977V435.859C304 416.57 288.221 403.797 271.768 403.797C263.908 403.797 255.891 406.711 249.373 413.234L240.797 421.805C237.672 424.93 233.578 426.492 229.484 426.492S221.297 424.93 218.172 421.805C211.922 415.555 211.922 405.43 218.172 399.184L226.748 390.609C246.906 370.449 232.629 335.984 204.121 335.984H192C183.156 335.984 176 328.828 176 319.984S183.156 303.984 192 303.984H204.121C232.629 303.984 246.906 269.52 226.748 249.363L218.172 240.785C211.922 234.539 211.922 224.414 218.172 218.164C221.297 215.039 225.391 213.477 229.484 213.477S237.672 215.039 240.797 218.164L249.373 226.742C255.893 233.258 263.906 236.18 271.77 236.18C288.219 236.18 304 223.398 304 204.113V191.992C304 183.145 311.156 175.992 320 175.992S336 183.145 336 191.992V204.113C336 223.406 351.781 236.18 368.23 236.18C376.094 236.18 384.109 233.258 390.627 226.742L399.203 218.164C402.328 215.039 406.422 213.477 410.516 213.477S418.703 215.039 421.828 218.164C428.078 224.414 428.078 234.539 421.828 240.785L413.252 249.363C393.094 269.52 407.371 303.984 435.879 303.984H448C456.844 303.984 464 311.141 464 319.984S456.844 335.984 448 335.984H435.879C407.371 335.984 393.094 370.449 413.252 390.609L421.828 399.184C428.078 405.43 428.078 415.555 421.828 421.805ZM288 271.984C279.164 271.984 272 279.148 272 287.984S279.164 303.984 288 303.984S304 296.82 304 287.984S296.836 271.984 288 271.984ZM352 335.984C343.164 335.984 336 343.148 336 351.984S343.164 367.98 352 367.98S368 360.82 368 351.984S360.836 335.984 352 335.984ZM192.203 472.703C188.031 474.641 183.656 476.25 179.094 477.5L123.297 492.766C96.828 500.078 69.344 494.828 47.797 478.422C27.594 463.035 16 440.02 16 415.273C16 406.242 17.125 397.352 19.375 388.805C39.484 311.34 71.328 237.359 114.047 168.93L119.031 160.82C137.078 131.414 148.984 111.992 182.375 111.992C214.156 111.992 240 136.758 240 167.211C240 171.633 243.578 175.211 248 175.211S256 171.633 256 167.211C256 127.945 222.969 95.992 182.375 95.992C140.031 95.992 123.984 122.164 105.406 152.461L100.469 160.461C56.891 230.266 24.406 305.746 3.891 384.758C1.312 394.617 0 404.883 0 415.273C0 445.066 13.891 472.719 38.094 491.156C56.109 504.875 77.625 512 99.703 512C108.953 512 118.297 510.75 127.531 508.203L183.328 492.938C188.672 491.469 193.906 489.547 198.922 487.234C202.938 485.375 204.672 480.625 202.828 476.609C200.953 472.594 196.25 470.859 192.203 472.703ZM320 126.867C324.422 126.867 328 123.289 328 118.867V8C328 3.578 324.422 0 320 0S312 3.578 312 8V118.867C312 123.289 315.578 126.867 320 126.867ZM636.125 384.773C615.594 305.746 583.109 230.266 539.547 160.461L534.594 152.461C516.016 122.164 499.969 95.992 457.625 95.992C417.031 95.992 384 127.945 384 167.211C384 171.633 387.578 175.211 392 175.211S400 171.633 400 167.211C400 136.758 425.844 111.992 457.625 111.992C491.016 111.992 502.922 131.414 520.969 160.82L525.969 168.93C568.672 237.359 600.516 311.34 620.641 388.82C622.875 397.352 624 406.242 624 415.273C624 440.02 612.406 463.035 592.203 478.422C570.672 494.859 543.141 500.078 516.688 492.766L460.922 477.5C456.344 476.25 451.953 474.625 447.766 472.703C443.812 470.859 439 472.594 437.156 476.625C435.312 480.641 437.062 485.391 441.078 487.234C446.109 489.547 451.344 491.469 456.688 492.938L512.453 508.203C521.688 510.75 531.047 512 540.312 512C562.375 512 583.891 504.859 601.906 491.156C626.109 472.719 640 445.066 640 415.273C640 404.883 638.688 394.617 636.125 384.773Z" />
        </Icon>
    </>
}
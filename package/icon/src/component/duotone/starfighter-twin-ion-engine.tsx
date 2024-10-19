
import { Icon, generic } from "../../index";

/**
 * A component that renders the `starfighter-twin-ion-engine` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/starfighter-twin-ion-engine?s=duotone starfighter-twin-ion-engine}
 * @preview ![starfighter-twin-ion-engine](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIyNS4yMTEgMjY4SDE5My4yMTFDMTk1LjMwOSAyODQuOTc3IDIwMS45NTUgMzAxLjA3MiAyMTIuNDQ1IDMxNC41ODRMMjM1LjA3NCAyOTEuOTU3QzIzMC4xNzggMjg0LjczMiAyMjYuODIgMjc2LjU3OCAyMjUuMjExIDI2OFpNMjI5LjQxNCAzMzEuNTUzQzI0Mi45MjYgMzQyLjA0NSAyNTkuMDIxIDM0OC42OTEgMjc2IDM1MC43ODlWMzE4Ljc4OUMyNjcuNDIyIDMxNy4xODIgMjU5LjI2OCAzMTMuODI0IDI1Mi4wNDMgMzA4LjkyNkwyMjkuNDE0IDMzMS41NTNaTTY0IDIxNlYyOTZMMTM5LjUyIDMxNC44NzlDMTI0LjE2IDI3Ny4xMjkgMTI0LjE2IDIzNC44NzEgMTM5LjUyIDE5Ny4xMjFMNjQgMjE2Wk0yMzUuMDc0IDIyMC4wNDNMMjEyLjQ0NSAxOTcuNDE2QzIwMS45NTUgMjEwLjkyOCAxOTUuMzA5IDIyNy4wMjMgMTkzLjIxMSAyNDRIMjI1LjIxMUMyMjYuODIgMjM1LjQyMiAyMzAuMTc4IDIyNy4yNjggMjM1LjA3NCAyMjAuMDQzWk0zNDYuNTg2IDE4MC40NDdDMzMzLjA3NCAxNjkuOTU1IDMxNi45NzkgMTYzLjMwOSAzMDAgMTYxLjIxMVYxOTMuMjExQzMwOC41NzggMTk0LjgxOCAzMTYuNzM0IDE5OC4xNzggMzIzLjk1NyAyMDMuMDc0TDM0Ni41ODYgMTgwLjQ0N1pNNDM2LjQ4IDE5Ny4xMjFDNDUxLjg0IDIzNC44NzEgNDUxLjg0IDI3Ny4xMjkgNDM2LjQ4IDMxNC44NzlMNTEyIDI5NlYyMTZMNDM2LjQ4IDE5Ny4xMjFaTTM0MC45MjYgMjIwLjA0M0MzNDUuODIyIDIyNy4yNjggMzQ5LjE4IDIzNS40MjIgMzUwLjc4OSAyNDRIMzgyLjc4OUMzODAuNjkxIDIyNy4wMjMgMzc0LjA0NyAyMTAuOTI4IDM2My41NTUgMTk3LjQxNkwzNDAuOTI2IDIyMC4wNDNaTTM0MC45MjYgMjkxLjk1N0wzNjMuNTU1IDMxNC41ODRDMzc0LjA0NyAzMDEuMDcyIDM4MC42OTEgMjg0Ljk3NyAzODIuNzg5IDI2OEgzNTAuNzg5QzM0OS4xOCAyNzYuNTc4IDM0NS44MjIgMjg0LjczMiAzNDAuOTI2IDI5MS45NTdaTTI1Mi4wNDMgMjAzLjA3NEMyNTkuMjY4IDE5OC4xNzggMjY3LjQyMiAxOTQuODE4IDI3NiAxOTMuMjExVjE2MS4yMTFDMjU5LjAyMSAxNjMuMzA5IDI0Mi45MjYgMTY5Ljk1NSAyMjkuNDE0IDE4MC40NDdMMjUyLjA0MyAyMDMuMDc0Wk0zMDAgMzE4Ljc4OVYzNTAuNzg5QzMxNi45NzkgMzQ4LjY5MSAzMzMuMDc0IDM0Mi4wNDUgMzQ2LjU4NiAzMzEuNTUzTDMyMy45NTcgMzA4LjkyNkMzMTYuNzM0IDMxMy44MjIgMzA4LjU3OCAzMTcuMTgyIDMwMCAzMTguNzg5WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yODggOTZDMTk5LjYzNCA5NiAxMjggMTY3LjYzNCAxMjggMjU2UzE5OS42MzQgNDE2IDI4OCA0MTZTNDQ4IDM0NC4zNjYgNDQ4IDI1NkM0NDggMTY3LjYzNSAzNzYuMzY3IDk2IDI4OC4wMDIgOTZDMjg4LjAwMSA5NiAyODguMDAxIDk2IDI4OCA5NlpNMzAwIDE2MS4yMTFDMzE2Ljk3OCAxNjMuMzA4IDMzMy4wNzQgMTY5Ljk1NCAzNDYuNTg2IDE4MC40NDdMMzIzLjk1NyAyMDMuMDc0QzMxNi43MzMgMTk4LjE3NyAzMDguNTc4IDE5NC44MTkgMzAwIDE5My4yMTFWMTYxLjIxMVpNMjc2IDE2MS4yMTFWMTkzLjIxMUMyNjcuNDIyIDE5NC44MTkgMjU5LjI2NyAxOTguMTc3IDI1Mi4wNDMgMjAzLjA3NEwyMjkuNDE0IDE4MC40NDdDMjQyLjkyNiAxNjkuOTU0IDI1OS4wMjIgMTYzLjMwOCAyNzYgMTYxLjIxMVpNMjEyLjQ0NSAxOTcuNDE2TDIzNS4wNzQgMjIwLjA0M0MyMzAuMTc4IDIyNy4yNjggMjI2LjgyMSAyMzUuNDIyIDIyNS4yMTEgMjQ0SDE5My4yMTFDMTk1LjMwOCAyMjcuMDIzIDIwMS45NTQgMjEwLjkyOCAyMTIuNDQ1IDE5Ny40MTZaTTE5My4yMTEgMjY4SDIyNS4yMTFDMjI2LjgyMSAyNzYuNTc4IDIzMC4xNzggMjg0LjczMiAyMzUuMDc0IDI5MS45NTdMMjEyLjQ0NSAzMTQuNTg0QzIwMS45NTQgMzAxLjA3MiAxOTUuMzA4IDI4NC45NzcgMTkzLjIxMSAyNjhaTTI3NiAzNTAuNzg5QzI1OS4wMjIgMzQ4LjY5MiAyNDIuOTI2IDM0Mi4wNDYgMjI5LjQxNCAzMzEuNTUzTDI1Mi4wNDMgMzA4LjkyNkMyNTkuMjY3IDMxMy44MjMgMjY3LjQyMiAzMTcuMTgxIDI3NiAzMTguNzg5VjM1MC43ODlaTTI1NiAyNTZDMjU2IDIzOC4zMjcgMjcwLjMyNyAyMjQgMjg4IDIyNFMzMjAgMjM4LjMyNyAzMjAgMjU2UzMwNS42NzMgMjg4IDI4OCAyODhDMjcwLjMyNyAyODggMjU2IDI3My42NzMgMjU2IDI1NlpNMzAwIDM1MC43ODlWMzE4Ljc4OUMzMDguNTc4IDMxNy4xODEgMzE2LjczMyAzMTMuODIzIDMyMy45NTcgMzA4LjkyNkwzNDYuNTg2IDMzMS41NTNDMzMzLjA3NCAzNDIuMDQ2IDMxNi45NzggMzQ4LjY5MiAzMDAgMzUwLjc4OVpNMzYzLjU1NSAzMTQuNTg0TDM0MC45MjYgMjkxLjk1N0MzNDUuODIyIDI4NC43MzIgMzQ5LjE3OSAyNzYuNTc4IDM1MC43ODkgMjY4SDM4Mi43ODlDMzgwLjY5MiAyODQuOTc3IDM3NC4wNDYgMzAxLjA3MiAzNjMuNTU1IDMxNC41ODRaTTM1MC43ODkgMjQ0QzM0OS4xNzkgMjM1LjQyMiAzNDUuODIyIDIyNy4yNjggMzQwLjkyNiAyMjAuMDQzTDM2My41NTUgMTk3LjQxNkMzNzQuMDQ2IDIxMC45MjggMzgwLjY5MiAyMjcuMDIzIDM4Mi43ODkgMjQ0SDM1MC43ODlaTTQ4IDMySDE2QzcuMTY0IDMyIDAgMzkuMTYzIDAgNDcuOTk5QzAgNDcuOTk5IDAgNDggMCA0OFY0NjRDMCA0NzIuODM2IDcuMTY0IDQ4MCAxNiA0ODBINDhDNTYuODM2IDQ4MCA2NCA0NzIuODM2IDY0IDQ2NFY0OEM2NCAzOS4xNjQgNTYuODM3IDMyIDQ4LjAwMSAzMkM0OC4wMDEgMzIgNDggMzIgNDggMzJaTTU2MCAzMkg1MjhDNTE5LjE2NCAzMiA1MTIgMzkuMTYzIDUxMiA0Ny45OTlDNTEyIDQ3Ljk5OSA1MTIgNDggNTEyIDQ4VjQ2NEM1MTIgNDcyLjgzNiA1MTkuMTY0IDQ4MCA1MjggNDgwSDU2MEM1NjguODM2IDQ4MCA1NzYgNDcyLjgzNiA1NzYgNDY0VjQ4QzU3NiAzOS4xNjQgNTY4LjgzNyAzMiA1NjAuMDAxIDMyQzU2MC4wMDEgMzIgNTYwIDMyIDU2MCAzMloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const StarfighterTwinIonEngine: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M225.211 268H193.211C195.309 284.977 201.955 301.072 212.445 314.584L235.074 291.957C230.178 284.732 226.82 276.578 225.211 268ZM229.414 331.553C242.926 342.045 259.021 348.691 276 350.789V318.789C267.422 317.182 259.268 313.824 252.043 308.926L229.414 331.553ZM64 216V296L139.52 314.879C124.16 277.129 124.16 234.871 139.52 197.121L64 216ZM235.074 220.043L212.445 197.416C201.955 210.928 195.309 227.023 193.211 244H225.211C226.82 235.422 230.178 227.268 235.074 220.043ZM346.586 180.447C333.074 169.955 316.979 163.309 300 161.211V193.211C308.578 194.818 316.734 198.178 323.957 203.074L346.586 180.447ZM436.48 197.121C451.84 234.871 451.84 277.129 436.48 314.879L512 296V216L436.48 197.121ZM340.926 220.043C345.822 227.268 349.18 235.422 350.789 244H382.789C380.691 227.023 374.047 210.928 363.555 197.416L340.926 220.043ZM340.926 291.957L363.555 314.584C374.047 301.072 380.691 284.977 382.789 268H350.789C349.18 276.578 345.822 284.732 340.926 291.957ZM252.043 203.074C259.268 198.178 267.422 194.818 276 193.211V161.211C259.021 163.309 242.926 169.955 229.414 180.447L252.043 203.074ZM300 318.789V350.789C316.979 348.691 333.074 342.045 346.586 331.553L323.957 308.926C316.734 313.822 308.578 317.182 300 318.789Z" />
            <path d="M288 96C199.634 96 128 167.634 128 256S199.634 416 288 416S448 344.366 448 256C448 167.635 376.367 96 288.002 96C288.001 96 288.001 96 288 96ZM300 161.211C316.978 163.308 333.074 169.954 346.586 180.447L323.957 203.074C316.733 198.177 308.578 194.819 300 193.211V161.211ZM276 161.211V193.211C267.422 194.819 259.267 198.177 252.043 203.074L229.414 180.447C242.926 169.954 259.022 163.308 276 161.211ZM212.445 197.416L235.074 220.043C230.178 227.268 226.821 235.422 225.211 244H193.211C195.308 227.023 201.954 210.928 212.445 197.416ZM193.211 268H225.211C226.821 276.578 230.178 284.732 235.074 291.957L212.445 314.584C201.954 301.072 195.308 284.977 193.211 268ZM276 350.789C259.022 348.692 242.926 342.046 229.414 331.553L252.043 308.926C259.267 313.823 267.422 317.181 276 318.789V350.789ZM256 256C256 238.327 270.327 224 288 224S320 238.327 320 256S305.673 288 288 288C270.327 288 256 273.673 256 256ZM300 350.789V318.789C308.578 317.181 316.733 313.823 323.957 308.926L346.586 331.553C333.074 342.046 316.978 348.692 300 350.789ZM363.555 314.584L340.926 291.957C345.822 284.732 349.179 276.578 350.789 268H382.789C380.692 284.977 374.046 301.072 363.555 314.584ZM350.789 244C349.179 235.422 345.822 227.268 340.926 220.043L363.555 197.416C374.046 210.928 380.692 227.023 382.789 244H350.789ZM48 32H16C7.164 32 0 39.163 0 47.999C0 47.999 0 48 0 48V464C0 472.836 7.164 480 16 480H48C56.836 480 64 472.836 64 464V48C64 39.164 56.837 32 48.001 32C48.001 32 48 32 48 32ZM560 32H528C519.164 32 512 39.163 512 47.999C512 47.999 512 48 512 48V464C512 472.836 519.164 480 528 480H560C568.836 480 576 472.836 576 464V48C576 39.164 568.837 32 560.001 32C560.001 32 560 32 560 32Z" />
    </Icon>
);

export default StarfighterTwinIonEngine;
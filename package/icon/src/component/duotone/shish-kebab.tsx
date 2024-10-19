
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shish-kebab` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/shish-kebab?s=duotone shish-kebab}
 * @preview ![shish-kebab](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE3NC42MjcgMzAzLjcxOUwyMDguNTggMzM3LjY0MUwyMzEuMTY0IDMxNS4wNTdMMTk3LjIyOCAyODEuMTE3TDE3NC42MjcgMzAzLjcxOVpNNy4wNTIgNDcwLjk3OUMtMi4zNDQgNDgwLjM1NCAtMi4zNTIgNDk1LjU3NiA3LjAzNSA1MDQuOTYzQzE2LjQxNiA1MTQuMzQ2IDMxLjYyNyA1MTQuMzQ2IDQxLjAxIDUwNC45NjNMMTIyLjkyNyA0MjMuMDYyTDg4Ljk5IDM4OS4xMjNMNy4wNTIgNDcwLjk3OVpNNTExLjIxMyA4NC4xMTlDNTA3LjMzOCA1NC4zNjkgNDkwLjA4OCAyOC4zNjkgNDYzLjcxNSAxMi44NjlDNDMzLjM0NCAtNC43NTYgMzk1LjcyIC00LjI1NiAzNjUuODQ3IDE0LjI0NEMzMjMuMjI2IDQwLjk5NCAzMDcuNzI2IDkzLjk5NCAzMjkuOTc0IDEzOC44NjlDMzMxLjQ3NCAxNDEuNzQ0IDMzMi4yMjQgMTQ1Ljk5NCAzMjkuOTc0IDE0OC4zNjlMMjgyLjg1MSAxOTUuNDkyTDMxNi43ODcgMjI5LjQzNEwzNjMuOTcyIDE4Mi4yNDhDMzgwLjU5NyAxNjUuNDk0IDM4NC4yMiAxNDAuMTE5IDM3Mi45NzIgMTE3LjYxOUMzNjMuMzQ3IDk4LjExOSAzNjYuOTcyIDY5LjM2OSAzOTIuNTk1IDU0LjI0NEM0MDYuNzIgNDUuNzQ0IDQyNC4yMTkgNDUuNjE5IDQzOC40NjcgNTMuNjE5QzQ1Mi43MTcgNjEuNjE5IDQ2MS43MTcgNzQuNjE5IDQ2My43MTUgOTAuMTE5QzQ2NC45NjUgMTAwLjQ5NCA0NjIuODQgMTExLjExOSA0NTcuNzE3IDEyMC4yNDRDNDUzLjk2NyAxMjYuNjE5IDQ1NC4zNDIgMTM0LjQ5NCA0NTkuNTkyIDEzOS43NDRMNDcxLjg0IDE1MS45OTRDNDc4LjU5IDE1OC43NDQgNDg5Ljk2MyAxNTguMTE5IDQ5NS4zMzggMTUwLjI0NEM1MDguNTg4IDEzMC44NjkgNTE0LjIxMSAxMDcuMzY5IDUxMS4yMTMgODQuMTE5WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zNjQuNiAyNzcuMjQ4TDIzNC43MzUgMTQ3LjM2OUMyMjIuODYyIDEzNS4zNjkgMjAzLjM2MiAxMzUuMzY5IDE5MS40ODkgMTQ3LjM2OUwxNDkuMTE2IDE4OS42MjNDMTM3LjI0MyAyMDEuNjIzIDEzNy4yNDMgMjIwLjk5OCAxNDkuMTE2IDIzMi45OThMMjc4Ljk4MSAzNjIuODc3QzI5MC45ODEgMzc0Ljc1MiAzMTAuMzU0IDM3NC43NTIgMzIyLjIyOSAzNjIuODc3TDM2NC42IDMyMC41MDJDMzc2LjQ3NSAzMDguNjIzIDM3Ni40NzUgMjg5LjEyMyAzNjQuNiAyNzcuMjQ4Wk0xMjYuNDkzIDI1NS42MjNDMTE0LjYyIDI0My42MjMgOTUuMjQ1IDI0My42MjMgODMuMjQ3IDI1NS42MjNMNDAuOTk5IDI5Ny44NzNDMjkgMzA5Ljg3MyAyOSAzMjkuMjUyIDQwLjk5OSAzNDEuMTI3TDE3MC44NjYgNDcxLjAwMkMxODIuNzM5IDQ4My4wMDIgMjAyLjExMiA0ODMuMDAyIDIxNC4xMTIgNDcxLjAwMkwyNTYuMzU4IDQyOC43NTJDMjY4LjM1OCA0MTYuNzUyIDI2OC4zNTggMzk3LjM3NyAyNTYuMzU4IDM4NS4zNzdMMTI2LjQ5MyAyNTUuNjIzWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const ShishKebab: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M174.627 303.719L208.58 337.641L231.164 315.057L197.228 281.117L174.627 303.719ZM7.052 470.979C-2.344 480.354 -2.352 495.576 7.035 504.963C16.416 514.346 31.627 514.346 41.01 504.963L122.927 423.062L88.99 389.123L7.052 470.979ZM511.213 84.119C507.338 54.369 490.088 28.369 463.715 12.869C433.344 -4.756 395.72 -4.256 365.847 14.244C323.226 40.994 307.726 93.994 329.974 138.869C331.474 141.744 332.224 145.994 329.974 148.369L282.851 195.492L316.787 229.434L363.972 182.248C380.597 165.494 384.22 140.119 372.972 117.619C363.347 98.119 366.972 69.369 392.595 54.244C406.72 45.744 424.219 45.619 438.467 53.619C452.717 61.619 461.717 74.619 463.715 90.119C464.965 100.494 462.84 111.119 457.717 120.244C453.967 126.619 454.342 134.494 459.592 139.744L471.84 151.994C478.59 158.744 489.963 158.119 495.338 150.244C508.588 130.869 514.211 107.369 511.213 84.119Z" />
            <path d="M364.6 277.248L234.735 147.369C222.862 135.369 203.362 135.369 191.489 147.369L149.116 189.623C137.243 201.623 137.243 220.998 149.116 232.998L278.981 362.877C290.981 374.752 310.354 374.752 322.229 362.877L364.6 320.502C376.475 308.623 376.475 289.123 364.6 277.248ZM126.493 255.623C114.62 243.623 95.245 243.623 83.247 255.623L40.999 297.873C29 309.873 29 329.252 40.999 341.127L170.866 471.002C182.739 483.002 202.112 483.002 214.112 471.002L256.358 428.752C268.358 416.752 268.358 397.377 256.358 385.377L126.493 255.623Z" />
    </Icon>
);

export default ShishKebab;
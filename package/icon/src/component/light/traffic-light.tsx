
import { Icon } from "../../index";

/**
 * A component that renders the `traffic-light` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/traffic-light?s=light traffic-light}
 * @preview ![traffic-light](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgNjRDMTY1LjQ5IDY0IDE0NCA4NS40OSAxNDQgMTEyUzE2NS40OSAxNjAgMTkyIDE2MFMyNDAgMTM4LjUxIDI0MCAxMTJTMjE4LjUxIDY0IDE5MiA2NFpNMTkyIDEyOEMxODMuMTc4IDEyOCAxNzYgMTIwLjgyMiAxNzYgMTEyUzE4My4xNzggOTYgMTkyIDk2UzIwOCAxMDMuMTc4IDIwOCAxMTJTMjAwLjgyMiAxMjggMTkyIDEyOFpNMTkyIDE5MkMxNjUuNDkgMTkyIDE0NCAyMTMuNDkgMTQ0IDI0MFMxNjUuNDkgMjg4IDE5MiAyODhTMjQwIDI2Ni41MSAyNDAgMjQwUzIxOC41MSAxOTIgMTkyIDE5MlpNMTkyIDI1NkMxODMuMTc4IDI1NiAxNzYgMjQ4LjgyMiAxNzYgMjQwUzE4My4xNzggMjI0IDE5MiAyMjRTMjA4IDIzMS4xNzggMjA4IDI0MFMyMDAuODIyIDI1NiAxOTIgMjU2Wk0xOTIgMzIwQzE2NS40OSAzMjAgMTQ0IDM0MS40OSAxNDQgMzY4UzE2NS40OSA0MTYgMTkyIDQxNlMyNDAgMzk0LjUxIDI0MCAzNjhTMjE4LjUxIDMyMCAxOTIgMzIwWk0xOTIgMzg0QzE4My4xNzggMzg0IDE3NiAzNzYuODIyIDE3NiAzNjhTMTgzLjE3OCAzNTIgMTkyIDM1MlMyMDggMzU5LjE3OCAyMDggMzY4UzIwMC44MjIgMzg0IDE5MiAzODRaTTM4NCA5NlY4MEMzODQgNzEuMTU2IDM3Ni44NDQgNjQgMzY4IDY0SDMyMEMzMjAgMjguNjU0IDI5MS4zNDYgMCAyNTYgMEgxMjhDOTIuNjU0IDAgNjQgMjguNjU0IDY0IDY0SDE2QzcuMTU2IDY0IDAgNzEuMTU2IDAgODBWOTZDMCAxMzQuNjQ1IDI3LjUyMSAxNjYuOTUxIDY0IDE3NC4zODNWMTkySDE2QzcuMTU2IDE5MiAwIDE5OS4xNTYgMCAyMDhWMjI0QzAgMjYyLjY0NSAyNy41MjEgMjk0Ljk1MSA2NCAzMDIuMzgzVjMyMEgxNkM3LjE1NiAzMjAgMCAzMjcuMTU2IDAgMzM2VjM1MkMwIDM5My44MjQgMzIuMzQ0IDQyNy44NDggNzMuMjgxIDQzMS4zMjJDOTIuMTIzIDQ3OC41MzkgMTM4LjA1OSA1MTIgMTkyIDUxMlMyOTEuODc3IDQ3OC41MzkgMzEwLjcxOSA0MzEuMzIyQzM1MS42NTYgNDI3Ljg0OCAzODQgMzkzLjgyNCAzODQgMzUyVjMzNkMzODQgMzI3LjE1NiAzNzYuODQ0IDMyMCAzNjggMzIwSDMyMFYzMDIuMzgzQzM1Ni40NzkgMjk0Ljk1MSAzODQgMjYyLjY0NSAzODQgMjI0VjIwOEMzODQgMTk5LjE1NiAzNzYuODQ0IDE5MiAzNjggMTkySDMyMFYxNzQuMzgzQzM1Ni40NzkgMTY2Ljk1MSAzODQgMTM0LjY0NSAzODQgOTZaTTMyMCA5NkgzNTJDMzUyIDExNi44MzIgMzM4LjU4NCAxMzQuNDI2IDMyMCAxNDEuMDUzVjk2Wk0zMiA5Nkg2NFYxNDEuMDUzQzQ1LjQxNiAxMzQuNDI2IDMyIDExNi44MzIgMzIgOTZaTTMyIDIyNEg2NFYyNjkuMDUzQzQ1LjQxNiAyNjIuNDI2IDMyIDI0NC44MzIgMzIgMjI0Wk0zMiAzNTJINjRWMzg0QzY0IDM4OC42MTUgNjQuODgxIDM5Mi45ODQgNjUuMzU3IDM5Ny40NzVDNDYuMDc2IDM5MS4yNDIgMzIgMzczLjMzIDMyIDM1MlpNMjg4IDM4NEMyODggNDM2LjkzNiAyNDQuOTM2IDQ4MCAxOTIgNDgwUzk2IDQzNi45MzYgOTYgMzg0VjY0Qzk2IDQ2LjM1NSAxMTAuMzU1IDMyIDEyOCAzMkgyNTZDMjczLjY0NSAzMiAyODggNDYuMzU1IDI4OCA2NFYzODRaTTM1MiAzNTJDMzUyIDM3My4zMyAzMzcuOTI0IDM5MS4yNDIgMzE4LjY0MyAzOTcuNDc1QzMxOS4xMTkgMzkyLjk4NCAzMjAgMzg4LjYxNSAzMjAgMzg0VjM1MkgzNTJaTTM1MiAyMjRDMzUyIDI0NC44MzIgMzM4LjU4NCAyNjIuNDI2IDMyMCAyNjkuMDUzVjIyNEgzNTJaIi8+PC9zdmc+|width=32|height=32)
 */
const TrafficLight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 64C165.49 64 144 85.49 144 112S165.49 160 192 160S240 138.51 240 112S218.51 64 192 64ZM192 128C183.178 128 176 120.822 176 112S183.178 96 192 96S208 103.178 208 112S200.822 128 192 128ZM192 192C165.49 192 144 213.49 144 240S165.49 288 192 288S240 266.51 240 240S218.51 192 192 192ZM192 256C183.178 256 176 248.822 176 240S183.178 224 192 224S208 231.178 208 240S200.822 256 192 256ZM192 320C165.49 320 144 341.49 144 368S165.49 416 192 416S240 394.51 240 368S218.51 320 192 320ZM192 384C183.178 384 176 376.822 176 368S183.178 352 192 352S208 359.178 208 368S200.822 384 192 384ZM384 96V80C384 71.156 376.844 64 368 64H320C320 28.654 291.346 0 256 0H128C92.654 0 64 28.654 64 64H16C7.156 64 0 71.156 0 80V96C0 134.645 27.521 166.951 64 174.383V192H16C7.156 192 0 199.156 0 208V224C0 262.645 27.521 294.951 64 302.383V320H16C7.156 320 0 327.156 0 336V352C0 393.824 32.344 427.848 73.281 431.322C92.123 478.539 138.059 512 192 512S291.877 478.539 310.719 431.322C351.656 427.848 384 393.824 384 352V336C384 327.156 376.844 320 368 320H320V302.383C356.479 294.951 384 262.645 384 224V208C384 199.156 376.844 192 368 192H320V174.383C356.479 166.951 384 134.645 384 96ZM320 96H352C352 116.832 338.584 134.426 320 141.053V96ZM32 96H64V141.053C45.416 134.426 32 116.832 32 96ZM32 224H64V269.053C45.416 262.426 32 244.832 32 224ZM32 352H64V384C64 388.615 64.881 392.984 65.357 397.475C46.076 391.242 32 373.33 32 352ZM288 384C288 436.936 244.936 480 192 480S96 436.936 96 384V64C96 46.355 110.355 32 128 32H256C273.645 32 288 46.355 288 64V384ZM352 352C352 373.33 337.924 391.242 318.643 397.475C319.119 392.984 320 388.615 320 384V352H352ZM352 224C352 244.832 338.584 262.426 320 269.053V224H352Z" />
    </Icon>
);

export default TrafficLight;
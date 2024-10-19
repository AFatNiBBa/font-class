
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `boxes-stacked` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/boxes-stacked?s=thin boxes-stacked}
 * @preview ![boxes-stacked](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMjg4SDMyQzE0LjMyOCAyODggMCAzMDIuMzI2IDAgMzIwVjQ4MEMwIDQ5Ny42NzIgMTQuMzI4IDUxMiAzMiA1MTJIMjI0QzI0MS42NzIgNTEyIDI1NiA0OTcuNjcyIDI1NiA0ODBWMzIwQzI1NiAzMDIuMzI2IDI0MS42NzIgMjg4IDIyNCAyODhaTTk2IDMwNEgxNjBWMzk5LjM1OUwxMzMgMzc3Ljc1QzEzMC4wNjIgMzc1LjQwNiAxMjUuOTM4IDM3NS40MDYgMTIzIDM3Ny43NUw5NiAzOTkuMzU5VjMwNFpNMjQwIDQ4MEMyNDAgNDg4LjgyMiAyMzIuODI0IDQ5NiAyMjQgNDk2SDMyQzIzLjE3NiA0OTYgMTYgNDg4LjgyMiAxNiA0ODBWMzIwQzE2IDMxMS4xNzggMjMuMTc2IDMwNCAzMiAzMDRIODBWNDE2QzgwIDQxOS4wNzggODEuNzUgNDIxLjg3NSA4NC41MzEgNDIzLjIwM0M4Ny4yNSA0MjQuNTMxIDkwLjU5NCA0MjQuMTcyIDkzIDQyMi4yNUwxMjggMzk0LjI1TDE2MyA0MjIuMjVDMTY0LjQzOCA0MjMuNDA2IDE2Ni4yMTkgNDI0IDE2OCA0MjRDMTY5LjE4OCA0MjQgMTcwLjM3NSA0MjMuNzM0IDE3MS40NjkgNDIzLjIwM0MxNzQuMjUgNDIxLjg3NSAxNzYgNDE5LjA3OCAxNzYgNDE2VjMwNEgyMjRDMjMyLjgyNCAzMDQgMjQwIDMxMS4xNzggMjQwIDMyMFY0ODBaTTU0NCAyODhIMzUyQzMzNC4zMjggMjg4IDMyMCAzMDIuMzI2IDMyMCAzMjBWNDgwQzMyMCA0OTcuNjcyIDMzNC4zMjggNTEyIDM1MiA1MTJINTQ0QzU2MS42NzIgNTEyIDU3NiA0OTcuNjcyIDU3NiA0ODBWMzIwQzU3NiAzMDIuMzI2IDU2MS42NzIgMjg4IDU0NCAyODhaTTQxNiAzMDRINDgwVjM5OS4zNTlMNDUzIDM3Ny43NUM0NTAuMDYyIDM3NS40MDYgNDQ1LjkzOCAzNzUuNDA2IDQ0MyAzNzcuNzVMNDE2IDM5OS4zNTlWMzA0Wk01NjAgNDgwQzU2MCA0ODguODIyIDU1Mi44MjQgNDk2IDU0NCA0OTZIMzUyQzM0My4xNzYgNDk2IDMzNiA0ODguODIyIDMzNiA0ODBWMzIwQzMzNiAzMTEuMTc4IDM0My4xNzYgMzA0IDM1MiAzMDRINDAwVjQxNkM0MDAgNDE5LjA3OCA0MDEuNzUgNDIxLjg3NSA0MDQuNTMxIDQyMy4yMDNDNDA3LjI1IDQyNC41MzEgNDEwLjU5NCA0MjQuMTcyIDQxMyA0MjIuMjVMNDQ4IDM5NC4yNUw0ODMgNDIyLjI1QzQ4NC40MzggNDIzLjQwNiA0ODYuMjE5IDQyNCA0ODggNDI0QzQ4OS4xODggNDI0IDQ5MC4zNzUgNDIzLjczNCA0OTEuNDY5IDQyMy4yMDNDNDk0LjI1IDQyMS44NzUgNDk2IDQxOS4wNzggNDk2IDQxNlYzMDRINTQ0QzU1Mi44MjQgMzA0IDU2MCAzMTEuMTc4IDU2MCAzMjBWNDgwWk0xOTIgMjI0SDM4NEM0MDEuNjcyIDIyNCA0MTYgMjA5LjY3MiA0MTYgMTkyVjMyQzQxNiAxNC4zMjYgNDAxLjY3MiAwIDM4NCAwSDE5MkMxNzQuMzI4IDAgMTYwIDE0LjMyNiAxNjAgMzJWMTkyQzE2MCAyMDkuNjcyIDE3NC4zMjggMjI0IDE5MiAyMjRaTTI1NiAxNkgzMjBWMTExLjM1OUwyOTMgODkuNzVDMjkwLjA2MiA4Ny40MDYgMjg1LjkzOCA4Ny40MDYgMjgzIDg5Ljc1TDI1NiAxMTEuMzU5VjE2Wk0xNzYgMzJDMTc2IDIzLjE3OCAxODMuMTc2IDE2IDE5MiAxNkgyNDBWMTI4QzI0MCAxMzEuMDc4IDI0MS43NSAxMzMuODc1IDI0NC41MzEgMTM1LjIwM0MyNDcuMjUgMTM2LjUxNiAyNTAuNTk0IDEzNi4xNzIgMjUzIDEzNC4yNUwyODggMTA2LjI1TDMyMyAxMzQuMjVDMzI0LjQzOCAxMzUuNDA2IDMyNi4yMTkgMTM2IDMyOCAxMzZDMzI5LjE4OCAxMzYgMzMwLjM3NSAxMzUuNzM0IDMzMS40NjkgMTM1LjIwM0MzMzQuMjUgMTMzLjg3NSAzMzYgMTMxLjA3OCAzMzYgMTI4VjE2SDM4NEMzOTIuODI0IDE2IDQwMCAyMy4xNzggNDAwIDMyVjE5MkM0MDAgMjAwLjgyMiAzOTIuODI0IDIwOCAzODQgMjA4SDE5MkMxODMuMTc2IDIwOCAxNzYgMjAwLjgyMiAxNzYgMTkyVjMyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BoxesStacked(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M224 288H32C14.328 288 0 302.326 0 320V480C0 497.672 14.328 512 32 512H224C241.672 512 256 497.672 256 480V320C256 302.326 241.672 288 224 288ZM96 304H160V399.359L133 377.75C130.062 375.406 125.938 375.406 123 377.75L96 399.359V304ZM240 480C240 488.822 232.824 496 224 496H32C23.176 496 16 488.822 16 480V320C16 311.178 23.176 304 32 304H80V416C80 419.078 81.75 421.875 84.531 423.203C87.25 424.531 90.594 424.172 93 422.25L128 394.25L163 422.25C164.438 423.406 166.219 424 168 424C169.188 424 170.375 423.734 171.469 423.203C174.25 421.875 176 419.078 176 416V304H224C232.824 304 240 311.178 240 320V480ZM544 288H352C334.328 288 320 302.326 320 320V480C320 497.672 334.328 512 352 512H544C561.672 512 576 497.672 576 480V320C576 302.326 561.672 288 544 288ZM416 304H480V399.359L453 377.75C450.062 375.406 445.938 375.406 443 377.75L416 399.359V304ZM560 480C560 488.822 552.824 496 544 496H352C343.176 496 336 488.822 336 480V320C336 311.178 343.176 304 352 304H400V416C400 419.078 401.75 421.875 404.531 423.203C407.25 424.531 410.594 424.172 413 422.25L448 394.25L483 422.25C484.438 423.406 486.219 424 488 424C489.188 424 490.375 423.734 491.469 423.203C494.25 421.875 496 419.078 496 416V304H544C552.824 304 560 311.178 560 320V480ZM192 224H384C401.672 224 416 209.672 416 192V32C416 14.326 401.672 0 384 0H192C174.328 0 160 14.326 160 32V192C160 209.672 174.328 224 192 224ZM256 16H320V111.359L293 89.75C290.062 87.406 285.938 87.406 283 89.75L256 111.359V16ZM176 32C176 23.178 183.176 16 192 16H240V128C240 131.078 241.75 133.875 244.531 135.203C247.25 136.516 250.594 136.172 253 134.25L288 106.25L323 134.25C324.438 135.406 326.219 136 328 136C329.188 136 330.375 135.734 331.469 135.203C334.25 133.875 336 131.078 336 128V16H384C392.824 16 400 23.178 400 32V192C400 200.822 392.824 208 384 208H192C183.176 208 176 200.822 176 192V32Z" />
        </Icon>
    </>
}
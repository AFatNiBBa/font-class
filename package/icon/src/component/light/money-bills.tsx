
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `money-bills` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/money-bills?s=light money-bills}
 * @preview ![money-bills](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjggMTEyQzMyMy44MTggMTEyIDI4OCAxNTQuOTggMjg4IDIwOFMzMjMuODE4IDMwNCAzNjggMzA0QzQxMi4xODQgMzA0IDQ0OCAyNjEuMDIgNDQ4IDIwOFM0MTIuMTg0IDExMiAzNjggMTEyWk0zNjggMjcyQzM0MS45ODIgMjcyIDMyMCAyNDIuNjkxIDMyMCAyMDhTMzQxLjk4MiAxNDQgMzY4IDE0NEMzOTQuMDIgMTQ0IDQxNiAxNzMuMzA5IDQxNiAyMDhTMzk0LjAyIDI3MiAzNjggMjcyWk01MjggNDQ4SDk2QzYwLjY1NCA0NDggMzIgNDE5LjM0NiAzMiAzODRWMTEyQzMyIDEwMy4xNjQgMjQuODM2IDk2IDE2IDk2UzAgMTAzLjE2NCAwIDExMlYzODRDMCA0MzcuMDIgNDIuOTggNDgwIDk2IDQ4MEg1MjhDNTM2LjgzNiA0ODAgNTQ0IDQ3Mi44MzYgNTQ0IDQ2NFM1MzYuODM2IDQ0OCA1MjggNDQ4Wk01NzYgMzJIMTYwQzEyNC42NTQgMzIgOTYgNjAuNjUyIDk2IDk2VjMyMEM5NiAzNTUuMzQ2IDEyNC42NTQgMzg0IDE2MCAzODRINTc2QzYxMS4zNDggMzg0IDY0MCAzNTUuMzQ2IDY0MCAzMjBWOTZDNjQwIDYwLjY1MiA2MTEuMzQ4IDMyIDU3NiAzMlpNMTI4IDk2QzEyOCA3OC4zNTUgMTQyLjM1NSA2NCAxNjAgNjRIMTkyQzE5MiA5OS4yOTcgMTYzLjI4MSAxMjggMTI4IDEyOFY5NlpNMTYwIDM1MkMxNDIuMzU1IDM1MiAxMjggMzM3LjY0NSAxMjggMzIwVjI4OEMxNjMuMjgxIDI4OCAxOTIgMzE2LjcwMyAxOTIgMzUySDE2MFpNNjA4IDMyMEM2MDggMzM3LjY0NSA1OTMuNjQ1IDM1MiA1NzYgMzUySDU0NEM1NDQgMzE2LjcwMyA1NzIuNzE5IDI4OCA2MDggMjg4VjMyMFpNNjA4IDI1NkM1NTUuMDYyIDI1NiA1MTIgMjk5LjA2MiA1MTIgMzUySDIyNEMyMjQgMjk5LjA2MiAxODAuOTM4IDI1NiAxMjggMjU2VjE2MEMxODAuOTM4IDE2MCAyMjQgMTE2LjkzOCAyMjQgNjRINTEyQzUxMiAxMTYuOTM4IDU1NS4wNjIgMTYwIDYwOCAxNjBWMjU2Wk02MDggMTI4QzU3Mi43MTkgMTI4IDU0NCA5OS4yOTcgNTQ0IDY0SDU3NkM1OTMuNjQ1IDY0IDYwOCA3OC4zNTUgNjA4IDk2VjEyOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function MoneyBills(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M368 112C323.818 112 288 154.98 288 208S323.818 304 368 304C412.184 304 448 261.02 448 208S412.184 112 368 112ZM368 272C341.982 272 320 242.691 320 208S341.982 144 368 144C394.02 144 416 173.309 416 208S394.02 272 368 272ZM528 448H96C60.654 448 32 419.346 32 384V112C32 103.164 24.836 96 16 96S0 103.164 0 112V384C0 437.02 42.98 480 96 480H528C536.836 480 544 472.836 544 464S536.836 448 528 448ZM576 32H160C124.654 32 96 60.652 96 96V320C96 355.346 124.654 384 160 384H576C611.348 384 640 355.346 640 320V96C640 60.652 611.348 32 576 32ZM128 96C128 78.355 142.355 64 160 64H192C192 99.297 163.281 128 128 128V96ZM160 352C142.355 352 128 337.645 128 320V288C163.281 288 192 316.703 192 352H160ZM608 320C608 337.645 593.645 352 576 352H544C544 316.703 572.719 288 608 288V320ZM608 256C555.062 256 512 299.062 512 352H224C224 299.062 180.938 256 128 256V160C180.938 160 224 116.938 224 64H512C512 116.938 555.062 160 608 160V256ZM608 128C572.719 128 544 99.297 544 64H576C593.645 64 608 78.355 608 96V128Z" />
        </Icon>
    </>
}
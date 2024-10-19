
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hand-dots` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-dots?s=duotone hand-dots}
 * @preview ![hand-dots](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ0OCA5NkM0MzAuMzI4IDk2IDQxNiAxMTAuMzI4IDQxNiAxMjhWMjQwQzQxNiAyNDguODM2IDQwOC44MzYgMjU2IDQwMCAyNTZTMzg0IDI0OC44MzYgMzg0IDI0MFY2NEMzODQgNDYuMzI4IDM2OS42NzIgMzIgMzUyIDMyUzMyMCA0Ni4zMjggMzIwIDY0VjI0MEMzMjAgMjQ4LjgzNiAzMTIuODM2IDI1NiAzMDQgMjU2UzI4OCAyNDguODM2IDI4OCAyNDBWMzJDMjg4IDE0LjMyOCAyNzMuNjcyIDAgMjU2IDBTMjI0IDE0LjMyOCAyMjQgMzJWMjQwQzIyNCAyNDguODM2IDIxNi44MzYgMjU2IDIwOCAyNTZTMTkyIDI0OC44MzYgMTkyIDI0MFY2NEMxOTIgNDYuMzI4IDE3Ny42NzIgMzIgMTYwIDMyUzEyOCA0Ni4zMjggMTI4IDY0VjM0My40MzhMNjguMjgxIDI4My43MTlDNjAuNDY5IDI3NS45MDYgNTAuMjM0IDI3MiA0MCAyNzJDMTguNjg0IDI3MiAwIDI4OS4xNjMgMCAzMTJDMCAzMjIuMjM0IDMuOTA2IDMzMi40NjkgMTEuNzE5IDM0MC4yODFMMTI0Ljg1OSA0NTMuNDIyQzE2Mi42MjUgNDkxLjIwMyAyMTIuODU5IDUxMiAyNjYuMjgxIDUxMkgzMDRDNDAxLjA0NyA1MTIgNDgwIDQzMy4wNDcgNDgwIDMzNlYxMjhDNDgwIDExMC4zMjggNDY1LjY3MiA5NiA0NDggOTZaTTE5MiA0MTZDMTgzLjE2NCA0MTYgMTc2IDQwOC44MzYgMTc2IDQwMEMxNzYgMzkxLjE2MiAxODMuMTY0IDM4NCAxOTIgMzg0UzIwOCAzOTEuMTYyIDIwOCA0MDBDMjA4IDQwOC44MzYgMjAwLjgzNiA0MTYgMTkyIDQxNlpNMjU2IDQ0OEMyNDcuMTY0IDQ0OCAyNDAgNDQwLjgzNiAyNDAgNDMyQzI0MCA0MjMuMTYyIDI0Ny4xNjQgNDE2IDI1NiA0MTZTMjcyIDQyMy4xNjIgMjcyIDQzMkMyNzIgNDQwLjgzNiAyNjQuODM2IDQ0OCAyNTYgNDQ4Wk0yNTYgMzUyQzI0Ny4xNjQgMzUyIDI0MCAzNDQuODM2IDI0MCAzMzZDMjQwIDMyNy4xNjIgMjQ3LjE2NCAzMjAgMjU2IDMyMFMyNzIgMzI3LjE2MiAyNzIgMzM2QzI3MiAzNDQuODM2IDI2NC44MzYgMzUyIDI1NiAzNTJaTTMyMCAzODRDMzExLjE2NCAzODQgMzA0IDM3Ni44MzYgMzA0IDM2OEMzMDQgMzU5LjE2MiAzMTEuMTY0IDM1MiAzMjAgMzUyUzMzNiAzNTkuMTYyIDMzNiAzNjhDMzM2IDM3Ni44MzYgMzI4LjgzNiAzODQgMzIwIDM4NFpNMzUyIDQ0OEMzNDMuMTY0IDQ0OCAzMzYgNDQwLjgzNiAzMzYgNDMyQzMzNiA0MjMuMTYyIDM0My4xNjQgNDE2IDM1MiA0MTZTMzY4IDQyMy4xNjIgMzY4IDQzMkMzNjggNDQwLjgzNiAzNjAuODM2IDQ0OCAzNTIgNDQ4Wk0zODQgMzUyQzM3NS4xNjQgMzUyIDM2OCAzNDQuODM2IDM2OCAzMzZDMzY4IDMyNy4xNjIgMzc1LjE2NCAzMjAgMzg0IDMyMFM0MDAgMzI3LjE2MiA0MDAgMzM2QzQwMCAzNDQuODM2IDM5Mi44MzYgMzUyIDM4NCAzNTJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTE5MiAzODRDMTgzLjE2NCAzODQgMTc2IDM5MS4xNjIgMTc2IDQwMEMxNzYgNDA4LjgzNiAxODMuMTY0IDQxNiAxOTIgNDE2UzIwOCA0MDguODM2IDIwOCA0MDBDMjA4IDM5MS4xNjIgMjAwLjgzNiAzODQgMTkyIDM4NFpNMzIwIDM1MkMzMTEuMTY0IDM1MiAzMDQgMzU5LjE2MiAzMDQgMzY4QzMwNCAzNzYuODM2IDMxMS4xNjQgMzg0IDMyMCAzODRTMzM2IDM3Ni44MzYgMzM2IDM2OEMzMzYgMzU5LjE2MiAzMjguODM2IDM1MiAzMjAgMzUyWk0zNTIgNDE2QzM0My4xNjQgNDE2IDMzNiA0MjMuMTYyIDMzNiA0MzJDMzM2IDQ0MC44MzYgMzQzLjE2NCA0NDggMzUyIDQ0OFMzNjggNDQwLjgzNiAzNjggNDMyQzM2OCA0MjMuMTYyIDM2MC44MzYgNDE2IDM1MiA0MTZaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HandDots(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M448 96C430.328 96 416 110.328 416 128V240C416 248.836 408.836 256 400 256S384 248.836 384 240V64C384 46.328 369.672 32 352 32S320 46.328 320 64V240C320 248.836 312.836 256 304 256S288 248.836 288 240V32C288 14.328 273.672 0 256 0S224 14.328 224 32V240C224 248.836 216.836 256 208 256S192 248.836 192 240V64C192 46.328 177.672 32 160 32S128 46.328 128 64V343.438L68.281 283.719C60.469 275.906 50.234 272 40 272C18.684 272 0 289.163 0 312C0 322.234 3.906 332.469 11.719 340.281L124.859 453.422C162.625 491.203 212.859 512 266.281 512H304C401.047 512 480 433.047 480 336V128C480 110.328 465.672 96 448 96ZM192 416C183.164 416 176 408.836 176 400C176 391.162 183.164 384 192 384S208 391.162 208 400C208 408.836 200.836 416 192 416ZM256 448C247.164 448 240 440.836 240 432C240 423.162 247.164 416 256 416S272 423.162 272 432C272 440.836 264.836 448 256 448ZM256 352C247.164 352 240 344.836 240 336C240 327.162 247.164 320 256 320S272 327.162 272 336C272 344.836 264.836 352 256 352ZM320 384C311.164 384 304 376.836 304 368C304 359.162 311.164 352 320 352S336 359.162 336 368C336 376.836 328.836 384 320 384ZM352 448C343.164 448 336 440.836 336 432C336 423.162 343.164 416 352 416S368 423.162 368 432C368 440.836 360.836 448 352 448ZM384 352C375.164 352 368 344.836 368 336C368 327.162 375.164 320 384 320S400 327.162 400 336C400 344.836 392.836 352 384 352Z" />
            <path d="M192 384C183.164 384 176 391.162 176 400C176 408.836 183.164 416 192 416S208 408.836 208 400C208 391.162 200.836 384 192 384ZM320 352C311.164 352 304 359.162 304 368C304 376.836 311.164 384 320 384S336 376.836 336 368C336 359.162 328.836 352 320 352ZM352 416C343.164 416 336 423.162 336 432C336 440.836 343.164 448 352 448S368 440.836 368 432C368 423.162 360.836 416 352 416Z" />
        </Icon>
    </>
}
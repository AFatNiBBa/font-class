
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `mars-stroke-right` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mars-stroke-right?s=regular mars-stroke-right}
 * @preview ![mars-stroke-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MTYuOTI0IDIzOC44OTZMNTM3LjIzIDE1OS4wODZDNTI3Ljc5NSAxNDkuNjM3IDUxMi41MTIgMTQ5LjYzNyA1MDMuMDc2IDE1OS4wODZTNDkzLjY0MSAxODMuODQyIDUwMy4wNzYgMTkzLjI5MUw1NDEuNzI3IDIzMkg0NjRWMTg0QzQ2NCAxNzAuNzUgNDUzLjI1IDE2MCA0NDAgMTYwUzQxNiAxNzAuNzUgNDE2IDE4NFYyMzJIMzgyLjE3NkMzNzAuNDQ1IDE0Ni4xODIgMjk3LjA0MSA4MCAyMDggODBDMTEwLjc5OSA4MCAzMiAxNTguNzk5IDMyIDI1NlMxMTAuNzk5IDQzMiAyMDggNDMyQzI5Ny4wNDEgNDMyIDM3MC40NDUgMzY1LjgxOCAzODIuMTc2IDI4MEg0MTZWMzI4QzQxNiAzNDEuMjUgNDI2Ljc1IDM1MiA0NDAgMzUyUzQ2NCAzNDEuMjUgNDY0IDMyOFYyODBINTQxLjcyN0w1MDMuMDc2IDMxOC43MDlDNDkzLjY0MSAzMjguMTU2IDQ5My42NDEgMzQzLjQ2NSA1MDMuMDc2IDM1Mi45MTRDNTA3Ljc5MyAzNTcuNjM3IDUxMy45NzMgMzYwIDUyMC4xNTIgMzYwUzUzMi41MTQgMzU3LjYzNyA1MzcuMjMgMzUyLjkxNEw2MTYuOTI0IDI3My4xMDJDNjI2LjM1OSAyNjMuNjUyIDYyNi4zNTkgMjQ4LjM0NiA2MTYuOTI0IDIzOC44OTZaTTIwOCAzODRDMTM3LjQyIDM4NCA4MCAzMjYuNTggODAgMjU2UzEzNy40MiAxMjggMjA4IDEyOFMzMzYgMTg1LjQyIDMzNiAyNTZTMjc4LjU4IDM4NCAyMDggMzg0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MarsStrokeRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M616.924 238.896L537.23 159.086C527.795 149.637 512.512 149.637 503.076 159.086S493.641 183.842 503.076 193.291L541.727 232H464V184C464 170.75 453.25 160 440 160S416 170.75 416 184V232H382.176C370.445 146.182 297.041 80 208 80C110.799 80 32 158.799 32 256S110.799 432 208 432C297.041 432 370.445 365.818 382.176 280H416V328C416 341.25 426.75 352 440 352S464 341.25 464 328V280H541.727L503.076 318.709C493.641 328.156 493.641 343.465 503.076 352.914C507.793 357.637 513.973 360 520.152 360S532.514 357.637 537.23 352.914L616.924 273.102C626.359 263.652 626.359 248.346 616.924 238.896ZM208 384C137.42 384 80 326.58 80 256S137.42 128 208 128S336 185.42 336 256S278.58 384 208 384Z" />
        </Icon>
    </>
}
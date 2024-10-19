
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-check` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-check?s=thin square-check}
 * @preview ![square-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzAuMzQ0IDE3MC4zNDRMMTkyIDMwOC42ODhMMTE3LjY1NiAyMzQuMzQ0QzExNC41MzEgMjMxLjIxOSAxMDkuNDY5IDIzMS4yMTkgMTA2LjM0NCAyMzQuMzQ0UzEwMy4yMTkgMjQyLjUzMSAxMDYuMzQ0IDI0NS42NTZMMTg2LjM0NCAzMjUuNjU2QzE4Ny45MDYgMzI3LjIxOSAxODkuOTUzIDMyOCAxOTIgMzI4UzE5Ni4wOTQgMzI3LjIxOSAxOTcuNjU2IDMyNS42NTZMMzQxLjY1NiAxODEuNjU2QzM0NC43ODEgMTc4LjUzMSAzNDQuNzgxIDE3My40NjkgMzQxLjY1NiAxNzAuMzQ0UzMzMy40NjkgMTY3LjIxOSAzMzAuMzQ0IDE3MC4zNDRaTTM4NCAzMkg2NEMyOC42NTQgMzIgMCA2MC42NTIgMCA5NlY0MTZDMCA0NTEuMzQ2IDI4LjY1NCA0ODAgNjQgNDgwSDM4NEM0MTkuMzQ2IDQ4MCA0NDggNDUxLjM0NiA0NDggNDE2Vjk2QzQ0OCA2MC42NTIgNDE5LjM0NiAzMiAzODQgMzJaTTQzMiA0MTZDNDMyIDQ0Mi40NjcgNDEwLjQ2NyA0NjQgMzg0IDQ2NEg2NEMzNy41MzMgNDY0IDE2IDQ0Mi40NjcgMTYgNDE2Vjk2QzE2IDY5LjUzMyAzNy41MzMgNDggNjQgNDhIMzg0QzQxMC40NjcgNDggNDMyIDY5LjUzMyA0MzIgOTZWNDE2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareCheck(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M330.344 170.344L192 308.688L117.656 234.344C114.531 231.219 109.469 231.219 106.344 234.344S103.219 242.531 106.344 245.656L186.344 325.656C187.906 327.219 189.953 328 192 328S196.094 327.219 197.656 325.656L341.656 181.656C344.781 178.531 344.781 173.469 341.656 170.344S333.469 167.219 330.344 170.344ZM384 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.652 419.346 32 384 32ZM432 416C432 442.467 410.467 464 384 464H64C37.533 464 16 442.467 16 416V96C16 69.533 37.533 48 64 48H384C410.467 48 432 69.533 432 96V416Z" />
        </Icon>
    </>
}
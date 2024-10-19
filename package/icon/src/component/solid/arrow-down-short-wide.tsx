
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-down-short-wide` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-short-wide?s=solid arrow-down-short-wide}
 * @preview ![arrow-down-short-wide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgMjI0SDQxNS45OThDNDMzLjY3MSAyMjQgNDQ3Ljk5OCAyMDkuNjcyIDQ0Ny45OTggMTkyUzQzMy42NzEgMTYwIDQxNS45OTggMTYwSDMyMEMzMDIuMzI2IDE2MCAyODggMTc0LjMyOCAyODggMTkyUzMwMi4zMjYgMjI0IDMyMCAyMjRaTTMyMCAzNTJINDc5Ljk5OEM0OTcuNjcxIDM1MiA1MTEuOTk4IDMzNy42NzIgNTExLjk5OCAzMjBTNDk3LjY3MSAyODggNDc5Ljk5OCAyODhIMzIwQzMwMi4zMjYgMjg4IDI4OCAzMDIuMzI4IDI4OCAzMjBTMzAyLjMyNiAzNTIgMzIwIDM1MlpNMzIwIDk2SDM1MkMzNjkuNjczIDk2IDM4NCA4MS42NzIgMzg0IDY0UzM2OS42NzMgMzIgMzUyIDMySDMyMEMzMDIuMzI2IDMyIDI4OCA0Ni4zMjggMjg4IDY0UzMwMi4zMjYgOTYgMzIwIDk2Wk01NDMuOTk4IDQxNkgzMjBDMzAyLjMyNiA0MTYgMjg4IDQzMC4zMjggMjg4IDQ0OFMzMDIuMzI2IDQ4MCAzMjAgNDgwSDU0My45OThDNTYxLjY3MSA0ODAgNTc1Ljk5OCA0NjUuNjcyIDU3NS45OTggNDQ4UzU2MS42NzEgNDE2IDU0My45OTggNDE2Wk0xOTIuNDA0IDMzMC42NjRMMTYwIDM2Ni4wNjJWNjQuMDMxQzE2MCA0Ni4zMjggMTQ1LjY3MSAzMiAxMjggMzJTOTYgNDYuMzI4IDk2IDY0LjAzMVYzNjYuMDYzTDYzLjU5NSAzMzAuNjY0QzU3LjI4MyAzMjMuNzgxIDQ4LjY1OCAzMjAuMjgxIDM5Ljk4NiAzMjAuMjgxQzMyLjI2NyAzMjAuMjgxIDI0LjUxNyAzMjMuMDYzIDE4LjM3NyAzMjguNjk1QzUuMzQ3IDM0MC42NDggNC40NzIgMzYwLjkxNCAxNi40MDggMzczLjk2MUwxMDQuNDA2IDQ3MC4wNTVDMTE2LjUzMSA0ODMuMzEzIDEzOS40NjggNDgzLjMxMyAxNTEuNTkzIDQ3MC4wNTVMMjM5LjU5MSAzNzMuOTYxQzI1MS41MjcgMzYwLjkxNCAyNTAuNjUyIDM0MC42NDggMjM3LjYyMyAzMjguNjk1QzIyNC42MDcgMzE2Ljc1IDIwNC4zNTcgMzE3LjY1NiAxOTIuNDA0IDMzMC42NjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ArrowDownShortWide(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M320 224H415.998C433.671 224 447.998 209.672 447.998 192S433.671 160 415.998 160H320C302.326 160 288 174.328 288 192S302.326 224 320 224ZM320 352H479.998C497.671 352 511.998 337.672 511.998 320S497.671 288 479.998 288H320C302.326 288 288 302.328 288 320S302.326 352 320 352ZM320 96H352C369.673 96 384 81.672 384 64S369.673 32 352 32H320C302.326 32 288 46.328 288 64S302.326 96 320 96ZM543.998 416H320C302.326 416 288 430.328 288 448S302.326 480 320 480H543.998C561.671 480 575.998 465.672 575.998 448S561.671 416 543.998 416ZM192.404 330.664L160 366.062V64.031C160 46.328 145.671 32 128 32S96 46.328 96 64.031V366.063L63.595 330.664C57.283 323.781 48.658 320.281 39.986 320.281C32.267 320.281 24.517 323.063 18.377 328.695C5.347 340.648 4.472 360.914 16.408 373.961L104.406 470.055C116.531 483.313 139.468 483.313 151.593 470.055L239.591 373.961C251.527 360.914 250.652 340.648 237.623 328.695C224.607 316.75 204.357 317.656 192.404 330.664Z" />
        </Icon>
    </>
}
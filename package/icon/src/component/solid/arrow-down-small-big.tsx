
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-down-small-big` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-small-big?s=solid arrow-down-small-big}
 * @preview ![arrow-down-small-big](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgMTkySDQxNkM0MzMuNjczIDE5MiA0NDggMTc3LjY3MiA0NDggMTYwVjY0QzQ0OCA0Ni4zOTggNDMzLjU5OSAzMiA0MTYgMzJIMzIwQzMwMi4zMjYgMzIgMjg4IDQ2LjMyOCAyODggNjRWMTYwQzI4OCAxNzcuNjcyIDMwMi4zMjYgMTkyIDMyMCAxOTJaTTQ4MCAyNTZIMzIwQzMwMi4zMjYgMjU2IDI4OCAyNzAuMzI4IDI4OCAyODhWNDQ4QzI4OCA0NjUuNjcyIDMwMi4zMjYgNDgwIDMyMCA0ODBINDgwQzQ5Ny42NzMgNDgwIDUxMiA0NjUuNjcyIDUxMiA0NDhWMjg4QzUxMiAyNzAuMzI4IDQ5Ny42NzMgMjU2IDQ4MCAyNTZaTTE5Mi40MDQgMzMwLjY2NEwxNjAgMzY2LjA2MlY2NC4wMzFDMTYwIDQ2LjMyOCAxNDUuNjcxIDMyIDEyOCAzMlM5NiA0Ni4zMjggOTYgNjQuMDMxVjM2Ni4wNjNMNjMuNTk1IDMzMC42NjRDNTcuMjgzIDMyMy43ODEgNDguNjU4IDMyMC4yODEgMzkuOTg2IDMyMC4yODFDMzIuMjY3IDMyMC4yODEgMjQuNTE3IDMyMy4wNjMgMTguMzc3IDMyOC42OTVDNS4zNDcgMzQwLjY0OCA0LjQ3MiAzNjAuOTE0IDE2LjQwOCAzNzMuOTYxTDEwNC40MDYgNDcwLjA1NUMxMTYuNTMxIDQ4My4zMTMgMTM5LjQ2OCA0ODMuMzEzIDE1MS41OTMgNDcwLjA1NUwyMzkuNTkxIDM3My45NjFDMjUxLjUyNyAzNjAuOTE0IDI1MC42NTIgMzQwLjY0OCAyMzcuNjIzIDMyOC42OTVDMjI0LjYwNyAzMTYuNzUgMjA0LjM1NyAzMTcuNjU2IDE5Mi40MDQgMzMwLjY2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ArrowDownSmallBig(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M320 192H416C433.673 192 448 177.672 448 160V64C448 46.398 433.599 32 416 32H320C302.326 32 288 46.328 288 64V160C288 177.672 302.326 192 320 192ZM480 256H320C302.326 256 288 270.328 288 288V448C288 465.672 302.326 480 320 480H480C497.673 480 512 465.672 512 448V288C512 270.328 497.673 256 480 256ZM192.404 330.664L160 366.062V64.031C160 46.328 145.671 32 128 32S96 46.328 96 64.031V366.063L63.595 330.664C57.283 323.781 48.658 320.281 39.986 320.281C32.267 320.281 24.517 323.063 18.377 328.695C5.347 340.648 4.472 360.914 16.408 373.961L104.406 470.055C116.531 483.313 139.468 483.313 151.593 470.055L239.591 373.961C251.527 360.914 250.652 340.648 237.623 328.695C224.607 316.75 204.357 317.656 192.404 330.664Z" />
        </Icon>
    </>
}
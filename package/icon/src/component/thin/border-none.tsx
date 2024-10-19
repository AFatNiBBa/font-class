
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `border-none` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/border-none?s=thin border-none}
 * @preview ![border-none](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjggMjQwQzExOS4xOCAyNDAgMTEyIDI0Ny4xOCAxMTIgMjU2UzExOS4xOCAyNzIgMTI4IDI3MlMxNDQgMjY0LjgyIDE0NCAyNTZTMTM2LjgyIDI0MCAxMjggMjQwWk0xMjggNDMyQzExOS4xOCA0MzIgMTEyIDQzOS4xOCAxMTIgNDQ4UzExOS4xOCA0NjQgMTI4IDQ2NFMxNDQgNDU2LjgyIDE0NCA0NDhTMTM2LjgyIDQzMiAxMjggNDMyWk0xMjggNDhDMTE5LjE4IDQ4IDExMiA1NS4xOCAxMTIgNjRTMTE5LjE4IDgwIDEyOCA4MFMxNDQgNzIuODIgMTQ0IDY0UzEzNi44MiA0OCAxMjggNDhaTTMyIDQ4QzIzLjE4IDQ4IDE2IDU1LjE4IDE2IDY0UzIzLjE4IDgwIDMyIDgwUzQ4IDcyLjgyIDQ4IDY0UzQwLjgyIDQ4IDMyIDQ4Wk0zMiAzMzZDMjMuMTggMzM2IDE2IDM0My4xOCAxNiAzNTJTMjMuMTggMzY4IDMyIDM2OFM0OCAzNjAuODIgNDggMzUyUzQwLjgyIDMzNiAzMiAzMzZaTTQxNiA4MEM0MjQuODIgODAgNDMyIDcyLjgyIDQzMiA2NFM0MjQuODIgNDggNDE2IDQ4UzQwMCA1NS4xOCA0MDAgNjRTNDA3LjE4IDgwIDQxNiA4MFpNMzIgNDMyQzIzLjE4IDQzMiAxNiA0MzkuMTggMTYgNDQ4UzIzLjE4IDQ2NCAzMiA0NjRTNDggNDU2LjgyIDQ4IDQ0OFM0MC44MiA0MzIgMzIgNDMyWk0zMiAxNDRDMjMuMTggMTQ0IDE2IDE1MS4xOCAxNiAxNjBTMjMuMTggMTc2IDMyIDE3NlM0OCAxNjguODIgNDggMTYwUzQwLjgyIDE0NCAzMiAxNDRaTTMyIDI0MEMyMy4xOCAyNDAgMTYgMjQ3LjE4IDE2IDI1NlMyMy4xOCAyNzIgMzIgMjcyUzQ4IDI2NC44MiA0OCAyNTZTNDAuODIgMjQwIDMyIDI0MFpNMjI0IDQzMkMyMTUuMTggNDMyIDIwOCA0MzkuMTggMjA4IDQ0OFMyMTUuMTggNDY0IDIyNCA0NjRTMjQwIDQ1Ni44MiAyNDAgNDQ4UzIzMi44MiA0MzIgMjI0IDQzMlpNMjI0IDI0MEMyMTUuMTggMjQwIDIwOCAyNDcuMTggMjA4IDI1NlMyMTUuMTggMjcyIDIyNCAyNzJTMjQwIDI2NC44MiAyNDAgMjU2UzIzMi44MiAyNDAgMjI0IDI0MFpNNDE2IDMzNkM0MDcuMTggMzM2IDQwMCAzNDMuMTggNDAwIDM1MlM0MDcuMTggMzY4IDQxNiAzNjhTNDMyIDM2MC44MiA0MzIgMzUyUzQyNC44MiAzMzYgNDE2IDMzNlpNMjI0IDMzNkMyMTUuMTggMzM2IDIwOCAzNDMuMTggMjA4IDM1MlMyMTUuMTggMzY4IDIyNCAzNjhTMjQwIDM2MC44MiAyNDAgMzUyUzIzMi44MiAzMzYgMjI0IDMzNlpNNDE2IDE0NEM0MDcuMTggMTQ0IDQwMCAxNTEuMTggNDAwIDE2MFM0MDcuMTggMTc2IDQxNiAxNzZTNDMyIDE2OC44MiA0MzIgMTYwUzQyNC44MiAxNDQgNDE2IDE0NFpNMzIwIDQ4QzMxMS4xOCA0OCAzMDQgNTUuMTggMzA0IDY0UzMxMS4xOCA4MCAzMjAgODBTMzM2IDcyLjgyIDMzNiA2NFMzMjguODIgNDggMzIwIDQ4Wk00MTYgMjQwQzQwNy4xOCAyNDAgNDAwIDI0Ny4xOCA0MDAgMjU2UzQwNy4xOCAyNzIgNDE2IDI3MlM0MzIgMjY0LjgyIDQzMiAyNTZTNDI0LjgyIDI0MCA0MTYgMjQwWk00MTYgNDMyQzQwNy4xOCA0MzIgNDAwIDQzOS4xOCA0MDAgNDQ4UzQwNy4xOCA0NjQgNDE2IDQ2NFM0MzIgNDU2LjgyIDQzMiA0NDhTNDI0LjgyIDQzMiA0MTYgNDMyWk0yMjQgMTQ0QzIxNS4xOCAxNDQgMjA4IDE1MS4xOCAyMDggMTYwUzIxNS4xOCAxNzYgMjI0IDE3NlMyNDAgMTY4LjgyIDI0MCAxNjBTMjMyLjgyIDE0NCAyMjQgMTQ0Wk0yMjQgNDhDMjE1LjE4IDQ4IDIwOCA1NS4xOCAyMDggNjRTMjE1LjE4IDgwIDIyNCA4MFMyNDAgNzIuODIgMjQwIDY0UzIzMi44MiA0OCAyMjQgNDhaTTMyMCAyNDBDMzExLjE4IDI0MCAzMDQgMjQ3LjE4IDMwNCAyNTZTMzExLjE4IDI3MiAzMjAgMjcyUzMzNiAyNjQuODIgMzM2IDI1NlMzMjguODIgMjQwIDMyMCAyNDBaTTMyMCA0MzJDMzExLjE4IDQzMiAzMDQgNDM5LjE4IDMwNCA0NDhTMzExLjE4IDQ2NCAzMjAgNDY0UzMzNiA0NTYuODIgMzM2IDQ0OFMzMjguODIgNDMyIDMyMCA0MzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BorderNone(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M128 240C119.18 240 112 247.18 112 256S119.18 272 128 272S144 264.82 144 256S136.82 240 128 240ZM128 432C119.18 432 112 439.18 112 448S119.18 464 128 464S144 456.82 144 448S136.82 432 128 432ZM128 48C119.18 48 112 55.18 112 64S119.18 80 128 80S144 72.82 144 64S136.82 48 128 48ZM32 48C23.18 48 16 55.18 16 64S23.18 80 32 80S48 72.82 48 64S40.82 48 32 48ZM32 336C23.18 336 16 343.18 16 352S23.18 368 32 368S48 360.82 48 352S40.82 336 32 336ZM416 80C424.82 80 432 72.82 432 64S424.82 48 416 48S400 55.18 400 64S407.18 80 416 80ZM32 432C23.18 432 16 439.18 16 448S23.18 464 32 464S48 456.82 48 448S40.82 432 32 432ZM32 144C23.18 144 16 151.18 16 160S23.18 176 32 176S48 168.82 48 160S40.82 144 32 144ZM32 240C23.18 240 16 247.18 16 256S23.18 272 32 272S48 264.82 48 256S40.82 240 32 240ZM224 432C215.18 432 208 439.18 208 448S215.18 464 224 464S240 456.82 240 448S232.82 432 224 432ZM224 240C215.18 240 208 247.18 208 256S215.18 272 224 272S240 264.82 240 256S232.82 240 224 240ZM416 336C407.18 336 400 343.18 400 352S407.18 368 416 368S432 360.82 432 352S424.82 336 416 336ZM224 336C215.18 336 208 343.18 208 352S215.18 368 224 368S240 360.82 240 352S232.82 336 224 336ZM416 144C407.18 144 400 151.18 400 160S407.18 176 416 176S432 168.82 432 160S424.82 144 416 144ZM320 48C311.18 48 304 55.18 304 64S311.18 80 320 80S336 72.82 336 64S328.82 48 320 48ZM416 240C407.18 240 400 247.18 400 256S407.18 272 416 272S432 264.82 432 256S424.82 240 416 240ZM416 432C407.18 432 400 439.18 400 448S407.18 464 416 464S432 456.82 432 448S424.82 432 416 432ZM224 144C215.18 144 208 151.18 208 160S215.18 176 224 176S240 168.82 240 160S232.82 144 224 144ZM224 48C215.18 48 208 55.18 208 64S215.18 80 224 80S240 72.82 240 64S232.82 48 224 48ZM320 240C311.18 240 304 247.18 304 256S311.18 272 320 272S336 264.82 336 256S328.82 240 320 240ZM320 432C311.18 432 304 439.18 304 448S311.18 464 320 464S336 456.82 336 448S328.82 432 320 432Z" />
        </Icon>
    </>
}
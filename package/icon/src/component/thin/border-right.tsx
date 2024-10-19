
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `border-right` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/border-right?s=thin border-right}
 * @preview ![border-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgNDMyQzIxNS4xOCA0MzIgMjA4IDQzOS4xOCAyMDggNDQ4UzIxNS4xOCA0NjQgMjI0IDQ2NFMyNDAgNDU2LjgyIDI0MCA0NDhTMjMyLjgyIDQzMiAyMjQgNDMyWk0xMjggNDMyQzExOS4xOCA0MzIgMTEyIDQzOS4xOCAxMTIgNDQ4UzExOS4xOCA0NjQgMTI4IDQ2NFMxNDQgNDU2LjgyIDE0NCA0NDhTMTM2LjgyIDQzMiAxMjggNDMyWk0xMjggMjQwQzExOS4xOCAyNDAgMTEyIDI0Ny4xOCAxMTIgMjU2UzExOS4xOCAyNzIgMTI4IDI3MlMxNDQgMjY0LjgyIDE0NCAyNTZTMTM2LjgyIDI0MCAxMjggMjQwWk0xMjggNDhDMTE5LjE4IDQ4IDExMiA1NS4xOCAxMTIgNjRTMTE5LjE4IDgwIDEyOCA4MFMxNDQgNzIuODIgMTQ0IDY0UzEzNi44MiA0OCAxMjggNDhaTTMyIDQ4QzIzLjE4IDQ4IDE2IDU1LjE4IDE2IDY0UzIzLjE4IDgwIDMyIDgwUzQ4IDcyLjgyIDQ4IDY0UzQwLjgyIDQ4IDMyIDQ4Wk0zMiA0MzJDMjMuMTggNDMyIDE2IDQzOS4xOCAxNiA0NDhTMjMuMTggNDY0IDMyIDQ2NFM0OCA0NTYuODIgNDggNDQ4UzQwLjgyIDQzMiAzMiA0MzJaTTMyIDE0NEMyMy4xOCAxNDQgMTYgMTUxLjE4IDE2IDE2MFMyMy4xOCAxNzYgMzIgMTc2UzQ4IDE2OC44MiA0OCAxNjBTNDAuODIgMTQ0IDMyIDE0NFpNMzIgMjQwQzIzLjE4IDI0MCAxNiAyNDcuMTggMTYgMjU2UzIzLjE4IDI3MiAzMiAyNzJTNDggMjY0LjgyIDQ4IDI1NlM0MC44MiAyNDAgMzIgMjQwWk0zMiAzMzZDMjMuMTggMzM2IDE2IDM0My4xOCAxNiAzNTJTMjMuMTggMzY4IDMyIDM2OFM0OCAzNjAuODIgNDggMzUyUzQwLjgyIDMzNiAzMiAzMzZaTTMyMCA0MzJDMzExLjE4IDQzMiAzMDQgNDM5LjE4IDMwNCA0NDhTMzExLjE4IDQ2NCAzMjAgNDY0UzMzNiA0NTYuODIgMzM2IDQ0OFMzMjguODIgNDMyIDMyMCA0MzJaTTMyMCAyNDBDMzExLjE4IDI0MCAzMDQgMjQ3LjE4IDMwNCAyNTZTMzExLjE4IDI3MiAzMjAgMjcyUzMzNiAyNjQuODIgMzM2IDI1NlMzMjguODIgMjQwIDMyMCAyNDBaTTIyNCAzMzZDMjE1LjE4IDMzNiAyMDggMzQzLjE4IDIwOCAzNTJTMjE1LjE4IDM2OCAyMjQgMzY4UzI0MCAzNjAuODIgMjQwIDM1MlMyMzIuODIgMzM2IDIyNCAzMzZaTTMyMCA0OEMzMTEuMTggNDggMzA0IDU1LjE4IDMwNCA2NFMzMTEuMTggODAgMzIwIDgwUzMzNiA3Mi44MiAzMzYgNjRTMzI4LjgyIDQ4IDMyMCA0OFpNMjI0IDI0MEMyMTUuMTggMjQwIDIwOCAyNDcuMTggMjA4IDI1NlMyMTUuMTggMjcyIDIyNCAyNzJTMjQwIDI2NC44MiAyNDAgMjU2UzIzMi44MiAyNDAgMjI0IDI0MFpNMjI0IDQ4QzIxNS4xOCA0OCAyMDggNTUuMTggMjA4IDY0UzIxNS4xOCA4MCAyMjQgODBTMjQwIDcyLjgyIDI0MCA2NFMyMzIuODIgNDggMjI0IDQ4Wk0yMjQgMTQ0QzIxNS4xOCAxNDQgMjA4IDE1MS4xOCAyMDggMTYwUzIxNS4xOCAxNzYgMjI0IDE3NlMyNDAgMTY4LjgyIDI0MCAxNjBTMjMyLjgyIDE0NCAyMjQgMTQ0Wk00NDAgMzJDNDM1LjU5NCAzMiA0MzIgMzUuNTc4IDQzMiA0MFY0NzJDNDMyIDQ3Ni40MjIgNDM1LjU5NCA0ODAgNDQwIDQ4MFM0NDggNDc2LjQyMiA0NDggNDcyVjQwQzQ0OCAzNS41NzggNDQ0LjQwNiAzMiA0NDAgMzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BorderRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224 432C215.18 432 208 439.18 208 448S215.18 464 224 464S240 456.82 240 448S232.82 432 224 432ZM128 432C119.18 432 112 439.18 112 448S119.18 464 128 464S144 456.82 144 448S136.82 432 128 432ZM128 240C119.18 240 112 247.18 112 256S119.18 272 128 272S144 264.82 144 256S136.82 240 128 240ZM128 48C119.18 48 112 55.18 112 64S119.18 80 128 80S144 72.82 144 64S136.82 48 128 48ZM32 48C23.18 48 16 55.18 16 64S23.18 80 32 80S48 72.82 48 64S40.82 48 32 48ZM32 432C23.18 432 16 439.18 16 448S23.18 464 32 464S48 456.82 48 448S40.82 432 32 432ZM32 144C23.18 144 16 151.18 16 160S23.18 176 32 176S48 168.82 48 160S40.82 144 32 144ZM32 240C23.18 240 16 247.18 16 256S23.18 272 32 272S48 264.82 48 256S40.82 240 32 240ZM32 336C23.18 336 16 343.18 16 352S23.18 368 32 368S48 360.82 48 352S40.82 336 32 336ZM320 432C311.18 432 304 439.18 304 448S311.18 464 320 464S336 456.82 336 448S328.82 432 320 432ZM320 240C311.18 240 304 247.18 304 256S311.18 272 320 272S336 264.82 336 256S328.82 240 320 240ZM224 336C215.18 336 208 343.18 208 352S215.18 368 224 368S240 360.82 240 352S232.82 336 224 336ZM320 48C311.18 48 304 55.18 304 64S311.18 80 320 80S336 72.82 336 64S328.82 48 320 48ZM224 240C215.18 240 208 247.18 208 256S215.18 272 224 272S240 264.82 240 256S232.82 240 224 240ZM224 48C215.18 48 208 55.18 208 64S215.18 80 224 80S240 72.82 240 64S232.82 48 224 48ZM224 144C215.18 144 208 151.18 208 160S215.18 176 224 176S240 168.82 240 160S232.82 144 224 144ZM440 32C435.594 32 432 35.578 432 40V472C432 476.422 435.594 480 440 480S448 476.422 448 472V40C448 35.578 444.406 32 440 32Z" />
        </Icon>
    </>
}
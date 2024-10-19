
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `border-center-v` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/border-center-v?s=thin border-center-v}
 * @preview ![border-center-v](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMiAxNDRDMjMuMTc4IDE0NCAxNiAxNTEuMTggMTYgMTYwUzIzLjE3OCAxNzYgMzIgMTc2UzQ4IDE2OC44MiA0OCAxNjBTNDAuODIyIDE0NCAzMiAxNDRaTTEyOCA0MzJDMTE5LjE3OCA0MzIgMTEyIDQzOS4xOCAxMTIgNDQ4UzExOS4xNzggNDY0IDEyOCA0NjRTMTQ0IDQ1Ni44MiAxNDQgNDQ4UzEzNi44MjIgNDMyIDEyOCA0MzJaTTMyIDI0MEMyMy4xNzggMjQwIDE2IDI0Ny4xOCAxNiAyNTZTMjMuMTc4IDI3MiAzMiAyNzJTNDggMjY0LjgyIDQ4IDI1NlM0MC44MjIgMjQwIDMyIDI0MFpNMTI4IDI0MEMxMTkuMTc4IDI0MCAxMTIgMjQ3LjE4IDExMiAyNTZTMTE5LjE3OCAyNzIgMTI4IDI3MlMxNDQgMjY0LjgyIDE0NCAyNTZTMTM2LjgyMiAyNDAgMTI4IDI0MFpNMzIgNDhDMjMuMTc4IDQ4IDE2IDU1LjE4IDE2IDY0UzIzLjE3OCA4MCAzMiA4MFM0OCA3Mi44MiA0OCA2NFM0MC44MjIgNDggMzIgNDhaTTMyIDMzNkMyMy4xNzggMzM2IDE2IDM0My4xOCAxNiAzNTJTMjMuMTc4IDM2OCAzMiAzNjhTNDggMzYwLjgyIDQ4IDM1MlM0MC44MjIgMzM2IDMyIDMzNlpNNDE2IDgwQzQyNC44MjIgODAgNDMyIDcyLjgyIDQzMiA2NFM0MjQuODIyIDQ4IDQxNiA0OFM0MDAgNTUuMTggNDAwIDY0UzQwNy4xNzggODAgNDE2IDgwWk0zMiA0MzJDMjMuMTc4IDQzMiAxNiA0MzkuMTggMTYgNDQ4UzIzLjE3OCA0NjQgMzIgNDY0UzQ4IDQ1Ni44MiA0OCA0NDhTNDAuODIyIDQzMiAzMiA0MzJaTTQxNiA0MzJDNDA3LjE3OCA0MzIgNDAwIDQzOS4xOCA0MDAgNDQ4UzQwNy4xNzggNDY0IDQxNiA0NjRTNDMyIDQ1Ni44MiA0MzIgNDQ4UzQyNC44MjIgNDMyIDQxNiA0MzJaTTQxNiAyNDBDNDA3LjE3OCAyNDAgNDAwIDI0Ny4xOCA0MDAgMjU2UzQwNy4xNzggMjcyIDQxNiAyNzJTNDMyIDI2NC44MiA0MzIgMjU2UzQyNC44MjIgMjQwIDQxNiAyNDBaTTEyOCA0OEMxMTkuMTc4IDQ4IDExMiA1NS4xOCAxMTIgNjRTMTE5LjE3OCA4MCAxMjggODBTMTQ0IDcyLjgyIDE0NCA2NFMxMzYuODIyIDQ4IDEyOCA0OFpNNDE2IDE0NEM0MDcuMTc4IDE0NCA0MDAgMTUxLjE4IDQwMCAxNjBTNDA3LjE3OCAxNzYgNDE2IDE3NlM0MzIgMTY4LjgyIDQzMiAxNjBTNDI0LjgyMiAxNDQgNDE2IDE0NFpNMzIwIDQ4QzMxMS4xNzggNDggMzA0IDU1LjE4IDMwNCA2NFMzMTEuMTc4IDgwIDMyMCA4MFMzMzYgNzIuODIgMzM2IDY0UzMyOC44MjIgNDggMzIwIDQ4Wk00MTYgMzM2QzQwNy4xNzggMzM2IDQwMCAzNDMuMTggNDAwIDM1MlM0MDcuMTc4IDM2OCA0MTYgMzY4UzQzMiAzNjAuODIgNDMyIDM1MlM0MjQuODIyIDMzNiA0MTYgMzM2Wk0zMjAgNDMyQzMxMS4xNzggNDMyIDMwNCA0MzkuMTggMzA0IDQ0OFMzMTEuMTc4IDQ2NCAzMjAgNDY0UzMzNiA0NTYuODIgMzM2IDQ0OFMzMjguODIyIDQzMiAzMjAgNDMyWk0zMjAgMjQwQzMxMS4xNzggMjQwIDMwNCAyNDcuMTggMzA0IDI1NlMzMTEuMTc4IDI3MiAzMjAgMjcyUzMzNiAyNjQuODIgMzM2IDI1NlMzMjguODIyIDI0MCAzMjAgMjQwWk0yMjQgMzJDMjE5LjU5NCAzMiAyMTYgMzUuNTc4IDIxNiA0MFY0NzJDMjE2IDQ3Ni40MjIgMjE5LjU5NCA0ODAgMjI0IDQ4MFMyMzIgNDc2LjQyMiAyMzIgNDcyVjQwQzIzMiAzNS41NzggMjI4LjQwNiAzMiAyMjQgMzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BorderCenterV(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M32 144C23.178 144 16 151.18 16 160S23.178 176 32 176S48 168.82 48 160S40.822 144 32 144ZM128 432C119.178 432 112 439.18 112 448S119.178 464 128 464S144 456.82 144 448S136.822 432 128 432ZM32 240C23.178 240 16 247.18 16 256S23.178 272 32 272S48 264.82 48 256S40.822 240 32 240ZM128 240C119.178 240 112 247.18 112 256S119.178 272 128 272S144 264.82 144 256S136.822 240 128 240ZM32 48C23.178 48 16 55.18 16 64S23.178 80 32 80S48 72.82 48 64S40.822 48 32 48ZM32 336C23.178 336 16 343.18 16 352S23.178 368 32 368S48 360.82 48 352S40.822 336 32 336ZM416 80C424.822 80 432 72.82 432 64S424.822 48 416 48S400 55.18 400 64S407.178 80 416 80ZM32 432C23.178 432 16 439.18 16 448S23.178 464 32 464S48 456.82 48 448S40.822 432 32 432ZM416 432C407.178 432 400 439.18 400 448S407.178 464 416 464S432 456.82 432 448S424.822 432 416 432ZM416 240C407.178 240 400 247.18 400 256S407.178 272 416 272S432 264.82 432 256S424.822 240 416 240ZM128 48C119.178 48 112 55.18 112 64S119.178 80 128 80S144 72.82 144 64S136.822 48 128 48ZM416 144C407.178 144 400 151.18 400 160S407.178 176 416 176S432 168.82 432 160S424.822 144 416 144ZM320 48C311.178 48 304 55.18 304 64S311.178 80 320 80S336 72.82 336 64S328.822 48 320 48ZM416 336C407.178 336 400 343.18 400 352S407.178 368 416 368S432 360.82 432 352S424.822 336 416 336ZM320 432C311.178 432 304 439.18 304 448S311.178 464 320 464S336 456.82 336 448S328.822 432 320 432ZM320 240C311.178 240 304 247.18 304 256S311.178 272 320 272S336 264.82 336 256S328.822 240 320 240ZM224 32C219.594 32 216 35.578 216 40V472C216 476.422 219.594 480 224 480S232 476.422 232 472V40C232 35.578 228.406 32 224 32Z" />
        </Icon>
    </>
}
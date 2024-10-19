
import { Icon } from "../../index";

/**
 * A component that renders the `border-left` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/border-left?s=thin border-left}
 * @preview ![border-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMTQ0QzIxNS4xOCAxNDQgMjA4IDE1MS4xOCAyMDggMTYwUzIxNS4xOCAxNzYgMjI0IDE3NlMyNDAgMTY4LjgyIDI0MCAxNjBTMjMyLjgyIDE0NCAyMjQgMTQ0Wk0yMjQgNDMyQzIxNS4xOCA0MzIgMjA4IDQzOS4xOCAyMDggNDQ4UzIxNS4xOCA0NjQgMjI0IDQ2NFMyNDAgNDU2LjgyIDI0MCA0NDhTMjMyLjgyIDQzMiAyMjQgNDMyWk0yMjQgMjQwQzIxNS4xOCAyNDAgMjA4IDI0Ny4xOCAyMDggMjU2UzIxNS4xOCAyNzIgMjI0IDI3MlMyNDAgMjY0LjgyIDI0MCAyNTZTMjMyLjgyIDI0MCAyMjQgMjQwWk00MTYgODBDNDI0LjgyIDgwIDQzMiA3Mi44MiA0MzIgNjRTNDI0LjgyIDQ4IDQxNiA0OFM0MDAgNTUuMTggNDAwIDY0UzQwNy4xOCA4MCA0MTYgODBaTTEyOCA0MzJDMTE5LjE4IDQzMiAxMTIgNDM5LjE4IDExMiA0NDhTMTE5LjE4IDQ2NCAxMjggNDY0UzE0NCA0NTYuODIgMTQ0IDQ0OFMxMzYuODIgNDMyIDEyOCA0MzJaTTEyOCAyNDBDMTE5LjE4IDI0MCAxMTIgMjQ3LjE4IDExMiAyNTZTMTE5LjE4IDI3MiAxMjggMjcyUzE0NCAyNjQuODIgMTQ0IDI1NlMxMzYuODIgMjQwIDEyOCAyNDBaTTEyOCA0OEMxMTkuMTggNDggMTEyIDU1LjE4IDExMiA2NFMxMTkuMTggODAgMTI4IDgwUzE0NCA3Mi44MiAxNDQgNjRTMTM2LjgyIDQ4IDEyOCA0OFpNMjI0IDMzNkMyMTUuMTggMzM2IDIwOCAzNDMuMTggMjA4IDM1MlMyMTUuMTggMzY4IDIyNCAzNjhTMjQwIDM2MC44MiAyNDAgMzUyUzIzMi44MiAzMzYgMjI0IDMzNlpNNDE2IDQzMkM0MDcuMTggNDMyIDQwMCA0MzkuMTggNDAwIDQ0OFM0MDcuMTggNDY0IDQxNiA0NjRTNDMyIDQ1Ni44MiA0MzIgNDQ4UzQyNC44MiA0MzIgNDE2IDQzMlpNNDE2IDMzNkM0MDcuMTggMzM2IDQwMCAzNDMuMTggNDAwIDM1MlM0MDcuMTggMzY4IDQxNiAzNjhTNDMyIDM2MC44MiA0MzIgMzUyUzQyNC44MiAzMzYgNDE2IDMzNlpNNDE2IDI0MEM0MDcuMTggMjQwIDQwMCAyNDcuMTggNDAwIDI1NlM0MDcuMTggMjcyIDQxNiAyNzJTNDMyIDI2NC44MiA0MzIgMjU2UzQyNC44MiAyNDAgNDE2IDI0MFpNMjI0IDQ4QzIxNS4xOCA0OCAyMDggNTUuMTggMjA4IDY0UzIxNS4xOCA4MCAyMjQgODBTMjQwIDcyLjgyIDI0MCA2NFMyMzIuODIgNDggMjI0IDQ4Wk00MTYgMTQ0QzQwNy4xOCAxNDQgNDAwIDE1MS4xOCA0MDAgMTYwUzQwNy4xOCAxNzYgNDE2IDE3NlM0MzIgMTY4LjgyIDQzMiAxNjBTNDI0LjgyIDE0NCA0MTYgMTQ0Wk0zMjAgNDMyQzMxMS4xOCA0MzIgMzA0IDQzOS4xOCAzMDQgNDQ4UzMxMS4xOCA0NjQgMzIwIDQ2NFMzMzYgNDU2LjgyIDMzNiA0NDhTMzI4LjgyIDQzMiAzMjAgNDMyWk0zMjAgNDhDMzExLjE4IDQ4IDMwNCA1NS4xOCAzMDQgNjRTMzExLjE4IDgwIDMyMCA4MFMzMzYgNzIuODIgMzM2IDY0UzMyOC44MiA0OCAzMjAgNDhaTTMyMCAyNDBDMzExLjE4IDI0MCAzMDQgMjQ3LjE4IDMwNCAyNTZTMzExLjE4IDI3MiAzMjAgMjcyUzMzNiAyNjQuODIgMzM2IDI1NlMzMjguODIgMjQwIDMyMCAyNDBaTTggMzJDMy41OTQgMzIgMCAzNS41NzggMCA0MFY0NzJDMCA0NzYuNDIyIDMuNTk0IDQ4MCA4IDQ4MFMxNiA0NzYuNDIyIDE2IDQ3MlY0MEMxNiAzNS41NzggMTIuNDA2IDMyIDggMzJaIi8+PC9zdmc+|width=32|height=32)
 */
const BorderLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 144C215.18 144 208 151.18 208 160S215.18 176 224 176S240 168.82 240 160S232.82 144 224 144ZM224 432C215.18 432 208 439.18 208 448S215.18 464 224 464S240 456.82 240 448S232.82 432 224 432ZM224 240C215.18 240 208 247.18 208 256S215.18 272 224 272S240 264.82 240 256S232.82 240 224 240ZM416 80C424.82 80 432 72.82 432 64S424.82 48 416 48S400 55.18 400 64S407.18 80 416 80ZM128 432C119.18 432 112 439.18 112 448S119.18 464 128 464S144 456.82 144 448S136.82 432 128 432ZM128 240C119.18 240 112 247.18 112 256S119.18 272 128 272S144 264.82 144 256S136.82 240 128 240ZM128 48C119.18 48 112 55.18 112 64S119.18 80 128 80S144 72.82 144 64S136.82 48 128 48ZM224 336C215.18 336 208 343.18 208 352S215.18 368 224 368S240 360.82 240 352S232.82 336 224 336ZM416 432C407.18 432 400 439.18 400 448S407.18 464 416 464S432 456.82 432 448S424.82 432 416 432ZM416 336C407.18 336 400 343.18 400 352S407.18 368 416 368S432 360.82 432 352S424.82 336 416 336ZM416 240C407.18 240 400 247.18 400 256S407.18 272 416 272S432 264.82 432 256S424.82 240 416 240ZM224 48C215.18 48 208 55.18 208 64S215.18 80 224 80S240 72.82 240 64S232.82 48 224 48ZM416 144C407.18 144 400 151.18 400 160S407.18 176 416 176S432 168.82 432 160S424.82 144 416 144ZM320 432C311.18 432 304 439.18 304 448S311.18 464 320 464S336 456.82 336 448S328.82 432 320 432ZM320 48C311.18 48 304 55.18 304 64S311.18 80 320 80S336 72.82 336 64S328.82 48 320 48ZM320 240C311.18 240 304 247.18 304 256S311.18 272 320 272S336 264.82 336 256S328.82 240 320 240ZM8 32C3.594 32 0 35.578 0 40V472C0 476.422 3.594 480 8 480S16 476.422 16 472V40C16 35.578 12.406 32 8 32Z" />
    </Icon>
);

export default BorderLeft;
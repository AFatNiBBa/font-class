
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `radio-tuner` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/radio-tuner?s=regular radio-tuner}
 * @preview ![radio-tuner](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDggMzg0SDExMkMxMDMuMjAxIDM4NCA5NiAzOTEuMTk5IDk2IDQwMEM5NiA0MDguNzk5IDEwMy4yMDEgNDE2IDExMiA0MTZIMjA4QzIxNi44MDEgNDE2IDIyNCA0MDguNzk5IDIyNCA0MDBDMjI0IDM5MS4xOTkgMjE2LjgwMSAzODQgMjA4IDM4NFpNOTYgMzUySDIyNEMyMzIuODAxIDM1MiAyNDAgMzQ0Ljc5OSAyNDAgMzM2QzI0MCAzMjcuMTk5IDIzMi44MDEgMzIwIDIyNCAzMjBIOTZDODcuMjAxIDMyMCA4MCAzMjcuMTk5IDgwIDMzNkM4MCAzNDQuNzk5IDg3LjIwMSAzNTIgOTYgMzUyWk0zNjggNDMyQzQwMy4zMjYgNDMyIDQzMiA0MDMuMzI0IDQzMiAzNjhTNDAzLjMyNiAzMDQgMzY4IDMwNEMzMzIuNjc2IDMwNCAzMDQgMzMyLjY3NiAzMDQgMzY4UzMzMi42NzYgNDMyIDM2OCA0MzJaTTQzOS45OTQgMTI3Ljk5MkgyMDEuMjQ4TDQ5NC4zNjkgNDcuMTMxQzUwNy4xNDggNDMuNiA1MTQuNjQ4IDMwLjM4MSA1MTEuMTMzIDE3LjYxNUM1MDcuNjE3IDQuODM0IDQ5NC4zNTQgLTIuNjE5IDQ4MS42MTkgMC44NUw1Mi44NTkgMTE5LjEzM0MyMS43MzQgMTI3LjcxMSAwIDE1Ni4yNTggMCAxODguNTQxVjQzOS45OThDMCA0NzkuNzAxIDMyLjI5NyA1MTIgNzEuOTk4IDUxMkg0MzkuOTk0QzQ3OS42OTcgNTEyIDUxMS45OTIgNDc5LjcwMSA1MTEuOTkyIDQzOS45OThWMTk5Ljk5NEM1MTEuOTkyIDE2MC4yOTEgNDc5LjY5NyAxMjcuOTkyIDQzOS45OTQgMTI3Ljk5MlpNNDYzLjk5NCA0MzkuOTk4QzQ2My45OTQgNDUzLjIzMiA0NTMuMjI5IDQ2My45OTggNDM5Ljk5NCA0NjMuOTk4SDcxLjk5OEM1OC43NjYgNDYzLjk5OCA0OCA0NTMuMjMyIDQ4IDQzOS45OThWMjcySDQ2My45OTRWNDM5Ljk5OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function RadioTuner(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M208 384H112C103.201 384 96 391.199 96 400C96 408.799 103.201 416 112 416H208C216.801 416 224 408.799 224 400C224 391.199 216.801 384 208 384ZM96 352H224C232.801 352 240 344.799 240 336C240 327.199 232.801 320 224 320H96C87.201 320 80 327.199 80 336C80 344.799 87.201 352 96 352ZM368 432C403.326 432 432 403.324 432 368S403.326 304 368 304C332.676 304 304 332.676 304 368S332.676 432 368 432ZM439.994 127.992H201.248L494.369 47.131C507.148 43.6 514.648 30.381 511.133 17.615C507.617 4.834 494.354 -2.619 481.619 0.85L52.859 119.133C21.734 127.711 0 156.258 0 188.541V439.998C0 479.701 32.297 512 71.998 512H439.994C479.697 512 511.992 479.701 511.992 439.998V199.994C511.992 160.291 479.697 127.992 439.994 127.992ZM463.994 439.998C463.994 453.232 453.229 463.998 439.994 463.998H71.998C58.766 463.998 48 453.232 48 439.998V272H463.994V439.998Z" />
        </Icon>
    </>
}
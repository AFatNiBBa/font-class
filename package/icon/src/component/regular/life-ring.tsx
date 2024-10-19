
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `life-ring` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/life-ring?s=regular life-ring}
 * @preview ![life-ring](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDEuNzk3IDQwNy44NTlDNDc1LjY1MiAzNjYuNDg2IDQ5NiAzMTMuNjI5IDQ5NiAyNTZTNDc1LjY1MiAxNDUuNTE0IDQ0MS43OTcgMTA0LjE0MUw0NDguOTY5IDk2Ljk2OUM0NTguMzQ0IDg3LjU5NCA0NTguMzQ0IDcyLjQwNiA0NDguOTY5IDYzLjAzMVM0MjQuNDA2IDUzLjY1NiA0MTUuMDMxIDYzLjAzMUw0MDcuODU5IDcwLjIwM0MzNjYuNDg2IDM2LjM0OCAzMTMuNjI5IDE2IDI1NiAxNlMxNDUuNTE0IDM2LjM0OCAxMDQuMTQxIDcwLjIwM0w5Ni45NjkgNjMuMDMxQzg3LjU5NCA1My42NTYgNzIuNDA2IDUzLjY1NiA2My4wMzEgNjMuMDMxUzUzLjY1NiA4Ny41OTQgNjMuMDMxIDk2Ljk2OUw3MC4yMDMgMTA0LjE0MUMzNi4zNDggMTQ1LjUxNCAxNiAxOTguMzcxIDE2IDI1NlMzNi4zNDggMzY2LjQ4NiA3MC4yMDMgNDA3Ljg1OUw2My4wMzEgNDE1LjAzMUM1My42NTYgNDI0LjQwNiA1My42NTYgNDM5LjU5NCA2My4wMzEgNDQ4Ljk2OUM2Ny43MTkgNDUzLjY1NiA3My44NTkgNDU2IDgwIDQ1NlM5Mi4yODEgNDUzLjY1NiA5Ni45NjkgNDQ4Ljk2OUwxMDQuMTQxIDQ0MS43OTdDMTQ1LjUxNCA0NzUuNjUyIDE5OC4zNzEgNDk2IDI1NiA0OTZTMzY2LjQ4NiA0NzUuNjUyIDQwNy44NTkgNDQxLjc5N0w0MTUuMDMxIDQ0OC45NjlDNDE5LjcxOSA0NTMuNjU2IDQyNS44NTkgNDU2IDQzMiA0NTZTNDQ0LjI4MSA0NTMuNjU2IDQ0OC45NjkgNDQ4Ljk2OUM0NTguMzQ0IDQzOS41OTQgNDU4LjM0NCA0MjQuNDA2IDQ0OC45NjkgNDE1LjAzMUw0NDEuNzk3IDQwNy44NTlaTTQ0OCAyNTZDNDQ4IDMwMC4yOTcgNDMyLjc3NSAzNDEuMDIxIDQwNy40OCAzNzMuNTQzTDMzOC40MjIgMzA0LjQ4NEMzNDYuODQgMjkwLjIwOSAzNTIgMjczLjc3MyAzNTIgMjU2UzM0Ni44NCAyMjEuNzkxIDMzOC40MjIgMjA3LjUxNkw0MDcuNDggMTM4LjQ1N0M0MzIuNzc1IDE3MC45NzkgNDQ4IDIxMS43MDMgNDQ4IDI1NlpNMjA4IDI1NkMyMDggMjI5LjUzMyAyMjkuNTMzIDIwOCAyNTYgMjA4UzMwNCAyMjkuNTMzIDMwNCAyNTZTMjgyLjQ2NyAzMDQgMjU2IDMwNFMyMDggMjgyLjQ2NyAyMDggMjU2Wk0yNTYgNjRDMzAwLjI5NyA2NCAzNDEuMDIxIDc5LjIyNSAzNzMuNTQzIDEwNC41MkwzMDQuNDg0IDE3My41NzhDMjkwLjIwOSAxNjUuMTYgMjczLjc3MyAxNjAgMjU2IDE2MFMyMjEuNzkxIDE2NS4xNiAyMDcuNTE2IDE3My41NzhMMTM4LjQ1NyAxMDQuNTJDMTcwLjk3OSA3OS4yMjUgMjExLjcwMyA2NCAyNTYgNjRaTTY0IDI1NkM2NCAyMTEuNzAzIDc5LjIyNSAxNzAuOTc5IDEwNC41MiAxMzguNDU3TDE3My41NzggMjA3LjUxNkMxNjUuMTYgMjIxLjc5MSAxNjAgMjM4LjIyNyAxNjAgMjU2UzE2NS4xNiAyOTAuMjA5IDE3My41NzggMzA0LjQ4NEwxMDQuNTIgMzczLjU0M0M3OS4yMjUgMzQxLjAyMSA2NCAzMDAuMjk3IDY0IDI1NlpNMjU2IDQ0OEMyMTEuNzAzIDQ0OCAxNzAuOTc5IDQzMi43NzUgMTM4LjQ1NyA0MDcuNDhMMjA3LjUxNiAzMzguNDIyQzIyMS43OTEgMzQ2Ljg0IDIzOC4yMjcgMzUyIDI1NiAzNTJTMjkwLjIwOSAzNDYuODQgMzA0LjQ4NCAzMzguNDIyTDM3My41NDMgNDA3LjQ4QzM0MS4wMjEgNDMyLjc3NSAzMDAuMjk3IDQ0OCAyNTYgNDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function LifeRing(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M441.797 407.859C475.652 366.486 496 313.629 496 256S475.652 145.514 441.797 104.141L448.969 96.969C458.344 87.594 458.344 72.406 448.969 63.031S424.406 53.656 415.031 63.031L407.859 70.203C366.486 36.348 313.629 16 256 16S145.514 36.348 104.141 70.203L96.969 63.031C87.594 53.656 72.406 53.656 63.031 63.031S53.656 87.594 63.031 96.969L70.203 104.141C36.348 145.514 16 198.371 16 256S36.348 366.486 70.203 407.859L63.031 415.031C53.656 424.406 53.656 439.594 63.031 448.969C67.719 453.656 73.859 456 80 456S92.281 453.656 96.969 448.969L104.141 441.797C145.514 475.652 198.371 496 256 496S366.486 475.652 407.859 441.797L415.031 448.969C419.719 453.656 425.859 456 432 456S444.281 453.656 448.969 448.969C458.344 439.594 458.344 424.406 448.969 415.031L441.797 407.859ZM448 256C448 300.297 432.775 341.021 407.48 373.543L338.422 304.484C346.84 290.209 352 273.773 352 256S346.84 221.791 338.422 207.516L407.48 138.457C432.775 170.979 448 211.703 448 256ZM208 256C208 229.533 229.533 208 256 208S304 229.533 304 256S282.467 304 256 304S208 282.467 208 256ZM256 64C300.297 64 341.021 79.225 373.543 104.52L304.484 173.578C290.209 165.16 273.773 160 256 160S221.791 165.16 207.516 173.578L138.457 104.52C170.979 79.225 211.703 64 256 64ZM64 256C64 211.703 79.225 170.979 104.52 138.457L173.578 207.516C165.16 221.791 160 238.227 160 256S165.16 290.209 173.578 304.484L104.52 373.543C79.225 341.021 64 300.297 64 256ZM256 448C211.703 448 170.979 432.775 138.457 407.48L207.516 338.422C221.791 346.84 238.227 352 256 352S290.209 346.84 304.484 338.422L373.543 407.48C341.021 432.775 300.297 448 256 448Z" />
        </Icon>
    </>
}
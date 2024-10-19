
import { Icon } from "../../index";

/**
 * A component that renders the `siren` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/siren?s=thin siren}
 * @preview ![siren](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NS4wMzEgMzU5LjkzOEM1OS40MDYgMzYwLjI1IDYzLjQwNiAzNTcuMzQ0IDYzLjkzOCAzNTIuOTY5TDg3LjgxMyAxNTkuMjE5QzkxLjEyNSAxMzIuMzEyIDExMy43NSAxMTIgMTQwLjQ2OSAxMTJIMzA3LjUzMUMzMzQuMjUgMTEyIDM1Ni44NzUgMTMyLjMxMiAzNjAuMTg3IDE1OS4yMTlMMzg0LjA2MiAzNTIuOTY5QzM4NC41NjIgMzU3LjAzMSAzODggMzYwIDM5MiAzNjBDMzkyLjMxMiAzNjAgMzkyLjY1NiAzNTkuOTY5IDM5Mi45NjkgMzU5LjkzOEMzOTcuMzc1IDM1OS40MDYgNDAwLjQ2OSAzNTUuNDA2IDM5OS45MzcgMzUxLjAzMUwzNzYuMDYyIDE1Ny4yODFDMzcxLjc4MSAxMjIuMzQ0IDM0Mi4zMTIgOTYgMzA3LjUzMSA5NkgxNDAuNDY5QzEwNS42ODggOTYgNzYuMjE5IDEyMi4zNDQgNzEuOTM4IDE1Ny4yODFMNDguMDYyIDM1MS4wMzFDNDcuNTMxIDM1NS40MDYgNTAuNjI1IDM1OS40MDYgNTUuMDMxIDM1OS45MzhaTTE0My45MzggMTU3LjI4MUwxMjAuMDYyIDM1MS4wMzFDMTE5LjUzMSAzNTUuNDA2IDEyMi42MjUgMzU5LjQwNiAxMjcuMDMxIDM1OS45MzhDMTI3LjM0NCAzNTkuOTY5IDEyNy42ODggMzYwIDEyOCAzNjBDMTMyIDM2MCAxMzUuNDM4IDM1Ny4wMzEgMTM1LjkzOCAzNTIuOTY5TDE1OS44MTMgMTU5LjIxOUMxNjAuMzQ0IDE1NC44NDQgMTU3LjI1IDE1MC44NDQgMTUyLjg0NCAxNTAuMzEyQzE0OC40NjkgMTQ5LjgxMiAxNDQuNDY5IDE1Mi45MDYgMTQzLjkzOCAxNTcuMjgxWk00MTYgMzg0SDMyQzE0LjMyNiAzODQgMCAzOTguMzI2IDAgNDE2VjQ0OEMwIDQ2NS42NzIgMTQuMzI2IDQ4MCAzMiA0ODBINDE2QzQzMy42NzQgNDgwIDQ0OCA0NjUuNjcyIDQ0OCA0NDhWNDE2QzQ0OCAzOTguMzI2IDQzMy42NzQgMzg0IDQxNiAzODRaTTQzMiA0NDhDNDMyIDQ1Ni44MjIgNDI0LjgyMiA0NjQgNDE2IDQ2NEgzMkMyMy4xNzggNDY0IDE2IDQ1Ni44MjIgMTYgNDQ4VjQxNkMxNiA0MDcuMTc4IDIzLjE3OCA0MDAgMzIgNDAwSDQxNkM0MjQuODIyIDQwMCA0MzIgNDA3LjE3OCA0MzIgNDE2VjQ0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
const Siren: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M55.031 359.938C59.406 360.25 63.406 357.344 63.938 352.969L87.813 159.219C91.125 132.312 113.75 112 140.469 112H307.531C334.25 112 356.875 132.312 360.187 159.219L384.062 352.969C384.562 357.031 388 360 392 360C392.312 360 392.656 359.969 392.969 359.938C397.375 359.406 400.469 355.406 399.937 351.031L376.062 157.281C371.781 122.344 342.312 96 307.531 96H140.469C105.688 96 76.219 122.344 71.938 157.281L48.062 351.031C47.531 355.406 50.625 359.406 55.031 359.938ZM143.938 157.281L120.062 351.031C119.531 355.406 122.625 359.406 127.031 359.938C127.344 359.969 127.688 360 128 360C132 360 135.438 357.031 135.938 352.969L159.813 159.219C160.344 154.844 157.25 150.844 152.844 150.312C148.469 149.812 144.469 152.906 143.938 157.281ZM416 384H32C14.326 384 0 398.326 0 416V448C0 465.672 14.326 480 32 480H416C433.674 480 448 465.672 448 448V416C448 398.326 433.674 384 416 384ZM432 448C432 456.822 424.822 464 416 464H32C23.178 464 16 456.822 16 448V416C16 407.178 23.178 400 32 400H416C424.822 400 432 407.178 432 416V448Z" />
    </Icon>
);

export default Siren;
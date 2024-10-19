
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `box-circle-check` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/box-circle-check?s=solid box-circle-check}
 * @preview ![box-circle-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDcuNjI1IDE1OC43NUwzOTEuMjUgNTMuODc1QzM4Ni44NzUgNDAuNzUgMzc0Ljc1IDMyIDM2MC44NzUgMzJIMjQwVjE2MEg0NDYuNzVDNDQ3LjEyNSAxNTkuNSA0NDcuMjUgMTU5LjI1IDQ0Ny42MjUgMTU4Ljc1Wk0yMDggMTYwVjMySDg3LjEyNUM3My4yNSAzMiA2MS4xMjUgNDAuNzUgNTYuNzUgNTMuODc1TDAuMzc1IDE1OC43NUMwLjc1IDE1OS4yNSAwLjg3NSAxNTkuNSAxLjI1IDE2MEgyMDhaTTQzMiAxOTJIMFY0MzJDMCA0NTguNTEgMjEuNDkgNDgwIDQ4IDQ4MEgyOTYuMjM0QzI3MS4xMDIgNDQ5LjU2OCAyNTYgNDEwLjU0OSAyNTYgMzY4QzI1NiAyNzAuNzk3IDMzNC43OTkgMTkyIDQzMiAxOTJaTTQzMi4wMDIgMjI0QzM1Mi40NjMgMjI0IDI4OCAyODguNDYzIDI4OCAzNjhTMzUyLjQ2MyA1MTIgNDMyLjAwMiA1MTJDNTExLjUzNyA1MTIgNTc2IDQ0Ny41MzcgNTc2IDM2OFM1MTEuNTM3IDIyNCA0MzIuMDAyIDIyNFpNNDk5LjMxMiAzNDEuOTg0TDQyNC42NTYgNDE2LjY0MUM0MjEuNTMxIDQxOS43NjYgNDE3LjQzOCA0MjEuMzI4IDQxMy4zNDQgNDIxLjMyOFM0MDUuMTU2IDQxOS43NjYgNDAyLjAzMSA0MTYuNjQxTDM2NC42ODggMzc5LjMxMkMzNTguNDM4IDM3My4wNjIgMzU4LjQzOCAzNjIuOTM3IDM2NC42ODggMzU2LjY4OFMzODEuMDYzIDM1MC40MzggMzg3LjMxMiAzNTYuNjg4TDQxMy4zNDQgMzgyLjcwM0w0NzYuNjg4IDMxOS4zNTlDNDgyLjkzOCAzMTMuMTA5IDQ5My4wNjMgMzEzLjEwOSA0OTkuMzEyIDMxOS4zNTlTNTA1LjU2MiAzMzUuNzM0IDQ5OS4zMTIgMzQxLjk4NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BoxCircleCheck(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M447.625 158.75L391.25 53.875C386.875 40.75 374.75 32 360.875 32H240V160H446.75C447.125 159.5 447.25 159.25 447.625 158.75ZM208 160V32H87.125C73.25 32 61.125 40.75 56.75 53.875L0.375 158.75C0.75 159.25 0.875 159.5 1.25 160H208ZM432 192H0V432C0 458.51 21.49 480 48 480H296.234C271.102 449.568 256 410.549 256 368C256 270.797 334.799 192 432 192ZM432.002 224C352.463 224 288 288.463 288 368S352.463 512 432.002 512C511.537 512 576 447.537 576 368S511.537 224 432.002 224ZM499.312 341.984L424.656 416.641C421.531 419.766 417.438 421.328 413.344 421.328S405.156 419.766 402.031 416.641L364.688 379.312C358.438 373.062 358.438 362.937 364.688 356.688S381.063 350.438 387.312 356.688L413.344 382.703L476.688 319.359C482.938 313.109 493.063 313.109 499.312 319.359S505.562 335.734 499.312 341.984Z" />
        </Icon>
    </>
}
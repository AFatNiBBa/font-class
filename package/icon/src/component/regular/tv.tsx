
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tv` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tv?s=regular tv}
 * @preview ![tv](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MjAgNDY0SDEyMEMxMDYuNzQ2IDQ2NCA5NiA0NzQuNzQ0IDk2IDQ4OEM5NiA1MDEuMjU0IDEwNi43NDYgNTEyIDEyMCA1MTJINTIwQzUzMy4yNTQgNTEyIDU0NCA1MDEuMjU0IDU0NCA0ODhDNTQ0IDQ3NC43NDQgNTMzLjI1NCA0NjQgNTIwIDQ2NFpNNTc2IDBINjRDMjguNjU0IDAgMCAyOC42NTQgMCA2NFYzNTJDMCAzODcuMzQ2IDI4LjY1NCA0MTYgNjQgNDE2SDU3NkM2MTEuMzQ4IDQxNiA2NDAgMzg3LjM0NiA2NDAgMzUyVjY0QzY0MCAyOC42NTQgNjExLjM0OCAwIDU3NiAwWk01OTIgMzUyQzU5MiAzNjAuODIyIDU4NC44MjIgMzY4IDU3NiAzNjhINjRDNTUuMTc4IDM2OCA0OCAzNjAuODIyIDQ4IDM1MlY2NEM0OCA1NS4xNzggNTUuMTc4IDQ4IDY0IDQ4SDU3NkM1ODQuODIyIDQ4IDU5MiA1NS4xNzggNTkyIDY0VjM1MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Tv(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M520 464H120C106.746 464 96 474.744 96 488C96 501.254 106.746 512 120 512H520C533.254 512 544 501.254 544 488C544 474.744 533.254 464 520 464ZM576 0H64C28.654 0 0 28.654 0 64V352C0 387.346 28.654 416 64 416H576C611.348 416 640 387.346 640 352V64C640 28.654 611.348 0 576 0ZM592 352C592 360.822 584.822 368 576 368H64C55.178 368 48 360.822 48 352V64C48 55.178 55.178 48 64 48H576C584.822 48 592 55.178 592 64V352Z" />
        </Icon>
    </>
}

import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `desktop` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/desktop?s=regular desktop}
 * @preview ![desktop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMEg2NEMyOC42NTQgMCAwIDI4LjY1NCAwIDY0VjM1MkMwIDM4Ny4zNDYgMjguNjU0IDQxNiA2NCA0MTZIMjEyLjMyOEwyMDIuNzI5IDQ2NEgxNTJDMTM4Ljc1IDQ2NCAxMjggNDc0Ljc1IDEyOCA0ODhTMTM4Ljc1IDUxMiAxNTIgNTEySDQyNEM0MzcuMjUgNTEyIDQ0OCA1MDEuMjUgNDQ4IDQ4OFM0MzcuMjUgNDY0IDQyNCA0NjRIMzczLjI3MUwzNjMuNjcyIDQxNkg1MTJDNTQ3LjM0NiA0MTYgNTc2IDM4Ny4zNDYgNTc2IDM1MlY2NEM1NzYgMjguNjU0IDU0Ny4zNDYgMCA1MTIgMFpNMzI0LjMyOCA0NjRIMjUxLjY3MkwyNjEuMjcxIDQxNkgzMTQuNzI5TDMyNC4zMjggNDY0Wk01MjggMzUyQzUyOCAzNjAuODIyIDUyMC44MjIgMzY4IDUxMiAzNjhINjRDNTUuMTc4IDM2OCA0OCAzNjAuODIyIDQ4IDM1MlYzMDRINTI4VjM1MlpNNTI4IDI1Nkg0OFY2NEM0OCA1NS4xNzggNTUuMTc4IDQ4IDY0IDQ4SDUxMkM1MjAuODIyIDQ4IDUyOCA1NS4xNzggNTI4IDY0VjI1NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Desktop(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M512 0H64C28.654 0 0 28.654 0 64V352C0 387.346 28.654 416 64 416H212.328L202.729 464H152C138.75 464 128 474.75 128 488S138.75 512 152 512H424C437.25 512 448 501.25 448 488S437.25 464 424 464H373.271L363.672 416H512C547.346 416 576 387.346 576 352V64C576 28.654 547.346 0 512 0ZM324.328 464H251.672L261.271 416H314.729L324.328 464ZM528 352C528 360.822 520.822 368 512 368H64C55.178 368 48 360.822 48 352V304H528V352ZM528 256H48V64C48 55.178 55.178 48 64 48H512C520.822 48 528 55.178 528 64V256Z" />
        </Icon>
    </>
}
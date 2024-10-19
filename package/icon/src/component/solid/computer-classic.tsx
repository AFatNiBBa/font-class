
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `computer-classic` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/computer-classic?s=solid computer-classic}
 * @preview ![computer-classic](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTYgMEgzMkMxNC4zNzUgMCAwIDE0LjM3NSAwIDMyVjQwMEMwIDQwOC44NzUgNy4xMjUgNDE2IDE2IDQxNkg0MzJDNDQwLjg3NSA0MTYgNDQ4IDQwOC44NzUgNDQ4IDQwMFYzMkM0NDggMTQuMzc1IDQzMy42MjUgMCA0MTYgMFpNODAgMzU2QzY5IDM1NiA2MCAzNDcgNjAgMzM2UzY5IDMxNiA4MCAzMTZTMTAwIDMyNSAxMDAgMzM2UzkxIDM1NiA4MCAzNTZaTTM4NCAzNDRDMzg0IDM0OC4zNzUgMzgwLjM3NSAzNTIgMzc2IDM1MkgyMzJDMjI3LjYyNSAzNTIgMjI0IDM0OC4zNzUgMjI0IDM0NFYzMjhDMjI0IDMyMy42MjUgMjI3LjYyNSAzMjAgMjMyIDMyMEgzNzZDMzgwLjM3NSAzMjAgMzg0IDMyMy42MjUgMzg0IDMyOFYzNDRaTTM4NCAyMjRDMzg0IDI0MS42MjUgMzY5LjYyNSAyNTYgMzUyIDI1Nkg5NkM3OC4zNzUgMjU2IDY0IDI0MS42MjUgNjQgMjI0Vjk2QzY0IDc4LjM3NSA3OC4zNzUgNjQgOTYgNjRIMzUyQzM2OS42MjUgNjQgMzg0IDc4LjM3NSAzODQgOTZWMjI0Wk0zMiA1MTJINDE2VjQ0OEgzMlY1MTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ComputerClassic(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M416 0H32C14.375 0 0 14.375 0 32V400C0 408.875 7.125 416 16 416H432C440.875 416 448 408.875 448 400V32C448 14.375 433.625 0 416 0ZM80 356C69 356 60 347 60 336S69 316 80 316S100 325 100 336S91 356 80 356ZM384 344C384 348.375 380.375 352 376 352H232C227.625 352 224 348.375 224 344V328C224 323.625 227.625 320 232 320H376C380.375 320 384 323.625 384 328V344ZM384 224C384 241.625 369.625 256 352 256H96C78.375 256 64 241.625 64 224V96C64 78.375 78.375 64 96 64H352C369.625 64 384 78.375 384 96V224ZM32 512H416V448H32V512Z" />
        </Icon>
    </>
}
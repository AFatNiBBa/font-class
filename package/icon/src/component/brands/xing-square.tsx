
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `xing-square` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/xing-square?s=brands xing-square}
 * @preview ![xing-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDAgMzJINDhDMjEuNSAzMiAwIDUzLjUgMCA4MHYzNTJjMCAyNi41IDIxLjUgNDggNDggNDhoMzUyYzI2LjUgMCA0OC0yMS41IDQ4LTQ4VjgwYzAtMjYuNS0yMS41LTQ4LTQ4LTQ4ek0xNDAuNCAzMjAuMkg5My44Yy01LjUgMC04LjctNS4zLTYtMTAuM2w0OS4zLTg2LjdjLjEgMCAuMS0uMSAwLS4ybC0zMS40LTU0Yy0zLTUuNi4yLTEwLjEgNi0xMC4xaDQ2LjZjNS4yIDAgOS41IDIuOSAxMi45IDguN2wzMS45IDU1LjNjLTEuMyAyLjMtMTggMzEuNy01MC4xIDg4LjItMy41IDYuMi03LjcgOS4xLTEyLjYgOS4xem0yMTkuNy0yMTQuMUwyNTcuMyAyODYuOHYuMmw2NS41IDExOWMyLjggNS4xLjEgMTAuMS02IDEwLjFoLTQ2LjZjLTUuNSAwLTkuNy0yLjktMTIuOS04LjdsLTY2LTEyMC4zYzIuMy00LjEgMzYuOC02NC45IDEwMy40LTE4Mi4zIDMuMy01LjggNy40LTguNyAxMi41LTguN2g0Ni45YzUuNy0uMSA4LjggNC43IDYgMTB6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function XingSquare(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM140.4 320.2H93.8c-5.5 0-8.7-5.3-6-10.3l49.3-86.7c.1 0 .1-.1 0-.2l-31.4-54c-3-5.6.2-10.1 6-10.1h46.6c5.2 0 9.5 2.9 12.9 8.7l31.9 55.3c-1.3 2.3-18 31.7-50.1 88.2-3.5 6.2-7.7 9.1-12.6 9.1zm219.7-214.1L257.3 286.8v.2l65.5 119c2.8 5.1.1 10.1-6 10.1h-46.6c-5.5 0-9.7-2.9-12.9-8.7l-66-120.3c2.3-4.1 36.8-64.9 103.4-182.3 3.3-5.8 7.4-8.7 12.5-8.7h46.9c5.7-.1 8.8 4.7 6 10z" />
        </Icon>
    </>
}
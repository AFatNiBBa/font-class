
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `browsers` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/browsers?s=solid browsers}
 * @preview ![browsers](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OCA0MzJWOTZDMjEuNDkgOTYgMCAxMTcuNDkyIDAgMTQ0VjQ0OEMwIDQ4My4zNDQgMjguNjU0IDUxMiA2NCA1MTJINDMyQzQ1OC41MSA1MTIgNDgwIDQ5MC41MDggNDgwIDQ2NEg4MEM2Mi4zMjYgNDY0IDQ4IDQ0OS42NzIgNDggNDMyWk01MTIgMEgxNjBDMTI0LjY1NCAwIDk2IDI4LjY1NCA5NiA2NFYzNTJDOTYgMzg3LjM0NiAxMjQuNjU0IDQxNiAxNjAgNDE2SDUxMkM1NDcuMzQ2IDQxNiA1NzYgMzg3LjM0NiA1NzYgMzUyVjY0QzU3NiAyOC42NTQgNTQ3LjM0NiAwIDUxMiAwWk0yMjQgMTE2QzIyNCAxMjIuNjI1IDIxOC42MjUgMTI4IDIxMiAxMjhIMTcyQzE2NS4zNzUgMTI4IDE2MCAxMjIuNjI1IDE2MCAxMTZWNzZDMTYwIDY5LjM3NSAxNjUuMzc1IDY0IDE3MiA2NEgyMTJDMjE4LjYyNSA2NCAyMjQgNjkuMzc1IDIyNCA3NlYxMTZaTTUxMiAxMTZDNTEyIDEyMi42MjUgNTA2LjYyNSAxMjggNTAwIDEyOEgyNjhDMjYxLjM3NSAxMjggMjU2IDEyMi42MjUgMjU2IDExNlY3NkMyNTYgNjkuMzc1IDI2MS4zNzUgNjQgMjY4IDY0SDUwMEM1MDYuNjI1IDY0IDUxMiA2OS4zNzUgNTEyIDc2VjExNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Browsers(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M48 432V96C21.49 96 0 117.492 0 144V448C0 483.344 28.654 512 64 512H432C458.51 512 480 490.508 480 464H80C62.326 464 48 449.672 48 432ZM512 0H160C124.654 0 96 28.654 96 64V352C96 387.346 124.654 416 160 416H512C547.346 416 576 387.346 576 352V64C576 28.654 547.346 0 512 0ZM224 116C224 122.625 218.625 128 212 128H172C165.375 128 160 122.625 160 116V76C160 69.375 165.375 64 172 64H212C218.625 64 224 69.375 224 76V116ZM512 116C512 122.625 506.625 128 500 128H268C261.375 128 256 122.625 256 116V76C256 69.375 261.375 64 268 64H500C506.625 64 512 69.375 512 76V116Z" />
        </Icon>
    </>
}
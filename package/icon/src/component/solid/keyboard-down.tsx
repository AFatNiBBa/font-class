
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `keyboard-down` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/keyboard-down?s=solid keyboard-down}
 * @preview ![keyboard-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMEg2NEMyOC42NTQgMCAwIDI4LjY1MyAwIDY0VjIyNEMwIDI1OS4zNDYgMjguNjU0IDI4OCA2NCAyODhINTEyQzU0Ny4zNDggMjg4IDU3NiAyNTkuMzQ2IDU3NiAyMjRWNjRDNTc2IDI4LjY1MyA1NDcuMzQ4IDAgNTEyIDBaTTI1NiA3NkMyNTYgNjkuMzc1IDI2MS4zNzUgNjQgMjY4IDY0SDMwOEMzMTQuNjI1IDY0IDMyMCA2OS4zNzUgMzIwIDc2VjExNkMzMjAgMTIyLjYyNSAzMTQuNjI1IDEyOCAzMDggMTI4SDI2OEMyNjEuMzc1IDEyOCAyNTYgMTIyLjYyNSAyNTYgMTE2Vjc2Wk0xNjAgNzZDMTYwIDY5LjM3NSAxNjUuMzc1IDY0IDE3MiA2NEgyMTJDMjE4LjYyNSA2NCAyMjQgNjkuMzc1IDIyNCA3NlYxMTZDMjI0IDEyMi42MjUgMjE4LjYyNSAxMjggMjEyIDEyOEgxNzJDMTY1LjM3NSAxMjggMTYwIDEyMi42MjUgMTYwIDExNlY3NlpNMTI4IDIxMkMxMjggMjE4LjYyNSAxMjIuNjI1IDIyNCAxMTYgMjI0SDc2QzY5LjM3NSAyMjQgNjQgMjE4LjYyNSA2NCAyMTJWMTcyQzY0IDE2NS4zNzUgNjkuMzc1IDE2MCA3NiAxNjBIMTE2QzEyMi42MjUgMTYwIDEyOCAxNjUuMzc1IDEyOCAxNzJWMjEyWk0xMjggMTE2QzEyOCAxMjIuNjI1IDEyMi42MjUgMTI4IDExNiAxMjhINzZDNjkuMzc1IDEyOCA2NCAxMjIuNjI1IDY0IDExNlY3NkM2NCA2OS4zNzUgNjkuMzc1IDY0IDc2IDY0SDExNkMxMjIuNjI1IDY0IDEyOCA2OS4zNzUgMTI4IDc2VjExNlpNNDE2IDIxMkM0MTYgMjE4LjYyNSA0MTAuNjI1IDIyNCA0MDQgMjI0SDE3MkMxNjUuMzc1IDIyNCAxNjAgMjE4LjYyNSAxNjAgMjEyVjE3MkMxNjAgMTY1LjM3NSAxNjUuMzc1IDE2MCAxNzIgMTYwSDQwNEM0MTAuNjI1IDE2MCA0MTYgMTY1LjM3NSA0MTYgMTcyVjIxMlpNNDE2IDExNkM0MTYgMTIyLjYyNSA0MTAuNjI1IDEyOCA0MDQgMTI4SDM2NEMzNTcuMzc1IDEyOCAzNTIgMTIyLjYyNSAzNTIgMTE2Vjc2QzM1MiA2OS4zNzUgMzU3LjM3NSA2NCAzNjQgNjRINDA0QzQxMC42MjUgNjQgNDE2IDY5LjM3NSA0MTYgNzZWMTE2Wk01MTIgMjEyQzUxMiAyMTguNjI1IDUwNi42MjUgMjI0IDUwMCAyMjRINDYwQzQ1My4zNzUgMjI0IDQ0OCAyMTguNjI1IDQ0OCAyMTJWMTcyQzQ0OCAxNjUuMzc1IDQ1My4zNzUgMTYwIDQ2MCAxNjBINTAwQzUwNi42MjUgMTYwIDUxMiAxNjUuMzc1IDUxMiAxNzJWMjEyWk01MTIgMTE2QzUxMiAxMjIuNjI1IDUwNi42MjUgMTI4IDUwMCAxMjhINDYwQzQ1My4zNzUgMTI4IDQ0OCAxMjIuNjI1IDQ0OCAxMTZWNzZDNDQ4IDY5LjM3NSA0NTMuMzc1IDY0IDQ2MCA2NEg1MDBDNTA2LjYyNSA2NCA1MTIgNjkuMzc1IDUxMiA3NlYxMTZaTTM5MiAzNTEuODk1SDE4NEMxNzQuNDUxIDM1MS44OTUgMTY1LjgxMSAzNTcuNTU1IDE2MiAzNjYuMzExQzE1OC4xODYgMzc1LjA2NyAxNTkuOTIgMzg1LjI2IDE2Ni40MDQgMzkyLjI0OUwyNzAuNDA2IDUwNC4zMjNDMjc5LjkwNCA1MTQuNTU5IDI5Ni4wOTYgNTE0LjU1OSAzMDUuNTk0IDUwNC4zMjNMNDA5LjU5NiAzOTIuMjQ5QzQxNi4wOCAzODUuMjYgNDE3LjgxNCAzNzUuMDY3IDQxNC4wMDQgMzY2LjMxMUM0MTAuMTg5IDM1Ny41NTUgNDAxLjU0NyAzNTEuODk1IDM5MiAzNTEuODk1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function KeyboardDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M512 0H64C28.654 0 0 28.653 0 64V224C0 259.346 28.654 288 64 288H512C547.348 288 576 259.346 576 224V64C576 28.653 547.348 0 512 0ZM256 76C256 69.375 261.375 64 268 64H308C314.625 64 320 69.375 320 76V116C320 122.625 314.625 128 308 128H268C261.375 128 256 122.625 256 116V76ZM160 76C160 69.375 165.375 64 172 64H212C218.625 64 224 69.375 224 76V116C224 122.625 218.625 128 212 128H172C165.375 128 160 122.625 160 116V76ZM128 212C128 218.625 122.625 224 116 224H76C69.375 224 64 218.625 64 212V172C64 165.375 69.375 160 76 160H116C122.625 160 128 165.375 128 172V212ZM128 116C128 122.625 122.625 128 116 128H76C69.375 128 64 122.625 64 116V76C64 69.375 69.375 64 76 64H116C122.625 64 128 69.375 128 76V116ZM416 212C416 218.625 410.625 224 404 224H172C165.375 224 160 218.625 160 212V172C160 165.375 165.375 160 172 160H404C410.625 160 416 165.375 416 172V212ZM416 116C416 122.625 410.625 128 404 128H364C357.375 128 352 122.625 352 116V76C352 69.375 357.375 64 364 64H404C410.625 64 416 69.375 416 76V116ZM512 212C512 218.625 506.625 224 500 224H460C453.375 224 448 218.625 448 212V172C448 165.375 453.375 160 460 160H500C506.625 160 512 165.375 512 172V212ZM512 116C512 122.625 506.625 128 500 128H460C453.375 128 448 122.625 448 116V76C448 69.375 453.375 64 460 64H500C506.625 64 512 69.375 512 76V116ZM392 351.895H184C174.451 351.895 165.811 357.555 162 366.311C158.186 375.067 159.92 385.26 166.404 392.249L270.406 504.323C279.904 514.559 296.096 514.559 305.594 504.323L409.596 392.249C416.08 385.26 417.814 375.067 414.004 366.311C410.189 357.555 401.547 351.895 392 351.895Z" />
        </Icon>
    </>
}
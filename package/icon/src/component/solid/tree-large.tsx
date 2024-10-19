
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tree-large` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tree-large?s=solid tree-large}
 * @preview ![tree-large](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDYuNzY0IDUxMkg2NS4xN0MzNi42NzIgNTEyIDIxLjQyMyA0NzcuNSA0MC40MjIgNDU1LjYyNUwxMzAuMjkgMzUySDk0LjI5M0M2OC42NyAzNTIgNTQuNzk2IDMyMi43NSA3MS4wNDQgMzAzLjVMMTY2LjAzNyAxOTJIMTIxLjI5Qzk5LjkxNyAxOTIgODguMjkzIDE2OS41IDEwMS45MTcgMTU0Ljc1TDIzNi43ODEgOC4yNUMyNDYuNzggLTIuNzUgMjY1LjI3OSAtMi43NSAyNzUuMjc4IDguMjVMNDEwLjI2NyAxNTQuNzVDNDIzLjc2NiAxNjkuNSA0MTIuMjY3IDE5MiAzOTAuODkzIDE5MkgzNDYuMTQ3TDQ0MS4wMTQgMzAzLjVDNDU3LjI2MyAzMjIuNzUgNDQzLjM4OSAzNTIgNDE3Ljc2NiAzNTJIMzgxLjc2OUw0NzEuNjM3IDQ1NS42MjVDNDkwLjUxIDQ3Ny4zNzUgNDc1LjM4NyA1MTIgNDQ2Ljc2NCA1MTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function TreeLarge(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M446.764 512H65.17C36.672 512 21.423 477.5 40.422 455.625L130.29 352H94.293C68.67 352 54.796 322.75 71.044 303.5L166.037 192H121.29C99.917 192 88.293 169.5 101.917 154.75L236.781 8.25C246.78 -2.75 265.279 -2.75 275.278 8.25L410.267 154.75C423.766 169.5 412.267 192 390.893 192H346.147L441.014 303.5C457.263 322.75 443.389 352 417.766 352H381.769L471.637 455.625C490.51 477.375 475.387 512 446.764 512Z" />
        </Icon>
    </>
}
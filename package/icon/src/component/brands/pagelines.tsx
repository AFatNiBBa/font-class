
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `pagelines` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pagelines?s=brands pagelines}
 * @preview ![pagelines](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzEyLjdjLTU1LjEgMTM2LjctMTg3LjEgNTQtMTg3LjEgNTQtNDAuNSA4MS44LTEwNy40IDEzNC40LTE4NC42IDEzNC43LTE2LjEgMC0xNi42LTI0LjQgMC0yNC40IDY0LjQtLjMgMTIwLjUtNDIuNyAxNTcuMi0xMTAuMS00MS4xIDE1LjktMTE4LjYgMjcuOS0xNjEuNi04Mi4yIDEwOS00NC45IDE1OS4xIDExLjIgMTc4LjMgNDUuNSA5LjktMjQuNCAxNy01MC45IDIxLjYtNzkuNyAwIDAtMTM5LjcgMjEuOS0xNDkuNS05OC4xIDExOS4xLTQ3LjkgMTUyLjYgNzYuNyAxNTIuNiA3Ni43IDEuNi0xNi43IDMuMy01Mi42IDMuMy01My40IDAgMC0xMDYuMy03My43LTM4LjEtMTY1LjIgMTI0LjYgNDMgNjEuNCAxNjIuNCA2MS40IDE2Mi40LjUgMS42LjUgMjMuOCAwIDMzLjQgMCAwIDQ1LjItODkgMTM2LjQtNTcuNS00LjIgMTM0LTE0MS45IDEwNi40LTE0MS45IDEwNi40LTQuNCAyNy40LTExLjIgNTMuNC0yMCA3Ny41IDAgMCA4My05MS44IDE3Mi0yMHoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Pagelines(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M384 312.7c-55.1 136.7-187.1 54-187.1 54-40.5 81.8-107.4 134.4-184.6 134.7-16.1 0-16.6-24.4 0-24.4 64.4-.3 120.5-42.7 157.2-110.1-41.1 15.9-118.6 27.9-161.6-82.2 109-44.9 159.1 11.2 178.3 45.5 9.9-24.4 17-50.9 21.6-79.7 0 0-139.7 21.9-149.5-98.1 119.1-47.9 152.6 76.7 152.6 76.7 1.6-16.7 3.3-52.6 3.3-53.4 0 0-106.3-73.7-38.1-165.2 124.6 43 61.4 162.4 61.4 162.4.5 1.6.5 23.8 0 33.4 0 0 45.2-89 136.4-57.5-4.2 134-141.9 106.4-141.9 106.4-4.4 27.4-11.2 53.4-20 77.5 0 0 83-91.8 172-20z" />
        </Icon>
    </>
}

import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `freebsd` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/freebsd?s=brands freebsd}
 * @preview ![freebsd](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMDMuNyA5Ni4yYzExLjEtMTEuMSAxMTUuNS03NyAxMzkuMi01My4yIDIzLjcgMjMuNy00Mi4xIDEyOC4xLTUzLjIgMTM5LjItMTEuMSAxMS4xLTM5LjQuOS02My4xLTIyLjktMjMuOC0yMy43LTM0LjEtNTItMjIuOS02My4xek0xMDkuOSA2OC4xQzczLjYgNDcuNSAyMiAyNC42IDUuNiA0MS4xYy0xNi42IDE2LjYgNy4xIDY5LjQgMjcuOSAxMDUuNyAxOC41LTMyLjIgNDQuOC01OS4zIDc2LjQtNzguN3pNNDA2LjcgMTc0YzMuMyAxMS4zIDIuNyAyMC43LTIuNyAyNi4xLTIwLjMgMjAuMy04Ny41LTI3LTEwOS4zLTcwLjEtMTgtMzIuMy0xMS4xLTUzLjQgMTQuOS00OC43IDUuNy0zLjYgMTIuMy03LjYgMTkuNi0xMS42LTI5LjgtMTUuNS02My42LTI0LjMtOTkuNS0yNC4zLTExOS4xIDAtMjE1LjYgOTYuNS0yMTUuNiAyMTUuNiAwIDExOSA5Ni41IDIxNS42IDIxNS42IDIxNS42UzQ0NS4zIDM4MC4xIDQ0NS4zIDI2MWMwLTM4LjQtMTAuMS03NC41LTI3LjctMTA1LjgtMy45IDctNy42IDEzLjMtMTAuOSAxOC44eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Freebsd(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M303.7 96.2c11.1-11.1 115.5-77 139.2-53.2 23.7 23.7-42.1 128.1-53.2 139.2-11.1 11.1-39.4.9-63.1-22.9-23.8-23.7-34.1-52-22.9-63.1zM109.9 68.1C73.6 47.5 22 24.6 5.6 41.1c-16.6 16.6 7.1 69.4 27.9 105.7 18.5-32.2 44.8-59.3 76.4-78.7zM406.7 174c3.3 11.3 2.7 20.7-2.7 26.1-20.3 20.3-87.5-27-109.3-70.1-18-32.3-11.1-53.4 14.9-48.7 5.7-3.6 12.3-7.6 19.6-11.6-29.8-15.5-63.6-24.3-99.5-24.3-119.1 0-215.6 96.5-215.6 215.6 0 119 96.5 215.6 215.6 215.6S445.3 380.1 445.3 261c0-38.4-10.1-74.5-27.7-105.8-3.9 7-7.6 13.3-10.9 18.8z" />
        </Icon>
    </>
}

import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `bimobject` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bimobject?s=brands bimobject}
 * @preview ![bimobject](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTYgMzJIMzJDMTQuNCAzMiAwIDQ2LjQgMCA2NHYzODRjMCAxNy42IDE0LjQgMzIgMzIgMzJoMzg0YzE3LjYgMCAzMi0xNC40IDMyLTMyVjY0YzAtMTcuNi0xNC40LTMyLTMyLTMyem0tNjQgMjU3LjRjMCA0OS40LTExLjQgODIuNi0xMDMuOCA4Mi42aC0xNi45Yy00NC4xIDAtNjIuNC0xNC45LTcwLjQtMzguOGgtLjlWMzY4SDk2VjEzNmg2NHY3NC43aDEuMWM0LjYtMzAuNSAzOS43LTM4LjggNjkuNy0zOC44aDE3LjNjOTIuNCAwIDEwMy44IDMzLjEgMTAzLjggODIuNXYzNXptLTY0LTI4Ljl2MjIuOWMwIDIxLjctMy40IDMzLjgtMzguNCAzMy44aC00NS4zYy0yOC45IDAtNDQuMS02LjUtNDQuMS0zNS43di0xOWMwLTI5LjMgMTUuMi0zNS43IDQ0LjEtMzUuN2g0NS4zYzM1LS4yIDM4LjQgMTIgMzguNCAzMy43eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Bimobject(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M416 32H32C14.4 32 0 46.4 0 64v384c0 17.6 14.4 32 32 32h384c17.6 0 32-14.4 32-32V64c0-17.6-14.4-32-32-32zm-64 257.4c0 49.4-11.4 82.6-103.8 82.6h-16.9c-44.1 0-62.4-14.9-70.4-38.8h-.9V368H96V136h64v74.7h1.1c4.6-30.5 39.7-38.8 69.7-38.8h17.3c92.4 0 103.8 33.1 103.8 82.5v35zm-64-28.9v22.9c0 21.7-3.4 33.8-38.4 33.8h-45.3c-28.9 0-44.1-6.5-44.1-35.7v-19c0-29.3 15.2-35.7 44.1-35.7h45.3c35-.2 38.4 12 38.4 33.7z" />
        </Icon>
    </>
}
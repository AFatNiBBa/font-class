
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `crop` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/crop?s=light crop}
 * @preview ![crop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgNDAwQzUxMiA0MDguODQ0IDUwNC44NDQgNDE2IDQ5NiA0MTZINDE2VjQ5NkM0MTYgNTA0Ljg0NCA0MDguODQ0IDUxMiA0MDAgNTEyUzM4NCA1MDQuODQ0IDM4NCA0OTZWMTUwLjYyNUwxNTAuNjI1IDM4NEgzMzZDMzQ0Ljg0NCAzODQgMzUyIDM5MS4xNTYgMzUyIDQwMFMzNDQuODQ0IDQxNiAzMzYgNDE2SDExMkMxMDMuMTU2IDQxNiA5NiA0MDguODQ0IDk2IDQwMFYxMjhIMTZDNy4xNTYgMTI4IDAgMTIwLjg0NCAwIDExMlM3LjE1NiA5NiAxNiA5Nkg5NlYxNkM5NiA3LjE1NiAxMDMuMTU2IDAgMTEyIDBTMTI4IDcuMTU2IDEyOCAxNlYzNjEuMzc1TDM2MS4zNzUgMTI4SDE3NkMxNjcuMTU2IDEyOCAxNjAgMTIwLjg0NCAxNjAgMTEyUzE2Ny4xNTYgOTYgMTc2IDk2SDM5My4zNzVMNDg0LjY4OCA0LjY4OEM0OTAuOTM4IC0xLjU2MiA1MDEuMDYzIC0xLjU2MiA1MDcuMzEyIDQuNjg4UzUxMy41NjIgMjEuMDYzIDUwNy4zMTIgMjcuMzEyTDQxNiAxMTguNjI1VjM4NEg0OTZDNTA0Ljg0NCAzODQgNTEyIDM5MS4xNTYgNTEyIDQwMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Crop(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M512 400C512 408.844 504.844 416 496 416H416V496C416 504.844 408.844 512 400 512S384 504.844 384 496V150.625L150.625 384H336C344.844 384 352 391.156 352 400S344.844 416 336 416H112C103.156 416 96 408.844 96 400V128H16C7.156 128 0 120.844 0 112S7.156 96 16 96H96V16C96 7.156 103.156 0 112 0S128 7.156 128 16V361.375L361.375 128H176C167.156 128 160 120.844 160 112S167.156 96 176 96H393.375L484.688 4.688C490.938 -1.562 501.063 -1.562 507.312 4.688S513.562 21.063 507.312 27.312L416 118.625V384H496C504.844 384 512 391.156 512 400Z" />
        </Icon>
    </>
}
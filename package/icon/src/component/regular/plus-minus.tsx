
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `plus-minus` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/plus-minus?s=regular plus-minus}
 * @preview ![plus-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MCAyMDBIMTY4VjMyOEMxNjggMzQxLjI1IDE3OC43NSAzNTIgMTkyIDM1MlMyMTYgMzQxLjI1IDIxNiAzMjhWMjAwSDM0NEMzNTcuMjUgMjAwIDM2OCAxODkuMjUgMzY4IDE3NlMzNTcuMjUgMTUyIDM0NCAxNTJIMjE2VjI0QzIxNiAxMC43NSAyMDUuMjUgMCAxOTIgMFMxNjggMTAuNzUgMTY4IDI0VjE1Mkg0MEMyNi43NSAxNTIgMTYgMTYyLjc1IDE2IDE3NlMyNi43NSAyMDAgNDAgMjAwWk0zNTIgNDY0SDMyQzE4Ljc1IDQ2NCA4IDQ3NC43NSA4IDQ4OFMxOC43NSA1MTIgMzIgNTEySDM1MkMzNjUuMjUgNTEyIDM3NiA1MDEuMjUgMzc2IDQ4OFMzNjUuMjUgNDY0IDM1MiA0NjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function PlusMinus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M40 200H168V328C168 341.25 178.75 352 192 352S216 341.25 216 328V200H344C357.25 200 368 189.25 368 176S357.25 152 344 152H216V24C216 10.75 205.25 0 192 0S168 10.75 168 24V152H40C26.75 152 16 162.75 16 176S26.75 200 40 200ZM352 464H32C18.75 464 8 474.75 8 488S18.75 512 32 512H352C365.25 512 376 501.25 376 488S365.25 464 352 464Z" />
        </Icon>
    </>
}
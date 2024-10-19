
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `image-portrait` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/image-portrait?s=solid image-portrait}
 * @preview ![image-portrait](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzYgMEg0OEMyMS40OSAwIDAgMjEuNDkgMCA0OFY0NjRDMCA0OTAuNTEgMjEuNDkgNTEyIDQ4IDUxMkgzMzZDMzYyLjUxIDUxMiAzODQgNDkwLjUxIDM4NCA0NjRWNDhDMzg0IDIxLjQ5IDM2Mi41MSAwIDMzNiAwWk0xOTIgMTI4QzIyNy4zNDYgMTI4IDI1NiAxNTYuNjU0IDI1NiAxOTJTMjI3LjM0NiAyNTYgMTkyIDI1NlMxMjggMjI3LjM0NiAxMjggMTkyUzE1Ni42NTQgMTI4IDE5MiAxMjhaTTI4OCAzODRIOTZDODcuMTY0IDM4NCA4MCAzNzYuODM2IDgwIDM2OEM4MCAzMjMuODE2IDExNS44MTYgMjg4IDE2MCAyODhIMjI0QzI2OC4xODQgMjg4IDMwNCAzMjMuODE2IDMwNCAzNjhDMzA0IDM3Ni44MzYgMjk2LjgzNiAzODQgMjg4IDM4NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ImagePortrait(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M336 0H48C21.49 0 0 21.49 0 48V464C0 490.51 21.49 512 48 512H336C362.51 512 384 490.51 384 464V48C384 21.49 362.51 0 336 0ZM192 128C227.346 128 256 156.654 256 192S227.346 256 192 256S128 227.346 128 192S156.654 128 192 128ZM288 384H96C87.164 384 80 376.836 80 368C80 323.816 115.816 288 160 288H224C268.184 288 304 323.816 304 368C304 376.836 296.836 384 288 384Z" />
        </Icon>
    </>
}

import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `image-portrait` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/image-portrait?s=light image-portrait}
 * @preview ![image-portrait](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgMjU2QzIyNy4zNDYgMjU2IDI1NiAyMjcuMzQ2IDI1NiAxOTJTMjI3LjM0NiAxMjggMTkyIDEyOFMxMjggMTU2LjY1NCAxMjggMTkyUzE1Ni42NTQgMjU2IDE5MiAyNTZaTTE5MiAxNjBDMjA5LjY0NSAxNjAgMjI0IDE3NC4zNTUgMjI0IDE5MlMyMDkuNjQ1IDIyNCAxOTIgMjI0UzE2MCAyMDkuNjQ1IDE2MCAxOTJTMTc0LjM1NSAxNjAgMTkyIDE2MFpNMjI0IDI4OEgxNjBDMTE1LjgxNiAyODggODAgMzIzLjgxNiA4MCAzNjhDODAgMzc2LjgzNiA4Ny4xNjQgMzg0IDk2IDM4NFMxMTIgMzc2LjgzNiAxMTIgMzY4QzExMiAzNDEuNDkgMTMzLjQ5IDMyMCAxNjAgMzIwSDIyNEMyNTAuNTEgMzIwIDI3MiAzNDEuNDkgMjcyIDM2OEMyNzIgMzc2LjgzNiAyNzkuMTY0IDM4NCAyODggMzg0UzMwNCAzNzYuODM2IDMwNCAzNjhDMzA0IDMyMy44MTYgMjY4LjE4NCAyODggMjI0IDI4OFpNMzIwIDBINjRDMjguNjU0IDAgMCAyOC42NTQgMCA2NFY0NDhDMCA0ODMuMzQ2IDI4LjY1NCA1MTIgNjQgNTEySDMyMEMzNTUuMzQ2IDUxMiAzODQgNDgzLjM0NiAzODQgNDQ4VjY0QzM4NCAyOC42NTQgMzU1LjM0NiAwIDMyMCAwWk0zNTIgNDQ4QzM1MiA0NjUuNjQ1IDMzNy42NDUgNDgwIDMyMCA0ODBINjRDNDYuMzU1IDQ4MCAzMiA0NjUuNjQ1IDMyIDQ0OFY2NEMzMiA0Ni4zNTUgNDYuMzU1IDMyIDY0IDMySDMyMEMzMzcuNjQ1IDMyIDM1MiA0Ni4zNTUgMzUyIDY0VjQ0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ImagePortrait(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192 256C227.346 256 256 227.346 256 192S227.346 128 192 128S128 156.654 128 192S156.654 256 192 256ZM192 160C209.645 160 224 174.355 224 192S209.645 224 192 224S160 209.645 160 192S174.355 160 192 160ZM224 288H160C115.816 288 80 323.816 80 368C80 376.836 87.164 384 96 384S112 376.836 112 368C112 341.49 133.49 320 160 320H224C250.51 320 272 341.49 272 368C272 376.836 279.164 384 288 384S304 376.836 304 368C304 323.816 268.184 288 224 288ZM320 0H64C28.654 0 0 28.654 0 64V448C0 483.346 28.654 512 64 512H320C355.346 512 384 483.346 384 448V64C384 28.654 355.346 0 320 0ZM352 448C352 465.645 337.645 480 320 480H64C46.355 480 32 465.645 32 448V64C32 46.355 46.355 32 64 32H320C337.645 32 352 46.355 352 64V448Z" />
        </Icon>
    </>
}
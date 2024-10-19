
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `shield` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/shield?s=regular shield}
 * @preview ![shield](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjYuNSA4My43NUwyNzQuNSAzLjc1QzI2OC42MjUgMS4yNSAyNjIuMzQ0IDAgMjU2LjA2MiAwUzI0My41IDEuMjUgMjM3LjYyNSAzLjc1TDQ1LjYyNSA4My43NUMyNy43NSA5MS4xMjUgMTYgMTA4LjYyNSAxNiAxMjhDMTYgMzg1LjQ1MSAyMDUuNDM0IDUxMiAyNTUuOTM4IDUxMkMzMDUuMTk2IDUxMiA0OTYgMzg3LjM1NyA0OTYgMTI4QzQ5NiAxMDguNjI1IDQ4NC4yNSA5MS4xMjUgNDY2LjUgODMuNzVaTTI1NiA0NjMuODk4VjQ4LjA5NEwyNTYuMDYxIDQ4LjA2Nkw0NDggMTI4QzQ0OCAzMzAuNTM5IDMyMi40NjMgNDM2LjI1NCAyNTYgNDYzLjg5OFogIj48L3BhdGg+PC9zdmc+|width=32|height=32)
 */
export default function Shield(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M466.5 83.75L274.5 3.75C268.625 1.25 262.344 0 256.062 0S243.5 1.25 237.625 3.75L45.625 83.75C27.75 91.125 16 108.625 16 128C16 385.451 205.434 512 255.938 512C305.196 512 496 387.357 496 128C496 108.625 484.25 91.125 466.5 83.75ZM256 463.898V48.094L256.061 48.066L448 128C448 330.539 322.463 436.254 256 463.898Z " />
        </Icon>
    </>
}
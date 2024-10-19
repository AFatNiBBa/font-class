
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `p` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/p?s=solid p}
 * @preview ![p](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OCA0ODBDMjEuNSA0ODAgMCA0NTguNSAwIDQzMlY4MEMwIDUzLjUgMjEuNSAzMiA0OCAzMkgxNjBDMjQ4LjIxOSAzMiAzMjAgMTAzLjc4MSAzMjAgMTkyUzI0OC4yMTkgMzUyIDE2MCAzNTJIOTZWNDMyQzk2IDQ1OC41IDc0LjUgNDgwIDQ4IDQ4MFpNOTYgMjU2SDE2MEMxOTUuMjgxIDI1NiAyMjQgMjI3LjI4MSAyMjQgMTkyUzE5NS4yODEgMTI4IDE2MCAxMjhIOTZWMjU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function P(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M48 480C21.5 480 0 458.5 0 432V80C0 53.5 21.5 32 48 32H160C248.219 32 320 103.781 320 192S248.219 352 160 352H96V432C96 458.5 74.5 480 48 480ZM96 256H160C195.281 256 224 227.281 224 192S195.281 128 160 128H96V256Z" />
        </Icon>
    </>
}
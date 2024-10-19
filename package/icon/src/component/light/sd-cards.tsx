
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `sd-cards` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sd-cards?s=light sd-cards}
 * @preview ![sd-cards](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDAgNjRDMjMxLjE2NCA2NCAyMjQgNzEuMTYyIDIyNCA4MFYxNDRDMjI0IDE1Mi44MzYgMjMxLjE2NCAxNjAgMjQwIDE2MFMyNTYgMTUyLjgzNiAyNTYgMTQ0VjgwQzI1NiA3MS4xNjIgMjQ4LjgzNiA2NCAyNDAgNjRaTTMwNCA2NEMyOTUuMTY0IDY0IDI4OCA3MS4xNjIgMjg4IDgwVjE0NEMyODggMTUyLjgzNiAyOTUuMTY0IDE2MCAzMDQgMTYwUzMyMCAxNTIuODM2IDMyMCAxNDRWODBDMzIwIDcxLjE2MiAzMTIuODM2IDY0IDMwNCA2NFpNMzY4IDY0QzM1OS4xNjQgNjQgMzUyIDcxLjE2MiAzNTIgODBWMTQ0QzM1MiAxNTIuODM2IDM1OS4xNjQgMTYwIDM2OCAxNjBTMzg0IDE1Mi44MzYgMzg0IDE0NFY4MEMzODQgNzEuMTYyIDM3Ni44MzYgNjQgMzY4IDY0Wk0zMzYgNDgwSDk2QzYwLjY1NCA0ODAgMzIgNDUxLjM0NiAzMiA0MTZWMTEyQzMyIDEwMy4xNjQgMjQuODM2IDk2IDE2IDk2UzAgMTAzLjE2NCAwIDExMlY0MTZDMCA0NjkuMDIgNDIuOTggNTEyIDk2IDUxMkgzMzZDMzQ0LjgzNiA1MTIgMzUyIDUwNC44MzYgMzUyIDQ5NlMzNDQuODM2IDQ4MCAzMzYgNDgwWk0zODQgMEgyMzQuNTFDMjE3LjUzNSAwIDIwMS4yNTggNi43NDIgMTg5LjI1NCAxOC43NDRMOTguNzQ2IDEwOS4yNTRDODYuNzQyIDEyMS4yNTYgODAgMTM3LjUzNSA4MCAxNTQuNTFWMzY4QzgwIDQwMy4xOTkgMTA4LjgwMSA0MzIgMTQ0IDQzMkgzODRDNDE5LjE5OSA0MzIgNDQ4IDQwMy4xOTkgNDQ4IDM2OFY2NEM0NDggMjguNzk5IDQxOS4xOTkgMCAzODQgMFpNNDE2IDM2OEM0MTYgMzg1LjYgNDAxLjYgNDAwIDM4NCA0MDBIMTQ0QzEyNi40IDQwMCAxMTIgMzg1LjYgMTEyIDM2OFYxNTQuNTA0QzExMiAxNDYuMDE4IDExNS4zNzEgMTM3Ljg3OSAxMjEuMzczIDEzMS44NzdMMjExLjg3NyA0MS4zNzNDMjE3Ljg3OSAzNS4zNzEgMjI2LjAxOCAzMiAyMzQuNTA0IDMySDM4NEM0MDEuNiAzMiA0MTYgNDYuNCA0MTYgNjRWMzY4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SdCards(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M240 64C231.164 64 224 71.162 224 80V144C224 152.836 231.164 160 240 160S256 152.836 256 144V80C256 71.162 248.836 64 240 64ZM304 64C295.164 64 288 71.162 288 80V144C288 152.836 295.164 160 304 160S320 152.836 320 144V80C320 71.162 312.836 64 304 64ZM368 64C359.164 64 352 71.162 352 80V144C352 152.836 359.164 160 368 160S384 152.836 384 144V80C384 71.162 376.836 64 368 64ZM336 480H96C60.654 480 32 451.346 32 416V112C32 103.164 24.836 96 16 96S0 103.164 0 112V416C0 469.02 42.98 512 96 512H336C344.836 512 352 504.836 352 496S344.836 480 336 480ZM384 0H234.51C217.535 0 201.258 6.742 189.254 18.744L98.746 109.254C86.742 121.256 80 137.535 80 154.51V368C80 403.199 108.801 432 144 432H384C419.199 432 448 403.199 448 368V64C448 28.799 419.199 0 384 0ZM416 368C416 385.6 401.6 400 384 400H144C126.4 400 112 385.6 112 368V154.504C112 146.018 115.371 137.879 121.373 131.877L211.877 41.373C217.879 35.371 226.018 32 234.504 32H384C401.6 32 416 46.4 416 64V368Z" />
        </Icon>
    </>
}
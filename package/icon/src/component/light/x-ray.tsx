
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `x-ray` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/x-ray?s=light x-ray}
 * @preview ![x-ray](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYgNDQ4SDQ4MFY2NEg0OTZDNTA0LjgzNiA2NCA1MTIgNTYuODM2IDUxMiA0OFM1MDQuODM2IDMyIDQ5NiAzMkgxNkM3LjE2NCAzMiAwIDM5LjE2NCAwIDQ4UzcuMTY0IDY0IDE2IDY0SDMyVjQ0OEgxNkM3LjE2NCA0NDggMCA0NTUuMTY0IDAgNDY0UzcuMTY0IDQ4MCAxNiA0ODBINDk2QzUwNC44MzYgNDgwIDUxMiA0NzIuODM2IDUxMiA0NjRTNTA0LjgzNiA0NDggNDk2IDQ0OFpNNDQ4IDQ0OEg2NFY2NEg0NDhWNDQ4Wk0xMTIgMjI0SDI0MFYyNTZIMTQ0QzEzNS4yMDEgMjU2IDEyOCAyNjMuMTk5IDEyOCAyNzJTMTM1LjIwMSAyODggMTQ0IDI4OEgyNDBWMzIwSDE3MC42NjZDMTQ1LjEwNyAzMjAgMTI5Ljg2MyAzNDguNDg0IDE0NC4wNDEgMzY5Ljc1TDE2NS4zNzcgNDAxLjc1MkMxNzEuMzExIDQxMC42NTIgMTgxLjMwMyA0MTYgMTkyIDQxNkgzMTkuOTk4QzMzMC42OTkgNDE2IDM0MC42ODkgNDEwLjY1MiAzNDYuNjI1IDQwMS43NUwzNjcuOTU5IDM2OS43NUMzODIuMTM3IDM0OC40ODQgMzY2Ljg5MyAzMjAgMzQxLjMzNCAzMjBIMjcyVjI4OEgzNjhDMzc2LjgwMSAyODggMzg0IDI4MC44MDEgMzg0IDI3MlMzNzYuODAxIDI1NiAzNjggMjU2SDI3MlYyMjRINDAwQzQwOC44MDEgMjI0IDQxNiAyMTYuODAxIDQxNiAyMDhTNDA4LjgwMSAxOTIgNDAwIDE5MkgyNzJWMTYwSDM2OEMzNzYuODAxIDE2MCAzODQgMTUyLjgwMSAzODQgMTQ0UzM3Ni44MDEgMTI4IDM2OCAxMjhIMjcyVjExMkMyNzIgMTAzLjE5OSAyNjQuODAxIDk2IDI1NiA5NkMyNDcuMjAxIDk2IDI0MCAxMDMuMTk5IDI0MCAxMTJWMTI4SDE0NEMxMzUuMjAxIDEyOCAxMjggMTM1LjE5OSAxMjggMTQ0UzEzNS4yMDEgMTYwIDE0NCAxNjBIMjQwVjE5MkgxMTJDMTAzLjIwMSAxOTIgOTYgMTk5LjE5OSA5NiAyMDhTMTAzLjIwMSAyMjQgMTEyIDIyNFpNMzQxLjMzNCAzNTJMMzE5Ljk5OCAzODRMMTkyLjAwMiAzODQuMDAyTDE3MC42NjYgMzUySDM0MS4zMzRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function XRay(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M496 448H480V64H496C504.836 64 512 56.836 512 48S504.836 32 496 32H16C7.164 32 0 39.164 0 48S7.164 64 16 64H32V448H16C7.164 448 0 455.164 0 464S7.164 480 16 480H496C504.836 480 512 472.836 512 464S504.836 448 496 448ZM448 448H64V64H448V448ZM112 224H240V256H144C135.201 256 128 263.199 128 272S135.201 288 144 288H240V320H170.666C145.107 320 129.863 348.484 144.041 369.75L165.377 401.752C171.311 410.652 181.303 416 192 416H319.998C330.699 416 340.689 410.652 346.625 401.75L367.959 369.75C382.137 348.484 366.893 320 341.334 320H272V288H368C376.801 288 384 280.801 384 272S376.801 256 368 256H272V224H400C408.801 224 416 216.801 416 208S408.801 192 400 192H272V160H368C376.801 160 384 152.801 384 144S376.801 128 368 128H272V112C272 103.199 264.801 96 256 96C247.201 96 240 103.199 240 112V128H144C135.201 128 128 135.199 128 144S135.201 160 144 160H240V192H112C103.201 192 96 199.199 96 208S103.201 224 112 224ZM341.334 352L319.998 384L192.002 384.002L170.666 352H341.334Z" />
        </Icon>
    </>
}
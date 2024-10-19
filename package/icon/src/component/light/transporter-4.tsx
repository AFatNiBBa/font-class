
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `transporter-4` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/transporter-4?s=light transporter-4}
 * @preview ![transporter-4](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNDQgMjI0SDM2OEMzNzYuODQ0IDIyNCAzODQgMjE2Ljg0NCAzODQgMjA4UzM3Ni44NDQgMTkyIDM2OCAxOTJIMTQ0QzEzNS4xNTYgMTkyIDEyOCAxOTkuMTU2IDEyOCAyMDhTMTM1LjE1NiAyMjQgMTQ0IDIyNFpNMTc2IDE2MEgzMzZDMzQ0Ljg0NCAxNjAgMzUyIDE1Mi44NDQgMzUyIDE0NFMzNDQuODQ0IDEyOCAzMzYgMTI4SDE3NkMxNjcuMTU2IDEyOCAxNjAgMTM1LjE1NiAxNjAgMTQ0UzE2Ny4xNTYgMTYwIDE3NiAxNjBaTTgwIDM4NEg2NFYzNjhDNjQgMzU5LjE1NiA1Ni44NDQgMzUyIDQ4IDM1MlMzMiAzNTkuMTU2IDMyIDM2OFYzODRIMTZDNy4xNTYgMzg0IDAgMzkxLjE1NiAwIDQwMFM3LjE1NiA0MTYgMTYgNDE2SDMyVjQzMkMzMiA0NDAuODQ0IDM5LjE1NiA0NDggNDggNDQ4UzY0IDQ0MC44NDQgNjQgNDMyVjQxNkg4MEM4OC44NDQgNDE2IDk2IDQwOC44NDQgOTYgNDAwUzg4Ljg0NCAzODQgODAgMzg0Wk0yMjQgOTZIMjg4QzI5Ni44NDQgOTYgMzA0IDg4Ljg0NCAzMDQgODBTMjk2Ljg0NCA2NCAyODggNjRIMjI0QzIxNS4xNTYgNjQgMjA4IDcxLjE1NiAyMDggODBTMjE1LjE1NiA5NiAyMjQgOTZaTTIyNCAzMkgyODhDMjk2Ljg0NCAzMiAzMDQgMjQuODQ0IDMwNCAxNlMyOTYuODQ0IDAgMjg4IDBIMjI0QzIxNS4xNTYgMCAyMDggNy4xNTYgMjA4IDE2UzIxNS4xNTYgMzIgMjI0IDMyWk0zNjggNDQ4SDE0NEMxMTcuNTMxIDQ0OCA5NiA0NjkuNTMxIDk2IDQ5NkM5NiA1MDQuODQ0IDEwMy4xNTYgNTEyIDExMiA1MTJTMTI4IDUwNC44NDQgMTI4IDQ5NkMxMjggNDg3LjE3MiAxMzUuMTcyIDQ4MCAxNDQgNDgwSDM2OEMzNzYuODI4IDQ4MCAzODQgNDg3LjE3MiAzODQgNDk2QzM4NCA1MDQuODQ0IDM5MS4xNTYgNTEyIDQwMCA1MTJTNDE2IDUwNC44NDQgNDE2IDQ5NkM0MTYgNDY5LjUzMSAzOTQuNDY5IDQ0OCAzNjggNDQ4Wk00OTYgMTYwSDQ4MFYxNDRDNDgwIDEzNS4xNTYgNDcyLjg0NCAxMjggNDY0IDEyOFM0NDggMTM1LjE1NiA0NDggMTQ0VjE2MEg0MzJDNDIzLjE1NiAxNjAgNDE2IDE2Ny4xNTYgNDE2IDE3NlM0MjMuMTU2IDE5MiA0MzIgMTkySDQ0OFYyMDhDNDQ4IDIxNi44NDQgNDU1LjE1NiAyMjQgNDY0IDIyNFM0ODAgMjE2Ljg0NCA0ODAgMjA4VjE5Mkg0OTZDNTA0Ljg0NCAxOTIgNTEyIDE4NC44NDQgNTEyIDE3NlM1MDQuODQ0IDE2MCA0OTYgMTYwWk00MDAgMjU2SDExMkMxMDMuMTU2IDI1NiA5NiAyNjMuMTU2IDk2IDI3MlMxMDMuMTU2IDI4OCAxMTIgMjg4SDQwMEM0MDguODQ0IDI4OCA0MTYgMjgwLjg0NCA0MTYgMjcyUzQwOC44NDQgMjU2IDQwMCAyNTZaTTE3NiA0MTZIMzM2QzM0NC44NDQgNDE2IDM1MiA0MDguODQ0IDM1MiA0MDBTMzQ0Ljg0NCAzODQgMzM2IDM4NEgxNzZDMTY3LjE1NiAzODQgMTYwIDM5MS4xNTYgMTYwIDQwMFMxNjcuMTU2IDQxNiAxNzYgNDE2Wk0xNzYgMzUySDMzNkMzNDQuODQ0IDM1MiAzNTIgMzQ0Ljg0NCAzNTIgMzM2UzM0NC44NDQgMzIwIDMzNiAzMjBIMTc2QzE2Ny4xNTYgMzIwIDE2MCAzMjcuMTU2IDE2MCAzMzZTMTY3LjE1NiAzNTIgMTc2IDM1MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Transporter_4(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M144 224H368C376.844 224 384 216.844 384 208S376.844 192 368 192H144C135.156 192 128 199.156 128 208S135.156 224 144 224ZM176 160H336C344.844 160 352 152.844 352 144S344.844 128 336 128H176C167.156 128 160 135.156 160 144S167.156 160 176 160ZM80 384H64V368C64 359.156 56.844 352 48 352S32 359.156 32 368V384H16C7.156 384 0 391.156 0 400S7.156 416 16 416H32V432C32 440.844 39.156 448 48 448S64 440.844 64 432V416H80C88.844 416 96 408.844 96 400S88.844 384 80 384ZM224 96H288C296.844 96 304 88.844 304 80S296.844 64 288 64H224C215.156 64 208 71.156 208 80S215.156 96 224 96ZM224 32H288C296.844 32 304 24.844 304 16S296.844 0 288 0H224C215.156 0 208 7.156 208 16S215.156 32 224 32ZM368 448H144C117.531 448 96 469.531 96 496C96 504.844 103.156 512 112 512S128 504.844 128 496C128 487.172 135.172 480 144 480H368C376.828 480 384 487.172 384 496C384 504.844 391.156 512 400 512S416 504.844 416 496C416 469.531 394.469 448 368 448ZM496 160H480V144C480 135.156 472.844 128 464 128S448 135.156 448 144V160H432C423.156 160 416 167.156 416 176S423.156 192 432 192H448V208C448 216.844 455.156 224 464 224S480 216.844 480 208V192H496C504.844 192 512 184.844 512 176S504.844 160 496 160ZM400 256H112C103.156 256 96 263.156 96 272S103.156 288 112 288H400C408.844 288 416 280.844 416 272S408.844 256 400 256ZM176 416H336C344.844 416 352 408.844 352 400S344.844 384 336 384H176C167.156 384 160 391.156 160 400S167.156 416 176 416ZM176 352H336C344.844 352 352 344.844 352 336S344.844 320 336 320H176C167.156 320 160 327.156 160 336S167.156 352 176 352Z" />
        </Icon>
    </>
}
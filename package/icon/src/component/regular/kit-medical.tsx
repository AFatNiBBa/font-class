
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `kit-medical` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/kit-medical?s=regular kit-medical}
 * @preview ![kit-medical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMzJINjRDMjguNjU0IDMyIDAgNjAuNjUyIDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEg1MTJDNTQ3LjM0NiA0ODAgNTc2IDQ1MS4zNDYgNTc2IDQxNlY5NkM1NzYgNjAuNjUyIDU0Ny4zNDYgMzIgNTEyIDMyWk05NiA0MzJINjRDNTUuMTk5IDQzMiA0OCA0MjQuNzk5IDQ4IDQxNlY5NkM0OCA4Ny4xOTkgNTUuMTk5IDgwIDY0IDgwSDk2VjQzMlpNNDMyIDQzMkgxNDRWODBINDMyVjQzMlpNNTI4IDQxNkM1MjggNDI0Ljc5OSA1MjAuODAxIDQzMiA1MTIgNDMySDQ4MFY4MEg1MTJDNTIwLjgwMSA4MCA1MjggODcuMTk5IDUyOCA5NlY0MTZaTTIwOCAyODhIMjU2VjMzNkMyNTYgMzQ0LjgzNiAyNjMuMTY0IDM1MiAyNzIgMzUySDMwNEMzMTIuODM2IDM1MiAzMjAgMzQ0LjgzNiAzMjAgMzM2VjI4OEgzNjhDMzc2LjgzNiAyODggMzg0IDI4MC44MzYgMzg0IDI3MlYyNDBDMzg0IDIzMS4xNjIgMzc2LjgzNiAyMjQgMzY4IDIyNEgzMjBWMTc2QzMyMCAxNjcuMTYyIDMxMi44MzYgMTYwIDMwNCAxNjBIMjcyQzI2My4xNjQgMTYwIDI1NiAxNjcuMTYyIDI1NiAxNzZWMjI0SDIwOEMxOTkuMTY0IDIyNCAxOTIgMjMxLjE2MiAxOTIgMjQwVjI3MkMxOTIgMjgwLjgzNiAxOTkuMTY0IDI4OCAyMDggMjg4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function KitMedical(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M512 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H512C547.346 480 576 451.346 576 416V96C576 60.652 547.346 32 512 32ZM96 432H64C55.199 432 48 424.799 48 416V96C48 87.199 55.199 80 64 80H96V432ZM432 432H144V80H432V432ZM528 416C528 424.799 520.801 432 512 432H480V80H512C520.801 80 528 87.199 528 96V416ZM208 288H256V336C256 344.836 263.164 352 272 352H304C312.836 352 320 344.836 320 336V288H368C376.836 288 384 280.836 384 272V240C384 231.162 376.836 224 368 224H320V176C320 167.162 312.836 160 304 160H272C263.164 160 256 167.162 256 176V224H208C199.164 224 192 231.162 192 240V272C192 280.836 199.164 288 208 288Z" />
        </Icon>
    </>
}
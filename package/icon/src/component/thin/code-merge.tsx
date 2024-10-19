
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `code-merge` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/code-merge?s=thin code-merge}
 * @preview ![code-merge](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMjA4QzM1MS4zOTUgMjA4IDMyNC43ODMgMjMyLjQ3MyAzMjAuODA3IDI2NEgyMjRDMTQ5LjAxNiAyNjQgODggMjAzIDg4IDEyOFYxMjcuMTk1QzExOS41MjcgMTIzLjIxOSAxNDQgOTYuNjA5IDE0NCA2NEMxNDQgMjguNjUyIDExNS4zNDggMCA4MCAwQzQ0LjY1NCAwIDE2IDI4LjY1MiAxNiA2NEMxNiA5Ni42MDkgNDAuNDc1IDEyMy4yMTkgNzIgMTI3LjE5NVYzODQuODA1QzQwLjQ3NSAzODguNzgxIDE2IDQxNS4zOTEgMTYgNDQ4QzE2IDQ4My4zNDggNDQuNjU0IDUxMiA4MCA1MTJDMTE1LjM0OCA1MTIgMTQ0IDQ4My4zNDggMTQ0IDQ0OEMxNDQgNDE1LjM5MSAxMTkuNTI3IDM4OC43ODEgODggMzg0LjgwNVYxOTQuNTMxQzExMi43NzUgMjQ0LjkzIDE2NC4xNTQgMjgwIDIyNCAyODBIMzIwLjgwN0MzMjQuNzgzIDMxMS41MjcgMzUxLjM5NSAzMzYgMzg0IDMzNkM0MTkuMzQ4IDMzNiA0NDggMzA3LjM0OCA0NDggMjcyUzQxOS4zNDggMjA4IDM4NCAyMDhaTTEyOCA0NDhDMTI4IDQ3NC40NjkgMTA2LjQ2NyA0OTYgODAgNDk2UzMyIDQ3NC40NjkgMzIgNDQ4UzUzLjUzMyA0MDAgODAgNDAwUzEyOCA0MjEuNTMxIDEyOCA0NDhaTTgwIDExMkM1My41MzMgMTEyIDMyIDkwLjQ2OSAzMiA2NFM1My41MzMgMTYgODAgMTZTMTI4IDM3LjUzMSAxMjggNjRTMTA2LjQ2NyAxMTIgODAgMTEyWk0zODQgMzIwQzM1Ny41MzMgMzIwIDMzNiAyOTguNDY5IDMzNiAyNzJTMzU3LjUzMyAyMjQgMzg0IDIyNFM0MzIgMjQ1LjUzMSA0MzIgMjcyUzQxMC40NjcgMzIwIDM4NCAzMjBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CodeMerge(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 208C351.395 208 324.783 232.473 320.807 264H224C149.016 264 88 203 88 128V127.195C119.527 123.219 144 96.609 144 64C144 28.652 115.348 0 80 0C44.654 0 16 28.652 16 64C16 96.609 40.475 123.219 72 127.195V384.805C40.475 388.781 16 415.391 16 448C16 483.348 44.654 512 80 512C115.348 512 144 483.348 144 448C144 415.391 119.527 388.781 88 384.805V194.531C112.775 244.93 164.154 280 224 280H320.807C324.783 311.527 351.395 336 384 336C419.348 336 448 307.348 448 272S419.348 208 384 208ZM128 448C128 474.469 106.467 496 80 496S32 474.469 32 448S53.533 400 80 400S128 421.531 128 448ZM80 112C53.533 112 32 90.469 32 64S53.533 16 80 16S128 37.531 128 64S106.467 112 80 112ZM384 320C357.533 320 336 298.469 336 272S357.533 224 384 224S432 245.531 432 272S410.467 320 384 320Z" />
        </Icon>
    </>
}